import Chatbot  from '@/components/Chatbot'
import { getSession } from "@/lib/getSession";
import { redirect } from 'next/navigation';
import React from 'react'

export default async function page() {
    const session = await getSession();
    const user = session?.user;
    if (!user) return redirect("/");
  return (
    <div>
        <Chatbot/>
      
    </div>
  )
}
