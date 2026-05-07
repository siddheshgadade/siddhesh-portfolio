import { useState, useRef, Suspense } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'

function Starfield(props) {
  const ref = useRef()
  // Generate 4000 random points within a sphere of radius 1.5
  const [sphere] = useState(() => random.inSphere(new Float32Array(4000), { radius: 1.5 }))

  useFrame((state, delta) => {
    // Subtle, slow rotation
    ref.current.rotation.x -= delta / 10
    ref.current.rotation.y -= delta / 15
  })

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled={false} {...props}>
        <PointMaterial
          transparent
          color="#7aa2f7" // Tokyo Night Blue
          size={0.003}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  )
}

export default function Scene() {
  // Only render on desktop to prevent mobile performance issues
  if (typeof window !== 'undefined' && window.innerWidth < 768) {
    return null
  }

  return (
    <div className="fixed inset-0 z-0 pointer-events-none opacity-50">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <Suspense fallback={null}>
          <Starfield />
        </Suspense>
      </Canvas>
    </div>
  )
}
