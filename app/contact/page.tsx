"use client"

import { Mail, MapPin, Phone, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white via-green-50 to-white dark:from-black dark:via-green-950 dark:to-black text-gray-900 dark:text-white font-[Poppins] px-6 py-12 transition-colors duration-500">
      {/* Navbar */}
      <nav className="w-full bg-transparent py-5 z-50 relative">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <h1 className="text-3xl font-extrabold text-green-600 dark:text-green-400 drop-shadow-[0_0_20px_#00ff88]">
            KrishiMitra
          </h1>
          <ul className="hidden md:flex space-x-8 font-medium">
            <li>
              <a href="/" className="hover:text-green-600 dark:hover:text-green-400 transition-all text-gray-800 dark:text-gray-300">
                Home
              </a>
            </li>
            <li>
              <a href="/agribot" className="hover:text-green-600 dark:hover:text-green-400 transition-all text-gray-800 dark:text-gray-300">
                Prediction
              </a>
            </li>
            <li>
              <a href="/dashboard" className="hover:text-green-600 dark:hover:text-green-400 transition-all text-gray-800 dark:text-gray-300">
                Crop & Fertilizer
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-green-600 dark:hover:text-green-400 transition-all text-gray-800 dark:text-gray-300">
                Contact
              </a>
            </li><li>
              <a href="/about" className="hover:text-green-600 dark:hover:text-green-400 transition-all text-gray-800 dark:text-gray-300">
                About
              </a>
            </li>
            <ThemeToggle />
          </ul>
        </div>
      </nav>

      {/* Contact Header */}
      <section className="text-center mb-12">
        <h2 className="text-5xl font-extrabold text-green-600 dark:text-green-300 drop-shadow-[0_0_20px_#00ff88] mb-4">
          Get in Touch 🌾
        </h2>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
          Have questions, suggestions, or collaboration ideas? Reach out to the AgriBot team — we’d love to hear from you.
        </p>
      </section>

      {/* Contact Form + Info Section */}
      <section className="container mx-auto grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-gradient-to-br from-green-100/40 to-green-200/10 dark:from-green-900/20 dark:to-green-800/10 border border-green-300 dark:border-green-800/40 rounded-2xl shadow-[0_0_15px_#00ff88] hover:shadow-[0_0_25px_#00ff88] p-8 transition-all">
          <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-6">
            Send Us a Message
          </h3>
          <form className="space-y-5">
            <div>
              <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                Your Name
              </label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/50 border border-green-300 dark:border-green-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                Your Email
              </label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/50 border border-green-300 dark:border-green-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label className="block mb-2 text-sm text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                rows={4}
                className="w-full px-4 py-3 rounded-lg bg-white/70 dark:bg-black/50 border border-green-300 dark:border-green-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="Write your message..."
              />
            </div>

            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg text-lg flex items-center justify-center gap-2 shadow-[0_0_20px_#00ff88] hover:shadow-[0_0_35px_#00ff88] transition-all"
            >
              <Send className="w-5 h-5" /> Send Message
            </Button>
          </form>
        </div>

        {/* Contact Information */}
        <div className="flex flex-col justify-center space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-green-600 dark:text-green-400 mb-3">
              Contact Information
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              You can also reach out to us directly using the following details:
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-green-600 dark:text-green-400" />
              <span className="text-gray-700 dark:text-gray-300">
                123 AgriBot Street, Nagpur, India
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-green-600 dark:text-green-400" />
              <span className="text-gray-700 dark:text-gray-300">
                sgongshe@gmail.com
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-green-600 dark:text-green-400" />
              <span className="text-gray-700 dark:text-gray-300">
                +91 98765 43210
              </span>
            </div>
          </div>

          <div className="flex gap-6 pt-4">
            <a
              href="#"
              className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-all text-2xl"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-all text-2xl"
            >
              <i className="fab fa-linkedin"></i>
            </a>
            <a
              href="#"
              className="text-green-600 dark:text-green-400 hover:text-green-500 dark:hover:text-green-300 transition-all text-2xl"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center text-gray-600 dark:text-gray-500 mt-16 border-t border-green-300 dark:border-green-800/40 pt-6">
        <p>
          © {new Date().getFullYear()} KrishiMitra — Empowering Indian
          Agriculture with AI 🌾
        </p>
      </footer>
    </main>
  )
}
