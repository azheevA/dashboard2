import { ArrowDownRight, ArrowUpRight } from "lucide-react";
import { stats } from "../../data";

export default function StatsGrid() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-2xl p-6 border border-slate-200/50 dark:border-slate-700/50 hover:shadow-xl hover:shadow-slate-200/20 dark:hover:shadow-slate-900/20 transition-all duration-300 group"
        >
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <p className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-1">
                {stat.title}
              </p>
              <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                {stat.value}
              </h3>
            </div>
            <div
              className={`p-3 rounded-xl bg-linear-to-br ${stat.color} shadow-lg shadow-blue-500/10 group-hover:scale-110 transition-transform duration-300`}
            >
              <stat.icon className="w-5 h-5 text-white" />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-1.5">
              <div
                className={`flex items-center ${stat.trend === "up" ? "text-emerald-500" : "text-red-500"}`}
              >
                {stat.trend === "up" ? (
                  <ArrowUpRight className="w-4 h-4" />
                ) : (
                  <ArrowDownRight className="w-4 h-4" />
                )}
                <span className="text-sm font-bold">{stat.change}</span>
              </div>
              <span className="text-xs text-slate-400 dark:text-slate-500">
                vs last month
              </span>
            </div>
          </div>

          <div className="mt-4 h-1.5 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full bg-linear-to-r ${stat.color} rounded-full transition-all duration-500`}
              style={{ width: stat.trend === "up" ? "70%" : "35%" }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
