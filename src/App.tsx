import React, { useRef } from 'react';
import * as THREE from "three";
import { Canvas, useFrame } from '@react-three/fiber';
import './css/App.css';

const Thing = () => {
  const ref = useRef<THREE.Mesh>(null!);
  useFrame(() => {
    const gamepads = navigator.getGamepads()
    const gamepad = gamepads[0];

    if(gamepad) {
      ref.current.position.y -= gamepad?.axes[0] / 10;
      ref.current.position.x -= gamepad?.axes[1] / 10;
    }
  });
  return (
    <mesh
      ref={ref}
      onClick={e => console.log('click')}
      onPointerOver={e => console.log('hover')}
      onPointerOut={e => console.log('unhover')}
    >
      <planeBufferGeometry attach='geometry' args={[1, 1]} />
      <meshBasicMaterial
        attach='material'
        color='hotpink'
        opacity={0.5}
        transparent
      />
    </mesh>
  );
};

function App() {
  return (
    <Canvas>
      <Thing />
    </Canvas>
  );
}

export default App;
