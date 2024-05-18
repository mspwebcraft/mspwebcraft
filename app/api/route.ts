import { sendEmail } from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export const POST = (request: Request, res: Response) => {
  sendEmail({ subject: "Contact us Request", html: "message" });
  return NextResponse.json({ worki: "working api" });
};
