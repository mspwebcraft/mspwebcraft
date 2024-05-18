"use server";

import dbConnect from "@/server/connectdb";
import User from "@/server/models/auth.model";

interface LoginProps {
  email: string;
  password: string;
}

const login = async (data: LoginProps) => {
  try {
    await dbConnect();
    const user = await User.find({email:data.email});
    if(!user)return {message:"Looks like you are not registered with us."}
    // if(user.password)

  } catch (error) {}
};
