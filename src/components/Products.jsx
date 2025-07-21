import React, { useState } from 'react';
import ProductModal from './ProductModal';

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const products = [
    {
      title: "Agendas Personalizadas",
      description: "Agendas únicas para organizar seu ano com estilo",
      icon: "📅",
      image: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
    },
    {
      title: "Canecas Personalizadas",
      description: "Canecas especiais para momentos únicos",
      icon: "☕",
      image: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
    },
    {
      title: "Cadernos Criativos",
      description: "Cadernos personalizados para suas ideias",
      icon: "📖",
      image: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)"
    },
    {
      title: "Camisetas Personalizadas",
      description: "Camisetas com designs exclusivos",
      icon: "👕",
      image: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
    },
    {
      title: "Flores de Cetim",
      description: "Flores artesanais para decoração",
      icon: "🌸",
      image: "linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)"
    },
    {
      title: "Marcadores de Página",
      description: "Marcadores únicos para seus livros favoritos",
      icon: "🔖",
      image: "linear-gradient(135deg, #d299c2 0%, #fef9d7 100%)"
    }
  ];

  const openModal = (product) => {
    setSelectedProduct(product);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedProduct(null);
    setIsModalOpen(false);
  };

  return (
    <>
      <section id="produtos" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Nossos <span className="text-pink-500">Produtos</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Cada produto é criado com carinho e atenção aos detalhes, 
              pensando em tornar seus momentos ainda mais especiais.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="group hover:transform hover:scale-105 transition-all duration-300">
                <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl p-6 h-full">
                  <div 
                    className="w-full h-48 rounded-xl mb-6 flex items-center justify-center text-4xl"
                    style={{ background: product.image }}
                  >
                    {product.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">{product.title}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <button 
                    onClick={() => openModal(product)}
                    className="text-pink-500 font-medium hover:text-pink-600 flex items-center space-x-1 transition-colors"
                  >
                    <span>Saiba mais</span>
                    <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ProductModal 
        product={selectedProduct}
        isOpen={isModalOpen}
        onClose={closeModal}
      />
    </>
  );
};

export default Products;