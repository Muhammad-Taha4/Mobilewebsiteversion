"use client";

export default function CheckoutPage() {
    return (
        <main className="flex-grow max-w-[1440px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 bg-background-light min-h-screen animate-in fade-in duration-500">
            {/* Progress Stepper */}
            <div className="mb-10 max-w-3xl mx-auto">
                <nav aria-label="Progress">
                    <ol className="flex items-center" role="list">
                        <li className="relative pr-8 sm:pr-20">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="h-0.5 w-full bg-primary transition-all duration-500"></div>
                            </div>
                            <a className="relative flex h-8 w-8 items-center justify-center rounded-full bg-primary hover:bg-primary-hover shadow-md hover:shadow-lg transition-all duration-300 hover:scale-110" href="#">
                                <span className="material-symbols-outlined text-white text-sm">check</span>
                                <span className="sr-only">Cart</span>
                            </a>
                            <span className="absolute top-10 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">Cart</span>
                        </li>
                        <li className="relative pr-8 sm:pr-20">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="h-0.5 w-full bg-gray-200 transition-all duration-500"></div>
                            </div>
                            <a className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-primary shadow-sm hover:shadow-md transition-all duration-300 ring-4 ring-primary/10" href="#">
                                <span className="text-primary font-bold text-sm">2</span>
                                <span className="sr-only">Shipping</span>
                            </a>
                            <span className="absolute top-10 left-1/2 -translate-x-1/2 text-xs font-bold text-primary">Shipping</span>
                        </li>
                        <li className="relative pr-8 sm:pr-20">
                            <div aria-hidden="true" className="absolute inset-0 flex items-center">
                                <div className="h-0.5 w-full bg-gray-200 transition-all duration-500"></div>
                            </div>
                            <a className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-sm" href="#">
                                <span className="text-gray-400 font-bold text-sm">3</span>
                                <span className="sr-only">Payment</span>
                            </a>
                            <span className="absolute top-10 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-400">Payment</span>
                        </li>
                        <li className="relative">
                            <a className="relative flex h-8 w-8 items-center justify-center rounded-full bg-white border-2 border-gray-200 hover:border-gray-300 transition-all duration-300 hover:shadow-sm" href="#">
                                <span className="text-gray-400 font-bold text-sm">4</span>
                                <span className="sr-only">Review</span>
                            </a>
                            <span className="absolute top-10 left-1/2 -translate-x-1/2 text-xs font-medium text-gray-400">Review</span>
                        </li>
                    </ol>
                </nav>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mt-12">
                {/* Left Column: Workflow */}
                <div className="lg:col-span-7 xl:col-span-8 space-y-10">
                    {/* Section 1: Shipping Address */}
                    <section className="bg-white rounded-xl shadow-lg shadow-gray-200/40 border border-gray-100 p-8 transition-shadow hover:shadow-xl hover:shadow-gray-200/50">
                        <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-100">
                            <h2 className="text-xl font-bold text-text-main flex items-center gap-3">
                                <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold">1</span>
                                Shipping Address
                            </h2>
                            <button className="text-sm text-primary font-medium hover:underline transition-all">Select Saved Address</button>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                            <div className="col-span-2 md:col-span-2 group">
                                <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">Business Name</label>
                                <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 hover:border-gray-300" placeholder="e.g. Tech Solutions Inc." type="text" />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">First Name <span className="text-red-500">*</span></label>
                                <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 hover:border-gray-300" type="text" />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">Last Name <span className="text-red-500">*</span></label>
                                <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 hover:border-gray-300" type="text" />
                            </div>
                            <div className="col-span-2 md:col-span-2 group">
                                <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">Street Address <span className="text-red-500">*</span></label>
                                <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 hover:border-gray-300" placeholder="123 Wholesale Blvd, Suite 400" type="text" />
                            </div>
                            <div className="group">
                                <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">City <span className="text-red-500">*</span></label>
                                <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 hover:border-gray-300" type="text" />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="group">
                                    <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">State <span className="text-red-500">*</span></label>
                                    <select className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 hover:border-gray-300 bg-white">
                                        <option>Select...</option>
                                        <option>CA</option>
                                        <option>NY</option>
                                        <option>TX</option>
                                    </select>
                                </div>
                                <div className="group">
                                    <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">ZIP <span className="text-red-500">*</span></label>
                                    <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 hover:border-gray-300" type="text" />
                                </div>
                            </div>
                            <div className="col-span-2 md:col-span-2 pt-2">
                                <label className="flex items-start gap-3 cursor-pointer group">
                                    <div className="relative flex items-start">
                                        <input className="peer rounded border-gray-300 text-primary focus:ring-2 focus:ring-primary/30 mt-0.5 h-4 w-4 transition-all cursor-pointer" type="checkbox" />
                                    </div>
                                    <span className="text-sm text-text-secondary group-hover:text-text-main transition-colors">Save this address to my business profile for future orders.</span>
                                </label>
                            </div>
                        </div>
                    </section>

                    {/* Section 2: Tax Exemption */}
                    <section className="bg-white rounded-xl shadow-lg shadow-gray-200/40 border border-gray-100 p-8 transition-shadow hover:shadow-xl hover:shadow-gray-200/50">
                        <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold">2</span>
                            <h2 className="text-xl font-bold text-text-main">Tax Information</h2>
                        </div>

                        <div className="bg-blue-50/80 border border-blue-100 p-4 rounded-xl mb-6 flex gap-4 transition-colors hover:bg-blue-50">
                            <span className="material-symbols-outlined text-blue-600">info</span>
                            <div>
                                <p className="text-sm text-blue-900 font-bold mb-0.5">Buying for Resale?</p>
                                <p className="text-sm text-blue-700/80">Enter your Reseller ID to remove sales tax from this order. Subject to verification.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                            <div className="group">
                                <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">Reseller / Tax ID</label>
                                <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 hover:border-gray-300" placeholder="XX-XXXXXXX" type="text" />
                            </div>
                            <div>
                                <label className="block text-sm font-semibold text-text-main mb-1.5">Upload Certificate <span className="text-gray-400 font-normal">(Optional)</span></label>
                                <div className="flex items-center justify-center w-full group">
                                    <label className="flex flex-col items-center justify-center w-full h-12 border-2 border-gray-200 border-dashed rounded-lg cursor-pointer bg-gray-50/50 hover:bg-primary/5 hover:border-primary/50 transition-all duration-300">
                                        <div className="flex flex-row items-center gap-2">
                                            <span className="material-symbols-outlined text-gray-400 text-lg group-hover:text-primary transition-colors">cloud_upload</span>
                                            <p className="text-sm font-medium text-gray-500 group-hover:text-primary transition-colors">Click to upload</p>
                                        </div>
                                        <input className="hidden" id="dropzone-file" type="file" />
                                    </label>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Section 3: Shipping Method */}
                    <section className="bg-white rounded-xl shadow-lg shadow-gray-200/40 border border-gray-100 p-8 transition-shadow hover:shadow-xl hover:shadow-gray-200/50">
                        <h2 className="text-xl font-bold text-text-main flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold">3</span>
                            Shipping Method
                        </h2>

                        <div className="space-y-4">
                            <label className="relative flex cursor-pointer rounded-xl border-2 bg-primary/5 p-5 shadow-sm focus:outline-none border-primary ring-4 ring-primary/10 transition-all duration-300">
                                <input defaultChecked className="sr-only peer" name="shipping-method" type="radio" value="standard" />
                                <span className="flex flex-1">
                                    <span className="flex flex-col">
                                        <span className="block text-sm font-bold text-primary">Standard Ground (LTL)</span>
                                        <span className="mt-1 flex items-center text-sm text-text-main font-medium">Estimated 3-5 Business Days • Palletized</span>
                                        <span className="mt-6 text-xs font-bold text-primary bg-primary/10 px-2 py-1 rounded w-fit">Best Value for Bulk</span>
                                    </span>
                                </span>
                                <span className="material-symbols-outlined text-primary text-2xl absolute top-5 right-5">check_circle</span>
                                <span className="mt-0 text-base font-bold text-text-main">$145.00</span>
                            </label>

                            <label className="relative flex cursor-pointer rounded-xl border-2 border-gray-200 bg-white p-5 shadow-sm focus:outline-none hover:border-primary/40 hover:bg-gray-50/50 transition-all duration-300 group">
                                <input className="sr-only peer" name="shipping-method" type="radio" value="express" />
                                <span className="flex flex-1">
                                    <span className="flex flex-col">
                                        <span className="block text-sm font-bold text-text-main group-hover:text-primary transition-colors">Expedited Freight</span>
                                        <span className="mt-1 flex items-center text-sm text-text-secondary">Estimated 2 Business Days • Priority Handling</span>
                                    </span>
                                </span>
                                <span className="material-symbols-outlined text-transparent text-2xl absolute top-5 right-5 group-hover:text-primary/30 transition-colors">radio_button_unchecked</span>
                                <span className="mt-0 text-base font-bold text-text-main group-hover:text-primary transition-colors">$280.00</span>
                            </label>
                        </div>
                    </section>

                    {/* Section 4: Payment */}
                    <section className="bg-white rounded-xl shadow-lg shadow-gray-200/40 border border-gray-100 p-8 transition-shadow hover:shadow-xl hover:shadow-gray-200/50">
                        <h2 className="text-xl font-bold text-text-main flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold">4</span>
                            Payment
                        </h2>

                        {/* Tabs */}
                        <div className="sm:hidden mb-6">
                            <label className="sr-only" htmlFor="tabs">Select a tab</label>
                            <select className="block w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 h-12" id="tabs" name="tabs">
                                <option>Credit Card</option>
                                <option>Net-30 Terms</option>
                                <option>Wire Transfer</option>
                            </select>
                        </div>
                        <div className="hidden sm:block mb-8 border-b border-gray-100">
                            <nav aria-label="Tabs" className="flex space-x-8 -mb-px">
                                <a aria-current="page" className="border-primary text-primary border-b-2 px-1 py-4 font-bold text-sm flex items-center gap-2" href="#">
                                    <span className="material-symbols-outlined text-lg">credit_card</span>
                                    Credit Card
                                </a>
                                <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 px-1 py-4 font-semibold text-sm flex items-center gap-2 transition-colors" href="#">
                                    <span className="material-symbols-outlined text-lg">calendar_month</span>
                                    Net-30 Terms
                                </a>
                                <a className="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 border-b-2 px-1 py-4 font-semibold text-sm flex items-center gap-2 transition-colors" href="#">
                                    <span className="material-symbols-outlined text-lg">account_balance</span>
                                    Wire Transfer
                                </a>
                            </nav>
                        </div>

                        {/* Payment Form */}
                        <div className="space-y-6 bg-gray-50/50 p-6 rounded-xl border border-gray-100">
                            <div className="col-span-2 group">
                                <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">Card Number <span className="text-red-500">*</span></label>
                                <div className="relative">
                                    <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 pl-12 pr-4 transition-all duration-200" placeholder="0000 0000 0000 0000" type="text" />
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                        <span className="material-symbols-outlined">credit_card</span>
                                    </div>
                                </div>
                            </div>
                            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
                                <div className="group">
                                    <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">Expiration Date <span className="text-red-500">*</span></label>
                                    <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 px-4 transition-all duration-200 text-center tracking-widest" placeholder="MM / YY" type="text" />
                                </div>
                                <div className="group">
                                    <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">CVC <span className="text-red-500">*</span></label>
                                    <div className="relative">
                                        <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 pl-4 pr-12 transition-all duration-200 text-center tracking-widest" placeholder="123" type="password" maxLength={4} />
                                        <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                            <span className="material-symbols-outlined text-lg">help</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="group pt-4 border-t border-gray-200/60 mt-2">
                                <label className="block text-sm font-semibold text-text-main mb-1.5 transition-colors group-focus-within:text-primary">Purchase Order # <span className="text-gray-400 font-normal">(Optional)</span></label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-gray-400 group-focus-within:text-primary transition-colors">
                                        <span className="material-symbols-outlined text-lg">receipt_long</span>
                                    </div>
                                    <input className="w-full rounded-lg border-gray-200 focus:border-primary focus:ring-2 focus:ring-primary/20 shadow-sm h-12 pl-12 pr-4 transition-all duration-200" placeholder="PO-2023-001" type="text" />
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Right Column: Order Summary */}
                <div className="lg:col-span-5 xl:col-span-4">
                    {/* Make Order Summary Sticky */}
                    <div className="sticky top-24">
                        <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
                            <div className="p-6 bg-gray-50/80 border-b border-gray-100">
                                <h2 className="text-lg font-bold text-text-main">Order Summary</h2>
                                <p className="text-sm text-text-secondary mt-1">Order #W-99281</p>
                            </div>

                            {/* Items List */}
                            <div className="max-h-[400px] overflow-y-auto p-6 space-y-6">
                                {/* Item 1 */}
                                <div className="flex gap-4 pb-6 border-b border-gray-100">
                                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 relative p-1 transition-transform hover:scale-105">
                                        <img className="w-full h-full object-contain" src="/assets/B1255519-2-400x400.webp" alt="iPhone 13 Pro OLED Screen Assembly" />
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-bold text-text-main">
                                                <h3 className="line-clamp-1 leading-tight">iPhone 13 Pro OLED Screen Assembly</h3>
                                                <p className="ml-4 font-bold">$4,250.00</p>
                                            </div>
                                            <p className="mt-1 text-xs text-gray-500 font-medium">SKU: SCR-IP13P-OEM</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm mt-3">
                                            <div className="flex items-center border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                                                <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold transition-colors">-</button>
                                                <input className="w-10 text-center border-0 p-0 text-sm font-bold focus:ring-0 text-text-main bg-transparent h-7" type="text" defaultValue="50" />
                                                <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold transition-colors">+</button>
                                            </div>
                                            <div className="flex text-primary text-[10px] font-bold tracking-wider bg-primary/10 px-2 py-1 rounded">
                                                BULK TIER 2
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Item 2 */}
                                <div className="flex gap-4">
                                    <div className="h-16 w-16 flex-shrink-0 overflow-hidden rounded-lg border border-gray-100 bg-gray-50 relative p-1 transition-transform hover:scale-105">
                                        <img className="w-full h-full object-contain" src="/assets/B1288001-1-400x400-1.webp" alt="USB-C to Lightning Cable" />
                                    </div>
                                    <div className="flex flex-1 flex-col">
                                        <div>
                                            <div className="flex justify-between text-base font-bold text-text-main">
                                                <h3 className="line-clamp-1 leading-tight">USB-C to Lightning Cable (1m) - Bulk</h3>
                                                <p className="ml-4 font-bold">$600.00</p>
                                            </div>
                                            <p className="mt-1 text-xs text-gray-500 font-medium">SKU: CBL-USBC-100PK</p>
                                        </div>
                                        <div className="flex flex-1 items-end justify-between text-sm mt-3">
                                            <div className="flex items-center border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
                                                <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold transition-colors">-</button>
                                                <input className="w-10 text-center border-0 p-0 text-sm font-bold focus:ring-0 text-text-main bg-transparent h-7" type="text" defaultValue="2" />
                                                <button className="px-3 py-1 hover:bg-gray-100 text-gray-600 font-bold transition-colors">+</button>
                                            </div>
                                            <div className="text-gray-500 text-xs font-bold">
                                                100 units/pk
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Quick Add */}
                            <div className="px-6 pb-6 border-b border-gray-100">
                                <label className="block text-xs font-bold text-text-secondary mb-2">Quick Add by SKU</label>
                                <div className="flex gap-2 relative">
                                    <input className="block w-full rounded-lg border-gray-200 shadow-sm focus:border-primary focus:ring-2 focus:ring-primary/20 text-sm h-10 px-3 transition-all duration-200" placeholder="SKU Number" type="text" />
                                    <button className="bg-gray-100 text-gray-700 px-5 py-1 rounded-lg text-sm font-bold hover:bg-gray-200 hover:text-black transition-colors">Add</button>
                                </div>
                            </div>

                            {/* Calculations */}
                            <div className="p-6 bg-gray-50/50">
                                <div className="flex justify-between text-sm font-medium text-text-secondary mb-3">
                                    <p>Subtotal (250 items)</p>
                                    <p className="text-text-main font-bold">$4,850.00</p>
                                </div>
                                <div className="flex justify-between text-sm font-bold text-green-600 mb-3">
                                    <p>Volume Discount (5%)</p>
                                    <p>-$242.50</p>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-text-secondary mb-3">
                                    <p>Shipping (Freight Estimate)</p>
                                    <p className="text-text-main font-bold">$145.00</p>
                                </div>
                                <div className="flex justify-between text-sm font-medium text-text-secondary mb-4">
                                    <p>Tax</p>
                                    <p className="text-gray-400 italic font-normal">Enter Tax ID</p>
                                </div>

                                <div className="relative overflow-hidden rounded-xl bg-gray-900 text-white p-4 mt-2 mb-6 shadow-md">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary blur-3xl opacity-20 -mr-10 -mt-10 pointer-events-none"></div>
                                    <div className="flex justify-between text-base font-bold relative z-10">
                                        <p className="text-gray-300">Total Purchase</p>
                                        <p className="text-2xl">$4,752.50</p>
                                    </div>
                                </div>

                                {/* 
                                    Explicit mapping of Complete Purchase button to iShine Navy Blue (#0B4182).
                                */}
                                <button className="w-full flex items-center justify-center rounded-xl bg-[#0B4182] hover:bg-[#072a54] text-white px-6 py-4 text-base font-bold shadow-lg shadow-[#0B4182]/20 hover:shadow-xl hover:shadow-[#0B4182]/30 hover:-translate-y-0.5 transition-all duration-300 focus:ring-4 focus:ring-offset-2 focus:ring-[#0B4182]/50 active:scale-[0.98]">
                                    Complete Purchase
                                </button>

                                {/* Trust & Conversion Boost */}
                                <div className="mt-6">
                                    <div className="flex items-center justify-center gap-3 text-gray-500 mb-3">
                                        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                                            <span className="material-symbols-outlined text-green-600 text-base">lock</span>
                                            <span className="text-xs font-bold text-text-main">SSL Secure</span>
                                        </div>
                                        <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
                                            <span className="material-symbols-outlined text-blue-600 text-base">verified_user</span>
                                            <span className="text-xs font-bold text-text-main">30-Day Guarantee</span>
                                        </div>
                                    </div>
                                    <p className="text-center text-[11px] text-gray-400 font-medium">Your payment information is encrypted and secure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}
