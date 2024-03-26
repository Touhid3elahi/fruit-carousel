import { useState, useEffect } from "react";
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from "react-icons/bs";
import './Carousel.css'
export default function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const previousSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);

    return () => clearInterval(interval);
  }, [current]);

  return (
    <div className="overflow-hidden relative">
      <div className="flex" style={{ width: `${slides.length * 100}%`, transform: `translateX(-${current * (100 / slides.length)}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`w-full flex items-center transition-transform ease-out duration-400 ${index === current ? '' : 'translate-y-full'}`} style={{ backgroundColor: slide.backgroundColor }}>
            <div className="w-1/2 p-4">
              <div className="container mx-auto ps-20">
                <h2 className="text-5xl font-bold mb-3">{slide.title}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
            <div className="w-1/2">
            <img src={slide.image} alt={`slide-${index}`} className="w-full h-full object-cover" style={{ animation: index === current ? 'slideInImage 0.5s forwards' : '' }} />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-0 h-full w-full flex justify-between items-center px-4">
        <button onClick={previousSlide} style={{ fontSize: '40px', padding: '12px', color: '#FFFFFF' }}>
          <BsFillArrowLeftCircleFill />
        </button>
        <button onClick={nextSlide} style={{ fontSize: '40px', padding: '12px',color: '#FFFFFF' }}>
          <BsFillArrowRightCircleFill />
        </button>
      </div>

      <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
        {slides.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`rounded-full w-5 h-5 cursor-pointer ${index === current ? "bg-white" : "bg-gray-500"}`}
          />
        ))}
      </div>
    </div>
  );
}
