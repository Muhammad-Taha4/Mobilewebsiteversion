"use client";

import { useState, useEffect } from "react";

export default function Hero() {
    const slides = [
        {
            image: "/assets/banners/Gemini_Generated_Image_twhhxhtwhhxhtwhh.png",
            alt: "Premium OLED Displays for iPhone"
        },
        {
            image: "/assets/banners/Gemini_Generated_Image_7fwqu57fwqu57fwq.png",
            alt: "Official Toolkits For Professionals"
        }
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="container mx-auto px-4 mt-6">
            <div className="relative rounded-2xl h-[450px] overflow-hidden group">
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                            } overflow-hidden bg-gray-50`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.alt}
                            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-[6000ms] ease-out ${index === currentSlide ? "scale-105" : "scale-100"
                                }`}
                            loading={index === 0 ? "eager" : "lazy"}
                            decoding="async"
                        />
                    </div>
                ))}

                {/* Navigation Dots */}
                <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-2">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide ? "bg-brand w-6" : "bg-gray-300 hover:bg-gray-400"
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
