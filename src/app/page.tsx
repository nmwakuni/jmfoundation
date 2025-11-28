"use client"

import { motion } from "framer-motion"
import { Users, Globe, TreePine, Droplets, GraduationCap, ArrowRight, Heart, BookOpen } from "lucide-react"
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

      {/* Our Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-white to-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-block px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-semibold mb-4">
                Our Mission
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Breaking the Cycle of Poverty Through Sustainable Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 2010, Hope Foundation has been committed to creating lasting change in
                underserved communities worldwide. We believe that access to quality education,
                healthcare, and clean water are fundamental human rights, not privileges.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our approach is community-driven and sustainable. We work alongside local
                partners to design solutions that address root causes, not just symptoms.
                Every project is built to last, empowering communities to maintain and grow
                their progress long after we've moved on.
              </p>
              <div className="grid grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Users className="w-8 h-8 text-primary" />
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">Community-Led</div>
                  <p className="text-sm text-gray-600">Local voices guide our work</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Globe className="w-8 h-8 text-primary" />
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">Sustainable</div>
                  <p className="text-sm text-gray-600">Built to last generations</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-3">
                    <Heart className="w-8 h-8 text-primary fill-primary" />
                  </div>
                  <div className="font-semibold text-gray-900 mb-1">Transparent</div>
                  <p className="text-sm text-gray-600">Every dollar tracked</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&h=500&fit=crop"
                      alt="Children learning"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=400&h=300&fit=crop"
                      alt="Community work"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-12">
                  <div className="relative h-48 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=400&h=300&fit=crop"
                      alt="Healthcare"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden">
                    <Image
                      src="https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?w=400&h=500&fit=crop"
                      alt="Community gathering"
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

      {/* Our Focus Areas Section - Redesigned */}
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
              Three core pillars driving sustainable change in communities worldwide
            </p>
          </motion.div>

          {/* Main Program Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Link href="/education">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer border-primary/20 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=400&fit=crop"
                      alt="Education"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center mb-3">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">Education</h3>
                      <p className="text-white/90 text-sm">Building futures through learning</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-4">
                      Empowering the next generation through quality education, teacher training,
                      and digital literacy programs.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-primary/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary">50K+</div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                      <div className="bg-primary/5 rounded-lg p-3">
                        <div className="text-2xl font-bold text-primary">200+</div>
                        <div className="text-xs text-gray-600">Schools</div>
                      </div>
                    </div>
                    <div className="flex items-center text-primary font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Link href="/healthcare">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer border-purple-200 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1631815589968-fdb09a223b1e?w=600&h=400&fit=crop"
                      alt="Healthcare"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-3">
                        <Heart className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">Healthcare</h3>
                      <p className="text-white/90 text-sm">Healing communities, saving lives</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-4">
                      Providing accessible healthcare services, mobile clinics, and maternal care
                      to underserved populations.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-purple-600">500K+</div>
                        <div className="text-xs text-gray-600">Treatments</div>
                      </div>
                      <div className="bg-purple-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-purple-600">80+</div>
                        <div className="text-xs text-gray-600">Clinics</div>
                      </div>
                    </div>
                    <div className="flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Link href="/water-sanitation">
                <Card className="h-full hover:shadow-2xl transition-all duration-300 group cursor-pointer border-blue-200 overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src="https://images.unsplash.com/photo-1541844053589-346841d0b34c?w=600&h=400&fit=crop"
                      alt="Water & Sanitation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-3">
                        <Droplets className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-1">Water & Sanitation</h3>
                      <p className="text-white/90 text-sm">Every drop matters</p>
                    </div>
                  </div>
                  <CardContent className="pt-6">
                    <p className="text-gray-600 mb-4">
                      Providing clean water access and sanitation facilities to prevent disease
                      and improve quality of life.
                    </p>
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600">1M+</div>
                        <div className="text-xs text-gray-600">People Served</div>
                      </div>
                      <div className="bg-blue-50 rounded-lg p-3">
                        <div className="text-2xl font-bold text-blue-600">350+</div>
                        <div className="text-xs text-gray-600">Wells Built</div>
                      </div>
                    </div>
                    <div className="flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          </div>
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

      {/* Community Activities Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Activities & Programs for Communities
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real, tangible programs making a difference in people's daily lives
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "After-School Tutoring",
                description: "Free homework help and mentorship programs for children aged 6-16",
                icon: BookOpen,
                color: "primary",
                stats: "2,000+ students weekly"
              },
              {
                title: "Skills Training Workshops",
                description: "Vocational training in carpentry, sewing, computer skills, and entrepreneurship",
                icon: Users,
                color: "blue-600",
                stats: "500+ graduates annually"
              },
              {
                title: "Community Health Screenings",
                description: "Monthly free health checkups, vaccinations, and maternal care clinics",
                icon: Heart,
                color: "purple-600",
                stats: "10,000+ checkups/year"
              },
              {
                title: "Agricultural Training",
                description: "Teaching modern farming techniques and providing seeds and tools",
                icon: TreePine,
                color: "green-600",
                stats: "300 families supported"
              },
              {
                title: "Women's Empowerment Groups",
                description: "Leadership training, microfinance education, and peer support networks",
                icon: Users,
                color: "pink-600",
                stats: "50+ groups, 1,200 members"
              },
              {
                title: "Youth Sports Programs",
                description: "Football, basketball, and athletics programs promoting health and teamwork",
                icon: Users,
                color: "orange-600",
                stats: "15 teams, 300+ youth"
              },
              {
                title: "Literacy Classes for Adults",
                description: "Evening reading and writing classes for adults who missed education",
                icon: BookOpen,
                color: "indigo-600",
                stats: "200+ adults learning"
              },
              {
                title: "Clean-Up Campaigns",
                description: "Monthly community clean-up drives and environmental awareness programs",
                icon: Globe,
                color: "teal-600",
                stats: "500+ volunteers monthly"
              }
            ].map((activity, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 group cursor-pointer border-gray-200">
                  <CardHeader>
                    <div className={`w-14 h-14 bg-${activity.color}/10 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <activity.icon className={`w-7 h-7 text-${activity.color}`} />
                    </div>
                    <CardTitle className="text-lg">{activity.title}</CardTitle>
                    <CardDescription className="text-sm">
                      {activity.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className={`inline-block px-3 py-1 bg-${activity.color}/10 rounded-full`}>
                      <span className={`text-sm font-semibold text-${activity.color}`}>
                        {activity.stats}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-lg text-gray-600 mb-6">
              All activities are free and open to community members. No registration fees, no barriers.
            </p>
            <Link href="/our-work">
              <Button size="lg" variant="outline" className="group">
                View All Programs
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
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
              <Link href="/contact">
                <Button size="lg" className="group">
                  Donate Now
                  <Heart className="ml-2 w-4 h-4 group-hover:scale-110 transition-transform" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="outline">
                  Become a Volunteer
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
