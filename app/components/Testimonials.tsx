import React from "react";

export default function Testimonials() {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-16 reveal">
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            আমাদের গ্রাহকরা{" "}
            <span className="gold-gradient-text">
              কী বলছেন শুনুন
            </span>
          </h2>
          <p className="text-zinc-400 text-base mt-4">
            ইতিমধ্যেই ভারতের ৫০০-রও বেশি টেইলর ভাই ও বুটিক আমাদের অ্যাপ ব্যবহার করে কাজ সহজ করে নিয়েছেন।
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Review 1 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-4 reveal-left">
            <div className="flex text-amber-400 text-sm">★★★★★</div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              &ldquo;টেইলরপয়েন্ট আসার পর আমার দোকানের খাতার দিন শেষ। কাস্টমারদের ফোনে ১ ক্লিকে মাপ পাঠিয়ে দেওয়ায় আমাদের মান অনেক বেড়েছে। আর ইউপিআই পেমেন্ট লিংকের কারণে এখন বকেয়া টাকা আদায় করা অনেক সহজ!&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="/avatar_arindam.png"
                alt="অরিন্দম মুখার্জী"
                className="w-10 h-10 rounded-full object-cover border border-amber-500/30 shadow-md"
              />
              <div>
                <h4 className="text-sm font-semibold text-zinc-100">অরিন্দম মুখার্জী</h4>
                <span className="text-[10px] text-zinc-500">মালিক, এলিগেন্ট ফিট টেইলার্স, কলকাতা</span>
              </div>
            </div>
          </div>

          {/* Review 2 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-4 reveal delay-100">
            <div className="flex text-amber-400 text-sm">★★★★★</div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              &ldquo;আমাদের সবচেয়ে ভালো লাগে এআই ড্রেস প্রিভিউ। কাপড়ের টুকরো দেখে আগে কাস্টমাররা ভাবত মানাবে কি না। এখন এআই দিয়ে তৈরি সুন্দর ছবি দেখে ওনারা সাথে সাথে অর্ডার কনফার্ম করে দেন। অসাধারণ সার্ভিস!&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="/avatar_tania.png"
                alt="তানিয়া সেনগুপ্ত"
                className="w-10 h-10 rounded-full object-cover border border-amber-500/30 shadow-md"
              />
              <div>
                <h4 className="text-sm font-semibold text-zinc-100">তানিয়া সেনগুপ্ত</h4>
                <span className="text-[10px] text-zinc-500">ফাউন্ডার, রূপসী ফ্যাশন ও বুটিক, শিলিগুড়ি</span>
              </div>
            </div>
          </div>

          {/* Review 3 */}
          <div className="glass-panel p-6 rounded-2xl border border-zinc-800 space-y-4 reveal-right delay-200">
            <div className="flex text-amber-400 text-sm">★★★★★</div>
            <p className="text-zinc-300 text-sm leading-relaxed">
              &ldquo;ডিজিটাল বিলিং সিস্টেমটি আমাদের খুব কাজে আসে। কারিগর কখন কাজ শুরু করল আর কখন ডেলিভারি হবে সব এক জায়গায় দেখা যায়। আমাদের কাজের স্পিড দ্বিগুণ হয়ে গিয়েছে। দারুণ সফটওয়্যার!&rdquo;
            </p>
            <div className="flex items-center gap-3 pt-2">
              <img
                src="/avatar_sanjay.png"
                alt="সঞ্জয় দত্ত"
                className="w-10 h-10 rounded-full object-cover border border-amber-500/30 shadow-md"
              />
              <div>
                <h4 className="text-sm font-semibold text-zinc-100">সঞ্জয় দত্ত</h4>
                <span className="text-[10px] text-zinc-500">ম্যানেজার, রয়্যাল কালেকশন টেইলার্স, দুর্গাপুর</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
