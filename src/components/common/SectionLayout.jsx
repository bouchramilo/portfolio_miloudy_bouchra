import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { LayoutList, GitCommitHorizontal, GraduationCap, Briefcase } from 'lucide-react';

export default function SectionLayout({ title, data, type = 'education', defaultLayout = 'list' }) {
    const [layout, setLayout] = useState(defaultLayout);

    const isEducation = type === 'education';
    const Icon = isEducation ? GraduationCap : Briefcase;
    const accentColor = isEducation ? 'light-primary dark:text-dark-primary' : 'light-primary dark:text-dark-primary';
    const accentBg = isEducation ? 'bg-light-primary dark:bg-dark-primary' : 'bg-light-primary dark:bg-dark-primary';
    const accentBorder = isEducation ? 'border-light-primary dark:border-dark-primary' : 'border-light-primary dark:border-dark-primary';

    // Helper to normalize data fields
    const items = data.map(item => ({
        id: item.id,
        title: isEducation ? item.degree : item.role,
        subtitle: isEducation ? item.school : item.company,
        date: isEducation ? item.year : item.period,
        description: item.description
    }));

    const renderDescription = (description) => {
        if (!description) return null;
        return description.split('\n').map((line, index) => (
            <span key={index} className="block">
                {line}
            </span>
        ));
    };

    return (
        <section id={type} className="py-20 bg-light-background dark:bg-dark-background odd:bg-opacity-50 odd:dark:bg-opacity-50">
            <div className="container mx-auto px-4">
                {/* Header with Toggle */}
                {/* Header with Toggle */}
                <div className="flex flex-col items-center mb-16 gap-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-2">
                            {title}
                        </h2>
                        <div className={`w-20 h-1 ${accentBg} mx-auto`}></div>
                    </motion.div>
                </div>

                {/* Content */}
                <div className="max-w-4xl mx-auto min-h-[400px]">
                    <AnimatePresence mode="wait">
                        {layout === 'list' ? (
                            <motion.div
                                key="list"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="space-y-6"
                            >
                                {items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex flex-col md:flex-row gap-4 md:gap-8 bg-white dark:bg-zinc-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-light-muted/10 dark:border-dark-muted/10"
                                    >
                                        <div className="flex-shrink-0">
                                            <div className={`w-12 h-12 ${isEducation ? 'bg-light-secondary/10 dark:bg-dark-secondary/10 text-light-secondary dark:text-dark-secondary' : 'bg-light-primary/10 dark:bg-dark-primary/10 text-light-primary dark:text-dark-primary'} rounded-full flex items-center justify-center`}>
                                                <Icon size={24} />
                                            </div>
                                        </div>
                                        <div className="flex-grow">
                                            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-2">
                                                <div>
                                                    <h3 className="text-xl font-bold text-light-text dark:text-dark-text">{item.title}</h3>
                                                    <h4 className={`text-lg ${isEducation ? 'text-light-primary dark:text-dark-primary' : 'text-light-secondary dark:text-dark-secondary'}`}>{item.subtitle}</h4>
                                                </div>
                                                <span className="inline-block px-3 py-1 bg-light-background dark:bg-dark-background border border-light-muted/20 rounded-full text-xs font-medium text-light-muted dark:text-dark-muted whitespace-nowrap">
                                                    {item.date}
                                                </span>
                                            </div>
                                            <div className="text-light-muted dark:text-dark-muted">
                                                {renderDescription(item.description)}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        ) : (
                            <motion.div
                                key="timeline"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.3 }}
                                className="relative py-8"
                            >
                                {/* Vertical Line */}
                                <div className={`absolute left-4 md:left-1/2 top-4 bottom-4 w-0.5 ${isEducation ? 'bg-light-secondary/30 dark:bg-dark-secondary/30' : 'bg-light-primary/30 dark:bg-dark-primary/30'} transform md:-translate-x-1/2`}></div>

                                {items.map((item, index) => (
                                    <motion.div
                                        key={item.id}
                                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className={`relative flex items-center justify-between md:justify-normal mb-8 last:mb-0 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                                    >
                                        {/* Dot */}
                                        <div className={`absolute left-4 md:left-1/2 w-4 h-4 ${isEducation ? 'bg-light-secondary dark:bg-dark-secondary' : 'bg-light-primary dark:bg-dark-primary'} rounded-full transform -translate-x-1/2 md:-translate-x-1/2 border-4 border-light-background dark:border-dark-background z-10`}></div>

                                        {/* Spacer for one side */}
                                        <div className="hidden md:block w-5/12"></div>

                                        {/* Content Card */}
                                        <div className="w-full pl-12 md:pl-0 md:w-5/12">
                                            <div className={`bg-white dark:bg-zinc-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border-t-4 ${accentBorder} ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                                                <div className={`flex items-center gap-2 mb-2 font-bold ${isEducation ? 'text-light-primary dark:text-dark-primary' : 'text-light-secondary dark:text-dark-secondary'} ${index % 2 === 0 ? '' : 'md:flex-row-reverse'}`}>
                                                    <span className="text-sm">{item.date}</span>
                                                </div>
                                                <h3 className="text-lg font-bold text-light-text dark:text-dark-text mb-1">{item.title}</h3>
                                                <h4 className="text-md text-light-muted dark:text-dark-muted mb-3">{item.subtitle}</h4>
                                                <div className="text-sm text-light-muted dark:text-dark-muted leading-relaxed">
                                                    {renderDescription(item.description)}
                                                </div>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
