import React, { Suspense } from "react";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Room from "./components/Room";

const App = () => {
  return (
    <Canvas
      id="canvas"
      camera={{ position: [20, 300, 2.5], fov: 3 }}
      shadows={true}
      draggable={false}
    >
      <OrbitControls maxDistance="250" target={[-0.061775, 10, 0]} />
      <spotLight intensity={2} position={[0, 0, 0]} color="#fff" />
      <spotLight intensity={2} position={[5, 20, 20]} color="#953553" />
      <spotLight intensity={2} position={[15, 45, 20]} color="#0000ff" />
      <spotLight intensity={0.2} position={[20, 35, 20]} color="#00FF00" />
      <Suspense fallback="Loading..">
        <Room />
      </Suspense>
    </Canvas>
  );
};

export default App;
