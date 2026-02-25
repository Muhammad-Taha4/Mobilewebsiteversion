export default function SidebarFilters() {
    return (
        <aside className="w-64 shrink-0 hidden lg:block sticky top-24 max-h-[calc(100vh-8rem)] overflow-y-auto custom-scrollbar pr-2">
            <div className="flex items-center justify-between pb-4">
                <h2 className="text-lg font-bold text-text-main">Filters</h2>
                <button className="text-xs font-semibold text-primary hover:text-primary-hover hover:underline">
                    Clear All
                </button>
            </div>
            {/* Availability Toggle */}
            <div className="mb-6 flex items-center justify-between bg-primary/5 p-3 rounded-lg border border-primary/10">
                <span className="text-sm font-semibold text-text-main">Hide Out of Stock</span>
                <label className="relative inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only peer" />
                    <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-primary/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-primary"></div>
                </label>
            </div>
            <div className="space-y-6">
                <div className="border-b border-border-light pb-6">
                    <h3 className="mb-3 text-sm font-semibold text-text-main">Category</h3>
                    <ul className="space-y-2">
                        <li>
                            <div className="flex flex-col gap-2">
                                <label className="flex items-center gap-3 cursor-pointer group">
                                    <input
                                        defaultChecked
                                        className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                        type="checkbox"
                                    />
                                    <span className="text-sm text-text-secondary group-hover:text-primary font-semibold">
                                        LCD Screens (124)
                                    </span>
                                </label>
                                {/* Nested Sub-filters for LCD */}
                                <div className="pl-7 flex flex-col gap-2 border-l border-gray-100 ml-2 mt-1">
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary" />
                                        <span className="text-xs text-text-secondary group-hover:text-primary">With Frame (45)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary" />
                                        <span className="text-xs text-text-secondary group-hover:text-primary">Without Frame (79)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary" />
                                        <span className="text-xs text-text-secondary group-hover:text-primary">OLED (30)</span>
                                    </label>
                                    <label className="flex items-center gap-3 cursor-pointer group">
                                        <input type="checkbox" className="h-3.5 w-3.5 rounded border-gray-300 text-primary focus:ring-primary" />
                                        <span className="text-xs text-text-secondary group-hover:text-primary">In-Cell (94)</span>
                                    </label>
                                </div>
                            </div>
                        </li>
                        <li>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span className="text-sm text-text-secondary group-hover:text-primary">
                                    Batteries (45)
                                </span>
                            </label>
                        </li>
                        <li>
                            <label className="flex items-center gap-3 cursor-pointer group">
                                <input
                                    className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                    type="checkbox"
                                />
                                <span className="text-sm text-text-secondary group-hover:text-primary">
                                    Charging Ports (32)
                                </span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div className="border-b border-border-light pb-6">
                    <button className="flex w-full items-center justify-between py-2 text-sm font-semibold text-text-main group">
                        <span>Brand</span>
                        <span className="material-symbols-outlined text-text-secondary group-hover:text-primary">
                            expand_less
                        </span>
                    </button>
                    {/* Search inside filter */}
                    <div className="mt-2 mb-3 relative">
                        <input type="text" placeholder="Search brands..." className="w-full bg-surface-light border border-border-light rounded-md pl-8 pr-3 py-1.5 text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
                        <span className="material-symbols-outlined absolute left-2 top-1.5 text-[16px] text-gray-400">search</span>
                    </div>
                    <div className="space-y-2">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                defaultChecked
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                type="checkbox"
                            />
                            <span className="text-sm text-text-secondary group-hover:text-primary">
                                Apple
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                type="checkbox"
                            />
                            <span className="text-sm text-text-secondary group-hover:text-primary">
                                Samsung
                            </span>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                type="checkbox"
                            />
                            <span className="text-sm text-text-secondary group-hover:text-primary">
                                Google
                            </span>
                        </label>
                    </div>
                </div>
                <div className="border-b border-border-light pb-6">
                    <button className="flex w-full items-center justify-between py-2 text-sm font-semibold text-text-main group">
                        <span>Model Series</span>
                        <span className="material-symbols-outlined text-text-secondary group-hover:text-primary">
                            expand_more
                        </span>
                    </button>
                    <div className="mt-2 relative">
                        <input type="text" placeholder="e.g. iPhone 15, S23..." className="w-full bg-surface-light border border-border-light rounded-md pl-8 pr-3 py-1.5 text-xs focus:ring-1 focus:ring-primary focus:border-primary outline-none" />
                        <span className="material-symbols-outlined absolute left-2 top-1.5 text-[16px] text-gray-400">search</span>
                    </div>
                </div>
                {/* Color/Variant Filter */}
                <div className="border-b border-border-light pb-6">
                    <h3 className="mb-3 text-sm font-semibold text-text-main">Color / Variant</h3>
                    <div className="flex flex-wrap gap-2">
                        {[{ bg: 'bg-black', name: 'Black' }, { bg: 'bg-white', name: 'White', border: true }, { bg: 'bg-gray-400', name: 'Space Gray' }, { bg: 'bg-yellow-400', name: 'Gold' }, { bg: 'bg-blue-600', name: 'Blue' }, { bg: 'bg-purple-600', name: 'Purple' }].map((color, i) => (
                            <button key={i} title={color.name} className={`size-6 rounded-full ${color.bg} ${color.border ? 'border border-gray-300' : 'border border-transparent'} hover:scale-110 hover:shadow-md transition-all ring-offset-2 hover:ring-2 ring-gray-200 focus:ring-2`}></button>
                        ))}
                    </div>
                </div>
                <div className="border-b border-border-light pb-6">
                    <h3 className="mb-3 text-sm font-semibold text-text-main">
                        Quality Grade
                    </h3>
                    <div className="space-y-2">
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                defaultChecked
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                type="checkbox"
                            />
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-purple-500"></span>
                                <span className="text-sm text-text-secondary group-hover:text-primary">
                                    OEM Refurb
                                </span>
                            </div>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                type="checkbox"
                            />
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-blue-500"></span>
                                <span className="text-sm text-text-secondary group-hover:text-primary">
                                    Premium Aftermarket
                                </span>
                            </div>
                        </label>
                        <label className="flex items-center gap-3 cursor-pointer group">
                            <input
                                className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary"
                                type="checkbox"
                            />
                            <div className="flex items-center gap-2">
                                <span className="size-2 rounded-full bg-green-500"></span>
                                <span className="text-sm text-text-secondary group-hover:text-primary">
                                    Standard
                                </span>
                            </div>
                        </label>
                    </div>
                </div>
                <div className="pb-6">
                    <h3 className="mb-3 text-sm font-semibold text-text-main">
                        Price Range
                    </h3>
                    <div className="flex items-center gap-2">
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <span className="text-gray-500 sm:text-xs">$</span>
                            </div>
                            <input
                                className="block w-full rounded-md border-0 py-1.5 pl-5 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                                id="price-min"
                                name="price-min"
                                placeholder="0"
                                type="text"
                            />
                        </div>
                        <span className="text-gray-400 text-sm">-</span>
                        <div className="relative rounded-md shadow-sm">
                            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                                <span className="text-gray-500 sm:text-xs">$</span>
                            </div>
                            <input
                                className="block w-full rounded-md border-0 py-1.5 pl-5 pr-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-xs sm:leading-6"
                                id="price-max"
                                name="price-max"
                                placeholder="500"
                                type="text"
                            />
                        </div>
                    </div>
                    <button className="mt-3 w-full rounded bg-primary/10 px-3 py-1.5 text-xs font-semibold text-primary hover:bg-primary/20 transition-colors">
                        Apply Price
                    </button>
                </div>
            </div>
        </aside>
    );
}
