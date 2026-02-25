"use client";
import { useState } from "react";

export default function ProductDetail() {
    const images = [
        "/assets/B1255519-2-400x400.webp",
        "/assets/B1255519-1-400x400.webp",
        "/assets/C1-1.webp",
        "/assets/C2.webp"
    ];
    const [mainImage, setMainImage] = useState(images[0]);
    const [selectedTier, setSelectedTier] = useState<number | null>(1); // 0, 1, 2 = the tiers
    const [selectedColor, setSelectedColor] = useState("Black");

    const colors = [
        { name: "Black", colorClass: "bg-gray-900" },
        { name: "Silver", colorClass: "bg-gray-300" },
        { name: "Gold", colorClass: "bg-yellow-200" },
        { name: "Deep Purple", colorClass: "bg-purple-900" }
    ];

    const bulkTiers = [
        { id: 0, range: "1 - 4", price: "$145.00", savings: "-", popular: false },
        { id: 1, range: "5 - 19", price: "$135.00", savings: "Save 7%", popular: true },
        { id: 2, range: "20+", price: "$128.50", savings: "Save 11%", popular: false }
    ];

    const frequentlyBought = [
        { title: "iPhone 14 Pro Waterproof Seal Adhesive", price: "$1.50", img: "/assets/B1083502-1-400x400-1.webp" },
        { title: "Tri-point Y000 Precision Driver", price: "$4.99", img: "/assets/6092C-Professional-Precision-70-in-1-Multifunction-Screwdriver-Set-in-lahore.webp" },
        { title: "LCD Opening Pliers Tool", price: "$12.95", img: "/assets/B1288001-1-400x400-1.webp" },
        { title: "Pentalobe P2 Screwdriver (0.8mm)", price: "$3.99", img: "/assets/6092C-Professional-Precision-70-in-1-Multifunction-Screwdriver-Set-in-lahore.webp" },
        { title: "9H Tempered Glass (10 Pack)", price: "$8.50", img: "/assets/banner-13.jpg" }
    ];

    return (
        <main className="flex-1 w-full max-w-[1440px] mx-auto px-4 md:px-10 py-6 lg:py-10 bg-background-light min-h-screen animate-in fade-in duration-500">
            {/* Breadcrumbs */}
            <div className="flex flex-wrap items-center gap-2 mb-6 text-sm">
                <a className="text-text-secondary hover:text-primary transition-colors" href="/">Home</a>
                <span className="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
                <a className="text-text-secondary hover:text-primary transition-colors" href="/shop">iPhone Parts</a>
                <span className="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
                <a className="text-text-secondary hover:text-primary transition-colors" href="/shop">Screens</a>
                <span className="text-gray-400 material-symbols-outlined text-[16px]">chevron_right</span>
                <span className="text-text-main font-medium">iPhone 14 Pro</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14">
                {/* Left Column: Gallery */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <div className="relative w-full aspect-[4/3] bg-white rounded-xl overflow-hidden border border-border-light shadow-sm group">
                        <img
                            alt="iPhone 14 Pro OLED Display Assembly"
                            className="w-full h-full object-contain p-8 transition-transform duration-500 group-hover:scale-110"
                            src={mainImage}
                        />
                        <div className="absolute top-4 left-4 bg-green-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                            IN STOCK
                        </div>
                        <button className="absolute bottom-4 right-4 p-2 bg-white/90 hover:bg-white text-gray-700 rounded-lg shadow-md backdrop-blur-sm transition-all">
                            <span className="material-symbols-outlined text-xl">zoom_in</span>
                        </button>
                    </div>

                    {/* Thumbnails */}
                    <div className="grid grid-cols-4 sm:grid-cols-5 gap-3">
                        {images.map((img, idx) => (
                            <button
                                key={idx}
                                onClick={() => setMainImage(img)}
                                className={`aspect-square rounded-lg border-2 overflow-hidden p-2 transition-all duration-300 ${mainImage === img ? 'border-primary shadow-md' : 'border-border-light hover:border-primary hover:scale-[1.02] hover:shadow-sm'} bg-white`}
                            >
                                <img alt={`Thumbnail ${idx}`} className="w-full h-full object-contain transition-transform duration-300 hover:scale-105" src={img} />
                            </button>
                        ))}
                        <button className="aspect-square rounded-lg border border-border-light hover:border-primary hover:scale-[1.02] hover:shadow-sm bg-white overflow-hidden p-2 transition-all duration-300 relative group">
                            <div className="absolute inset-0 flex items-center justify-center bg-black/5 text-gray-500 group-hover:text-primary transition-colors z-10">
                                <span className="material-symbols-outlined text-3xl transition-transform duration-300 group-hover:scale-110">play_circle</span>
                            </div>
                            <img alt="Video thumb" className="w-full h-full object-cover opacity-60 transition-transform duration-300 group-hover:scale-105" src={images[0]} />
                        </button>
                    </div>

                    {/* Compatibility Warning (Desktop) */}
                    <div className="hidden lg:block bg-blue-50 border border-blue-100 rounded-lg p-4 mt-2">
                        <div className="flex gap-3">
                            <span className="material-symbols-outlined text-blue-600 mt-0.5">info</span>
                            <div>
                                <h4 className="text-sm font-semibold text-blue-900">Professional Installation Recommended</h4>
                                <p className="text-sm text-blue-700 mt-1">
                                    This part requires micro-soldering for True Tone transfer. Ensure you have the correct programmer before installation.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Product Details & Pricing */}
                <div className="lg:col-span-5 flex flex-col h-full">
                    <div className="sticky top-24 space-y-8">
                        {/* Header Info */}
                        <div className="space-y-4">
                            <div className="flex items-start justify-between gap-4">
                                <h1 className="text-3xl font-bold text-text-main leading-tight">iPhone 14 Pro OLED Display Assembly - Soft OLED</h1>
                                <button className="text-gray-400 hover:text-red-500 transition-colors">
                                    <span className="material-symbols-outlined text-2xl">favorite</span>
                                </button>
                            </div>
                            <div className="flex flex-wrap items-center gap-4 text-sm">
                                <div className="flex items-center gap-1">
                                    <div className="flex text-yellow-400 text-lg">
                                        <span className="material-symbols-outlined fill-current">star</span>
                                        <span className="material-symbols-outlined fill-current mt-0.5">star</span>
                                        <span className="material-symbols-outlined fill-current mt-0.5">star</span>
                                        <span className="material-symbols-outlined fill-current mt-0.5">star</span>
                                        <span className="material-symbols-outlined fill-current mt-0.5 text-gray-300">star</span>
                                    </div>
                                    <span className="font-medium ml-1 text-gray-700">4.8</span>
                                    <span className="text-gray-400">(124 reviews)</span>
                                </div>
                                <div className="h-4 w-px bg-gray-300"></div>
                                <span className="text-gray-500">SKU: <span className="font-mono text-text-main font-medium">14P-OLED-S</span></span>
                                <div className="h-4 w-px bg-gray-300"></div>
                                <span className="text-gray-500">Condition: <span className="text-text-main font-medium">New</span></span>
                            </div>
                        </div>

                        {/* Pricing Card */}
                        <div className="bg-white rounded-2xl border border-gray-100 p-8 shadow-lg shadow-gray-200/50 flex flex-col gap-6">

                            {/* Color Selection */}
                            <div className="space-y-3">
                                <h3 className="text-sm font-bold text-text-main">
                                    Color: <span className="text-gray-500 font-normal ml-1">{selectedColor}</span>
                                </h3>
                                <div className="flex items-center gap-3">
                                    {colors.map((color) => (
                                        <button
                                            key={color.name}
                                            onClick={() => setSelectedColor(color.name)}
                                            className={`size-10 rounded-full border-2 transition-all duration-200 focus:outline-none ${selectedColor === color.name ? 'border-primary ring-2 ring-primary/20 scale-110 shadow-md' : 'border-transparent hover:scale-105 hover:shadow-sm ring-1 ring-border-light'}`}
                                            aria-label={`Select ${color.name} color`}
                                            title={color.name}
                                        >
                                            <span className={`block w-full h-full rounded-full border border-black/10 shadow-inner ${color.colorClass}`} />
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="h-px w-full bg-border-light"></div>

                            {/* Price */}
                            <div className="flex items-baseline gap-2">
                                <span className="text-5xl font-bold text-text-main tracking-tight transition-all">$145.00</span>
                                <span className="text-lg text-gray-500 font-medium">/ unit</span>
                            </div>

                            {/* Bulk Pricing Table */}
                            <div>
                                <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                                    <span className="material-symbols-outlined text-sm">price_check</span>
                                    Bulk Pricing Tiers
                                </h3>
                                <div className="w-full overflow-hidden rounded-xl border border-gray-200">
                                    <table className="w-full text-sm text-left">
                                        <thead className="bg-gray-50/80 text-gray-500 font-semibold text-xs uppercase">
                                            <tr>
                                                <th className="px-4 py-3 border-b border-r border-gray-200">Quantity</th>
                                                <th className="px-4 py-3 border-b border-gray-200">Price Per Unit</th>
                                                <th className="px-4 py-3 border-b border-gray-200 text-right">Savings</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-gray-100 bg-white">
                                            {bulkTiers.map((tier) => (
                                                <tr
                                                    key={tier.id}
                                                    onClick={() => setSelectedTier(tier.id)}
                                                    className={`group transition-all duration-200 cursor-pointer ${selectedTier === tier.id ? 'bg-primary/5 ring-1 ring-inset ring-primary' : 'hover:bg-gray-50'}`}
                                                >
                                                    <td className="px-4 py-3.5 border-r border-gray-100 font-medium text-text-main flex items-center gap-2">
                                                        {tier.range}
                                                        {tier.popular && <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary text-white font-bold ml-1 shadow-sm">POPULAR</span>}
                                                    </td>
                                                    <td className={`px-4 py-3.5 ${selectedTier === tier.id ? 'text-primary font-bold' : 'text-gray-700'}`}>
                                                        {tier.price}
                                                    </td>
                                                    <td className={`px-4 py-3.5 text-right font-medium ${tier.savings !== '-' ? 'text-green-600' : 'text-gray-400'}`}>
                                                        {tier.savings}
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Add to Cart */}
                            <div className="flex gap-4 pt-2">
                                <div className="w-32 flex items-center rounded-xl border-2 border-gray-200 bg-white overflow-hidden transition-colors focus-within:border-primary">
                                    <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined text-sm">remove</span>
                                    </button>
                                    <input className="w-full text-center border-none p-0 focus:ring-0 text-text-main bg-transparent font-medium" type="number" defaultValue="1" />
                                    <button className="w-10 h-full flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
                                        <span className="material-symbols-outlined text-sm">add</span>
                                    </button>
                                </div>
                                <button className="flex-1 bg-primary hover:bg-primary-hover text-white rounded-xl font-bold shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/40 hover:scale-[1.02] flex items-center justify-center gap-2 h-14">
                                    <span className="material-symbols-outlined transition-transform duration-300 group-hover:scale-110">shopping_cart_checkout</span>
                                    Add to Cart
                                </button>
                            </div>

                            {/* Trust Badges */}
                            <div className="grid grid-cols-3 gap-3 mt-2 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                                <div className="flex flex-col items-center text-center gap-1.5">
                                    <div className="p-2 rounded-full bg-green-100/50 text-green-600">
                                        <span className="material-symbols-outlined text-xl">gpp_good</span>
                                    </div>
                                    <span className="text-[11px] font-bold text-text-main leading-tight">Secure Payment</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-1.5 border-l border-r border-gray-200 px-2">
                                    <div className="p-2 rounded-full bg-blue-100/50 text-blue-600">
                                        <span className="material-symbols-outlined text-xl">local_shipping</span>
                                    </div>
                                    <span className="text-[11px] font-bold text-text-main leading-tight">Fast Shipping</span>
                                </div>
                                <div className="flex flex-col items-center text-center gap-1.5">
                                    <div className="p-2 rounded-full bg-purple-100/50 text-purple-600">
                                        <span className="material-symbols-outlined text-xl">verified</span>
                                    </div>
                                    <span className="text-[11px] font-bold text-text-main leading-tight">Warranty Protection</span>
                                </div>
                            </div>
                        </div>

                        {/* Specifications Summary */}
                        <div className="space-y-3">
                            <h3 className="text-sm font-bold text-text-main">Quick Specs</h3>
                            <ul className="space-y-2 text-sm text-gray-600">
                                <li className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                                    <span>Technology</span>
                                    <span className="font-medium text-text-main">Soft OLED (Comparable to OEM)</span>
                                </li>
                                <li className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                                    <span>Refresh Rate</span>
                                    <span className="font-medium text-text-main">120Hz ProMotion</span>
                                </li>
                                <li className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                                    <span>Size</span>
                                    <span className="font-medium text-text-main">6.1-inch</span>
                                </li>
                                <li className="flex justify-between border-b border-dashed border-gray-200 pb-1">
                                    <span>IC Transfer</span>
                                    <span className="font-medium text-text-main">Required for True Tone</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            {/* Detailed Info Section */}
            <div className="mt-16 lg:mt-24">
                <div className="border-b border-border-light mb-8">
                    <div className="flex gap-8 overflow-x-auto pb-px">
                        <button className="pb-4 px-2 border-b-2 border-primary text-primary font-bold text-sm whitespace-nowrap">Compatibility &amp; Models</button>
                        <button className="pb-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-text-main font-medium text-sm transition-colors whitespace-nowrap">Full Specifications</button>
                        <button className="pb-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-text-main font-medium text-sm transition-colors whitespace-nowrap">Warranty &amp; Returns</button>
                        <button className="pb-4 px-2 border-b-2 border-transparent text-gray-500 hover:text-text-main font-medium text-sm transition-colors whitespace-nowrap">Reviews (124)</button>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-text-main">Compatible Models</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            This display assembly is specifically engineered for the iPhone 14 Pro. Please verify your model number in Settings &gt; General &gt; About before purchasing. Installing on an incompatible model may cause damage to the logic board.
                        </p>
                        <div className="bg-gray-50 rounded-lg border border-border-light overflow-hidden">
                            <table className="w-full text-sm">
                                <thead className="bg-gray-100 text-gray-500 text-xs uppercase font-semibold">
                                    <tr>
                                        <th className="px-4 py-3 text-left border-b border-border-light">Device Name</th>
                                        <th className="px-4 py-3 text-left border-b border-border-light">Model Number(s)</th>
                                        <th className="px-4 py-3 text-left border-b border-border-light">Year</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-border-light">
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-text-main">iPhone 14 Pro</td>
                                        <td className="px-4 py-3 text-gray-600 font-mono">A2650, A2889, A2890</td>
                                        <td className="px-4 py-3 text-gray-600">2022</td>
                                    </tr>
                                    <tr>
                                        <td className="px-4 py-3 font-medium text-text-main">iPhone 14 Pro (Global)</td>
                                        <td className="px-4 py-3 text-gray-600 font-mono">A2892, A2891</td>
                                        <td className="px-4 py-3 text-gray-600">2022</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="space-y-6">
                        <h3 className="text-lg font-bold text-text-main">Installation Notes</h3>
                        <ul className="space-y-4">
                            <li className="flex gap-4 items-start">
                                <div className="size-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0 text-orange-600">
                                    <span className="material-symbols-outlined text-lg">warning</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-text-main">True Tone Programming</h4>
                                    <p className="text-xs text-gray-600 mt-1">
                                        You must transfer the serial data from the original screen to this new screen using a programmer (JC V1S or similar) to retain True Tone functionality.
                                    </p>
                                </div>
                            </li>
                            <li className="flex gap-4 items-start">
                                <div className="size-8 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
                                    <span className="material-symbols-outlined text-lg">water_drop</span>
                                </div>
                                <div>
                                    <h4 className="font-bold text-sm text-text-main">Water Resistance</h4>
                                    <p className="text-xs text-gray-600 mt-1">
                                        Replacing the screen compromises the original IP68 seal. We strongly recommend applying a new waterproof adhesive seal (sold separately) during reassembly.
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Related Tools Section */}
            <div className="mt-20 mb-10">
                <div className="flex items-center justify-between mb-6">
                    <h2 className="text-xl font-bold text-text-main">Frequently Bought Together</h2>
                    <div className="flex gap-2">
                        <button className="size-8 flex items-center justify-center rounded-full border border-border-light hover:bg-gray-100 transition-colors text-gray-600">
                            <span className="material-symbols-outlined text-lg">chevron_left</span>
                        </button>
                        <button className="size-8 flex items-center justify-center rounded-full border border-border-light hover:bg-gray-100 transition-colors text-gray-600">
                            <span className="material-symbols-outlined text-lg">chevron_right</span>
                        </button>
                    </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6">
                    {frequentlyBought.map((item, idx) => (
                        <div key={idx} className={`group flex flex-col bg-white rounded-xl border border-border-light overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-primary/30 ${idx === 4 ? 'hidden lg:flex' : ''}`}>
                            <div className="relative aspect-square bg-gray-50 p-6 flex items-center justify-center overflow-hidden">
                                <img alt={item.title} className="max-h-full object-contain mix-blend-multiply transition-transform duration-300 group-hover:scale-110" src={item.img} />
                                <button className="absolute top-3 right-3 p-1.5 rounded-full bg-white text-gray-400 hover:text-red-500 hover:bg-red-50 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-sm hover:scale-110">
                                    <span className="material-symbols-outlined text-lg">favorite</span>
                                </button>
                            </div>
                            <div className="p-4 flex flex-col flex-1">
                                <h4 className="text-sm font-semibold text-text-main line-clamp-2 mb-1">{item.title}</h4>
                                <div className="mt-auto pt-3 flex items-center justify-between">
                                    <span className="font-bold text-text-main">{item.price}</span>
                                    <button className="size-8 flex items-center justify-center rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-white transition-colors">
                                        <span className="material-symbols-outlined text-lg">add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
