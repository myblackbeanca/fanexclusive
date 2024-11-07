"use client";

import { Button } from "@/components/ui/button";

export function HeroSection() {
  const handleGetStarted = () => {
    window.location.href = 'https://buy.stripe.com/3cs4h11EbfLL94A28g';
  };

  return (
    <section className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1514525253161-7a46d19cd819?auto=format&fit=crop&w=2000"
          alt="Hero background"
          className="w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent" />
      </div>
      
      <div className="relative container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Step into the Heart of Music with Exclusive Access</h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-300">Join MINY Exclusives to unlock behind-the-scenes moments, special previews, and interactive fan experiences.</p>
        <Button 
          size="lg" 
          className="bg-purple-600 hover:bg-purple-700"
          onClick={handleGetStarted}
        >
          Get Started with MINY Exclusives
        </Button>
      </div>
    </section>
  );
}