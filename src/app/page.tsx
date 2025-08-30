"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-black via-gray-900 to-black text-white min-h-screen scroll-smooth">
      {/* Navbar */}
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
          <a href="#pricing" className="hidden md:inline-block px-5 py-2 rounded-xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-32 md:py-40">
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold mt-6 bg-gradient-to-r from-pink-500 to-indigo-500 bg-clip-text text-transparent"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Create Videos. Instantly.
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-gray-300 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Movira transforms your text into cinematic videos with ease.
          Simple. Fast. Creative.
        </motion.p>
        <motion.div
          className="mt-8 flex gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <a href="#pricing" className="px-6 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-semibold transition">
            Get Started
          </a>
          <a href="#features" className="px-6 py-3 rounded-2xl bg-gray-800 hover:bg-gray-700 text-white font-semibold transition">
            Learn More
          </a>
        </motion.div>
      </section>

      {/* Features Section */}
      <section id="features" className="px-6 py-20 bg-gray-950">
        <h2 className="text-4xl font-bold text-center mb-12">Why Movira?</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            { title: "Text to Video", desc: "Turn scripts into stunning videos powered by AI and cinematic templates." },
            { title: "Media Library", desc: "Access stock footage, music, and effects to elevate your storytelling." },
            { title: "Export Anywhere", desc: "Download in 4K or share instantly to YouTube, TikTok, and social platforms." },
          ].map((feature, i) => (
            <motion.div
              key={i}
              className="p-6 bg-gray-900 rounded-2xl shadow-lg"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="px-6 py-20 bg-black">
        <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
          {[
            {
              title: "Starter",
              price: "$9/mo",
              perks: ["✔ 10 videos/month", "✔ Stock footage", "✔ 720p exports"],
              highlight: false,
            },
            {
              title: "Pro",
              price: "$29/mo",
              perks: ["✔ Unlimited videos", "✔ Full media library", "✔ 1080p & 4K exports"],
              highlight: true,
            },
            {
              title: "Business",
              price: "$99/mo",
              perks: ["✔ Team collaboration", "✔ Priority rendering", "✔ Branding tools"],
              highlight: false,
            },
          ].map((plan, i) => (
            <motion.div
              key={i}
              className={`p-8 rounded-2xl shadow-xl text-center ${
                plan.highlight
                  ? "bg-gradient-to-b from-pink-600 to-indigo-600"
                  : "bg-gray-900"
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2 text-gray-200">
                {plan.perks.map((perk, idx) => (
                  <li key={idx}>{perk}</li>
                ))}
              </ul>
              <a
                href="#"
                className={`px-6 py-3 rounded-2xl font-semibold transition ${
                  plan.highlight
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-pink-600 hover:bg-pink-700 text-white"
                }`}
              >
                {plan.highlight ? "Get Pro" : "Start Free Trial"}
              </a>
            </motion.div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-20 bg-gray-950 text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          About Movira
        </motion.h2>
        <motion.p
          className="text-gray-400 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          viewport={{ once: true }}
        >
          Movira was built for creators, businesses, and storytellers who want to
          create cinematic videos without the complexity of traditional editing tools.
          We blend creativity, simplicity, and cutting-edge AI technology to empower
          everyone to tell their story visually.
        </motion.p>
      </section>

      {/* Footer */}
      <footer className="px-6 py-10 bg-black border-t border-gray-800 text-center text-gray-500">
        <p>© {new Date().getFullYear()} Movira. All rights reserved.</p>
      </footer>
    </main>
  );
}
