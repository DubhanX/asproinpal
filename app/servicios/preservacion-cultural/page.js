'use client';

import React from 'react';
import { ArrowLeft, Heart, Book, Music, Users, ChevronRight, Sparkles } from 'lucide-react';

export default function PreservacionCultural() {
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
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 text-white rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-green-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <Heart className="text-blue-600" size={80} />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Preservación <span className="bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 bg-clip-text text-transparent">Cultural</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Nuestra identidad es nuestro tesoro. Trabajamos por rescatar, preservar y transmitir los conocimientos ancestrales, tradiciones y saberes de nuestras comunidades indígenas y campesinas.
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
                Nuestra Identidad, Nuestra Fuerza
              </h2>
              <div className="bg-gradient-to-br from-blue-50 via-green-50 to-blue-50 p-8 rounded-3xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  La cultura de nuestras comunidades es un patrimonio invaluable que debe ser protegido y transmitido a las nuevas generaciones. Cada tradición, cada lengua, cada práctica ancestral es parte de nuestra identidad colectiva.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  A través de programas de documentación, educación y celebración cultural, trabajamos para que nuestros saberes ancestrales continúen vivos y fortalezcan nuestra comunidad.
                </p>
              </div>
            </div>

            {/* Programas Culturales */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Nuestros <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Programas</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: Book,
                    title: "Saberes Ancestrales",
                    description: "Documentación y transmisión de conocimientos tradicionales sobre agricultura, medicina natural y cosmogonía",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: Music,
                    title: "Arte y Tradición",
                    description: "Talleres de música, danza, artesanía y expresiones artísticas propias de nuestras comunidades",
                    gradient: "from-green-500 to-green-600"
                  },
                  {
                    icon: Users,
                    title: "Encuentros Intergeneracionales",
                    description: "Espacios donde mayores comparten con jóvenes la historia, tradiciones y valores comunitarios",
                    gradient: "from-blue-600 to-green-600"
                  },
                  {
                    icon: Sparkles,
                    title: "Fiestas Tradicionales",
                    description: "Organización y promoción de celebraciones que fortalecen nuestra identidad cultural",
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

            {/* Áreas de Preservación */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Áreas de <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Preservación</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Lenguas Nativas", description: "Enseñanza y documentación de idiomas ancestrales", icon: "🗣️" },
                  { title: "Gastronomía", description: "Recetas y técnicas culinarias tradicionales", icon: "🍲" },
                  { title: "Medicina Tradicional", description: "Conocimientos sobre plantas medicinales", icon: "🌿" },
                  { title: "Tejidos y Artesanías", description: "Técnicas ancestrales de elaboración", icon: "🧶" },
                  { title: "Mitos y Leyendas", description: "Historias orales de nuestros ancestros", icon: "📖" },
                  { title: "Rituales y Ceremonias", description: "Prácticas espirituales comunitarias", icon: "✨" }
                ].map((area, index) => (
                  <div key={index} className="group bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{area.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{area.title}</h3>
                    <p className="text-gray-600 text-sm">{area.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Valores Culturales */}
            <div className="mb-16 bg-gradient-to-r from-blue-600 via-green-600 to-blue-600 rounded-3xl p-10 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Valores que Defendemos</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Respeto por la Madre Tierra",
                  "Solidaridad y trabajo comunitario",
                  "Transmisión intergeneracional de saberes",
                  "Identidad y orgullo de nuestras raíces",
                  "Armonía con la naturaleza",
                  "Fortalecimiento del tejido social"
                ].map((valor, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <ChevronRight className="flex-shrink-0 mt-1" size={20} />
                    <span>{valor}</span>
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
                <h2 className="text-4xl font-bold mb-4">¿Quieres Preservar Nuestra Cultura?</h2>
                <p className="text-xl mb-8 opacity-90">Únete a nuestros programas culturales y fortalece tu identidad</p>
                <a href="/#contacto" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  Participa Ahora
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
