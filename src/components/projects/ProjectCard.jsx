import { Github, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

export default function ProjectCard({ project }) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-zinc-800 rounded-xl overflow-hidden shadow-lg border border-light-muted/10 dark:border-dark-muted/10 flex flex-col h-full"
        >
            <div className="relative h-48 overflow-hidden group">
                <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-white rounded-full text-black hover:bg-light-primary hover:text-white transition-colors"
                        title="Code Source"
                    >
                        <Github size={20} />
                    </a>
                    {project.demoUrl && (
                        <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-white rounded-full text-black hover:bg-light-primary hover:text-white transition-colors"
                            title="Démo Live"
                        >
                            <ExternalLink size={20} />
                        </a>
                    )}
                </div>
                <div className="absolute top-2 right-2 px-2 py-1 bg-light-primary dark:bg-dark-primary text-white text-xs font-bold rounded">
                    {project.type}
                </div>
            </div>

            <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-2">
                    <Link to={`/projects/${project.id}`} className="hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                        {project.title}
                    </Link>
                </h3>
                <p className="text-light-muted dark:text-dark-muted text-sm mb-4 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.slice(0, 3).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 bg-light-background dark:bg-dark-background text-light-secondary dark:text-dark-secondary text-xs rounded border border-light-secondary/20 dark:border-dark-secondary/20"
                            >
                                {tech}
                            </span>
                        ))}
                        {project.technologies.length > 3 && (
                            <span className="px-2 py-1 text-xs text-light-muted dark:text-dark-muted">+{project.technologies.length - 3}</span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
