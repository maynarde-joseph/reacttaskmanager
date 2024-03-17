import User from "@/app/(models)/User";
import { NextResponse } from "next/server";

export async function PUT(req, { params }) {
  try {
    const { id } = params;
    const body = await req.json();
    const ticketData = body.formData;

    const updateTicketData = await User.findByIdAndUpdate(
      id,
      { $set: ticketData },
      { new: true }
    );

    return NextResponse.json(
      { message: "Ticket updated", data: updateTicketData },
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { message: "Error", error: error.message },
      { status: 500 }
    );
  }
}

// dont think will be used commented for now
// export async function GET(params) {
//   const { id } = params;

//   const foundTicket = await Ticket.findOne({ _id: id });
//   return NextResponse.json({ foundTicket }, { status: 200 });
// }
