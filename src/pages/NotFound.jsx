import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home } from 'lucide-react';
import SnowBackground from '../components/common/SnowBackground';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-light-background dark:bg-dark-background px-4 relative overflow-hidden">
      <SnowBackground />
      <div className="text-center relative z-10">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-9xl font-heading font-bold text-light-primary dark:text-dark-primary mb-4"
        >
          404
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-2xl md:text-4xl font-bold text-light-text dark:text-dark-text mb-6"
        >
          Page Introuvable
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-light-muted dark:text-dark-muted text-lg mb-8 max-w-md mx-auto"
        >
          Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-light-primary dark:bg-dark-primary text-white rounded-full font-medium hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
          >
            <Home size={20} />
            Retour à l'accueil
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
