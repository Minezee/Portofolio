import { HiSun, HiMoon } from 'react-icons/hi'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const handleScroll = () => {
        if (window.scrollY > 20) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    return (
        <nav className="backdrop-blur-md sticky top-0 z-10 flex items-center justify-between px-10 py-5 text-white">
            <Link to={'/'} className="text-lg font-mono">
                Nauval Fahreza
                <div className="text-gray-400">Frontend Developer</div>
            </Link>

            <ul className="flex items-center gap-20 nav">
                <li><Link to={'/technology'}>Technology</Link></li>
                <li><Link to={'/project'}>Projects</Link></li>
                <li><a href="mailto:nauvalfahreza03@gmail.com">Contact</a></li>
            </ul>
            <div className="text-2xl text-yellow-400">
                <HiMoon />
            </div>
        </nav>
    )
}

export default Navbar