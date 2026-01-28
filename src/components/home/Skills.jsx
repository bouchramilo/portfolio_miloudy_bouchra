import { useRef, useState, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Html, Text, Float } from '@react-three/drei';
import * as THREE from 'three';
import { motion } from 'framer-motion';
import { skills } from '../../data/skills';
import { Layout, Server, Brain, Settings, CheckCircle, ArrowLeft, ArrowRight, Database, Monitor, PenTool, Globe, MessageSquare, BarChart, Cloud } from 'lucide-react';

const categoryIcons = {
    "Frontend": <Layout size={24} />,
    "Backend": <Server size={24} />,
    "Base de données": <Database size={24} />,
    "IA & Data": <Brain size={24} />,
    "Outils & DevOps": <Settings size={24} />,
    "Systèmes": <Monitor size={24} />,
    "Outils de Conception": <PenTool size={24} />,
    "Big Data": <Globe size={24} />,
    "NLP & LLMs": <MessageSquare size={24} />,
    "Data Analysis": <BarChart size={24} />,
    "Cloud & DevOps": <Cloud size={24} />
};

const categoryColors = {
    "Frontend": "text-amber-400 bg-amber-500/20",
    "Backend": "text-blue-400 bg-blue-500/20",
    "Base de données": "text-orange-400 bg-orange-500/20",
    "IA & Data": "text-purple-400 bg-purple-500/20",
    "Outils & DevOps": "text-pink-400 bg-pink-500/20",
    "Systèmes": "text-blue-600 bg-blue-700/20",
    "Outils de Conception": "text-green-400 bg-green-500/20",
    "Big Data": "text-yellow-400 bg-yellow-500/20",
    "NLP & LLMs": "text-indigo-400 bg-indigo-500/20",
    "Data Analysis": "text-teal-400 bg-teal-500/20",
    "Cloud & DevOps": "text-cyan-400 bg-cyan-500/20"
};

const checkColors = {
    "Frontend": "text-amber-400",
    "Backend": "text-blue-400",
    "Base de données": "text-orange-400",
    "IA & Data": "text-purple-400",
    "Outils & DevOps": "text-pink-400",
    "Systèmes": "text-blue-600",
    "Outils de Conception": "text-green-400",
    "Big Data": "text-yellow-400",
    "NLP & LLMs": "text-indigo-400",
    "Data Analysis": "text-teal-400",
    "Cloud & DevOps": "text-cyan-400"
};

// --- Floating Background Particles ---
function FloatingParticles() {
    const group = useRef();
    const skillNames = useMemo(() => skills.flatMap(c => c.items.map(i => i.name)), []);

    const particles = useMemo(() => {
        return skillNames.map((name, i) => ({
            name,
            position: [
                (Math.random() - 0.5) * 30,
                (Math.random() - 0.5) * 20,
                (Math.random() - 0.5) * 20 - 10
            ],
            color: ["#3b82f6", "#10b981", "#8b5cf6", "#f59e0b"][i % 4]
        }))
    }, [skillNames]);

    useFrame((state) => {
        if (group.current) {
            group.current.rotation.y = -state.clock.elapsedTime * 0.02; // Counter rotation
        }
    });

    return (
        <group ref={group}>
            {particles.map((p, i) => (
                <Float key={i} speed={1} rotationIntensity={0.5} floatIntensity={0.5}>
                    <Text
                        position={p.position}
                        fontSize={0.4}
                        color={p.color}
                        fillOpacity={0.2} // Subtler
                        maxWidth={3}
                        textAlign="center"
                    >
                        {p.name}
                    </Text>
                </Float>
            ))}
        </group>
    )
}

// Increased size for better visibility
// Increased size for better visibility
function SkillPageContent({ category }) {
    if (!category) return null;

    return (
        <div className="w-[650px] h-[700px] bg-black/50 backdrop-blur-xl border border-white/10 p-10 rounded-[3rem] select-none flex flex-col shadow-2xl hover:bg-black/60 transition-colors">
            <div className={`w-20 h-20 rounded-full flex items-center justify-center text-4xl mb-8 ${categoryColors[category.category]}`}>
                {categoryIcons[category.category]}
            </div>
            <h3 className="text-5xl font-bold mb-8 text-white border-b border-white/10 pb-6">
                {category.category}
            </h3>
            <ul className="space-y-6 flex-grow overflow-y-auto custom-scrollbar">
                {category.items.map((skill, idx) => (
                    <li key={idx} className="flex items-center gap-4 text-slate-300 font-medium">
                        <CheckCircle className={`w-8 h-8 ${checkColors[category.category]}`} />
                        <span className="text-2xl">{skill.name}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


function SkillsCarousel() {
    const groupRef = useRef();
    const radius = 13; // Adjusted for giant cards
    const count = skills.length;

    useFrame((state, delta) => {
        if (groupRef.current) {
            // ...
            // ...
            // ...
            groupRef.current.rotation.y += delta * 0.08; // Slow rotation
        }
    });

    return (
        <group ref={groupRef}>
            {skills.map((category, index) => {
                const angle = (index / count) * Math.PI * 2;
                const x = Math.sin(angle) * radius;
                const z = Math.cos(angle) * radius;

                return (
                    <group
                        key={index}
                        position={[x, 0, z]}
                        rotation={[0, angle, 0]}
                    >
                        <Html
                            transform
                            distanceFactor={1.6}
                            position={[0, 0, 0]}
                            style={{
                                transform: 'scale(1)',
                            }}
                        >
                            <SkillPageContent category={category} />
                        </Html>
                    </group>
                );
            })}
        </group>
    );
}

export default function Skills() {
    return (
        <section id="skills" className="py-20 bg-light-background dark:bg-dark-background relative overflow-hidden">
            <div className="container mx-auto px-4 text-center relative z-10 pointer-events-none mb-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-4">
                        Arsenal Technique
                    </h2>
                    <div className="w-20 h-1 bg-light-primary dark:bg-dark-primary mx-auto"></div>
                    <p className="text-light-muted dark:text-dark-muted mt-4">
                        Toutes mes compétences en orbite.
                    </p>
                </motion.div>
            </div>

            <div className="h-[600px] w-full relative z-0">
                <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 18], fov: 50 }}>
                    <ambientLight intensity={0.6} />
                    <spotLight position={[10, 10, 10]} angle={0.3} penumbra={1} />

                    <FloatingParticles />
                    <SkillsCarousel />
                </Canvas>
            </div>
        </section>
    );
}
