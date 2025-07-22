import React from 'react';
import { useNavigate } from 'react-router-dom';
import StartTyping from './StartTyping';
import { FaChartLine, FaUsers, FaChartBar, FaSlidersH, FaRegKeyboard } from 'react-icons/fa';
import { LuCircleArrowRight } from "react-icons/lu";
import Navbar from './Navbar';
const HeroSection = () => {
  const navigate = useNavigate();

  const features = [
    {
      title: 'Real-time Feedback',
      desc: 'Get instant feedback of your typing speed and accuracy.',
      icon: <FaChartLine className="text-teal-400 text-2xl" />,
    },
    {
      title: 'Challenge Friends',
      desc: 'Compete with friends in real-time typing races.',
      icon: <FaUsers className="text-teal-400 text-2xl" />,
    },
    {
      title: 'Detailed Statistics',
      desc: 'Track progress over time with comprehensive stats.',
      icon: <FaChartBar className="text-teal-400 text-2xl" />,
    },
    {
      title: 'Customizable Options',
      desc: 'Personalize themes, sounds, and typing modes.',
      icon: <FaSlidersH className="text-teal-400 text-2xl" />,
    },
    {
      title: 'Minimalist Interface',
      desc: 'Focus only on typing with a clean UI experience.',
      icon: <FaRegKeyboard className="text-teal-400 text-2xl" />,
    },
  ];

  const handelStartTestNow =(e) =>{
    e.preventDefault();
    navigate('/startTyping')
  }
  return (
    <>
      
    <Navbar />
      <section className="text-white text-center py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-black">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
          Master Your Typing Skills <br /> with <span className="text-teal-400">TypeFast</span>
        </h2>
        <p className="text-zinc-400 max-w-xl mx-auto mb-8">
          Practice typing, challenge friends, and track improvements with real-time stats in a sleek, minimalist interface.
        </p>
        <button onClick={handelStartTestNow}
        className="bg-teal-500 hover:bg-teal-400 text-black font-semibold py-2 px-6 rounded-md shadow-lg transition">
          <div className='flex items-center'>Start Typing Now < LuCircleArrowRight className='ml-2 size-4'/></div>
        </button>
      </section>


      <section className="bg-black text-white py-20 px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          Why Choose <span className="text-teal-400 underline">TypeFast?</span>
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((f, index) => (
            <div key={index} className="bg-zinc-900 border border-zinc-700 p-6 rounded-xl shadow-sm">
              <div className="mb-2">{f.icon}</div>
              <h4 className="font-semibold text-lg mb-1">{f.title}</h4>
              <p className="text-sm text-zinc-400">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HeroSection;
