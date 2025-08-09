import { NextResponse } from "next/server";

// GET api/hello にアクセスすると `message: "Hello from API Route"` が返る
export async function GET() {
  return NextResponse.json({ message: "Hello from API Route" });
}
