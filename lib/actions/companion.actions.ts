'use server';

import {auth} from "@clerk/nextjs/server";
import {createSupabaseClient} from "@/lib/supabase";

// Define an async function to create a companion record in the database
export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();


// Insert new companion into the 'companions' table, attaching the user ID as the author
    const { data, error } = await supabase
        .from('companions')
        .insert({...formData, author })
        .select();
    // If there is an error or no data returned, throw an exception
    if(error || !data) throw new Error(error?.message || 'Failed to create a companion');
    return data[0];
}