import React from 'react';

export default function DiscountedProducts() {
    const products = [
        { title: "iPhone 14 Pro Max Display", desc: "Original Pull | Fully Tested", oldPrice: "$299.00", newPrice: "$225.00", img: "/assets/B1255519-2-400x400.webp" },
        { title: "Samsung S23 Ultra Battery", desc: "5000mAh | Zero Cycle", oldPrice: "$45.00", newPrice: "$30.00", img: "/assets/B1083502-1-400x400-1.webp" },
        { title: "iPad Air 5th Gen LCD", desc: "Grade A | Touch Digitizer", oldPrice: "$120.00", newPrice: "$90.00", img: "/assets/B1288001-1-400x400-1.webp" },
        { title: "iPhone 13 Pro Camera", desc: "Space Gray | Authentic", oldPrice: "$150.00", newPrice: "$110.00", img: "/assets/C2.webp" },
    ];

    return (
        <section className="max-w-[1400px] mx-auto px-4 md:px-10 py-10 mt-10 mb-10">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-slate-800">Products With Discounts</h3>
                <span className="text-sm text-brand font-semibold hover:underline cursor-pointer">View All Offers</span>
            </div>

            <div className="rounded-sm p-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Left Promo Banners */}
                <div className="space-y-4">
                    <div className="bg-gradient-to-r from-slate-900 to-brand rounded-md p-6 flex justify-between items-center h-40 text-white relative overflow-hidden group">
                        <div className="z-10 group-hover:scale-105 transition-transform duration-300">
                            <h4 className="text-lg font-bold leading-tight mb-2">Premium OLED<br />Screens</h4>
                            <p className="text-xs opacity-90">Starting from</p>
                            <p className="text-2xl font-bold text-yellow-500">$65.00</p>
                        </div>
                        <img src="/assets/B1255519-1-400x400.webp" alt="OLED Screens" className="h-28 object-contain rounded-md mix-blend-multiply" loading="lazy" />
                    </div>
                    <div className="bg-gradient-to-r from-slate-800 to-slate-700 rounded-md p-6 flex justify-between items-center h-40 text-white relative overflow-hidden group">
                        <div className="z-10 group-hover:scale-105 transition-transform duration-300">
                            <h4 className="text-lg font-bold leading-tight mb-2">High-Capacity<br />Batteries</h4>
                            <p className="text-xs opacity-90">Up to 30% Off</p>
                            <p className="text-2xl font-bold text-yellow-500">$15.00</p>
                        </div>
                        <img src="/assets/B1083502-1-400x400-1.webp" alt="Batteries" className="h-28 object-contain rounded-md mix-blend-multiply" loading="lazy" />
                    </div>
                </div>

                {/* Right Product Cards Column 1 */}
                <div className="space-y-4">
                    {products.slice(0, 2).map((p, i) => (
                        <div key={i} className="border border-slate-100 rounded-md p-3 flex gap-4 hover:shadow-lg hover:scale-[1.01] hover:border-brand/30 transition-shadow transition-transform duration-300 group">
                            <div className="relative w-24 h-24 bg-white shrink-0">
                                <span className="absolute top-0 left-0 bg-brand text-[10px] text-white px-1.5 py-0.5 rounded-md font-bold shadow-sm z-10">25% Off</span>
                                <img src={p.img} alt={p.title} className="w-full h-full object-contain" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h5 className="text-xs font-medium text-slate-800 line-clamp-2">{p.title}</h5>
                                    <p className="text-[10px] text-slate-400 mt-0.5">{p.desc}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-brand font-bold text-sm">{p.newPrice}</span>
                                        <span className="text-slate-300 text-[10px] line-through">{p.oldPrice}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <input type="number" defaultValue="1" className="w-10 text-[10px] border border-slate-200 rounded p-1 outline-none focus:border-brand" />
                                        <button className="border border-brand text-brand p-1 rounded hover:bg-brand hover:text-white transition-colors shadow-sm">
                                            <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Right Product Cards Column 2 */}
                <div className="space-y-4">
                    {products.slice(2, 4).map((p, i) => (
                        <div key={i} className="border border-slate-100 rounded-md p-3 flex gap-4 hover:shadow-lg hover:scale-[1.01] hover:border-brand/30 transition-shadow transition-transform duration-300 group">
                            <div className="relative w-24 h-24 bg-white shrink-0">
                                <span className="absolute top-0 left-0 bg-brand text-[10px] text-white px-1.5 py-0.5 rounded-md font-bold shadow-sm z-10">25% Off</span>
                                <img src={p.img} alt={`iShine Wireless ${p.title}`} className="w-full h-full object-contain" loading="lazy" />
                            </div>
                            <div className="flex-1 flex flex-col justify-between">
                                <div>
                                    <h5 className="text-xs font-medium text-slate-800 line-clamp-2">{p.title}</h5>
                                    <p className="text-[10px] text-slate-400 mt-0.5">{p.desc}</p>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex flex-col">
                                        <span className="text-brand font-bold text-sm">{p.newPrice}</span>
                                        <span className="text-slate-300 text-[10px] line-through">{p.oldPrice}</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <input type="number" defaultValue="1" className="w-10 text-[10px] border border-slate-200 rounded p-1 outline-none focus:border-brand" />
                                        <button className="border border-brand text-brand p-1 rounded hover:bg-brand hover:text-white transition-colors shadow-sm">
                                            <span className="material-symbols-outlined text-sm">shopping_cart</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
