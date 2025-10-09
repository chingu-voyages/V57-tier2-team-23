import React from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

export default function PRTabs({ openPRs = [], closedPRs = [] }) {
  const [search, setSearch] = React.useState("")

  const filteredOpenPRs = openPRs.filter(pr => 
    pr.title.toLowerCase().includes(search.toLowerCase()) ||
    pr.user?.login?.toLowerCase().includes(search.toLowerCase())
  )

  const filteredClosedPRs = closedPRs.filter(pr => 
    pr.title.toLowerCase().includes(search.toLowerCase()) ||
    pr.user?.login?.toLowerCase().includes(search.toLowerCase())
  )



  return (
    <div className="w-full max-w-5xl mx-auto">
      <Tabs defaultValue="open">
        <div className="flex flex-col items-start">
          <TabsList className="bg-gray-200 space-x-2 w-full mb-6">
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

          <div className="relative w-[24rem] mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-4 w-4" />
            <Input
              placeholder="Search PRs"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <TabsContent
          value="open"
          className="flex flex-col space-y-3"
        >
          {filteredOpenPRs.length === 0 ? (
            <span className="text-gray-500">No open PRs found</span>
          ) : (
            filteredOpenPRs.map((pr) => (
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
          )}
        </TabsContent>

        <TabsContent
          value="closed"
          className="flex flex-col space-y-3"
        >
          {filteredClosedPRs.length === 0 ? (
            <span className="text-gray-500">No closed PRs found</span>
          ) : (
            filteredClosedPRs.map((pr) => (
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
          )}
        </TabsContent>
      </Tabs>
    </div>
  );
}
