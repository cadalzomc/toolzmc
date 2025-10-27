import { dbServer } from "@/lib/db/server";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  const res = NextResponse.redirect(new URL("/", url.origin));
  const supabase = await dbServer();

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return res;
}
