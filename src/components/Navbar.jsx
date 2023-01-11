import { HiSun, HiMoon } from 'react-icons/hi'
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const deviceWidth = window.innerWidth;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            {deviceWidth > 1000 ?
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
                :
                <nav>
                    <button onClick={() => setIsOpen(!isOpen)} className={`fixed top-10 right-10 flex flex-col justify-center items-center gap-3 backdrop-blur-sm z-50 h-24 w-24 rounded-full`}>
                        {/* navicon mobile */}
                        <div className={`${isOpen && "absolute rotate-45"} w-10 h-1 bg-white transition-all`}></div>
                        <div className={`${isOpen && "hidden"} w-10 h-1 bg-white`}></div>
                        <div className={`${isOpen && "rotate-[-45deg]"} w-10 h-1 bg-white transition-all`}></div>
                    </button>

                    <div className={`${isOpen ? "w-full h-full" : "w-0 h-0 rounded-2xl"} fixed right-0 top-0 backdrop-blur-xl z-40 transition-all duration-300 flex justify-center items-center`}>
                        {isOpen &&
                            <>
                                <div className="absolute top-16 left-16 text-yellow-400">
                                    <HiMoon className='text-5xl'/>
                                </div>
                                <ul className='flex flex-col text-5xl gap-40 font-semibold text-gray-300'>
                                        <li><Link onClick={() => setIsOpen(false)} to={'/'}>Home</Link></li>
                                        <li><Link onClick={() => setIsOpen(false)} to={'/technology'}>Technology</Link></li>
                                        <li><Link onClick={() => setIsOpen(false)} to={'/project'}>Projects</Link></li>
                                        <li><a href="mailto:nauvalfahreza03@gmail.com">Contact</a></li>
                                </ul>
                            </>}
                    </div>
                </nav>
            }
        </>
    )
}
{/* <nav className='fixed top-10 right-10 flex flex-col gap-3 backdrop-blur-sm p-5 rounded-full'>
<div className='w-10 h-1 bg-white'></div>
<div className='w-10 h-1 bg-white'></div>
<div className='w-10 h-1 bg-white'></div>
</nav> */}

export default Navbar