// Tetrahedron geometry:

// ___________________________________________________________________

import React, { useRef, useState } from 'react'
import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

// ___________________________________________________________________

type Props = {
  detail?: number
  radius?: number
  speed: number
  flatShading: boolean
  wireframe: boolean
  [x: string]: any
}

const TetraGeo: React.FC<Props> = (props) => {
  const { flatShading, wireframe, radius, speed } = props
  // This reference will give us direct access to the mesh so we can animate it
  const mesh = useRef<THREE.Mesh>()

  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)

  // Rotate mesh every frame, this is outside of React without overhead
  useFrame(() => {
    if (mesh.current !== undefined) {
      mesh.current.rotation.x = mesh.current.rotation.y += speed
    }
  })

  return (
    <mesh
      {...props}
      ref={mesh}
      scale={1}
      onClick={() => setActive(!active)}
      onPointerOver={() => setHover(true)}
      onPointerOut={() => setHover(false)}
    >
      <tetrahedronGeometry attach="geometry" args={[radius, 0]} />
      <meshNormalMaterial
        attach="material"
        color={hovered ? 'teal' : '0xffff00'}
        flatShading={flatShading}
        wireframe={wireframe}
      />
    </mesh>
  )
}

export default TetraGeo

// ___________________________________________________________________

const defaultProps = {
  detail: 0,
  radius: 1,
  speed: 0.006,
  flatShading: true,
  wireframe: false
}

TetraGeo.defaultProps = defaultProps