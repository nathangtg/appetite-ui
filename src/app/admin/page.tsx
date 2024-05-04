"use client";

import React from "react";
import DashboardHeader from "./components/DashboardHeader";
import DashboardSidebar from "./components/DashboardSidebar";
import DashboardStats from "./components/DashboardStats";
import DashboardOrders from "./components/DashboardOrders";
import DashboardOrderDetails from "./components/DashboardOrderDetails";

const Dashboard = () => (
  <div className="flex min-h-screen w-full flex-col bg-gray-100">
    <DashboardSidebar />
    <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
      <DashboardHeader />
      <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8 lg:grid-cols-3 xl:grid-cols-3">
        <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2">
          <DashboardStats />
          <DashboardOrders />
        </div>
        <DashboardOrderDetails />
      </main>
    </div>
  </div>
);

export default Dashboard;
