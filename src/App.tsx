import React, { useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/Header";
import AppRouter from "./AppRouter";

const App: React.FC = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState<boolean>(false);

  return (
    <Router>
      <div className="h-screen w-full bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 overflow-hidden flex transition-all duration-500">
        <Sidebar
          collapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
        />

        <div className="flex-1 flex flex-col h-full overflow-hidden">
          <Header />

          <main className="flex-1 overflow-y-auto custom-scrollbar bg-transparent p-6">
            <div className=" mx-auto">
              <AppRouter />
            </div>
          </main>
        </div>
      </div>
    </Router>
  );
};

export default App;
