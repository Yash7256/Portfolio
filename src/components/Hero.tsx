import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full bg-gray-900 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
          I'm a software engineer that rarely
          <span className="block sm:inline">
            {' '}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-transparent bg-clip-text">
              writes code.
            </span>
          </span>
        </h1>

        {/* Introduction Paragraph */}
        <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8 leading-relaxed">
          Hi, I'm Yash. I build digital experiences that live on the internet. 
          When I'm not busy herding pixels or debugging the universe, I'm probably 
          exploring the latest in web technologies or sipping on artisanal coffee.
        </p>

        {/* Current Projects Line */}
        <div className="text-gray-400 text-sm sm:text-base">
          <span>Building </span>
          <a 
            href="#" 
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
            onClick={(e) => {
              e.preventDefault();
              // Add your project navigation logic here
            }}
          >
            Project One
          </a>
          <span> and </span>
          <a 
            href="#" 
            className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200 font-medium"
            onClick={(e) => {
              e.preventDefault();
              // Add your project navigation logic here
            }}
          >
            Project Two
          </a>
          <span> when I'm not working on my day job.</span>
        </div>

        {/* CTA Button */}
        <div className="mt-10">
          <a
            href="#projects"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-cyan-600 hover:bg-cyan-700 transition-colors duration-200"
          >
            View My Work
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
