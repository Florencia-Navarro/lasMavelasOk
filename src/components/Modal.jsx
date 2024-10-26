function Modal({ isOpen, onClose, product }) {
    if (!isOpen) return null
  
    const handleBackdropClick = (e) => {
      // Cierra el modal solo si el clic está en el fondo, no en el contenido del modal
      if (e.target === e.currentTarget) {
        onClose();
      }
    }
  
    return (
      <div
        className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
        onClick={handleBackdropClick} 
      >
        <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/3 shadow-lg transition-transform transform">
          <h3 className="text-lg font-semibold mb-2 text-center">{product.nombre}</h3>
          <img 
            src={product.imagen} 
            alt={product.nombre} 
            className="w-full h-60 object-cover rounded-md mb-4" 
          />
          <p className="text-gray-600 text-sm mb-4 text-center">{product.descripcion2}</p>
          <button 
            className="bg-secondary text-white rounded-sm px-4 py-2 w-full hover:bg-secondary-dark transition duration-300" 
            onClick={onClose}
          >
            Cerrar
          </button>
        </div>
      </div>
    )
  }
  
  export default Modal
  