'use client'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const projects = [
  {
    title: 'FitnessGear Pro',
    description:
      'High-converting fitness dropshipping store with AI product recommendations',
    revenue: '₹12.5M+',
    date: '2024',
    color: 'from-primary',
  },
  {
    title: 'TechTrendz',
    description: 'Gadget dropshipping platform with real-time inventory sync',
    revenue: '₹8.7M+',
    date: '2023',
    color: 'from-secondary',
  },
  {
    title: 'HomeEssentials Hub',
    description:
      'Complete home & kitchen dropshipping solution with subscription model',
    revenue: '₹15.2M+',
    date: '2024',
    color: 'from-primary',
  },
]

export default function ProjectTimeline() {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  return (
    <section
      id="results"
      className="py-32 px-4 md:px-8 lg:px-16 relative"
      aria-labelledby="results-heading"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          id="results-heading"
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-black text-center mb-24 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
        >
          PROJECT TIMELINE
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/30 to-secondary/30" />

          <div className="space-y-16">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="flex items-center justify-center"
              >
                <div
                  className={`glass p-8 rounded-3xl w-full max-w-2xl neon-glow ${index % 2 === 0 ? 'ml-20' : 'mr-20'}`}
                >
                  <div className="flex items-start space-x-6">
                    <div
                      className={`flex-shrink-0 w-20 h-20 bg-gradient-to-r ${project.color} to-purple-500 rounded-2xl flex items-center justify-center`}
                    >
                      <span className="text-2xl font-bold text-black">
                        ${index + 1}
                      </span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center mb-2">
                        <span className="text-sm font-medium text-primary mr-2">
                          ● {project.date}
                        </span>
                      </div>
                      <h3 className="text-2xl md:text-3xl font-black mb-4 text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-emerald-500 bg-clip-text text-transparent">
                        {project.revenue} PKR
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
