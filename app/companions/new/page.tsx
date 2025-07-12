import CompanionForm from '@/components/CompanionForm'
import { auth } from '@clerk/nextjs/server';
import { redirect } from 'next/navigation';
import React from 'react'

// Define an async server component that handles rendering the new companion creation page
const NewCompanion = async () => {
  const {userId} = await auth();
  if (!userId) redirect('/sign-in');
  
// If authenticated, render the page with the companion form
  return (
    <main className='min-lg:w-1/3 min-md:w-2/3 items-center justify-center'>
      <article className='w-full gap-4 flex flex-col'>
        <h1>Companion Builder</h1>
        <CompanionForm/>
      </article>
    </main>
  )
}

export default NewCompanion