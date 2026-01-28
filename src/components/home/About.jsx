import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="py-20 bg-light-background dark:bg-dark-background">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    {/* Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2 flex justify-center"
                    >
                        <div className="relative w-64 h-64 md:w-80 md:h-80">
                            <div className="absolute inset-0 border-2 border-light-primary dark:border-dark-primary rounded-full transform translate-x-4 translate-y-4" />
                            <img
                                src="https://placehold.co/400x400?text=Photo+Profil"
                                alt="Miloudy Bouchra"
                                className="w-full h-full object-cover rounded-full shadow-lg z-10 relative"
                            />
                        </div>
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="w-full md:w-1/2"
                    >
                        <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-6">
                            À propos de moi
                        </h2>
                        <p className="text-light-muted dark:text-dark-muted mb-6 leading-relaxed">
                            Bonjour ! Je suis Miloudy Bouchra, une développeuse passionnée par la création de solutions innovantes.
                            Avec une solide formation en informatique et une spécialisation en Intelligence Artificielle,
                            j'aime combiner la rigueur du code avec la créativité du design.
                        </p>
                        <p className="text-light-muted dark:text-dark-muted mb-6 leading-relaxed">
                            Mon objectif est de construire des applications qui non seulement fonctionnent parfaitement,
                            mais offrent également une expérience utilisateur exceptionnelle. Je suis constamment en train d'apprendre
                            de nouvelles technologies pour rester à la pointe de l'industrie.
                        </p>

                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <div className="border-l-4 border-light-primary dark:border-dark-primary pl-4">
                                <h4 className="font-bold text-light-text dark:text-dark-text">Expérience</h4>
                                <p className="text-sm text-light-muted dark:text-dark-muted">2+ Ans</p>
                            </div>
                            <div className="border-l-4 border-light-secondary dark:border-dark-secondary pl-4">
                                <h4 className="font-bold text-light-text dark:text-dark-text">Projets</h4>
                                <p className="text-sm text-light-muted dark:text-dark-muted">10+ Réalisés</p>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
