import React, { useState } from 'react';
import { Play, Volume2, Maximize } from 'lucide-react';

export const VSLPlayer: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <div className="relative bg-black-light rounded-2xl md:rounded-3xl overflow-hidden border-2 border-gold shadow-2xl group hover:border-green-electric transition-all duration-300">
      <div className="aspect-video bg-gradient-to-br from-black-light to-black relative">
        {!isPlaying ? (
          // Simple black thumbnail with play button
          <div className="absolute inset-0 cursor-pointer" onClick={handlePlayClick}>
            {/* Simple black background with subtle gradient */}
            <div className="w-full h-full bg-gradient-to-br from-black via-black-light to-black relative">
              
              {/* Play button - Large and prominent */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-green-electric bg-opacity-95 rounded-full p-8 md:p-12 hover:bg-opacity-100 transition-all duration-300 transform hover:scale-110 animate-pulse shadow-2xl">
                  <Play className="w-16 h-16 md:w-20 md:h-20 text-black fill-current ml-1" />
                </div>
              </div>

              {/* Thumbnail overlay text - Focused on conversion */}
              <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6">
                <div className="bg-black bg-opacity-95 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-gold border-opacity-50">
                  <h3 className="text-gold text-xl md:text-3xl font-poppins font-bold mb-3 md:mb-4 text-center">
                    🔥 VÍDEO EXCLUSIVO
                  </h3>
                  <p className="text-white text-lg md:text-xl font-inter leading-relaxed text-center mb-4">
                    <span className="text-green-electric font-bold">SEGREDOS</span> que só quem tem mentor paga{' '}
                    <span className="text-gold font-bold">R$ 5.000+</span> pra ouvir
                  </p>
                  <div className="flex items-center justify-center gap-3">
                    <div className="bg-red-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold animate-pulse">
                      🔴 URGENTE
                    </div>
                    <span className="text-green-electric text-sm md:text-base font-bold animate-bounce">
                      ▶️ CLIQUE AQUI
                    </span>
                  </div>
                </div>
              </div>

              {/* Duration badge */}
              <div className="absolute top-4 md:top-6 right-4 md:right-6 bg-gold bg-opacity-90 text-black px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold">
                ⏱️ 15:30
              </div>

              {/* Exclusive badge */}
              <div className="absolute top-4 md:top-6 left-4 md:left-6 bg-green-electric bg-opacity-90 text-black px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-bold animate-pulse">
                🔒 EXCLUSIVO
              </div>

              {/* Subtle particles effect overlay */}
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold rounded-full animate-ping"></div>
                <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-green-electric rounded-full animate-pulse"></div>
                <div className="absolute bottom-1/3 left-1/2 w-1.5 h-1.5 bg-gold rounded-full animate-bounce"></div>
              </div>
            </div>
          </div>
        ) : (
          // YouTube embed when playing
          <div className="absolute inset-0">
            <iframe
              src="https://www.youtube.com/embed/1uisWWK7Yrc?si=2dUBKTqgO_ECrQP7&autoplay=1&controls=1&rel=0&modestbranding=1"
              title="VSL - Como Sair da Mediocridade"
              className="w-full h-full"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        )}

        {/* Audio indicator - only show when playing */}
        {isPlaying && (
          <div className="absolute top-2 md:top-4 right-2 md:right-4 bg-green-electric bg-opacity-20 rounded-full p-1.5 md:p-2 pointer-events-none">
            <Volume2 className="w-4 h-4 md:w-6 md:h-6 text-green-electric animate-pulse" />
          </div>
        )}

        {/* Fullscreen button - Mobile - only show when playing */}
        {isPlaying && (
          <div className="absolute top-2 md:top-4 left-2 md:left-4 bg-black bg-opacity-50 rounded-full p-1.5 md:p-2 md:hidden pointer-events-none">
            <Maximize className="w-4 h-4 text-white" />
          </div>
        )}
      </div>
    </div>
  );
};