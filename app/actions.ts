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
    await supabase.from("Contacts").insert([contactData]);

    return { success: true };
  } catch (error) {
    return { success: false, error: (error as Error).message };
  }
}
