import { NextResponse } from "next/server";

import Template from "../../../../lib/mongo/models/Template.js";
import { connectMongoDB } from "../../../../lib/mongo/index.js";

//GET
export const GET = async (req, res) => {
  // Connect to MongoDB

  await connectMongoDB();
  const { searchParams } = new URL(req.url);
  const paramTitle = searchParams.get("title");
  console.log("getting count " + paramTitle);

  try {
    const foundObject = await Template.findOne({ title: paramTitle });
    console.log(JSON.stringify(foundObject));
    return new NextResponse(JSON.stringify(foundObject), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(paramTitle, {
      status: 404,
    });
  }
};
