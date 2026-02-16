import { motion } from 'framer-motion';
import { Mail, Linkedin, Instagram, Github, ArrowRight } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="py-20 bg-light-text dark:bg-dark-background text-white relative overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-light-primary/10 dark:bg-dark-primary/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-light-secondary/10 dark:bg-dark-secondary/10 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>

            <div className="container mx-auto px-4 z-10 relative">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto text-center"
                >
                    <span className="text-light-primary dark:text-dark-primary font-bold tracking-wider uppercase mb-4 block">
                        Contactez-moi
                    </span>
                    <h2 className="text-3xl md:text-5xl font-heading font-bold text-white mb-8">
                        Prêt à démarrer un projet ensemble ?
                    </h2>
                    <p className="text-gray-300 text-lg mb-12 max-w-2xl mx-auto">
                        Je suis toujours à la recherche de nouvelles opportunités et challenges.
                        Que vous ayez une question ou juste envie de dire bonjour, ma boîte de réception est toujours ouverte !
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
                        <a
                            href="mailto:contact@example.com"
                            className="flex items-center justify-center gap-3 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="p-3 bg-light-primary dark:bg-dark-primary rounded-full text-white group-hover:scale-110 transition-transform">
                                <Mail size={24} />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-white">Email</h4>
                                <p className="text-sm text-gray-300">miloudybouchra01@gmail.com</p>
                            </div>
                        </a>

                        <a
                            href="https://www.linkedin.com/in/bouchra-miloudy-197824329/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="p-3 bg-[#0077b5] rounded-full text-white group-hover:scale-110 transition-transform">
                                <Linkedin size={24} />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-white">LinkedIn</h4>
                                <p className="text-sm text-gray-300">Connectons-nous</p>
                            </div>
                        </a>

                        <a
                            href="https://www.instagram.com/bou13chra27?igsh=Z3FoeXRkdmdjYjUz"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="p-3 bg-[#E1306C] rounded-full text-white group-hover:scale-110 transition-transform">
                                <Instagram size={24} />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-white">Instagram</h4>
                                <p className="text-sm text-gray-300">Suivez mon quotidien</p>
                            </div>
                        </a>

                        <a
                            href="https://github.com/bouchramilo"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                        >
                            <div className="p-3 bg-[#333] rounded-full text-white group-hover:scale-110 transition-transform">
                                <Github size={24} />
                            </div>
                            <div className="text-left">
                                <h4 className="font-bold text-white">GitHub</h4>
                                <p className="text-sm text-gray-300">Explorer mon code</p>
                            </div>
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
