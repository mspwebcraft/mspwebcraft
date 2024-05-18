import { createHtml, sendEmail } from "@/lib/sendEmail";
import { NextResponse } from "next/server";

export const POST = async (req: Request, res: Response) => {
  const contact = await req.json();
  try {
    await sendEmail({
      subject: "Contact us Request",
      html: createHtml(contact),
    });
    return NextResponse.json({ status: 200 });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "mail not sent" });
  }
};
