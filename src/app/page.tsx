"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-10 py-6">
        <div className="flex items-center space-x-3">
          <Image src="/logo.svg" alt="Movira Logo" width={160} height={50} priority />
        </div>
        <div className="space-x-6 hidden md:flex">
          <a href="#features" className="hover:text-pink-400 transition">Features</a>
          <a href="#pricing" className="hover:text-pink-400 transition">Pricing</a>
          <a href="#about" className="hover:text-pink-400 transition">About</a>
        </div>
        <button className="bg-gradient-to-r from-pink-500 to-indigo-500 px-6 py-2 rounded-full font-semibold hover:opacity-90 transition">
          Get Started
        </button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-28 px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Create Cinematic Videos with AI
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Movira helps you turn ideas into stunning videos in seconds. From script to screen, powered by AI.
        </motion.p>
        <motion.div
          className="mt-10 flex gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <button className="bg-gradient-to-r from-pink-500 to-indigo-500 px-8 py-3 rounded-full font-semibold hover:opacity-90 transition">
            Start Creating
          </button>
          <button className="border border-gray-600 px-8 py-3 rounded-full font-semibold hover:border-pink-400 transition">
            Watch Demo
          </button>
        </motion.div>
      </section>
    </main>
  );
}
