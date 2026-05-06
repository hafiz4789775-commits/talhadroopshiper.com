'use client'

import { motion } from 'framer-motion'

type SplineSceneProps = {
  url?: string
}

export default function SplineScene({ url }: SplineSceneProps) {
  const sceneUrl = url ?? process.env.NEXT_PUBLIC_SPLINE_URL

  if (!sceneUrl) {
    return (
      <div className="glass neon-glow flex min-h-[420px] items-center justify-center rounded-3xl p-10 text-center">
        <div className="max-w-md">
          <p className="text-sm font-semibold text-primary/90">Spline scene</p>
          <p className="mt-3 text-lg font-bold text-white">
            Add your own 3D scene link
          </p>
          <p className="mt-3 text-sm text-gray-300">
            Set <span className="font-mono text-white/80">NEXT_PUBLIC_SPLINE_URL</span>{' '}
            to your Spline scene URL to render it here.
          </p>
        </div>
      </div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.98 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.35 }}
      className="glass neon-glow overflow-hidden rounded-3xl"
    >
      <div className="h-[420px] w-full sm:h-[520px]">
        <iframe
          title="Spline 3D scene"
          src={sceneUrl}
          className="h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer"
          allow="fullscreen"
        />
      </div>
    </motion.div>
  )
}

