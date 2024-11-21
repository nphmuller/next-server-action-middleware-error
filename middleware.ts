import { NextRequest, NextResponse } from "next/server";

export default async function Middleware(request: NextRequest) {
  if (request.method === "POST") {
    return NextResponse.json("Example: token invalid", { status: 401 });
  }
}
