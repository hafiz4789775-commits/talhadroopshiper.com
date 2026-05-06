'use client'
import { motion } from 'framer-motion'

const techStack = [
  'CSS',
  'JavaScript',
  'React',
  'Next.js',
  'Tailwind CSS',
  'Three.js',
  'GSAP',
  'Framer Motion',
  'Spline',
  'CSS',
  'JavaScript',
  'React',
]

export default function InfiniteMarquee() {
  return (
    <div className="overflow-hidden py-16 bg-gradient-to-b from-[#050505] to-[#0a0a0a] relative">
      <motion.div
        className="flex gap-12"
        animate={{
          x: ['0%', '-100%'],
          transition: {
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          },
        }}
      >
        {Array.from({ length: 2 }).map((_, i) => (
          <div key={i} className="flex gap-12 items-center min-w-max py-8">
            {techStack.map((tech, idx) => (
              <motion.div
                key={`${i}-${idx}`}
                className="text-2xl md:text-3xl lg:text-4xl font-black uppercase bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
                whileHover={{ scale: 1.1, y: -5 }}
              >
                {tech}
              </motion.div>
            ))}
          </div>
        ))}
      </motion.div>

      <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/100 via-transparent to-[#050505]/100" />
    </div>
  )
}
