"use client";
import React, { useState } from "react";
import { useSession } from "next-auth/react";
import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { faCoins } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const NameTag = () => {
  const { data: session } = useSession();
  const [name, setName] = useState(session?.user?.name);
  const [email, setEmail] = useState(session?.user?.email);

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const handleSave = () => {
    // Handle saving name and email
    setOpen(false);
  };

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <Card className="hover:cursor-pointer">
            <CardContent className="flex items-center px-4 pt-2 pb-2">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
              <div className="ml-4">
                <CardTitle className="username">
                  {session?.user?.name}
                </CardTitle>
                <CardDescription>
                  <FontAwesomeIcon
                    icon={faCoins}
                    size="sm"
                    className="text-white pr-1"
                  />
                  {session?.user?.balance.toLocaleString("en-US", {
                    maximumFractionDigits: 2,
                  })}
                </CardDescription>
              </div>
            </CardContent>
          </Card>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Edit Profile</DialogTitle>
            <DialogDescription>
              Make changes to your profile here. Click save when youre done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="name"
                value={name}
                onChange={handleNameChange}
                className="col-span-3"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Input
                id="email"
                value={email}
                onChange={handleEmailChange}
                type="email"
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button onClick={handleSave}>Save</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default NameTag;
