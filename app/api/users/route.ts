import { NextResponse } from "next/server"

function disabled() {
  return NextResponse.json(
    { error: "Users API is disabled (MongoDB/Mongoose removed)." },
    { status: 501 }
  )
}

export async function GET() {
  return disabled()
}

export async function POST() {
  return disabled()
}