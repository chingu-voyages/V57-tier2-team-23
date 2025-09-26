import React from "react";
import { 
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent
 } from '@/components/ui/card';
 import { 
    GitPullRequestArrow,
    UserRound,
    UsersRound,
    CheckCheck
 } from 'lucide-react'

const PRCard = ({ title, prNum, owner, assignees, lastAction }) => {
    return (
        <Card className="w-full p-4 shadow-md border border-gray-200 rounded-lg" >
            <CardHeader className="flex justify-between mb-2">
                <CardTitle className="flex items-center gap-2"><GitPullRequestArrow className="stroke-green-400" />{title}</CardTitle>
                <CardDescription>#{prNum}</CardDescription>
            </CardHeader>
            <CardContent className="pb-6">
                <CardDescription className="flex items-center gap-2 pb-3"><UserRound />Created by: {owner}</CardDescription>
                <CardDescription className="flex items-center gap-2 pb-3"><UsersRound />Reviewers: {assignees.join(', ')}</CardDescription>
                <CardDescription className="flex items-center gap-2 pb-3"><CheckCheck className="stroke-green-400"/>Last Action: {lastAction}</CardDescription>
            </CardContent>
        </Card>
    )
}

export default PRCard;