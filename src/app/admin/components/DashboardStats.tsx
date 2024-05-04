import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const DashboardStats = () => (
  <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
    <Card className="sm:col-span-2">
      <CardHeader className="pb-3">
        <CardTitle>Your Orders</CardTitle>
        <CardDescription className="max-w-lg text-balance leading-relaxed">
          Introducing Our Dynamic Orders Dashboard for Seamless Management and
          Insightful Analysis.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button>Create New Order</Button>
      </CardFooter>
    </Card>
    {/* Other stat cards */}
  </div>
);

export default DashboardStats;
