"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { MoonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function RegisterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are necessary.");
      return;
    }

    try {
      const resUserExists = await fetch("api/userExists", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      const { user } = await resUserExists.json();

      if (user) {
        setError("User already exists.");
        return;
      }

      const res = await fetch("api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      });

      if (res.ok) {
        const form = e.target;
        form.reset();
        router.push("/");
      } else {
        console.log("User registration failed.");
      }
    } catch (error) {
      console.log("Error during registration: ", error);
    }
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="flex-grow my-20 mr-32 grid grid-cols-2">
        <div className="rounded-l-3xl rt-r-position-relative border-2">
          <div className="mt-4">
            <div className="p-7 flex items-center">
              <MoonIcon width="30" height="30" transform="scale(-1,1)" />
              <h1 className="text-7 font-bold">CRESCENTBYTE</h1>
            </div>
          </div>
          <div className="p-7 rt-r-position-absolute bottom-0">
            CrescentByte “This stock investment simulator has saved me time and
            money, helping me get a foothold into the stock game!” Bobby Lee
          </div>
        </div>
        <div className="rounded-r-3xl flex border-2 bg-zinc-900">
          <div className="justify-center m-auto">
            <div className="flex flex-col space-y-2 text-center pb-4">
              <h1 className="text-2xl font-semibold tracking-tight">
                Register
              </h1>
              <p className="text-sm">Watch, Learn, and Byte Into Stocks</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
            >
              <Input
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Full Name"
              />
              <Input
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="Email"
              />
              <Input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Password"
              />
              <Button type="submit">Register</Button>

              {error && (
                <Alert className="bg-zinc-900 border-0">
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>Email already exists</AlertDescription>
                  </Alert>
                </Alert>
              )}

              <Link className="text-sm mt-3 text-right text-white" href={"/"}>
                Already have an account?{" "}
                <span className="underline">Login</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
