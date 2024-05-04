import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const DashboardOrders = () => (
  <Tabs defaultValue="week">
    {/* Tabs header */}
    <TabsContent value="week">
      <Card>
        <CardHeader className="px-7">
          <CardTitle>Orders</CardTitle>
          <CardDescription>Recent orders from your store.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            {/* Table headers */}
            <TableBody>{/* Table rows */}</TableBody>
          </Table>
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
);

export default DashboardOrders;
