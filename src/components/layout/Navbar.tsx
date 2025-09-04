"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-black/60 backdrop-blur-md border-b border-gray-800 z-50">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Image src="/logo.svg" alt="Movira Logo" width={120} height={40} priority />
        </div>

        {/* Nav Links */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">
          <a href="#features" className="hover:text-white transition">Features</a>
          <a href="#pricing" className="hover:text-white transition">Pricing</a>
          <a href="#about" className="hover:text-white transition">About</a>
        </div>

        {/* CTA */}
        <div className="hidden md:flex gap-4">
          <a href="/login">
            <Button variant="ghost">Login</Button>
          </a>
          <a href="/signup">
            <Button variant="primary">Get Started</Button>
          </a>
        </div>
      </div>
    </nav>
  );
}
