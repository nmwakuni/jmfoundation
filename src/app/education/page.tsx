"use client"

import { motion } from "framer-motion"
import { GraduationCap, BookOpen, Users, Award, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"

export default function Education() {
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
            <div className="inline-block p-3 bg-primary/10 rounded-2xl mb-4">
              <GraduationCap className="w-12 h-12 text-primary" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Education for All
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Empowering the next generation through quality education and creating opportunities
              for children in underserved communities around the world.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="relative h-[500px] rounded-3xl overflow-hidden"
          >
            <Image
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&h=600&fit=crop"
              alt="Children in classroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
              <h2 className="text-3xl font-bold mb-2">Building Futures Through Learning</h2>
              <p className="text-lg">200+ schools, 50,000+ students, endless possibilities</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "50,000+", label: "Students Educated", icon: Users },
              { value: "200+", label: "Schools Built", icon: BookOpen },
              { value: "1,500+", label: "Teachers Trained", icon: Award },
              { value: "45", label: "Countries", icon: GraduationCap }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
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
              Our Education Programs
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive programs designed to provide quality education at every level
            </p>
          </motion.div>

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
                    src="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=600&h=400&fit=crop"
                    alt="Primary education"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Primary Education</CardTitle>
                  <CardDescription>Building strong foundations for young learners</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our primary education program focuses on literacy, numeracy, and critical thinking
                    skills. We provide schools with modern teaching materials, trained educators, and
                    a curriculum that prepares children for future success.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Modern classroom facilities</li>
                    <li>✓ Qualified teachers and ongoing training</li>
                    <li>✓ Free learning materials and books</li>
                    <li>✓ Nutritious school meals program</li>
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
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop"
                    alt="Secondary education"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Secondary & Higher Education</CardTitle>
                  <CardDescription>Preparing students for college and careers</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    We support talented students through secondary school and beyond with
                    scholarships, mentorship programs, and career guidance to help them reach
                    their full potential and give back to their communities.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Scholarship programs for talented students</li>
                    <li>✓ STEM education initiatives</li>
                    <li>✓ Career counseling and mentorship</li>
                    <li>✓ University partnerships</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="h-full overflow-hidden group hover:shadow-xl transition-all">
                <div className="relative h-64">
                  <Image
                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&h=400&fit=crop"
                    alt="Digital literacy"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Digital Literacy</CardTitle>
                  <CardDescription>Preparing students for the digital age</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    In today's connected world, digital skills are essential. We provide computer
                    labs, internet access, and training in digital tools to ensure students are
                    prepared for the modern workforce.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Computer labs in every school</li>
                    <li>✓ Coding and programming courses</li>
                    <li>✓ Internet connectivity</li>
                    <li>✓ Digital learning platforms</li>
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
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=600&h=400&fit=crop"
                    alt="Teacher training"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Teacher Training</CardTitle>
                  <CardDescription>Investing in educators for better outcomes</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Great teachers create great students. Our teacher training programs focus on
                    modern pedagogy, classroom management, and subject expertise to ensure every
                    child receives quality instruction.
                  </p>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li>✓ Continuous professional development</li>
                    <li>✓ Workshops and seminars</li>
                    <li>✓ Teaching resource materials</li>
                    <li>✓ Peer learning networks</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Story */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-primary/5">
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
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&h=600&fit=crop"
                  alt="Success story"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  From Student to Doctor: Maria's Journey
                </h3>
                <p className="text-gray-600 mb-4">
                  "Without the Hope Foundation's scholarship program, I would never have been able
                  to attend university. Today, I'm a practicing doctor serving my community, and I
                  owe it all to the education I received."
                </p>
                <p className="text-gray-600 mb-6">
                  <strong className="text-gray-900">- Dr. Maria Santos</strong>, Class of 2015
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
              Help Us Educate More Children
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your donation can provide a child with books, school supplies, and the education
              they need to build a brighter future.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg" className="group">
                  Sponsor a Child
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Volunteer as a Teacher
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
