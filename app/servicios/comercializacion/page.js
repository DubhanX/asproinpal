'use client';

import React from 'react';
import { ArrowLeft, ShoppingBag, TrendingUp, Globe, Handshake, ChevronRight, DollarSign } from 'lucide-react';

export default function Comercializacion() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="/asproinpal.jpg" 
                alt="ASPROINPAL Logo" 
                className="h-16 w-16 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ASPROINPAL
              </span>
            </div>
            <a 
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 text-white rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <ShoppingBag className="text-green-600" size={80} />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Comercialización <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Justa</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Conectamos a productores campesinos con mercados justos y redes de comercio solidario. Tu trabajo merece un precio digno y acceso a mejores oportunidades.
            </p>
          </div>
        </div>
      </section>

      {/* Contenido Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            
            {/* Descripción Detallada */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-6 flex items-center gap-3">
                <div className="w-2 h-12 bg-gradient-to-b from-green-600 via-blue-600 to-green-600 rounded-full"></div>
                Comercio con Propósito
              </h2>
              <div className="bg-gradient-to-br from-green-50 via-blue-50 to-green-50 p-8 rounded-3xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Creemos en un comercio que beneficie tanto a productores como a consumidores. Eliminamos intermediarios innecesarios y creamos canales directos que garantizan precios justos para los campesinos y productos de calidad para los compradores.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Nuestro modelo de comercialización fortalece las economías locales, preserva la agricultura tradicional y promueve relaciones comerciales basadas en la confianza y el beneficio mutuo.
                </p>
              </div>
            </div>

            {/* Servicios de Comercialización */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Cómo Te <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Ayudamos</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Globe,
                    title: "Acceso a Mercados",
                    description: "Te conectamos con mercados locales, regionales y nacionales que valoran productos campesinos",
                    gradient: "from-green-500 to-green-600"
                  },
                  {
                    icon: Handshake,
                    title: "Comercio Directo",
                    description: "Facilitamos la venta directa eliminando intermediarios que reducen tus ganancias",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: DollarSign,
                    title: "Precios Justos",
                    description: "Negociamos precios que reconozcan el valor real de tu trabajo y productos",
                    gradient: "from-green-600 to-blue-600"
                  },
                  {
                    icon: TrendingUp,
                    title: "Crecimiento Sostenible",
                    description: "Acompañamos el escalamiento de tu producción y ventas de forma planificada",
                    gradient: "from-blue-600 to-green-600"
                  }
                ].map((servicio, index) => {
                  const Icon = servicio.icon;
                  return (
                    <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-br ${servicio.gradient} rounded-xl mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{servicio.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{servicio.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Canales de Comercialización */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Nuestros <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Canales</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Mercados Campesinos", description: "Ferias y mercados locales con venta directa al consumidor", icon: "🏪" },
                  { title: "Tiendas Solidarias", description: "Red de tiendas comprometidas con el comercio justo", icon: "🏬" },
                  { title: "Compras Institucionales", description: "Contratos con restaurantes, hoteles y empresas", icon: "🏢" },
                  { title: "Plataformas Digitales", description: "Venta online a través de canales certificados", icon: "💻" },
                  { title: "Exportación", description: "Apoyo para acceder a mercados internacionales", icon: "🌍" },
                  { title: "Cooperativas", description: "Fortalecimiento de ventas colectivas organizadas", icon: "🤝" }
                ].map((canal, index) => (
                  <div key={index} className="group bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{canal.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{canal.title}</h3>
                    <p className="text-gray-600 text-sm">{canal.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Beneficios */}
            <div className="mb-16 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 rounded-3xl p-10 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Beneficios del Comercio Justo</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Mejores precios para tus productos",
                  "Relaciones comerciales a largo plazo",
                  "Eliminación de intermediarios abusivos",
                  "Acceso a certificaciones de calidad",
                  "Capacitación en negociación comercial",
                  "Apoyo en logística y transporte"
                ].map((beneficio, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <ChevronRight className="flex-shrink-0 mt-1" size={20} />
                    <span>{beneficio}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-600 via-blue-600 to-green-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">¿Listo para Vender Mejor?</h2>
                <p className="text-xl mb-8 opacity-90">Únete a nuestra red de comercio justo y mejora tus ingresos</p>
                <a href="/#contacto" className="inline-flex items-center gap-2 bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  Empieza Ahora
                  <ChevronRight size={24} />
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">© 2025 ASPROINPAL. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}