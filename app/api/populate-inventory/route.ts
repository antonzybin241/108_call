import { NextResponse } from "next/server"

export async function POST() {
  return NextResponse.json(
    { error: "Inventory population is disabled (MongoDB/Mongoose removed)." },
    { status: 501 }
  )
}