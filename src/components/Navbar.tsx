import Link from 'next/link';
import NestedMegaMenu from './NestedMegaMenu';

export default function Navbar() {
    return (
        <header className="w-full bg-white relative z-50 shadow-sm">
            {/* Top Bar */}
            <div className="bg-gray-50 border-b border-gray-200 text-sm py-2">
                <div className="container mx-auto px-4 flex justify-between items-center">
                    <p className="text-gray-500">Welcome to iShine Wireless - Premium Repair Parts</p>
                    <div className="flex gap-4 text-gray-500">
                        <Link href="#" className="hover:text-brand transition">Store Locator</Link>
                        <Link href="#" className="hover:text-brand transition">Track Order</Link>
                        <Link href="#" className="hover:text-brand transition">English | USD</Link>
                    </div>
                </div>
            </div>

            {/* Main Header / Search */}
            <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8">
                <Link href="/" className="text-3xl font-bold text-brand tracking-tight shrink-0">
                    iShine Wireless<span className="text-gray-800">.</span>
                </Link>

                <div className="flex-grow w-full max-w-2xl relative">
                    <input
                        type="text"
                        placeholder="Search for screens, batteries, tools..."
                        className="w-full border border-gray-300 rounded-full py-3 px-6 pr-12 text-gray-800 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition"
                    />
                    <button className="absolute right-4 top-3 text-gray-400 hover:text-brand transition">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </button>
                </div>

                <div className="flex items-center gap-6 shrink-0 text-gray-800">
                    <div className="flex items-center gap-2 cursor-pointer hover:text-brand transition">
                        <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                        <div className="text-sm leading-tight hidden md:block">
                            <span className="text-gray-400 text-xs block">Account</span>Sign In
                        </div>
                    </div>
                    <Link href="/cart" className="flex items-center gap-2 cursor-pointer hover:text-brand transition">
                        <div className="relative">
                            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
                            </svg>
                            <span className="absolute -top-1 -right-1 bg-brand text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
                        </div>
                        <div className="text-sm leading-tight hidden md:block">
                            <span className="text-gray-400 text-xs block">Total</span>$145.00
                        </div>
                    </Link>
                </div>
            </div>

            {/* Categories / Mega Menu */}
            <div className="bg-white border-y border-gray-200">
                <div className="container mx-auto px-4 h-auto md:h-12 py-2 md:py-0">
                    <NestedMegaMenu />
                </div>
            </div>
        </header>
    );
}
