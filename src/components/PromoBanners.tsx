import React from 'react';

export default function PromoBanners() {
    const baseCategories = [
        {
            title: "iPhone Displays",
            bg: "from-slate-100 to-slate-200",
            img: "/assets/B1255519-1-400x400.webp"
        },
        {
            title: "Pro Toolkits",
            bg: "from-[#f0f4f8] to-[#e2e8f0]",
            img: "/assets/6092C-Professional-Precision-70-in-1-Multifunction-Screwdriver-Set-in-lahore.webp"
        },
        {
            title: "Batteries",
            bg: "from-[#f8fafc] to-[#f1f5f9]",
            img: "/assets/B1083502-1-400x400-1.webp"
        },
        {
            title: "Accessories",
            bg: "from-[#fdfbfb] to-[#ebedee]",
            img: "/assets/B1288001-1-400x400-1.webp"
        },
        // Expanded Items
        {
            title: "Cables",
            bg: "from-blue-50 to-blue-100",
            img: "/assets/C2.webp"
        },
        {
            title: "Car Chargers",
            bg: "from-slate-100 to-slate-200",
            img: "/assets/B1288001-1-400x400-1.webp" // Reusing appropriate fallback
        },
        {
            title: "Power Banks",
            bg: "from-[#f0f4f8] to-[#e2e8f0]",
            img: "/assets/B1083502-1-400x400-1.webp"
        },
        {
            title: "Wireless Earbuds",
            bg: "from-[#f8fafc] to-[#f1f5f9]",
            img: "/assets/B1255519-1-400x400.webp"
        }
    ];

    // Repeat to ensure seamless loop
    const categoriesArray = [...baseCategories, ...baseCategories, ...baseCategories];

    return (
        <section className="w-full mx-auto py-16 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 md:px-10 mb-8">
                <div className="flex justify-between items-end">
                    <div>
                        <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Shop by Category</h2>
                        <p className="text-slate-500 mt-2">Premium components for professional repairs.</p>
                    </div>
                </div>
            </div>

            <div className="flex overflow-hidden group py-4 relative">
                <div className="flex w-max animate-marquee [animation-duration:45s] group-hover:[animation-play-state:paused] space-x-6 px-3">
                    {categoriesArray.map((cat, i) => (
                        <div
                            key={i}
                            className={`w-[280px] shrink-0 cursor-pointer group relative flex flex-col items-center justify-between p-6 h-[320px] rounded-3xl bg-gradient-to-br ${cat.bg} transition-all duration-500 hover:shadow-xl hover:-translate-y-2`}
                        >
                            {/* Centered Breathing Image */}
                            <div className="flex-1 w-full flex items-center justify-center mt-4">
                                <img
                                    src={cat.img}
                                    alt={`iShine Wireless ${cat.title}`}
                                    className="max-h-36 object-contain mix-blend-multiply transition-transform duration-700 ease-in-out group-hover:scale-110"
                                    loading="lazy"
                                />
                            </div>

                            {/* Bottom Title & Link */}
                            <div className="w-full text-center mt-6">
                                <h3 className="text-lg font-bold text-slate-900 mb-2">{cat.title}</h3>
                                <p className="text-xs font-semibold text-[#0B4182] flex items-center justify-center gap-1 group-hover:text-slate-900 transition-colors">
                                    Explore
                                    <span className="material-symbols-outlined text-[14px] transition-transform duration-300 group-hover:translate-x-1">
                                        arrow_forward
                                    </span>
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
