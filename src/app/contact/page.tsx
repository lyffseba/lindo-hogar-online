import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header Banner */}
      <div className="bg-[#f2f2f2] pt-8 pb-16 md:pt-12 md:pb-24 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-[#111111] mb-4">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto">
            Estamos aquí para ayudarte. Escríbenos, llámanos o visítanos en cualquiera de nuestras sucursales.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">
          
          {/* Contact Information */}
          <div className="space-y-12">
            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center gap-3">
                <span className="text-[#175d9c]">📞</span> Líneas de Atención
              </h2>
              <div className="space-y-4 text-gray-600">
                <p className="flex flex-col">
                  <span className="font-bold text-[#111111]">WhatsApp / Ventas Online</span>
                  <a href="https://wa.me/573112774673" className="text-[#175d9c] hover:underline text-lg">+57 311 277 4673</a>
                </p>
                <p className="flex flex-col">
                  <span className="font-bold text-[#111111]">Líneas Fijas (Bogotá)</span>
                  <span>(601) 742 3899 - (601) 516 3192</span>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center gap-3">
                <span className="text-[#175d9c]">✉️</span> Correo Electrónico
              </h2>
              <div className="space-y-2 text-gray-600">
                <p>
                  <a href="mailto:mercadeolindohogar@gmail.com" className="text-[#175d9c] hover:underline">mercadeolindohogar@gmail.com</a>
                </p>
                <p>
                  <a href="mailto:lh.comercial.lh@gmail.com" className="text-[#175d9c] hover:underline">lh.comercial.lh@gmail.com</a>
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold text-[#111111] mb-6 flex items-center gap-3">
                <span className="text-[#175d9c]">📍</span> Nuestras Tiendas Físicas
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm text-gray-600">
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#111111] block mb-1">Sede Principal (Oficina)</span>
                  Calle 15 Sur # 19 - 46<br />Barrio Restrepo, Bogotá
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#111111] block mb-1">Restrepo 2</span>
                  Carrera 18 # 17 - 40 Sur<br />Barrio Restrepo, Bogotá
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#111111] block mb-1">CC Mi Centro El Porvenir</span>
                  Local 101-106<br />Bogotá
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#111111] block mb-1">Milenio Centro Comercial</span>
                  Local 103<br />Bogotá
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#111111] block mb-1">CC Gran Plaza El Ensueño</span>
                  Local 171<br />Bogotá
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#111111] block mb-1">CC Mercurio</span>
                  Local 231A<br />Soacha
                </div>
                <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                  <span className="font-bold text-[#111111] block mb-1">CC Ventura Terreros</span>
                  Local 1-27<br />Soacha
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-[#f2f2f2] p-8 md:p-10 rounded-2xl border border-gray-200 shadow-sm h-fit">
            <h2 className="text-2xl font-bold text-[#111111] mb-6">Envíanos un mensaje</h2>
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo</label>
                <input type="text" className="w-full px-4 py-3 rounded-xl border-transparent focus:border-[#175d9c] focus:ring-2 focus:ring-[#175d9c]/20 transition-all outline-none" placeholder="Tu nombre" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Correo Electrónico</label>
                <input type="email" className="w-full px-4 py-3 rounded-xl border-transparent focus:border-[#175d9c] focus:ring-2 focus:ring-[#175d9c]/20 transition-all outline-none" placeholder="tucorreo@ejemplo.com" />
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Asunto</label>
                <select className="w-full px-4 py-3 rounded-xl border-transparent focus:border-[#175d9c] focus:ring-2 focus:ring-[#175d9c]/20 transition-all outline-none text-gray-700 bg-white">
                  <option>Información sobre un producto</option>
                  <option>Estado de mi pedido</option>
                  <option>Ventas al por mayor</option>
                  <option>Garantías / Devoluciones</option>
                  <option>Otro</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Mensaje</label>
                <textarea rows={5} className="w-full px-4 py-3 rounded-xl border-transparent focus:border-[#175d9c] focus:ring-2 focus:ring-[#175d9c]/20 transition-all outline-none resize-none" placeholder="¿En qué te podemos ayudar?"></textarea>
              </div>
              <button type="button" className="w-full py-4 bg-[#175d9c] hover:bg-[#114b7e] text-white font-bold text-lg rounded-xl shadow-md transition-all hover:-translate-y-1">
                Enviar Mensaje
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
