import React, { useState, useEffect } from 'react';
import { Heart } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Regivania</h1>
              <p className="text-sm text-pink-500">Ateliê & Papelaria Criativa</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-6">
            <a href="#inicio" className="text-gray-700 hover:text-pink-500 transition-colors">Início</a>
            <a href="#produtos" className="text-gray-700 hover:text-pink-500 transition-colors">Produtos</a>
            <a href="#sobre" className="text-gray-700 hover:text-pink-500 transition-colors">Sobre</a>
            <a href="#contato" className="text-gray-700 hover:text-pink-500 transition-colors">Contato</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;