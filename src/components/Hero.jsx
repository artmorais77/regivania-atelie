import React from 'react';
import { Heart, Sparkles, ShoppingBag, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="pt-20 min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-100 flex items-center">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-pink-100 rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-pink-500" />
              <span className="text-pink-600 text-sm font-medium">Produtos Artesanais</span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Criatividade
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-pink-600 block">
                Feita à Mão
              </span>
            </h1>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Canecas, agendas, lembranças e muito mais! Cada peça é única e criada com muito amor e dedicação para tornar seus momentos ainda mais especiais.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-8 py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2">
                <ShoppingBag className="w-5 h-5" />
                <span>Ver Produtos</span>
              </button>
              
              <button className="border-2 border-pink-500 text-pink-600 px-8 py-3 rounded-full hover:bg-pink-50 transition-colors flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Falar Comigo</span>
              </button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 transform rotate-3">
              <div className="w-full h-80 bg-gradient-to-br from-pink-200 to-pink-300 rounded-2xl flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto">
                    <Heart className="w-10 h-10 text-pink-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800">Regivania</h3>
                  <p className="text-pink-600 font-medium">Ateliê & Papelaria Criativa</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-200 rounded-full opacity-50"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-pink-100 rounded-full opacity-30"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;