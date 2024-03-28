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
      <CardHeader className=" py-0 my-0">
        <CardTitle className="text-lg">{simpleData.title}</CardTitle>
        <CardDescription className="mt-1 pt-0">
          Change: -5.60(17.2%)
        </CardDescription>
      </CardHeader>
    </Card>
  );
};
export default StatCard;
