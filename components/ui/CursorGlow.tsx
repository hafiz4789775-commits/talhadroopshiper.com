'use client'
import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

export default function CursorGlow() {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <motion.div
      className="fixed top-0 left-0 w-32 h-32 rounded-full pointer-events-none neon-glow z-50 mix-blend-difference"
      animate={{
        x: position.x - 64,
        y: position.y - 64,
        scale: 1.5,
        opacity: 0.8,
      }}
      transition={{
        type: 'spring',
        stiffness: 300,
        damping: 30,
      }}
    />
  )
}
