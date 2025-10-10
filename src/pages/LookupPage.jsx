import React, { useState } from "react";
import GitHubLogo from "../assets/images/github.png";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Download, RefreshCw, Upload } from "lucide-react";
import PRCard from "../components/PrCard";
import PRTabs from "@/components/PRTabs";

const LookupPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [repo, setRepo] = useState({ owner: "", repo: "" });
  const [prData, setPrData] = useState([]);

  const fileInputRef = React.useRef(null);

  const openPRs = prData.filter((pr) => pr.state === "open")
  const closedPRs = prData.filter((pr) => pr.state === "closed");

  // Handles Fetching PR Data from GitHub API when clicked
  const handleSubmitButton = async (e) => {
    e.preventDefault();

    if (!repo.owner || !repo.repo) {
      toast.error("Please enter both owner and repository name.");
      return;
    }

    setIsLoading(true);

    try {
      const [openPRs, closedPRs] = await Promise.all([
        fetch(
          `https://api.github.com/repos/${repo.owner}/${repo.repo}/pulls?state=open`
        ),
        fetch(
          `https://api.github.com/repos/${repo.owner}/${repo.repo}/pulls?state=closed`
        ),
      ]);

      if (!openPRs.ok || !closedPRs.ok) {
        toast.error("Failed to fetch PRs");
      }

      const openPRsData = await openPRs.json();
      const closedPRsData = await closedPRs.json();

      setPrData([...openPRsData, ...closedPRsData]);

      toast.success("PRs fetched successfully!");

    } catch (error) {
      console.error("Error fetching PRs:", error);
      toast.error("An error occurred while fetching PRs.");
    } finally {
      setIsLoading(false);
      console.log(prData);
    }
  };

  // Handles Saving PR Data to JSON File
  const saveDataToJSON = () => {
    if (prData.length === 0) {
      toast.error("No PR data to download.");
      return;
    }

    const data = {
      prs: prData,
    };

    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "prs_data.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    toast.success("PR data downloaded as JSON!");
  };

  // Handles Loading PR Data from JSON File
  const loadDataFromJSON = (e) => {
    const file = e.target.files?.[0];
    if (!file) {
      toast.error("No file selected.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const data = JSON.parse(e.target?.result);
        if (data.prs && Array.isArray(data.prs)) {
          const uploadRepoOwner = data.prs[0]?.base?.repo?.owner?.login || "";
          const uploadRepoName = data.prs[0]?.base?.repo?.name || "";
          setPrData(data.prs);
          setRepo({ owner: `${uploadRepoOwner}`, repo: `${uploadRepoName}` });
          toast.success("Data Loaded Successfully!");
        } else {
          throw new Error("Invalid JSON format");
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        toast.error("Failed to load data: Invalid JSON format.");
      }
    };
    reader.readAsText(file);

    e.target.value = "";
  };

  
  // Triggers the hidden file input click
  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="min-h-screen w-full max-w-6xl mx-auto py-8">
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
          <Button variant="outline" onClick={triggerFileInput}>
            <Upload className="h-4 w-4" />
            Load JSON
          </Button>
          <Button variant="outline" onClick={saveDataToJSON}>
            <Download className="h-4 w-4" />
            Download JSON
          </Button>
          <input
            ref={fileInputRef}
            id="json-upload"
            type="file"
            accept=".json"
            className="hidden"
            onChange={loadDataFromJSON}
          />
        </div>

          {/* PR Cards Display */}
          {prData.map((pr) => (
            <PRCard key={pr.id} pr={pr} repo={repo} />
          ))}
        </div>
        <div className="mt-6">
  <div className="mt-6">
  <h2 className="text-xl font-semibold mb-2">Pull Requests</h2>
  <PRTabs
    openPRs={[
      { id: 1, title: "Sample PR Title 1", prNum: 12, owner: "John Doe", assignees: ["Jane Smith", "Bob Johnson"], lastAction: "Approved by Jane Smith" },
      { id: 2, title: "Sample PR Title 2", prNum: 15, owner: "Alice Brown", assignees: ["Tom Lee", "Emma White"], lastAction: "Requested changes by Tom Lee" },
    ]}
    closedPRs={[
      { id: 3, title: "Sample PR Title 3", prNum: 8, owner: "Mark Green", assignees: ["Lucy Black"], lastAction: "Merged by Lucy Black" },
    ]}
  />
</div>

</div>
      </div>
  );
};
export default LookupPage;
