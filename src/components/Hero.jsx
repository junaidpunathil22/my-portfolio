import { motion } from 'framer-motion';
import { FaPlay, FaArrowDown } from 'react-icons/fa';
// Image moved to public folder

import { Link } from 'react-scroll';

const Hero = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="/hero-bg.jpg"
                    alt="Junaid - Freelance Video Editor & Web Developer"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/80 to-slate-900"></div>
            </div>

            <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-[-50px]">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm font-medium tracking-wider mb-6 backdrop-blur-md">
                        AVAILABLE FOR FREELANCE
                    </span>

                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">Junaid</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light max-w-3xl mx-auto leading-relaxed">
                        I help brands and individuals grow with <span className="text-white font-medium">engaging videos</span> and <span className="text-white font-medium">clean, responsive websites</span>.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                >
                    <a
                        href="https://www.instagram.com/reel/Czd_YeBqEu_/?igsh=MXVjN3J0d2RtaHVwdw=="
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white rounded-full font-semibold transition-all transform hover:scale-105 shadow-xl shadow-sky-500/20"
                    >
                        <span className="bg-white/20 rounded-full p-1 group-hover:bg-white/30 transition-colors">
                            <FaPlay size={12} className="ml-0.5" />
                        </span>
                        Watch Showreel
                    </a>

                    <Link
                        to="contact"
                        smooth={true}
                        duration={500}
                        className="cursor-pointer px-8 py-4 border border-white/20 hover:border-white/40 text-gray-200 hover:text-white rounded-full font-semibold transition-all bg-white/5 hover:bg-white/10 backdrop-blur-sm"
                    >
                        Contact Me
                    </Link>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-400 animate-bounce"
            >
                <FaArrowDown />
            </motion.div>
        </section>
    );
};

export default Hero;
