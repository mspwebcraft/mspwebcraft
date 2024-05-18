import mongoose, { MongooseError } from "mongoose";

const dbConnect = async () => {
  if (mongoose.connection.readyState === 1) {
    console.log("Database connection is already established.");
    return;
  }
  try {
    await mongoose.connect(process.env.DATABASE_URI!);
    console.log("Database Connected Successfully");
  } catch (error) {
    console.log({
      message: "Error in connecting Database",
      error: (error as MongooseError)?.message,
    });
    throw new Error((error as MongooseError).message);
  }
};

export default dbConnect;
