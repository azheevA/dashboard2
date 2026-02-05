import { MoreHorizontal, TrendingDown, TrendingUp } from "lucide-react";
import { getStatusColor, headers, recentOrders, topProducts } from "../../data";

function TableSection() {
  return (
    <div className="space-y-6">
      <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Recent Orders
              </h3>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                Latest customer orders
              </p>
            </div>
            <button className="text-blue-600 hover:text-blue-700 text-sm font-medium transition-colors">
              View All
            </button>
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                {headers.map((header, i) => (
                  <th
                    key={i}
                    className="text-left p-4 text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200/50 dark:divide-slate-700/50">
              {recentOrders.map((order) => (
                <tr
                  key={order.id}
                  className="hover:bg-slate-50/50 dark:hover:bg-slate-800/50 transition-colors"
                >
                  <td className="p-4 text-sm font-bold text-blue-600 dark:text-blue-400">
                    {order.id}
                  </td>
                  <td className="p-4 text-sm font-medium text-slate-800 dark:text-slate-200">
                    {order.customer}
                  </td>
                  <td className="p-4 text-sm text-slate-600 dark:text-slate-400">
                    {order.product}
                  </td>
                  <td className="p-4 text-sm font-semibold text-slate-800 dark:text-white">
                    {order.amount}
                  </td>
                  <td className="p-4">
                    <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold capitalize ${getStatusColor(order.status)}`}
                    >
                      {order.status}
                    </span>
                  </td>
                  <td className="p-4 text-right">
                    <button className="p-1 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-md transition-colors text-slate-500 group">
                      <MoreHorizontal className="w-4 h-4 group-hover:text-slate-800 dark:group-hover:text-white" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-white/-80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-200/50 dark:border-slate-700/50 overflow-hidden">
        <div className="p-6 border-b border-slate-200/50 dark:border-slate-700/50 ">
          <div className="flex items-center justify-between">
            <div className="text-lg font-bold text-slate-800 dark:text-white">
              <h3 className="text-lg font-bold text-slate-800 dark:text-white">
                Top Products
              </h3>
            </div>
            <p className="text-sm text-slate-500 dark:text-slate-400">
              best performing products
            </p>
          </div>
          <button className="text-blue-600 hover:text-blue-700 text-sm font-medium">
            View All
          </button>
        </div>
        <div className="p-6 space-y-4">
          {topProducts.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-4  bg-slate-100 dark:bg-slate-700/50 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors"
            >
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.name}
                </h4>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {product.sales}
                </p>
              </div>
              <div className="text-right">
                <p className="text-sm font-semibold text-slate-800 dark:text-white">
                  {product.revenue}
                </p>
                <div className="flex items-center space-x-1">
                  {product.trend === "up" ? (
                    <TrendingUp className="w-3 h-3 text-emerald-500" />
                  ) : (
                    <TrendingDown className="w-3 h-3 text-red-500" />
                  )}
                  <span
                    className={`text-xs font-medium ${product.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
                  >
                    {product.change}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TableSection;
