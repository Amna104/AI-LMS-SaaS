"use server";

import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "@/lib/supabase";

// =======================================
// 🧩 Function: createCompanion
// Description: Asynchronously creates a new companion record in the database
// =======================================
export const createCompanion = async (formData: CreateCompanion) => {
  const { userId: author } = await auth();
  const supabase = createSupabaseClient();

  // Insert new companion into the 'companions' table, attaching the user ID as the author
  const { data, error } = await supabase
    .from("companions")
    .insert({ ...formData, author })
    .select();
  // If there is an error or no data returned, throw an exception
  if (error || !data)
    throw new Error(error?.message || "Failed to create a companion");
  return data[0];
};

// =======================================
// 🚀 Function: getAllCompanions
// Description: Fetch paginated and filtered list of companions from Supabase
// =======================================
export const getAllCompanions = async ({
  limit = 10,
  page = 1,
  subject,
  topic,
}: GetAllCompanions) => {
  const supabase = createSupabaseClient();

  // Start building a query from the "companions" table
  let query = supabase.from("companions").select();

  // Apply filters based on provided subject and/or topic
  if (subject && topic) {
    // If both subject and topic are provided
    query = query
      .ilike("subject", `%${subject}%`) // Case-insensitive match on subject column
      .or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`); // Case-insensitive match on topic or name columns
  } else if (subject) {
    query = query.ilike("subject", `%${subject}%`);
  } else if (topic) {
    query = query.or(`topic.ilike.%${topic}%,name.ilike.%${topic}%`);
  }

  // Apply pagination: select a range of records based on page and limit
  query = query.range((page - 1) * limit, page * limit - 1);

  // Execute the query and destructure the result
  const { data: companions, error } = await query;
  if (error) throw new Error(error.message);

  return companions;
};

// =======================================
// 🔍 Function: getCompanion
// Description: Fetch a single companion from Supabase by ID
// =======================================

export const getCompanion = async (id: string) => {
  const supabase = createSupabaseClient();

  // Query the 'companions' table for the record matching the provided ID
  const { data, error } = await supabase
    .from("companions")
    .select()
    .eq("id", id);

  if (error) return console.log(error);

  return data[0];
};

export const addToSessionHistory = async (companionId: string) => {
    const { userId } = await auth();
    const supabase = createSupabaseClient();
    const { data, error } = await supabase.from('session_history')
        .insert({
            companion_id: companionId,
            user_id: userId,
        })

    if(error) throw new Error(error.message);

    return data;
}

export const getRecentSessions = async (limit = 10) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('session_history')
        .select(`companions:companion_id (*)`)
        .order('created_at', { ascending: false })
        .limit(limit)

    if(error) throw new Error(error.message);

    return data.map(({ companions }) => companions);
}

export const getUserSessions = async (userId: string, limit = 10) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('session_history')
        .select(`companions:companion_id (*)`)
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
        .limit(limit)

    if(error) throw new Error(error.message);

    return data.map(({ companions }) => companions);
}

export const getUserCompanions = async (userId: string) => {
    const supabase = createSupabaseClient();
    const { data, error } = await supabase
        .from('companions')
        .select()
        .eq('author', userId)

    if(error) throw new Error(error.message);

    return data;
}

