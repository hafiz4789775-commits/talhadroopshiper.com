'use client'

import { Canvas } from '@react-three/fiber'
import { Suspense, useCallback, useRef } from 'react'

import LoadingFallback from '@/components/3d/LoadingFallback'
import { ModelCanvasBoundary } from '@/components/3d/ModelCanvasBoundary'
import { ShopModel, type ShopModelProps } from '@/components/3d/ShopModel'

type ShopModelCanvasProps = {
  reducedMotion: boolean
  className?: string
}

function Scene(props: ShopModelProps) {
  return (
    <>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.55} />
      <directionalLight
        position={[6, 8, 4]}
        intensity={1.15}
        color="#ffffff"
      />
      <directionalLight
        position={[-5, 4, -6]}
        intensity={0.45}
        color="#8b5cf6"
      />
      <pointLight position={[0, 3, 2]} intensity={0.6} color="#00f5ff" />
      <ShopModel {...props} />
    </>
  )
}

export default function ShopModelCanvas({
  reducedMotion,
  className = '',
}: ShopModelCanvasProps) {
  const mouseRef = useRef({ x: 0, y: 0 })

  const onPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      const el = e.currentTarget
      const r = el.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 2 - 1
      const y = -(((e.clientY - r.top) / r.height) * 2 - 1)
      mouseRef.current.x = Math.max(-1, Math.min(1, x))
      mouseRef.current.y = Math.max(-1, Math.min(1, y))
    },
    []
  )

  const onPointerLeave = useCallback(() => {
    mouseRef.current.x = 0
    mouseRef.current.y = 0
  }, [])

  return (
    <ModelCanvasBoundary>
      <div
        className={`relative h-[min(52vh,420px)] w-full touch-pan-y sm:h-[min(58vh,480px)] md:h-[min(64vh,560px)] ${className}`}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
        onPointerCancel={onPointerLeave}
      >
        <Canvas
          camera={{ position: [0, 0.35, 4.2], fov: 42, near: 0.1, far: 100 }}
          dpr={[1, 2]}
          gl={{
            antialias: true,
            alpha: false,
            powerPreference: 'high-performance',
            stencil: false,
            depth: true,
          }}
          performance={{ min: 0.5, max: 1, debounce: 200 }}
          className="h-full w-full"
        >
          <Suspense fallback={<LoadingFallback />}>
            <Scene mouseRef={mouseRef} reducedMotion={reducedMotion} />
          </Suspense>
        </Canvas>
      </div>
    </ModelCanvasBoundary>
  )
}
