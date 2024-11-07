"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Sparkles, Music, Video, Users } from "lucide-react";

export function SubscriptionSection() {
  const handleSubscribe = () => {
    window.location.href = 'https://buy.stripe.com/3cs4h11EbfLL94A28g';
  };

  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 to-black/20" />
      <div className="container mx-auto px-4 relative">
        <h2 className="text-4xl font-bold mb-12 text-center">Access Exclusives</h2>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          className="max-w-md mx-auto bg-gradient-to-br from-purple-900/40 to-black/40 rounded-2xl backdrop-blur-sm p-8 border border-purple-500/20 shadow-2xl"
        >
          <div className="text-center mb-8">
            <div className="text-purple-400 text-lg mb-2 font-medium">Support Indie Artists</div>
            <div className="text-4xl font-bold mb-2">$4.99<span className="text-xl">/month</span></div>
            <div className="text-gray-400">or $49.99/year (save 16%)</div>
          </div>

          <div className="space-y-4 mb-8">
            <div className="flex items-center space-x-3 text-gray-300">
              <Sparkles className="w-5 h-5 text-purple-400" />
              <span>Exclusive behind-the-scenes content</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Music className="w-5 h-5 text-purple-400" />
              <span>Early access to new releases</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Video className="w-5 h-5 text-purple-400" />
              <span>Exclusive video content</span>
            </div>
            <div className="flex items-center space-x-3 text-gray-300">
              <Users className="w-5 h-5 text-purple-400" />
              <span>Direct artist interactions</span>
            </div>
          </div>

          <Button 
            onClick={handleSubscribe}
            className="w-full bg-purple-600 hover:bg-purple-700 text-lg py-6 rounded-xl transition-all duration-300 transform hover:scale-[1.02]"
          >
            Subscribe Now
          </Button>
          <p className="text-center text-sm text-gray-400 mt-4">Limited time offer - Save 16% annually</p>
        </motion.div>
      </div>
    </section>
  );
}