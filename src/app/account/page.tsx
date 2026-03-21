import Link from 'next/link';

export default function AccountPage() {
  return (
    <div className="bg-[#f2f2f2] min-h-[80vh] flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-sm max-w-md w-full p-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-[#111111] mb-2">Bienvenido a Lindo Hogar</h1>
          <p className="text-sm text-gray-500">Únete a nuestra comunidad para comprar y vender</p>
        </div>

        <div className="space-y-3">
          {/* Facebook */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5 text-[#1877F2]" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
            <span className="font-medium text-gray-700">Continuar con Facebook</span>
          </button>

          {/* Google */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md bg-white hover:bg-gray-50 transition-colors">
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="font-medium text-gray-700">Continuar con Google</span>
          </button>

          {/* Apple */}
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 border border-gray-300 rounded-md bg-black text-white hover:bg-gray-900 transition-colors">
            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.04 2.26-.78 3.56-.78 1.56.02 2.8.69 3.63 1.83-3.14 1.88-2.62 5.86.37 7.02-.75 1.89-1.68 3.2-2.64 4.1zm-3.53-15.01c.73-.89 1.25-2.14 1.1-3.39-1.1.04-2.43.76-3.2 1.64-.67.75-1.28 2.03-1.09 3.26 1.24.09 2.45-.63 3.19-1.51z" />
            </svg>
            <span className="font-medium">Continuar con Apple</span>
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200">
          <button className="w-full flex items-center justify-center gap-3 px-4 py-3 rounded-md bg-[#175d9c] text-white font-bold hover:bg-[#114b7e] transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            Continuar con el correo
          </button>
        </div>

        <div className="mt-6 text-center text-xs text-gray-500 leading-relaxed">
          Al registrarte, confirmas que aceptas los <Link href="#" className="text-[#175d9c] hover:underline">Términos y Condiciones</Link> y la <Link href="#" className="text-[#175d9c] hover:underline">Política de Privacidad</Link> de Lindo Hogar, y que tienes más de 18 años.
        </div>
      </div>
    </div>
  );
}
