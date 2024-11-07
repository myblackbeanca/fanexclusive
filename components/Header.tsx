"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function Header() {
  const [isAuthOpen, setIsAuthOpen] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSignIn = () => {
    // Here you would implement the SMS authentication logic
    console.log("Sending login link to:", phoneNumber);
    setIsAuthOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="text-xl font-bold text-white">
              MINY
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link 
                href="https://minyfy.subwaymusician.xyz/catalog" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                Mixtapes
              </Link>
              <a 
                href="https://twitter.com/minyvinyl" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-gray-300 hover:text-white transition-colors"
              >
                @minyvinyl
              </a>
              <Button 
                className="bg-purple-600 hover:bg-purple-700"
                onClick={() => setIsAuthOpen(true)}
              >
                Sign In
              </Button>
            </nav>

            <Button variant="ghost" size="icon" className="md:hidden text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </header>

      <Dialog open={isAuthOpen} onOpenChange={setIsAuthOpen}>
        <DialogContent className="sm:max-w-[425px] bg-zinc-900 text-white">
          <DialogHeader>
            <DialogTitle>Sign in with your phone number</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <Input
              type="tel"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="bg-zinc-800 border-zinc-700"
            />
            <Button onClick={handleSignIn} className="bg-purple-600 hover:bg-purple-700">
              Send Login Link
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}