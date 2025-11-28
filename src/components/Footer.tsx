"use client"

import { Heart } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-gray-300 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-6 h-6 text-primary fill-primary" />
              <span className="text-xl font-bold text-white">Hope Foundation</span>
            </div>
            <p className="text-sm">
              Creating positive change in communities worldwide since 2010.
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/our-work" className="hover:text-primary transition-colors">Our Work</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Programs</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/education" className="hover:text-primary transition-colors">Education</Link></li>
              <li><Link href="/healthcare" className="hover:text-primary transition-colors">Healthcare</Link></li>
              <li><Link href="/water-sanitation" className="hover:text-primary transition-colors">Water & Sanitation</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>info@hopefoundation.org</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Hope Street</li>
              <li>New York, NY 10001</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm">
          <p>&copy; 2024 Hope Foundation. All rights reserved. Built with ❤️ for a better tomorrow.</p>
        </div>
      </div>
    </footer>
  )
}
