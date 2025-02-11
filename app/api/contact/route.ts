import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest ) {
    const contactData = await req.json();
    console.log('contactData',contactData);
    
    try {
      const supabaseUrl = process.env.SUPABASE_URL;
      const supabaseKey = process.env.SUPABASE_ANON_KEY;

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
