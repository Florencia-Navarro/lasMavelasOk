import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'
import vela1 from '../assets/img/beeswax-candles-3409828_1280.jpg'
import vela2 from '../assets/img/candles-2803444_1280.jpg'
import vela3 from '../assets/img/window-8431867_1280.jpg'

function Home() {
  return (
    <div className="swiper-container relative h-[60vh] w-full mt-28"> 

      {/* Sección del Carrusel */}
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        loop={true}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="h-full w-full"
      >
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={vela1}
            alt="Velas con flores"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={vela2}
            alt="Vela grande y velitas"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="w-full h-full object-cover"
            src={vela3}
            alt="Vela grande y velitas"
          />
        </SwiperSlide>
      </Swiper>

      {/* Título traslúcido */}
      <div className="absolute top-0 w-full h-32 bg-opacity-80 bg-background flex flex-col items-center justify-center z-10 md:w-1/2 md:h-full md:bg-opacity-50 md:left-0">
        <h1 className="text-xl md:text-5xl font-bold text-white text-center">Las Mavelas</h1>
        <p className="text-white text-sm md:text-lg mt-2 text-center">Lorem ipsum dolor sit amet consectetur</p>
        <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-full shadow-md hover:bg-secondary-dark transition duration-300">Ver Más</button>
    </div>

    </div>
  );
}

export default Home
