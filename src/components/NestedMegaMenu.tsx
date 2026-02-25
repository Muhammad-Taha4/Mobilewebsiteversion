"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

// 3-Level Nested Architecture
const categoryData: Record<string, Record<string, { name: string, badge?: string }[]>> = {
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
    },
    "Motorola": {
        "Moto G Series": [
            { name: "Moto G Stylus 5G", badge: "New" },
            { name: "Moto G Power 5G" },
            { name: "Moto G Play" }
        ],
        "Motorola Edge": [
            { name: "Motorola Edge+ (2023)" },
            { name: "Motorola Edge (2023)" },
            { name: "Motorola Edge 30 Ultra" }
        ],
        "Motorola Razr": [
            { name: "Motorola Razr+ (2023)", badge: "New" },
            { name: "Motorola Razr (2023)" }
        ]
    },
    "Google": {
        "Pixel Phones": [
            { name: "Pixel 8 Pro", badge: "New" },
            { name: "Pixel 8", badge: "New" },
            { name: "Pixel 7a" },
            { name: "Pixel 7 Pro" },
            { name: "Pixel 7" },
            { name: "Pixel Fold" }
        ],
        "Pixel Tablets": [
            { name: "Pixel Tablet" }
        ]
    },
    "Other Parts": {
        "OnePlus": [
            { name: "OnePlus 12", badge: "New" },
            { name: "OnePlus 11 5G" },
            { name: "OnePlus Open" },
            { name: "OnePlus Nord N30" }
        ],
        "LG": [
            { name: "LG V60 ThinQ" },
            { name: "LG Velvet 5G" },
            { name: "LG Wing 5G" }
        ],
        "Huawei": [
            { name: "Huawei P60 Pro" },
            { name: "Huawei Mate 60 Pro", badge: "New" }
        ]
    },
    "Game Console": {
        "PlayStation": [
            { name: "PlayStation 5 Disc Edition" },
            { name: "PlayStation 5 Digital Edition" },
            { name: "PlayStation 4 Pro" },
            { name: "DualSense Controllers" }
        ],
        "Xbox": [
            { name: "Xbox Series X", badge: "New" },
            { name: "Xbox Series S" },
            { name: "Xbox One X" },
            { name: "Xbox Wireless Controllers" }
        ],
        "Nintendo": [
            { name: "Nintendo Switch OLED" },
            { name: "Nintendo Switch V2" },
            { name: "Nintendo Switch Lite" },
            { name: "Joy-Con Replacements" }
        ],
        "Handhelds": [
            { name: "Steam Deck", badge: "New" },
            { name: "ASUS ROG Ally" },
            { name: "Logitech G Cloud" }
        ]
    },
    "Accessories": {
        "Power": [
            { name: "20W USB-C Power Adapters" },
            { name: "MagSafe Wireless Chargers" },
            { name: "Braided Charging Cables" },
            { name: "Power Banks" }
        ],
        "Protection": [
            { name: "Tempered Glass (10-packs)" },
            { name: "Clear Shockproof Cases" },
            { name: "Privacy Screen Protectors" },
            { name: "Camera Lens Protectors" }
        ]
    },
    "Tools & Supplies": {
        "Hand Tools": [
            { name: "iFixit Pro Tech Toolkit" },
            { name: "Precision Screwdrivers" },
            { name: "Spudgers & Pry Tools" },
            { name: "Tweezers Sets" }
        ],
        "Equipment": [
            { name: "Digital Microscopes", badge: "New" },
            { name: "Hot Air Rework Stations" },
            { name: "Soldering Irons" },
            { name: "Thermal Imaging Cameras", badge: "New" }
        ],
        "Consumables": [
            { name: "B7000 Adhesive Glue" },
            { name: "Solder Paste" },
            { name: "Flux Syringes" },
            { name: "Kapton Tape" }
        ]
    },
    "Refurbishing": {
        "Machines": [
            { name: "OCA Laminating Machines" },
            { name: "Vacuum Bubble Removers" },
            { name: "Screen Separator Hot Plates" },
            { name: "LCD Polishing Machines" }
        ],
        "Materials": [
            { name: "OCA Clear Adhesive Sheets" },
            { name: "Polarizer Film" },
            { name: "Bezel Frames with Glue" },
            { name: "Anti-Static Mats" }
        ]
    },
    "Board Components": {
        "Integrated Circuits": [
            { name: "Tristar Charging ICs" },
            { name: "Audio ICs" },
            { name: "Touch ICs" },
            { name: "NAND Flash Memory" }
        ],
        "Connectors": [
            { name: "FPC Battery Connectors" },
            { name: "FPC Display Connectors" },
            { name: "Board-to-Board Terminals" }
        ],
        "Micro-components": [
            { name: "SMD Capacitors" },
            { name: "SMD Resistors" },
            { name: "Inductor Coils" }
        ]
    },
    "Pre-Owned Devices": {
        "Apple Devices": [
            { name: "iPhone 14 Series (Grade A)" },
            { name: "iPhone 13 Series (Grade A/B)" },
            { name: "iPad Pro (Refurbished)" }
        ],
        "Samsung Devices": [
            { name: "Galaxy S23 Series (Grade A)" },
            { name: "Galaxy S22 Series (Grade B)" }
        ]
    }
};

export default function NestedMegaMenu() {
    const [activeMenu, setActiveMenu] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
    const [activeSubCategory, setActiveSubCategory] = useState<string | null>(null);
    const [searchQuery, setSearchQuery] = useState("");
    const menuRef = useRef<HTMLDivElement>(null);

    // Initialize the Subcategory Automatically When a Category Changes
    useEffect(() => {
        if (selectedCategory && categoryData[selectedCategory]) {
            setActiveSubCategory("Overview");
        }
    }, [selectedCategory]);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setActiveMenu(false);
                setSelectedCategory(null);
                setSearchQuery("");
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const toggleMenu = () => {
        if (activeMenu && !selectedCategory) {
            setActiveMenu(false);
            setSearchQuery("");
        } else {
            setActiveMenu(true);
            setSelectedCategory(null);
            setSearchQuery("");
        }
    };

    const handleCategoryClick = (cat: string) => {
        setSelectedCategory(cat);
        setActiveMenu(true);
        setSearchQuery("");
    };

    const handleBack = () => {
        setSelectedCategory(null);
        setSearchQuery("");
    };

    const mainCategories = Object.keys(categoryData);
    const navBrands = [
        "Apple", "Samsung", "Motorola", "Google", "Other Parts", "Accessories", "Tools & Supplies"
    ];

    // Safety checks for 3-Level Data rendering
    const currentSidebarOptions = selectedCategory ? ["Overview", ...Object.keys(categoryData[selectedCategory] || {})] : [];

    // Aggregating items for search across the whole Brand
    const allBrandItems = selectedCategory ? Object.values(categoryData[selectedCategory]).flat() : [];

    // Determine what array to search against based on Overview vs Specific Subcat
    const searchSourceArray = (selectedCategory && activeSubCategory === "Overview")
        ? allBrandItems
        : (selectedCategory && activeSubCategory && activeSubCategory !== "Overview")
            ? (categoryData[selectedCategory][activeSubCategory] || [])
            : [];

    const filteredItems = searchSourceArray.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()));

    return (
        <div className="flex flex-row gap-4 items-center w-full h-full" ref={menuRef}>
            {/* All Categories Button Trigger */}
            <div className="relative z-50 h-[38px] md:h-full flex items-center shrink-0">
                <button
                    onClick={toggleMenu}
                    className="h-full bg-brand text-white px-5 flex items-center justify-center gap-2 font-semibold rounded md:rounded-none transition-colors hover:bg-primary-hover text-[14px]"
                >
                    <svg className="w-4 h-4 transition-transform duration-300" style={{ transform: activeMenu && !selectedCategory ? 'rotate(180deg)' : 'none' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                    All Categories
                </button>

                {/* The Dropdown Mega Menu */}
                {activeMenu && (
                    <div className={`absolute top-full mt-0 bg-white shadow-2xl overflow-hidden transition-all duration-300 origin-top-left rounded-b-xl border border-t-0 border-slate-200 ${selectedCategory ? 'w-screen left-0 max-w-[100vw] !fixed !top-[114px]' : 'w-[100vw] md:w-[320px] max-w-[100vw] left-0'}`}>
                        {!selectedCategory ? (
                            <div className="flex flex-col py-3">
                                <div className="px-6 py-3 text-xs font-bold text-slate-400 uppercase tracking-wider border-b border-slate-100 mb-1">
                                    Top Categories
                                </div>
                                {mainCategories.map(cat => (
                                    <button key={cat} onClick={() => handleCategoryClick(cat)} className="px-6 py-4 text-left hover:bg-slate-50 text-slate-800 font-semibold flex justify-between items-center group transition-colors">
                                        <span className="group-hover:text-brand transition-colors text-sm">{cat}</span>
                                        <span className="material-symbols-outlined text-[18px] text-slate-300 group-hover:text-brand group-hover:translate-x-1 transition-all">chevron_right</span>
                                    </button>
                                ))}
                                <div className="my-2 border-t border-slate-100"></div>
                                <Link href="/shop" onClick={() => setActiveMenu(false)} className="px-6 py-3 text-left hover:bg-slate-50 text-slate-500 hover:text-brand font-medium flex items-center gap-3 transition-colors text-sm group">
                                    <span className="material-symbols-outlined text-[18px] text-slate-400 group-hover:text-brand">grid_view</span>
                                    View All Categories
                                </Link>
                            </div>
                        ) : (
                            <div className="flex flex-col md:flex-row min-h-[500px] h-full max-h-[85vh]">
                                {/* Level 2: Left Sidebar Panel */}
                                <div className="w-full md:w-[300px] bg-slate-50 border-r border-slate-200 shrink-0 flex flex-col h-full">
                                    <div className="p-4 border-b border-slate-200/60 bg-white md:bg-transparent shrink-0">
                                        <div className="flex items-center gap-3">
                                            <button onClick={handleBack} className="flex items-center justify-center w-8 h-8 rounded-full bg-white md:bg-slate-200 border border-slate-200 text-slate-500 hover:text-white hover:bg-brand transition-colors shadow-sm md:shadow-none">
                                                <span className="material-symbols-outlined text-[18px]">arrow_back</span>
                                            </button>
                                            <h3 className="text-[17px] font-extrabold text-[#0B4182] leading-tight">{selectedCategory}</h3>
                                        </div>
                                    </div>
                                    <div className="p-3 flex flex-col gap-1 overflow-y-auto custom-scrollbar flex-1">
                                        {currentSidebarOptions.map(subCat => (
                                            <button
                                                key={subCat}
                                                onClick={() => setActiveSubCategory(subCat)}
                                                className={`px-4 py-3 text-left rounded-lg text-sm font-bold flex justify-between items-center transition-all ${activeSubCategory === subCat ? 'bg-[#FAE8E8] text-[#0B4182]' : 'text-slate-600 hover:bg-slate-200/50 hover:text-slate-800'}`}
                                            >
                                                {subCat}
                                                {activeSubCategory === subCat && (
                                                    <span className="material-symbols-outlined text-[18px] text-[#0B4182]">push_pin</span>
                                                )}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                {/* Level 3: Right Grid Models Panel */}
                                <div className="flex-1 p-6 md:p-8 bg-white flex flex-col overflow-hidden h-full">
                                    {/* Header and Search */}
                                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 pb-4 border-b border-slate-100 gap-4 shrink-0">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-6 bg-[#0B4182] rounded-full hidden md:block"></div>
                                            <h4 className="text-xl font-bold text-slate-800">
                                                {activeSubCategory === "Overview" ? `All ${selectedCategory} Models` : `${activeSubCategory} Models`}
                                            </h4>
                                        </div>
                                        <div className="relative w-full md:w-auto">
                                            <input
                                                type="text"
                                                placeholder={`Search ${activeSubCategory === "Overview" ? 'all models' : 'inside ' + activeSubCategory}...`}
                                                value={searchQuery}
                                                onChange={(e) => setSearchQuery(e.target.value)}
                                                className="pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand w-full md:w-80 transition-all font-medium"
                                            />
                                            <span className="material-symbols-outlined absolute left-3 top-2.5 text-[20px] text-slate-400">search</span>
                                        </div>
                                    </div>

                                    {/* Scrollable Content Area */}
                                    <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar pb-20">

                                        {/* Multi-Column Overview State */}
                                        {activeSubCategory === "Overview" && !searchQuery && (
                                            <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8">
                                                {Object.entries(categoryData[selectedCategory] || {}).map(([groupName, groupItems]) => (
                                                    <div key={groupName} className="break-inside-avoid mb-8 bg-white rounded-xl border border-slate-100 shadow-sm p-4 hover:shadow-md transition-shadow">
                                                        <h5 className="font-extrabold text-slate-800 text-sm mb-3 pb-2 border-b border-slate-100 flex items-center justify-between">
                                                            <span>{groupName}</span>
                                                            <span className="bg-slate-100 text-slate-500 text-xs px-2 py-0.5 rounded-full">{groupItems.length}</span>
                                                        </h5>
                                                        <div className="flex flex-col gap-1 mt-3">
                                                            {groupItems.map(item => (
                                                                <Link href={`/brand/${encodeURIComponent(selectedCategory.toLowerCase())}`} key={item.name} onClick={() => { setActiveMenu(false); setSelectedCategory(null); setSearchQuery(""); }} className="flex items-center justify-between text-slate-600 hover:text-[#0B4182] hover:bg-slate-50 p-1.5 rounded transition-colors group">
                                                                    <span className="text-sm font-medium truncate pr-2 group-hover:translate-x-1 transition-transform">{item.name}</span>
                                                                    {item.badge && (
                                                                        <span className="text-[10px] font-extrabold bg-[#0B4182] text-white px-1.5 py-0.5 rounded uppercase tracking-widest shrink-0">
                                                                            {item.badge}
                                                                        </span>
                                                                    )}
                                                                </Link>
                                                            ))}
                                                        </div>
                                                        <div className="mt-4 pt-3 border-t border-slate-50">
                                                            <button onClick={() => setActiveSubCategory(groupName)} className="text-[13px] font-bold text-[#0B4182] hover:text-red-600 transition-colors flex items-center gap-1 group">
                                                                View all {groupName}
                                                                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">arrow_right_alt</span>
                                                            </button>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}

                                        {/* Searching or Specific Subcategory State */}
                                        {(searchQuery || activeSubCategory !== "Overview") && (
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-y-3 gap-x-6">
                                                {filteredItems.map(item => (
                                                    <Link href="/shop" key={item.name} onClick={() => { setActiveMenu(false); setSelectedCategory(null); setSearchQuery(""); }} className="flex items-center gap-3 text-slate-600 hover:text-[#0B4182] hover:bg-slate-50 p-2 rounded transition-colors group border border-transparent hover:border-slate-100">
                                                        <span className="w-1.5 h-1.5 rounded-full bg-slate-300 group-hover:bg-[#0B4182] transition-colors shrink-0"></span>
                                                        <span className="text-sm font-semibold truncate group-hover:text-wrap leading-tight">{item.name}</span>
                                                        {item.badge && (
                                                            <span className="text-[9px] font-extrabold bg-[#0B4182] text-white px-1.5 py-0.5 rounded uppercase tracking-widest shadow-sm shrink-0 ml-auto">
                                                                {item.badge}
                                                            </span>
                                                        )}
                                                    </Link>
                                                ))}
                                                {filteredItems.length === 0 && (
                                                    <div className="col-span-full flex flex-col items-center justify-center py-20 text-slate-400">
                                                        <span className="material-symbols-outlined text-6xl text-slate-200 mb-4 block">search_off</span>
                                                        <p className="font-bold text-slate-500 text-lg">No models found</p>
                                                        <p className="text-sm mt-1">Try adjusting your search for "{searchQuery}"</p>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* Brand Links Container - Single Line Scrollable */}
            <nav className="flex flex-1 min-w-0 flex-row flex-nowrap overflow-x-auto custom-scroll scroll-smooth items-center justify-start gap-x-4 text-[13px] font-bold text-slate-700 h-full pt-1 pb-2 relative">
                {navBrands.map(brand => (
                    <button
                        key={brand}
                        onClick={(e) => {
                            e.preventDefault();
                            if (activeMenu && selectedCategory === brand) {
                                setActiveMenu(false);
                                setSelectedCategory(null);
                            } else {
                                handleCategoryClick(brand);
                            }
                        }}
                        className={`hover:text-red-600 transition-colors whitespace-nowrap outline-none flex items-center gap-1.5 shrink-0 ${selectedCategory === brand && activeMenu ? 'text-red-600' : ''}`}
                    >
                        {brand}
                        <svg className={`w-2.5 h-2.5 transition-transform duration-300 ${selectedCategory === brand && activeMenu ? 'rotate-180 text-red-600' : 'text-slate-400'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                ))}
            </nav>
        </div>
    );
}
