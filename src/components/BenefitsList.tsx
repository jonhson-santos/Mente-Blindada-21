import React from 'react';
import { CheckCircle, Zap, Target, Brain, ListChecks } from 'lucide-react';

const benefits = [
  {
    icon: Zap,
    title: 'AULA BLACK: Como pensar, agir e monetizar como quem já venceu',
    description: 'Mentalidade milionária destravada'
  },
  {
    icon: Target,
    title: 'Toolkit Rápido: 7 Modelos de Renda Escalável pra Aplicar de Imediato',
    description: 'Fórmulas testadas e aprovadas'
  },
  {
    icon: Brain,
    title: 'Estratégia do "Produto Certeiro": Crie algo que ninguém consegue ignorar',
    description: 'O método dos R$ 10k/mês'
  },
  {
    icon: CheckCircle,
    title: 'Mentalidade de Alta Renda: Elimine a trava mental da pobreza',
    description: 'Ninguém fala disso!'
  },
  {
    icon: ListChecks,
    title: 'Checklist de Execução: Saia do "modo platônico" e vá pro campo',
    description: 'Passo a passo real de implementação'
  }
];

export const BenefitsList: React.FC = () => {
  return (
    <div className="space-y-4 md:space-y-6">
      {benefits.map((benefit, index) => {
        const Icon = benefit.icon;
        return (
          <div
            key={index}
            className="bg-black-light border-2 border-gold border-opacity-30 rounded-xl md:rounded-2xl p-4 md:p-6 hover:border-green-electric hover:border-opacity-50 transition-all duration-300 group hover:transform hover:scale-105"
          >
            <div className="flex items-start gap-3 md:gap-4">
              <div className="bg-gold-gradient p-2 md:p-3 rounded-lg md:rounded-xl group-hover:animate-bounce-slow flex-shrink-0">
                <Icon className="w-5 h-5 md:w-6 md:h-6 text-black" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-gold text-sm md:text-lg font-poppins font-bold mb-1 md:mb-2 group-hover:text-green-electric transition-colors leading-tight">
                  🔥 {benefit.title}
                </h3>
                <p className="text-gray-300 font-inter text-xs md:text-sm leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};