// StartTyping.jsx
import React, { useState, useEffect, useRef } from 'react';
import { FaClock, FaFont } from 'react-icons/fa';

const sampleWords = 'word buy too frighten some saw offer possible never chest'.split(' ');

const StartTyping = () => {
  const [typed, setTyped] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [timer, setTimer] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [duration, setDuration] = useState(30); // default to 30 seconds
  const [isRunning, setIsRunning] = useState(false);
  const [accuracy, setAccuracy] = useState(100);
  const [wpm, setWPM] = useState(0);
  const inputRef = useRef();

  useEffect(() => {
    if (timer >= duration && isRunning) {
      clearInterval(intervalId);
      setIsRunning(false);
    }
  }, [timer, duration, isRunning]);

  const startTest = () => {
    setTyped('');
    setStartTime(Date.now());
    setTimer(0);
    setIsRunning(true);
    const id = setInterval(() => setTimer(prev => prev + 1), 1000);
    setIntervalId(id);
    inputRef.current.focus();
  };

  const handleInputChange = (e) => {
    const value = e.target.value;
    setTyped(value);
    const correctChars = sampleWords.join(' ').split('').filter((c, i) => value[i] === c).length;
    setAccuracy(((correctChars / value.length) * 100).toFixed(2) || 100);
    const wordsTyped = value.trim().split(' ').filter(Boolean).length;
    setWPM(Math.round((wordsTyped / (timer || 1)) * 60));
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4 text-teal-400">Start Typing Test</h1>

        {/* Options */}
        <div className="flex items-center justify-center gap-4 text-sm mb-8">
          <div className="flex items-center gap-2">
            <FaClock className="text-teal-400" /> time
          </div>
          <div className="flex items-center gap-2">
            <FaFont className="text-teal-400" /> words
          </div>
          {[10, 30, 60].map((val) => (
            <button
              key={val}
              onClick={() => setDuration(val)}
              className={`px-2 py-1 border rounded text-xs ${duration === val ? 'border-teal-400 text-teal-400' : 'border-zinc-600 text-zinc-400'}`}
            >
              {val}s
            </button>
          ))}
        </div>

        {/* Typing Words */}
        <div className="text-xl md:text-2xl font-mono tracking-wide mb-6 max-w-3xl mx-auto">
          {sampleWords.map((word, i) => (
            <span key={i} className={typed.split(' ')[i] === word ? 'text-white font-bold' : 'text-zinc-500'}>
              {word + ' '}
            </span>
          ))}
        </div>

        {/* Input Box */}
        <input
          ref={inputRef}
          disabled={!isRunning}
          value={typed}
          onChange={handleInputChange}
          className="w-full max-w-3xl mx-auto px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-md focus:outline-none focus:ring focus:ring-teal-500"
          placeholder="Start typing here..."
        />

        {/* Stats */}
        <div className="mt-6 text-zinc-400 text-sm">
          Time: {timer}s | WPM: {wpm} | Accuracy: {accuracy}%
        </div>

        <button
          onClick={startTest}
          className="mt-6 bg-teal-500 hover:bg-teal-400 text-black px-6 py-2 rounded-md font-semibold shadow-md"
        >
          {isRunning ? 'Restart' : 'Start Test'}
        </button>
      </div>
    </div>
  );
};

export default StartTyping;
