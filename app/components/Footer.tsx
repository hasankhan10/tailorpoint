import React from "react";

export default function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-300 pt-10 pb-8 border-t border-zinc-800 relative text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-10 pb-6 border-b border-zinc-800">
          
          {/* Brand details */}
          <div className="lg:col-span-7 space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center border border-amber-400/30">
                <svg className="w-4.5 h-4.5 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" />
                  <path d="m10 10 7 7" strokeLinecap="round" />
                  <circle cx="9" cy="9" r="1.5" fill="currentColor" />
                  <path d="M19 13c-2 0-3 1.5-3 3s1 3 3 3" strokeLinecap="round" />
                </svg>
              </div>
              <div>
                <span className="font-display text-xl font-bold tracking-tight yellow-gradient-text">
                  TailorPoint
                </span>
                <span className="block text-[10px] text-zinc-500 font-mono tracking-widest text-right leading-none uppercase">
                  টেইলরপয়েন্ট
                </span>
              </div>
            </div>
            
            <p className="text-sm text-zinc-300 leading-relaxed max-w-sm">
              টেইলরপয়েন্ট হলো ভারতের টেইলর ও বুটিক দোকানের জন্য তৈরি এআই-ভিত্তিক সহজ কাস্টমার ম্যানেজমেন্ট (CRM) সফটওয়্যার।
            </p>

            <div className="text-[15px] text-zinc-400 space-y-1.5">
              <div>📧 ইমেইল: tailorpoint@gmail.com</div>
              <div>📞 হেল্পলাইন: +91-7001717263</div>
            </div>
          </div>

          {/* Links */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-2 font-display">ন্যাভিগেশন</h4>
              <ul className="space-y-1.5 text-[13px] text-zinc-400">
                <li><a href="#features" className="hover:text-amber-400 transition-colors">ফিচারসমূহ</a></li>
                <li><a href="#demo" className="hover:text-amber-400 transition-colors">লাইভ ডেমো</a></li>
                <li><a href="#pricing" className="hover:text-amber-400 transition-colors">প্রাইসিং প্ল্যান</a></li>
                <li><a href="#faq" className="hover:text-amber-400 transition-colors">প্রশ্নোত্তর</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-100 uppercase tracking-wider mb-2 font-display">আইনি নোটিশ</h4>
              <ul className="space-y-1.5 text-[13px] text-zinc-400">
                <li><a href="#" className="hover:text-amber-400 transition-colors">প্রাইভেসি পলিসি</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">ব্যবহারের শর্তাবলী</a></li>
                <li><a href="#" className="hover:text-amber-400 transition-colors">রিফান্ড পলিসি</a></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Copyright Section */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <div>
            &copy; {new Date().getFullYear()} TailorPoint CRM. সর্বস্বত্ব সংরক্ষিত।
          </div>
          <div className="flex items-center gap-2">
            <span>Made with ❤️ for Indian Tailors</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
