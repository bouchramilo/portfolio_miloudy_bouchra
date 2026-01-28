import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Github, ExternalLink, Calendar, Code } from 'lucide-react';
import { projects } from '../data/projects';

export default function ProjectDetails() {
    const { id } = useParams();
    const project = projects.find((p) => p.id === parseInt(id));

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text">
                <h2 className="text-3xl font-bold mb-4">Projet introuvable</h2>
                <Link to="/projects" className="text-light-primary dark:text-dark-primary hover:underline">
                    Retour aux projets
                </Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen py-20 bg-light-background dark:bg-dark-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <Link
                    to="/projects"
                    className="inline-flex items-center gap-2 text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors mb-8"
                >
                    <ArrowLeft size={20} />
                    Retour aux projets
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* Header */}
                    <div className="mb-8">
                        <span className="inline-block px-3 py-1 bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary rounded-full text-sm font-bold mb-4">
                            {project.type}
                        </span>
                        <h1 className="text-4xl md:text-5xl font-heading font-bold text-light-text dark:text-dark-text mb-6">
                            {project.title}
                        </h1>

                        <div className="flex flex-wrap gap-4 mb-8">
                            <a
                                href={project.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 px-6 py-2 bg-light-text dark:bg-dark-text text-white dark:text-black rounded-lg hover:bg-opacity-90 transition-colors"
                            >
                                <Github size={20} />
                                Code Source
                            </a>
                            {project.demoUrl && (
                                <a
                                    href={project.demoUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 px-6 py-2 border border-light-text dark:border-dark-text text-light-text dark:text-dark-text rounded-lg hover:bg-light-text dark:hover:bg-dark-text hover:text-white dark:hover:text-black transition-colors"
                                >
                                    <ExternalLink size={20} />
                                    Voir le site
                                </a>
                            )}
                        </div>
                    </div>

                    {/* Image */}
                    <div className="rounded-2xl overflow-hidden shadow-2xl mb-12">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-auto object-cover"
                        />
                    </div>

                    {/* Content */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                        <div className="md:col-span-2 space-y-6">
                            <h2 className="text-2xl font-bold text-light-text dark:text-dark-text">À propos du projet</h2>
                            <p className="text-light-muted dark:text-dark-muted leading-relaxed text-lg">
                                {project.description}
                            </p>
                            <p className="text-light-muted dark:text-dark-muted leading-relaxed">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-lg border border-light-muted/10 dark:border-dark-muted/10">
                                <h3 className="flex items-center gap-2 text-xl font-bold text-light-text dark:text-dark-text mb-4">
                                    <Code size={20} className="text-light-primary dark:text-dark-primary" />
                                    Technologies
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map(tech => (
                                        <span
                                            key={tech}
                                            className="px-3 py-1 bg-light-background dark:bg-dark-background text-light-secondary dark:text-dark-secondary rounded-lg text-sm border border-light-secondary/20 dark:border-dark-secondary/20"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
