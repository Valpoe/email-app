import { NextResponse } from "next/server";

import Template from "../../../lib/mongo/models/Template.js";
import { connectMongoDB } from "../../../lib/mongo/index.js";

//GET
export const GET = async (request) => {
  try {
    await connectMongoDB();
    const templates = await Template.find();
    return new NextResponse(JSON.stringify(templates), {
      status: 200,
    });
  } catch (err) {
    return new NextResponse(err, { status: 500 });
  }
};

//POST
export async function POST(request) {
  const { title, action } = await request.json(); // Include 'action' in the request payload

  try {
    await connectMongoDB();

    // Specify the update based on the 'action' parameter
    let update;
    if (action === "download") {
      update = { $inc: { downloadCount: 1 } };
    } else if (action === "print") {
      update = { $inc: { printCount: 1 } };
    } else if (action === "sent") {
      update = { $inc: { sentCount: 1 } };
    } else {
      console.error("Invalid action:", action);
      return new NextResponse("Invalid action", { status: 400 });
    }

    // Find the template by title and update based on the 'action'
    const updatedTemplate = await Template.findOneAndUpdate(
      { title: title },
      update,
      { new: true } // Return the updated document
    );

    if (updatedTemplate) {
      console.log(`${action} count for "${title}" incremented.`);
      console.log("Updated Template:", updatedTemplate);
      return new NextResponse(`${action} count incremented for "${title}"`, {
        status: 200,
      });
    } else {
      console.log(`Template "${title}" not found.`);
      return new NextResponse(`Not found: ${title}`, { status: 404 });
    }
  } catch (error) {
    console.error(`Error incrementing ${action} count:`, error);
    return new NextResponse(`Error: ${title}`, { status: 500 });
  }
}

