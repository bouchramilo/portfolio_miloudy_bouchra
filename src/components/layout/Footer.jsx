import { Mail, Linkedin, Instagram, Github } from 'lucide-react';

export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-light-background dark:bg-dark-background border-t border-light-secondary/20 dark:border-dark-secondary/20 py-12 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">

                    {/* Copyright */}
                    <div className="text-center md:text-left">
                        <h3 className="text-lg font-heading font-bold text-light-text dark:text-dark-text">Miloudy Bouchra</h3>
                        <p className="text-sm text-light-muted dark:text-dark-muted mt-1">
                            © {year} Tous droits réservés.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex space-x-6">
                        <a href="mailto:miloudybouchra01@gmail.com" className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                            <Mail size={20} />
                            <span className="sr-only">Email</span>
                        </a>
                        <a href="https://www.linkedin.com/in/bouchra-miloudy-197824329/" target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                            <Linkedin size={20} />
                            <span className="sr-only">LinkedIn</span>
                        </a>
                        <a href="https://www.instagram.com/bou13chra27?igsh=Z3FoeXRkdmdjYjUz" target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                            <Instagram size={20} />
                            <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://github.com/bouchramilo" target="_blank" rel="noopener noreferrer" className="text-light-muted dark:text-dark-muted hover:text-light-primary dark:hover:text-dark-primary transition-colors">
                            <Github size={20} />
                            <span className="sr-only">GitHub</span>
                        </a>
                    </div>

                    {/* Stack Info */}
                    <div className="text-sm text-light-muted dark:text-dark-muted text-center md:text-right">
                        <p>Développé avec React & Tailwind</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
