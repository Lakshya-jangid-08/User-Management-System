import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

function HomePage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-cyan-200 to-white p-4">
      <div className="text-center max-w-2xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold text-black mb-6">
          Welcome to User Management
        </h1>
        <p className="text-xl md:text-2xl text-black/90 mb-10">
          Manage your users with ease. Get started by clicking the button below.
        </p>
        <button
          onClick={() => navigate('/user-list/page/1')}
          className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-bold text-white rounded-full shadow-2xl transition-all duration-300 ease-out hover:ring-8 hover:ring-cyan-300/50"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-br from-blue-600 to-cyan-500"></span>
          <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-0 h-0 bg-cyan-400 rounded-full group-hover:w-64 group-hover:h-64 opacity-10 transition-all duration-500 ease-out"></span>
          <span className="relative flex items-center gap-2 text-lg md:text-xl">
            Get Started <FaArrowRight className="transition-transform group-hover:translate-x-1" />
          </span>
        </button>
      </div>
    </div>
  );
}

export default HomePage;