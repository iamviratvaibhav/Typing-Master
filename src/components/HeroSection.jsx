import React from 'react';

const HeroSection = () => {
  return (
    // <section className="text-white text-center py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-black">
    //   <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
    //     Master Your Typing Skills <br /> with <span className="text-teal-400">TypeFast</span>
    //   </h2>
    //   <p className="text-zinc-400 max-w-xl mx-auto mb-8">
    //     Practice typing, challenge friends, and track improvements with real-time stats in a sleek, minimalist interface.
    //   </p>
    //   <button className="bg-teal-500 hover:bg-teal-400 text-black font-semibold py-2 px-6 rounded-md shadow-lg transition">
    //     Start Typing Now →
    //   </button>
    // </section>

     <section className="text-white text-center py-24 px-4 bg-gradient-to-b from-black via-zinc-900 to-black">
      <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
        Master Your Typing Skills <br /> with <span className="text-teal-400">TypeFast</span>
      </h2>
      <p className="text-zinc-400 max-w-xl mx-auto mb-8">
        Practice typing, challenge friends, and track improvements with real-time stats in a sleek, minimalist interface.
      </p>
      <button className="bg-teal-500 hover:bg-teal-400 text-black font-semibold py-2 px-6 rounded-md shadow-lg transition">
        Start Typing Now →
      </button>
    </section>
  );
};

export default HeroSection;
