"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ElectricGrid from "../components/ElectricGrid";
import { useLanguage } from "../context/LanguageContext";

// Import Refactored Dashboard Components
import OverviewTab from "./components/OverviewTab";
import OrdersTab from "./components/OrdersTab";
import CustomersTab from "./components/CustomersTab";
import DashboardBilling from "./components/DashboardBilling";
import DashboardWhatsApp from "./components/DashboardWhatsApp";
import AddOrderModal from "./components/AddOrderModal";
import EditMeasurementsModal from "./components/EditMeasurementsModal";
import ClientDetailsModal from "./components/ClientDetailsModal";

type TabType = "overview" | "orders" | "customers" | "billing" | "whatsapp";
type OrderStatus = "পেন্ডিং" | "কাটিং" | "সেলাই হচ্ছে" | "রেডি" | "ডেলিভারড";

interface Order {
  id: string;
  customerName: string;
  phone: string;
  dressType: string;
  deliveryDate: string;
  price: number;
  status: OrderStatus;
  notes?: string;
}

interface Customer {
  id: string;
  name: string;
  phone: string;
  ordersCount: number;
  location?: string;
  measurements: {
    neck: number;
    length: number;
    chest: number;
    waist: number;
    sleeve: number;
    cuff: number;
  };
}

export default function Dashboard() {
  const { t, language } = useLanguage();
  const [activeTab, setActiveTab] = useState<TabType>("overview");
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  const renderMenuItem = (menuText: string) => {
    const parts = menuText.split(" ");
    const icon = parts[0];
    const label = parts.slice(1).join(" ");
    return (
      <span className="flex items-center gap-3.5 text-left w-full">
        <span className="shrink-0">{icon}</span>
        <span className="text-left leading-tight block">{label}</span>
      </span>
    );
  };

  // Mock Database State
  const [orders, setOrders] = useState<Order[]>([
    { id: "TP-101", customerName: "সঞ্জয় দত্ত", phone: "9876543210", dressType: "শেরওয়ানি", deliveryDate: "2026-06-20", price: 4500, status: "সেলাই হচ্ছে", notes: "গোল্ডেন কারুকাজ করা বোতাম" },
    { id: "TP-102", customerName: "তানিয়া সেনগুপ্ত", phone: "7001717263", dressType: "ডিজাইনার কুর্তি", deliveryDate: "2026-06-18", price: 1200, status: "কাটিং", notes: "হাতায় কুঁচি ডিজাইন" },
    { id: "TP-103", customerName: "অর্জুন শর্মা", phone: "8100234567", dressType: "প্রিমিয়াম স্যুট", deliveryDate: "2026-06-25", price: 6500, status: "পেন্ডিং", notes: "ডাবল ব্রেস্টেড জ্যাকেট" },
    { id: "TP-104", customerName: "রীতা সেন", phone: "9007123456", dressType: "লেহেঙ্গা চোলি", deliveryDate: "2026-06-16", price: 5500, status: "রেডি", notes: "বেল্টে লটকন লাগানো হবে" },
    { id: "TP-105", customerName: "রফিক আলি", phone: "7709876543", dressType: "পাঞ্জাবি স্যুট", deliveryDate: "2026-06-12", price: 1800, status: "ডেলিভারড", notes: "সুতি কাপড়ের উপর সাদা এমব্রয়ডারি" }
  ]);

  const [customers, setCustomers] = useState<Customer[]>([
    { id: "C-01", name: "সঞ্জয় দত্ত", phone: "9876543210", ordersCount: 2, location: "সল্টলেক, কলকাতা", measurements: { neck: 16.5, length: 42, chest: 40, waist: 36, sleeve: 25, cuff: 11.5 } },
    { id: "C-02", name: "তানিয়া সেনগুপ্ত", phone: "7001717263", ordersCount: 4, location: "শিলিগুড়ি, পশ্চিমবঙ্গ", measurements: { neck: 14, length: 38, chest: 34, waist: 30, sleeve: 18, cuff: 10 } },
    { id: "C-03", name: "অর্জুন শর্মা", phone: "8100234567", ordersCount: 1, location: "শ্যামবাজার, কলকাতা", measurements: { neck: 17, length: 30, chest: 42, waist: 38, sleeve: 26, cuff: 12 } },
    { id: "C-04", name: "রীতা সেন", phone: "9007123456", ordersCount: 3, location: "বিধাননগর, কলকাতা", measurements: { neck: 14.5, length: 54, chest: 36, waist: 32, sleeve: 21, cuff: 9.5 } },
    { id: "C-05", name: "রফিক আলি", phone: "7709876543", ordersCount: 2, location: "হাওড়া, পশ্চিমবঙ্গ", measurements: { neck: 16, length: 44, chest: 38, waist: 34, sleeve: 24, cuff: 11 } }
  ]);

  // Form State: Add Order Modal
  const [showOrderModal, setShowOrderModal] = useState(false);

  // Selected Customer for Measurements Edit
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);

  // Selected Client for Details View popup
  const [selectedClientPhone, setSelectedClientPhone] = useState<string | null>(null);

  // Sync theme status and scale font size on mount
  useEffect(() => {
    const root = document.documentElement;
    const originalFontSize = root.style.fontSize;
    root.style.fontSize = "132%"; // Scale up all rem-based typography on dashboard for enhanced readability

    const isLight = root.classList.contains("light");
    setTheme(isLight ? "light" : "dark");

    const observer = new MutationObserver(() => {
      const currentLight = root.classList.contains("light");
      setTheme(currentLight ? "light" : "dark");
    });
    observer.observe(root, { attributes: true, attributeFilter: ["class"] });
    
    return () => {
      observer.disconnect();
      root.style.fontSize = originalFontSize; // Restore base landing page font size
    };
  }, []);

  // Handler: Change Order Status
  const handleStatusChange = (orderId: string, newStatus: OrderStatus) => {
    setOrders(prev => prev.map(o => o.id === orderId ? { ...o, status: newStatus } : o));
  };

  // Handler: Add New Order
  const handleAddOrder = (order: {
    customerName: string;
    phone: string;
    location: string;
    dressType: string;
    deliveryDate: string;
    price: number;
    notes: string;
    measurements: {
      neck: number;
      length: number;
      chest: number;
      waist: number;
      sleeve: number;
      cuff: number;
    };
  }) => {
    const nextId = `TP-${100 + orders.length + 1}`;
    const orderData: Order = {
      id: nextId,
      customerName: order.customerName,
      phone: order.phone,
      dressType: order.dressType,
      deliveryDate: order.deliveryDate,
      price: order.price,
      notes: order.notes,
      status: "পেন্ডিং"
    };

    setOrders([orderData, ...orders]);

    // Check if customer exists, if not create one
    const customerExists = customers.some(c => c.phone === order.phone);
    if (!customerExists) {
      const nextCustId = `C-0${customers.length + 1}`;
      const newCust: Customer = {
        id: nextCustId,
        name: order.customerName,
        phone: order.phone,
        ordersCount: 1,
        location: order.location,
        measurements: order.measurements
      };
      setCustomers([...customers, newCust]);
    } else {
      setCustomers(prev => prev.map(c => c.phone === order.phone ? {
        ...c,
        ordersCount: c.ordersCount + 1,
        location: order.location,
        measurements: order.measurements
      } : c));
    }

    setShowOrderModal(false);
  };

  // Handler: Edit measurements
  const handleOpenMeasurements = (cust: Customer) => {
    setSelectedCustomer(cust);
  };

  const handleSaveMeasurements = (measurements: Customer["measurements"]) => {
    if (selectedCustomer) {
      setCustomers(prev => prev.map(c => c.id === selectedCustomer.id ? { ...c, measurements } : c));
      setSelectedCustomer(null);
    }
  };

  return (
    <div className="relative z-0 bg-zinc-950 text-zinc-100 min-h-screen flex flex-col antialiased">
      
      {/* Dynamic Background Dot Grid (Static, non-interactive for dashboard focus) */}
      <ElectricGrid interactive={false} />
      <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-radial-gradient -z-10 pointer-events-none" />
      <div className="absolute top-[400px] right-1/4 w-[500px] h-[500px] bg-radial-gold -z-10 pointer-events-none" />

      {/* Header Container */}
      <header className="sticky top-0 z-40 glass-panel border-b border-zinc-800/60 h-16 flex items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-amber-500 to-amber-600 flex items-center justify-center border border-amber-400/30">
              <svg className="w-4 h-4 text-slate-950" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 3a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H5z" />
                <path d="m10 10 7 7" strokeLinecap="round" />
                <circle cx="9" cy="9" r="1.5" fill="currentColor" />
              </svg>
            </div>
            <span className="font-display font-bold text-lg yellow-gradient-text">TailorPoint</span>
          </Link>
          <span className="hidden sm:inline text-zinc-700">|</span>
          <span className="hidden sm:inline text-xs font-bold text-amber-500 bg-amber-500/10 px-2.5 py-0.5 rounded-full border border-amber-500/20 font-display">
            {t("dash.title")}
          </span>
        </div>

        {/* Header Right */}
        <div className="flex items-center gap-4">
          <div className="text-right hidden sm:block">
            <h4 className="text-xs font-bold text-zinc-200 font-display">{t("dash.shopName")}</h4>
            <p className="text-[10px] text-zinc-400">{t("dash.location")}</p>
          </div>
          
          <button 
            onClick={() => setShowOrderModal(true)}
            className="px-3.5 py-1.5 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-300 hover:to-amber-400 cursor-pointer shadow-md transition-all active:scale-95 flex items-center gap-1.5"
          >
            <span>＋ {t("dash.newOrder")}</span>
          </button>
          
          {/* Mobile toggle button */}
          <button
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
            className="md:hidden w-8 h-8 rounded-full border border-zinc-800 bg-zinc-900/40 flex items-center justify-center text-zinc-300 hover:text-zinc-100 cursor-pointer"
          >
            ☰
          </button>
        </div>
      </header>

      {/* Main Body */}
      <div className="flex-grow flex relative">
        
        {/* Sidebar Nav */}
        <aside className={`
          fixed inset-y-0 left-0 z-40 w-64 glass-panel border-r border-zinc-800/60 pt-20 pb-6 flex flex-col justify-between transition-transform duration-300 md:static md:translate-x-0 md:pt-6
          ${mobileSidebarOpen ? "translate-x-0" : "-translate-x-full"}
        `}>
          <div className="space-y-6 px-4">
            <nav className="space-y-1.5">
              <button
                onClick={() => { setActiveTab("overview"); setMobileSidebarOpen(false); }}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-xs font-bold font-display cursor-pointer transition-all ${
                  activeTab === "overview"
                    ? "bg-gradient-to-r from-amber-500/15 to-transparent border-l-2 border-amber-500 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200"
                }`}
              >
                {renderMenuItem(t("dash.menuOverview"))}
              </button>
              
              <button
                onClick={() => { setActiveTab("orders"); setMobileSidebarOpen(false); }}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-xs font-bold font-display cursor-pointer transition-all ${
                  activeTab === "orders"
                    ? "bg-gradient-to-r from-amber-500/15 to-transparent border-l-2 border-amber-500 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200"
                }`}
              >
                {renderMenuItem(t("dash.menuOrders"))}
              </button>

              <button
                onClick={() => { setActiveTab("customers"); setMobileSidebarOpen(false); }}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-xs font-bold font-display cursor-pointer transition-all ${
                  activeTab === "customers"
                    ? "bg-gradient-to-r from-amber-500/15 to-transparent border-l-2 border-amber-500 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200"
                }`}
              >
                {renderMenuItem(t("dash.menuCustomers"))}
              </button>

              <button
                onClick={() => { setActiveTab("billing"); setMobileSidebarOpen(false); }}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-xs font-bold font-display cursor-pointer transition-all ${
                  activeTab === "billing"
                    ? "bg-gradient-to-r from-amber-500/15 to-transparent border-l-2 border-amber-500 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200"
                }`}
              >
                {renderMenuItem(t("dash.menuBilling"))}
              </button>

              <button
                onClick={() => { setActiveTab("whatsapp"); setMobileSidebarOpen(false); }}
                className={`w-full flex items-center px-4 py-2.5 rounded-xl text-xs font-bold font-display cursor-pointer transition-all ${
                  activeTab === "whatsapp"
                    ? "bg-gradient-to-r from-amber-500/15 to-transparent border-l-2 border-amber-500 text-amber-400"
                    : "text-zinc-400 hover:bg-zinc-900/50 hover:text-zinc-200"
                }`}
              >
                {renderMenuItem(t("dash.menuWhatsApp"))}
              </button>
            </nav>
          </div>

          <div className="px-6 space-y-4">
            <div className="p-3 bg-zinc-900/40 border border-zinc-850 rounded-xl text-[10px] text-zinc-400">
              <span className="font-bold text-amber-500 block">{t("dash.license")}</span>
              {t("dash.licenseExpiry")}
            </div>
            
            <Link
              href="/"
              className="w-full py-2.5 rounded-xl border border-zinc-800 hover:bg-zinc-900/50 flex items-center justify-center gap-2 text-xs font-bold font-display text-zinc-400 hover:text-red-400 transition-all cursor-pointer"
            >
              {t("dash.logout")}
            </Link>
          </div>
        </aside>

        {/* Content Panel Area */}
        <main className="flex-grow p-4 sm:p-6 lg:p-8 overflow-x-hidden relative z-10 w-full">
          {activeTab === "overview" && <OverviewTab orders={orders} />}
          {activeTab === "orders" && (
            <OrdersTab 
              orders={orders} 
              handleStatusChange={handleStatusChange} 
              setShowOrderModal={setShowOrderModal} 
              onViewClient={(phone) => setSelectedClientPhone(phone)}
            />
          )}
          {activeTab === "customers" && (
            <CustomersTab 
              customers={customers} 
              handleOpenMeasurements={handleOpenMeasurements} 
            />
          )}
          {activeTab === "billing" && <DashboardBilling />}
          {activeTab === "whatsapp" && <DashboardWhatsApp />}
        </main>
      </div>

      {/* Refactored Add Order Modal */}
      <AddOrderModal
        isOpen={showOrderModal}
        onClose={() => setShowOrderModal(false)}
        onAddOrder={handleAddOrder}
      />

      {/* Refactored Edit Measurements Modal */}
      <EditMeasurementsModal
        isOpen={selectedCustomer !== null}
        customer={selectedCustomer}
        onClose={() => setSelectedCustomer(null)}
        onSaveMeasurements={handleSaveMeasurements}
      />

      {/* Client Details Modal */}
      <ClientDetailsModal
        isOpen={selectedClientPhone !== null}
        customer={customers.find(c => c.phone === selectedClientPhone) || null}
        onClose={() => setSelectedClientPhone(null)}
      />

    </div>
  );
}
