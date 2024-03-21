import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const StatCard = ({ userData }) => {
  // const simpleData = userData;
  const simpleData = { title: "Balance", amount: "173.2" };
  return (
    <Card className="flex flex-col rounded-md">
      <CardHeader>
        <CardTitle>{simpleData.title}</CardTitle>
        <CardDescription>Change: -5.60(17.2%)</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Value: {amount.current_price}</p>
      </CardContent>
    </Card>
  );
};
export default StatCard;
