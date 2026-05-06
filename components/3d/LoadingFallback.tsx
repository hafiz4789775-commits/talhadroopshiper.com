'use client'
import { Html } from '@react-three/drei'

/**
 * Must only be used inside <Canvas> (e.g. Suspense fallback).
 * Plain DOM nodes cannot be R3F children; Html portals them correctly.
 */
export default function LoadingFallback() {
  return (
    <Html center transform distanceFactor={10}>
      <div className="pointer-events-none flex w-[min(90vw,320px)] flex-col items-center justify-center rounded-2xl border border-white/20 bg-black/60 p-8 backdrop-blur-xl">
        <div
          className="mb-6 h-16 w-16 animate-spin rounded-full border-4 border-primary/30 border-t-primary"
          aria-hidden
        />
        <h3 className="mb-2 text-lg font-bold text-primary">
          Loading 3D Experience...
        </h3>
        <p className="text-center text-sm text-gray-400">
          High-performance portfolio showcase
        </p>
      </div>
    </Html>
  )
}
