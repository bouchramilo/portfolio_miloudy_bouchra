import { motion } from 'framer-motion';
import { Briefcase } from 'lucide-react';
import { experience } from '../../data/experience';

export default function Experience() {
    return (
        <section id="experience" className="py-20 bg-light-background dark:bg-dark-background">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-4">
                        Expériences Professionnelles
                    </h2>
                    <div className="w-20 h-1 bg-light-primary dark:bg-dark-primary mx-auto"></div>
                </motion.div>

                <div className="max-w-4xl mx-auto">
                    {experience.map((job, index) => (
                        <motion.div
                            key={job.id}
                            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative pl-8 md:pl-0 border-l-4 md:border-l-0 border-light-secondary/30 dark:border-dark-secondary/30 pb-12 last:pb-0"
                        >
                            {/* Timeline Line for Desktop */}
                            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-light-secondary/30 dark:bg-dark-secondary/30 transform -translate-x-1/2"></div>

                            {/* Timeline Dot */}
                            <div className="absolute left-[-10px] md:left-1/2 top-0 w-5 h-5 bg-light-primary dark:bg-dark-primary rounded-full md:transform md:-translate-x-1/2 border-4 border-light-background dark:border-dark-background"></div>

                            <div className={`flex flex-col md:flex-row items-start ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <div className="md:w-1/2 md:px-8">
                                    <div className={`bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-light-primary dark:border-dark-primary ${index % 2 === 0 ? 'text-left' : 'md:text-right'}`}>
                                        <div className={`flex items-center gap-2 mb-2 text-light-primary dark:text-dark-primary font-bold ${index % 2 === 0 ? '' : 'md:justify-end'}`}>
                                            <Briefcase size={18} />
                                            <span>{job.period}</span>
                                        </div>
                                        <h3 className="text-xl font-bold text-light-text dark:text-dark-text mb-1 max-w-full break-words">{job.role}</h3>
                                        <h4 className="text-lg text-light-secondary dark:text-dark-secondary mb-3">{job.company}</h4>
                                        <p className="text-light-muted dark:text-dark-muted text-sm leading-relaxed">
                                            {job.description}
                                        </p>
                                    </div>
                                </div>
                                <div className="md:w-1/2"></div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
