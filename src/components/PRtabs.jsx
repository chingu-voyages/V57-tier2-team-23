import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function PRTabs({ openPRs = [], closedPRs = [] }) {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Tabs defaultValue="open" className="w-full">
        <div className="flex flex-col items-start">
          <div className="bg-gray-200 rounded-lg px-6 py-3 w-[30rem] mb-4">
            <TabsList className="bg-transparent space-x-6">
              <TabsTrigger
                value="open"
                className="flex items-center gap-2 px-10 py-2 rounded-md data-[state=active]:bg-white shadow-sm transition"
              >
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span>Open</span>
              </TabsTrigger>
              <TabsTrigger
                value="closed"
                className="flex items-center gap-2 px-10 py-2 rounded-md data-[state=active]:bg-white shadow-sm transition"
              >
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span>Closed</span>
              </TabsTrigger>
            </TabsList>
          </div>

          
          <div className="relative w-[24rem] mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search PR"
              className="pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        
        <TabsContent value="open" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openPRs.length > 0 ? (
            openPRs.map((pr) => (
              <Card
                key={pr.id}
                className="hover:shadow-md border border-gray-200 transition-transform transform hover:-translate-y-1 rounded-xl"
              >
                <CardHeader>
                  <CardTitle className="text-base font-semibold truncate">
                    #{pr.prNum} — {pr.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">By {pr.owner}</p>
                  <p className="text-sm text-gray-600">
                    Assignees: {pr.assignees.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{pr.lastAction}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No open PRs</p>
          )}
        </TabsContent>

        {/* Closed PRs */}
        <TabsContent value="closed" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {closedPRs.length > 0 ? (
            closedPRs.map((pr) => (
              <Card
                key={pr.id}
                className="hover:shadow-md border border-gray-200 transition-transform transform hover:-translate-y-1 rounded-xl"
              >
                <CardHeader>
                  <CardTitle className="text-base font-semibold truncate">
                    #{pr.prNum} — {pr.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">By {pr.owner}</p>
                  <p className="text-sm text-gray-600">
                    Assignees: {pr.assignees.join(", ")}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{pr.lastAction}</p>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No closed PRs</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
