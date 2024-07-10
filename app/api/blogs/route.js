import { NextResponse } from "next/server";
import { blogsData } from "@/lib/data";

export async function POST(request) {
  try {
    const data = await request.json();
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
export async function GET() {
  try {
    const data = blogsData;
    return NextResponse.json({ data });
  } catch (error) {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }
}
