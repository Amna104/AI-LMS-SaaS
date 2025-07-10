import CompanionCard from '@/components/CompanionCard'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import React from 'react'
import './globals.css'
import { recentSessions } from '@/constants'

const Page = () => {
  return (
    <main>
      <h1>Popular Companions</h1>
      <section className='home-section'>
        <CompanionCard
        id="123"
        name="Neura the Brainy explorer"
        topic="Neural Network of the brain"
        subject="science"
        duration={45}
        color="#ffda6e"
        />
        <CompanionCard
        id="456"
        name="Neura the Brainy explorer"
        topic="Neural Network of the brain"
        subject="science"
        duration={45}
        color="#e5d0ff"
        />
        <CompanionCard
        id="789"
        name="Neura the Brainy explorer"
        topic="Neural Network of the brain"
        subject="science"
        duration={45}
        color="#BDE7FF"
        />
      </section>

      <section className='home-section'>
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames = "w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page