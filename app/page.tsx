"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { 
  Mic, 
  GraduationCap, 
  BarChart, 
  Globe, 
  Target, 
  MessageSquare,
  Calculator,
  FlaskConical,
  Languages,
  BookOpen,
  Code2,
  TrendingUp,
  ArrowRight,
  Check,
  X,
  Users,
  Sparkles,
  Award,
  Star,
  Mail,
  Twitter,
  Linkedin,
  Github,
  Youtube
} from "lucide-react";

// CountUp Animation Component
function CountUpAnimation({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const increment = target / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <span>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function LandingPage() {
  const [scrollY, setScrollY] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  // Smooth scroll behavior
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Handle scroll for parallax and back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setShowBackToTop(currentScrollY > 500);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Intersection Observer for stats animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setStatsVisible(true);
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  // Intersection Observer for scroll-triggered animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
        }
      });
    }, observerOptions);

    // Observe all sections with scroll-animation class
    const animatedElements = document.querySelectorAll('.scroll-animation, .fade-in-up, .fade-in-left, .fade-in-right, .scale-in, .slide-in-left, .slide-in-right');
    animatedElements.forEach((el) => observer.observe(el));

    return () => {
      animatedElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-6 md:px-14 overflow-hidden pt-20">
        {/* Animated Gradient Background with Parallax */}
        <div 
          className="absolute inset-0 -z-10"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100 animate-gradient-shift" />
          
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

            {/* CTA Button */}
            <div className="flex justify-center md:justify-start">
              <Link
                href="/dashboard"
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

          {/* Right Content - Hero Illustration - AI Companions Showcase */}
          <div className="relative animate-fade-in-up animation-delay-300 max-md:mt-8">
            <div className="relative aspect-square max-w-lg mx-auto max-md:max-w-md">
              {/* Background Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B47] to-[#FCCC41] rounded-[3rem] max-md:rounded-[2rem] transform rotate-6 opacity-20 blur-2xl" />
              
              {/* Main Card Container */}
              <div className="relative h-full bg-gradient-to-br from-white via-orange-50 to-amber-50 rounded-[3rem] max-md:rounded-[2rem] border-4 max-md:border-2 border-[#FF8C5A] shadow-2xl overflow-hidden">
                
                {/* Decorative Background Pattern */}
                <div className="absolute inset-0 opacity-5" style={{
                  backgroundImage: `radial-gradient(circle, #FF6B47 1px, transparent 1px)`,
                  backgroundSize: '20px 20px'
                }} />

                {/* Main Illustration - Meet Your AI Companions */}
                <div className="relative h-full flex flex-col items-center justify-center p-6 max-md:p-4">
                  
                  {/* Title */}
                  <div className="text-center mb-6 max-md:mb-4">
                    <h3 className="text-2xl max-md:text-xl font-bold text-gray-900 mb-1">Meet Your Tutors</h3>
                    <p className="text-sm max-md:text-xs text-gray-600">Choose from expert AI companions</p>
                  </div>

                  {/* Companions Grid */}
                  <div className="grid grid-cols-2 gap-3 max-md:gap-2 w-full max-w-sm">
                    
                    {/* Companion 1 - Neura (Science) */}
                    <div className="bg-[#E5D0FF] rounded-2xl max-md:rounded-xl p-4 max-md:p-3 border-3 max-md:border-2 border-black shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in">
                      <div className="flex flex-col items-center text-center space-y-2 max-md:space-y-1">
                        <div className="w-16 h-16 max-md:w-12 max-md:h-12 rounded-full bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-2xl shadow-lg">
                          <FlaskConical className="w-8 h-8 max-md:w-6 max-md:h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-sm max-md:text-xs text-gray-900">Neura</div>
                          <div className="text-xs max-md:text-[10px] text-gray-700">Science Expert</div>
                        </div>
                      </div>
                    </div>

                    {/* Companion 2 - Countsy (Maths) */}
                    <div className="bg-[#FFDA6E] rounded-2xl max-md:rounded-xl p-4 max-md:p-3 border-3 max-md:border-2 border-black shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: '0.1s' }}>
                      <div className="flex flex-col items-center text-center space-y-2 max-md:space-y-1">
                        <div className="w-16 h-16 max-md:w-12 max-md:h-12 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-600 flex items-center justify-center text-2xl shadow-lg">
                          <Calculator className="w-8 h-8 max-md:w-6 max-md:h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-sm max-md:text-xs text-gray-900">Countsy</div>
                          <div className="text-xs max-md:text-[10px] text-gray-700">Math Wizard</div>
                        </div>
                      </div>
                    </div>

                    {/* Companion 3 - Verba (Language) */}
                    <div className="bg-[#BDE7FF] rounded-2xl max-md:rounded-xl p-4 max-md:p-3 border-3 max-md:border-2 border-black shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <div className="flex flex-col items-center text-center space-y-2 max-md:space-y-1">
                        <div className="w-16 h-16 max-md:w-12 max-md:h-12 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center text-2xl shadow-lg">
                          <Languages className="w-8 h-8 max-md:w-6 max-md:h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-sm max-md:text-xs text-gray-900">Verba</div>
                          <div className="text-xs max-md:text-[10px] text-gray-700">Language Pro</div>
                        </div>
                      </div>
                    </div>

                    {/* Companion 4 - Codey (Coding) */}
                    <div className="bg-[#FFC8E4] rounded-2xl max-md:rounded-xl p-4 max-md:p-3 border-3 max-md:border-2 border-black shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer animate-fade-in" style={{ animationDelay: '0.3s' }}>
                      <div className="flex flex-col items-center text-center space-y-2 max-md:space-y-1">
                        <div className="w-16 h-16 max-md:w-12 max-md:h-12 rounded-full bg-gradient-to-br from-pink-400 to-pink-600 flex items-center justify-center text-2xl shadow-lg">
                          <Code2 className="w-8 h-8 max-md:w-6 max-md:h-6 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-sm max-md:text-xs text-gray-900">Codey</div>
                          <div className="text-xs max-md:text-[10px] text-gray-700">Code Master</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <div className="mt-6 max-md:mt-4 flex items-center gap-2 bg-gradient-to-r from-[#FF6B47] to-[#FF5A35] rounded-full px-5 py-2.5 max-md:px-4 max-md:py-2 shadow-lg animate-pulse-slow">
                    <Users className="w-4 h-4 max-md:w-3 max-md:h-3 text-white" />
                    <span className="text-sm max-md:text-xs font-bold text-white">50+ Tutors Available</span>
                  </div>
                </div>

                {/* Floating Feature Badges */}
                <div className="absolute top-4 left-4 bg-gradient-to-br from-[#FCCC41] to-[#FDB91E] rounded-xl shadow-2xl px-3 py-2 border-2 border-black animate-float max-md:hidden z-20">
                  <div className="flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5 text-black" />
                    <span className="text-xs font-bold text-black">AI Powered</span>
                  </div>
                </div>

                <div className="absolute bottom-4 right-4 bg-white rounded-xl shadow-2xl px-3 py-2 border-2 border-black animate-float animation-delay-2000 max-md:hidden z-20">
                  <div className="flex items-center gap-1.5">
                    <MessageSquare className="w-3.5 h-3.5 text-[#FF6B47]" />
                    <span className="text-xs font-bold text-gray-900">Voice Chat</span>
                  </div>
                </div>

                <div className="absolute top-1/2 right-4 -translate-y-1/2 bg-gradient-to-br from-green-400 to-green-500 rounded-xl shadow-2xl px-3 py-2 border-2 border-black animate-float animation-delay-4000 max-md:hidden z-20">
                  <div className="flex items-center gap-1.5">
                    <Star className="w-3.5 h-3.5 text-white fill-white" />
                    <span className="text-xs font-bold text-white">4.9★</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="scroll-animation py-24 px-6 md:px-14 bg-white relative overflow-hidden" id="features">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Why Students Love{" "}
              <span className="text-[#FF6B47]">Converso</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience a revolutionary way to learn with AI-powered voice tutors
            </p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Feature 1 - Voice-First Learning */}
            <div className="fade-in-up group relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-transparent hover:border-[#FF6B47] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '0.1s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mic className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Voice-First Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  Natural conversations with AI tutors that feel like talking to a real teacher
                </p>
              </div>
            </div>

            {/* Feature 2 - Personalized Tutors */}
            <div className="fade-in-up group relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-transparent hover:border-[#FF6B47] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '0.2s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Personalized Tutors</h3>
                <p className="text-gray-600 leading-relaxed">
                  Create custom companions for any subject tailored to your learning style
                </p>
              </div>
            </div>

            {/* Feature 3 - Track Progress */}
            <div className="fade-in-up group relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-transparent hover:border-[#FF6B47] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '0.3s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <BarChart className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Track Progress</h3>
                <p className="text-gray-600 leading-relaxed">
                  Monitor your learning journey and completed sessions with detailed analytics
                </p>
              </div>
            </div>

            {/* Feature 4 - Multiple Subjects */}
            <div className="fade-in-up group relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-transparent hover:border-[#FF6B47] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '0.4s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Globe className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Multiple Subjects</h3>
                <p className="text-gray-600 leading-relaxed">
                  Math, Science, Language, History, Coding and more—all in one platform
                </p>
              </div>
            </div>

            {/* Feature 5 - Adaptive Learning */}
            <div className="fade-in-up group relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-transparent hover:border-[#FF6B47] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '0.5s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Adaptive Learning</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI adjusts to your pace and skill level for optimal learning outcomes
                </p>
              </div>
            </div>

            {/* Feature 6 - Real-Time Feedback */}
            <div className="fade-in-up group relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 border-2 border-transparent hover:border-[#FF6B47] transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl" style={{ animationDelay: '0.6s' }}>
              <div className="absolute inset-0 bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl opacity-50" />
              <div className="relative">
                <div className="w-14 h-14 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-3">Real-Time Feedback</h3>
                <p className="text-gray-600 leading-relaxed">
                  Instant answers and explanations to help you understand concepts better
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="scroll-animation py-24 px-6 md:px-14 bg-gradient-to-br from-orange-50 via-white to-amber-50 relative overflow-hidden" id="how-it-works">
        {/* Background Decoration */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#FCCC41] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#FF6B47] rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Section Title */}
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Start Learning in{" "}
              <span className="text-[#FF6B47]">3 Simple Steps</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Get started with Converso in minutes and begin your learning journey
            </p>
          </div>

          {/* Steps Container */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-4 relative">
            {/* Connecting Line (Desktop Only) */}
            <div className="hidden lg:block absolute top-24 left-1/2 -translate-x-1/2 w-full max-w-4xl h-0.5 bg-gradient-to-r from-[#FF6B47] via-[#FCCC41] to-[#FF6B47] opacity-30" />

            {/* Step 1 */}
            <div className="relative scale-in" style={{ animationDelay: '0.1s' }}>
              <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-6 left-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">01</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center">
                    <GraduationCap className="w-10 h-10 text-[#FF6B47]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">Choose Your Tutor</h3>
                <p className="text-gray-600 leading-relaxed">
                  Browse our library of AI tutors or create your own personalized companion for any subject you want to learn.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="relative scale-in" style={{ animationDelay: '0.3s' }}>
              <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-6 left-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FCCC41] to-[#FDB91E] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-black">02</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center">
                    <Mic className="w-10 h-10 text-[#FF6B47]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">Start Talking</h3>
                <p className="text-gray-600 leading-relaxed">
                  Begin a natural voice conversation on any topic. Just speak and your AI tutor will respond in real-time.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative scale-in" style={{ animationDelay: '0.5s' }}>
              <div className="bg-white rounded-3xl p-8 border-2 border-black shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
                {/* Step Number */}
                <div className="absolute -top-6 left-8">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] flex items-center justify-center shadow-lg">
                    <span className="text-2xl font-bold text-white">03</span>
                  </div>
                </div>

                {/* Icon */}
                <div className="mt-8 mb-6">
                  <div className="w-20 h-20 bg-gradient-to-br from-orange-100 to-amber-100 rounded-3xl flex items-center justify-center">
                    <BarChart className="w-10 h-10 text-[#FF6B47]" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4">Learn & Grow</h3>
                <p className="text-gray-600 leading-relaxed">
                  Track your progress, complete sessions, and watch your knowledge grow with detailed learning analytics.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center mt-16">
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-3 bg-[#FF6B47] hover:bg-[#FF5A35] text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-lg"
            >
              Get Started Now
              <svg
                className="w-6 h-6"
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
            </Link>
          </div>
        </div>
      </section>

      {/* Subject Showcase Section */}
      <section className="scroll-animation py-24 px-6 md:px-14 bg-white relative overflow-hidden" id="subjects">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Every{" "}
              <span className="text-[#FF6B47]">Subject</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Choose from our diverse range of subjects and start learning today
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
            {/* Maths */}
            <div className="slide-in-left group relative bg-[#FFDA6E] rounded-3xl p-6 border-2 border-black transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden" style={{ animationDelay: '0.1s' }}>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Calculator className="w-7 h-7 text-[#FFDA6E]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Maths</h3>
                  <p className="text-sm text-gray-800 font-medium">3+ tutors available</p>
                </div>
                
                {/* Hover Explore Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 rounded-3xl">
                  <Link
                    href="/companions?subject=maths"
                    className="flex items-center gap-2 text-white font-bold text-lg"
                  >
                    Explore <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Science */}
            <div className="slide-in-left group relative bg-[#E5D0FF] rounded-3xl p-6 border-2 border-black transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden" style={{ animationDelay: '0.2s' }}>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <FlaskConical className="w-7 h-7 text-[#E5D0FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Science</h3>
                  <p className="text-sm text-gray-800 font-medium">3+ tutors available</p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 rounded-3xl">
                  <Link
                    href="/companions?subject=science"
                    className="flex items-center gap-2 text-white font-bold text-lg"
                  >
                    Explore <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Language */}
            <div className="slide-in-left group relative bg-[#BDE7FF] rounded-3xl p-6 border-2 border-black transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden" style={{ animationDelay: '0.3s' }}>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Languages className="w-7 h-7 text-[#BDE7FF]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Language</h3>
                  <p className="text-sm text-gray-800 font-medium">3+ tutors available</p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 rounded-3xl">
                  <Link
                    href="/companions?subject=language"
                    className="flex items-center gap-2 text-white font-bold text-lg"
                  >
                    Explore <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* History */}
            <div className="slide-in-right group relative bg-[#FFECC8] rounded-3xl p-6 border-2 border-black transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden" style={{ animationDelay: '0.4s' }}>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <BookOpen className="w-7 h-7 text-[#FFECC8]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">History</h3>
                  <p className="text-sm text-gray-800 font-medium">3+ tutors available</p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 rounded-3xl">
                  <Link
                    href="/companions?subject=history"
                    className="flex items-center gap-2 text-white font-bold text-lg"
                  >
                    Explore <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Coding */}
            <div className="slide-in-right group relative bg-[#FFC8E4] rounded-3xl p-6 border-2 border-black transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden" style={{ animationDelay: '0.5s' }}>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <Code2 className="w-7 h-7 text-[#FFC8E4]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Coding</h3>
                  <p className="text-sm text-gray-800 font-medium">3+ tutors available</p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 rounded-3xl">
                  <Link
                    href="/companions?subject=coding"
                    className="flex items-center gap-2 text-white font-bold text-lg"
                  >
                    Explore <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Economics */}
            <div className="slide-in-right group relative bg-[#C8FFDF] rounded-3xl p-6 border-2 border-black transition-all duration-500 hover:scale-105 hover:shadow-2xl cursor-pointer overflow-hidden" style={{ animationDelay: '0.6s' }}>
              <div className="relative z-10">
                <div className="flex flex-col items-center text-center space-y-3">
                  <div className="w-14 h-14 bg-black rounded-2xl flex items-center justify-center group-hover:rotate-12 transition-transform">
                    <TrendingUp className="w-7 h-7 text-[#C8FFDF]" />
                  </div>
                  <h3 className="text-lg font-bold text-black">Economics</h3>
                  <p className="text-sm text-gray-800 font-medium">3+ tutors available</p>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/80 rounded-3xl">
                  <Link
                    href="/companions?subject=economics"
                    className="flex items-center gap-2 text-white font-bold text-lg"
                  >
                    Explore <ArrowRight className="w-5 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/companions"
              className="inline-flex items-center gap-3 bg-black hover:bg-gray-800 text-white font-bold px-10 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg text-lg"
            >
              Browse All Companions
              <ArrowRight className="w-6 h-6" />
            </Link>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="scroll-animation py-24 px-6 md:px-14 bg-gradient-to-br from-gray-50 to-orange-50 relative overflow-hidden" id="pricing">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Choose Your{" "}
              <span className="text-[#FF6B47]">Learning Journey</span>
            </h2>
            <p className="text-lg text-gray-600">
              Start free, upgrade anytime
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Basic Plan */}
            <div className="fade-in-left bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
              {/* Icon */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-2">Basic Plan</h3>
                <div className="text-4xl font-bold mb-2">
                  $0<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">Perfect for trying out Converso</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">10 Conversations/month</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">3 Active Companions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Basic Session Recaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Unlimited Conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <X className="w-5 h-5 text-gray-400 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-400">Conversation History</span>
                </li>
              </ul>

              {/* CTA Button */}
              <Link
                href="/dashboard"
                className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all duration-300"
              >
                Get Started
              </Link>
            </div>

            {/* Core Learner - HIGHLIGHTED */}
            <div className="scale-in relative bg-white rounded-3xl p-8 border-4 border-[#FF6B47] shadow-2xl transform md:scale-105 hover:scale-110 transition-all duration-500" style={{ animationDelay: '0.2s' }}>
              {/* Most Popular Badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="bg-gradient-to-r from-[#FF6B47] to-[#FF5A35] text-white px-6 py-2 rounded-full font-bold text-sm shadow-lg">
                  MOST POPULAR
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 -z-10 bg-gradient-to-br from-[#FF6B47] to-[#FCCC41] rounded-3xl blur-2xl opacity-20" />

              {/* Icon */}
              <div className="text-center mb-6 mt-4">
                <div className="text-5xl mb-4">🚀</div>
                <h3 className="text-2xl font-bold mb-2">Core Learner</h3>
                <div className="text-4xl font-bold mb-2 text-[#FF6B47]">
                  $29<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">For serious learners</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Everything in Free</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited Conversations</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Up to 10 Active Companions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Save Conversation History</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Monthly Progress Reports</span>
                </li>
              </ul>

              {/* CTA Button */}
              <Link
                href="/dashboard"
                className="block w-full text-center bg-gradient-to-r from-[#FF6B47] to-[#FF5A35] hover:from-[#FF5A35] hover:to-[#FF6B47] text-white font-bold py-4 rounded-xl transition-all duration-300 shadow-lg"
              >
                Get Started
              </Link>
            </div>

            {/* Pro Companion */}
            <div className="fade-in-right bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: '0.3s' }}>
              {/* Icon */}
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">💎</div>
                <h3 className="text-2xl font-bold mb-2">Pro Companion</h3>
                <div className="text-4xl font-bold mb-2">
                  $49<span className="text-lg text-gray-600">/month</span>
                </div>
                <p className="text-gray-600">For power users</p>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700 font-semibold">Everything in Core</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Unlimited Companions</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Full Performance Dashboards</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Priority Support</span>
                </li>
                <li className="flex items-start gap-2">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-700">Advanced Analytics</span>
                </li>
              </ul>

              {/* CTA Button */}
              <Link
                href="/dashboard"
                className="block w-full text-center bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 rounded-xl transition-all duration-300"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Upgrade Note */}
          <div className="text-center">
            <div className="inline-block bg-blue-50 border-2 border-blue-200 rounded-2xl px-6 py-4">
              <p className="text-blue-800 font-medium">
                💡 <span className="font-bold">Ready to upgrade?</span> Go to Account Settings → Billing
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics & Social Proof Section */}
      <section 
        ref={statsRef}
        className="py-24 px-6 md:px-14 bg-gradient-to-br from-orange-50 via-amber-50 to-white relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Trusted by Learners{" "}
              <span className="text-[#FF6B47]">Worldwide</span>
            </h2>
            <p className="text-lg text-gray-600">
              Join our growing community of successful learners
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
            {/* Stat 1 - Active Learners */}
            <div className="text-center fade-in-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsVisible ? (
                  <CountUpAnimation target={10000} suffix="+" />
                ) : (
                  <div className="skeleton h-12 w-32 mx-auto rounded-lg" />
                )}
              </div>
              <div className="text-gray-600 font-medium">Active Learners</div>
            </div>

            {/* Stat 2 - Sessions Completed */}
            <div className="text-center fade-in-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCCC41] to-[#FDB91E] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="w-8 h-8 text-gray-900" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsVisible ? (
                  <CountUpAnimation target={50000} suffix="+" />
                ) : (
                  <div className="skeleton h-12 w-32 mx-auto rounded-lg" />
                )}
              </div>
              <div className="text-gray-600 font-medium">Sessions Completed</div>
            </div>

            {/* Stat 3 - Satisfaction Rate */}
            <div className="text-center fade-in-up" style={{ animationDelay: '0.3s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsVisible ? (
                  <CountUpAnimation target={98} suffix="%" />
                ) : (
                  <div className="skeleton h-12 w-32 mx-auto rounded-lg" />
                )}
              </div>
              <div className="text-gray-600 font-medium">Satisfaction Rate</div>
            </div>

            {/* Stat 4 - Subjects Covered */}
            <div className="text-center fade-in-up" style={{ animationDelay: '0.4s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-[#FCCC41] to-[#FDB91E] rounded-2xl flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-8 h-8 text-gray-900" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {statsVisible ? (
                  <CountUpAnimation target={20} suffix="+" />
                ) : (
                  <div className="skeleton h-12 w-32 mx-auto rounded-lg" />
                )}
              </div>
              <div className="text-gray-600 font-medium">Subjects Covered</div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="fade-in-up bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: '0.1s' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FCCC41] text-[#FCCC41]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "Converso transformed how I learn Spanish. Talking with AI tutors feels so natural, 
                and I've improved my pronunciation tremendously!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] flex items-center justify-center text-white font-bold text-lg">
                  SM
                </div>
                <div>
                  <div className="font-bold text-gray-900">Sarah Martinez</div>
                  <div className="text-sm text-gray-600">Learning Spanish</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="fade-in-up bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: '0.2s' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FCCC41] text-[#FCCC41]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "As a coding student, having an AI tutor explain algorithms through conversation 
                is game-changing. I finally understand complex concepts!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#FFC8E4] to-[#FF8EC9] flex items-center justify-center text-white font-bold text-lg">
                  JC
                </div>
                <div>
                  <div className="font-bold text-gray-900">James Chen</div>
                  <div className="text-sm text-gray-600">Learning Coding</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="fade-in-up bg-white rounded-3xl p-8 border-2 border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2" style={{ animationDelay: '0.3s' }}>
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FCCC41] text-[#FCCC41]" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 leading-relaxed">
                "I love how I can learn at my own pace. The AI tutors are patient and adapt 
                to my learning style. Best educational app I've used!"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#BDE7FF] to-[#8ED3FF] flex items-center justify-center text-white font-bold text-lg">
                  EP
                </div>
                <div>
                  <div className="font-bold text-gray-900">Emily Parker</div>
                  <div className="text-sm text-gray-600">Learning Mathematics</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner Section */}
      <section className="relative py-24 px-6 md:px-14 overflow-hidden">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#FF6B47] via-[#FF8C5A] to-[#FCCC41]" />
        
        {/* Animated Particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center md:text-left">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Ready to Transform Your Learning?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join thousands of students learning through conversation with AI-powered tutors
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Link
                  href="/companions/new"
                  className="group bg-white hover:bg-gray-100 text-[#FF6B47] font-bold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl shadow-lg flex items-center justify-center gap-2"
                >
                  <Sparkles className="w-5 h-5" />
                  Create Your First Tutor
                </Link>
                <Link
                  href="/companions"
                  className="group bg-transparent hover:bg-white/10 text-white font-bold px-8 py-4 rounded-2xl border-2 border-white transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2"
                >
                  Browse Companions
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Content - Voice Interface Illustration */}
            <div className="hidden md:flex items-center justify-center">
              <div className="relative w-full max-w-md">
                {/* Voice Interface Card */}
                <div className="bg-white/10 backdrop-blur-lg rounded-3xl p-8 border-2 border-white/20 shadow-2xl">
                  <div className="flex flex-col items-center space-y-6">
                    {/* Microphone */}
                    <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center animate-pulse-slow">
                      <Mic className="w-12 h-12 text-[#FF6B47]" />
                    </div>
                    
                    {/* Voice Waves */}
                    <div className="flex items-center gap-2">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-2 bg-white rounded-full"
                          style={{
                            height: `${20 + Math.random() * 40}px`,
                            animation: `wave 1s ease-in-out infinite`,
                            animationDelay: `${i * 0.1}s`,
                          }}
                        />
                      ))}
                    </div>
                    
                    <p className="text-white text-center font-semibold text-lg">
                      "Start speaking to learn..."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#2C2C2C] text-gray-300 py-16 px-6 md:px-14">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Column 1 - Brand */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">Converso</h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                AI-Powered Voice Learning Platform
              </p>
              {/* Social Media Icons */}
              <div className="flex gap-4">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-[#FF6B47] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Twitter className="w-5 h-5" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-[#FF6B47] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-[#FF6B47] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-gray-700 hover:bg-[#FF6B47] rounded-lg flex items-center justify-center transition-all duration-300"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Column 2 - Product */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Product</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/companions" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Companions
                  </Link>
                </li>
                <li>
                  <Link href="/companions/new" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Create Tutor
                  </Link>
                </li>
                <li>
                  <Link href="/my-journey" className="hover:text-[#FF6B47] transition-colors duration-300">
                    My Journey
                  </Link>
                </li>
                <li>
                  <Link href="/subscription" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Pricing
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3 - Resources */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Resources</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Community
                  </a>
                </li>
              </ul>
            </div>

            {/* Column 4 - Company */}
            <div>
              <h4 className="text-white font-bold mb-4 text-lg">Company</h4>
              <ul className="space-y-3">
                <li>
                  <a href="#" className="hover:text-[#FF6B47] transition-colors duration-300">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-[#FF6B47] transition-colors duration-300">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="border-t border-gray-700 pt-12 mb-12">
            <div className="max-w-md mx-auto text-center">
              <h4 className="text-white font-bold mb-4 text-xl">Stay Updated</h4>
              <p className="text-gray-400 mb-6">Get the latest news and updates from Converso</p>
              <div className="flex gap-2">
                <div className="flex-1 relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-gray-700 text-white pl-12 pr-4 py-3 rounded-xl border-2 border-gray-600 focus:border-[#FF6B47] focus:outline-none transition-colors"
                  />
                </div>
                <button className="bg-gradient-to-r from-[#FF6B47] to-[#FF5A35] hover:from-[#FF5A35] hover:to-[#FF6B47] text-white font-bold px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105">
                  Subscribe
                </button>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Converso. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className={`fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-[#FF6B47] to-[#FF5A35] text-white rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-3xl ${
          showBackToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
        }`}
        aria-label="Back to top"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </button>

      {/* Add custom animations to globals.css or include them here */}
      <style jsx>{`
        @keyframes gradient-shift {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(5%, 5%); }
        }
        
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes draw-line {
          from { stroke-dasharray: 0 300; }
          to { stroke-dasharray: 300 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.05); opacity: 0.9; }
        }
        
        @keyframes wave {
          0%, 100% { transform: scaleY(0.5); }
          50% { transform: scaleY(1.5); }
        }
        
        @keyframes slide-in-bottom {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float-particle {
          0%, 100% {
            transform: translate(0, 0) rotate(0deg);
            opacity: 0.2;
          }
          25% {
            transform: translate(50px, -50px) rotate(90deg);
            opacity: 0.4;
          }
          50% {
            transform: translate(0, -100px) rotate(180deg);
            opacity: 0.2;
          }
          75% {
            transform: translate(-50px, -50px) rotate(270deg);
            opacity: 0.4;
          }
        }
        
        /* Text animations */
        @keyframes text-slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes text-fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes text-bounce {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
        
        @keyframes shimmer {
          0% {
            background-position: -200% center;
          }
          100% {
            background-position: 200% center;
          }
        }
        
        .animate-gradient-shift {
          animation: gradient-shift 8s ease infinite;
        }
        
        .animate-blob {
          animation: blob 7s ease-in-out infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-draw-line {
          animation: draw-line 1.5s ease-out forwards;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }
        
        .animate-slide-in-bottom {
          animation: slide-in-bottom 0.8s ease-out forwards;
        }
        
        .animate-float-particle {
          animation: float-particle 10s ease-in-out infinite;
        }
        
        .animate-text-slide-up {
          animation: text-slide-up 0.8s ease-out forwards;
          opacity: 0;
        }
        
        .animate-text-fade-in {
          animation: text-fade-in 1s ease-out forwards;
          opacity: 0;
        }
        
        .animate-text-bounce {
          animation: text-bounce 2s ease-in-out infinite;
        }
        
        .text-shimmer {
          background: linear-gradient(
            90deg,
            currentColor 0%,
            rgba(255, 107, 71, 0.8) 50%,
            currentColor 100%
          );
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: shimmer 3s linear infinite;
        }
        
        .animation-delay-300 {
          animation-delay: 300ms;
        }
        
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        /* Scroll-triggered animations */
        .scroll-animation {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scroll-animation.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Fade in up animation */
        .fade-in-up {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in-up.animate-in {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Fade in left animation */
        .fade-in-left {
          opacity: 0;
          transform: translateX(-40px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in-left.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Fade in right animation */
        .fade-in-right {
          opacity: 0;
          transform: translateX(40px);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .fade-in-right.animate-in {
          opacity: 1;
          transform: translateX(0);
        }
        
        /* Scale in animation */
        .scale-in {
          opacity: 0;
          transform: scale(0.9);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .scale-in.animate-in {
          opacity: 1;
          transform: scale(1);
        }
        
        /* Slide in left animation */
        .slide-in-left {
          opacity: 0;
          transform: translateX(-60px) scale(0.95);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide-in-left.animate-in {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        
        /* Slide in right animation */
        .slide-in-right {
          opacity: 0;
          transform: translateX(60px) scale(0.95);
          transition: opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1), transform 0.8s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .slide-in-right.animate-in {
          opacity: 1;
          transform: translateX(0) scale(1);
        }
        
        /* Pulsing CTA effect */
        @keyframes pulse-glow {
          0%, 100% {
            box-shadow: 0 0 0 0 rgba(255, 107, 71, 0.7);
          }
          50% {
            box-shadow: 0 0 20px 10px rgba(255, 107, 71, 0);
          }
        }
        
        /* Gradient text animation */
        @keyframes gradient-text {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        /* Card stagger animation */
        @keyframes stagger-in {
          from {
            opacity: 0;
            transform: translateY(20px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Button hover glow */
        .btn-hover-glow {
          position: relative;
          overflow: hidden;
        }
        
        .btn-hover-glow::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.3);
          transform: translate(-50%, -50%);
          transition: width 0.6s, height 0.6s;
        }
        
        .btn-hover-glow:hover::before {
          width: 300px;
          height: 300px;
        }
        
        /* Enhanced card hover */
        .card-hover-lift {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .card-hover-lift:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
        }
        
        /* Loading skeleton */
        @keyframes skeleton-loading {
          0% {
            background-position: -200px 0;
          }
          100% {
            background-position: calc(200px + 100%) 0;
          }
        }
        
        .skeleton {
          background: linear-gradient(
            90deg,
            #f0f0f0 0px,
            #e0e0e0 40px,
            #f0f0f0 80px
          );
          background-size: 200px 100%;
          animation: skeleton-loading 1.5s ease-in-out infinite;
        }
        
        /* Stagger children animations - keeping for backward compatibility */
        .stagger-container > * {
          animation: stagger-in 0.5s ease-out forwards;
          opacity: 0;
        }
        
        .stagger-container > *:nth-child(1) { animation-delay: 0.1s; }
        .stagger-container > *:nth-child(2) { animation-delay: 0.2s; }
        .stagger-container > *:nth-child(3) { animation-delay: 0.3s; }
        .stagger-container > *:nth-child(4) { animation-delay: 0.4s; }
        .stagger-container > *:nth-child(5) { animation-delay: 0.5s; }
        .stagger-container > *:nth-child(6) { animation-delay: 0.6s; }
        
        /* Smooth transitions for all interactive elements */
        button, a, .interactive {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Reduce motion for accessibility */
        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
          
          .scroll-animation,
          .fade-in-up,
          .fade-in-left,
          .fade-in-right,
          .scale-in,
          .slide-in-left,
          .slide-in-right {
            opacity: 1;
            transform: none;
          }
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .scroll-animation,
          .fade-in-up {
            transform: translateY(20px);
          }
          
          .fade-in-left,
          .slide-in-left {
            transform: translateX(-20px);
          }
          
          .fade-in-right,
          .slide-in-right {
            transform: translateX(20px);
          }
          
          .scale-in {
            transform: scale(0.95);
          }
          
          .card-hover-lift:hover {
            transform: translateY(-4px) scale(1.01);
          }
        }
      `}</style>
    </div>
  );
}
