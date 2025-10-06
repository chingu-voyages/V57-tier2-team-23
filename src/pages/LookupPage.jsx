import React, { useState } from "react";
import GitHubLogo from "../assets/images/github.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Download, RefreshCw, Upload } from "lucide-react";
import  PRCard  from "../components/PRCard";
const LookupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repo, setRepo] = useState({ owner: "", repo: "" });

  const handleSubmitButton = (e) => {
    e.preventDefault();
    toast.success(`Owner: ${repo.owner}, Repo: ${repo.repo}`);
  };

  return (
    <div className="min-h-screen w-full flex max-w-6xl mx-auto py-8">
      <div className="space-y-4 w-full">
        {/* Form for Repo Owner and Name Input */}
        <form
          onSubmit={handleSubmitButton}
          className="flex flex-col gap-4 w-full"
        >
          <div className="flex-1 flex gap-2 items-center border p-4 rounded-lg shadow-lg">
            <Input
              placeholder="Owner (username, org.)"
              value={repo.owner}
              onChange={(e) => setRepo({ ...repo, owner: e.target.value })}
              disabled={isLoading}
            />
            <span className="text-muted-foreground self-center">/</span>
            <Input
              placeholder="Repository (name)"
              value={repo.repo}
              onChange={(e) => setRepo({ ...repo, repo: e.target.value })}
              disabled={isLoading}
            />
            <Button
              type="submit"
              disabled={isLoading}
              className="bg-[#58A6FF] hover:bg-[#6fb2ff] text-black"
            >
              {isLoading ? (
                <RefreshCw className="animate-spin h-4 w-4" />
              ) : (
                <>
                  <img src={GitHubLogo} alt="GitHub Logo" className="h-4" />
                  Pull PRs
                </>
              )}
            </Button>
          </div>
        </form>
        {/* JSON Data Import/Export Buttons */}
        <div className="flex gap-2">
          <Button variant="outline">
            <Upload className="h-4 w-4" />
            Load JSON
          </Button>
          <Button variant="outline">
            <Download className="h-4 w-4" />
            Download JSON
          </Button>
          </div>
        <div>
          <PRCard
            title="Sample PR Title"
            prNum={12}
            owner="John Doe"
            assignees={["Jane Smith", "Bob Johnson"]}
            lastAction="Approved by Jane Smith"
          />
        </div>
      </div>
    </div>
  );
};
export default LookupPage;
