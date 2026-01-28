import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function ParticleNetwork(props) {
    const ref = useRef();

    // Generate random particles in a sphere
    const [positions, themeColors] = useMemo(() => {
        const count = 300; // Number of particles
        const positions = new Float32Array(count * 3);
        const colors = new Float32Array(count * 3);

        // Palette colors (normalized 0-1)
        // golden_orange: #f59e0b -> 0.96, 0.62, 0.04
        // cerulean: #247ba0 -> 0.14, 0.48, 0.63
        // ash_grey: #cbd4c2 -> 0.80, 0.83, 0.76
        const palette = [
            new THREE.Color('#f59e0b'),
            new THREE.Color('#247ba0'),
            new THREE.Color('#cbd4c2')
        ];

        for (let i = 0; i < count; i++) {
            const r = 10;
            // Random position in sphere surface/volume
            const theta = 2 * Math.PI * Math.random();
            const phi = Math.acos(2 * Math.random() - 1);
            const x = r * Math.sin(phi) * Math.cos(theta);
            const y = r * Math.sin(phi) * Math.sin(theta);
            const z = r * Math.cos(phi);

            positions[i * 3] = x;
            positions[i * 3 + 1] = y;
            positions[i * 3 + 2] = z;

            // Assign random color from palette
            const color = palette[Math.floor(Math.random() * palette.length)];
            colors[i * 3] = color.r;
            colors[i * 3 + 1] = color.g;
            colors[i * 3 + 2] = color.b;
        }

        return [positions, colors];
    }, []);

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={positions} colors={themeColors} stride={3} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    vertexColors
                    size={0.15}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
}

export default function Hero3D() {
    return (
        <div className="absolute inset-0 z-0">
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <ParticleNetwork />
            </Canvas>
        </div>
    );
}
