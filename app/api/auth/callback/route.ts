import { supabaseServer } from "@/server/db";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const url = new URL(req.url);
  const code = url.searchParams.get("code");

  const res = NextResponse.redirect(new URL("/", url.origin));
  const supabase = await supabaseServer();

  if (code) {
    await supabase.auth.exchangeCodeForSession(code);
  }

  return res;
}
