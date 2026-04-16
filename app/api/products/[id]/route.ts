import { NextResponse } from "next/server"

function disabled() {
  return NextResponse.json(
    { error: "Products API is disabled (MongoDB/Mongoose removed)." },
    { status: 501 }
  )
}

export async function GET() {
  return disabled()
}

export async function PUT() {
  return disabled()
}

export async function DELETE() {
  return disabled()
}
