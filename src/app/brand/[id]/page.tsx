import Link from "next/link";
import ProductCard from "@/components/ProductCard";

// Using the same category data from the mega menu for consistency
const brandData: Record<string, Record<string, { name: string, badge?: string }[]>> = {
    "Apple": {
        "iPhone": [
            { name: "iPhone 15 Pro Max", badge: "New" },
            { name: "iPhone 15 Pro", badge: "New" },
            { name: "iPhone 15 Plus", badge: "New" },
            { name: "iPhone 15", badge: "New" },
            { name: "iPhone 14 Pro Max" },
            { name: "iPhone 14 Pro" },
            { name: "iPhone 14 Plus" },
            { name: "iPhone 14" },
            { name: "iPhone 13 Pro Max" },
            { name: "iPhone 13 Pro" },
            { name: "iPhone 13 mini" },
            { name: "iPhone 13" },
            { name: "iPhone 12 Pro Max" }
        ],
        "iPad": [
            { name: "iPad Pro 12.9 (6th Gen)", badge: "New" },
            { name: "iPad Pro 11 (4th Gen)" },
            { name: "iPad Air (5th Gen)" },
            { name: "iPad (10th Gen)" },
            { name: "iPad mini (6th Gen)" }
        ],
        "MacBook & iMac": [
            { name: "MacBook Pro M3 Max", badge: "New" },
            { name: "MacBook Pro M3" },
            { name: "MacBook Air M2" },
            { name: "iMac 24\" M3", badge: "New" },
            { name: "Mac mini M2" }
        ],
        "Apple Watch": [
            { name: "Apple Watch Ultra 2", badge: "New" },
            { name: "Apple Watch Series 9" },
            { name: "Apple Watch SE" }
        ]
    },
    "Samsung": {
        "Galaxy S Series": [
            { name: "Galaxy S24 Ultra", badge: "New" },
            { name: "Galaxy S24+", badge: "New" },
            { name: "Galaxy S24", badge: "New" },
            { name: "Galaxy S23 Ultra" },
            { name: "Galaxy S23+" },
            { name: "Galaxy S23" },
            { name: "Galaxy S22 Ultra" }
        ],
        "Galaxy Z Series": [
            { name: "Galaxy Z Fold 5", badge: "New" },
            { name: "Galaxy Z Flip 5", badge: "New" },
            { name: "Galaxy Z Fold 4" },
            { name: "Galaxy Z Flip 4" }
        ],
        "Galaxy Note Series": [
            { name: "Galaxy Note 20 Ultra" },
            { name: "Galaxy Note 20" },
            { name: "Galaxy Note 10+" }
        ],
        "Galaxy A Series": [
            { name: "Galaxy A54 5G" },
            { name: "Galaxy A53 5G" },
            { name: "Galaxy A34 5G" },
            { name: "Galaxy A14 5G" }
        ]
    }
    // Other brands can be added as needed or fetched dynamically
};

// Mock top related products for a given brand
const getRelatedProducts = (brandName: string) => {
    const products = [
        {
            title: `${brandName} Premium Display Assembly`,
            brand: `${brandName} Genuine`,
            price: "$145.00",
            badge: "OEM Refurb",
            badgeColor: "purple" as const,
            stockStatus: "In Stock",
            stockCount: "120+ units",
            imageSrc: "/assets/C1-1.webp"
        },
        {
            title: `${brandName} High-Capacity Battery Replacement`,
            brand: `${brandName} Aftermarket`,
            price: "$25.00",
            badge: "Service Pack",
            badgeColor: "green" as const,
            stockStatus: "In Stock",
            stockCount: "500+ units",
            imageSrc: "/assets/B1083502-1-400x400-1.webp"
        },
        {
            title: `${brandName} Charging Port Flex Cable`,
            brand: `${brandName} Pull`,
            price: "$18.50",
            badge: "Premium Aftermarket",
            badgeColor: "blue" as const,
            stockStatus: "Low Stock",
            stockCount: "Only 8 left",
            imageSrc: "/assets/B1288001-1-400x400-1.webp"
        }
    ];

    return products;
};

export default function BrandPage({ params }: { params: { id: string } }) {
    // Decode and format the brand name (e.g., 'Apple', 'Samsung')
    const rawId = decodeURIComponent(params.id);
    // Basic capitalization for aesthetic purposes if needed
    const brandName = rawId.charAt(0).toUpperCase() + rawId.slice(1);

    // Fallback if brand data isn't in our hardcoded list above (e.g. Motorola)
    // In a real app this would fetch from an API
    const data = brandData[brandName] || brandData["Apple"];
    const relatedProducts = getRelatedProducts(brandName);

    return (
        <div className="bg-background-light min-h-screen">
            <div className="mx-auto flex w-full max-w-[1440px] flex-col md:flex-row items-start gap-8 px-4 py-8 sm:px-6 lg:px-8">

                {/* Left Sidebar - Persistent Brand Categories */}
                <aside className="w-full md:w-72 shrink-0 bg-white rounded-xl border border-border-light shadow-sm p-5 sticky top-24">
                    <h2 className="text-xl font-extrabold text-[#0B4182] mb-6 flex items-center gap-2">
                        <span className="material-symbols-outlined">category</span>
                        {brandName} Devices
                    </h2>

                    <div className="space-y-6">
                        {Object.keys(data).map((category, idx) => (
                            <div key={idx}>
                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 border-b border-slate-100 pb-2">
                                    {category}
                                </h3>
                                <ul className="flex flex-col gap-2 relative">
                                    {data[category].slice(0, 5).map((model, mIdx) => (
                                        <li key={mIdx}>
                                            <Link href="/shop" className="text-sm font-semibold text-slate-600 hover:text-[#0B4182] hover:bg-slate-50 px-3 py-2 rounded-lg transition-colors flex items-center justify-between group">
                                                <span className="truncate group-hover:translate-x-1 transition-transform">{model.name}</span>
                                                <span className="material-symbols-outlined text-[16px] text-slate-300 opacity-0 group-hover:opacity-100 transition-opacity">chevron_right</span>
                                            </Link>
                                        </li>
                                    ))}
                                    {data[category].length > 5 && (
                                        <li>
                                            <button className="text-xs font-bold text-[#0B4182] hover:text-red-600 transition-colors px-3 py-1 flex items-center gap-1 mt-1">
                                                View {data[category].length - 5} more
                                            </button>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        ))}
                    </div>
                </aside>

                {/* Main Content Area */}
                <main className="flex-1 w-full">
                    {/* Header & Search */}
                    <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4 bg-white p-6 rounded-xl border border-border-light shadow-sm relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-64 h-64 bg-[#0B4182]/5 rounded-full blur-3xl -mr-20 -mt-20 pointer-events-none"></div>

                        <div className="relative z-10 w-full md:w-auto">
                            <nav aria-label="Breadcrumb" className="flex text-sm text-text-secondary mb-3">
                                <ol className="flex items-center space-x-2">
                                    <li><Link className="hover:text-primary transition font-medium" href="/">Home</Link></li>
                                    <li><span className="text-slate-300">/</span></li>
                                    <li><Link className="hover:text-primary transition font-medium" href="/shop">Brands</Link></li>
                                    <li><span className="text-slate-300">/</span></li>
                                    <li aria-current="page" className="font-bold text-[#0B4182]">{brandName}</li>
                                </ol>
                            </nav>
                            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 mb-2">All {brandName} Models</h1>
                            <p className="text-slate-500">Select a specific device model to view all compatible premium repair parts.</p>
                        </div>

                        <div className="relative z-10 w-full md:w-80 shrink-0">
                            <div className="relative">
                                <input
                                    type="text"
                                    placeholder={`Search all ${brandName} models...`}
                                    className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-[#0B4182] focus:ring-1 focus:ring-[#0B4182] transition-colors font-medium shadow-inner"
                                />
                                <span className="material-symbols-outlined absolute left-4 top-3 text-[22px] text-slate-400">search</span>
                            </div>
                        </div>
                    </div>

                    {/* Model Grids */}
                    <div className="space-y-10">
                        {Object.entries(data).map(([groupName, groupItems], idx) => (
                            <section key={idx} className="bg-white rounded-xl border border-border-light shadow-sm overflow-hidden">
                                <div className="bg-slate-50/80 px-6 py-4 border-b border-border-light flex items-center justify-between">
                                    <h2 className="text-xl font-bold text-slate-800 flex items-center gap-2">
                                        <div className="w-1.5 h-6 bg-[#0B4182] rounded-full"></div>
                                        {groupName}
                                    </h2>
                                    <span className="bg-white border border-slate-200 text-slate-500 text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                        {groupItems.length} Models
                                    </span>
                                </div>
                                <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                                    {groupItems.map((item, idy) => (
                                        <Link
                                            href="/shop"
                                            key={idy}
                                            className="group flex flex-col justify-center p-4 rounded-xl border border-transparent hover:border-slate-200 hover:bg-slate-50 hover:shadow-md transition-all relative overflow-hidden"
                                        >
                                            <div className="flex items-center justify-between z-10">
                                                <span className="font-bold text-slate-700 group-hover:text-[#0B4182] transition-colors">{item.name}</span>
                                                {item.badge && (
                                                    <span className="text-[10px] font-extrabold bg-gradient-to-r from-[#0B4182] to-blue-600 text-white px-2 py-0.5 rounded shadow-sm uppercase tracking-widest shrink-0">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </div>
                                            <div className="mt-2 text-xs font-medium text-slate-400 group-hover:text-brand flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0 z-10">
                                                View Parts <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                                            </div>

                                            {/* Decorative Background Icon */}
                                            <span className="material-symbols-outlined absolute right-[-20px] bottom-[-20px] text-[80px] text-slate-50 opacity-0 group-hover:opacity-100 transition-all group-hover:rotate-12 pointer-events-none">
                                                smartphone
                                            </span>
                                        </Link>
                                    ))}
                                </div>
                            </section>
                        ))}
                    </div>

                    {/* Top Selling Related Parts */}
                    <section className="mt-16 bg-white p-8 rounded-xl border border-border-light shadow-sm relative overflow-hidden border-t-4 border-t-[#0B4182]">
                        <div className="absolute -right-20 -top-20 opacity-5">
                            <span className="material-symbols-outlined text-[300px]">auto_awesome</span>
                        </div>
                        <div className="relative z-10 mb-8">
                            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">Top Selling Parts for {brandName}</h2>
                            <p className="text-sm text-slate-500 mt-1 font-medium">Restock your inventory with our most highly rated {brandName} replacement parts.</p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
                            {relatedProducts.map((p, i) => (
                                <ProductCard
                                    key={i}
                                    title={p.title}
                                    brand={p.brand}
                                    price={p.price}
                                    badge={p.badge}
                                    badgeColor={p.badgeColor}
                                    stockStatus={p.stockStatus}
                                    stockCount={p.stockCount}
                                    imageSrc={p.imageSrc}
                                />
                            ))}
                        </div>
                    </section>

                </main>
            </div>
        </div>
    );
}
