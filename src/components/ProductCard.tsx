export default function ProductCard({
    title = "iPhone 14 Pro Max OLED Assembly Replacement",
    brand = "Apple - iPhone 14 Pro Max",
    price = "$210.00",
    badge = "OEM Refurb",
    badgeColor = "purple", // 'purple', 'green', 'blue', 'red'
    imageSrc = "https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800&q=80",
    stockStatus = "In Stock",
    stockCount = "120+ units",
}: {
    title?: string;
    brand?: string;
    price?: string;
    badge?: string;
    badgeColor?: "purple" | "green" | "blue" | "red";
    imageSrc?: string;
    stockStatus?: string;
    stockCount?: string;
}) {
    const badgeColors = {
        purple: "bg-purple-100 text-purple-700 ring-purple-700/10",
        green: "bg-green-100 text-green-700 ring-green-700/10",
        blue: "bg-blue-100 text-blue-700 ring-blue-700/10",
        red: "bg-red-100 text-red-700 ring-red-700/10",
    };

    return (
        <div className="group relative flex flex-col overflow-hidden rounded-xl border border-border-light bg-surface-light shadow-sm transition-all duration-300 ease-in-out hover:scale-[1.01] hover:shadow-lg hover:border-primary/30">
            <div className="relative aspect-[4/3] w-full bg-[#f1f5f9] p-6 overflow-hidden">
                {badge && (
                    <div className="absolute right-3 top-3 z-10">
                        <span
                            className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium ring-1 ring-inset ${badgeColors[badgeColor]}`}
                        >
                            {badge}
                        </span>
                    </div>
                )}
                <img
                    className="h-full w-full object-contain mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
                    alt={title}
                    src={imageSrc}
                    loading="lazy"
                />

                {/* Checkbox for Bulk Add */}
                <input type="checkbox" className="absolute top-4 left-4 z-20 size-5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer shadow-sm hover:scale-110 transition-transform" title="Select for Bulk Action" />

                {/* Quick View Overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none">
                    <button className="bg-white/90 backdrop-blur text-primary px-4 py-2 rounded-full font-bold shadow-lg text-xs flex items-center gap-1 hover:bg-white hover:scale-105 transition-all pointer-events-auto">
                        <span className="material-symbols-outlined text-[16px]">visibility</span>
                        Quick View
                    </button>
                </div>
            </div>
            <div className="flex flex-1 flex-col p-4">
                <div className="mb-2">
                    <p className="text-xs text-text-secondary">{brand}</p>
                    <h3 className="text-base font-bold text-text-main line-clamp-2 leading-tight group-hover:text-primary">
                        {title}
                    </h3>
                </div>
                <div className="mt-auto space-y-3">
                    {/* Compare Checkbox */}
                    <div className="flex items-center gap-2 mb-2 mt-1">
                        <input type="checkbox" id={`compare-${title.replace(/\s+/g, '-')}`} className="size-3.5 rounded border-gray-300 text-primary focus:ring-primary cursor-pointer" />
                        <label htmlFor={`compare-${title.replace(/\s+/g, '-')}`} className="text-xs text-text-secondary cursor-pointer hover:text-primary transition-colors">Compare Specs</label>
                    </div>

                    <div className="flex items-center justify-between border-t border-border-light pt-3">
                        <div>
                            <span className="block text-xs text-text-secondary">
                                Wholesale Price
                            </span>
                            <span className="text-lg font-extrabold text-primary">{price}</span>
                        </div>
                        <div className="text-right">
                            <span
                                className={`block text-xs font-medium ${stockStatus === "Low Stock"
                                    ? "text-amber-600"
                                    : "text-green-600"
                                    } flex items-center justify-end gap-1`}
                            >
                                <span
                                    className={`size-1.5 rounded-full ${stockStatus === "Low Stock"
                                        ? "bg-amber-600"
                                        : "bg-green-600"
                                        }`}
                                ></span>{" "}
                                {stockStatus}
                            </span>
                            <span className="text-xs text-text-secondary">{stockCount}</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <div className="flex items-center rounded-lg border border-border-light bg-background-light">
                            <button className="px-2 py-1 text-text-secondary hover:text-primary hover:bg-gray-100 rounded-l-lg transition-colors">
                                <span className="material-symbols-outlined text-[16px]">-</span>
                            </button>
                            <input
                                className="w-10 border-none bg-transparent py-1 text-center text-sm font-semibold text-text-main focus:ring-0"
                                type="text"
                                defaultValue="1"
                            />
                            <button className="px-2 py-1 text-text-secondary hover:text-primary hover:bg-gray-100 rounded-r-lg transition-colors">
                                <span className="material-symbols-outlined text-[16px]">+</span>
                            </button>
                        </div>
                        <button className="flex-1 rounded-lg bg-primary py-2 text-sm font-bold text-white shadow-sm hover:bg-primary-hover transition-colors flex items-center justify-center gap-2">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
