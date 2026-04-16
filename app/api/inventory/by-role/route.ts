import { NextResponse } from "next/server"

export async function GET() {
  return NextResponse.json(
    { error: "Inventory API is disabled (MongoDB/Mongoose removed)." },
    { status: 501 }
  )
}