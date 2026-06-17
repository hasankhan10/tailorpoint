"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ElectricGrid from "../components/ElectricGrid";
import { useLanguage } from "../context/LanguageContext";

type ActiveTab = "login" | "signup";

export default function LoginPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("login");
  const [countryCode, setCountryCode] = useState("+91"); // Indian base only
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [shopName, setShopName] = useState("");
  const [ownerName, setOwnerName] = useState("");
  const { language, t } = useLanguage();
  
  // UI states
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [successMsg, setSuccessMsg] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Reset errors and fields on tab switch
  useEffect(() => {
    setPhone("");
    setPassword("");
    setConfirmPassword("");
    setShopName("");
    setOwnerName("");
    setErrors({});
    setSuccessMsg("");
  }, [activeTab]);

  // Validate form in real-time
  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};

    // Validate phone number
    if (!phone) {
      newErrors.phone = t("auth.errPhone");
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = t("auth.errPhoneDigits");
    } else if (phone.length !== 10) {
      newErrors.phone = t("auth.errPhoneLen");
    }

    // Validate password
    if (!password) {
      newErrors.password = t("auth.errPass");
    } else if (password.length < 6) {
      newErrors.password = t("auth.errPassLen");
    }

    if (activeTab === "signup") {
      if (!confirmPassword) {
        newErrors.confirmPassword = t("auth.errConfirmPass");
      } else if (confirmPassword !== password) {
        newErrors.confirmPassword = t("auth.errConfirmMatch");
      }
      if (!shopName.trim()) {
        newErrors.shopName = t("auth.errShopName");
      }
      if (!ownerName.trim()) {
        newErrors.ownerName = t("auth.errOwnerName");
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    setIsLoading(true);

    // Simulate API request
    setTimeout(() => {
      setIsLoading(false);
      if (activeTab === "login") {
        setSuccessMsg(t("auth.loginSuccess"));
      } else {
        setSuccessMsg(t("auth.signupSuccess"));
      }

      // Simulate redirect after 2 seconds
      setTimeout(() => {
        window.location.href = "/dashboard";
      }, 2000);
    }, 1500);
  };

  return (
    <div className="relative z-0 bg-zinc-950 text-zinc-100 min-h-screen flex flex-col antialiased">
      {/* Background elements */}
      <ElectricGrid />
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-radial-gradient -z-10 pointer-events-none" />
      <div className="absolute top-[300px] right-1/4 w-[600px] h-[600px] bg-radial-gold -z-10 pointer-events-none" />
      
      <Header />

      {/* Main Container */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-10 md:py-16 relative z-10">
        <div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Premium Value Proposition (Desktop only) */}
          <div className="hidden lg:flex lg:col-span-6 flex-col justify-center text-left space-y-8 animate-fade-in">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold text-amber-400 bg-amber-400/10 border border-amber-400/20 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping" />
                {language === "bn" ? "৫,০০০+ টেইলরের প্রথম পছন্দ" : "First Choice of 5,000+ Tailors"}
              </span>
              <h1 className="text-4xl xl:text-5xl font-extrabold font-display leading-tight tracking-tight text-zinc-100">
                {language === "bn" ? (
                  <>
                    আপনার টেইলরিং ব্যবসা <br />
                    <span className="yellow-gradient-text">এখন হবে ডিজিটাল ও এআই-স্মার্ট!</span>
                  </>
                ) : (
                  <>
                    Your Tailoring Business <br />
                    <span className="yellow-gradient-text">Goes Digital & AI-Smart!</span>
                  </>
                )}
              </h1>
              <p className="text-zinc-400 font-sans text-base max-w-md">
                {language === "bn"
                  ? "অর্ডার ম্যানেজমেন্ট, অটোমেটিক হোয়াটসঅ্যাপ কাস্টমার আপডেট এবং ইনস্ট্যান্ট ডিজিটাল রিসিট ও বিলিং - সব কিছু এক জায়গায়।"
                  : "Order management, automated WhatsApp customer notifications, and instant digital billing—all in one place."}
              </p>
            </div>

            {/* Core features listing */}
            <div className="space-y-4 font-sans">
              <div className="flex gap-4 items-start p-3.5 rounded-xl border border-zinc-900/60 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-800 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 shrink-0">
                  👔
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-200">
                    {language === "bn" ? "এআই ফিটিং ট্রায়াল" : "AI Fitting Trial Room"}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {language === "bn"
                      ? "পোশাক সেলাইয়ের আগেই কাস্টমারকে ভার্চুয়াল এআই ফিটিং প্রিভিউ দেখান।"
                      : "Show clients virtual pre-fitting previews before fabric cutting starts."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-3.5 rounded-xl border border-zinc-900/60 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-800 transition-all">
                <div className="w-10 h-10 rounded-lg bg-violet-400/10 border border-violet-400/25 flex items-center justify-center text-violet-400 shrink-0">
                  💬
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-200">
                    {language === "bn" ? "অটোমেটিক হোয়াটসঅ্যাপ আপডেট" : "Automated WhatsApp Alerts"}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {language === "bn"
                      ? "অর্ডারের প্রতিটি স্ট্যাটাস কাস্টমারের হোয়াটসঅ্যাপে চলে যাবে নিজে নিজেই।"
                      : "Every order status update triggers message alerts straight to their mobile."}
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-3.5 rounded-xl border border-zinc-900/60 bg-zinc-900/30 backdrop-blur-sm hover:border-zinc-800 transition-all">
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/25 flex items-center justify-center text-amber-400 shrink-0">
                  📊
                </div>
                <div>
                  <h3 className="font-bold text-sm text-zinc-200">
                    {language === "bn" ? "সহজ হিসাব ও বিলিং" : "Fast Invoicing & Ledger"}
                  </h3>
                  <p className="text-xs text-zinc-400 mt-0.5">
                    {language === "bn"
                      ? "ডিজিটাল পেমেন্ট রিসিট ও বকেয়া খাতার হিসাব থাকবে ফোনে নিরাপদ ও সুরক্ষিত।"
                      : "Keep track of advances, dues, and UPI collection receipts safely on your phone."}
                  </p>
                </div>
              </div>
            </div>

            {/* Micro review / Trust factor */}
            <div className="pt-4 border-t border-zinc-900 flex items-center gap-4">
              <div className="relative w-12 h-12 rounded-full overflow-hidden border border-amber-500/30 shrink-0 bg-zinc-850 flex items-center justify-center text-lg">
                👨‍🎨
              </div>
              <div>
                <p className="text-xs text-zinc-400 italic">
                  {language === "bn"
                    ? `"টেইলরপয়েন্ট ব্যবহার করার পর আমার দোকানের হিসাব রাখা অনেক সহজ হয়ে গেছে। কাস্টমাররাও খুব খুশি!"`
                    : `"Using TailorPoint has made keeping size books and dues tracker so easy. My clients love the updates!"`}
                </p>
                <p className="text-xs font-bold text-amber-400 mt-1">
                  {language === "bn" ? "— রফিক আলি, রফিক টেইলার্স, কলকাতা" : "— Rafiq Ali, Rafiq Tailors, Kolkata"}
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Login/Signup form panel */}
          <div className="w-full lg:col-span-6 flex justify-center lg:justify-end">
            <div className="w-full max-w-md glass-panel-gold border border-amber-500/20 rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden transition-all duration-300">
              
              {/* Scanline premium animation detail */}
              <div className="absolute left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-amber-400/40 to-transparent animate-scanline pointer-events-none" />

              {/* Tab Selector Buttons */}
              <div className="relative flex p-1 bg-zinc-900/80 rounded-xl border border-zinc-800/80 mb-8">
                {/* Sliding indicator capsule */}
                <div
                  className={`absolute top-1 bottom-1 rounded-lg bg-gradient-to-r from-amber-400 to-amber-500 shadow-md transition-all duration-300 ease-out z-0`}
                  style={{
                    left: activeTab === "login" ? "4px" : "50%",
                    width: "calc(50% - 6px)",
                  }}
                />
                
                <button
                  type="button"
                  onClick={() => setActiveTab("login")}
                  className={`flex-1 py-2.5 text-center text-sm font-bold font-display z-10 transition-colors duration-200 cursor-pointer ${
                    activeTab === "login" ? "text-slate-950" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {t("auth.tabLogin")}
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("signup")}
                  className={`flex-1 py-2.5 text-center text-sm font-bold font-display z-10 transition-colors duration-200 cursor-pointer ${
                    activeTab === "signup" ? "text-slate-950" : "text-zinc-400 hover:text-zinc-200"
                  }`}
                >
                  {t("auth.tabSignup")}
                </button>
              </div>

              {/* Heading */}
              <div className="mb-6 text-center sm:text-left">
                <h2 className="text-xl sm:text-2xl font-bold font-display text-zinc-100">
                  {activeTab === "login" ? t("auth.welcome") : t("auth.newShop")}
                </h2>
                <p className="text-xs text-zinc-400 mt-1 font-sans">
                  {activeTab === "login" 
                    ? t("auth.welcomeDesc") 
                    : t("auth.newShopDesc")}
                </p>
              </div>

              {/* Success Notification Popup */}
              {successMsg && (
                <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs flex items-center gap-3 animate-scale-in">
                  <div className="w-6 h-6 rounded-full bg-emerald-500/25 flex items-center justify-center text-[10px] shrink-0 font-bold">
                    ✓
                  </div>
                  <div>
                    <p className="font-bold">{successMsg}</p>
                    <p className="text-[10px] text-emerald-500/70 mt-0.5">{t("auth.redirectText")}</p>
                  </div>
                </div>
              )}

              {/* Authentication Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* Signup specific fields */}
                {activeTab === "signup" && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Owner Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="ownerName" className="block text-xs font-bold text-zinc-350 font-display">
                        {t("auth.ownerName")}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-zinc-550 select-none">
                          👤
                        </span>
                        <input
                          id="ownerName"
                          type="text"
                          value={ownerName}
                          onChange={(e) => setOwnerName(e.target.value)}
                          placeholder={t("auth.ownerPlaceholder")}
                          className={`w-full pl-9 pr-4 py-2.5 rounded-xl border ${
                            errors.ownerName ? "border-red-500/50 bg-red-500/5" : "border-zinc-800 bg-zinc-900/40"
                          } text-sm text-zinc-100 placeholder-zinc-550 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/40 focus:outline-none transition-all`}
                        />
                      </div>
                      {errors.ownerName && (
                        <p className="text-[10px] text-red-500 font-sans mt-0.5">{errors.ownerName}</p>
                      )}
                    </div>

                    {/* Shop Name Input */}
                    <div className="space-y-1.5">
                      <label htmlFor="shopName" className="block text-xs font-bold text-zinc-350 font-display">
                        {t("auth.shopName")}
                      </label>
                      <div className="relative">
                        <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-zinc-550 select-none">
                          🏬
                        </span>
                        <input
                          id="shopName"
                          type="text"
                          value={shopName}
                          onChange={(e) => setShopName(e.target.value)}
                          placeholder={t("auth.shopPlaceholder")}
                          className={`w-full pl-9 pr-4 py-2.5 rounded-xl border ${
                            errors.shopName ? "border-red-500/50 bg-red-500/5" : "border-zinc-800 bg-zinc-900/40"
                          } text-sm text-zinc-100 placeholder-zinc-550 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/40 focus:outline-none transition-all`}
                        />
                      </div>
                      {errors.shopName && (
                        <p className="text-[10px] text-red-500 font-sans mt-0.5">{errors.shopName}</p>
                      )}
                    </div>
                  </div>
                )}

                {/* Mobile Number Input with Country Code Selector */}
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="block text-xs font-bold text-zinc-350 font-display">
                    {t("auth.phone")}
                  </label>
                  <div className="flex rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/40 focus-within:border-amber-400/80 focus-within:ring-1 focus-within:ring-amber-400/40 transition-all">
                    {/* Static Indian Country Code Prefix */}
                    <div className="flex items-center px-3.5 bg-zinc-900/80 border-r border-zinc-800 text-xs font-bold font-display text-zinc-300 select-none">
                      🇮🇳 +91
                    </div>
                    
                    {/* Phone Input Box */}
                    <input
                      id="phone"
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder={t("auth.phonePlaceholder")}
                      className={`flex-grow px-4 py-2.5 bg-transparent text-sm text-zinc-100 placeholder-zinc-550 focus:outline-none ${
                        errors.phone ? "bg-red-500/5 text-red-500" : ""
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-[10px] text-red-500 font-sans mt-0.5">{errors.phone}</p>
                  )}
                </div>

                {/* Password Input with Show/Hide Toggle */}
                <div className="space-y-1.5">
                  <div className="flex justify-between items-center">
                    <label htmlFor="password" className="block text-xs font-bold text-zinc-350 font-display">
                      {t("auth.password")}
                    </label>
                    {activeTab === "login" && (
                      <a href="#" className="text-[10px] font-semibold text-amber-500 hover:text-amber-400 transition-colors">
                        {t("auth.forgotPass")}
                      </a>
                    )}
                  </div>
                  <div className="relative">
                    <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-zinc-550 select-none">
                      🔒
                    </span>
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder={t("auth.passwordPlaceholder")}
                      className={`w-full pl-9 pr-10 py-2.5 rounded-xl border ${
                        errors.password ? "border-red-500/50 bg-red-500/5" : "border-zinc-800 bg-zinc-900/40"
                      } text-sm text-zinc-100 placeholder-zinc-550 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/40 focus:outline-none transition-all`}
                    />
                    
                    {/* Show/Hide eye button */}
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-350 transition-colors cursor-pointer"
                      title={showPassword ? t("auth.password") : t("auth.password")}
                    >
                      {showPassword ? (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21" />
                        </svg>
                      ) : (
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                      )}
                    </button>
                  </div>
                  {errors.password && (
                    <p className="text-[10px] text-red-500 font-sans mt-0.5">{errors.password}</p>
                  )}
                </div>

                {/* Confirm Password Input (Signup only) */}
                {activeTab === "signup" && (
                  <div className="space-y-1.5">
                    <label htmlFor="confirmPassword" className="block text-xs font-bold text-zinc-350 font-display">
                      {t("auth.confirmPassword")}
                    </label>
                    <div className="relative">
                      <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-sm text-zinc-550 select-none">
                        🔒
                      </span>
                      <input
                        id="confirmPassword"
                        type={showPassword ? "text" : "password"}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="••••••"
                        className={`w-full pl-9 pr-10 py-2.5 rounded-xl border ${
                          errors.confirmPassword ? "border-red-500/50 bg-red-500/5" : "border-zinc-800 bg-zinc-900/40"
                        } text-sm text-zinc-100 placeholder-zinc-550 focus:border-amber-400/80 focus:ring-1 focus:ring-amber-400/40 focus:outline-none transition-all`}
                      />
                    </div>
                    {errors.confirmPassword && (
                      <p className="text-[10px] text-red-500 font-sans mt-0.5">{errors.confirmPassword}</p>
                    )}
                  </div>
                )}

                {/* Terms and conditions statement (Signup only) */}
                {activeTab === "signup" && (
                  <p className="text-[10px] text-zinc-500 leading-normal font-sans">
                    {language === "bn" ? (
                      <>
                        নিবন্ধনের মাধ্যমে আপনি আমাদের{" "}
                        <a href="#" className="text-amber-500 hover:underline">{t("auth.termsLink")}</a> ও{" "}
                        <a href="#" className="text-amber-500 hover:underline">{t("auth.privacyLink")}</a>-তে সম্মতি দিচ্ছেন।
                      </>
                    ) : (
                      <>
                        By creating an account, you agree to our{" "}
                        <a href="#" className="text-amber-500 hover:underline">{t("auth.termsLink")}</a> and{" "}
                        <a href="#" className="text-amber-500 hover:underline">{t("auth.privacyLink")}</a>.
                      </>
                    )}
                  </p>
                )}

                {/* Submit button with glow effect */}
                <button
                  type="submit"
                  disabled={isLoading || successMsg !== ""}
                  className={`w-full py-3 rounded-xl text-sm font-bold font-display cursor-pointer transition-all duration-250 flex items-center justify-center gap-2 border shadow-lg ${
                    isLoading || successMsg !== ""
                      ? "bg-zinc-800 text-zinc-500 border-zinc-750 cursor-not-allowed"
                      : "bg-gradient-to-r from-amber-400 via-yellow-400 to-amber-500 text-slate-950 border-amber-300/40 hover:from-amber-300 hover:to-amber-400 hover:shadow-amber-500/25 active:scale-98"
                  }`}
                >
                  {isLoading ? (
                    <>
                      {/* Premium Loading Spinner */}
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-slate-950" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      {t("auth.processing")}
                    </>
                  ) : (
                    activeTab === "login" ? t("auth.loginBtn") : t("auth.signupBtn")
                  )}
                </button>
              </form>

              {/* Footer text in form card */}
              <div className="mt-8 pt-6 border-t border-zinc-850 text-center">
                <p className="text-xs text-zinc-400 font-sans">
                  {activeTab === "login" ? "নতুন দোকান খুলতে চান?" : "ইতিমধ্যে অ্যাকাউন্ট আছে?"}{" "}
                  <button
                    type="button"
                    onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
                    className="font-bold text-amber-500 hover:text-amber-400 hover:underline cursor-pointer"
                  >
                    {activeTab === "login" ? "এখানে রেজিস্ট্রেশন করুন" : "লগইন করুন"}
                  </button>
                </p>
              </div>

            </div>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
