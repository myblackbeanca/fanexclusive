"use client";

import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import Link from "next/link";

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/50 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="text-xl font-bold text-white">
            MINY
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="#mixtapes" className="text-gray-300 hover:text-white transition-colors">
              Mixtapes
            </Link>
            <Link href="#artists" className="text-gray-300 hover:text-white transition-colors">
              Artists
            </Link>
            <Link href="#pricing" className="text-gray-300 hover:text-white transition-colors">
              Pricing
            </Link>
            <Button className="bg-purple-600 hover:bg-purple-700">
              Sign In
            </Button>
          </nav>

          <Button variant="ghost" size="icon" className="md:hidden text-white">
            <Menu className="w-6 h-6" />
          </Button>
        </div>
      </div>
    </header>
  );
}