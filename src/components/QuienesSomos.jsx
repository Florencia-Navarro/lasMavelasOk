import React from 'react';
import vela1 from '../assets/img/beeswax-candles-3409828_1280.jpg'
import vela2 from '../assets/img/candles-2803444_1280.jpg'
import vela3 from '../assets/img/window-8431867_1280.jpg'
import vela4 from '../assets/img/candles-7304948_1280.jpg'

function QuienesSomos() {
  return (
    <section id="quienes-somos" className="flex flex-col bg-primary my-8 md:my-36 md:flex-row items-center md:items-start p-8">
      {/* Sección izquierda con título y descripción */}
      <div className="w-full md:w-1/2 py-14 md:pr-8">
        <h2 className="text-3xl font-bold text-secondary-dark mb-4">Quiénes Somos</h2>
        <p className="text-gray-700 text-lg">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis autem quasi incidunt debitis. Voluptate obcaecati molestiae repellat distinctio sunt nihil dolor minus ducimus fuga maxime sint, cupiditate ullam nesciunt rerum quam placeat quo veritatis. Et officia voluptatibus, dicta, possimus alias provident quod odio aspernatur.
        </p>
      </div>

      {/* Sección derecha con cuadrícula de imágenes */}
      <div className="w-full md:w-1/2 grid grid-cols-2 gap-4 p-4">
        <img src={vela1} alt="Vela de soja" className="w-full h-40 object-cover rounded-md shadow-md" />
        <img src={vela2} alt="Fragancia de ambiente" className="w-full h-40 object-cover rounded-md shadow-md" />
        <img src={vela3} alt="Velas decorativas" className="w-full h-40 object-cover rounded-md shadow-md" />
        <img src={vela4} alt="Aromatizantes naturales" className="w-full h-40 object-cover rounded-md shadow-md" />
      </div>
    </section>
  )
}

export default QuienesSomos
