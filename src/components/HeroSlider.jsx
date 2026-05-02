"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

const slides = [
    { id: 1, src: '/1.png', alt: 'Summer Sale 50% Off' },
    { id: 2, src: '/2.png', alt: 'Buy One Get One Free' },
    { id: 3, src: '/3.png', alt: 'Fresh Summer Apparel' },
    { id: 4, src: '/4.png', alt: 'Mid-Summer Clearance' },
];

export default function HeroSlider() {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-play feature
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 5000); // Changes image every 5 seconds
        return () => clearInterval(interval);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? slides.length - 1 : prevIndex - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    return (
        <div className="mt-5  mb-5 relative w-full   overflow-hidden rounded-2xl shadow-2xl group">
            {/* Slider Wrapper */}
            <div className="relative h-[350px] sm:h-[450px] md:h-[550px] w-full">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <Image
                            src={slide.src}
                            alt={slide.alt}
                            fill
                            priority={index === 0}
                            sizes="(max-width: 1200px) 100vw, 1200px"
                            className="object-cover select-none"
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows (Visible on Hover) */}
            <button
                onClick={prevSlide}
                className="hidden group-hover:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                aria-label="Previous Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
            </button>

            <button
                onClick={nextSlide}
                className="hidden group-hover:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg backdrop-blur-sm transition-all hover:scale-105 active:scale-95"
                aria-label="Next Slide"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
            </button>

            {/* Slide Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3 bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentIndex ? "bg-white w-6" : "bg-white/50 hover:bg-white/80"
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}