import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaGithub, FaCut, FaMagic, FaVolumeUp, FaVideo } from 'react-icons/fa';
import { SiAdobeaftereffects, SiAdobepremierepro } from 'react-icons/si';

// Icons mapping for video editing if specific ones aren't perfect matches
const VideoIcon = () => <FaVideo />;

const Skills = () => {
    const videoSkills = [
        { name: 'CapCut', icon: <FaCut />, color: 'text-white' },
        { name: 'Transitions', icon: <FaMagic />, color: 'text-purple-400' },
        { name: 'Color Grading', icon: <SiAdobepremierepro />, color: 'text-purple-600' },
        { name: 'Audio Sync', icon: <FaVolumeUp />, color: 'text-green-400' },
        { name: 'Reels Editing', icon: <FaVideo />, color: 'text-pink-500' },
    ];

    const webSkills = [
        { name: 'HTML5', icon: <FaHtml5 />, color: 'text-orange-500' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: 'text-blue-500' },
        { name: 'JavaScript', icon: <FaJs />, color: 'text-yellow-400' },
        { name: 'React', icon: <FaReact />, color: 'text-blue-400' },
        { name: 'GitHub', icon: <FaGithub />, color: 'text-white' },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const item = {
        hidden: { y: 20, opacity: 0 },
        show: { y: 0, opacity: 1 }
    };

    return (
        <section id="skills" className="py-20 bg-slate-900/50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">My <span className="text-sky-400">Skills</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">Tools and technologies I use to bring ideas to life.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Video Editing Skills */}
                    <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-sky-500/30 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4 text-center">Video Editing</h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                        >
                            {videoSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/80 transition-all hover:-translate-y-1 group"
                                >
                                    <div className={`text-3xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`}>{skill.icon}</div>
                                    <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Web Development Skills */}
                    <div className="bg-slate-800/20 p-8 rounded-2xl border border-slate-700/50 hover:border-sky-500/30 transition-colors duration-300">
                        <h3 className="text-2xl font-bold text-white mb-8 border-b border-slate-700 pb-4 text-center">Web Development</h3>
                        <motion.div
                            variants={container}
                            initial="hidden"
                            whileInView="show"
                            viewport={{ once: true }}
                            className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                        >
                            {webSkills.map((skill, index) => (
                                <motion.div
                                    key={index}
                                    variants={item}
                                    className="flex flex-col items-center justify-center p-4 bg-slate-800/50 rounded-xl hover:bg-slate-700/80 transition-all hover:-translate-y-1 group"
                                >
                                    <div className={`text-3xl mb-3 ${skill.color} group-hover:scale-110 transition-transform`}>{skill.icon}</div>
                                    <span className="text-gray-300 text-sm font-medium text-center">{skill.name}</span>
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
