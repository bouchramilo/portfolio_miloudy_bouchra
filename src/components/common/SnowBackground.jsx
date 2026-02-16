import { useEffect, useRef, useState } from 'react';

export default function SnowBackground() {
    const canvasRef = useRef(null);
    const [isDark, setIsDark] = useState(document.documentElement.classList.contains('dark'));

    useEffect(() => {
        // Observer to detect theme changes
        const observer = new MutationObserver((mutations) => {
            mutations.forEach((mutation) => {
                if (mutation.attributeName === 'class') {
                    setIsDark(document.documentElement.classList.contains('dark'));
                }
            });
        });

        observer.observe(document.documentElement, { attributes: true });

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        let animationFrameId;
        let particles = [];

        const handleResize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            initParticles();
        };

        class Particle {
            constructor(x, y, directionX, directionY, size, color) {
                this.x = x;
                this.y = y;
                this.directionX = directionX;
                this.directionY = directionY;
                this.size = size;
                this.color = color;
            }

            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
                ctx.fillStyle = this.color;
                ctx.fill();
            }

            update() {
                this.x += this.directionX;
                this.y += this.directionY;

                // Reset particle if it goes off screen
                if (this.y > canvas.height || this.x > canvas.width || this.x < 0) {
                    this.y = -10;
                    this.x = Math.random() * canvas.width;
                }

                this.draw();
            }
        }

        const initParticles = () => {
            particles = [];
            const numberOfParticles = (canvas.width * canvas.height) / 15000; // Less dense than network
            for (let i = 0; i < numberOfParticles; i++) {
                let size = (Math.random() * 2) + 1;
                let x = Math.random() * canvas.width;
                let y = Math.random() * canvas.height;
                // Snow falls down (positive Y) with slight wind (random X)
                let directionX = (Math.random() * 1) - 0.5;
                let directionY = (Math.random() * 1) + 0.5;

                // Color based on theme (White on dark, Gray on light)
                let color = isDark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(100, 100, 100, 0.2)';

                particles.push(new Particle(x, y, directionX, directionY, size, color));
            }
        }

        const animate = () => {
            animationFrameId = requestAnimationFrame(animate);
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            for (let i = 0; i < particles.length; i++) {
                particles[i].update();
            }
        }

        window.addEventListener('resize', handleResize);

        handleResize();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
        };
    }, [isDark]);

    return (
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
            <canvas
                ref={canvasRef}
                className="block w-full h-full"
                style={{ width: '100%', height: '100%' }}
            />
        </div>
    );
}
