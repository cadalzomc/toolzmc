"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient, TRPC, trpcClient } from "@/lib/utils";

export const QueryProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <TRPC.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </TRPC.Provider>
  );
};
