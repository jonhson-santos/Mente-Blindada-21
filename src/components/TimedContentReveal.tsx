import React, { useState, useEffect } from 'react';
import { AlertTriangle } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TimedContentReveal: React.FC = () => {
  const [showRuptura, setShowRuptura] = useState(false);
  
  useEffect(() => {
    // Timer para 5 minutos e 45 segundos (345 segundos)
    const timer = setTimeout(() => {
      setShowRuptura(true);
    }, 345000); // 5:45 em millisegundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Bloco "Se você quer viver de migalha" - Aparece primeiro */}
      {!showRuptura && (
        <section className="relative z-10 py-12 md:py-20 bg-gradient-to-r from-black-light to-black">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-8 md:mb-16">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-white mb-4 md:mb-6 px-2">
                  <span className="text-red-500">Se você quer viver de migalha, ignora essa página.</span>
                </h2>
                <div className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-gold mb-6 md:mb-8">
                  Agora…
                </div>
                <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                  Se você <span className="text-green-electric font-bold">CANSOU</span> de ganhar pouco, ser invisível e viver sempre no quase,{' '}
                  <span className="text-gold font-bold text-xl md:text-2xl">ENTÃO SEJA BEM-VINDO.</span>
                </p>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* Bloco "PONTO DE RUPTURA" - Aparece após 5:45 */}
      {showRuptura && (
        <section className="relative z-10 py-12 md:py-20 bg-gradient-to-r from-red-900 to-black">
          <div className="container mx-auto px-4">
            <ScrollReveal>
              <div className="text-center mb-8 md:mb-16">
                <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 md:px-8 py-2 md:py-3 rounded-full font-poppins font-bold text-sm md:text-lg mb-6 md:mb-8 animate-shake">
                  <AlertTriangle className="w-4 h-4 md:w-6 md:h-6" />
                  PONTO DE RUPTURA
                </div>
                
                <h2 className="text-2xl md:text-4xl lg:text-5xl font-poppins font-black text-white mb-4 md:mb-6 leading-tight px-2">
                  🛑 VOCÊ NÃO VEIO ATÉ AQUI<br />
                  <span className="text-gold">PRA CONTINUAR</span>{' '}
                  <span className="text-green-electric animate-pulse">PEQUENO.</span>
                </h2>
                
                <div className="text-xl md:text-2xl lg:text-3xl font-poppins font-bold text-gold mb-3 md:mb-4 px-2">
                  AQUI É O PONTO DE RUPTURA.
                </div>
                
                <div className="text-lg md:text-xl lg:text-2xl font-inter text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                  OU VOCÊ FICA NO BÁSICO OU ENTRA PRO JOGO DOS QUE <span className="text-green-electric font-bold">TRANSBORDAM.</span>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}
    </>
  );
};