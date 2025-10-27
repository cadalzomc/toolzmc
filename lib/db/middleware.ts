import { createServerClient } from "@supabase/ssr";
import { NextResponse, type NextRequest } from "next/server";

export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({ request });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) => request.cookies.set(name, value));
          response = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) => response.cookies.set(name, value, options));
        },
      },
    }
  );

  const {
    data: { user },
  } = await supabase.auth.getUser();
  await supabase.auth.getSession();

  const path = request.nextUrl.pathname;

  if (user && (path.startsWith("/auth/signin") || path.startsWith("/auth/register"))) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!user && path.startsWith("/account")) {
    return NextResponse.redirect(new URL("/auth/signin", request.url));
  }

  return response;
}
