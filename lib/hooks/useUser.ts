"use client";

import { useEffect, useState } from "react";
import { dbBrowser } from "@/lib/utils";
import type { User } from "@supabase/supabase-js";

export const useUser = () => {
  const supabase = dbBrowser();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      setUser(user);
      setLoading(false);
    });

    const { data: subscription } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription?.subscription.unsubscribe();
  }, [supabase]);

  return { user, loading };
};
