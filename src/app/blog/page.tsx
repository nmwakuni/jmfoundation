"use client"

import { motion } from "framer-motion"
import { Calendar, User, ArrowRight, Tag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Blog() {
  const featuredPost = {
    title: "New School Opens in Rural Kenya, Serving 500 Students",
    excerpt: "After two years of construction and community collaboration, our 25th school in Kenya opened its doors this month, providing quality education to 500 children who previously had to walk 10 kilometers to the nearest school.",
    author: "Sarah Johnson",
    date: "November 15, 2024",
    category: "Education",
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=1200&h=600&fit=crop",
    readTime: "5 min read"
  }

  const blogPosts = [
    {
      title: "Mobile Clinic Reaches Remote Villages in Nepal",
      excerpt: "Our new mobile health clinic has completed its first month of operations, treating over 1,000 patients in remote Himalayan villages.",
      author: "Dr. Amara Okafor",
      date: "November 10, 2024",
      category: "Healthcare",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      title: "Clean Water Initiative Expands to 10 New Villages",
      excerpt: "Thanks to generous donors, we're drilling 15 new wells that will provide clean water access to 25,000 people in Ghana.",
      author: "Priya Sharma",
      date: "November 5, 2024",
      category: "Water & Sanitation",
      image: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=600&h=400&fit=crop",
      readTime: "3 min read"
    },
    {
      title: "Volunteer Spotlight: Meet David's Journey from Teacher to Director",
      excerpt: "How a volunteer teacher became our Director of Education Programs and transformed lives across three continents.",
      author: "Hope Foundation Team",
      date: "November 1, 2024",
      category: "Team Stories",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=600&h=400&fit=crop",
      readTime: "6 min read"
    },
    {
      title: "Digital Literacy Program Graduates 500 Students",
      excerpt: "Our computer training centers in Uganda have graduated their 500th student, equipping young people with crucial tech skills.",
      author: "Michael Rodriguez",
      date: "October 28, 2024",
      category: "Education",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      title: "Community Gardens Transform Nutrition in Bangladesh",
      excerpt: "Local families are growing their own vegetables thanks to our agricultural training program, improving food security.",
      author: "Hope Foundation Team",
      date: "October 25, 2024",
      category: "Community Development",
      image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "Emergency Response Team Deploys to Philippines",
      excerpt: "Our rapid response team is on the ground providing emergency shelter and medical care following recent typhoon disasters.",
      author: "Sarah Johnson",
      date: "October 20, 2024",
      category: "Emergency Response",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
      readTime: "4 min read"
    },
    {
      title: "Women's Empowerment: 200 Businesses Launched",
      excerpt: "Our microfinance and training program has helped 200 women entrepreneurs start successful businesses in their communities.",
      author: "Hope Foundation Team",
      date: "October 15, 2024",
      category: "Economic Empowerment",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      readTime: "5 min read"
    },
    {
      title: "Annual Report 2024: A Year of Impact",
      excerpt: "Looking back at an incredible year of growth, impact, and lives changed across 45 countries.",
      author: "Sarah Johnson",
      date: "October 10, 2024",
      category: "Annual Report",
      image: "https://images.unsplash.com/photo-1532619187608-e5375cab36aa?w=600&h=400&fit=crop",
      readTime: "10 min read"
    },
    {
      title: "Partnership Announcement: Expanding Education Access",
      excerpt: "We're excited to announce a new partnership that will help us build 50 more schools over the next three years.",
      author: "David Chen",
      date: "October 5, 2024",
      category: "Partnerships",
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&h=400&fit=crop",
      readTime: "3 min read"
    }
  ]

  const categories = [
    "All Posts",
    "Education",
    "Healthcare",
    "Water & Sanitation",
    "Community Development",
    "Emergency Response",
    "Team Stories",
    "Partnerships"
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Stories from the Field
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Updates, stories, and insights from our projects around the world
            </p>
          </motion.div>

          {/* Featured Post */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Card className="overflow-hidden hover:shadow-2xl transition-all border-none">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative h-[400px] md:h-auto">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-1.5 bg-primary text-white rounded-full text-sm font-semibold">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full font-medium">
                      {featuredPost.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    {featuredPost.title}
                  </h2>
                  <p className="text-lg text-gray-600 mb-6">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </div>
                    <Button className="group">
                      Read Full Story
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white sticky top-16 z-40 shadow-sm">
        <div className="max-w-7xl mx-auto">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`px-5 py-2 rounded-full font-medium whitespace-nowrap transition-all ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all cursor-pointer">
                  <div className="relative h-56">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-3 text-xs text-gray-600 mb-2">
                      <span className="px-2 py-1 bg-primary/10 text-primary rounded font-medium">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {post.date}
                      </span>
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2 text-gray-600">
                        <User className="w-4 h-4" />
                        <span className="truncate">{post.author}</span>
                      </div>
                      <span className="text-gray-500">{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button size="lg" variant="outline" className="group">
              Load More Stories
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest stories and updates from the field
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Button size="lg">
                Subscribe
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
