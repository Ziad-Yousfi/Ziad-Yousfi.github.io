import React, { useRef, useMemo, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Stars, PerspectiveCamera, Float, Grid, Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

function FloatingData() {
  const points = useMemo(() => {
    const p = new Float32Array(1000 * 3)
    for (let i = 0; i < 1000; i++) {
      p[i * 3] = (Math.random() - 0.5) * 20
      p[i * 3 + 1] = (Math.random() - 0.5) * 15
      p[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return p
  }, [])

  const pointsRef = useRef()
  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.05
      pointsRef.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.2
    }
  })

  return (
    <Points ref={pointsRef} positions={points} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#3b82f6"
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

function Planet({ position, size, color, emissive, speed = 1 }) {
  const planetRef = useRef()
  useFrame((state) => {
    if (planetRef.current) {
      planetRef.current.rotation.y = state.clock.getElapsedTime() * 0.1 * speed
    }
  })

  return (
    <Float speed={speed} rotationIntensity={0.2} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={planetRef}>
          <sphereGeometry args={[size, 64, 64]} />
          <meshStandardMaterial color={color} roughness={0.8} metalness={0.2} emissive={emissive} />
        </mesh>
        <mesh>
          <sphereGeometry args={[size * 1.05, 64, 64]} />
          <meshBasicMaterial color={color} transparent opacity={0.1} side={THREE.BackSide} />
        </mesh>
      </group>
    </Float>
  )
}

export default function Background3D() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#050505]">
      <Canvas dpr={[1, 2]}>
        <Suspense fallback={null}>
          <PerspectiveCamera makeDefault position={[0, 2, 12]} fov={50} />
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
          <spotLight position={[-20, 20, 20]} angle={0.15} penumbra={1} intensity={2} color="#ffffff" />        
          <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
          <group position={[0, -5, 0]}>
            <Grid infiniteGrid fadeDistance={40} fadeStrength={5} cellSize={1} sectionSize={5} sectionColor="#1e3a8a" cellColor="#1e293b" />
          </group>
          <FloatingData />
          <Planet position={[8, 4, -10]} size={1.8} color="#1e293b" emissive="#0f172a" speed={0.8} />
          <Planet position={[-5, -2, -12]} size={0.8} color="#450a0a" emissive="#2d0606" speed={1.2} />
          <Planet position={[12, -3, -20]} size={4} color="#172554" emissive="#1e1b4b" speed={0.3} />
          <fog attach="fog" args={['#050505', 5, 35]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
