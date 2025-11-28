"use client"

import { motion } from "framer-motion"
import { Heart, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Link from "next/link"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Heart className="w-8 h-8 text-primary fill-primary" />
              <span className="text-xl font-bold text-gray-900">Hope Foundation</span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              <Link href="/" className="text-gray-700 hover:text-primary transition-colors">Home</Link>
              <Link href="/about" className="text-gray-700 hover:text-primary transition-colors">About Us</Link>
              <Link href="/our-work" className="text-gray-700 hover:text-primary transition-colors">Our Work</Link>
              <div className="relative group">
                <button className="text-gray-700 hover:text-primary transition-colors">
                  Programs
                </button>
                <div className="absolute top-full left-0 mt-2 w-48 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                  <Link href="/education" className="block px-4 py-2 hover:bg-gray-50">Education</Link>
                  <Link href="/healthcare" className="block px-4 py-2 hover:bg-gray-50">Healthcare</Link>
                  <Link href="/water-sanitation" className="block px-4 py-2 hover:bg-gray-50">Water & Sanitation</Link>
                </div>
              </div>
              <Link href="/blog" className="text-gray-700 hover:text-primary transition-colors">Blog</Link>
              <Link href="/contact" className="text-gray-700 hover:text-primary transition-colors">Contact</Link>
              <Link href="/contact">
                <Button size="sm">Donate Now</Button>
              </Link>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="fixed top-16 left-0 right-0 z-40 bg-white border-b shadow-lg md:hidden"
        >
          <div className="px-4 py-4 space-y-3">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary transition-colors">Home</Link>
            <Link href="/about" className="block py-2 text-gray-700 hover:text-primary transition-colors">About Us</Link>
            <Link href="/our-work" className="block py-2 text-gray-700 hover:text-primary transition-colors">Our Work</Link>
            <div className="pl-4 space-y-2">
              <div className="text-sm font-semibold text-gray-500">Programs</div>
              <Link href="/education" className="block py-2 text-gray-700 hover:text-primary transition-colors">Education</Link>
              <Link href="/healthcare" className="block py-2 text-gray-700 hover:text-primary transition-colors">Healthcare</Link>
              <Link href="/water-sanitation" className="block py-2 text-gray-700 hover:text-primary transition-colors">Water & Sanitation</Link>
            </div>
            <Link href="/blog" className="block py-2 text-gray-700 hover:text-primary transition-colors">Blog</Link>
            <Link href="/contact" className="block py-2 text-gray-700 hover:text-primary transition-colors">Contact</Link>
            <Link href="/contact">
              <Button size="sm" className="w-full">Donate Now</Button>
            </Link>
          </div>
        </motion.div>
      )}
    </>
  )
}
