import SplineScene from '@/components/3d/SplineScene'

export default function SplineShowcase() {
  return (
    <section className="px-4 py-24 md:px-8 lg:px-12">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-primary/90 backdrop-blur sm:text-sm">
            Spline + 3D
          </p>
          <h2 className="text-3xl font-black tracking-tight sm:text-4xl">
            Interactive 3D sections that feel premium
          </h2>
          <p className="mt-4 text-gray-300">
            Use Three.js for product previews and Spline for cinematic brand
            scenes. Everything stays responsive and mobile-friendly.
          </p>
          <p className="mt-3 text-sm text-gray-400">
            If you don&apos;t have a Spline scene yet, you can add it later by
            setting <span className="font-mono text-white/80">NEXT_PUBLIC_SPLINE_URL</span>.
          </p>
        </div>
        <div>
          <SplineScene />
        </div>
      </div>
    </section>
  )
}

