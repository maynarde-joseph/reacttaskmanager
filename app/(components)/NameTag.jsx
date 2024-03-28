"use client";
import React from "react";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const NameTag = () => {
  const { data: session } = useSession();
  return (
    <div className="rounded-md">
      <Link href="/dashboard" className="">
        <Card>
          <CardContent className="flex items-center px-4 pt-2 pb-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="ml-4">
              <CardTitle className="username">{session?.user?.name}</CardTitle>
              <CardDescription>
                <FontAwesomeIcon
                  icon={faCoins}
                  size="sm"
                  className="text-white hover:cursor-pointer hover:text-red-200"
                />
                {" 234,231,239"}
              </CardDescription>
            </div>
          </CardContent>
        </Card>
      </Link>
    </div>
  );
};

export default NameTag;
