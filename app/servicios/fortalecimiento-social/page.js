'use client';

import React from 'react';
import { ArrowLeft, Users, Heart, MessageCircle, Handshake, ChevronRight, Sparkles } from 'lucide-react';

export default function FortalecimientoSocial() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-green-50 to-blue-50">
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
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 text-white rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-green-500 to-blue-500 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <Users className="text-blue-600" size={80} />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Fortalecimiento <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">Social</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Juntos somos más fuertes. Creamos espacios de encuentro, diálogo y construcción colectiva donde cada voz cuenta y cada comunidad aporta a la solución de nuestros desafíos comunes.
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
                <div className="w-2 h-12 bg-gradient-to-b from-blue-600 via-green-600 to-blue-600 rounded-full"></div>
                Construyendo Comunidad
              </h2>
              <div className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 p-8 rounded-3xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  El tejido social es la base de comunidades resilientes y prósperas. Trabajamos para fortalecer los lazos entre familias, organizaciones y generaciones, promoviendo el diálogo, la participación y la acción colectiva.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A través de encuentros, talleres y proyectos colaborativos, construimos espacios donde la solidaridad, el respeto mutuo y el trabajo en equipo son la norma para enfrentar juntos los retos de nuestras comunidades.
                </p>
              </div>
            </div>

            {/* Programas Sociales */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Nuestras <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Iniciativas</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: MessageCircle,
                    title: "Círculos de Diálogo",
                    description: "Espacios seguros donde compartimos experiencias, preocupaciones y construimos soluciones comunitarias",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: Handshake,
                    title: "Mingas Comunitarias",
                    description: "Trabajo colectivo para resolver necesidades comunes y fortalecer la solidaridad entre vecinos",
                    gradient: "from-green-500 to-green-600"
                  },
                  {
                    icon: Heart,
                    title: "Redes de Apoyo",
                    description: "Sistemas de ayuda mutua para situaciones de emergencia, enfermedad o dificultades económicas",
                    gradient: "from-blue-600 to-green-600"
                  },
                  {
                    icon: Sparkles,
                    title: "Liderazgo Comunitario",
                    description: "Formación de líderes locales que impulsen el desarrollo y la participación en sus territorios",
                    gradient: "from-green-600 to-blue-600"
                  }
                ].map((programa, index) => {
                  const Icon = programa.icon;
                  return (
                    <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-br ${programa.gradient} rounded-xl mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{programa.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{programa.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Áreas de Trabajo */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Áreas de <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Trabajo</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Participación Ciudadana", description: "Promovemos la voz activa en decisiones comunitarias", icon: "🗳️" },
                  { title: "Resolución de Conflictos", description: "Mediación pacífica de diferencias internas", icon: "🤝" },
                  { title: "Integración Generacional", description: "Unimos jóvenes, adultos y mayores en proyectos comunes", icon: "👨‍👩‍👧‍👦" },
                  { title: "Equidad de Género", description: "Espacios inclusivos con participación equitativa", icon: "⚖️" },
                  { title: "Salud Mental", description: "Apoyo emocional y bienestar psicológico comunitario", icon: "💚" },
                  { title: "Recreación y Deporte", description: "Actividades que fortalecen lazos y promueven salud", icon: "⚽" }
                ].map((area, index) => (
                  <div key={index} className="group bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{area.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Metodología Participativa */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Cómo <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Participar</span>
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Únete", description: "Asiste a nuestros encuentros comunitarios" },
                  { step: "02", title: "Comparte", description: "Expresa tus ideas y experiencias" },
                  { step: "03", title: "Colabora", description: "Participa en proyectos colectivos" },
                  { step: "04", title: "Transforma", description: "Sé agente de cambio en tu comunidad" }
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-400 to-green-400 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg h-full">
                      <div className="text-5xl font-bold text-blue-600 opacity-20 mb-2">{item.step}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Principios Comunitarios */}
            <div className="mb-16 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 rounded-3xl p-10 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Principios que nos Guían</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Respeto y escucha activa de todas las voces",
                  "Toma de decisiones colectivas y consensuadas",
                  "Solidaridad ante las dificultades de cualquier miembro",
                  "Transparencia en la gestión de recursos comunitarios",
                  "Inclusión sin discriminación de ningún tipo",
                  "Compromiso con el bien común sobre intereses individuales"
                ].map((principio, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <ChevronRight className="flex-shrink-0 mt-1" size={20} />
                    <span>{principio}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">¿Listo para Fortalecer tu Comunidad?</h2>
                <p className="text-xl mb-8 opacity-90">Juntos construimos un futuro mejor para todos</p>
                <a href="/#contacto" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  Únete a Nosotros
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