import React, { useState } from 'react';
import { X, Heart, Star, MessageCircle, Phone, ChevronLeft, ChevronRight } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');

  const productDetails = {
    "Agendas Personalizadas": {
      images: [
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
      ],
      fullDescription: "Agendas 2025 totalmente personalizadas com seu nome, foto ou frase especial. Ideais para organização pessoal ou presentes únicos.",
      colors: ["Rosa", "Lilás", "Azul", "Verde"],
      sizes: ["A4", "A5", "Pocket"],
      price: "R$ 35,00",
      features: [
        "📅 Calendário completo 2025",
        "📝 Páginas para anotações",
        "🎨 Design personalizado",
        "📖 Capa resistente",
        "💝 Embalagem especial"
      ],
      testimonials: [
        { name: "Maria Silva", text: "Adorei minha agenda! Super bem feita e linda!" },
        { name: "Ana Costa", text: "Perfeita para organizar meu dia a dia!" }
      ]
    },
    "Canecas Personalizadas": {
      images: [
        "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
      ],
      fullDescription: "Canecas de cerâmica de alta qualidade com impressão personalizada. Perfeitas para café da manhã especial ou presentes únicos.",
      colors: ["Branca", "Preta", "Colorida"],
      sizes: ["300ml", "350ml", "500ml"],
      price: "R$ 25,00",
      features: [
        "☕ Cerâmica de qualidade",
        "🎨 Impressão de alta resolução",
        "🔥 Resistente ao micro-ondas",
        "🧼 Fácil de lavar",
        "💝 Embalagem de presente"
      ],
      testimonials: [
        { name: "João Santos", text: "Caneca linda e de ótima qualidade!" },
        { name: "Carla Rocha", text: "Meu café ficou ainda mais gostoso!" }
      ]
    }
  };

  if (!isOpen || !product) return null;

  const details = productDetails[product.title] || {
    images: [product.image],
    fullDescription: product.description,
    colors: ["Personalizado"],
    sizes: ["Único"],
    price: "Consultar",
    features: ["Produto artesanal", "Feito com amor"],
    testimonials: []
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === details.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? details.images.length - 1 : prev - 1
    );
  };

  const handleWhatsApp = () => {
    const message = `Olá! Tenho interesse em ${product.title}.
    
Detalhes:
- Cor: ${selectedColor || 'A definir'}
- Tamanho: ${selectedSize || 'A definir'}

Pode me passar mais informações?`;
    
    const whatsappUrl = `https://wa.me/5585999999999?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between p-6 border-b">
          <h2 className="text-2xl font-bold text-gray-800">{product.title}</h2>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 p-6">
          <div className="space-y-4">
            <div className="relative">
              <div
                className="w-full h-80 rounded-xl flex items-center justify-center text-6xl relative overflow-hidden"
                style={{ background: details.images[currentImageIndex] }}
              >
                {product.icon}
                
                {details.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-all"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
              </div>
              
              {details.images.length > 1 && (
                <div className="flex justify-center space-x-2 mt-4">
                  {details.images.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`w-3 h-3 rounded-full transition-colors ${
                        index === currentImageIndex ? 'bg-pink-500' : 'bg-gray-300'
                      }`}
                    />
                  ))}
                </div>
              )}
            </div>

            <div className="bg-pink-50 rounded-xl p-4">
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-pink-600">{details.price}</span>
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <Star className="w-4 h-4 text-yellow-400 fill-current" />
                  <span className="text-sm text-gray-600 ml-2">(50+ avaliações)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Descrição</h3>
              <p className="text-gray-600 leading-relaxed">{details.fullDescription}</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Cores Disponíveis</h3>
              <div className="flex flex-wrap gap-2">
                {details.colors.map((color, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      selectedColor === color
                        ? 'bg-pink-500 text-white border-pink-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Tamanhos</h3>
              <div className="flex flex-wrap gap-2">
                {details.sizes.map((size, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded-full border transition-colors ${
                      selectedSize === size
                        ? 'bg-pink-500 text-white border-pink-500'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-pink-300'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Características</h3>
              <div className="space-y-2">
                {details.features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-3 pt-4">
              <button
                onClick={handleWhatsApp}
                className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-full hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Fazer Pedido via WhatsApp</span>
              </button>
              
              <button
                onClick={() => window.open('tel:+5585999999999', '_self')}
                className="w-full border-2 border-pink-500 text-pink-600 py-3 rounded-full hover:bg-pink-50 transition-colors flex items-center justify-center space-x-2"
              >
                <Phone className="w-5 h-5" />
                <span>Ligar Agora</span>
              </button>
            </div>

            {details.testimonials.length > 0 && (
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-3">O que dizem nossos clientes</h3>
                <div className="space-y-3">
                  {details.testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-3">
                      <div className="flex items-center space-x-2 mb-2">
                        <Heart className="w-4 h-4 text-pink-500 fill-current" />
                        <span className="font-medium text-sm">{testimonial.name}</span>
                      </div>
                      <p className="text-sm text-gray-600">"{testimonial.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;