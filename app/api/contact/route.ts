import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest ) {
    const contactData = await req.json();
    console.log('contactData',contactData);
    
    try {
      const supabaseUrl = 'https://xkoeunwvfcbamudnjzmc.supabase.co';
      const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhrb2V1bnd2ZmNiYW11ZG5qem1jIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg2ODc0NjcsImV4cCI6MjA1NDI2MzQ2N30.99KvMEmWG6aIqAFukWDUCd9tl3JFwuZAwE-n2eT3nJ8';

      if (!supabaseUrl || !supabaseKey) {
        return NextResponse.json({ success: false, message: 'Invalid Keys' });
      }

      const supabase =await createClient(supabaseUrl, supabaseKey);
      const { data, error } = await supabase.from('contactqueries').insert([contactData]);

      if (error) {
        return NextResponse.json({ success: false, message: error.message });
      }

      return NextResponse.json({ success: true, data });
    } catch (error) {
      return NextResponse.json({ success: false, message: (error as Error).message });
    }
}
