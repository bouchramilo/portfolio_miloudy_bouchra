import { useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Trail } from '@react-three/drei';
import * as THREE from 'three';

function MouseTracker({ children }) {
    const { viewport } = useThree();
    const ref = useRef();

    useFrame((state) => {
        // Map mouse to viewport coordinates
        const x = (state.pointer.x * viewport.width) / 2;
        const y = (state.pointer.y * viewport.height) / 2;
        ref.current.position.set(x, y, 0);
    });

    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.1, 16, 16]} />
            <meshBasicMaterial color="#f59e0b" transparent opacity={0.0} /> {/* Invisible head */}
            {children}
        </mesh>
    );
}

export default function GlobalMouseTrail() {
    return (
        <div className="fixed inset-0 z-50 pointer-events-none">
            <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 10], fov: 75 }} eventSource={document.getElementById('root')} eventPrefix="client">
                <MouseTracker>
                    <Trail
                        width={2} // Width of the line
                        length={8} // Length of the trail
                        color={new THREE.Color("#f59e0b")} // Golden orange
                        attenuation={(t) => t * t}
                    >
                        <mesh>
                            <sphereGeometry args={[0.01, 16, 16]} />
                            <meshBasicMaterial color="#f59e0b" />
                        </mesh>
                    </Trail>
                </MouseTracker>
            </Canvas>
        </div>
    );
}
