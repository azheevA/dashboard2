import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { dataPie } from "../../data";

export default function SalesChart() {
  return (
    <div className="bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl rounded-b-2xl p-6 border border-slate-200/50 dark:border-slate-700/50">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-slate-800 dark:text-white">
          Sales by Category
        </h3>
        <p className="text-sm text-slate-500 dark:text-slate-400">
          Product Distribution
        </p>
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Tooltip
              contentStyle={{
                borderRadius: "12px",
                border: "none",
                boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
                backgroundColor: "rgba(255, 255, 255, 0.9)",
              }}
            />
            <Pie
              data={dataPie}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {dataPie.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="grid grid-cols-2 gap-4 mt-4">
        {dataPie.map((item) => (
          <div key={item.name} className="flex items-center space-x-2">
            <div
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: item.color }}
            />
            <div className="flex flex-col">
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {item.name}
              </span>
              <span className="text-sm font-bold text-slate-800 dark:text-white">
                {item.value}%
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
