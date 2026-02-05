import {
  AlertCircle,
  BarChart3,
  BoxIcon,
  Calendar,
  CreditCard,
  DollarSign,
  FileText,
  LayoutDashboard,
  MessageCircle,
  Settings,
  ShoppingBag,
  User,
  Users,
  Zap,
  type LucideIcon,
} from "lucide-react";
interface Order {
  id: string;
  customer: string;
  product: string;
  amount: string;
  status: "completed" | "processing" | "shipped" | "pending" | "cancelled";
  date: string;
}

interface Activity {
  id: number;
  icon: LucideIcon;
  title: string;
  description: string;
  time: string;
  color: string;
  bgColor: string;
}

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
export const menuItems: MenuItem[] = [
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

export const data = [
  { month: "Jan", revenue: 45000, expenses: 32000 },
  { month: "Feb", revenue: 52000, expenses: 34000 },
  { month: "Mar", revenue: 48000, expenses: 35000 },
  { month: "Apr", revenue: 61000, expenses: 42000 },
  { month: "May", revenue: 55000, expenses: 39000 },
  { month: "Jun", revenue: 67000, expenses: 44000 },
  { month: "Jul", revenue: 72000, expenses: 48000 },
  { month: "Aug", revenue: 69000, expenses: 46000 },
  { month: "Sep", revenue: 84000, expenses: 52000 },
  { month: "Oct", revenue: 91000, expenses: 58000 },
  { month: "Nov", revenue: 95000, expenses: 61000 },
  { month: "Dec", revenue: 110000, expenses: 75000 },
];
export const dataPie = [
  { name: "Electronics", value: 45, color: "#3b82f6" },
  { name: "Clothing", value: 30, color: "#8b5cf6" },
  { name: "Books", value: 15, color: "#10b981" },
  { name: "Other", value: 10, color: "#f59e0b" },
];
export const stats = [
  {
    title: "Total Revenue",
    value: "$124,563",
    change: "+12.5%",
    trend: "up",
    icon: DollarSign,
    color: "from-emerald-500 to-teal-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-900/20",
    textColor: "text-emerald-600 dark:text-emerald-400",
  },
  {
    title: "Active Users",
    value: "2,420",
    change: "+18.2%",
    trend: "up",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
    bgColor: "bg-blue-50 dark:bg-blue-900/20",
    textColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "New Orders",
    value: "1,210",
    change: "-3.1%",
    trend: "down",
    icon: ShoppingBag,
    color: "from-orange-500 to-red-600",
    bgColor: "bg-orange-50 dark:bg-orange-900/20",
    textColor: "text-orange-600 dark:text-orange-400",
  },
  {
    title: "Conversion Rate",
    value: "4.83%",
    change: "+0.6%",
    trend: "up",
    icon: Zap,
    color: "from-purple-500 to-pink-600",
    bgColor: "bg-purple-50 dark:bg-purple-900/20",
    textColor: "text-purple-600 dark:text-purple-400",
  },
];
export const activities: Activity[] = [
  {
    id: 1,
    icon: User,
    title: "New user registered",
    description: "John Smith created an account",
    time: "2 minutes ago",
    color: "text-blue-500",
    bgColor: "bg-blue-100 dark:bg-blue-900/30",
  },
  {
    id: 2,
    icon: ShoppingBag,
    title: "New order received",
    description: "Order #3854 placed for $599.00",
    time: "15 minutes ago",
    color: "text-emerald-500",
    bgColor: "bg-emerald-100 dark:bg-emerald-900/30",
  },
  {
    id: 3,
    icon: CreditCard,
    title: "Payment successful",
    description: "Transaction for #3842 confirmed",
    time: "1 hour ago",
    color: "text-purple-500",
    bgColor: "bg-purple-100 dark:bg-purple-900/30",
  },
  {
    id: 4,
    icon: AlertCircle,
    title: "Server warning",
    description: "High CPU usage detected on Node 2",
    time: "2 hours ago",
    color: "text-amber-500",
    bgColor: "bg-amber-100 dark:bg-amber-900/30",
  },
];

export const recentOrders: Order[] = [
  {
    id: "#3847",
    customer: "John Smith",
    product: "MacBook Pro 16",
    amount: "$2,399",
    status: "completed",
    date: "2024-01-15",
  },
  {
    id: "#3848",
    customer: "Sarah Jenkins",
    product: "iPhone 15 Pro",
    amount: "$999",
    status: "processing",
    date: "2024-01-16",
  },
  {
    id: "#3849",
    customer: "Michael Chen",
    product: "Sony WH-1000XM5",
    amount: "$348",
    status: "shipped",
    date: "2024-01-16",
  },
  {
    id: "#3850",
    customer: "Emma Wilson",
    product: "iPad Air 10.9",
    amount: "$599",
    status: "completed",
    date: "2024-01-17",
  },
  {
    id: "#3851",
    customer: "Robert Davis",
    product: "Apple Watch Series 9",
    amount: "$399",
    status: "cancelled",
    date: "2024-01-17",
  },
  {
    id: "#3852",
    customer: "Anna Muller",
    product: "Dell XPS 15",
    amount: "$1,899",
    status: "pending",
    date: "2024-01-18",
  },
  {
    id: "#3853",
    customer: "Liam O'Connor",
    product: "Nintendo Switch OLED",
    amount: "$349",
    status: "completed",
    date: "2024-01-18",
  },
];
export const topProducts = [
  {
    name: "iPad Air",
    sales: 987,
    revenue: "$591,213",
    trend: "up",
    change: "+15%",
  },
  {
    name: "iPhone 15 Pro",
    sales: 1254,
    revenue: "$1,252,746",
    trend: "up",
    change: "+22%",
  },
  {
    name: "MacBook Air M2",
    sales: 642,
    revenue: "$705,558",
    trend: "down",
    change: "-5%",
  },
  {
    name: "Apple Watch S9",
    sales: 831,
    revenue: "$331,569",
    trend: "up",
    change: "+8%",
  },
  {
    name: "AirPods Pro 2",
    sales: 2105,
    revenue: "$524,145",
    trend: "stable",
    change: "0%",
  },
  {
    name: "Samsung S24 Ultra",
    sales: 756,
    revenue: "$982,044",
    trend: "up",
    change: "+12%",
  },
  {
    name: "Google Pixel 8",
    sales: 412,
    revenue: "$287,988",
    trend: "down",
    change: "-11%",
  },
];

export const headers = [
  "Order ID",
  "Customer",
  "Product",
  "Amount",
  "Status",
  "",
];

export const getStatusColor = (status: Order["status"]): string => {
  switch (status) {
    case "completed":
      return "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400";
    case "pending":
      return "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400";
    case "cancelled":
      return "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400";
    case "processing":
      return "bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400";
    case "shipped":
      return "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400";
    default:
      return "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";
  }
};
