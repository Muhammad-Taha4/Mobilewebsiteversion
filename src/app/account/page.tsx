'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import AccountSidebar from '@/components/AccountSidebar';

export default function AccountDashboard() {
    // Keep internal state for sub-tabs on the overview page if needed, but default to 'overview'
    const [activeTab, setActiveTab] = useState('overview');

    // Helper to render the dummy orders data
    const renderOrdersTable = (isFull: boolean) => (
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex-1">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">{isFull ? 'Complete Order History' : 'Recent Orders'}</h3>
                {!isFull && <button onClick={() => setActiveTab('orders')} className="text-sm font-medium text-[#0B4182] hover:text-blue-700">View All Orders</button>}
            </div>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-600">
                    <thead className="bg-slate-50 text-xs uppercase text-slate-500 font-semibold">
                        <tr>
                            <th className="px-6 py-4" scope="col">Order ID</th>
                            <th className="px-6 py-4" scope="col">Date</th>
                            <th className="px-6 py-4" scope="col">Status</th>
                            <th className="px-6 py-4" scope="col">Items</th>
                            <th className="px-6 py-4 text-right" scope="col">Total Amount</th>
                            <th className="px-6 py-4 text-center" scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {/* Dummy Rows */}
                        <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900">#ORD-99281</td>
                            <td className="px-6 py-4">Oct 24, 2026</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">Processing</span>
                            </td>
                            <td className="px-6 py-4">12 items</td>
                            <td className="px-6 py-4 text-right font-medium text-slate-900">$1,240.00</td>
                            <td className="px-6 py-4 text-center">
                                <Link href="/account/orders/ORD-99281" className="text-[#0B4182] hover:text-blue-700 font-bold text-xs">Track Order</Link>
                            </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900">#ORD-99245</td>
                            <td className="px-6 py-4">Oct 20, 2026</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Shipped</span>
                            </td>
                            <td className="px-6 py-4">45 items</td>
                            <td className="px-6 py-4 text-right font-medium text-slate-900">$3,850.50</td>
                            <td className="px-6 py-4 text-center">
                                <Link href="/account/orders/ORD-99245" className="text-[#0B4182] hover:text-blue-700 font-bold text-xs">Track Order</Link>
                            </td>
                        </tr>
                        <tr className="hover:bg-slate-50 transition-colors">
                            <td className="px-6 py-4 font-medium text-slate-900">#ORD-98821</td>
                            <td className="px-6 py-4">Oct 15, 2026</td>
                            <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Delivered</span>
                            </td>
                            <td className="px-6 py-4">8 items</td>
                            <td className="px-6 py-4 text-right font-medium text-slate-900">$420.00</td>
                            <td className="px-6 py-4 text-center">
                                <Link href="/account/orders/ORD-98821" className="text-[#0B4182] hover:text-blue-700 font-bold text-xs">Track Order</Link>
                            </td>
                        </tr>
                        {isFull && (
                            <>
                                <tr className="hover:bg-slate-50 transition-colors">
                                    <td className="px-6 py-4 font-medium text-slate-900">#ORD-97554</td>
                                    <td className="px-6 py-4">Sep 28, 2026</td>
                                    <td className="px-6 py-4">
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">Delivered</span>
                                    </td>
                                    <td className="px-6 py-4">15 items</td>
                                    <td className="px-6 py-4 text-right font-medium text-slate-900">$1,150.00</td>
                                    <td className="px-6 py-4 text-center">
                                        <Link href="/account/orders/ORD-97554" className="text-[#0B4182] hover:text-blue-700 font-bold text-xs">Track Order</Link>
                                    </td>
                                </tr>
                            </>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );

    return (
        <main className="bg-slate-50 py-8 lg:py-12 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-8">

                {/* Dynamically imported sidebar to reduce duplication */}
                <AccountSidebar />

                {/* Right Main Content */}
                <section className="w-full lg:w-3/4 flex flex-col gap-8">
                    {/* Welcome Header */}
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
                        <div>
                            <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                                {activeTab === 'overview' ? 'Welcome back, John' : 'Order History'}
                            </h1>
                            <p className="text-slate-500 mt-1">
                                {activeTab === 'overview' ? "Here's what's happening with your wholesale account today." : "View and track all your past and current wholesale orders."}
                            </p>
                        </div>
                        {activeTab === 'overview' && (
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-slate-500">Last login: Today, 9:41 AM</span>
                                <button className="bg-[#0B4182] hover:bg-[#083266] text-white px-4 py-2.5 rounded-lg text-sm font-medium flex items-center gap-2 shadow-sm transition-colors cursor-pointer">
                                    <span className="material-symbols-outlined text-lg">add</span>
                                    New Quick Order
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Conditional Views */}
                    {activeTab === 'overview' && (
                        <>
                            {/* Stats Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between group hover:border-[#0B4182]/30 transition-colors">
                                    <div>
                                        <p className="text-slate-500 text-sm font-medium mb-1">Total Orders</p>
                                        <h3 className="text-3xl font-bold text-slate-900">124</h3>
                                        <div className="flex items-center mt-2 text-green-600 text-xs font-medium">
                                            <span className="material-symbols-outlined text-sm mr-1">trending_up</span>
                                            +12% from last month
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0B4182] flex items-center justify-center group-hover:bg-[#0B4182] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">shopping_bag</span>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between group hover:border-[#0B4182]/30 transition-colors">
                                    <div>
                                        <p className="text-slate-500 text-sm font-medium mb-1">Total Spent</p>
                                        <h3 className="text-3xl font-bold text-slate-900">$12,450</h3>
                                        <div className="flex items-center mt-2 text-slate-400 text-xs font-medium">
                                            <span>Year to date</span>
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0B4182] flex items-center justify-center group-hover:bg-[#0B4182] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">payments</span>
                                    </div>
                                </div>
                                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex items-start justify-between group hover:border-[#0B4182]/30 transition-colors">
                                    <div>
                                        <p className="text-slate-500 text-sm font-medium mb-1">Pending Returns</p>
                                        <h3 className="text-3xl font-bold text-slate-900">2</h3>
                                        <div className="flex items-center mt-2 text-orange-600 text-xs font-medium">
                                            <span className="material-symbols-outlined text-sm mr-1">priority_high</span>
                                            Action required
                                        </div>
                                    </div>
                                    <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#0B4182] flex items-center justify-center group-hover:bg-[#0B4182] group-hover:text-white transition-colors">
                                        <span className="material-symbols-outlined">assignment_return</span>
                                    </div>
                                </div>
                            </div>

                            {/* Recent Orders Table */}
                            {renderOrdersTable(false)}

                            {/* Promo Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">Weekly Deals</h4>
                                        <p className="text-sm text-slate-500 mb-4">Save up to 40% on iPhone Screens</p>
                                        <Link href="/shop" className="text-[#0B4182] font-medium text-sm hover:underline">Shop Deals</Link>
                                    </div>
                                    <div className="h-24 w-24 bg-slate-100 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=800&auto=format&fit=crop')" }}></div>
                                </div>
                                <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 flex items-center justify-between">
                                    <div>
                                        <h4 className="font-bold text-slate-900 mb-1">New Arrivals</h4>
                                        <p className="text-sm text-slate-500 mb-4">Check out the latest tools &amp; accessories</p>
                                        <Link href="/shop" className="text-[#0B4182] font-medium text-sm hover:underline">View New Items</Link>
                                    </div>
                                    <div className="h-24 w-24 bg-slate-100 rounded-lg bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1588508065123-287b28e0131b?q=80&w=800&auto=format&fit=crop')" }}></div>
                                </div>
                            </div>
                        </>
                    )}

                    {activeTab === 'orders' && (
                        <>
                            {renderOrdersTable(true)}
                        </>
                    )}
                </section>
            </div>
        </main>
    );
}
