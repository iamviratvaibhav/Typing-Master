import React, { useState } from 'react';
import Navbar from './Navbar';
const MultiPlayer = () => {
  const [creating, setCreating] = useState(false);
  const [roomName, setRoomName] = useState('');
  const [roomType, setRoomType] = useState('Words');
  const [roomLength, setRoomLength] = useState('25 words');
  const [joinCode, setJoinCode] = useState('');

  const handleCreateRoom = () => {
    setCreating(true);
    setTimeout(() => {
      setCreating(false);
      alert('Room created successfully!');
    }, 1500);
  };

  return (
    <> 
    <Navbar />
    <div className="min-h-screen bg-gradient-to-br py-20 from-black via-zinc-900 to-black text-white p-8">
      <h1 className="text-3xl font-semibold text-center mb-10">Multiplayer Arena</h1>

      <div className="flex flex-col md:flex-row justify-center gap-6">
        {/* Create Room */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 w-full max-w-md shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-green-400 text-xl">+</span> Create Room
          </h2>
          <input
            type="text"
            placeholder="Test Room"
            value={roomName}
            onChange={(e) => setRoomName(e.target.value)}
            className="w-full mb-3 px-3 py-2 bg-zinc-800 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <div className="flex gap-2 mb-4">
            <select
              value={roomType}
              onChange={(e) => setRoomType(e.target.value)}
              className="w-1/2 px-2 py-2 bg-zinc-800 border border-zinc-600 rounded"
            >
              <option>Words</option>
              <option>Time</option>
            </select>
            <select
              value={roomLength}
              onChange={(e) => setRoomLength(e.target.value)}
              className="w-1/2 px-2 py-2 bg-zinc-800 border border-zinc-600 rounded"
            >
              <option>25 words</option>
              <option>50 words</option>
              <option>100 words</option>
            </select>
          </div>
          <button
            onClick={handleCreateRoom}
            disabled={creating}
            className={`w-full py-2 rounded text-white font-medium transition ${
              creating
                ? 'bg-green-700 opacity-60 cursor-not-allowed'
                : 'bg-green-600 hover:bg-green-500'
            }`}
          >
            {creating ? '⏳ Creating...' : '+ Create Room'}
          </button>
        </div>

        {/* Join Room */}
        <div className="bg-zinc-900 border border-zinc-700 rounded-lg p-6 w-full max-w-md shadow">
          <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <span className="text-blue-400 text-xl">↪</span> Join Room
          </h2>
          <input
            type="text"
            placeholder="Room Code"
            value={joinCode}
            onChange={(e) => setJoinCode(e.target.value)}
            className="w-full mb-4 px-3 py-2 bg-zinc-800 border border-zinc-600 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button className="w-full py-2 bg-blue-600 hover:bg-blue-500 text-white rounded font-medium">
            ↪ Join Room
          </button>
        </div>
      </div>

      {/* Public Rooms */}
      <div className="mt-12 max-w-4xl mx-auto bg-zinc-900 border border-zinc-700 rounded-lg p-6 text-center shadow">
        <h3 className="text-lg font-semibold text-purple-400 mb-2"># Public Room</h3>
        <p className="text-zinc-500 text-sm">No public rooms available</p>
      </div>
    </div>
    </>
  );
};

export default MultiPlayer;
