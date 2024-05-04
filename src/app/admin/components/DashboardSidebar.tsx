import React, { useState } from "react";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  LineChart,
  Package,
  Package2,
  Settings,
  ShoppingCart,
  Users,
  Home,
} from "lucide-react";

type LinkType =
  | "dashboard"
  | "orders"
  | "products"
  | "customers"
  | "analytics"
  | "settings";

const DashboardSidebar = () => {
  const [activeLink, setActiveLink] = useState("");

  const handleLinkClick = (link: LinkType) => {
    setActiveLink(link);
  };

  const getLinkClassName = (link: LinkType) => {
    const baseClassName =
      "flex h-9 w-9 items-center justify-center rounded-lg transition-colors md:h-8 md:w-8";
    return activeLink === link
      ? `${baseClassName} bg-gray-400 text-white`
      : `${baseClassName} text-muted-foreground hover:text-foreground`;
  };

  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-4">
        <Link
          href="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={getLinkClassName("dashboard")}
                onClick={() => handleLinkClick("dashboard")}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={getLinkClassName("orders")}
                onClick={() => handleLinkClick("orders")}
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Orders</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={getLinkClassName("products")}
                onClick={() => handleLinkClick("products")}
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={getLinkClassName("customers")}
                onClick={() => handleLinkClick("customers")}
              >
                <Users className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
        </TooltipProvider>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={getLinkClassName("analytics")}
                onClick={() => handleLinkClick("analytics")}
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-4">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className={getLinkClassName("settings")}
                onClick={() => handleLinkClick("settings")}
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
};

export default DashboardSidebar;
