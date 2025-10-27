import { QueryClient } from "@tanstack/react-query";
import { httpBatchLink } from "@trpc/client";
import { createTRPCReact } from "@trpc/react-query";
import { AppRouter } from "@/server/router/_app";

const APIURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000";
const APITOKEN = process.env.NEXT_PUBLIC_APP_VERSION || "";

export const TRPC = createTRPCReact<AppRouter>();

export const queryClient = new QueryClient();

export const trpcClient = TRPC.createClient({
  links: [
    httpBatchLink({
      url: `${APIURL}/api/v1`,
      headers() {
        return {
          "x-niftyers": APITOKEN,
        };
      },
    }),
  ],
});
