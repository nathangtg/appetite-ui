import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@/components/ui/breadcrumb";

const DashboardHeader = () => (
  <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-white px-5 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-7">
    {/* Hamburger menu and breadcrumb */}{" "}
    <Breadcrumb>
      <BreadcrumbItem>
        <BreadcrumbLink href="#">Restaurant</BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
    <div className="relative ml-auto flex-1 md:grow-0">
      <Input
        type="search"
        placeholder="Search..."
        className="w-full rounded-lg bg-gray-100 pl-8 md:w-[200px] lg:w-[320px]"
      />
    </div>
    {/* User dropdown */}
  </header>
);

export default DashboardHeader;
