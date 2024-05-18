import { NextResponse } from "next/server";
const handleMongooseError = (err: any) => {
  let error;
  if (err.name == "ValidationError") {
    let errors = Object.values(err.errors).map((el: any) => el.message);
    let fields = Object.values(err.errors).map((el: any) => el.path);
    if (errors.length > 1) {
      const formattedErrors = errors.join("<br/>");
      return NextResponse.json(
        {
          message: formattedErrors,
          stack: fields,
        },
        { status: 400 },
      );
    } else {
      return NextResponse.json(
        { message: errors, stack: fields },
        { status: 400 },
      );
    }
  } else if (err.code == 11000) {
    const field = Object.keys(err.keyValue);
    const errorm = `The given ${field} already in used.`;
    return NextResponse.json({ message: errorm, stack: err }, { status: 409 });
  } else if (err.name == "CastError") {
    error = "The requested document is not Found!";
    return NextResponse.json({ message: error, stack: err }, { status: 404 });
  } else {
    return NextResponse.json({ message: error, stack: err }, { status: 400 });
  }
};
export default handleMongooseError;
