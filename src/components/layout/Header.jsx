import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Sun, Moon } from 'lucide-react';

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);
    const location = useLocation();

    const navItems = [
        { name: 'Accueil', path: '/' },
        { name: 'Projets', path: '/projects' },
        { name: 'CV', path: '/cv' },
    ];

    // Initialize theme based on localStorage or system preference
    useEffect(() => {
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            setIsDark(true);
            document.documentElement.classList.add('dark');
        } else {
            setIsDark(false);
            document.documentElement.classList.remove('dark');
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.theme = 'light';
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.theme = 'dark';
            setIsDark(true);
        }
    };

    const isActive = (path) => location.pathname === path;

    return (
        <header className="fixed top-0 w-full bg-light-background/80 dark:bg-dark-background/80 backdrop-blur-md z-50 border-b border-light-secondary/20 dark:border-dark-secondary/20 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <Link to="/" className="text-2xl font-heading font-bold text-light-primary dark:text-dark-primary">
                        Miloudy Bouchra
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8 items-center">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                className={`text-sm font-medium transition-colors duration-200 ${isActive(item.path)
                                        ? 'text-light-primary dark:text-dark-primary'
                                        : 'text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            className={`text-sm font-medium transition-colors duration-200 ${isActive('/contact')
                                    ? 'text-light-primary dark:text-dark-primary'
                                    : 'text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'
                                }`}
                        >
                            Contact
                        </Link>

                        {/* Theme Toggle Button */}
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10 transition-colors"
                            aria-label="Toggle Dark Mode"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                    </nav>

                    {/* Mobile Menu Button & Theme Toggle */}
                    <div className="flex items-center gap-4 md:hidden">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-full text-light-text dark:text-dark-text hover:bg-light-secondary/10 dark:hover:bg-dark-secondary/10 transition-colors"
                        >
                            {isDark ? <Sun size={20} /> : <Moon size={20} />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary p-2"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className="md:hidden bg-light-background dark:bg-dark-background border-b border-light-secondary/20 dark:border-dark-secondary/20 transition-colors duration-300">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={`block px-3 py-2 rounded-md text-base font-medium ${isActive(item.path)
                                        ? 'text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/10'
                                        : 'text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'
                                    }`}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <Link
                            to="/contact"
                            onClick={() => setIsMenuOpen(false)}
                            className={`block px-3 py-2 rounded-md text-base font-medium ${isActive('/contact')
                                    ? 'text-light-primary dark:text-dark-primary bg-light-primary/10 dark:bg-dark-primary/10'
                                    : 'text-light-text dark:text-dark-text hover:text-light-primary dark:hover:text-dark-primary'
                                }`}
                        >
                            Contact
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}
