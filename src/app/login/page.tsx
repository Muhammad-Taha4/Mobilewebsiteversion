'use client';

import Link from 'next/link';

export default function LoginPage() {
    return (
        <main className="flex-1 w-full px-4 py-8 md:px-8 lg:px-12 flex justify-center bg-slate-50">
            <div className="w-full max-w-7xl flex flex-col gap-8">

                {/* Hero / Welcome Message */}
                <div className="text-center space-y-2 mb-4">
                    <h1 className="text-slate-900 text-3xl md:text-4xl font-bold leading-tight">Welcome to the B2B Portal</h1>
                    <p className="text-slate-600 text-lg">Secure wholesale access for authorized retailers & repair shops</p>
                </div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Login - WHITE CARD */}
                    <div className="flex flex-col h-full">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-full flex flex-col">

                            {/* Hero Image for Login (Text stays white here for contrast on image) */}
                            {/* Hero Image for Login (Updated with Placeholder) */}
                            <div
                                className="h-48 w-full bg-cover bg-center relative"
                                // Maine yahan ek online placeholder image daal di hai:
                                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop")' }}
                            >
                                {/* Dark Gradient Overlay for text readability */}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/50 to-transparent flex items-end p-6">
                                    <div>
                                        <h3 className="text-white text-xl font-bold">Existing Customer Login</h3>
                                        <p className="text-slate-200 text-sm mt-1">Access your wholesale pricing and order history.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col justify-center">
                                <form className="space-y-6">
                                    <label className="block">
                                        <span className="text-slate-700 font-medium text-sm mb-2 block">Email Address</span>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-symbols-outlined text-slate-400">mail</span>
                                            </div>
                                            {/* Light Input Field */}
                                            <input
                                                className="form-input w-full pl-10 rounded-xl border-slate-300 bg-slate-50 text-slate-900 focus:border-[#0B4182] focus:ring-[#0B4182] h-12 placeholder:text-slate-400"
                                                placeholder="name@company.com"
                                                type="email"
                                            />
                                        </div>
                                    </label>

                                    <label className="block">
                                        <div className="flex justify-between items-center mb-2">
                                            <span className="text-slate-700 font-medium text-sm">Password</span>
                                            <Link className="text-[#0B4182] hover:text-[#082f5e] text-sm font-medium" href="#">Forgot Password?</Link>
                                        </div>
                                        <div className="relative">
                                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                                <span className="material-symbols-outlined text-slate-400">lock</span>
                                            </div>
                                            {/* Light Input Field */}
                                            <input
                                                className="form-input w-full pl-10 rounded-xl border-slate-300 bg-slate-50 text-slate-900 focus:border-[#0B4182] focus:ring-[#0B4182] h-12 placeholder:text-slate-400"
                                                placeholder="••••••••"
                                                type="password"
                                            />
                                        </div>
                                    </label>

                                    <div className="pt-2">
                                        <button className="w-full flex justify-center items-center gap-2 bg-[#0B4182] hover:bg-[#082f5e] text-white font-bold rounded-xl h-12 transition-colors shadow-md shadow-[#0B4182]/20" type="button">
                                            <span>Sign In</span>
                                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                                        </button>
                                    </div>
                                </form>

                                <div className="mt-8 pt-6 border-t border-slate-200 text-center">
                                    <p className="text-slate-600 text-sm">
                                        Having trouble logging in? <Link className="text-[#0B4182] font-bold hover:underline" href="#">Contact Support</Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Registration - WHITE CARD */}
                    <div className="flex flex-col h-full">
                        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden h-full flex flex-col relative">
                            {/* Decorative Top Border */}
                            <div className="h-2 w-full bg-[#0B4182]"></div>

                            <div className="p-8">
                                <div className="mb-6">
                                    {/* Dark Text Heading */}
                                    <h3 className="text-slate-900 text-2xl font-bold">Wholesale Account Application</h3>
                                    <p className="text-slate-600 mt-1">Join our network of 5,000+ repair shops and retailers.</p>
                                </div>

                                <form className="space-y-5">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <label className="block">
                                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">First Name</span>
                                            <input
                                                className="form-input w-full rounded-xl border-slate-300 bg-slate-50 text-slate-900 focus:border-[#0B4182] focus:ring-[#0B4182] h-11 px-4 placeholder:text-slate-400"
                                                placeholder="John"
                                                type="text"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">Last Name</span>
                                            <input
                                                className="form-input w-full rounded-xl border-slate-300 bg-slate-50 text-slate-900 focus:border-[#0B4182] focus:ring-[#0B4182] h-11 px-4 placeholder:text-slate-400"
                                                placeholder="Doe"
                                                type="text"
                                            />
                                        </label>
                                    </div>

                                    <label className="block">
                                        <span className="text-slate-700 font-medium text-sm mb-1.5 block">Company Name</span>
                                        <input
                                            className="form-input w-full rounded-xl border-slate-300 bg-slate-50 text-slate-900 focus:border-[#0B4182] focus:ring-[#0B4182] h-11 px-4 placeholder:text-slate-400"
                                            placeholder="iRepair Solutions LLC"
                                            type="text"
                                        />
                                    </label>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                        <label className="block">
                                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">Business Email</span>
                                            <input
                                                className="form-input w-full rounded-xl border-slate-300 bg-slate-50 text-slate-900 focus:border-[#0B4182] focus:ring-[#0B4182] h-11 px-4 placeholder:text-slate-400"
                                                placeholder="purchasing@irepair.com"
                                                type="email"
                                            />
                                        </label>
                                        <label className="block">
                                            <span className="text-slate-700 font-medium text-sm mb-1.5 block">Phone Number</span>
                                            <input
                                                className="form-input w-full rounded-xl border-slate-300 bg-slate-50 text-slate-900 focus:border-[#0B4182] focus:ring-[#0B4182] h-11 px-4 placeholder:text-slate-400"
                                                placeholder="(555) 123-4567"
                                                type="tel"
                                            />
                                        </label>
                                    </div>

                                    <label className="block">
                                        <span className="text-slate-700 font-medium text-sm mb-1.5 block">Tax ID / Reseller Number</span>
                                        <input
                                            className="form-input w-full rounded-xl border-slate-300 bg-slate-50 text-slate-900 focus:border-[#0B4182] focus:ring-[#0B4182] h-11 px-4 placeholder:text-slate-400"
                                            placeholder="XX-XXXXXXX"
                                            type="text"
                                        />
                                    </label>

                                    {/* File Upload - Light Theme */}
                                    <div className="block">
                                        <span className="text-slate-700 font-medium text-sm mb-2 block">Upload Reseller Certificate</span>
                                        <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-slate-300 border-dashed rounded-xl bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer group">
                                            <div className="space-y-1 text-center">
                                                <span className="material-symbols-outlined text-[#0B4182] group-hover:text-[#082f5e] transition-colors text-3xl">cloud_upload</span>
                                                <div className="flex text-sm text-slate-600 justify-center">
                                                    <label
                                                        className="relative cursor-pointer rounded-md font-medium text-[#0B4182] hover:text-[#0a366b] focus-within:outline-none"
                                                        htmlFor="file-upload"
                                                    >
                                                        <span>Upload a file</span>
                                                        <input className="sr-only" id="file-upload" name="file-upload" type="file" />
                                                    </label>
                                                    <p className="pl-1 text-slate-500">or drag and drop</p>
                                                </div>
                                                <p className="text-xs text-slate-500">PDF, PNG, JPG up to 10MB</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="pt-4">
                                        <button className="w-full flex justify-center items-center gap-2 bg-[#0B4182] hover:bg-[#082f5e] text-white font-bold rounded-xl h-12 transition-colors shadow-md shadow-[#0B4182]/20" type="button">
                                            <span>Submit Application</span>
                                        </button>
                                        <p className="text-xs text-slate-500 text-center mt-3">
                                            By submitting, you agree to our <Link className="underline hover:text-[#0B4182]" href="#">Terms of Service</Link> and <Link className="underline hover:text-[#0B4182]" href="#">Privacy Policy</Link>.
                                        </p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Trust Indicators */}
                <div className="py-8 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl text-slate-700">verified_user</span>
                        <span className="font-bold text-slate-700">Secure B2B</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl text-slate-700">local_shipping</span>
                        <span className="font-bold text-slate-700">Same Day Shipping</span>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-3xl text-slate-700">price_check</span>
                        <span className="font-bold text-slate-700">Wholesale Pricing</span>
                    </div>
                </div>
            </div>
        </main>
    );
}