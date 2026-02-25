"use client";
import Link from 'next/link';
import { useState, useRef, useEffect } from 'react';
import NestedMegaMenu from './NestedMegaMenu';

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    const [isSearchActive, setIsSearchActive] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const searchRef = useRef<HTMLDivElement>(null);

    // Close search dropdown if clicked outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
                setIsSearchActive(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    // Mock search results
    const mockSearchResults = [
        { name: "iPhone 14 Pro Max OLED Assembly", price: "$210.00", img: "/assets/B1255519-2-400x400.webp" },
        { name: "Samsung Galaxy S23 Ultra Display", price: "$245.00", img: "/assets/C1-1.webp" },
        { name: "Pro Precision Screwdriver Set", price: "$24.50", img: "/assets/6092C-Professional-Precision-70-in-1-Multifunction-Screwdriver-Set-in-lahore.webp" },
        { name: "iPad Air 5th Gen Digitizer", price: "$45.00", img: "/assets/B1288001-1-400x400-1.webp" }
    ];

    const filteredResults = mockSearchResults.filter(item =>
        item.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <header className="w-full bg-white relative z-50 shadow-sm">
            {/* Top Bar */}
            <div className="bg-gray-50 border-b border-gray-200 text-sm py-2 hidden md:block">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p className="text-gray-500">Welcome to iShine Wireless - Premium Repair Parts</p>
                    <div className="flex gap-4 text-gray-500">
                        <Link href="/contact" className="hover:text-brand transition">Store Locator</Link>
                        <Link href="/account" className="hover:text-brand transition">Track Order</Link>
                        <span className="hover:text-brand transition cursor-pointer">English | USD</span>
                    </div>
                </div>
            </div>

            {/* Main Header / Search */}
            <div className="container mx-auto px-4 py-4 md:py-6 flex items-center justify-between gap-4 md:gap-8">

                {/* Mobile Menu Button */}
                <button
                    onClick={() => setIsMobileMenuOpen(true)}
                    className="md:hidden text-gray-800 hover:text-brand transition"
                >
                    <span className="material-symbols-outlined text-[28px]">menu</span>
                </button>

                <Link href="/" className="text-2xl md:text-3xl font-bold text-brand tracking-tight shrink-0">
                    iShine Wireless<span className="text-gray-800">.</span>
                </Link>

                {/* Desktop/Tablet Search */}
                <div className="hidden md:flex flex-grow w-full max-w-2xl relative" ref={searchRef}>
                    <input
                        type="text"
                        placeholder="Search for screens, batteries, tools..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            setIsSearchActive(true);
                        }}
                        onFocus={() => setIsSearchActive(true)}
                        className="w-full border border-gray-300 rounded-full py-3 px-6 pr-12 text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                    />
                    <button className="absolute right-4 top-3 text-gray-400 hover:text-brand transition">
                        <span className="material-symbols-outlined text-[24px]">search</span>
                    </button>

                    {/* Quick Results Dropdown */}
                    {isSearchActive && searchQuery.length > 0 && (
                        <div className="absolute top-14 left-0 w-full bg-white shadow-xl rounded-xl border border-slate-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2">
                            {filteredResults.length > 0 ? (
                                <div className="max-h-[300px] overflow-y-auto">
                                    <h4 className="px-4 py-2 text-xs font-bold text-slate-400 uppercase tracking-widest bg-slate-50 border-b border-slate-100">Top Matches</h4>
                                    {filteredResults.map((res, i) => (
                                        <Link href="/shop" key={i} onClick={() => setIsSearchActive(false)} className="flex items-center gap-4 p-3 hover:bg-slate-50 transition-colors border-b border-slate-50 group">
                                            <div className="w-10 h-10 bg-slate-100 rounded-md p-1 shrink-0 group-hover:bg-white transition-colors">
                                                <img src={res.img} alt={res.name} className="w-full h-full object-contain mix-blend-multiply" />
                                            </div>
                                            <div className="flex-1">
                                                <p className="text-sm font-bold text-slate-800 group-hover:text-brand transition-colors line-clamp-1">{res.name}</p>
                                                <p className="text-xs text-brand font-semibold">{res.price}</p>
                                            </div>
                                        </Link>
                                    ))}
                                    <Link href="/shop" className="block w-full text-center py-3 text-sm font-bold text-brand hover:bg-brand hover:text-white transition-colors">
                                        View all results for "{searchQuery}"
                                    </Link>
                                </div>
                            ) : (
                                <div className="p-6 text-center text-slate-500 text-sm">
                                    No products found for "{searchQuery}".
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Right Action Icons */}
                <div className="flex items-center gap-4 md:gap-6 shrink-0 text-gray-800">
                    <Link href="/account" className="hidden md:flex items-center gap-2 cursor-pointer hover:text-brand transition">
                        <span className="material-symbols-outlined text-[28px]">person</span>
                        <div className="text-sm leading-tight">
                            <span className="text-gray-400 text-xs block">Account</span>Dashboard
                        </div>
                    </Link>
                    <Link href="/cart" className="flex items-center gap-1 md:gap-2 cursor-pointer hover:text-brand transition">
                        <div className="relative">
                            <span className="material-symbols-outlined text-[28px]">shopping_cart</span>
                            <span className="absolute -top-1 -right-1 bg-brand text-white text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center">3</span>
                        </div>
                        <div className="text-sm leading-tight hidden md:block">
                            <span className="text-gray-400 text-xs block">Total</span>$145.00
                        </div>
                    </Link>
                </div>
            </div>

            {/* Mobile Search Bar (Visible only on mobile) */}
            <div className="md:hidden px-4 pb-4">
                <div className="relative w-full">
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full border border-gray-300 rounded-full py-2.5 px-5 pr-10 text-sm text-gray-800 focus:outline-none focus:border-brand"
                    />
                    <button className="absolute right-3 top-2 text-gray-400">
                        <span className="material-symbols-outlined text-[20px]">search</span>
                    </button>
                </div>
            </div>

            {/* Categories / Mega Menu (Desktop Only) */}
            <div className="bg-white border-y border-gray-200 hidden md:block">
                <div className="container mx-auto px-4 h-12">
                    <NestedMegaMenu />
                </div>
            </div>

            {/* Mobile Drawer Overlay */}
            {isMobileMenuOpen && (
                <div
                    className="fixed inset-0 bg-black/50 z-[60] md:hidden animate-in fade-in"
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            )}

            {/* Mobile Side Drawer */}
            <div className={`fixed inset-y-0 left-0 w-[280px] bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden flex flex-col ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <div className="p-4 border-b border-gray-100 flex items-center justify-between shadow-sm">
                    <span className="text-xl font-bold text-brand">Menu</span>
                    <button onClick={() => setIsMobileMenuOpen(false)} className="text-gray-400 hover:text-brand bg-gray-50 rounded-full p-1">
                        <span className="material-symbols-outlined text-[24px]">close</span>
                    </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                    <nav className="p-4 flex flex-col gap-2">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2 mt-2">Categories</p>
                        {["Apple", "Samsung", "Motorola", "Google", "Other Parts", "Accessories", "Tools & Supplies"].map(cat => (
                            <Link key={cat} href="/shop" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-between text-sm font-semibold text-gray-800 p-3 rounded-lg hover:bg-gray-50 border border-transparent hover:border-gray-100 transition-colors">
                                {cat}
                                <span className="material-symbols-outlined text-[18px] text-gray-400">chevron_right</span>
                            </Link>
                        ))}

                        <div className="my-4 border-t border-gray-100"></div>

                        <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">My Account</p>
                        <Link href="/account" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-sm font-semibold text-gray-800 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <span className="material-symbols-outlined text-[20px] text-brand">dashboard</span>
                            Dashboard
                        </Link>
                        <Link href="/account/orders/123" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-sm font-semibold text-gray-800 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <span className="material-symbols-outlined text-[20px] text-brand">local_shipping</span>
                            Track Order
                        </Link>
                        <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 text-sm font-semibold text-gray-800 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                            <span className="material-symbols-outlined text-[20px] text-brand">support_agent</span>
                            Support
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
