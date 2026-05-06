// components/HeroSlider.jsx
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Legal Advice for You",
      subtitle: "We provide the best solution to clients",
      description: "Navigating the legal landscape can be complex, but we're here to help. Our team provides expert guidance tailored to your unique situation. Trust us to deliver the best solutions for your legal needs.",
      bgImage: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3",
      buttonText: "Explore Services"
    },
    {
      title: "Expert Legal Guidance",
      subtitle: "We offer tailored solutions to meet our clients' unique needs",
      description: "INSART provides expert legal guidance tailored to your unique needs. Trust us to handle your legal matters with professionalism and care.",
      bgImage: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3",
      buttonText: "Learn More"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen md:h-[90vh] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-1000 ease-in-out ${
            index === currentSlide 
              ? 'opacity-100 translate-x-0' 
              : 'opacity-0 translate-x-full'
          }`}
          style={{
            backgroundImage: `linear-gradient(135deg, rgba(10,22,40,0.95) 0%, rgba(10,22,40,0.85) 100%), url(${slide.bgImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="h-full flex items-center">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
              <div className="max-w-3xl animate-fade-in-up">
                <span className="inline-block bg-[#C6A43F]/20 text-[#C6A43F] text-sm font-semibold px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">
                  Since 2010
                </span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-4">
                  {slide.title}
                </h1>
                <h2 className="text-2xl md:text-3xl text-[#C6A43F] font-semibold mb-4">
                  {slide.subtitle}
                </h2>
                <p className="text-gray-300 text-base md:text-lg mb-8 leading-relaxed">
                  {slide.description}
                </p>
                <div className="flex flex-wrap gap-4">
                  <button className="bg-[#C6A43F] hover:bg-[#A8882E] text-white font-semibold py-3 px-8 rounded-full transition-all hover:scale-105 hover:shadow-xl">
                    {slide.buttonText}
                  </button>
                  <button className="border-2 border-[#C6A43F] text-white hover:bg-[#C6A43F] font-semibold py-3 px-8 rounded-full transition-all hover:scale-105">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#C6A43F] text-white p-2 md:p-3 rounded-full transition-all backdrop-blur-sm z-10"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-[#C6A43F] text-white p-2 md:p-3 rounded-full transition-all backdrop-blur-sm z-10"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`transition-all duration-300 ${
              index === currentSlide
                ? 'w-12 h-2.5 bg-[#C6A43F] rounded-full'
                : 'w-2.5 h-2.5 bg-white/50 rounded-full hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;