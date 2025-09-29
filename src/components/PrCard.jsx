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
  UserRound,
  UsersRound,
  CheckCheck,
} from "lucide-react";

const PRCard = ({ pr }) => {
  return (
    <Card className="w-full p-4 shadow-lg border border-gray-200 rounded-lg">
      <CardHeader className="flex justify-between mb-2">
        <CardTitle className="flex items-center  gap-2">
          <GitPullRequestArrow className="stroke-green-400" />
          <a href={pr.html_url} className="hover:text-[#58A6FF] transition-all duration-150">{pr.title}</a>
        </CardTitle>
        <CardDescription>#{pr.number}</CardDescription>
      </CardHeader>
      <CardContent className="pb-6">
        <CardDescription className="flex items-center gap-2 pb-3">
          <UserRound />
          Created by: {pr.user.login}
        </CardDescription>
        <CardDescription className="flex items-center gap-2 pb-3">
        </CardDescription>
        <CardDescription className="flex items-center gap-2 pb-3">
          <CheckCheck className="stroke-green-400" />
        </CardDescription>
      </CardContent>
    </Card>
  );
};

export default PRCard;
