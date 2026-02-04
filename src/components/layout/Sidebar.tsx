import {
  BarChart3,
  BoxIcon,
  Calendar,
  CardSim,
  ChevronDown,
  MessageCircle,
  Settings,
  ShoppingBag,
  Text,
  User,
  Zap,
} from "lucide-react";
import avatar from "../../assets/avatar1.jpg";

const menuItems = [
  {
    name: "Dashboard",
    icon: "LayoutDashboard",
    label: "Dashboard",
    active: true,
    badge: "New",
  },
  {
    id: "analytics",
    icon: BarChart3,
    label: "Analytics",
    submenu: [
      { id: "overview", label: "Overview" },
      { id: "reports", label: "Reports" },
      { id: "statistics", label: "Statistics" },
    ],
  },
  {
    id: "users",
    icon: User,
    label: "Users",
    count: "2.4K",
    submenu: [
      { id: "all-users", label: "All Users" },
      { id: "active-users", label: "Active Users" },
      { id: "user-roles", label: "User Roles" },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingBag,
    label: "E-Commerce",
    submenu: [
      { id: "products", label: "Products" },
      { id: "orders", label: "Orders" },
      { id: "customers", label: "Customers" },
    ],
  },
  {
    id: "Inventory",
    icon: BoxIcon,
    label: "Inventory",
    count: "794",
  },
  {
    id: "Transactions",
    icon: CardSim,
    label: "Transactions",
  },
  {
    id: "Message",
    icon: MessageCircle,
    label: "Messages",
    count: "12",
  },
  {
    id: "Calendar",
    icon: Calendar,
    label: "Calendar",
  },
  {
    id: "Reports",
    icon: Text,
    label: "Reports",
  },
  {
    id: "settings",
    icon: Settings,
    label: "Settings",
  },
];

function Sidebar() {
  return (
    <div className="w-72 transition duration-300 ease-in-out bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl border-r border-slate-200/50 dark:border-slate-700/50 flex flex-col relative z-10">
      <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-linear-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
            <Zap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h1 className="text-xl font-bold text-slate-800 dark:text-white">
              Nexus
            </h1>
            <p className="text-xs text-slate-500 dark:text-slate-400">
              Admin Panel
            </p>
          </div>
        </div>
      </div>
      <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
        {menuItems.map((item) => (
          <div key={item.id}>
            <button
              className={`flex w-full items-center justify-between p-3 rounded-lg cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors active:scale-95 ${
                item.active
                  ? "bg-linear-to-r from-blue-500 to-purple-600 text-white"
                  : "text-slate-700 dark:text-slate-300"
              }`}
            >
              <div className="flex items-center space-x-3">
                {item.icon && <item.icon className="w-5 h-5" />}
                <span className="font-medium">{item.label}</span>
                {item.count && (
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                    {item.count}
                  </span>
                )}
              </div>
              {item.badge && (
                <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">
                  {item.badge}
                </span>
              )}

              {item.submenu && (
                <ChevronDown className="w-4 h-4 text-slate-400 transition-transform duration-200 transform rotate-0" />
              )}
            </button>
          </div>
        ))}
      </nav>
      <div className="p-4 border-t border-slate-200/50 dark:border-slate-700/50">
        <div className="flex items-center space-x-3 p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50">
          <img
            src={avatar}
            alt="user"
            className="w-10 h-10 rounded-full ring-2 ring-blue-500 object-cover"
          />
          <div className="flex-1 min-w-0">
            <div className="flex-1 min-w-0">
              <p className="test-sm font-medium text-slate-800 dark:text-white truncate">
                Azheev Alexandr
              </p>
              <p className="text-2xs text-slate-500 dark:text-slate-400 truncate">
                Administrator
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
