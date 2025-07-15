import React, { useState, useEffect, useRef } from 'react';
import { FaClock, FaFont } from 'react-icons/fa';
import sampleWords from './sampleWords';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer
} from 'recharts';


const StartTyping = () => {
  const [typed, setTyped] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef(null); // useRef instead of useState
  const [duration, setDuration] = useState(30);
  const [isRunning, setIsRunning] = useState(false);
  const [accuracy, setAccuracy] = useState(100);
  const [wpm, setWPM] = useState(0);
  const inputRef = useRef();
  const [wpmHistory, setWpmHistory] = useState([]);
  const [intervalId, setIntervalId] = useState(null);
  const typedRef = useRef('');


  const wordRefs = useRef([]); // <-- array of refs for each word

  useEffect(() => {
    if (isRunning && timer >= duration) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      setIsRunning(false);
    }
  }, [timer, duration, isRunning]);

  const startTest = () => {
    if (intervalId) clearInterval(intervalId);

    setTyped('');
    setWPM(0);
    setAccuracy(100);
    setWpmHistory([]);
    setTimer(0);
    setIsRunning(true);

    inputRef.current?.focus();
    // every 5 second graph -------------------
    const id = setInterval(() => {
      setTimer((prevTimer) => {
        const newTime = prevTimer + 1;

        // Stop the test when time is up
        if (newTime >= duration) {
          clearInterval(id);
          setIsRunning(false);
        }

        // Calculate WPM every 5 seconds only
        if (newTime % 5 === 0) {
          const wordsTyped = typedRef.current.trim().split(' ').filter(Boolean).length;
          const currentWPM = Math.round((wordsTyped / newTime) * 60);
          setWPM(currentWPM);

          setWpmHistory((prevHistory) => [
            ...prevHistory,
            { time: newTime, wpm: currentWPM },
          ]);
        }

        return newTime;
      });
    }, 1000);

  };


  const handleInputChange = (e) => {
    const value = e.target.value;
    setTyped(value);
    typedRef.current = value;

    // Character-based accuracy
    const correctChars = sampleWords.join(' ')
      .split('')
      .filter((c, i) => value[i] === c).length;
    const totalChars = value.length;
    setAccuracy(((correctChars / (totalChars || 1)) * 100).toFixed(2));

    // Word-based WPM (real-time)
    const wordsTyped = value.trim().split(' ').filter(Boolean);
    setWPM(Math.round((wordsTyped.length / (timer || 1)) * 60));

    // 🔁 Scroll the current word into view
    const currentIndex = wordsTyped.length;
    if (wordRefs.current[currentIndex]) {
      wordRefs.current[currentIndex].scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      });
    }
  };


  useEffect(() => {
    return () => {
      if (intervalId) { clearInterval(intervalId); }
    };
  }, [intervalId]);


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
            <FaFont className="text-teal-400" /> sampleWords
          </div>
          {[10, 30, 60].map((val) => (
            <button
              key={val}
              onClick={() => setDuration(val)}
              disabled={isRunning}
              className={`px-2 py-1 border rounded text-xs ${duration === val ? 'border-teal-400 text-teal-400' : 'border-zinc-600 text-zinc-400'
                }`}
            >
              {val}s
            </button>
          ))}
        </div>

        <div className="overflow-x-auto w-full max-w-3xl h-12 mx-auto mb-6 relative border-y border-zinc-700 no-scrollbar">
          <div className="whitespace-nowrap font-mono text-xl md:text-2xl tracking-wide px-2">
            {sampleWords.map((word, i) => (
              <span
                key={i}
                ref={(el) => (wordRefs.current[i] = el)} // attach ref
                className={`inline-block mr-4 ${typed.split(' ')[i] === word ? 'text-white font-bold' : 'text-zinc-500'}`}
              >
                {word}
              </span>
            ))}
          </div>
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

      <div className="w-full max-w-3xl mx-auto mt-12 bg-zinc-800 p-4 rounded shadow">
        <h2 className="text-white text-lg mb-4">Typing Speed Chart (WPM over Time)</h2>
        <ResponsiveContainer width="100%" height={200}>
          <LineChart data={wpmHistory}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="time" label={{ value: 'Time (s)', position: 'insideBottomRight', offset: -5 }} />
            {/* <XAxis dataKey={(item) => item.time / 5} label={{ value: 'Time (5s)', position: 'insideBottomRight', offset: -5 }} /> */}
            <YAxis label={{ value: 'WPM', angle: -90, position: 'insideLeft' }} />
            <Tooltip />
            <Line type="monotone" dataKey="wpm" stroke="#14b8a6" strokeWidth={2} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default StartTyping;
