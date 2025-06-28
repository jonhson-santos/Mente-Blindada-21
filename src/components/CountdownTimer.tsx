import React, { useState, useEffect } from 'react';
import { Clock } from 'lucide-react';

export const CountdownTimer: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState(10 * 60); // 10 minutes in seconds
  const [showTimer, setShowTimer] = useState(false);

  useEffect(() => {
    // Timer para mostrar o cronômetro após 5 minutos e 30 segundos (330 segundos)
    const showTimerDelay = setTimeout(() => {
      setShowTimer(true);
    }, 330000); // 5:30 em millisegundos

    return () => clearTimeout(showTimerDelay);
  }, []);

  useEffect(() => {
    if (!showTimer || timeLeft <= 0) return;

    const intervalId = setInterval(() => {
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timeLeft, showTimer]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  // Não renderiza nada se o timer ainda não deve aparecer
  if (!showTimer) {
    return null;
  }

  return (
    <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-red-500 shadow-2xl animate-pulse-slow">
      <div className="flex items-center justify-center gap-3 md:gap-4">
        <Clock className="w-6 h-6 md:w-8 md:h-8 text-white animate-bounce" />
        <div className="text-center">
          <div className="text-white text-xs md:text-sm font-inter font-medium mb-1">
            ⏰ ESSA DECISÃO VALE MAIS QUE OS PRÓXIMOS 6 MESES
          </div>
          <div className="text-white text-2xl md:text-3xl font-poppins font-bold">
            {formatTime(timeLeft)}
          </div>
        </div>
      </div>
    </div>
  );
};