import React, { useState, useEffect } from "react";
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

const PRCard = ({ pr, repo }) => {
  const token = "" // Add your GitHub token here
  const [eventData, setEventData] = useState([])

  useEffect(() => {

    if (pr.state === "open") {

      const fetchTimelineEvent = async () => {
      try {
        const response = await fetch(`https://api.github.com/repos/${repo.owner}/${repo.repo}/issues/${pr.number}/timeline`, {
            headers: {
              Authorization: `Bearer ${token}`,
              Accept: "application/vnd.github.v3+json"
          }
        }
        )

        if (!response.ok) {
           throw new Error(`Failed to fetch timeline events: ${response.status}`)
        }

        const data = await response.json()

        setEventData((prev) => [...prev, {pr: pr.number, data: data}])

      } catch (error) {
        console.log(error)
      }
    }
    fetchTimelineEvent();

    }

  }, [pr, pr.number]);

  // Function to get the last person to act on the PR
  const getLastPersonToAct = (eventsData) => {
    if (!eventsData || eventsData.length === 0) return `someone`;

    const lastEvent = eventData[0]?.data?.at(-1)
    if (!lastEvent) return;

    const person = lastEvent.actor || lastEvent.user || lastEvent.author
    return person?.login || person?.name;
  }
  
  // Get last event in timeline and its date
  const getLastEvent = (eventsData) => {
    if (!eventsData || eventsData.length === 0) return `Something happened`;
    if (eventsData.at(0).data.at(-1).event === "head_ref_deleted") return `Branch deleted`;
    return eventsData[0]?.data?.at(-1)?.event;
  }

  const getLastEventDate = (eventsData) => {
    if (!eventsData || eventsData.length === 0) return;
    if (!eventsData.at(0).data.at(-1).created_at) {
      return eventsData[0]?.data?.at(-1)?.author.date
    }
    return eventsData[0]?.data?.at(-1)?.created_at;
  }


  const lastPersonToAct = getLastPersonToAct(eventData);
  const lastEvent = getLastEvent(eventData)
  const lastEventDate = getLastEventDate(eventData)

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
            pr.state === 'open'
            ? `${lastEvent ? `
              ${lastEvent.charAt(0).toUpperCase() + lastEvent.slice(1).replace('_', ' ')} by ${lastPersonToAct} on ${new Date(lastEventDate).toLocaleDateString()}` 
              : ' No actions recorded'}`
            : pr.state === 'closed' && pr.merged_at
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
