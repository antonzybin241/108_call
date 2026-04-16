import { NextResponse } from "next/server"

function disabled() {
  return NextResponse.json(
    { error: "Orders API is disabled (MongoDB/Mongoose removed)." },
    { status: 501 }
  )
}

export async function GET() {
  return disabled()
}

export async function PUT() {
  return disabled()
}

export async function PATCH() {
  return disabled()
}
