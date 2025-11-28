"use client"

import { motion } from "framer-motion"
import { Droplets, Waves, Home, Sparkles, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function WaterSanitation() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-3 bg-blue-100 rounded-2xl mb-4">
              <Droplets className="w-12 h-12 text-blue-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Clean Water & Sanitation
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing access to safe, clean water and proper sanitation facilities to improve
              health and dignity in underserved communities.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=1200&h=600&fit=crop"
              alt="Clean water access"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Every Drop Matters</h2>
              <p className="text-lg">1M+ people served with clean water access</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "1M+", label: "People Served", icon: Droplets },
              { value: "350+", label: "Wells Constructed", icon: Waves },
              { value: "500+", label: "Sanitation Facilities", icon: Home },
              { value: "100%", label: "Clean Water Access", icon: Sparkles }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-blue-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                The Water Crisis
              </h2>
              <p className="text-lg text-gray-600 mb-4">
                Over 2 billion people worldwide lack access to safe drinking water, and
                nearly half the global population lacks proper sanitation facilities.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Waterborne diseases are responsible for millions of preventable deaths each
                year, particularly affecting children under five. Access to clean water and
                sanitation is fundamental to breaking the cycle of poverty and disease.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Disease prevention through clean water access</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Time saved from water collection for education and work</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Improved dignity and privacy with proper sanitation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-blue-600 mr-2">✓</span>
                  <span>Economic development through better health outcomes</span>
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <Image
                src="https://images.unsplash.com/photo-1594398901394-4e34939a4fd0?w=600&h=800&fit=crop"
                alt="Water collection"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Water & Sanitation Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Sustainable solutions for lasting impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Well Construction",
                description: "Building deep wells to provide reliable access to clean groundwater",
                image: "https://images.unsplash.com/photo-1625806786037-2af608423424?w=600&h=400&fit=crop",
                features: ["Deep borehole drilling", "Hand pump installation", "Community ownership", "Regular maintenance"]
              },
              {
                title: "Water Purification",
                description: "Installing filtration systems to ensure water safety and quality",
                image: "https://images.unsplash.com/photo-1585567540965-b5e87c389922?w=600&h=400&fit=crop",
                features: ["Advanced filtration systems", "UV treatment facilities", "Regular water testing", "Quality monitoring"]
              },
              {
                title: "Rainwater Harvesting",
                description: "Teaching communities to collect and store rainwater sustainably",
                image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=600&h=400&fit=crop",
                features: ["Collection tank installation", "Rooftop harvesting systems", "Storage solutions", "Community training"]
              },
              {
                title: "Toilet Facilities",
                description: "Building safe, hygienic sanitation facilities in schools and communities",
                image: "https://images.unsplash.com/photo-1620626011761-996317b8d101?w=600&h=400&fit=crop",
                features: ["Eco-friendly toilets", "Separate facilities for women", "Handwashing stations", "Waste management systems"]
              },
              {
                title: "Hygiene Education",
                description: "Teaching proper hygiene practices to prevent disease transmission",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?w=600&h=400&fit=crop",
                features: ["Handwashing campaigns", "School hygiene programs", "Community workshops", "Health education materials"]
              },
              {
                title: "Water Committees",
                description: "Empowering communities to manage and maintain their water systems",
                image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&h=400&fit=crop",
                features: ["Leadership training", "Maintenance skills", "Financial management", "Sustainability planning"]
              }
            ].map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full overflow-hidden group hover:shadow-xl transition-all">
                  <div className="relative h-56">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl">{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {program.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-500/10 to-blue-500/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&h=600&fit=crop"
                  alt="Community impact"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  A Village Transformed
                </h3>
                <p className="text-gray-600 mb-4">
                  "Before the well was built, we walked 5 kilometers every day to fetch water.
                  Now, we have clean water right in our village. My daughters can go to school
                  instead of spending hours collecting water."
                </p>
                <p className="text-gray-600 mb-6">
                  <strong className="text-gray-900">- Fatima Ahmed</strong>, Village Elder
                </p>
                <Button className="group">
                  Read More Stories
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          </motion.div>
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
              Bring Clean Water to a Community
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your donation can provide an entire village with access to clean, safe water
              for generations to come.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Fund a Well
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Learn About Our Projects
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
