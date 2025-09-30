import React from "react";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import {
  GitPullRequestArrow,
  GitPullRequestClosed,
  GitMerge,
  UserRound,
  UsersRound,
  CheckCheck,
} from "lucide-react";

const PRCard = ({ pr }) => {
  return (
    <Card className="w-full p-4 mb-4 shadow-lg border border-gray-200 rounded-lg">
      <CardHeader className="flex justify-between">
        <CardTitle className="flex items-center  gap-2">
          {/* Conditionally render icon based on PR state */}
          {
            pr.state === 'closed' && pr.merged_at ? (
              <GitMerge className="stroke-purple-400" />
            ) : pr.state === 'closed' ? (
              <GitPullRequestClosed className="stroke-red-400" />
            ) : (
              <GitPullRequestArrow className="stroke-green-400" />
            )
          }
          {/* PR Title that opens on new tab */}
          <a
            href={pr.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#58A6FF] transition-all duration-150">
              {pr.title}
          </a>
        </CardTitle>
        <CardDescription>#{pr.number}</CardDescription>
      </CardHeader>
      <CardContent>
        <CardDescription className="flex items-center gap-2 pb-3">
          {/* Conditionally render GitHub user avatar or placeholder icon */}
          {
            !pr.user.avatar_url
            ? <UserRound />
            : <img src={pr.user.avatar_url} alt={pr.user.login} className="w-8 h-8 rounded-full" />
          }
          Created by: {pr.user.login} on {new Date(pr.created_at).toLocaleDateString()}
        </CardDescription>
        <CardDescription className="flex items-center gap-2 pb-3">
          {/* Conditionally render reviewer icon or placeholder icon & text */}
            {
              pr.requested_reviewers.length > 0
              ? pr.requested_reviewers.map(reviewer => {
                  return <img key={reviewer.id} src={reviewer.avatar_url} alt={reviewer.login} className="w-6 h-6 rounded-full" />
              })
              : <UsersRound />
            }
            {
              pr.requested_reviewers.length > 0
              ? `Reviewers: ${pr.requested_reviewers.map(reviewer => reviewer.login).join(', ')}`
              : 'No reviewers requested'
            }
        </CardDescription>
        <CardDescription className="flex items-center gap-2 pb-3">
          <CheckCheck className="stroke-green-400" />
          {/* Display last action */}
          Last Action:
          {
            pr.state === 'closed' && pr.merged_at
            ? ` Merged on ${new Date(pr.merged_at).toLocaleDateString()}`
            : pr.state === 'closed'
            ? ` Closed on ${new Date(pr.closed_at).toLocaleDateString()}`
            : ` Last updated on ${new Date(pr.updated_at).toLocaleDateString()}`  
          }
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PRCard;
