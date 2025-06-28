import React from 'react';
import { ArrowRight, Zap } from 'lucide-react';

interface CTAButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const CTAButton: React.FC<CTAButtonProps> = ({ children, className = '', onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`
        relative overflow-hidden
        bg-green-gradient 
        text-black font-poppins font-bold 
        px-6 md:px-8 py-4 md:py-6 rounded-xl md:rounded-2xl 
        border-2 border-green-electric
        shadow-2xl
        transform hover:scale-105 active:scale-95
        transition-all duration-300
        animate-glow
        group
        ${className}
      `}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white via-opacity-20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
      
      <div className="relative flex items-center justify-center gap-2 md:gap-3">
        <Zap className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:animate-bounce" />
        <span className="text-center leading-tight">{children}</span>
        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:translate-x-1 transition-transform" />
      </div>
    </button>
  );
};