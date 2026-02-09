import { motion } from 'framer-motion';
import { FaVideo, FaCode, FaLaptopCode, FaMagic } from 'react-icons/fa';

const About = () => {
    const experiences = [
        { id: 1, year: '2015 - Present', title: 'Freelance Video Editor', desc: 'Specializing in social media content, weddings, and commercials.' },
        { id: 2, year: 'Recent', title: 'Web Developer', desc: 'Building clean, fast, & responsive static websites.' },
    ];

    return (
        <section id="about" className="py-20 bg-slate-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">About <span className="text-sky-400">Me</span></h2>
                    <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="glass p-8 rounded-2xl border border-sky-500/10"
                    >
                        <h3 className="text-2xl font-bold text-white mb-4">Who am I?</h3>
                        <p className="text-gray-300 leading-relaxed mb-6">
                            I’m a freelance <span className="text-sky-400 font-semibold">Video Editor</span> and beginner <span className="text-sky-400 font-semibold">Web Developer</span>.
                            I specialize in professional video editing for social media, YouTube, and business content.
                            Alongside editing, I create clean and simple websites that load fast and look good on all devices.
                        </p>
                        <p className="text-gray-300 leading-relaxed">
                            I currently use tools like <span className="text-white font-medium">VS Code</span>, <span className="text-white font-medium">CapCut</span>, and AI-powered workflows to deliver premium results.
                        </p>

                        <div className="flex gap-4 mt-8">
                            <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-xl min-w-[100px]">
                                <span className="text-3xl font-bold text-sky-400">8+</span>
                                <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Years Exp</span>
                            </div>
                            <div className="flex flex-col items-center p-4 bg-slate-800/50 rounded-xl min-w-[100px]">
                                <span className="text-3xl font-bold text-sky-400">100+</span>
                                <span className="text-xs text-gray-400 mt-1 uppercase tracking-wider">Projects</span>
                            </div>
                        </div>
                    </motion.div>

                    <div className="space-y-6">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.id}
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 * index }}
                                viewport={{ once: true }}
                                className="flex gap-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50 hover:bg-slate-800/50 transition-colors"
                            >
                                <div className="mt-1 text-sky-400 text-xl">
                                    {index === 0 ? <FaVideo /> : <FaCode />}
                                </div>
                                <div>
                                    <span className="text-sm text-sky-400 font-medium">{exp.year}</span>
                                    <h4 className="text-xl font-bold text-white mt-1 mb-2">{exp.title}</h4>
                                    <p className="text-gray-400 text-sm">{exp.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
