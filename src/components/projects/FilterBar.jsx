import { motion } from 'framer-motion';
import { Search } from 'lucide-react';

export default function FilterBar({
    activeFilter,
    setActiveFilter,
    searchQuery,
    setSearchQuery,
    activeTech,
    setActiveTech
}) {
    const filters = ["Tous", "IA", "DATA", "Full Stack"];
    const technologies = ["Tous", "React", "Python", "Tailwind CSS", "Node.js", "TensorFlow"];

    return (
        <div className="mb-12 space-y-6">
            {/* Search Input */}
            <div className="relative max-w-md mx-auto">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-light-muted dark:text-dark-muted">
                    <Search size={20} />
                </div>
                <input
                    type="text"
                    className="block w-full pl-10 pr-3 py-3 border border-light-secondary/20 dark:border-dark-secondary/20 rounded-full leading-5 bg-white dark:bg-zinc-800 text-light-text dark:text-dark-text placeholder-light-muted dark:placeholder-dark-muted focus:outline-none focus:ring-2 focus:ring-light-primary dark:focus:ring-dark-primary transition-all shadow-sm"
                    placeholder="Rechercher un projet..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-6">
                {/* Type Filter */}
                <div className="flex flex-wrap justify-center gap-2">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            onClick={() => setActiveFilter(filter)}
                            className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${activeFilter === filter
                                    ? 'bg-light-primary dark:bg-dark-primary text-white shadow-md transform scale-105'
                                    : 'bg-light-background dark:bg-dark-background text-light-muted dark:text-dark-muted hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10'
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                {/* Tech Filter (Simple Select-like list for now, or just pills) */}
                <div className="flex flex-wrap justify-center gap-2 border-l-0 md:border-l border-light-secondary/20 dark:border-dark-secondary/20 pl-0 md:pl-6">
                    <span className="text-sm text-light-muted dark:text-dark-muted self-center mr-2 hidden md:inline-block">Tech:</span>
                    {technologies.map((tech) => (
                        <button
                            key={tech}
                            onClick={() => setActiveTech(tech)}
                            className={`px-3 py-1 rounded text-xs font-medium transition-colors border ${activeTech === tech
                                    ? 'border-light-secondary dark:border-dark-secondary text-light-secondary dark:text-dark-secondary bg-light-secondary/10 dark:bg-dark-secondary/10'
                                    : 'border-transparent text-light-muted dark:text-dark-muted hover:text-light-text dark:hover:text-dark-text'
                                }`}
                        >
                            {tech}
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}
