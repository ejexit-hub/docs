"use client";
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Monitor, 
  Server, 
  Network, 
  CreditCard, 
  HardDrive, 
  Cpu, 
  MemoryStick,
  Smartphone,
  Tablet,
  ChevronLeft, 
  ChevronRight,
  Menu, 
  X,
  Search
} from 'lucide-react';
import { cn } from '../lib/utils';

interface NavigationItem {
  id: string;
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  href: string;
  category?: string;
}

interface ProductTrainingSidebarProps {
  className?: string;
}

// Product Training navigation items
const navigationItems: NavigationItem[] = [
  { id: "intro", name: "Introduction", icon: BookOpen, href: "/docs/product-training/intro", category: "Overview" },
  { id: "laptops-desktops", name: "Laptops & Desktops", icon: Monitor, href: "/docs/product-training/laptops-desktops", category: "Core Products" },
  { id: "servers", name: "Servers", icon: Server, href: "/docs/product-training/servers", category: "Core Products" },
  { id: "networking", name: "Networking", icon: Network, href: "/docs/product-training/networking", category: "Core Products" },
  { id: "cards", name: "Cards", icon: CreditCard, href: "/docs/product-training/cards", category: "Components" },
  { id: "drives", name: "Drives", icon: HardDrive, href: "/docs/product-training/drives", category: "Components" },
  { id: "gpu", name: "GPU", icon: Cpu, href: "/docs/product-training/gpu", category: "Components" },
  { id: "memory", name: "Memory", icon: MemoryStick, href: "/docs/product-training/memory", category: "Components" },
  { id: "processors", name: "Processors", icon: Cpu, href: "/docs/product-training/processors", category: "Components" },
  { id: "storage", name: "Storage", icon: HardDrive, href: "/docs/product-training/storage", category: "Components" },
  { id: "phones", name: "Phones", icon: Smartphone, href: "/docs/product-training/phones", category: "Mobile Devices" },
  { id: "tablets", name: "Tablets", icon: Tablet, href: "/docs/product-training/tablets", category: "Mobile Devices" },
];

export function ProductTrainingModernSidebar({ className = "" }: ProductTrainingSidebarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("intro");

  // Auto-open sidebar on desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(true);
      } else {
        setIsOpen(false);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => setIsOpen(!isOpen);
  const toggleCollapse = () => setIsCollapsed(!isCollapsed);

  const handleItemClick = (itemId: string) => {
    setActiveItem(itemId);
    if (window.innerWidth < 768) {
      setIsOpen(false);
    }
  };

  // Group items by category
  const groupedItems = navigationItems.reduce((acc, item) => {
    const category = item.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as Record<string, NavigationItem[]>);

  return (
    <>
      {/* Mobile hamburger button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-6 left-6 z-50 p-3 rounded-lg bg-white shadow-md border border-slate-100 md:hidden hover:bg-slate-50 transition-all duration-200"
        aria-label="Toggle sidebar"
      >
        {isOpen ? 
          <X className="h-5 w-5 text-slate-600" /> : 
          <Menu className="h-5 w-5 text-slate-600" />
        }
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-30 md:hidden transition-opacity duration-300" 
          onClick={toggleSidebar} 
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed top-0 left-0 h-full bg-white border-r border-slate-200 z-40 transition-all duration-300 ease-in-out flex flex-col",
          isOpen ? "translate-x-0" : "-translate-x-full",
          isCollapsed ? "w-28" : "w-80",
          "md:translate-x-0 md:static md:z-auto",
          className
        )}
      >
        {/* Header with logo and collapse button */}
        <div className="flex items-center justify-between p-5 border-b border-slate-200 bg-slate-50/60">
          {!isCollapsed && (
            <div className="flex items-center space-x-2.5">
              <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center shadow-sm">
                <span className="text-white font-bold text-base">PT</span>
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-slate-800 text-base">Product Training</span>
                <span className="text-xs text-slate-500">Exit Technologies</span>
              </div>
            </div>
          )}

          {isCollapsed && (
            <div className="w-9 h-9 bg-green-600 rounded-lg flex items-center justify-center mx-auto shadow-sm">
              <span className="text-white font-bold text-base">PT</span>
            </div>
          )}

          {/* Desktop collapse button */}
          <button
            onClick={toggleCollapse}
            className="hidden md:flex p-1.5 rounded-md hover:bg-slate-100 transition-all duration-200"
            aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            {isCollapsed ? (
              <ChevronRight className="h-4 w-4 text-slate-500" />
            ) : (
              <ChevronLeft className="h-4 w-4 text-slate-500" />
            )}
          </button>
        </div>

        {/* Search Bar */}
        {!isCollapsed && (
          <div className="px-4 py-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3.5 w-3.5 text-slate-400" />
              <input
                type="text"
                placeholder="Search training topics..."
                className="w-full pl-9 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-md text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>
        )}

        {/* Navigation */}
        <nav className="flex-1 px-3 py-2 overflow-y-auto">
          {Object.entries(groupedItems).map(([category, items]) => (
            <div key={category} className="mb-6">
              {!isCollapsed && (
                <h3 className="px-3 py-2 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  {category}
                </h3>
              )}
              <ul className="space-y-0.5">
                {items.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeItem === item.id;

                  return (
                    <li key={item.id}>
                      <button
                        onClick={() => handleItemClick(item.id)}
                        className={cn(
                          "w-full flex items-center space-x-2.5 px-3 py-2.5 rounded-md text-left transition-all duration-200 group",
                          isActive
                            ? "bg-green-50 text-green-700"
                            : "text-slate-600 hover:bg-slate-50 hover:text-slate-900",
                          isCollapsed ? "justify-center px-2" : ""
                        )}
                        title={isCollapsed ? item.name : undefined}
                      >
                        <div className="flex items-center justify-center min-w-[24px]">
                          <Icon
                            className={cn(
                              "h-4.5 w-4.5 flex-shrink-0",
                              isActive 
                                ? "text-green-600" 
                                : "text-slate-500 group-hover:text-slate-700"
                            )}
                          />
                        </div>
                        
                        {!isCollapsed && (
                          <span className={cn("text-sm", isActive ? "font-medium" : "font-normal")}>
                            {item.name}
                          </span>
                        )}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>
      </div>
    </>
  );
} 