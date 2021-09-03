import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, useLoader } from '@react-three/fiber'
import { TextureLoader } from 'three/src/loaders/TextureLoader.js'
import { OrbitControls, Stars } from '@react-three/drei'
import Cat from './components/Cat'

function Box(props) {
  const texture = useLoader(
    TextureLoader,
    'https://letsenhance.io/static/334225cab5be263aad8e3894809594ce/75c5a/MainAfter.jpg'
  )
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef()
  // Set up state for the hovered and active state
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  // Subscribe this component to the render-loop, rotate the mesh every frame
  useFrame((state, delta) => {
    ref.current.rotation.x += 0.01
    ref.current.rotation.y += 0.01
    ref.current.rotation.z += 0.01
  })
  // Return the view, these are regular Threejs elements expressed in JSX
  return (
    <mesh
      {...props}
      ref={ref}
      // scale={active ? 1.5 : 1}
      position={active ? [0, 1, 0] : [0, 0, 0]}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}
    >
      <dodecahedronBufferGeometry args={[1, 1, 1]} />
      <meshNormalMaterial
        color={hovered ? 'hotpink' : '#c814ee'}
        normalMap={texture}
      />
    </mesh>
  )
}

const App = () => {
  return (
    <>
      <Canvas>
        <Stars />
        <OrbitControls />
        <ambientLight />

        <pointLight position={[10, 10, 10]} />
        <Suspense fallback='Loading..'>
          {/* <Box position={[0, 0, 0]} /> */}
          <Cat />
        </Suspense>
      </Canvas>

      <h1 style={{ color: '#fff' }}>Hello, I am Didem.</h1>
    </>
  )
}

export default App
