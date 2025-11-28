"use client"

import { motion } from "framer-motion"
import { MapPin, Calendar, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function OurWork() {
  const projects = [
    {
      title: "Schools of Hope - Kenya",
      location: "Nairobi, Kenya",
      category: "Education",
      date: "2023 - Ongoing",
      image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop",
      description: "Building 25 new schools and training 200+ teachers to provide quality education to 10,000 children in rural Kenya.",
      impact: "10,000 students enrolled, 200 teachers trained",
      status: "Active"
    },
    {
      title: "Clean Water Initiative - Ghana",
      location: "Ashanti Region, Ghana",
      category: "Water & Sanitation",
      date: "2022 - 2024",
      image: "https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=600&h=400&fit=crop",
      description: "Installing 50 deep water wells and sanitation facilities to serve 100,000 people in 30 villages.",
      impact: "75,000 people with clean water access",
      status: "Active"
    },
    {
      title: "Mobile Health Clinics - India",
      location: "Bihar, India",
      category: "Healthcare",
      date: "2021 - Ongoing",
      image: "https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop",
      description: "Operating 10 mobile clinics providing free healthcare, vaccinations, and maternal care in remote villages.",
      impact: "50,000+ patients treated annually",
      status: "Active"
    },
    {
      title: "Women's Empowerment Program - Bangladesh",
      location: "Dhaka, Bangladesh",
      category: "Education",
      date: "2023 - Ongoing",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
      description: "Vocational training and microfinance for 500 women to start small businesses and achieve economic independence.",
      impact: "500 women trained, 200 businesses started",
      status: "Active"
    },
    {
      title: "Emergency Relief - Philippines",
      location: "Manila, Philippines",
      category: "Emergency Response",
      date: "2023",
      image: "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=600&h=400&fit=crop",
      description: "Providing emergency shelter, food, and medical care to 5,000 families affected by typhoon disasters.",
      impact: "5,000 families supported",
      status: "Completed"
    },
    {
      title: "Digital Literacy Program - Uganda",
      location: "Kampala, Uganda",
      category: "Education",
      date: "2022 - 2024",
      image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop",
      description: "Establishing computer labs in 15 schools and training 3,000 students in digital skills and coding.",
      impact: "3,000 students, 15 computer labs",
      status: "Active"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Our Work Around the World
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover the projects and programs making a real difference in communities
              across 45 countries.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=1200&h=600&fit=crop"
              alt="Our work"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Creating Impact, Changing Lives</h2>
              <p className="text-lg">500+ active projects in communities worldwide</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap gap-3 justify-center">
            {["All Projects", "Education", "Healthcare", "Water & Sanitation", "Emergency Response"].map((filter, index) => (
              <motion.button
                key={filter}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  index === 0
                    ? "bg-primary text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {filter}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 right-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        project.status === "Active"
                          ? "bg-green-500 text-white"
                          : "bg-blue-500 text-white"
                      }`}>
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <CardHeader>
                    <div className="text-xs text-primary font-semibold mb-2">{project.category}</div>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription>
                      <div className="flex items-center gap-2 mt-2 text-sm">
                        <MapPin className="w-4 h-4" />
                        {project.location}
                      </div>
                      <div className="flex items-center gap-2 mt-1 text-sm">
                        <Calendar className="w-4 h-4" />
                        {project.date}
                      </div>
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 text-sm">
                      {project.description}
                    </p>
                    <div className="bg-primary/5 rounded-lg p-3 mb-4">
                      <div className="flex items-start gap-2">
                        <Users className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                        <div className="text-sm">
                          <div className="font-semibold text-gray-900">Impact</div>
                          <div className="text-gray-600">{project.impact}</div>
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" className="w-full group">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Global Reach
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our projects span across 45 countries in Africa, Asia, Latin America, and beyond
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[500px] bg-gray-100 rounded-3xl flex items-center justify-center overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?w=1200&h=600&fit=crop"
              alt="World map"
              fill
              className="object-cover opacity-50"
            />
            <div className="relative z-10 text-center">
              <div className="text-6xl font-bold text-gray-700 mb-2">45</div>
              <div className="text-xl text-gray-600">Countries Served</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real stories from the communities we serve
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Amina",
                location: "Kenya",
                story: "Thanks to the scholarship program, I'm now the first in my family to attend university.",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop"
              },
              {
                name: "Carlos",
                location: "Guatemala",
                story: "The clean water well changed everything. My children are healthier and attend school regularly.",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop"
              },
              {
                name: "Sita",
                location: "Nepal",
                story: "The mobile clinic saved my baby's life during a difficult delivery. I'm forever grateful.",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full bg-white hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="relative h-48 -mx-6 -mt-6 mb-4 rounded-t-lg overflow-hidden">
                      <Image
                        src={story.image}
                        alt={story.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{story.name}</CardTitle>
                    <CardDescription className="text-primary">{story.location}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 italic">"{story.story}"</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Be Part of Our Work
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your support makes these projects possible. Join us in creating positive change.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Support Our Projects
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/blog">
                <Button size="lg" variant="outline">
                  Read More Stories
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
