import React from 'react';
import { Link } from 'react-router-dom';

const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-3">
      <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white/30">
        <img 
          src="/assets/images/pf.png" 
          alt="Aman Raj"
          className="w-full h-full object-cover"
          loading="eager"
        />
      </div>
      <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
        AMAN RAJ
      </span>
    </Link>
  );
};

export default Logo;
