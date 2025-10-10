import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import PRCard from "./PrCard";

export default function PRTabs({ openPRs, closedPRs }) {
  return (
      <Tabs defaultValue="open" className="w-full">
        <div className="flex flex-col items-start">
          <div className="flex space-between bg-gray-200 rounded-lg px-6 py-3 w-[90%] mx-auto mb-4">
            <TabsList className="flex mx-auto bg-transparent space-x-8">
              <TabsTrigger
                value="open"
                className="items-center gap-2 px-10 py-2 rounded-md data-[state=active]:bg-white shadow-sm transition"
              >
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
                <span>Open ({openPRs.length})</span>
              </TabsTrigger>
              <TabsTrigger
                value="closed"
                className="w-64 items-center gap-2 px-10 py-2 rounded-md data-[state=active]:bg-white shadow-sm transition"
              >
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span>Closed ({closedPRs.length})</span>
              </TabsTrigger>
            </TabsList>
          </div>

        {/* Seach functionality input */}
          <div className="relative w-[50%] mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search PR"
              className="pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Open PRs */}
        <TabsContent value="open" className="grid gap-4 lg:grid-cols-2">

          { openPRs.length > 0 ? (
            openPRs.map((pr) => {
              return <PRCard
                key={pr.id}
                pr={pr}
                // repo={repo}
              />
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full">No open PRs</p>
          )
          }
        </TabsContent>

        {/* Closed PRs */}
        <TabsContent value="closed" className="grid gap-4 lg:grid-cols-2">

          { closedPRs.length > 0 ? (
            closedPRs.map((pr) => {
              return <PRCard
                key={pr.id}
                pr={pr}
                // repo={repo}
              />
            })
          ) : (
            <p className="text-center text-gray-500 col-span-full">No closed PRs</p>
          )
          }
        </TabsContent>
      </Tabs>
  );
}
