import { type NextRequest } from "next/server";
import { updateSession } from "@/server/middleware";

export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: ["/account/:path*", "/auth/:path*"],
};
