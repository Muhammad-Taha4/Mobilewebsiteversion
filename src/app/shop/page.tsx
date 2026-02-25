"use client";
import { useState, useEffect } from "react";
import SidebarFilters from "@/components/SidebarFilters";
import ProductCard from "@/components/ProductCard";

export default function ShopPage() {
    const [isFiltering, setIsFiltering] = useState(true);

    useEffect(() => {
        // Shimmer effect lock during filter evaluation
        const timer = setTimeout(() => setIsFiltering(false), 1200);
        return () => clearTimeout(timer);
    }, []);
    const products = [
        {
            title: "iPhone 14 Pro Max OLED Assembly Replacement",
            brand: "Apple - iPhone 14 Pro Max",
            price: "$210.00",
            badge: "OEM Refurb",
            badgeColor: "purple" as const,
            stockStatus: "In Stock",
            stockCount: "120+ units",
            imageSrc: "/assets/B1255519-2-400x400.webp"
        },
        {
            title: "Samsung Galaxy S23 Ultra Display Assembly with Frame",
            brand: "Samsung - Galaxy S23 Ultra",
            price: "$245.00",
            badge: "Service Pack",
            badgeColor: "green" as const,
            stockStatus: "Low Stock",
            stockCount: "Only 8 left",
            imageSrc: "/assets/C1-1.webp"
        },
        {
            title: "iPhone 11 LCD Screen Replacement (In-Cell)",
            brand: "Apple - iPhone 11",
            price: "$18.50",
            badge: "Premium Aftermarket",
            badgeColor: "blue" as const,
            stockStatus: "In Stock",
            stockCount: "1000+ units",
            imageSrc: "/assets/B1255519-1-400x400.webp"
        },
        {
            title: "Google Pixel 7 OLED Display Panel",
            brand: "Google - Pixel 7",
            price: "$135.00",
            badge: "Premium Aftermarket",
            badgeColor: "blue" as const,
            stockStatus: "In Stock",
            stockCount: "50+ units",
            imageSrc: "/assets/B1288001-1-400x400-1.webp"
        },
        {
            title: "iPhone 13 / 13 Pro Replacement Housing (Space Gray)",
            brand: "Apple - iPhone 13",
            price: "$45.00",
            badge: "OEM Pull",
            badgeColor: "purple" as const,
            stockStatus: "In Stock",
            stockCount: "200+ units",
            imageSrc: "/assets/C2.webp"
        },
        {
            title: "Professional Precision 70-in-1 Screwdriver Set",
            brand: "iShine Tools - Pro Toolkit",
            price: "$24.50",
            badge: "Clearance",
            badgeColor: "red" as const,
            stockStatus: "In Stock",
            stockCount: "500+ units",
            imageSrc: "/assets/6092C-Professional-Precision-70-in-1-Multifunction-Screwdriver-Set-in-lahore.webp"
        },
    ];

    return (
        <div className="bg-background-light min-h-screen">
            <div className="mx-auto flex w-full max-w-[1440px] flex-1 items-start gap-8 px-4 py-8 sm:px-6 lg:px-8">
                <SidebarFilters />

                <main className="flex-1">
                    {/* Breadcrumbs & Title */}
                    <div className="mb-6">
                        <nav aria-label="Breadcrumb" className="flex text-sm text-text-secondary mb-2">
                            <ol className="flex items-center space-x-2">
                                <li><a className="hover:text-primary transition" href="/">Home</a></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li><a className="hover:text-primary transition" href="/shop">Parts</a></li>
                                <li><span className="text-gray-300">/</span></li>
                                <li aria-current="page" className="font-medium text-text-main">LCD Screens &amp; Digitizers</li>
                            </ol>
                        </nav>
                        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                            <div>
                                <h1 className="text-3xl font-extrabold tracking-tight text-text-main">LCD Screens &amp; Digitizers</h1>
                                <p className="mt-2 text-sm text-text-secondary">Showing <span className="font-bold text-text-main">124 results</span> for <span className="font-bold text-text-main">iPhone</span> in <span className="font-bold text-text-main">LCD Screens</span>.</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="relative">
                                    <select className="appearance-none cursor-pointer rounded-lg border border-border-light bg-surface-light py-2 pl-3 pr-10 text-sm font-medium text-text-main shadow-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary">
                                        <option>Sort: Best Match</option>
                                        <option>Price: Low to High</option>
                                        <option>Price: High to Low</option>
                                        <option>Newest Arrivals</option>
                                    </select>
                                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-text-secondary">
                                        <span className="material-symbols-outlined text-[20px]">expand_more</span>
                                    </div>
                                </div>
                                <div className="flex rounded-lg border border-border-light bg-surface-light p-1 shadow-sm">
                                    <button className="rounded p-1 text-primary bg-primary/10">
                                        <span className="material-symbols-outlined text-[20px]">grid_view</span>
                                    </button>
                                    <button className="rounded p-1 text-text-secondary hover:text-primary hover:bg-background-light transition">
                                        <span className="material-symbols-outlined text-[20px]">view_list</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Active Filters */}
                    <div className="mb-6 flex flex-wrap gap-2">
                        {["Apple", "LCD Screens", "OEM Refurb"].map(filter => (
                            <span key={filter} className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary ring-1 ring-inset ring-primary/20">
                                {filter}
                                <button className="ml-1.5 inline-flex size-4 items-center justify-center rounded-full hover:bg-primary/20 transition">
                                    <span className="material-symbols-outlined text-[14px]">close</span>
                                </button>
                            </span>
                        ))}
                    </div>

                    {/* Bulk Actions Bar */}
                    <div className="mb-6 flex flex-col sm:flex-row items-start sm:items-center justify-between bg-primary/5 rounded-lg border border-primary/20 p-3 gap-4">
                        <div className="flex items-center gap-3">
                            <input type="checkbox" className="size-4 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer shadow-sm hover:scale-110 transition-transform" />
                            <span className="text-sm font-semibold text-text-main">0 Items Selected</span>
                        </div>
                        <div className="flex flex-wrap gap-2 w-full sm:w-auto">
                            <button className="flex-1 sm:flex-none text-xs font-bold bg-white border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition shadow-sm flex items-center justify-center gap-1 opacity-50 cursor-not-allowed">
                                <span className="material-symbols-outlined text-[16px]">compare_arrows</span>
                                Compare Selected
                            </button>
                            <button className="flex-1 sm:flex-none text-xs font-bold bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary-hover transition shadow-sm flex items-center justify-center gap-1 opacity-50 cursor-not-allowed">
                                <span className="material-symbols-outlined text-[16px]">shopping_cart_checkout</span>
                                Add Selected to Cart
                            </button>
                        </div>
                    </div>

                    {/* Product Grid / Skeleton */}
                    {isFiltering ? (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {[1, 2, 3, 4, 5, 6].map((sk) => (
                                <div key={sk} className="flex flex-col overflow-hidden rounded-xl border border-border-light bg-white shadow-sm h-[420px]">
                                    <div className="h-56 w-full bg-slate-100 animate-pulse"></div>
                                    <div className="p-5 flex-1 flex flex-col gap-3">
                                        <div className="h-3 w-1/3 bg-slate-200 animate-pulse rounded"></div>
                                        <div className="h-5 w-3/4 bg-slate-200 animate-pulse rounded"></div>
                                        <div className="h-6 w-1/4 bg-slate-200 animate-pulse rounded mt-2"></div>
                                        <div className="mt-auto h-10 w-full bg-slate-200 animate-pulse rounded-lg"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                            {products.map((m, i) => (
                                <ProductCard
                                    key={i}
                                    title={m.title}
                                    brand={m.brand}
                                    price={m.price}
                                    badge={m.badge}
                                    badgeColor={m.badgeColor}
                                    stockStatus={m.stockStatus}
                                    stockCount={m.stockCount}
                                    imageSrc={m.imageSrc}
                                />
                            ))}
                        </div>
                    )}

                    {/* Pagination */}
                    <div className="mt-10 flex items-center justify-between border-t border-border-light pt-6">
                        <p className="text-sm text-text-secondary">Showing <span className="font-medium text-text-main">1</span> to <span className="font-medium text-text-main">6</span> of <span className="font-medium text-text-main">124</span> results</p>
                        <div className="flex gap-2">
                            <button className="inline-flex items-center rounded-lg border border-border-light bg-white px-4 py-2 text-sm font-medium text-text-secondary hover:bg-gray-50 disabled:opacity-50 transition">
                                Previous
                            </button>
                            <button className="inline-flex items-center rounded-lg border border-border-light bg-white px-4 py-2 text-sm font-medium text-text-secondary hover:bg-gray-50 transition">
                                Next
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
}
