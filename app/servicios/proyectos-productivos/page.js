'use client';

import React from 'react';
import { ArrowLeft, Lightbulb, DollarSign, TrendingUp, Target, ChevronRight, Rocket } from 'lucide-react';

export default function ProyectosProductivos() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-green-50">
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
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 text-white rounded-full font-bold hover:shadow-xl transition-all transform hover:scale-105 shadow-lg"
            >
              <ArrowLeft size={20} />
              Volver al Inicio
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-blue-500 to-green-500 opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-8 flex justify-center">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-blue-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity animate-pulse"></div>
                <div className="relative bg-white rounded-full p-8 shadow-2xl">
                  <Rocket className="text-green-600" size={80} />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6">
              Proyectos <span className="bg-gradient-to-r from-green-600 via-blue-600 to-green-600 bg-clip-text text-transparent">Productivos</span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Impulsamos iniciativas comunitarias sostenibles con apoyo financiero y técnico. Convertimos ideas en realidades que generan empleo, ingresos y desarrollo para nuestras comunidades.
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
                Emprende con Nosotros
              </h2>
              <div className="bg-gradient-to-br from-green-50 via-blue-50 to-green-50 p-8 rounded-3xl shadow-lg">
                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                  Creemos en el potencial emprendedor de nuestras comunidades. Brindamos el respaldo necesario para que tus ideas productivas se conviertan en proyectos exitosos que beneficien a tu familia y a toda la comunidad.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Desde la formulación del proyecto hasta su puesta en marcha y seguimiento, te acompañamos en cada etapa con financiamiento, capacitación técnica y asesoría especializada.
                </p>
              </div>
            </div>

            {/* Tipos de Apoyo */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Cómo Te <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Apoyamos</span>
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  {
                    icon: DollarSign,
                    title: "Financiamiento",
                    description: "Capital semilla, microcréditos blandos y gestión de recursos ante entidades públicas y privadas",
                    gradient: "from-green-500 to-green-600"
                  },
                  {
                    icon: Lightbulb,
                    title: "Asesoría Técnica",
                    description: "Acompañamiento especializado en formulación, ejecución y administración de proyectos productivos",
                    gradient: "from-blue-500 to-blue-600"
                  },
                  {
                    icon: Target,
                    title: "Planificación",
                    description: "Estudios de viabilidad, planes de negocio y estrategias de comercialización",
                    gradient: "from-green-600 to-blue-600"
                  },
                  {
                    icon: TrendingUp,
                    title: "Seguimiento",
                    description: "Monitoreo continuo, ajustes y apoyo para el crecimiento sostenible de tu emprendimiento",
                    gradient: "from-blue-600 to-green-600"
                  }
                ].map((apoyo, index) => {
                  const Icon = apoyo.icon;
                  return (
                    <div key={index} className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                      <div className={`w-16 h-16 bg-gradient-to-br ${apoyo.gradient} rounded-xl mb-4 flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="text-white" size={32} />
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-3">{apoyo.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{apoyo.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Líneas Productivas */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Líneas <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Productivas</span>
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { title: "Agricultura Orgánica", description: "Cultivos certificados y mercados especializados", icon: "🌱" },
                  { title: "Agroindustria", description: "Transformación y valor agregado de productos", icon: "🏭" },
                  { title: "Turismo Rural", description: "Experiencias agroturísticas comunitarias", icon: "🏡" },
                  { title: "Artesanías", description: "Producción y comercialización de artesanías tradicionales", icon: "🎨" },
                  { title: "Apicultura", description: "Producción de miel y derivados apícolas", icon: "🐝" },
                  { title: "Piscicultura", description: "Cultivo sostenible de peces", icon: "🐟" }
                ].map((linea, index) => (
                  <div key={index} className="group bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-2xl hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
                    <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">{linea.icon}</div>
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{linea.title}</h3>
                    <p className="text-gray-600 text-sm">{linea.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Proceso */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Proceso de <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Implementación</span>
              </h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: "01", title: "Idea", description: "Identificamos la oportunidad productiva" },
                  { step: "02", title: "Formulación", description: "Diseñamos el proyecto completo" },
                  { step: "03", title: "Financiación", description: "Gestionamos los recursos necesarios" },
                  { step: "04", title: "Ejecución", description: "Implementamos y acompañamos" }
                ].map((item, index) => (
                  <div key={index} className="relative group">
                    <div className="absolute -inset-1 bg-gradient-to-r from-green-400 to-blue-400 rounded-2xl opacity-20 group-hover:opacity-40 blur transition-opacity"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-lg h-full">
                      <div className="text-5xl font-bold text-green-600 opacity-20 mb-2">{item.step}</div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
                      <p className="text-gray-600 text-sm">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Nuestros Proyectos */}
            <div className="mb-16">
              <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">
                Nuestros <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Proyectos</span>
              </h2>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  {
                    titulo: "Café Orgánico de Montaña",
                    descripcion: "Producción de café orgánico certificado en las montañas de la región. El proyecto beneficia a 25 familias campesinas que han mejorado sus ingresos en un 60%.",
                    impacto: "25 familias beneficiadas",
                    imagen: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?w=600&h=400&fit=crop",
                    categoria: "Agricultura"
                  },
                  {
                    titulo: "Planta Procesadora de Lácteos",
                    descripcion: "Transformación de leche en quesos artesanales y yogurt. Cooperativa que genera empleo digno y productos de alta calidad para el mercado local y regional.",
                    impacto: "40 empleos directos",
                    imagen: "https://images.unsplash.com/photo-1628088062854-d1870b4553da?w=600&h=400&fit=crop",
                    categoria: "Agroindustria"
                  },
                  {
                    titulo: "Artesanías Wayúu",
                    descripcion: "Preservación de técnicas ancestrales de tejido. Las artesanas producen mochilas, mantas y accesorios que se exportan a mercados internacionales.",
                    impacto: "30 artesanas empoderadas",
                    imagen: "https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=600&h=400&fit=crop",
                    categoria: "Cultura"
                  },
                  {
                    titulo: "Ecoturismo Comunitario",
                    descripcion: "Hospedaje rural y rutas de senderismo ecológico. Los visitantes experimentan la vida campesina auténtica mientras la comunidad genera ingresos sostenibles.",
                    impacto: "15 familias anfitrionas",
                    imagen: "https://images.unsplash.com/photo-1452570053594-1b985d6ea890?w=600&h=400&fit=crop",
                    categoria: "Turismo"
                  },
                  {
                    titulo: "Apicultura Sostenible",
                    descripcion: "Producción de miel orgánica y productos derivados como propóleo y cera. El proyecto contribuye a la polinización y conservación del ecosistema local.",
                    impacto: "200 colmenas activas",
                    imagen: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62?w=600&h=400&fit=crop",
                    categoria: "Agricultura"
                  },
                  {
                    titulo: "Huertas Comunitarias Urbanas",
                    descripcion: "Cultivos orgánicos en espacios urbanos que proveen alimentos frescos a familias vulnerables y generan conciencia sobre seguridad alimentaria.",
                    impacto: "100 familias alimentadas",
                    imagen: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?w=600&h=400&fit=crop",
                    categoria: "Seguridad Alimentaria"
                  }
                ].map((proyecto, index) => (
                  <div key={index} className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
                    {/* Imagen */}
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={proyecto.imagen} 
                        alt={proyecto.titulo}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                          {proyecto.categoria}
                        </span>
                      </div>
                    </div>
                    
                    {/* Contenido */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors">
                        {proyecto.titulo}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed mb-4">
                        {proyecto.descripcion}
                      </p>
                      <div className="flex items-center gap-2 text-green-600 font-semibold">
                        <ChevronRight size={16} />
                        <span className="text-sm">{proyecto.impacto}</span>
                      </div>
                    </div>
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
                <h2 className="text-4xl font-bold mb-4">¿Tienes una Idea Productiva?</h2>
                <p className="text-xl mb-8 opacity-90">Convierte tu sueño en realidad con nuestro apoyo</p>
                <a href="/#contacto" className="inline-flex items-center gap-2 bg-white text-green-600 px-10 py-4 rounded-full font-bold text-lg hover:bg-gray-100 transition-all transform hover:scale-105 shadow-xl">
                  Presenta tu Proyecto
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