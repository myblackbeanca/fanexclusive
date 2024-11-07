"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";
import { useState } from "react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
  };

  return (
    <footer className="py-12 bg-black/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <div className="flex space-x-4">
              <a 
                href="https://twitter.com/minyvinyl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                @minyvinyl
              </a>
            </div>
            <div className="mt-4">
              <a 
                href="https://drop.minyvinyl.com" 
                className="text-purple-400 hover:text-purple-300 transition-colors"
              >
                Artists: Join here
              </a>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Subscribe to Newsletter</h3>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/10"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button onClick={handleSubscribe}>
                <Mail className="w-4 h-4 mr-2" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}