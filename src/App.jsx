import { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for sandwich menu
import Herosection from "./Components/Herosection";
import HelpSection from "./Components/HelpSection";
import PremiumSection from "./Components/PremiumSection";
import Features from "./Components/Features";
import Performance from "./Components/Performance";
import PurchasePlan from "./Components/PurchasePlan";
import ClientReview from "./Components/ClientReview";
import Footer from "./Components/Footer";

export default function App() {
  const [activeTab, setActiveTab] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const Tabs = [
    { id: 1, name: "Home" },
    { id: 2, name: "AboutUs" },
    { id: 3, name: "ContactUs" },
  ];

  return (
    // <div className="flex w-screen h-screen flex-col">
    //   {/* Navbar */}
    //   <nav className="bg-cyan-500 w-full h-fit flex justify-between items-center px-5 py-3 md:justify-center relative">
    //     {/* Desktop Navbar */}
    //     <ul className="hidden md:flex gap-10 text-xl text-black relative">
    //       {Tabs.map((tab) => (
    //         <li
    //           key={tab.id}
    //           className={`relative cursor-pointer pb-2 ${
    //             activeTab === tab.id ? "text-white font-semibold" : ""
    //           }`}
    //           onClick={() => setActiveTab(tab.id)}
    //         >
    //           {tab.name}
    //           {activeTab === tab.id && (
    //             <span className="absolute left-0 bottom-0 w-full h-1 bg-black"></span>
    //           )}
    //         </li>
    //       ))}
    //     </ul>

    //     {/* Mobile Hamburger Menu (Visible only on small screens) */}
    //     <button
    //       className="md:hidden text-3xl"
    //       onClick={() => setIsSidebarOpen(true)}
    //     >
    //       <Menu size={32} />
    //     </button>
    //   </nav>

    //   {/* Sidebar for Mobile */}
    //   <div
    //     className={`fixed top-0 left-0 w-64 h-full bg-cyan-500 shadow-lg transform ${
    //       isSidebarOpen ? "translate-x-0" : "-translate-x-full"
    //     } transition-transform duration-300 ease-in-out md:hidden`}
    //   >
    //     {/* Close Button */}
    //     <button
    //       className="absolute top-4 right-4 text-black text-2xl"
    //       onClick={() => setIsSidebarOpen(false)}
    //     >
    //       <X size={28} />
    //     </button>

    //     {/* Sidebar Navigation */}
    //     <ul className="flex flex-col gap-6 mt-16 pl-5 text-xl text-black">
    //       {Tabs.map((tab) => (
    //         <li
    //           key={tab.id}
    //           className={`cursor-pointer pb-2 ${
    //             activeTab === tab.id ? "text-white font-semibold" : ""
    //           }`}
    //           onClick={() => {
    //             setActiveTab(tab.id);
    //             setIsSidebarOpen(false); // Close sidebar when clicking a tab
    //           }}
    //         >
    //           {tab.name}
    //         </li>
    //       ))}
    //     </ul>
    //   </div>
    //   <img src={img} width={650}></img>
    // </div>
    <div>
      <Herosection />
      <HelpSection />
      <PremiumSection />
      <Features />
      <Performance />
      <PurchasePlan />
      <ClientReview />
      <Footer />
    </div>
  );
}
