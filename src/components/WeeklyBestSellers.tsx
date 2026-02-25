import React from "react";

export default function WeeklyBestSellers() {
    const products = [
        { cat: "Apple Parts", name: "iPhone 12 LCD Incell", price: "$28.00", hiddenMd: false, img: "/assets/B1255519-1-400x400.webp" },
        { cat: "Apple Parts", name: "iPhone 11 Pro Screen", price: "$35.00", hiddenMd: false, img: "/assets/B1255519-2-400x400.webp" },
        { cat: "Samsung Parts", name: "A12 LCD Framework", price: "$16.00", hiddenMd: false, img: "/assets/C1-1.webp" },
        { cat: "Apple Parts", name: "iPhone X Soft OLED", price: "$22.00", hiddenMd: false, img: "/assets/B1288001-1-400x400-1.webp" },
        { cat: "Samsung Parts", name: "S20 FE Service Pack", price: "$95.00", hiddenMd: true, img: "/assets/C2.webp" },
    ];

    return (
        <div className="container mx-auto px-4 py-16 md:py-24">
            <div className="flex flex-col md:flex-row justify-between items-end md:items-center mb-10">
                <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Wholesale LCDs & Screens</h2>
                <div className="flex gap-6 mt-6 md:mt-0 border-b border-gray-200 pb-3 w-full md:w-auto overflow-x-auto">
                    <button className="text-brand font-bold border-b-2 border-brand pb-3 whitespace-nowrap">Best Selling LCDs</button>
                    <button className="text-gray-500 hover:text-brand font-semibold pb-3 transition whitespace-nowrap">Professional Tools</button>
                    <button className="text-gray-500 hover:text-brand font-semibold pb-3 transition whitespace-nowrap">Premium Accessories</button>
                </div>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 md:gap-8">
                {products.map((p, i) => (
                    <div key={i} className={`border border-slate-100 rounded-2xl p-4 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 bg-white group ${p.hiddenMd ? 'hidden lg:block' : ''}`}>
                        <div className="h-44 bg-slate-50 rounded-xl mb-5 flex items-center justify-center p-4 overflow-hidden">
                            <img src={p.img} alt={`iShine Wireless ${p.name}`} className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-110" loading="lazy" />
                        </div>
                        <p className="text-xs font-medium text-slate-500 mb-1.5">{p.cat}</p>
                        <h3 className="font-bold text-slate-800 mb-3 truncate group-hover:text-brand transition-colors text-sm">{p.name}</h3>
                        <div className="flex items-center justify-between mb-5">
                            <div className="text-xl font-extrabold text-brand">{p.price}</div>
                        </div>
                        <button className="w-full border border-slate-200 text-brand font-bold py-2.5 rounded-xl hover:bg-brand hover:text-white transition-all duration-300 shadow-sm">
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}
