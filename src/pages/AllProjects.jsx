import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import FilterBar from '../components/projects/FilterBar';
import ProjectCard from '../components/projects/ProjectCard';
import { projects } from '../data/projects';

export default function AllProjects() {
    const [activeFilter, setActiveFilter] = useState("Tous");
    const [activeTech, setActiveTech] = useState("Tous");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = projects.filter((project) => {
        // Filter by Type
        const matchType = activeFilter === "Tous" || project.type === activeFilter;

        // Filter by Tech
        const matchTech = activeTech === "Tous" || project.technologies.includes(activeTech);

        // Filter by Search Query
        const matchSearch =
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());

        return matchType && matchTech && matchSearch;
    });

    return (
        <div className="min-h-screen py-20 bg-light-background dark:bg-dark-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-light-text dark:text-dark-text mb-4">
                        Tous mes Projets
                    </h1>
                    <p className="text-light-muted dark:text-dark-muted max-w-2xl mx-auto">
                        Explorez l'ensemble de mes réalisations, filtrables par catégorie et technologie.
                    </p>
                </motion.div>

                <FilterBar
                    activeFilter={activeFilter}
                    setActiveFilter={setActiveFilter}
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                    activeTech={activeTech}
                    setActiveTech={setActiveTech}
                />

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                            >
                                <ProjectCard project={project} />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {filteredProjects.length === 0 && (
                    <div className="text-center py-20 text-light-muted dark:text-dark-muted">
                        <p className="text-xl">Aucun projet ne correspond à vos critères.</p>
                        <button
                            onClick={() => { setActiveFilter("Tous"); setActiveTech("Tous"); setSearchQuery(""); }}
                            className="mt-4 text-light-primary dark:text-dark-primary hover:underline"
                        >
                            Réinitialiser les filtres
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
}
