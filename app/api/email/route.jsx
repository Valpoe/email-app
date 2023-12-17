
import { NextResponse } from "next/server";
import { Resend } from "resend";

// Import all email components
import { emailComponentRenders } from "../../../components/EmailComponents";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  console.log("POST /api/email/route.jsx");
  try {
    const { slug, recipientEmails, editValues } = await request.json();
    console.log("slug: ", slug);
    console.log("recipientEmails: ", recipientEmails);
    console.log("editValues: ", editValues);

    // Find the corresponding email component in the emailComponentRenders array
    const selectedComponent = emailComponentRenders.find(
      (component) => component.href === `/templates/${slug}`
    );

    if (!selectedComponent) {
      throw new Error(`No email template found for slug: ${slug}`);
    }

    const data = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: recipientEmails,
      subject: selectedComponent.emailSubject,
      react: selectedComponent.component({ editValues }),
    });
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
