import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Download } from 'lucide-react';
import Hero3D from './Hero3D';

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-light-background dark:bg-dark-background">
            {/* 3D Background */}
            <Hero3D />

            <div className="container mx-auto px-4 z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="text-light-primary dark:text-dark-primary font-medium tracking-wider uppercase mb-4 block">
                        Portfolio
                    </span>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold text-light-text dark:text-dark-text mb-6">
                        Miloudy Bouchra
                    </h1>
                    <p className="text-xl md:text-2xl text-light-muted dark:text-dark-muted mb-8 max-w-2xl mx-auto">
                        Développeuse Full Stack & Passionnée d'IA. <br />
                        Je transforme des idées complexes en expériences numériques élégantes.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link
                            to="/projects"
                            className="px-8 py-3 bg-light-primary dark:bg-dark-primary text-white rounded-full font-medium hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 transition-colors flex items-center gap-2 group"
                        >
                            Explorer mes projets
                            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </Link>
                        <Link
                            to="/cv"
                            className="px-8 py-3 border-2 border-light-text dark:border-dark-text text-light-text dark:text-dark-text rounded-full font-medium hover:bg-light-text hover:text-white dark:hover:bg-dark-text dark:hover:text-black transition-colors flex items-center gap-2"
                        >
                            <Download size={18} />
                            Mon CV
                        </Link>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
