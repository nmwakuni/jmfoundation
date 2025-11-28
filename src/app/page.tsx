"use client"

import { motion } from "framer-motion"
import { Users, Globe, TreePine, Droplets, GraduationCap, ArrowRight, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium"
              >
                Making a Difference Since 2010
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight mb-6"
              >
                Empowering Communities,
                <span className="text-primary block mt-2">
                  Changing Lives
                </span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 mb-8 leading-relaxed"
              >
                We're dedicated to creating sustainable change through education, healthcare,
                and environmental conservation. Join us in building a better tomorrow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="group">
                  Get Involved
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="mt-12 grid grid-cols-3 gap-8"
              >
                <div>
                  <div className="text-3xl font-bold text-primary">150K+</div>
                  <div className="text-sm text-gray-600">Lives Impacted</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">45+</div>
                  <div className="text-sm text-gray-600">Countries</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">500+</div>
                  <div className="text-sm text-gray-600">Projects</div>
                </div>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4 h-[600px]">
                <div className="relative rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=800&fit=crop"
                    alt="Children learning"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="space-y-4">
                  <div className="relative rounded-2xl overflow-hidden h-[280px]">
                    <Image
                      src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=600&h=400&fit=crop"
                      alt="Community gathering"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative rounded-2xl overflow-hidden h-[280px]">
                    <Image
                      src="https://images.unsplash.com/photo-1509099836639-18ba1795216d?w=600&h=400&fit=crop"
                      alt="Healthcare worker"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section */}
      <section id="programs" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Focus Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We work across multiple domains to create lasting impact in communities worldwide
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr"
          >
            {/* Large featured card */}
            <motion.div variants={fadeInUp} className="md:col-span-2 lg:row-span-2">
              <Card className="h-full bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 hover:shadow-xl transition-all duration-300 group cursor-pointer overflow-hidden">
                <CardHeader className="pb-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <CardTitle className="text-3xl">Education for All</CardTitle>
                  <CardDescription className="text-base">
                    Empowering the next generation through quality education
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    We've established 200+ schools and learning centers, providing education to over
                    50,000 children in underserved communities. Our holistic approach includes
                    teacher training, digital literacy programs, and scholarship opportunities.
                  </p>
                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <div className="bg-white/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">50K+</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="bg-white/50 rounded-lg p-4">
                      <div className="text-2xl font-bold text-primary">200+</div>
                      <div className="text-sm text-gray-600">Schools</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Smaller cards */}
            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-blue-200 bg-gradient-to-br from-blue-50 to-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Droplets className="w-7 h-7 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">Clean Water</CardTitle>
                  <CardDescription>
                    Providing access to safe drinking water
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600">1M+</div>
                  <div className="text-sm text-gray-600">People Served</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-green-200 bg-gradient-to-br from-green-50 to-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <TreePine className="w-7 h-7 text-green-600" />
                  </div>
                  <CardTitle className="text-xl">Reforestation</CardTitle>
                  <CardDescription>
                    Fighting climate change one tree at a time
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600">2.5M</div>
                  <div className="text-sm text-gray-600">Trees Planted</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-purple-200 bg-gradient-to-br from-purple-50 to-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Heart className="w-7 h-7 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Healthcare</CardTitle>
                  <CardDescription>
                    Ensuring health and wellbeing for all
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600">500K+</div>
                  <div className="text-sm text-gray-600">Treatments</div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp} className="md:col-span-2">
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-orange-200 bg-gradient-to-br from-orange-50 to-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Globe className="w-7 h-7 text-orange-600" />
                  </div>
                  <CardTitle className="text-2xl">Global Partnerships</CardTitle>
                  <CardDescription>
                    Collaborating with organizations worldwide to maximize our impact
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex gap-8">
                    <div>
                      <div className="text-3xl font-bold text-orange-600">150+</div>
                      <div className="text-sm text-gray-600">Partner Organizations</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-orange-600">45</div>
                      <div className="text-sm text-gray-600">Countries</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-pink-200 bg-gradient-to-br from-pink-50 to-white">
                <CardHeader>
                  <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                    <Users className="w-7 h-7 text-pink-600" />
                  </div>
                  <CardTitle className="text-xl">Community</CardTitle>
                  <CardDescription>
                    Building stronger, resilient communities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-pink-600">10K+</div>
                  <div className="text-sm text-gray-600">Volunteers</div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats Section */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary to-primary/80 text-white overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              Our Impact in Numbers
            </h2>
            <p className="text-xl text-primary-foreground/90 max-w-2xl mx-auto">
              Real change, real numbers, real impact on communities worldwide
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              { value: "150,000+", label: "Lives Transformed" },
              { value: "$25M+", label: "Funds Raised" },
              { value: "98%", label: "Success Rate" },
              { value: "24/7", label: "Support Available" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
                  className="text-4xl md:text-5xl font-bold mb-2"
                >
                  {stat.value}
                </motion.div>
                <div className="text-primary-foreground/90">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your contribution can change lives. Join thousands of supporters in our mission
              to create a better world for everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Donate Now
                <Heart className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Become a Volunteer
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
