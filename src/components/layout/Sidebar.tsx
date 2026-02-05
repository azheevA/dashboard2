import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import {
  BarChart3,
  BoxIcon,
  Calendar,
  CreditCard,
  ChevronDown,
  MessageCircle,
  Settings,
  ShoppingBag,
  FileText,
  User,
  Zap,
  LayoutDashboard,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import avatar from "../../assets/avatar1.jpg";

interface SubMenuItem {
  id: string;
  label: string;
  path: string;
}

interface MenuItem {
  id: string;
  icon: LucideIcon;
  label: string;
  path?: string;
  badge?: string;
  count?: string;
  submenu?: SubMenuItem[];
}

interface SidebarProps {
  collapsed: boolean;
  onToggle: () => void;
}

const menuItems: MenuItem[] = [
  {
    id: "dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
    path: "/dashboard",
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview", path: "/analytics/overview" },
      { id: "reports-an", label: "Reports", path: "/analytics/reports" },
      { id: "statistics", label: "Statistics", path: "/analytics/statistics" },
    ],
  },
  {
    id: "users",
    icon: User,
    label: "Users",
    count: "2.4K",
    submenu: [
      { id: "all-users", label: "All Users", path: "/users/all" },
      { id: "active-users", label: "Active Users", path: "/users/active" },
      { id: "user-roles", label: "User Roles", path: "/users/roles" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-Commerce",
    submenu: [
      { id: "products", label: "Products", path: "/ecommerce/products" },
      { id: "orders", label: "Orders", path: "/ecommerce/orders" },
      { id: "customers", label: "Customers", path: "/ecommerce/customers" },
    ],
  },
  {
    id: "inventory",
    icon: BoxIcon,
    label: "Inventory",
    path: "/inventory",
    count: "794",
  },
  {
    id: "transactions",
    icon: CreditCard,
    label: "Transactions",
    path: "/transactions",
  },
  {
    id: "messages",
    icon: MessageCircle,
    label: "Messages",
    path: "/messages",
    count: "12",
  },
  { id: "calendar", icon: Calendar, label: "Calendar", path: "/calendar" },
  { id: "reports", icon: FileText, label: "Reports", path: "/reports" },
  { id: "settings", icon: Settings, label: "Settings", path: "/settings" },
];

const Sidebar: React.FC<SidebarProps> = ({ collapsed, onToggle }) => {
  const location = useLocation();
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleSubmenu = (itemId: string) => {
    if (collapsed) {
      onToggle();
      setExpandedItem(itemId);
    } else {
      setExpandedItem(expandedItem === itemId ? null : itemId);
    }
  };

  return (
    <div
      className={`${collapsed ? "w-20" : "w-72"} transition-all duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10`}
    >
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div
          className="flex items-center space-x-3 cursor-pointer"
          onClick={onToggle}
        >
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg shrink-0">
            <Zap className="w-6 h-6 text-white" />
          </div>
          {!collapsed && (
            <div className="overflow-hidden whitespace-nowrap">
              <h1 className="text-xl font-bold text-slate-800 dark:text-white">
                Nexus
              </h1>
              <p className="text-xs text-slate-500 dark:text-slate-400">
                Admin Panel
              </p>
            </div>
          )}
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-2 overflow-y-auto custom-scrollbar">
        {menuItems.map((item) => {
          const hasSubmenu = !!item.submenu;
          const isExpanded = expandedItem === item.id && !collapsed;
          const isActive = item.path
            ? location.pathname === item.path
            : item.submenu?.some((sub) => location.pathname === sub.path);

          return (
            <div key={item.id} className="space-y-1">
              {hasSubmenu ? (
                <button
                  onClick={() => toggleSubmenu(item.id)}
                  className={`flex w-full items-center justify-between p-3 rounded-lg cursor-pointer transition-all active:scale-95 ${
                    isActive
                      ? "text-blue-600 dark:text-blue-400 bg-blue-50/50 dark:bg-blue-900/10"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 shrink-0" />
                    {!collapsed && (
                      <span className="font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </div>
                  {!collapsed && (
                    <div className="flex items-center space-x-2">
                      {item.count && (
                        <span className="text-xs px-2 py-0.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-500">
                          {item.count}
                        </span>
                      )}
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}
                      />
                    </div>
                  )}
                </button>
              ) : (
                <NavLink
                  to={item.path || "#"}
                  className={({ isActive }) =>
                    `flex items-center justify-between p-3 rounded-lg transition-all active:scale-95 ${
                      isActive
                        ? "bg-linear-to-r from-blue-500 to-purple-600 text-white shadow-lg shadow-blue-500/25"
                        : "text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`
                  }
                >
                  <div className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 shrink-0" />
                    {!collapsed && (
                      <span className="font-medium whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </div>
                  {!collapsed && (
                    <div className="flex items-center space-x-2">
                      {item.count && (
                        <span
                          className={`text-xs px-2 py-0.5 rounded-full ${location.pathname === item.path ? "bg-white/20 text-white" : "bg-slate-100 dark:bg-slate-800 text-slate-500"}`}
                        >
                          {item.count}
                        </span>
                      )}
                      {item.badge && (
                        <span className="text-xs bg-blue-500 text-white px-2 py-0.5 rounded-full">
                          {item.badge}
                        </span>
                      )}
                    </div>
                  )}
                </NavLink>
              )}

              {hasSubmenu && (
                <div
                  className={`grid transition-all duration-300 ease-in-out ${isExpanded ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0 pointer-events-none"}`}
                >
                  <div className="overflow-hidden">
                    <div className="ml-9 mt-1 space-y-1 pb-1">
                      {item.submenu?.map((sub) => (
                        <NavLink
                          key={sub.id}
                          to={sub.path}
                          className={({ isActive }) =>
                            `block p-2 rounded-md text-sm transition-colors ${
                              isActive
                                ? "text-blue-600 dark:text-blue-400 font-semibold bg-blue-50/50 dark:bg-blue-900/20"
                                : "text-slate-500 hover:text-slate-800 dark:hover:text-slate-200"
                            }`
                          }
                        >
                          {sub.label}
                        </NavLink>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </nav>

      <div
        className={`${collapsed ? "p-2" : "p-4"} border-t border-slate-200/50 dark:border-slate-700/50 transition-all duration-300`}
      >
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 overflow-hidden">
          <img
            src={avatar}
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500 object-cover shrink-0"
          />
          {!collapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-slate-800 dark:text-white truncate">
                Azheev Alexandr
              </p>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 truncate">
                Administrator
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
