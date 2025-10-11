import React, { useState, useEffect } from "react";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import PRCard from "./PrCard";

export default function PRTabs({ openPRs, closedPRs }) {
  const [openPage, setOpenPage] = useState(1);
  const [closedPage, setClosedPage] = useState(1);
  const [search, setSearch] = React.useState("");
  const itemsPerPage = 6;

  const filteredOpenPRs = openPRs.filter(
    (pr) =>
      pr.title.toLowerCase().includes(search.toLowerCase()) ||
      pr.user?.login?.toLowerCase().includes(search.toLowerCase()) ||
      pr.number?.toString().includes(search.toLowerCase())
  );

  const filteredClosedPRs = closedPRs.filter(
    (pr) =>
      pr.title.toLowerCase().includes(search.toLowerCase()) ||
      pr.user?.login?.toLowerCase().includes(search.toLowerCase()) ||
      pr.number?.toString().includes(search.toLowerCase())
  );

  const totalPagesOpen = Math.ceil(filteredOpenPRs.length / itemsPerPage);
  const displayedOpenPRs = filteredOpenPRs.slice(
    (openPage - 1) * itemsPerPage,
    openPage * itemsPerPage
  );
  const totalPagesClosed = Math.ceil(filteredClosedPRs.length / itemsPerPage);
  const displayedClosedPRs = filteredClosedPRs.slice(
    (closedPage - 1) * itemsPerPage,
    closedPage * itemsPerPage
  );

  useEffect(() => {
    setOpenPage(1);
    setClosedPage(1);
  }, [search]);

  return (
    <Tabs defaultValue="open" className="w-full pt-10">
      <div className="flex flex-col items-start">
        <div className="flex space-between bg-gray-200 rounded-lg p-1 w-[90%] mx-auto mb-4">
          <TabsList className="flex mx-auto bg-transparent space-x-2 w-full">
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
            placeholder="Search PRs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-9 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Open PRs */}
      <TabsContent value="open" className="grid gap-4 lg:grid-cols-2">
        {displayedOpenPRs.length === 0 && search.trim() !== "" ? (
          <span className="text-gray-500 col-span-full">
            No PRs found matching search query...
          </span>
        ) : (
          displayedOpenPRs.map((pr) => <PRCard key={pr.id} pr={pr} />)
        )}

        {totalPagesOpen > 1 && (
          <div className="flex justify-center mt-4 col-span-full">
            <Button
              onClick={() => setOpenPage(Math.max(1, openPage - 1))}
              disabled={openPage === 1}
            >
              Prev
            </Button>
            <span className="mx-4">
              {openPage} / {totalPagesOpen}
            </span>
            <Button
              onClick={() =>
                setOpenPage(Math.min(totalPagesOpen, openPage + 1))
              }
              disabled={openPage === totalPagesOpen}
            >
              Next
            </Button>
          </div>
        )}
      </TabsContent>

      {/* Closed PRs */}
      <TabsContent value="closed" className="grid gap-4 lg:grid-cols-2">
        {displayedClosedPRs.length === 0 && search.trim() !== "" ? (
          <span className="text-gray-500 col-span-full">
            No PRs found matching search query...
          </span>
        ) : (
          displayedClosedPRs.map((pr) => <PRCard key={pr.id} pr={pr} />)
        )}

        {totalPagesClosed > 1 && (
          <div className="flex justify-center mt-4 col-span-full">
            <Button
              onClick={() => setClosedPage(Math.max(1, closedPage - 1))}
              disabled={closedPage === 1}
            >
              Prev
            </Button>
            <span className="mx-4">
              {closedPage} / {totalPagesClosed}
            </span>
            <Button
              onClick={() =>
                setClosedPage(Math.min(totalPagesClosed, closedPage + 1))
              }
              disabled={closedPage === totalPagesClosed}
            >
              Next
            </Button>
          </div>
        )}
      </TabsContent>
    </Tabs>
  );
}
