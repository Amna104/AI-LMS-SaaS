import { createClient } from "@supabase/supabase-js";
import { auth } from "@clerk/nextjs/server";

// Exporting a function to create a Supabase client instance
export const createSupabaseClient = () => {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      // Supplying an async function to fetch the access token dynamically
      async accessToken() {
        return (await auth()).getToken(); // getToken() must be called to retrieve the actual token
      },
    }
  );
};
