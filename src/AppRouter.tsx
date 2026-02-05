import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageWrapper } from "./shapes/UI/motion";
import Dashboard from "./components/Dashboard/dashboard";

const AppRouter: React.FC = () => {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        <Route
          path="/dashboard"
          element={
            <PageWrapper>
              <Dashboard />
            </PageWrapper>
          }
        />

        {/* Analytics */}
        <Route
          path="/analytics/overview"
          element={
            <PageWrapper>
              <div>Analytics Overview</div>
            </PageWrapper>
          }
        />
        <Route
          path="/analytics/reports"
          element={
            <PageWrapper>
              <div>Analytics Reports</div>
            </PageWrapper>
          }
        />
        <Route
          path="/analytics/statistics"
          element={
            <PageWrapper>
              <div>Analytics Statistics</div>
            </PageWrapper>
          }
        />

        {/* Users */}
        <Route
          path="/users/all"
          element={
            <PageWrapper>
              <div>All Users</div>
            </PageWrapper>
          }
        />
        <Route
          path="/users/active"
          element={
            <PageWrapper>
              <div>Active Users</div>
            </PageWrapper>
          }
        />
        <Route
          path="/users/roles"
          element={
            <PageWrapper>
              <div>User Roles</div>
            </PageWrapper>
          }
        />

        {/* E-Commerce */}
        <Route
          path="/ecommerce/products"
          element={
            <PageWrapper>
              <div>Products</div>
            </PageWrapper>
          }
        />
        <Route
          path="/ecommerce/orders"
          element={
            <PageWrapper>
              <div>Orders</div>
            </PageWrapper>
          }
        />
        <Route
          path="/ecommerce/customers"
          element={
            <PageWrapper>
              <div>Customers</div>
            </PageWrapper>
          }
        />

        {/* Other */}
        <Route
          path="/inventory"
          element={
            <PageWrapper>
              <div>Inventory</div>
            </PageWrapper>
          }
        />
        <Route
          path="/transactions"
          element={
            <PageWrapper>
              <div>Transactions</div>
            </PageWrapper>
          }
        />
        <Route
          path="/messages"
          element={
            <PageWrapper>
              <div>Messages</div>
            </PageWrapper>
          }
        />
        <Route
          path="/calendar"
          element={
            <PageWrapper>
              <div>Calendar</div>
            </PageWrapper>
          }
        />
        <Route
          path="/reports"
          element={
            <PageWrapper>
              <div>Reports</div>
            </PageWrapper>
          }
        />
        <Route
          path="/settings"
          element={
            <PageWrapper>
              <div>Settings</div>
            </PageWrapper>
          }
        />

        <Route
          path="*"
          element={
            <PageWrapper>
              <div>404 - Not Found</div>
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
};

export default AppRouter;
