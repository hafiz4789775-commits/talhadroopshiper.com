'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Mail, Phone, User, Send } from 'lucide-react'
import { SITE } from '@/lib/site'

export default function ContactSection() {
  const [formData, setFormData] = useState<{
    name: string
    email: string
    phone: string
    message: string
  }>({
    name: SITE.name,
    email: SITE.email,
    phone: SITE.phone,
    message: '',
  })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      })

      if (res.ok) {
        setStatus('success')
        setFormData({
          name: SITE.name,
          email: SITE.email,
          phone: SITE.phone,
          message: '',
        })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section
      id="contact"
      className="py-32 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-[#050505] to-[#0a0a0a]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-2xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2
            id="contact-heading"
            className="text-4xl md:text-6xl font-black bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-6"
          >
            GET IN TOUCH
          </h2>
          <p className="text-xl text-gray-300">
            Ready to scale your dropshipping business? Let&apos;s talk numbers.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="space-y-6 glass p-10 rounded-3xl neon-glow"
        >
          {status === 'success' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="p-6 bg-emerald-500/20 border border-emerald-500/50 rounded-2xl text-emerald-400"
            >
              Message sent successfully!
            </motion.div>
          )}

          {status === 'error' && (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="p-6 bg-red-500/20 border border-red-500/50 rounded-2xl text-red-400"
            >
              Something went wrong. Please try again.
            </motion.div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <User className="w-4 h-4 mr-2" />
                Name
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={e => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-gray-500"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300 flex items-center">
                <Mail className="w-4 h-4 mr-2" />
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={e => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-gray-500"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300 flex items-center">
              <Phone className="w-4 h-4 mr-2" />
              Phone
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={e => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-xl focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all text-white placeholder-gray-500"
              required
            />
          </div>

          <Button
            type="submit"
            size="lg"
            className="w-full h-14 text-lg font-bold neon-glow"
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin mr-3" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-5 h-5 mr-3" />
                Send Message
              </>
            )}
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
