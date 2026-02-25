'use client';

import Link from 'next/link';

export default function CartPage() {
    return (
        <main className="flex-1 w-full bg-slate-50 min-h-screen">
            <div className="max-w-7xl mx-auto px-4 py-12">

                <div className="flex flex-col gap-1 mb-8">
                    <h1 className="text-slate-900 text-3xl font-bold tracking-tight">Your Shopping Cart</h1>
                    <p className="text-slate-500 text-sm">
                        Order #12345 • 3 Items • <Link className="text-[#0B4182] hover:underline" href="/products">Continue Shopping</Link>
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8 items-start">

                    {/* Left Column: Cart Items (66%) */}
                    <div className="w-full lg:w-2/3 flex flex-col gap-6">

                        {/* Table Header (Desktop) */}
                        <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 bg-white rounded-lg border border-gray-200 text-xs font-semibold uppercase tracking-wider text-slate-500 shadow-sm">
                            <div className="col-span-6">Product Details</div>
                            <div className="col-span-2 text-center">Unit Price</div>
                            <div className="col-span-2 text-center">Quantity</div>
                            <div className="col-span-2 text-right">Total</div>
                        </div>

                        {/* Cart Item 1 */}
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between p-4 gap-6">

                                {/* Product Info (Equivalent to col-span-6) */}
                                <div className="w-full sm:w-1/2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-md p-2 flex items-center justify-center border border-gray-200">
                                        <img
                                            alt="iPhone Screen Display"
                                            className="w-full h-full object-contain mix-blend-multiply"
                                            data-alt="iPhone 13 OLED Display"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCHQJieccD7jDHNhFyT3v_KAnuY3_MtRwCZ40Qaj8SqNLhlmuNBnI1bML85jsVeD2MwKdTI2Eb_qMAxjaiTM7_vJvgNaISvlsZOBm1YPcA_atYqiSeDMNn9yUcVl4J7pqlRThIaDghbd-8cpVDfJHpZ0eNrJETRVs264gaPeIDAjlCAViQ3oYc8x_idLDz0_PfGyFO6KbrKRakZ-5NKm1tgpVZmbb4GYV8k04sXtbFvwxxAQrlWWkk-2drvfMLgxru-HPealdx1OxvU"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center gap-1">
                                        <Link className="text-slate-900 text-base font-semibold leading-tight hover:text-[#0B4182] transition-colors" href="#">iPhone 13 Pro OLED Display</Link>
                                        <div className="flex flex-wrap gap-2 text-xs mt-1">
                                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-gray-200">SKU: IP13P-OLED</span>
                                            <span className="bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded border border-emerald-100">New</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Shared container for Price, Quantity, Total to align them on desktop */}
                                <div className="w-full sm:w-1/2 flex items-center justify-between sm:justify-end gap-4 sm:gap-8 border-t sm:border-t-0 border-gray-100 pt-4 sm:pt-0">

                                    {/* Unit Price */}
                                    <div className="flex flex-col items-center">
                                        <span className="sm:hidden text-xs text-slate-500 mb-1">Price</span>
                                        <p className="text-slate-600 font-medium">$120.00</p>
                                    </div>

                                    {/* Quantity */}
                                    <div className="flex flex-col items-center">
                                        <span className="sm:hidden text-xs text-slate-500 mb-1">Qty</span>
                                        <div className="flex items-center rounded-lg border border-gray-200 bg-slate-50">
                                            <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-[#0B4182] hover:bg-gray-100 rounded-l-lg transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">remove</span>
                                            </button>
                                            <input className="w-10 bg-transparent border-none text-center text-sm font-semibold text-slate-900 p-0 focus:ring-0" type="number" defaultValue={5} />
                                            <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-[#0B4182] hover:bg-gray-100 rounded-r-lg transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">add</span>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Total & Actions */}
                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <span className="sm:hidden text-xs text-slate-500 block mb-1">Total</span>
                                            <p className="text-slate-900 text-lg font-bold w-20">$600.00</p>
                                        </div>
                                        <button className="text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-red-50" title="Remove Item">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </div>

                            </div>
                        </div>

                        {/* Cart Item 2 */}
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between p-4 gap-6">
                                {/* Product Info */}
                                <div className="w-full sm:w-1/2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-md p-2 flex items-center justify-center border border-gray-200">
                                        <img
                                            alt="Charging Port"
                                            className="w-full h-full object-contain mix-blend-multiply"
                                            data-alt="Samsung Galaxy Charging Port"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCNivyEaK5n4uYux3pRnmow7dYQJZAZ5ylfFtKY3QkEADjdiTDrFHPdnTMzv-57FkmCVdHCd6o-LCpJ1k3K7gXUWEStlhs9hy98dMN2slbDxJTMBI5tYLUNKhslQo_PlGBR9nR31GmtqZ9F4VWC-6OKsh7ZMT1RQe_0yzlwlS5Zbcr1angOKYGAuBKZH6A7snFV6yptl1pXo5lCeK9C-df1HGaEzBS4HyITzt3dMZQy1WdZswVrL4veEQPDSntz7W7a4SQZ5Wjs-zDZ"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center gap-1">
                                        <Link className="text-slate-900 text-base font-semibold leading-tight hover:text-[#0B4182] transition-colors" href="#">Samsung Galaxy S22 Charging Port</Link>
                                        <div className="flex flex-wrap gap-2 text-xs mt-1">
                                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-gray-200">SKU: S22-CHG</span>
                                            <span className="bg-amber-50 text-amber-700 px-2 py-0.5 rounded border border-amber-100">OEM Refurb</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Price/Qty/Total container */}
                                <div className="w-full sm:w-1/2 flex items-center justify-between sm:justify-end gap-4 sm:gap-8 border-t sm:border-t-0 border-gray-100 pt-4 sm:pt-0">
                                    <div className="flex flex-col items-center">
                                        <span className="sm:hidden text-xs text-slate-500 mb-1">Price</span>
                                        <p className="text-slate-600 font-medium">$15.50</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <span className="sm:hidden text-xs text-slate-500 mb-1">Qty</span>
                                        <div className="flex items-center rounded-lg border border-gray-200 bg-slate-50">
                                            <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-[#0B4182] hover:bg-gray-100 rounded-l-lg transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">remove</span>
                                            </button>
                                            <input className="w-10 bg-transparent border-none text-center text-sm font-semibold text-slate-900 p-0 focus:ring-0" type="number" defaultValue={20} />
                                            <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-[#0B4182] hover:bg-gray-100 rounded-r-lg transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">add</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <span className="sm:hidden text-xs text-slate-500 block mb-1">Total</span>
                                            <p className="text-slate-900 text-lg font-bold w-20">$310.00</p>
                                        </div>
                                        <button className="text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-red-50" title="Remove Item">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Cart Item 3 */}
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-200">
                            <div className="flex flex-col sm:flex-row items-center justify-between p-4 gap-6">
                                {/* Product Info */}
                                <div className="w-full sm:w-1/2 flex items-center gap-4">
                                    <div className="w-24 h-24 shrink-0 bg-gray-100 rounded-md p-2 flex items-center justify-center border border-gray-200">
                                        <img
                                            alt="Screen Protector"
                                            className="w-full h-full object-contain mix-blend-multiply"
                                            data-alt="Tempered Glass Screen Protector"
                                            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAx5pG7T32MplxGxYoH4jyWx3VBETDXtP9s1bfUfSsC6bhvro83ne8HBQU_bmPfsq09_pB4CG7vuQ3Eb0i8nmaWG62_IKqKW995JGKb1BhvtLJvFpI7GYLn9Co_pVMrzUlq1wAMvGA5On4DOF6ngXUdYJV1yRucOD7LaaaoqC7zbb6Vkc2RRtPcVlILPUFeDg9HOD2piW0hmUmVz8iG3pCYnE08fbwJNugf8fV3lsD6PnRMqI9ykrgt3igr9RQsbVe6QHHWophrY4Or"
                                        />
                                    </div>
                                    <div className="flex flex-col justify-center gap-1">
                                        <Link className="text-slate-900 text-base font-semibold leading-tight hover:text-[#0B4182] transition-colors" href="#">Tempered Glass Screen Protector - iPhone 14</Link>
                                        <div className="flex flex-wrap gap-2 text-xs mt-1">
                                            <span className="bg-slate-100 text-slate-600 px-2 py-0.5 rounded border border-gray-200">SKU: TG-IP14</span>
                                            <span className="bg-blue-50 text-blue-700 px-2 py-0.5 rounded border border-blue-100">Bulk Pack</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Price/Qty/Total container */}
                                <div className="w-full sm:w-1/2 flex items-center justify-between sm:justify-end gap-4 sm:gap-8 border-t sm:border-t-0 border-gray-100 pt-4 sm:pt-0">
                                    <div className="flex flex-col items-center">
                                        <span className="sm:hidden text-xs text-slate-500 mb-1">Price</span>
                                        <p className="text-slate-600 font-medium">$2.50</p>
                                    </div>

                                    <div className="flex flex-col items-center">
                                        <span className="sm:hidden text-xs text-slate-500 mb-1">Qty</span>
                                        <div className="flex items-center rounded-lg border border-gray-200 bg-slate-50">
                                            <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-[#0B4182] hover:bg-gray-100 rounded-l-lg transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">remove</span>
                                            </button>
                                            <input className="w-10 bg-transparent border-none text-center text-sm font-semibold text-slate-900 p-0 focus:ring-0" type="number" defaultValue={100} />
                                            <button className="w-8 h-8 flex items-center justify-center text-slate-500 hover:text-[#0B4182] hover:bg-gray-100 rounded-r-lg transition-colors">
                                                <span className="material-symbols-outlined text-[18px]">add</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-4">
                                        <div className="text-right">
                                            <span className="sm:hidden text-xs text-slate-500 block mb-1">Total</span>
                                            <p className="text-slate-900 text-lg font-bold w-20">$250.00</p>
                                        </div>
                                        <button className="text-slate-400 hover:text-red-500 transition-colors p-1.5 rounded-full hover:bg-red-50" title="Remove Item">
                                            <span className="material-symbols-outlined text-[20px]">delete</span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Back / Clear actions */}
                        <div className="flex justify-between items-center mt-2">
                            <button className="flex items-center gap-2 text-slate-500 hover:text-[#0B4182] text-sm font-medium transition-colors">
                                <span className="material-symbols-outlined text-[20px]">arrow_back</span>
                                Back to Shop
                            </button>
                            <button className="text-red-500 hover:text-red-700 text-sm font-medium transition-colors flex items-center gap-1">
                                <span className="material-symbols-outlined text-[18px]">remove_shopping_cart</span>
                                Clear Cart
                            </button>
                        </div>
                    </div>

                    {/* Right Column: Order Summary (33%) */}
                    <div className="w-full lg:w-1/3 sticky top-24 space-y-4">

                        {/* Summary Card */}
                        <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
                            <h2 className="text-slate-900 text-xl font-bold mb-6">Order Summary</h2>

                            <div className="space-y-4">
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 text-sm">Subtotal (125 items)</span>
                                    <span className="text-slate-900 font-semibold">$1,160.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-emerald-600 text-sm font-medium flex items-center gap-1">
                                        <span className="material-symbols-outlined text-[16px]">verified</span>
                                        Volume Discount
                                    </span>
                                    <span className="text-emerald-600 font-semibold">-$58.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 text-sm">Est. Shipping</span>
                                    <span className="text-slate-900 font-semibold">$15.00</span>
                                </div>
                                <div className="flex justify-between items-center">
                                    <span className="text-slate-500 text-sm">Tax</span>
                                    <span className="text-slate-400 italic text-sm">Calculated at checkout</span>
                                </div>

                                {/* Divider */}
                                <div className="h-px bg-gray-100 my-4"></div>

                                <div className="flex justify-between items-end">
                                    <span className="text-slate-900 text-lg font-bold">Total</span>
                                    <div className="text-right">
                                        <span className="text-2xl font-black text-slate-900">$1,117.00</span>
                                        <p className="text-xs text-slate-500 mt-1">USD</p>
                                    </div>
                                </div>

                                {/* Checkout Button */}
                                <button className="w-full mt-6 bg-[#0B4182] hover:bg-[#082f5e] text-white font-bold py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group">
                                    <span>Proceed to Secure Checkout</span>
                                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                                </button>

                                <div className="text-center mt-3">
                                    <p className="text-xs text-slate-400">
                                        30-Day Money Back Guarantee
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Trust Indicators */}
                        <div className="grid grid-cols-3 gap-2">
                            <div className="flex flex-col items-center justify-center gap-1 p-2">
                                <span className="material-symbols-outlined text-slate-400 text-[24px]">lock</span>
                                <span className="text-[10px] text-slate-500 font-medium text-center leading-tight">Secure<br />SSL</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 p-2">
                                <span className="material-symbols-outlined text-slate-400 text-[24px]">history</span>
                                <span className="text-[10px] text-slate-500 font-medium text-center leading-tight">30-Day<br />Returns</span>
                            </div>
                            <div className="flex flex-col items-center justify-center gap-1 p-2">
                                <span className="material-symbols-outlined text-slate-400 text-[24px]">shield</span>
                                <span className="text-[10px] text-slate-500 font-medium text-center leading-tight">Wholesale<br />Protection</span>
                            </div>
                        </div>

                        {/* Shipping Estimator Mini */}
                        <div className="bg-slate-50 rounded-lg p-4 border border-gray-200">
                            <div className="flex items-start gap-3">
                                <span className="material-symbols-outlined text-[#0B4182] text-[20px] mt-0.5">local_shipping</span>
                                <div>
                                    <p className="text-xs font-bold text-slate-900">Free Shipping Eligible</p>
                                    <p className="text-xs text-slate-500 mt-0.5">Add <span className="font-bold text-slate-700">$383.00</span> more to qualify for free FedEx Ground shipping.</p>
                                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-2">
                                        <div className="bg-[#0B4182] h-1.5 rounded-full" style={{ width: '70%' }}></div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </main>
    );
}
