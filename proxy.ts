import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/db/middleware";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/account/:path*", "/auth/:path*"],
};
