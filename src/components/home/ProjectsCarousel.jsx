import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard from '../projects/ProjectCard';
import { projects } from '../../data/projects';

export default function ProjectsCarousel() {
    const featuredProjects = projects.slice(0, 6);

    return (
        <section id="projects" className="py-20 bg-light-background dark:bg-dark-background bg-opacity-50 dark:bg-opacity-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-light-primary dark:text-dark-primary font-bold tracking-wider uppercase mb-2 block">
                        Portfolio
                    </span>
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-4">
                        Projets Récents
                    </h2>
                    <div className="w-20 h-1 bg-light-primary dark:bg-dark-primary mx-auto mb-6"></div>
                    <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
                        Découvrez une sélection de mes travaux en Intelligence Artificielle, Data Science et Développement Web.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>

                <div className="text-center">
                    <Link
                        to="/projects"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-light-secondary dark:bg-dark-secondary text-white rounded-full font-medium hover:bg-light-secondary/90 dark:hover:bg-dark-secondary/90 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                    >
                        Voir tous les projets
                        <ArrowRight size={18} />
                    </Link>
                </div>
            </div>
        </section>
    );
}
