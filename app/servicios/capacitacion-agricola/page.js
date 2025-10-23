'use client';

import React from 'react';
import { ArrowLeft, Sprout, BookOpen, Users, Award, ChevronRight } from 'lucide-react';

export default function CapacitacionAgricola() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
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
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-bold hover:from-green-700 hover:to-green-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <Sprout className="text-green-600" size={80} />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Capacitación <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent">Agrícola</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Fortalecemos las capacidades de nuestras comunidades campesinas e indígenas a través de talleres especializados en técnicas agrícolas sostenibles, manejo responsable de cultivos y producción orgánica certificada.
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
                <div className="w-2 h-12 bg-gradient-to-b from-green-600 to-green-400 rounded-full"></div>
                ¿Qué Ofrecemos?
              </h2>
              <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Nuestro programa de capacitación agrícola está diseñado para empoderar a las familias campesinas con conocimientos técnicos y prácticos que les permitan mejorar su productividad mientras preservan el medio ambiente y sus tradiciones ancestrales.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Combinamos sabiduría tradicional con innovación tecnológica para crear sistemas agrícolas resilientes, productivos y sostenibles que benefician tanto a la tierra como a las comunidades.
                </p>
              </div>
            </div>

            {/* Áreas de Capacitación */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Áreas de <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Capacitación</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Sprout,
                    title: "Agricultura Orgánica",
                    description: "Técnicas de cultivo sin químicos sintéticos, compostaje, biofertilizantes y control biológico de plagas",
                    gradient: "from-green-500 to-green-600"
                  },
                  {
                    icon: BookOpen,
                    title: "Manejo de Suelos",
                    description: "Conservación, mejoramiento y análisis de suelos para maximizar la productividad de forma sostenible",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: Users,
                    title: "Agroecología",
                    description: "Sistemas integrados de producción que respetan los ciclos naturales y la biodiversidad local",
                    gradient: "from-green-600 to-blue-600"
                  },
                  {
                    icon: Award,
                    title: "Certificación Orgánica",
                    description: "Apoyo para obtener certificaciones que permitan acceder a mejores mercados y precios justos",
                    gradient: "from-blue-600 to-green-600"
                  }
                ].map((area, index) => {
                  const Icon = area.icon;
                  return (
                    <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-br ${area.gradient} rounded-xl mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{area.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{area.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Metodología */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Nuestra <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Metodología</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { step: "01", title: "Talleres Prácticos", description: "Aprendizaje directo en campo con ejercicios reales" },
                  { step: "02", title: "Acompañamiento", description: "Seguimiento técnico continuo a cada familia" },
                  { step: "03", title: "Intercambio de Saberes", description: "Compartimos conocimientos entre comunidades" }
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg">
                      <div className="text-5xl font-bold text-green-600 opacity-20 mb-2">{item.step}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-green-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">¿Listo para Mejorar tus Cultivos?</h2>
                <p className="text-xl mb-8 opacity-90">Únete a nuestros talleres y transforma tu producción agrícola</p>
                <a href="/#contacto" className="inline-flex items-center gap-2 bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  Contáctanos Ahora
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