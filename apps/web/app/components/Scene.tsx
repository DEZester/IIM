'use client';

import { Canvas } from '@react-three/fiber';
import { OrbitControls, Grid } from '@react-three/drei';

export default function Scene() {
  return (
    <div className="absolute inset-0 bg-slate-900 overflow-hidden">
      <Canvas camera={{ position: [5, 5, 5], fov: 50 }}>
        {/* Освещение */}
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />

        {/* Вспомогательная сетка */}
        <Grid infiniteGrid fadeDistance={50} cellColor="#64748b" sectionColor="#334155" />

        {/* Тестовый куб */}
        <mesh>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="royalblue" />
        </mesh>

        {/* Управление камерой (вращение мышкой) */}
        <OrbitControls makeDefault />
      </Canvas>
    </div>
  );
}
