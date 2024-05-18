import bcrypt from "bcrypt";
import dbConnect from "@/server/connectdb";
import User from "@/server/models/auth.model";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { createJwtToken } from "@/server/utils/jwt";

dbConnect();

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();

    const user = await User.findOne({ email: body.email });
    if (!user)
      return NextResponse.json(
        { message: "Look's like you are not registed with us." },
        { status: 404 },
      );

    const isCorrectPassword = await bcrypt.compare(
      body.password,
      user.password,
    );

    if (isCorrectPassword) {
      const token = createJwtToken({ id: user._id }, "1h");
      cookies().set("token", token);
      return NextResponse.json({ message: "Login successfull." });
    }
    return NextResponse.json(
      { message: "Invalid email or password" },
      { status: 401 },
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
