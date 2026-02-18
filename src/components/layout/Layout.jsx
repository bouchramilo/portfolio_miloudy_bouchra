import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import GlobalMouseTrail from '../effects/GlobalMouseTrail';

export default function Layout() {
    return (
        <div className="min-h-screen flex flex-col bg-light-background dark:bg-dark-background text-light-text dark:text-dark-text font-body transition-colors duration-300 relative">
            <GlobalMouseTrail />
            <Header />
            <main className="flex-grow pt-16 md:pt-24">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}
