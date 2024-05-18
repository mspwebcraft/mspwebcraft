import dbConnect from "@/server/connectdb";
import User from "@/server/models/auth.model";
import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";

dbConnect();

/**
 * hashPassword function is used to convert plain password into hased password
 *
 * @param {string} plainPassword Normal password entered by user
 * @returns {Promise<string>} a hased string password which gone be store in database
 *
 */

const hashPassword = async (plainPassword: string): Promise<string> => {
  const salt = bcrypt.genSaltSync(10);
  return await bcrypt.hash(plainPassword, salt);
};

export const GET = async () => {
  try {
    const user = await User.find();
    return NextResponse.json(user, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};

export const POST = async (request: NextRequest) => {
  try {
    const body = await request.json();
    const user = await User.findOne({ email: body.email });
    if (user) {
      return NextResponse.json(
        { message: "Look's like you are already registed with us." },
        { status: 409 },
      );
    }
    const hashedPassword = await hashPassword(body.password);
    const newUser = await User.create({ ...body, password: hashedPassword });
    return NextResponse.json(
      { message: "Signup sucessfull." },
      { status: 201 },
    );
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 400 });
  }
};
