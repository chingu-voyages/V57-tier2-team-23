import React from "react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function PRTabs({ openPRs = [], closedPRs = [] }) {
  return (
    <div className="w-full max-w-5xl mx-auto p-4">
      <Tabs defaultValue="open" className="w-full">
        <TabsList className="flex justify-center mb-4">
          <TabsTrigger value="open">Open PRs</TabsTrigger>
          <TabsTrigger value="closed">Closed PRs</TabsTrigger>
        </TabsList>

        <TabsContent value="open" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {openPRs.length > 0 ? (
            openPRs.map((pr) => (
              <Card key={pr.id} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-base font-semibold truncate">
                    #{pr.number} — {pr.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">By {pr.user}</p>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View on GitHub
                  </a>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No open PRs</p>
          )}
        </TabsContent>

        <TabsContent value="closed" className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {closedPRs.length > 0 ? (
            closedPRs.map((pr) => (
              <Card key={pr.id} className="hover:shadow-lg transition">
                <CardHeader>
                  <CardTitle className="text-base font-semibold truncate">
                    #{pr.number} — {pr.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">Merged by {pr.user}</p>
                  <a
                    href={pr.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline text-sm"
                  >
                    View on GitHub
                  </a>
                </CardContent>
              </Card>
            ))
          ) : (
            <p className="text-center text-gray-500 col-span-full">No closed PRs</p>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
