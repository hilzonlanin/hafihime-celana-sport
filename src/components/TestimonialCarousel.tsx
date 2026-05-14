'use client';

import { useState, useEffect } from 'react';
import { testimonials } from '@/lib/testimonials-data';
import Image from 'next/image';

const TestimonialCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = testimonials.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 4000);

    return () => clearInterval(interval);
  }, [totalSlides]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  return (
    <section className="py-8 sm:py-12 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4">
        {/* Section Header - Simplified */}
        <div className="text-center mb-6 sm:mb-8">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            💬 APA KATA PELANGGAN KAMI
          </h2>
          <p className="text-gray-600 text-sm sm:text-base">
            Ribuan muslimah sudah membuktikan kualitas ciput premium kami
          </p>
        </div>

        {/* Carousel Container - Single Item */}
        <div className="relative max-w-2xl mx-auto">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-2">
                  <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg border-2 border-orange-100">
                    {/* Avatar & Name */}
                    <div className="flex items-center mb-4">
                      <div className="flex-shrink-0 mr-3 sm:mr-4">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-400 to-pink-500 rounded-full overflow-hidden">
                          <Image
                            src={testimonial.avatar}
                            alt={testimonial.customerName}
                            width={56}
                            height={56}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-sm sm:text-base">{testimonial.customerName}</h3>
                        <div className="flex text-yellow-400">
                          {[...Array(5)].map((_, i) => (
                            <svg
                              key={i}
                              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 ${i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'}`}
                              fill="currentColor"
                              viewBox="0 0 20 20"
                            >
                              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                            </svg>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <div className="mb-4">
                      <p className="text-gray-700 italic text-sm sm:text-base leading-relaxed">
                        "{testimonial.text}"
                      </p>
                    </div>

                    {/* Product Info */}
                    <div className="bg-orange-50 rounded-lg p-2 sm:p-3">
                      <div className="flex justify-between text-xs text-gray-600">
                        <span><strong className="text-gray-700">Bahan:</strong> Spandek Premium</span>
                        <span><strong className="text-gray-700">{testimonial.color}</strong></span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows - Mobile Friendly */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 sm:-translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 sm:translate-x-4 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg transition-all"
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all ${
                  index === currentIndex
                    ? 'bg-orange-500 w-6 sm:w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCarousel;
