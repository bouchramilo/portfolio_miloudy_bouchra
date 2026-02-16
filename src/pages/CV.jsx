import { motion } from 'framer-motion';
import { Download } from 'lucide-react';

export default function CV() {
    return (
        <div className="min-h-screen py-20 bg-light-background dark:bg-dark-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-heading font-bold text-light-text dark:text-dark-text mb-4">
                        Mon CV
                    </h1>
                    <p className="text-light-muted dark:text-dark-muted mb-8">
                        Visualisez et téléchargez mon parcours détaillé.
                    </p>

                    <a
                        href="/assets/documents/Bouchra MILOUDY - CV.pdf"
                        download="Bouchra MILOUDY - CV.pdf"
                        className="inline-flex items-center gap-2 px-8 py-3 bg-light-primary dark:bg-dark-primary text-white rounded-full font-medium hover:bg-light-primary/90 dark:hover:bg-dark-primary/90 transition-colors shadow-lg hover:shadow-xl"
                    >
                        <Download size={20} />
                        Télécharger le PDF
                    </a>
                </motion.div>

                {/* PDF Preview */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white dark:bg-zinc-800 p-4 rounded-xl shadow-2xl border border-light-muted/10 dark:border-dark-muted/10 aspect-[1/1.4] md:aspect-[1/1.4] w-full max-w-3xl mx-auto flex flex-col items-center justify-center text-light-muted dark:text-dark-muted overflow-hidden"
                >
                    <iframe
                        src="/assets/documents/Bouchra MILOUDY - CV.pdf"
                        className="w-full h-full rounded-lg"
                        title="CV Viewer"
                    ></iframe>
                </motion.div>
            </div>
        </div>
    );
}
