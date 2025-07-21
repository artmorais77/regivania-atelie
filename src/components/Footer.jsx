import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-pink-600 rounded-full flex items-center justify-center">
              <Heart className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Regivania Ateliê</h3>
              <p className="text-sm text-gray-400">Papelaria Criativa</p>
            </div>
          </div>
          
          <p className="text-gray-400 max-w-md mx-auto">
            Criando momentos especiais através de produtos únicos e personalizados, 
            feitos com muito amor e dedicação.
          </p>
          
          <div className="pt-8 border-t border-gray-800">
            <p className="text-gray-500 text-sm">
              © 2025 Regivania Ateliê. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;