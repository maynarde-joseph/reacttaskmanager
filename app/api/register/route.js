import User from "@/app/(models)/User";
import { connectMongoDB } from "@/lib/mongodb";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const passwordHash = await bcrypt.hash(password, 10);

    const newUser = {
      email: email,
      name: name,
      password: passwordHash,
      watched_stocks: [],
      curr_investments: [],
      prev_investments: [],
      balance: {
        currency: "AUD",
        total: 5000,
        month: 0,
      },
      settings: {
        mode: "dark",
      },
    };

    await connectMongoDB();
    await User.create(newUser);

    return NextResponse.json({ message: "User Created" }, { status: 201 });
  } catch (err) {
    console.log(err);
    return NextResponse.json({ message: "Failure", err }, { status: 500 });
  }
}
