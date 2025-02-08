"use server";

import { createClient } from "@supabase/supabase-js";
import { ContactFormFields } from "./contact/page";

export async function uploadContactForm(contactData: ContactFormFields) {
  console.log("contactData", contactData);

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const supabaseKey = process.env.SUPABASE_ANON_KEY;

    if (!supabaseUrl || !supabaseKey) {
      throw Error("Invalid Keys");
    }

    const supabase = createClient(supabaseUrl, supabaseKey);
    const {data,error} = await supabase.from("contactqueries").insert([contactData]);
    console.log(data,error);
    
    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
