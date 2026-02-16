import { certifications } from '../../data/certifications';
import ParticleBackground from '../common/ParticleBackground';

export default function Certificats() {
    return (
        <section id="creative-skills" className="relative w-full py-20 overflow-hidden bg-light-background dark:bg-dark-background transition-colors duration-300">
            {/* Overlay Content */}
            <div className="relative z-10 px-4 pointer-events-none">
                <div className="max-w-4xl mx-auto text-center mb-12">

                    <h2 className="text-3xl md:text-4xl font-heading font-bold text-light-text dark:text-dark-text mb-4">
                        Certificats
                    </h2>
                    <div className={`w-20 h-1 bg-light-primary dark:bg-dark-primary mx-auto`}></div>
                    <p className="text-light-muted dark:text-orange-100/60 text-lg max-w-2xl mx-auto pointer-events-auto transition-colors duration-300 mt-6">
                        Mes certifications et accomplissements techniques.
                    </p>
                </div>

                <div className="pointer-events-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                    {certifications.map((cert, idx) => (
                        <div key={idx} className="bg-light-secondary/10 dark:bg-white/5 backdrop-blur-sm border border-light-text/10 dark:border-white/10 p-4 rounded-xl hover:border-light-primary/40 dark:hover:border-orange-500/40 transition-colors group hover:bg-light-secondary/20 dark:hover:bg-white/10 cursor-default">
                            <div className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full bg-light-primary dark:bg-orange-500 shadow-[0_0_5px_rgba(245,158,11,1)] dark:shadow-[0_0_5px_rgba(249,115,22,1)] group-hover:scale-150 transition-transform flex-shrink-0"></div>
                                <div className="text-left">
                                    <h4 className="text-light-text dark:text-white font-bold text-lg transition-colors">{cert.name}</h4>
                                    <p className="text-sm text-light-muted dark:text-gray-400 transition-colors">{cert.org}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Canvas Container */}
            <ParticleBackground />
        </section>
    );
}
