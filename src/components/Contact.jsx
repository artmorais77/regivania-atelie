import React from 'react';
import { Phone, Instagram, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contato" className="py-20 bg-gradient-to-br from-pink-500 to-pink-600">
      <div className="container mx-auto px-4">
        <div className="text-center text-white mb-12">
          <h2 className="text-4xl font-bold mb-4">Entre em Contato</h2>
          <p className="text-lg text-pink-100">
            Vamos criar algo especial juntos! Entre em contato e vamos conversar sobre seu projeto.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <a 
            href="https://wa.me/5585999999999" 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors group"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">WhatsApp</h3>
            <p className="text-pink-100">Fale comigo no WhatsApp</p>
          </a>
          
          <a 
            href="https://instagram.com/regivaniaatelie" 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors group"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
              <Instagram className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Instagram</h3>
            <p className="text-pink-100">@regivaniaatelie</p>
          </a>
          
          <a 
            href="tel:+5585999999999" 
            className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors group"
          >
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/30 transition-colors">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Telefone</h3>
            <p className="text-pink-100">Ligue para mim</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;