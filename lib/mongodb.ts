// lib/mongodb.ts
//
// MongoDB has been intentionally disabled for this project build/deploy.
// Keep this module import-safe (no env var checks at import time) so that
// `next build` doesn't fail when `MONGODB_URI` is not set.

export default async function dbConnect(): Promise<never> {
  throw new Error("MongoDB is disabled (MONGODB_URI not required).")
}

export async function connectToDatabase(): Promise<never> {
  throw new Error("MongoDB is disabled (MONGODB_URI not required).")
}