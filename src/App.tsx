import React, { useState } from "react";
import Sidebar from "./components/layout/Sidebar";
import Header from "./components/layout/header";
import "./App.css";

const App: React.FC = () => {
  const [sideBarCollapsed, setSideBarCollapsed] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<string>("dashboard");

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all duration-500">
      <div className="flex h-screen overflow-hidden">
        <Sidebar
          collapsed={sideBarCollapsed}
          onToggle={() => setSideBarCollapsed(!sideBarCollapsed)}
          currentPage={currentPage}
          onPageChange={setCurrentPage}
        />
        <div className="flex-1 flex-col overflow-hidden">
          <Header />
        </div>
      </div>
    </div>
  );
};

export default App;
