'use client';
import React from 'react';
import { ArrowLeft, Scale, FileText, Shield, Users, ChevronRight, BookOpen } from 'lucide-react';

export default function AsesoriaLegal() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50">
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
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold hover:from-blue-700 hover:to-blue-600 transition-all transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-blue-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <Scale className="text-blue-600" size={80} />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Asesoría <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">Legal</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Defendemos los derechos de las comunidades campesinas e indígenas. Brindamos apoyo jurídico en temas de tierras, acceso a programas gubernamentales y protección de derechos fundamentales.
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
                <div className="w-2 h-12 bg-gradient-to-b from-blue-600 to-blue-400 rounded-full"></div>
                ¿En Qué Te Ayudamos?
              </h2>
              <div className="bg-gradient-to-br from-blue-50 to-green-50 p-8 rounded-3xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Nuestro equipo de asesores legales especializados en derecho agrario y comunitario trabaja para garantizar que cada familia campesina e indígena conozca y ejerza plenamente sus derechos.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Facilitamos el acceso a la justicia, orientamos en procedimientos legales y acompañamos en la defensa del territorio y los recursos naturales de nuestras comunidades.
                </p>
              </div>
            </div>

            {/* Servicios Legales */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Servicios <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Legales</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: FileText,
                    title: "Titulación de Tierras",
                    description: "Apoyo en trámites de formalización, saneamiento y protección de la propiedad de la tierra",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: Shield,
                    title: "Defensa de Derechos",
                    description: "Representación y asesoría en casos de vulneración de derechos campesinos e indígenas",
                    gradient: "from-green-500 to-green-600"
                  },
                  {
                    icon: BookOpen,
                    title: "Acceso a Programas",
                    description: "Orientación para acceder a subsidios, créditos y programas estatales de apoyo al campo",
                    gradient: "from-blue-600 to-green-600"
                  },
                  {
                    icon: Users,
                    title: "Derecho Comunitario",
                    description: "Asesoría en la organización, estatutos y representación legal de asociaciones campesinas",
                    gradient: "from-green-600 to-blue-600"
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

            {/* Proceso */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Cómo <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Trabajamos</span>
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Consulta Inicial", description: "Escuchamos tu caso de forma gratuita" },
                  { step: "02", title: "Análisis Legal", description: "Evaluamos las opciones jurídicas" },
                  { step: "03", title: "Plan de Acción", description: "Diseñamos una estrategia legal" },
                  { step: "04", title: "Acompañamiento", description: "Te representamos hasta lograr resultados" }
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

            {/* Derechos Fundamentales */}
            <div className="mb-16 bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-10 text-white">
              <h2 className="text-3xl font-bold mb-6 text-center">Derechos que Defendemos</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  "Derecho a la tierra y al territorio",
                  "Acceso a recursos naturales",
                  "Consulta previa y libre determinación",
                  "Seguridad alimentaria",
                  "Acceso a programas estatales",
                  "Protección de conocimientos ancestrales"
                ].map((derecho, index) => (
                  <div key={index} className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-4 rounded-xl">
                    <ChevronRight className="flex-shrink-0 mt-1" size={20} />
                    <span className="text-sm">{derecho}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-4xl font-bold mb-4">¿Necesitas Asesoría Legal?</h2>
                <p className="text-xl mb-8 opacity-90">Estamos aquí para defender tus derechos y los de tu comunidad</p>
                <a href="/#contacto" className="inline-flex items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  Solicita una Consulta
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