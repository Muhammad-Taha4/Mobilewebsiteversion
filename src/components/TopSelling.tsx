"use client";
import { useState, useEffect } from "react";

export default function TopSelling() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => setIsLoading(false), 1200);
        return () => clearTimeout(timer);
    }, []);

    const products = [
        { cat: "Apple Parts", name: "iPhone 13 Pro Max OLED", price: "$85.00", oldPrice: "$100.00", badge: "-15%", hiddenMd: false, img: "/assets/B1255519-1-400x400.webp" },
        { cat: "Samsung Parts", name: "Galaxy S22 Ultra Screen", price: "$145.00", oldPrice: "", badge: "", hiddenMd: false, img: "/assets/C1-1.webp" },
        { cat: "Batteries", name: "iPhone 11 Battery Cap", price: "$12.50", oldPrice: "", badge: "", hiddenMd: false, img: "/assets/B1083502-1-400x400-1.webp" },
        { cat: "Tools", name: "Precision Screwdriver Set", price: "$24.00", oldPrice: "", badge: "", hiddenMd: false, img: "/assets/6092C-Professional-Precision-70-in-1-Multifunction-Screwdriver-Set-in-lahore.webp" },
        { cat: "Accessories", name: "20W PD Fast Charger", price: "$8.99", oldPrice: "", badge: "", hiddenMd: true, img: "/assets/C2.webp" },
        { cat: "Apple Parts", name: "iPad Air 5 Digitizer", price: "$45.00", oldPrice: "$60.00", badge: "HOT", hiddenMd: false, img: "/assets/B1255519-1-400x400.webp" },
        { cat: "Batteries", name: "MacBook Pro Battery", price: "$75.00", oldPrice: "", badge: "", hiddenMd: false, img: "/assets/B1083502-1-400x400-1.webp" },
        { cat: "Accessories", name: "Thermal Silicone Pad", price: "$4.50", oldPrice: "", badge: "", hiddenMd: false, img: "/assets/B1288001-1-400x400-1.webp" },
        { cat: "Tools", name: "Microscope Ring Light", price: "$35.00", oldPrice: "", badge: "NEW", hiddenMd: false, img: "/assets/6092C-Professional-Precision-70-in-1-Multifunction-Screwdriver-Set-in-lahore.webp" },
        { cat: "Tools", name: "T7000 Glue", price: "$6.99", oldPrice: "", badge: "", hiddenMd: true, img: "/assets/C1-1.webp" },
    ];

    return (
        <div className="container mx-auto px-4 pt-4 pb-12 md:pt-8 md:pb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 tracking-tight">Premium Wireless Repair Parts</h2>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8 min-h-[350px]">
                {isLoading ? (
                    [...Array(5)].map((_, i) => (
                        <div key={i} className={`border border-slate-100 rounded-2xl p-4 bg-white h-[320px] flex flex-col animate-pulse ${i > 1 ? 'hidden lg:flex' : ''}`}>
                            <div className="h-44 bg-slate-100 rounded-xl mb-5 w-full"></div>
                            <div className="h-3 bg-slate-100 w-1/3 mb-2 rounded"></div>
                            <div className="h-4 bg-slate-200 w-3/4 mb-4 rounded"></div>
                            <div className="mt-auto h-10 w-full bg-slate-100 rounded-xl"></div>
                        </div>
                    ))
                ) : (
                    products.map((p, i) => (
                        <div key={i} className={`border border-slate-100 rounded-2xl p-4 hover:shadow-lg hover:scale-[1.01] transition-all duration-300 bg-white relative group ${p.hiddenMd ? 'hidden lg:block' : ''}`}>
                            {p.badge && (
                                <span className="absolute top-4 left-4 bg-red-100 text-red-600 text-xs font-bold px-3 py-1.5 rounded-md shadow-sm z-10">
                                    {p.badge}
                                </span>
                            )}
                            <div className="h-44 bg-slate-50 rounded-xl mb-5 flex items-center justify-center p-4 overflow-hidden">
                                <img src={p.img} alt={`iShine Wireless ${p.name}`} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                            </div>
                            <p className="text-xs font-medium text-slate-500 mb-1.5">{p.cat}</p>
                            <h3 className="font-bold text-slate-800 mb-3 truncate group-hover:text-brand transition-colors text-sm">{p.name}</h3>
                            <div className="flex items-center justify-between mb-5">
                                <div className="text-xl font-extrabold text-brand">
                                    {p.price}{" "}
                                    {p.oldPrice && (
                                        <span className="text-sm text-slate-400 line-through font-medium ml-1">{p.oldPrice}</span>
                                    )}
                                </div>
                            </div>
                            <button className="w-full border border-slate-200 text-brand font-bold py-2.5 rounded-xl hover:bg-brand hover:text-white transition-all duration-300 shadow-sm">
                                Add to Cart
                            </button>
                        </div>
                    ))
                )}
            </div>
        </div>
    );
}
