import React, { useRef } from "react";
import { useGLTF, OrthographicCamera } from "@react-three/drei";

const Room = ({ props }) => {
  const group = useRef();
  const { nodes, materials } = useGLTF("/3droom.gltf");

  return (
    <group ref={group} {...props} dispose={null}>
      <group position={[24.66, 32.71, 30.26]} rotation={[1.18, 0.36, -0.71]}>
        <OrthographicCamera
          makeDefault={false}
          far={1000}
          near={0.1}
          rotation={[-Math.PI / 2, 0, 0]}
        />
      </group>
      <group position={[-0.48, 9.86, 5.71]} scale={[4.24, 4.24, 3.98]}>
        <mesh geometry={nodes.Plane.geometry} material={materials.Wall} />
        <mesh geometry={nodes.Plane_1.geometry} material={materials.Floor} />
      </group>
      <mesh
        geometry={nodes.sofa.geometry}
        material={materials.Sofa}
        position={[-0.47, 9.41, 8.18]}
        rotation={[Math.PI, 0, Math.PI]}
        scale={[1.08, 1.02, 1.52]}
      />
      <group
        position={[-0.51, 13.45, 1.94]}
        rotation={[1.57, 0, -Math.PI]}
        scale={[-1.82, 1, 1]}
      >
        <mesh geometry={nodes.Plane002.geometry} material={materials.tv} />
        <mesh geometry={nodes.Plane002_1.geometry} material={materials.inner} />
      </group>
      <mesh
        geometry={nodes.stand.geometry}
        material={materials["Material.001"]}
        position={[-0.42, 9.99, 2.65]}
        scale={[3.04, 1, 1]}
      />
      <mesh
        geometry={nodes.picture.geometry}
        material={materials.me}
        position={[-4.58, 12.75, 5.41]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={3}
      />
      <mesh
        geometry={nodes.plane.geometry}
        material={materials.bg}
        position={[-0.54, 10.29, 5.27]}
      />
      <group position={[-0.53, 11.04, 3.79]}>
        <mesh
          geometry={nodes.Plane007.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          geometry={nodes.Plane007_1.geometry}
          material={materials["Material.003"]}
        />
      </group>
    </group>
  );
};

export default Room;
