import { useState } from 'react'
import vela1 from '../assets/img/beeswax-candles-3409828_1280.jpg'
import Modal from './Modal'


const productos = [
  { id: 1, nombre: "Vela de Lavanda", descripcion: "Vela relajante con esencia de lavanda.", imagen: vela1, descripcion2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum!" },
  { id: 2, nombre: "Vela de Vainilla", descripcion: "Aroma dulce y suave de vainilla.", imagen: vela1, descripcion2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum!" },
  { id: 3, nombre: "Vela de Coco", descripcion: "Refrescante y exótica con esencia de coco.", imagen: vela1, descripcion2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum!" },
  { id: 4, nombre: "Vela de Jazmín", descripcion: "Perfume floral suave y elegante.", imagen: vela1, descripcion2: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, cum!" },
  
]

function Productos() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState(null)

  const openModal = (producto) => {
    setSelectedProduct(producto)
    setIsModalOpen(true)
  };

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedProduct(null)
  };

  return (
    <section id='productos' className="py-8 px-4">
      {/* Título */}
      <h2 className="text-3xl font-bold text-center mb-8">Nuestros Productos </h2>
      
      {/* Contenedor de Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {productos.map((producto) => (
          <div
            key={producto.id}
            className="bg-white shadow-md rounded-lg text-center p-4 h-80 w-full flex flex-col justify-between transition-transform transform hover:scale-105 hover:shadow-lg cursor-pointer"
            onClick={() => openModal(producto)} 
          >
            <img
              src={producto.imagen}
              alt={producto.nombre}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-1">{producto.nombre}</h3>
            <p className="text-gray-600 text-sm">{producto.descripcion}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      <Modal isOpen={isModalOpen} onClose={closeModal} product={selectedProduct} />
    </section>
  )
}

export default Productos
