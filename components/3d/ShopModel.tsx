'use client'

import { Center, RoundedBox } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef, type MutableRefObject } from 'react'
import * as THREE from 'three'

export type ShopModelProps = {
  mouseRef: MutableRefObject<{ x: number; y: number }>
  reducedMotion: boolean
}

export function ShopModel({ mouseRef, reducedMotion }: ShopModelProps) {
  const groupRef = useRef<THREE.Group>(null)
  const materials = useMemo(() => {
    const glass = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color('#0b0c10'),
      roughness: 0.1,
      metalness: 0.25,
      transmission: 0.65,
      thickness: 1.1,
      ior: 1.3,
      clearcoat: 0.8,
      clearcoatRoughness: 0.2,
      emissive: new THREE.Color('#00f5ff'),
      emissiveIntensity: 0.05,
    })

    const neon = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#00f5ff'),
      emissive: new THREE.Color('#00f5ff'),
      emissiveIntensity: 1.4,
      metalness: 0.2,
      roughness: 0.25,
    })

    const neon2 = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#8b5cf6'),
      emissive: new THREE.Color('#8b5cf6'),
      emissiveIntensity: 1.25,
      metalness: 0.2,
      roughness: 0.25,
    })

    const base = new THREE.MeshStandardMaterial({
      color: new THREE.Color('#0a0a0a'),
      metalness: 0.35,
      roughness: 0.55,
    })

    return { glass, neon, neon2, base }
  }, [])

  useFrame(({ clock }) => {
    const g = groupRef.current
    if (!g) return
    const t = clock.elapsedTime

    if (reducedMotion) {
      g.rotation.y = t * 0.12
      g.rotation.x = 0
      return
    }

    const { x: mx, y: my } = mouseRef.current
    const breathe = Math.sin(t * 0.45) * 0.06
    const targetX = my * 0.38 + breathe
    const targetY = mx * 0.42 + Math.sin(t * 0.25) * 0.05

    g.rotation.x = THREE.MathUtils.lerp(g.rotation.x, targetX, 0.07)
    g.rotation.y = THREE.MathUtils.lerp(g.rotation.y, targetY, 0.07)
  })

  return (
    <Center disableY>
      <group ref={groupRef}>
        {/* Base platform */}
        <mesh position={[0, -0.9, 0]} material={materials.base} castShadow receiveShadow>
          <cylinderGeometry args={[1.55, 1.8, 0.24, 64]} />
        </mesh>

        {/* Storefront body */}
        <RoundedBox
          args={[2.2, 1.35, 1.2]}
          radius={0.18}
          smoothness={8}
          position={[0, 0.05, 0]}
          material={materials.glass}
          castShadow
        />

        {/* Neon trim */}
        <mesh position={[0, 0.78, 0.62]} material={materials.neon}>
          <boxGeometry args={[2.05, 0.06, 0.05]} />
        </mesh>
        <mesh position={[0, -0.46, 0.62]} material={materials.neon2}>
          <boxGeometry args={[2.05, 0.05, 0.05]} />
        </mesh>

        {/* Floating “product cards” */}
        <group position={[0, 0.25, 0.72]}>
          <mesh position={[-0.6, 0.2, 0]} material={materials.neon2}>
            <boxGeometry args={[0.42, 0.26, 0.06]} />
          </mesh>
          <mesh position={[0.0, 0.0, 0]} material={materials.neon}>
            <boxGeometry args={[0.5, 0.3, 0.06]} />
          </mesh>
          <mesh position={[0.62, 0.17, 0]} material={materials.neon2}>
            <boxGeometry args={[0.38, 0.24, 0.06]} />
          </mesh>
        </group>
      </group>
    </Center>
  )
}
