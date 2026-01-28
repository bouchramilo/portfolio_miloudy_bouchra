import { motion } from 'framer-motion';
import { GraduationCap } from 'lucide-react';
import { education } from '../../data/education';

export default function Education() {
    return (
        <section id="education" className="py-20 bg-light-background dark:bg-dark-background bg-opacity-50 dark:bg-opacity-50">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-4">
                        Parcours Académique
                    </h2>
                    <div className="w-20 h-1 bg-light-secondary dark:bg-dark-secondary mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="flex gap-4 md:gap-8 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-light-muted/10 dark:border-dark-muted/10"
                        >
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-12 h-12 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full flex items-center justify-center text-light-secondary dark:text-dark-secondary">
                                    <GraduationCap size={24} />
                                </div>
                            </div>
                            <div>
                                <span className="inline-block px-3 py-1 bg-light-background dark:bg-dark-background border border-light-muted/20 rounded-full text-xs font-medium text-light-muted dark:text-dark-muted mb-2">
                                    {edu.year}
                                </span>
                                <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-1">{edu.degree}</h3>
                                <h4 className="text-lg text-light-primary dark:text-dark-primary mb-2">{edu.school}</h4>
                                <p className="text-light-muted dark:text-dark-muted">
                                    {edu.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
