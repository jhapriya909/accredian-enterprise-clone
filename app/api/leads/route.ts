import { NextResponse } from "next/server";

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, company, phone, interest, message } = body;
    if (![name, email, company, phone, interest, message].every((value) => typeof value === "string" && value.trim())) {
      return NextResponse.json({ success: false, message: "Please complete all required fields." }, { status: 400 });
    }
    if (!emailRegex.test(email)) return NextResponse.json({ success: false, message: "Please enter a valid work email." }, { status: 400 });
    console.log("Enterprise lead received", { name, email, company, phone, interest, message, submittedAt: new Date().toISOString() });
    return NextResponse.json({ success: true, message: "Thank you! Our enterprise learning advisor will contact you soon." }, { status: 201 });
  } catch {
    return NextResponse.json({ success: false, message: "Unable to submit right now. Please try again." }, { status: 500 });
  }
}
