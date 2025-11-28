"use client"

import { motion } from "framer-motion"
import { Heart, Stethoscope, Pill, Activity, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Image from "next/image"

export default function Healthcare() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-block p-3 bg-purple-100 rounded-2xl mb-4">
              <Heart className="w-12 h-12 text-purple-600" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Healthcare for All
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Providing accessible, quality healthcare services to underserved communities
              and ensuring every person has the opportunity to live a healthy life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=1200&h=600&fit=crop"
              alt="Healthcare workers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Healing Communities, Saving Lives</h2>
              <p className="text-lg">500,000+ treatments, 80+ clinics, countless lives saved</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "500K+", label: "Patients Treated", icon: Heart },
              { value: "80+", label: "Health Clinics", icon: Stethoscope },
              { value: "1,200+", label: "Medical Staff", icon: Activity },
              { value: "24/7", label: "Emergency Care", icon: Pill }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-purple-100 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-4xl font-bold text-purple-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Healthcare Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive medical care from prevention to treatment
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: "Primary Care",
                description: "General health checkups, preventive care, and treatment of common illnesses",
                image: "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&h=400&fit=crop",
                features: ["Regular health screenings", "Vaccination programs", "General consultations", "Chronic disease management"]
              },
              {
                title: "Maternal & Child Health",
                description: "Pre and postnatal care, child wellness programs, and family planning",
                image: "https://images.unsplash.com/photo-1584820927498-cfe5211fd8bf?w=600&h=400&fit=crop",
                features: ["Prenatal care", "Safe delivery services", "Newborn care", "Child nutrition programs"]
              },
              {
                title: "Emergency Services",
                description: "24/7 emergency care for urgent medical situations and trauma cases",
                image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&h=400&fit=crop",
                features: ["Ambulance services", "Emergency surgery", "Trauma care", "Intensive care units"]
              }
            ].map((service, index) => (
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
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardHeader>
                    <CardTitle className="text-2xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-gray-600">
                      {service.features.map((feature, idx) => (
                        <li key={idx}>✓ {feature}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Additional Services */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&h=400&fit=crop"
                    alt="Mobile clinics"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Mobile Health Clinics</CardTitle>
                  <CardDescription>Bringing healthcare to remote areas</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our mobile clinics travel to remote villages and underserved areas, providing
                    essential medical services to populations that lack access to traditional
                    healthcare facilities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Monthly visits to remote areas</li>
                    <li>✓ Free medications and treatments</li>
                    <li>✓ Health education programs</li>
                    <li>✓ Disease screening and prevention</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1584515933487-779824d29309?w=600&h=400&fit=crop"
                    alt="Mental health"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Mental Health Support</CardTitle>
                  <CardDescription>Caring for emotional and psychological wellbeing</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Mental health is just as important as physical health. We provide counseling,
                    therapy, and support groups to help individuals cope with stress, trauma, and
                    mental health challenges.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Individual counseling sessions</li>
                    <li>✓ Group therapy programs</li>
                    <li>✓ Crisis intervention services</li>
                    <li>✓ Community awareness campaigns</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-500/10 to-purple-500/5">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-xl"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  A Second Chance at Life
                </h3>
                <p className="text-gray-600 mb-4">
                  "When I fell ill, I thought it was the end. But the Hope Foundation's clinic
                  provided me with the care and medicine I needed, completely free. Today, I'm
                  healthy and back to work, supporting my family again."
                </p>
                <p className="text-gray-600 mb-6">
                  <strong className="text-gray-900">- James Okonkwo</strong>, Patient
                </p>
                <Button className="group">
                  Read More Stories
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
              <div className="relative h-80 rounded-2xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1582719471137-c3967ffb1c42?w=600&h=600&fit=crop"
                  alt="Patient success story"
                  fill
                  className="object-cover"
                />
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
              Support Our Healthcare Mission
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your contribution can provide life-saving medical care, medicines, and equipment
              to those who need it most.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="group">
                Donate for Healthcare
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button size="lg" variant="outline">
                Volunteer as Medical Staff
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
