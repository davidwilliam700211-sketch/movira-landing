export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white px-6">
      {/* Hero Section */}
      <section className="text-center max-w-3xl">
        <h1 className="text-6xl md:text-7xl font-extrabold tracking-tight">
          Movira
        </h1>
        <p className="mt-6 text-xl md:text-2xl text-gray-300 leading-relaxed">
          Transform your ideas into <span className="text-purple-400">cinematic videos</span> in seconds.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#"
            className="px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-2xl font-semibold text-lg shadow-lg transition"
          >
            Get Started
          </a>
          <a
            href="#"
            className="px-8 py-4 border border-gray-600 hover:border-purple-400 rounded-2xl font-semibold text-lg transition"
          >
            Learn More
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="mt-24 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-5xl">
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-2xl font-bold mb-4">AI-Powered Creation</h3>
          <p className="text-gray-400">
            Generate videos instantly from text prompts with cutting-edge AI models.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-2xl font-bold mb-4">Cinematic Quality</h3>
          <p className="text-gray-400">
            Stunning visuals, smooth animations, and professional storytelling tools.
          </p>
        </div>
        <div className="bg-gray-800 p-8 rounded-2xl shadow-md hover:shadow-purple-500/20 transition">
          <h3 className="text-2xl font-bold mb-4">Instant Export</h3>
          <p className="text-gray-400">
            Download and share your videos in HD with one click.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-24 text-gray-500 text-sm text-center">
        © {new Date().getFullYear()} Movira. All rights reserved.
      </footer>
    </main>
  )
}
