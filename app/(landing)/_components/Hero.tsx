"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 md:px-14 overflow-hidden bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Animated Gradient Background with Parallax */}
      <div 
        className="absolute inset-0 -z-10"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
          transition: 'transform 0.1s ease-out'
        }}
      >
        {/* Subtle Pattern Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 107, 71, 0.15) 1px, transparent 0)`,
            backgroundSize: '32px 32px',
          }}
        />
        
        {/* Floating Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#FF6B47] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-[#FCCC41] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-20 left-1/2 w-72 h-72 bg-[#FF6B47] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
      </div>

      {/* Content Container */}
      <div className="max-w-7xl w-full mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <div className="space-y-8 text-center md:text-left animate-fade-in-up">
          {/* Trust Badge */}
          <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-black/10 rounded-full px-4 py-2 text-sm font-medium shadow-sm animate-fade-in">
            <span className="w-2 h-2 bg-[#FCCC41] rounded-full animate-pulse" />
            Join 10,000+ learners worldwide
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
            Learn Through{" "}
            <span className="text-[#FF6B47] relative inline-block">
              Conversation
              <svg
                className="absolute -bottom-2 left-0 w-full"
                viewBox="0 0 300 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 8C50 4 100 2 150 4C200 6 250 8 298 6"
                  stroke="#FCCC41"
                  strokeWidth="4"
                  strokeLinecap="round"
                  className="animate-draw-line"
                />
              </svg>
            </span>
            , Not Just Reading
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-gray-700 max-w-xl mx-auto md:mx-0 leading-relaxed">
            Master any subject by talking with AI-powered voice tutors. Natural conversations, 
            instant feedback, and personalized learning paths—all in one platform.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link
              href="/companions/new"
              className="btn-hover-glow group relative bg-[#FF6B47] hover:bg-[#FF5A35] text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-lg overflow-hidden"
              style={{ animation: 'pulse-glow 2s infinite' }}
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                Start Learning Free
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#FF5A35] to-[#FF6B47] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </Link>

            <button
              onClick={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank')}
              className="group bg-white hover:bg-gray-50 text-gray-900 font-semibold px-8 py-4 rounded-2xl border-2 border-gray-900 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2"
            >
              <svg
                className="w-6 h-6 group-hover:scale-110 transition-transform"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 justify-center md:justify-start pt-4">
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-[#FF6B47]">50+</div>
              <div className="text-sm text-gray-600">AI Tutors</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-[#FF6B47]">100K+</div>
              <div className="text-sm text-gray-600">Conversations</div>
            </div>
            <div className="text-center md:text-left">
              <div className="text-3xl font-bold text-[#FF6B47]">4.9★</div>
              <div className="text-sm text-gray-600">User Rating</div>
            </div>
          </div>
        </div>

        {/* Right Content - Hero Illustration */}
        <div className="relative animate-fade-in-up animation-delay-300">
          <div className="relative aspect-square max-w-lg mx-auto">
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B47] to-[#FCCC41] rounded-[3rem] transform rotate-6 opacity-20 blur-2xl" />
            
            {/* Main Card Container */}
            <div className="relative h-full bg-gradient-to-br from-orange-50 to-amber-50 rounded-[3rem] border-4 border-black shadow-2xl overflow-hidden p-8">
              
              {/* Decorative Background Pattern */}
              <div className="absolute inset-0 opacity-5" style={{
                backgroundImage: `radial-gradient(circle, #FF6B47 1px, transparent 1px)`,
                backgroundSize: '20px 20px'
              }} />

              {/* Main Illustration - Conversation Bubbles */}
              <div className="relative h-full flex flex-col items-center justify-center gap-8">
                
                {/* AI Tutor Avatar Circle */}
                <div className="relative">
                  <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] flex items-center justify-center shadow-2xl animate-pulse-slow">
                    <svg
                      className="w-16 h-16 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z"
                      />
                    </svg>
                  </div>
                  
                  {/* Pulsing Rings Around Avatar */}
                  <div className="absolute inset-0 -m-4">
                    <div className="w-full h-full rounded-full border-4 border-[#FF6B47] opacity-20 animate-ping" />
                  </div>
                  <div className="absolute inset-0 -m-8" style={{ animationDelay: '0.5s' }}>
                    <div className="w-full h-full rounded-full border-4 border-[#FCCC41] opacity-20 animate-ping" />
                  </div>
                </div>

                {/* Conversation Bubbles */}
                <div className="w-full space-y-4">
                  {/* AI Message Bubble */}
                  <div className="flex justify-start animate-fade-in">
                    <div className="bg-white rounded-2xl rounded-tl-none px-6 py-3 shadow-lg border-2 border-black max-w-[80%]">
                      <p className="text-sm font-semibold text-gray-800">"Let's practice Spanish! 🇪🇸"</p>
                    </div>
                  </div>
                  
                  {/* User Message Bubble */}
                  <div className="flex justify-end animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <div className="bg-[#FF6B47] rounded-2xl rounded-tr-none px-6 py-3 shadow-lg max-w-[80%]">
                      <p className="text-sm font-semibold text-white">"¡Hola! How are you?"</p>
                    </div>
                  </div>

                  {/* AI Response Bubble */}
                  <div className="flex justify-start animate-fade-in" style={{ animationDelay: '0.6s' }}>
                    <div className="bg-white rounded-2xl rounded-tl-none px-6 py-3 shadow-lg border-2 border-black max-w-[80%]">
                      <p className="text-sm font-semibold text-gray-800">"¡Muy bien! 🎉"</p>
                    </div>
                  </div>
                </div>

                {/* Voice Wave Indicator at Bottom */}
                <div className="flex items-center gap-1 mt-4">
                  {[...Array(7)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1.5 bg-[#FF6B47] rounded-full"
                      style={{
                        height: `${Math.random() * 30 + 10}px`,
                        animation: `wave 1s ease-in-out infinite`,
                        animationDelay: `${i * 0.1}s`,
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating Feature Cards */}
              <div className="absolute top-4 -left-4 bg-white rounded-2xl shadow-xl px-4 py-2 border-2 border-black animate-float max-md:hidden">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-xs font-bold">Live Feedback</span>
                </div>
              </div>

              <div className="absolute bottom-4 -right-4 bg-white rounded-2xl shadow-xl px-4 py-2 border-2 border-black animate-float animation-delay-2000 max-md:hidden">
                <div className="flex items-center gap-2">
                  <span className="text-xl">🎯</span>
                  <span className="text-xs font-bold">98% Accuracy</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
