import React from 'react';
import { ParticlesBackground } from './components/ParticlesBackground';
import { CountdownTimer } from './components/CountdownTimer';
import { VSLPlayer } from './components/VSLPlayer';
import { BenefitsList } from './components/BenefitsList';
import { CTAButton } from './components/CTAButton';
import { ScrollReveal } from './components/ScrollReveal';
import { TimedContentReveal } from './components/TimedContentReveal';
import { AlertTriangle, Crown, Siren as Fire, Shield, Star } from 'lucide-react';

function App() {
  const handleCTAClick = () => {
    // Here you would integrate with your payment processor
    console.log('CTA clicked - redirect to checkout');
  };

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      <ParticlesBackground />
      
      {/* Hero Section - Mobile Responsive */}
      <section className="relative z-10 pt-8 md:pt-12 pb-12 md:pb-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-6 md:mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-6xl xl:text-7xl font-poppins font-black leading-tight mb-4 md:mb-6 px-2">
                <span className="text-white">🛑 VOCÊ NÃO VEIO ATÉ AQUI</span><br />
                <span className="text-gold">PRA CONTINUAR</span>{' '}
                <span className="text-green-electric animate-pulse">PEQUENO.</span>
              </h1>
              
              <div className="text-lg md:text-2xl lg:text-3xl font-poppins font-bold text-gold mb-3 md:mb-4 px-2">
                AQUI É O PONTO DE RUPTURA.
              </div>
              
              <div className="text-base md:text-xl lg:text-2xl font-inter text-gray-300 max-w-4xl mx-auto leading-relaxed px-4">
                OU VOCÊ FICA NO BÁSICO OU ENTRA PRO JOGO DOS QUE <span className="text-green-electric font-bold">TRANSBORDAM.</span>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="max-w-2xl mx-auto mb-8 md:mb-12">
              <CountdownTimer />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Timed Content Reveal */}
      <TimedContentReveal />

      {/* VSL Section - Mobile Responsive */}
      <section className="relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <VSLPlayer />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Core Message Section - Mobile Responsive */}
      <section className="relative z-10 py-12 md:py-20 bg-black-light">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-5xl mx-auto text-center">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-6 md:mb-8">
                <Crown className="w-8 h-8 md:w-12 md:h-12 text-gold animate-float" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-gold px-2">
                  A CHAVE PRA ESCANCARAR A PORTA
                </h2>
                <Crown className="w-8 h-8 md:w-12 md:h-12 text-gold animate-float" />
              </div>
              
              <div className="space-y-4 md:space-y-6 text-base md:text-lg lg:text-xl font-inter leading-relaxed px-4">
                <p className="text-white">
                  O que você comprou até aqui foi o <span className="text-gold font-bold">mapa pra começar.</span>
                </p>
                
                <p className="text-white">
                  Agora eu vou te dar a <span className="text-green-electric font-bold text-xl md:text-2xl">CHAVE</span> pra você escancarar a porta da nova economia e{' '}
                  <span className="text-gold font-bold">nunca mais voltar pra mediocridade.</span>
                </p>
                
                <p className="text-gray-300">
                  Você vai receber o que só quem tem mentor paga <span className="text-gold font-bold">caro</span> pra ouvir.
                </p>
                
                <div className="bg-gradient-to-r from-gold to-green-electric p-1 rounded-xl md:rounded-2xl mt-6 md:mt-8">
                  <div className="bg-black rounded-lg md:rounded-xl p-4 md:p-8">
                    <p className="text-white text-base md:text-xl font-poppins font-bold leading-relaxed">
                      Eu juntei os princípios que me tiraram da lama financeira, os atalhos que economizam{' '}
                      <span className="text-green-electric">5 ANOS</span> de tentativa e erro, os códigos que os{' '}
                      <span className="text-gold">"iniciados"</span> aplicam no silêncio – e coloquei tudo em um pacote que você pode acessar{' '}
                      <span className="text-green-electric font-black text-xl md:text-2xl">HOJE.</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Warning Section - Mobile Responsive */}
      <section className="relative z-10 py-12 md:py-16">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-red-600 to-red-800 p-4 md:p-8 rounded-2xl md:rounded-3xl border-2 border-red-500">
                <div className="flex items-start gap-3 md:gap-4">
                  <Shield className="w-6 h-6 md:w-8 md:h-8 text-white mt-1 animate-pulse flex-shrink-0" />
                  <div>
                    <h3 className="text-white text-lg md:text-xl font-poppins font-bold mb-3 md:mb-4">
                      Mas deixa eu te falar direto, sem rodeios:
                    </h3>
                    <p className="text-white text-sm md:text-lg font-inter leading-relaxed mb-3 md:mb-4">
                      👉 Se você é desses que <span className="font-bold">enrola</span>, não investe em si, sempre espera a próxima segunda-feira…{' '}
                      <span className="font-bold">essa oferta não é pra você.</span>
                    </p>
                    <div className="text-center">
                      <div className="text-white text-xl md:text-2xl font-poppins font-bold mb-2">Agora…</div>
                      <p className="text-white text-base md:text-xl font-inter">
                        Se você entendeu que <span className="text-gold font-bold">R$ 97 é RIDÍCULO</span> perto do que você pode desbloquear aqui,{' '}
                        <span className="text-green-electric font-bold text-lg md:text-2xl">ENTÃO VEM.</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Benefits Section - Mobile Responsive */}
      <section className="relative z-10 py-12 md:py-20 bg-gradient-to-b from-black to-black-light">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center mb-12 md:mb-16">
              <div className="flex items-center justify-center gap-2 md:gap-3 mb-4 md:mb-6">
                <Fire className="w-8 h-8 md:w-10 md:h-10 text-gold animate-bounce" />
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-gold px-2">
                  O QUE VOCÊ RECEBE:
                </h2>
                <Fire className="w-8 h-8 md:w-10 md:h-10 text-gold animate-bounce" />
              </div>
            </div>
          </ScrollReveal>

          <div className="max-w-4xl mx-auto">
            <ScrollReveal delay={300}>
              <BenefitsList />
            </ScrollReveal>
          </div>

          {/* Bonus Section - Mobile Responsive */}
          <ScrollReveal delay={500}>
            <div className="max-w-3xl mx-auto mt-12 md:mt-16">
              <div className="bg-gradient-to-r from-gold to-green-electric p-1 rounded-2xl md:rounded-3xl">
                <div className="bg-black rounded-2xl md:rounded-3xl p-6 md:p-8 text-center">
                  <Star className="w-10 h-10 md:w-12 md:h-12 text-gold mx-auto mb-3 md:mb-4 animate-spin" />
                  <h3 className="text-xl md:text-2xl font-poppins font-bold text-gold mb-3 md:mb-4">
                    🎁 BÔNUS SURPRESA EXCLUSIVO
                  </h3>
                  <p className="text-white text-base md:text-lg font-inter">
                    Método secreto que só desbloqueia aqui por R$97
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Explosion Phrase Section - Mobile Responsive */}
      <section className="relative z-10 py-12 md:py-16 bg-black-light">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <div className="text-2xl md:text-3xl lg:text-4xl font-poppins font-bold text-gold mb-6 md:mb-8 px-4 leading-tight">
                💣 Tem gente que passa a vida sem ouvir o que você vai acessar aqui por{' '}
                <span className="text-green-electric">R$97.</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section - Mobile Responsive */}
      <section className="relative z-10 py-12 md:py-20">
        <div className="container mx-auto px-4">
          <ScrollReveal>
            <div className="text-center">
              <div className="max-w-2xl mx-auto">
                <CTAButton 
                  onClick={handleCTAClick}
                  className="w-full text-lg md:text-2xl py-6 md:py-8 mb-6 md:mb-8"
                >
                  SIM, EU QUERO ENTRAR NESSE JOGO DE GENTE GRANDE!
                </CTAButton>
                
                <div className="bg-red-600 text-white p-4 md:p-6 rounded-xl md:rounded-2xl border-2 border-red-500 animate-pulse">
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <AlertTriangle className="w-5 h-5 md:w-6 md:h-6" />
                    <span className="font-poppins font-bold text-base md:text-lg">ÚLTIMA CHANCE</span>
                  </div>
                  <p className="text-base md:text-xl font-inter">
                    ⚠️ Essa condição só aparece uma vez. Se sair dessa página, já era.
                  </p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Footer - Mobile Responsive */}
      <footer className="relative z-10 py-6 md:py-8 bg-black-dark border-t border-gold border-opacity-20">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500 font-inter text-xs md:text-sm">
            © 2025 Mentoria BLACK - Todos os direitos reservados
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;