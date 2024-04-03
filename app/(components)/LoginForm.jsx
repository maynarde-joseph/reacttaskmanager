"use client";

import Link from "next/link";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { MoonIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { AlertCircle } from "lucide-react";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        setError("Invalid Credentials");
        return;
      }

      router.replace("dashboard");
    } catch (error) {
      console.log(error);
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
            Disclaimer, due to limited API access(financial restraints) time
            restraints our app can only preform centain features of a real stock
            market. Our current service is only able to access lowest ask and
            highest bid which impacts namely the BUY and SELL trade
            functionality. In the future with more funding we will add level 2
            stock features to our site like live stock book. We make
            calculations off limited data to help make estimated trades. We do
            not have the Order Queuing and Partial Fills functionality. We also
            have changed settlement time to 10 min to allow for quick trading.
            But you cannot trade the same stock more than once every 30 min.
          </div>
        </div>
        <div className="rounded-r-3xl flex border-2 bg-zinc-900">
          <div className="justify-center m-auto">
            <div className="flex flex-col space-y-2 text-center pb-4">
              <h1 className="text-2xl font-semibold tracking-tight">Login</h1>
              <p className="text-sm">Watch, Learn, and Byte Into Stocks</p>
            </div>
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]"
            >
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
              <Button type="submit">Submit</Button>
              {error && (
                <Alert className="bg-zinc-900 border-0">
                  <Alert variant="destructive">
                    <AlertCircle className="h-4 w-4" />
                    <AlertTitle>Error</AlertTitle>
                    <AlertDescription>
                      Password Incorrect or Invalid Email
                    </AlertDescription>
                  </Alert>
                </Alert>
              )}

              <Link className="text-sm mt-3 text-right" href={"/register"}>
                Dont have an account?{" "}
                <span className="underline">Register</span>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
