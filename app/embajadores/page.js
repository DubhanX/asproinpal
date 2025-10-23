'use client';

import React from 'react';
import { ArrowLeft, Award, Heart, Star, Instagram, Facebook, Mail } from 'lucide-react';

export default function Embajadores() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-yellow-50 via-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <img 
                src="https://i.postimg.cc/bJ0FWxty/descarga.png" 
                alt="ASPROINPAL Logo" 
                className="h-16 w-16 object-contain"
              />
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ASPROINPAL
              </span>
            </div>
            <a 
              href="/"
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-500 via-green-600 to-blue-600 text-white rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 opacity-10"></div>
          <div className="absolute top-20 left-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-300 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-green-400 to-blue-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <Award className="text-yellow-600" size={80} />
                </div>
              </div>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-800 mb-6">
              Nuestros <span className="bg-gradient-to-r from-yellow-600 via-green-600 to-blue-600 bg-clip-text text-transparent">Embajadores</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
              Personas extraordinarias que dedican su tiempo, talento y pasión para amplificar la voz de nuestras comunidades campesinas e indígenas.
            </p>
          </div>
        </div>
      </section>

      {/* Embajadores Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto">
            
            {/* Intro */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-4">
                Voces que <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Inspiran</span>
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Nuestros embajadores son líderes comunitarios, artistas, deportistas y profesionales comprometidos con el desarrollo rural y la justicia social.
              </p>
            </div>

            {/* Grid de Embajadores */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
              {[
                {
                  nombre: "María Fernanda Gómez",
                  rol: "Embajadora de Cultura",
                  descripcion: "Artista y líder comunitaria que promueve las artesanías tradicionales y el rescate de saberes ancestrales. Ha capacitado a más de 200 mujeres en técnicas de tejido.",
                  imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
                  areas: ["Artesanías", "Cultura", "Empoderamiento Femenino"],
                  social: { instagram: "@mariafgomez", facebook: "mariafgomez" }
                },
                {
                  nombre: "Carlos Andrés Pérez",
                  rol: "Embajador de Agricultura Sostenible",
                  descripcion: "Ingeniero agrónomo especializado en permacultura. Lidera proyectos de agricultura orgánica que han transformado la producción de 50 familias campesinas.",
                  imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
                  areas: ["Agricultura Orgánica", "Permacultura", "Capacitación"],
                  social: { instagram: "@carlosperez_agro", facebook: "carlosperezagro" }
                },
                {
                  nombre: "Ana Lucía Rodríguez",
                  rol: "Embajadora de Juventud Rural",
                  descripcion: "Joven líder que inspira a nuevas generaciones a valorar el campo. Creadora de contenido digital que visibiliza la vida campesina con orgullo y autenticidad.",
                  imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
                  areas: ["Juventud Rural", "Redes Sociales", "Innovación"],
                  social: { instagram: "@analucia_rural", facebook: "analuciarurallife" }
                },
                {
                  nombre: "Pedro Martínez",
                  rol: "Embajador de Comercio Justo",
                  descripcion: "Empresario social que conecta productores campesinos con mercados justos. Ha facilitado la comercialización de más de 100 toneladas de productos orgánicos.",
                  imagen: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
                  areas: ["Comercio Justo", "Emprendimiento", "Mercados"],
                  social: { instagram: "@pedromartinez_fair", facebook: "pedromartinezcomercio" }
                },
                {
                  nombre: "Sofía Vargas",
                  rol: "Embajadora de Derechos Campesinos",
                  descripcion: "Abogada especializada en derecho agrario. Defiende los derechos territoriales de comunidades indígenas y campesinas, logrando importantes victorias legales.",
                  imagen: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop",
                  areas: ["Derechos Humanos", "Justicia Social", "Defensa Legal"],
                  social: { instagram: "@sofiavargas_derechos", facebook: "sofiavargasabogada" }
                },
                {
                  nombre: "Miguel Ángel Torres",
                  rol: "Embajador de Seguridad Alimentaria",
                  descripcion: "Chef comprometido con la gastronomía campesina. Promueve productos locales en restaurantes y forma a cocineros en el uso de ingredientes tradicionales.",
                  imagen: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
                  areas: ["Gastronomía", "Productos Locales", "Turismo Gastronómico"],
                  social: { instagram: "@chefmiguel_local", facebook: "chefmigueltorres" }
                }
              ].map((embajador, index) => (
                <div 
                  key={index} 
                  className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transform hover:-translate-y-3 transition-all duration-500"
                >
                  {/* Imagen */}
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={embajador.imagen} 
                      alt={embajador.nombre}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-1">{embajador.nombre}</h3>
                      <p className="text-yellow-300 font-semibold flex items-center gap-2">
                        <Star size={16} fill="currentColor" />
                        {embajador.rol}
                      </p>
                    </div>
                  </div>

                  {/* Contenido */}
                  <div className="p-6">
                    <p className="text-gray-600 leading-relaxed mb-4">
                      {embajador.descripcion}
                    </p>

                    {/* Áreas de Trabajo */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {embajador.areas.map((area, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 bg-gradient-to-r from-green-100 to-blue-100 text-green-700 text-xs font-semibold rounded-full"
                        >
                          {area}
                        </span>
                      ))}
                    </div>

                    {/* Redes Sociales */}
                    <div className="flex gap-3 pt-4 border-t border-gray-200">
                      <a 
                        href={`https://instagram.com/${embajador.social.instagram.replace('@', '')}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-gray-600 hover:text-pink-600 transition-colors"
                      >
                        <Instagram size={18} />
                        <span className="text-sm">{embajador.social.instagram}</span>
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Conviértete en Embajador */}
            <div className="mt-20 bg-gradient-to-r from-yellow-500 via-green-600 to-blue-600 rounded-3xl p-12 text-center text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
              </div>
              
              <div className="relative z-10">
                <Award className="mx-auto mb-6 text-white" size={64} />
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  ¿Quieres Ser Embajador?
                </h2>
                <p className="text-xl mb-8 opacity-95 max-w-2xl mx-auto">
                  Si compartes nuestra visión y quieres usar tu voz, talento o profesión para apoyar a las comunidades campesinas e indígenas, ¡te estamos buscando!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a 
                    href="/#contacto" 
                    className="inline-flex items-center justify-center gap-2 bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-2xl"
                  >
                    <Heart size={24} />
                    Postúlate Ahora
                  </a>
                  <a 
                    href="mailto:embajadores@asproinpal.org" 
                    className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm text-white border-2 border-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/20 transition-all transform hover:scale-105"
                  >
                    <Mail size={24} />
                    Escríbenos
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Requisitos */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
              ¿Qué Buscamos en un <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Embajador?</span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-6">
              {[
                { icon: "❤️", titulo: "Pasión por el Campo", descripcion: "Compromiso genuino con el desarrollo rural y las comunidades campesinas" },
                { icon: "🌟", titulo: "Influencia Positiva", descripcion: "Capacidad de inspirar y movilizar a otros hacia nuestra causa" },
                { icon: "🤝", titulo: "Trabajo en Equipo", descripcion: "Disposición para colaborar con la comunidad ASPROINPAL" },
                { icon: "📢", titulo: "Visibilidad", descripcion: "Presencia en redes sociales o medios para amplificar nuestro mensaje" },
                { icon: "🎯", titulo: "Alineación de Valores", descripcion: "Respeto por la tierra, la cultura y los derechos humanos" },
                { icon: "⏰", titulo: "Compromiso de Tiempo", descripcion: "Disponibilidad para participar en actividades y eventos clave" }
              ].map((req, index) => (
                <div key={index} className="flex items-start gap-4 bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1">
                  <div className="text-4xl">{req.icon}</div>
                  <div>
                    <h3 className="font-bold text-lg text-gray-800 mb-2">{req.titulo}</h3>
                    <p className="text-gray-600 text-sm">{req.descripcion}</p>
                  </div>
                </div>
              ))}
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