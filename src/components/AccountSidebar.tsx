'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function AccountSidebar() {
    const pathname = usePathname();

    const navItems = [
        { id: 'overview', icon: 'dashboard', label: 'Dashboard Overview', href: '/account' },
        { id: 'profile', icon: 'storefront', label: 'Business Profile', href: '/account/profile' },
        { id: 'faq', icon: 'help_outline', label: 'FAQ & Support', href: '/faq' },
    ];

    return (
        <aside className="w-full lg:w-1/4 flex flex-col gap-6 shrink-0">
            {/* User Profile Card */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-200 flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-full bg-slate-200 mb-4 overflow-hidden ring-4 ring-blue-50 bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80')" }}>
                </div>
                <h2 className="text-slate-900 text-lg font-bold">John Doe</h2>
                <p className="text-slate-500 text-sm mb-3">iRepair Solutions LLC</p>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    Wholesale Partner
                </span>
            </div>

            {/* Navigation Menu */}
            <nav className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="p-2 flex flex-col gap-1">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.id}
                                href={item.href}
                                className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-colors w-full text-left ${isActive ? 'bg-blue-50 text-[#0B4182] border-l-4 border-[#0B4182]' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900 border-l-4 border-transparent'}`}
                            >
                                <span className="material-symbols-outlined">{item.icon}</span>
                                {item.label}
                            </Link>
                        );
                    })}
                    <div className="my-2 border-t border-slate-100"></div>
                    <button className="flex items-center gap-3 px-4 py-3 rounded-lg text-red-600 hover:bg-red-50 transition-colors w-full text-left border-l-4 border-transparent cursor-pointer">
                        <span className="material-symbols-outlined">logout</span>
                        Logout
                    </button>
                </div>
            </nav>

            {/* Helper Card */}
            <div className="bg-gradient-to-br from-[#0B4182] to-[#062c58] rounded-xl p-6 text-white relative overflow-hidden shadow-sm">
                <div className="relative z-10">
                    <h3 className="font-bold text-lg mb-2">Need Help?</h3>
                    <p className="text-blue-100 text-sm mb-4">Contact your dedicated account manager for bulk orders.</p>
                    <button className="bg-white text-[#0B4182] text-sm font-medium px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors shadow-sm cursor-pointer">Contact Support</button>
                </div>
                <span className="material-symbols-outlined absolute -bottom-4 -right-4 text-9xl text-white/10 rotate-12 pointer-events-none">support_agent</span>
            </div>
        </aside>
    );
}
