'use client';
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronRight, Users, Sprout, Heart, Phone, Mail, MapPin, Leaf, Sun, Droplets } from 'lucide-react';

export default function AsproinpalWebsite() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: ''
  });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-40 h-40 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-40 left-40 w-36 h-36 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse" style={{ animationDelay: '4s' }}></div>
      </div>

      {/* Header/Navigation */}
      <header className="bg-white/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300">
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <div className="absolute inset-0 bg-green-400 rounded-full blur-md opacity-50 group-hover:opacity-75 transition-opacity"></div>
                <img 
                  src="asproinpal.jpg" 
                  alt="ASPROINPAL Logo" 
                  className="h-16 w-16 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
                ASPROINPAL
              </span>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-2">
              {['Inicio', 'Nosotros', 'Servicios', 'Embajadores', 'Contacto'].map((item, i) => (
                <a 
                  key={i}
                  href={item === 'Embajadores' ? '/embajadores' : `#${item.toLowerCase()}`} 
                  className="relative px-4 py-2 text-gray-700 font-medium overflow-hidden group"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">{item}</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-gray-700 hover:text-green-600 transition-colors"
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3 animate-[slideDown_0.3s_ease-out]">
              {['Inicio', 'Nosotros', 'Servicios', 'Embajadores', 'Contacto'].map((item, i) => (
                <a 
                  key={i}
                  href={item === 'Embajadores' ? '/embajadores' : `#${item.toLowerCase()}`} 
                  className="block text-gray-700 hover:text-green-600 font-medium px-4 py-2 hover:bg-green-50 rounded-lg transition-all"
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,rgba(34,197,94,0.3),transparent_50%)]"></div>
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(59,130,246,0.3),transparent_50%)]"></div>
          </div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <Leaf className="absolute top-20 left-10 text-green-400 opacity-40 animate-[float_6s_ease-in-out_infinite]" size={40} />
          <Sun className="absolute top-40 right-20 text-yellow-400 opacity-40 animate-[spin_20s_linear_infinite]" size={48} />
          <Droplets className="absolute bottom-40 left-20 text-blue-400 opacity-40 animate-[bounce_3s_ease-in-out_infinite]" size={36} />
          <Sprout className="absolute bottom-60 right-40 text-green-500 opacity-40 animate-[float_8s_ease-in-out_infinite]" size={44} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            {/* Logo with Animation */}
            <div className="mb-8 flex justify-center">
              <div className="relative group cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-500 animate-pulse"></div>
                <div className="relative bg-white rounded-full p-6 shadow-2xl transform group-hover:scale-110 transition-all duration-500">
                  <img 
                    src="asproinpal.jpg" 
                    alt="ASPROINPAL" 
                    className="h-32 w-32 object-contain animate-[fadeIn_1s_ease-out]"
                  />
                </div>
              </div>
            </div>

            <h1 className="text-6xl md:text-7xl font-bold text-gray-800 mb-6 animate-[slideUp_0.8s_ease-out]">
              Cultivando <span className="bg-gradient-to-r from-green-600 to-green-400 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]">Futuro</span>,<br/>
              Tejiendo <span className="bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent animate-[shimmer_3s_ease-in-out_infinite]" style={{ animationDelay: '1.5s' }}>Comunidad</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto animate-[slideUp_0.8s_ease-out_0.2s_both]">
              Somos una asociación dedicada al fortalecimiento de las comunidades indígenas y campesinas, 
              preservando nuestras tradiciones mientras cultivamos un futuro sostenible.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center animate-[slideUp_0.8s_ease-out_0.4s_both]">
              <a href="#nosotros" className="group relative px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Conoce Más
                  <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-green-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
              
              <a href="#contacto" className="group relative px-10 py-5 bg-white text-green-600 rounded-full font-bold text-lg overflow-hidden shadow-xl hover:shadow-2xl border-2 border-green-600 transition-all duration-300">
                <span className="relative z-10 flex items-center justify-center gap-2 group-hover:text-white transition-colors">
                  Únete a Nosotros
                  <Heart className="group-hover:scale-110 transition-transform" size={24} />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </a>
            </div>

            {/* Scroll Indicator */}
            <div className="mt-16 animate-bounce">
              <ChevronRight className="mx-auto text-green-600 rotate-90" size={32} />
            </div>
          </div>
        </div>
      </section>

      {/* Nosotros Section */}
      <section id="nosotros" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-green-50/30 to-transparent"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-800 mb-4 animate-[fadeIn_0.8s_ease-out]">
                Nuestra <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Esencia</span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 mx-auto rounded-full animate-[expandWidth_1s_ease-out]"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                {[
                  { title: "Nuestra Misión", text: "Fortalecer el tejido social de las comunidades indígenas y campesinas, promoviendo el desarrollo sostenible, la preservación cultural y el bienestar colectivo a través de la agricultura tradicional y la solidaridad comunitaria.", gradient: "from-green-100 via-green-50 to-blue-100" },
                  { title: "Nuestra Visión", text: "Ser una organización referente en la defensa de los derechos campesinos e indígenas, creando espacios de prosperidad donde la tradición y la innovación se encuentren para construir comunidades resilientes y prósperas.", gradient: "from-blue-100 via-blue-50 to-green-100" }
                ].map((item, i) => (
                  <div 
                    key={i}
                    className={`group bg-gradient-to-br ${item.gradient} p-8 rounded-3xl shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-500 cursor-pointer`}
                  >
                    <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center gap-3">
                      <div className="w-2 h-8 bg-gradient-to-b from-green-600 to-blue-600 rounded-full group-hover:h-12 transition-all duration-300"></div>
                      {item.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative">
                <div className="absolute -inset-6 bg-gradient-to-r from-green-400 via-blue-400 to-green-400 rounded-3xl opacity-20 blur-3xl animate-pulse"></div>
                <div className="relative bg-white p-10 rounded-3xl shadow-2xl">
                  <div className="space-y-10">
                    {[
                      { icon: Users, title: "Comunidad Unida", text: "Fortalecemos lazos entre familias campesinas e indígenas", color: "green" },
                      { icon: Sprout, title: "Agricultura Sostenible", text: "Promovemos prácticas agrícolas respetuosas con la tierra", color: "blue" },
                      { icon: Heart, title: "Identidad Cultural", text: "Preservamos y celebramos nuestras tradiciones ancestrales", color: "green" }
                    ].map((item, i) => {
                      const Icon = item.icon;
                      return (
                        <div key={i} className="flex items-start space-x-5 group cursor-pointer">
                          <div className={`bg-gradient-to-br from-${item.color}-600 to-${item.color}-400 p-4 rounded-2xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                            <Icon className="text-white" size={32} />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-xl text-gray-800 mb-2 group-hover:text-green-600 transition-colors">{item.title}</h4>
                            <p className="text-gray-600 leading-relaxed">{item.text}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Servicios Section */}
      <section id="servicios" className="py-24 bg-gradient-to-br from-green-50 via-blue-50 to-green-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-green-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Nuestros <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Servicios</span>
            </h2>
            <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 mx-auto rounded-full mb-6"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Ofrecemos apoyo integral para el desarrollo de nuestras comunidades
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "Capacitación Agrícola", description: "Talleres de técnicas agrícolas sostenibles, manejo de cultivos y producción orgánica", gradient: "from-green-500 to-green-600", delay: "0s", link: "/servicios/capacitacion-agricola" },
              { title: "Asesoría Legal", description: "Apoyo en temas de tierras, derechos campesinos y acceso a programas gubernamentales", gradient: "from-blue-500 to-blue-600", delay: "0.1s", link: "/servicios/asesoria-legal" },
              { title: "Comercialización", description: "Facilitamos el acceso a mercados justos y redes de comercio solidario", gradient: "from-green-600 to-blue-600", delay: "0.2s", link: "/servicios/comercializacion" },
              { title: "Preservación Cultural", description: "Programas de rescate y transmisión de conocimientos ancestrales", gradient: "from-blue-600 to-green-600", delay: "0.3s", link: "/servicios/preservacion-cultural" },
              { title: "Proyectos Productivos", description: "Apoyo financiero y técnico para iniciativas comunitarias sostenibles", gradient: "from-green-500 to-blue-500", delay: "0.4s", link: "/servicios/proyectos-productivos" },
              { title: "Fortalecimiento Social", description: "Espacios de encuentro, diálogo y construcción colectiva de soluciones", gradient: "from-blue-500 to-green-500", delay: "0.5s", link: "/servicios/fortalecimiento-social" }
            ].map((servicio, index) => (
              <a
                key={index}
                href={servicio.link}
                className="group perspective-1000 block"
                style={{ animationDelay: servicio.delay }}
              >
                <div className="relative bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 hover:rotate-1 transition-all duration-500 h-full cursor-pointer">
                  {/* Animated Border */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-green-400 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"></div>
                  
                  <div className={`w-20 h-20 bg-gradient-to-br ${servicio.gradient} rounded-2xl mb-6 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 shadow-lg`}>
                    <ChevronRight className="text-white group-hover:translate-x-1 transition-transform" size={40} />
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-green-600 transition-colors">
                    {servicio.title}
                  </h3>
                  
                  <p className="text-gray-600 leading-relaxed">
                    {servicio.description}
                  </p>

                  {/* Hover Effect Line */}
                  <div className="mt-6 flex items-center gap-2 text-green-600 font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Ver más</span>
                    <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div className="mt-2 w-0 h-1 bg-gradient-to-r from-green-600 to-blue-600 group-hover:w-full transition-all duration-500 rounded-full"></div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 animate-[gradientShift_6s_ease-in-out_infinite]"></div>
        
        {/* Animated Shapes */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-[float_8s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-yellow-300 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite]" style={{ animationDelay: '2s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-blue-300 rounded-full blur-3xl animate-[float_12s_ease-in-out_infinite]" style={{ animationDelay: '4s' }}></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 animate-[slideUp_0.8s_ease-out]">
              ¿Listo para Ser Parte del Cambio?
            </h2>
            
            <p className="text-2xl text-white mb-12 opacity-95 leading-relaxed animate-[slideUp_0.8s_ease-out_0.2s_both]">
              Únete a nuestra comunidad y juntos construyamos un futuro más próspero y justo para todos
            </p>
            
            <a href="#contacto" className="group inline-flex items-center gap-3 bg-white text-green-600 px-12 py-6 rounded-full font-bold text-xl hover:bg-gray-100 transition-all duration-300 shadow-2xl hover:shadow-3xl transform hover:scale-105 animate-[slideUp_0.8s_ease-out_0.4s_both]">
              Contáctanos Ahora
              <ChevronRight className="group-hover:translate-x-2 transition-transform" size={28} />
            </a>
          </div>
        </div>
      </section>

      {/* Contacto Section */}
      <section id="contacto" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 via-transparent to-blue-50/50"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl font-bold text-gray-800 mb-4">
                Conecta con <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Nosotros</span>
              </h2>
              <div className="w-32 h-1.5 bg-gradient-to-r from-green-600 via-blue-600 to-green-600 mx-auto rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                {[
                  { icon: Phone, title: "Teléfono", info: "3006433704", color: "green" },
                  { icon: Mail, title: "Email", info: "asproinpal2@hotmail.com", color: "blue" },
                  { icon: MapPin, title: "Ubicación", info: "Palmito, Sucre", color: "green" }
                ].map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <div 
                      key={i}
                      className={`group flex items-start space-x-5 bg-gradient-to-br from-${item.color}-50 to-${item.color}-100 p-6 rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300 cursor-pointer`}
                    >
                      <div className={`bg-gradient-to-br from-${item.color}-600 to-${item.color}-400 p-4 rounded-xl transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                        <Icon className="text-white" size={28} />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg text-gray-800 mb-1">{item.title}</h3>
                        <p className="text-gray-600">{item.info}</p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-green-400 to-blue-400 rounded-3xl opacity-20 blur-2xl animate-pulse"></div>
                <div className="relative bg-gradient-to-br from-green-50 to-blue-50 p-8 rounded-3xl shadow-xl">
                  <div className="space-y-5">
                    <input 
                      type="text" 
                      name="nombre"
                      placeholder="Nombre Completo" 
                      value={formData.nombre}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    />
                    <input 
                      type="email" 
                      name="email"
                      placeholder="Correo Electrónico" 
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-all duration-300 bg-white shadow-sm hover:shadow-md"
                    />
                    <textarea 
                      name="mensaje"
                      placeholder="Tu Mensaje" 
                      rows="4" 
                      value={formData.mensaje}
                      onChange={handleInputChange}
                      className="w-full px-6 py-4 rounded-xl border-2 border-gray-200 focus:border-green-600 focus:outline-none transition-all duration-300 bg-white shadow-sm hover:shadow-md resize-none"
                    ></textarea>
                    <button 
                      onClick={handleSubmit}
                      className="group w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 rounded-xl font-bold text-lg hover:from-green-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                      Enviar Mensaje
                      <ChevronRight className="group-hover:translate-x-1 transition-transform" size={24} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full blur-3xl"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="flex justify-center mb-6 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity"></div>
              <img 
                src="asproinpal.jpg" 
                alt="ASPROINPAL" 
                className="h-20 w-20 object-contain relative z-10 transform group-hover:scale-110 transition-transform duration-300"
              />
            </div>
          </div>
          
          <p className="text-2xl font-bold mb-2 bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
            ASPROINPAL
          </p>
          
          <p className="text-gray-400 mb-6 text-lg">
            Cultivando futuro, tejiendo comunidad
          </p>
          
          <div className="border-t border-gray-700 pt-6 mt-6">
            <p className="text-sm text-gray-400">
              © 2025 ASPROINPAL. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes expandWidth {
          from {
            width: 0;
          }
          to {
            width: 8rem;
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }

        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }

        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }

        .animate-shimmer {
          background-size: 200% auto;
        }

        .perspective-1000 {
          perspective: 1000px;
        }
      `}</style>
    </div>
  );
}