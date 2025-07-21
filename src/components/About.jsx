import React from 'react';
import { Heart, Star, Gift } from 'lucide-react';

const About = () => {
  return (
    <section id="sobre" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Sobre a <span className="text-pink-500">Regivania</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Empreendedora apaixonada por criar produtos únicos e especiais. 
              Cada peça é pensada e criada com muito amor, desde canecas personalizadas 
              até agendas e lembranças que tornam momentos cotidianos em algo extraordinário.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <Heart className="w-4 h-4 text-pink-500" />
                </div>
                <span className="text-gray-700">Produtos feitos com amor e dedicação</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <Star className="w-4 h-4 text-pink-500" />
                </div>
                <span className="text-gray-700">Personalização completa para cada cliente</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
                  <Gift className="w-4 h-4 text-pink-500" />
                </div>
                <span className="text-gray-700">Ideal para presentes únicos e especiais</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="bg-white rounded-3xl shadow-2xl p-8">
              <div className="w-full h-80 bg-gradient-to-br from-pink-200 via-pink-100 to-white rounded-2xl flex flex-col items-center justify-center space-y-4">
                <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800">Feito com Amor</h3>
                <p className="text-pink-600 text-center">Cada produto carrega um pedacinho do nosso coração</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;