"use client"

import { motion } from "framer-motion"
import { Target, Eye, Heart, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function About() {
  const teamMembers = [
    {
      name: "Sarah Johnson",
      role: "Founder & CEO",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop",
      bio: "30+ years in international development"
    },
    {
      name: "David Chen",
      role: "Director of Programs",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop",
      bio: "Expert in sustainable development"
    },
    {
      name: "Amara Okafor",
      role: "Healthcare Lead",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop",
      bio: "MD with global health expertise"
    },
    {
      name: "Michael Rodriguez",
      role: "Education Director",
      image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop",
      bio: "Former teacher, curriculum designer"
    },
    {
      name: "Priya Sharma",
      role: "Water Projects Lead",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
      bio: "Civil engineer, water specialist"
    },
    {
      name: "James Wilson",
      role: "Fundraising Director",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
      bio: "20+ years in nonprofit fundraising"
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
              About Hope Foundation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Since 2010, we've been dedicated to creating sustainable positive change in
              communities worldwide through education, healthcare, and essential services.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=1200&h=600&fit=crop"
              alt="Our team"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Together, We Create Change</h2>
              <p className="text-lg">A global team united by a common purpose</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Our Mission",
                description: "To empower underserved communities worldwide through sustainable programs in education, healthcare, and essential services, creating lasting positive change and breaking cycles of poverty."
              },
              {
                icon: Eye,
                title: "Our Vision",
                description: "A world where every person has access to quality education, healthcare, clean water, and the opportunity to reach their full potential regardless of their circumstances."
              },
              {
                icon: Heart,
                title: "Our Values",
                description: "Compassion, integrity, sustainability, community empowerment, transparency, and excellence in everything we do. We believe in partnerships and locally-driven solutions."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full border-t-4 border-t-primary hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                      <item.icon className="w-7 h-7 text-primary" />
                    </div>
                    <CardTitle className="text-2xl">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Hope Foundation was born in 2010 from a simple belief: that every person
                  deserves access to basic necessities like education, healthcare, and clean
                  water. What started as a small group of volunteers has grown into a global
                  organization touching lives in 45 countries.
                </p>
                <p>
                  Our founder, Sarah Johnson, witnessed firsthand the struggles of communities
                  lacking access to basic services during her time as a Peace Corps volunteer.
                  She returned home determined to make a difference, and Hope Foundation was born.
                </p>
                <p>
                  Today, we work with local partners, governments, and communities to implement
                  sustainable solutions that create lasting change. We've served over 150,000
                  people, built 200+ schools, established 80+ health clinics, and provided clean
                  water access to more than 1 million people.
                </p>
                <p>
                  But our work is far from over. Every day, we're inspired by the resilience and
                  potential of the communities we serve, and we're committed to expanding our
                  reach to help even more people build better futures.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=400&fit=crop"
                  alt="Our work"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-64 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop"
                  alt="Community"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Meet Our Leadership Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Dedicated professionals committed to making a difference
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-xl transition-all overflow-hidden group">
                  <div className="relative h-80">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <CardDescription className="text-primary font-semibold">{member.role}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{member.bio}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Impact Since 2010
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Numbers that represent real lives changed and communities transformed
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "150,000+", label: "Lives Impacted" },
              { value: "200+", label: "Schools Built" },
              { value: "80+", label: "Health Clinics" },
              { value: "1M+", label: "Clean Water Access" },
              { value: "45", label: "Countries" },
              { value: "10K+", label: "Volunteers" },
              { value: "$25M+", label: "Funds Raised" },
              { value: "500+", label: "Projects Completed" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
                <div className="text-primary-foreground/90">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Partners
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We collaborate with leading organizations to maximize our impact
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: item * 0.05, duration: 0.5 }}
                className="h-24 bg-gray-100 rounded-lg flex items-center justify-center text-gray-400 text-sm font-semibold"
              >
                Partner Logo {item}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
