import ActivityFeed from "./ActivityFeed";
import ChartSection from "./ChartSection";
import StatsGrid from "./StatGrid";
import TableSection from "./TableSection";

export function Dashboard() {
  return (
    <div className="space-y-6">
      <StatsGrid />
      <ChartSection />
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        <div className="xl:col-span-2">
          <TableSection />
        </div>
        <div>
          <ActivityFeed />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
