'use client';

import { FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Contacto = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <h1 className="text-5xl font-bold font-serif my-10 text-center title-effect">Ubicación</h1>

      <div className="flex justify-center space-x-10">
 
        <div className="transition-transform duration-300 hover:scale-105 border-8 border-transparent hover:border-sky-500 rounded-lg overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.0988791962886!2d-58.57907169999999!3d-34.652205699999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7950f87b389%3A0x52321a1ba789f451!2sGaribaldi%201506%2C%20B1704IEH%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1727975225637!5m2!1ses!2sar"
            width="800"
            height="600"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Sección de Contacto */}
        <div className="flex flex-col items-center space-y-6 mt-10">
          <h2 className="text-5xl font-serif text-center text-sky-600 mb-10 transition-transform duration-500 hover:scale-105 hover:text-sky-700">Contacto</h2>
          <p className="text-xl font-serif">Dirección: Garibaldi 1506, Ramos Mejía</p>
          <div className="flex flex-col items-center space-y-4">
            <a
              href="https://wa.me/1126444064"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition-colors duration-300 space-x-2"
            >
              <FaWhatsapp size={24} />
              <span>Comunicarme por WhatsApp</span>
            </a>
            <a
              href="mailto:jesimarzeniuk@gmail.com"
              className="flex items-center bg-sky-500 text-white py-3 px-6 rounded-lg hover:bg-sky-600 transition-colors duration-300 space-x-2"
            >
              <FaEnvelope size={24} />
              <span>Enviar Correo</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
