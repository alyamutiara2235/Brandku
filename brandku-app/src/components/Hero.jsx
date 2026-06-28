import React from 'react';

const Hero = ({ onTapped }) => {
  return (
    <section className="bg-gradient-to-b from-blue-50/30 to-white py-20 px-6 text-center">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 tracking-tight">
          Solusi Terbaik untuk Bisnismu
        </h1>
        <p className="text-gray-600 text-base md:text-lg mb-8 leading-relaxed max-w-xl mx-auto">
          Platform all-in-one untuk manajemen, pemasaran, dan pertumbuhan bisnis kecil.
        </p>
        
        <button 
          onClick={onTapped} 
          className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-200 text-sm"
        >
          Mulai Gratis
        </button>
      </div>
      
      <p id="tag-info" className="mt-4 text-blue-600 font-medium hidden"></p>
    </section>
  );
};

export default Hero;