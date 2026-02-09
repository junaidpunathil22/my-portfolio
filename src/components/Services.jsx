import { motion } from 'framer-motion';
import { FaFilm, FaLaptopCode, FaRobot, FaCheckCircle } from 'react-icons/fa';

const Services = () => {
    const services = [
        {
            icon: <FaFilm />,
            title: "Video Editing",
            desc: "Budget-friendly professional editing for any occasion.",
            features: [
                "Wedding & Function Highlights",
                "Social Media Reels (Instagram/TikTok)",
                "Inauguration & Event Videos",
                "Color Correction & Grading",
                "Audio Cleanup & Sync"
            ],
            color: "text-rose-400",
            bg: "bg-rose-500/10",
            border: "border-rose-500/20"
        },
        {
            icon: <FaLaptopCode />,
            title: "Web Development",
            desc: "Modern, static websites tailored to your needs.",
            features: [
                "Responsive Design (Mobile Friendly)",
                "Premium Animations & Effects",
                "AI-Powered Features Integration",
                "Landing Pages & Portfolios",
                "Clean & Fast Loading Code"
            ],
            color: "text-sky-400",
            bg: "bg-sky-500/10",
            border: "border-sky-500/20"
        }
    ];

    return (
        <section id="services" className="py-20 relative bg-slate-900">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">My <span className="text-sky-400">Services</span></h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">High-quality services tailored to your budget and needs.</p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.2 }}
                            viewport={{ once: true }}
                            className={`p-8 rounded-3xl ${service.bg} border ${service.border} backdrop-blur-sm hover:translate-y-[-5px] transition-transform duration-300`}
                        >
                            <div className={`text-4xl mb-6 ${service.color} p-4 bg-slate-900/50 rounded-2xl w-fit`}>
                                {service.icon}
                            </div>
                            <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                            <p className="text-gray-300 mb-8 leading-relaxed">{service.desc}</p>

                            <ul className="space-y-3">
                                {service.features.map((feature, idx) => (
                                    <li key={idx} className="flex items-center text-gray-400 text-sm">
                                        <FaCheckCircle className={`mr-3 ${service.color} flex-shrink-0`} />
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
