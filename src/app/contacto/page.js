'use client';

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contacto = () => {
  return (
    <div className="min-h-screen py-10 bg-gray-100">
      <h1 className="text-5xl font-semibold text-center text-sky-600 mb-10 transition-transform duration-500 hover:scale-105 hover:text-sky-700"> 🧿✨ Contacto y Ubicación 🧿✨</h1>

      {/* Botones alineados horizontalmente */}
      <div className="flex justify-center space-x-4 mb-10">
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
        <a
          href="https://maps.app.goo.gl/f6JzRcRmVZX2m7FD6"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center bg-red-500 text-white py-3 px-6 rounded-lg hover:bg-red-600 transition-colors duration-300 space-x-2"
        >
          <FaMapMarkerAlt size={24} />
          <span>Garibaldi 1506, Ramos Mejía</span>
        </a>
      </div>

      {/* Mapa de ubicación */}
      <div className="flex justify-center transition-transform duration-300 overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3282.098879196288!2d-58.5790717!3d-34.6522057!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc7950f87b389%3A0x52321a1ba789f451!2sGaribaldi%201506%2C%20B1704IEH%20Ramos%20Mej%C3%ADa%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1728013966950!5m2!1ses!2sar"
          width="1250"
          height="600"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Contacto;
