import { motion } from 'framer-motion';
import { FaWhatsapp, FaEnvelope, FaInstagram, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gradient-to-t from-black to-slate-900 relative">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">Get In <span className="text-sky-400">Touch</span></h2>
                    <p className="text-gray-400 max-w-xl mx-auto">Let's discuss your next project. Feel free to contact me anytime.</p>
                </motion.div>

                <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-10">
                    {/* Contact Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        <a href="mailto:junaidelankamal@gmail.com" className="flex items-center gap-5 p-5 bg-slate-800/40 rounded-2xl border border-slate-700 hover:border-sky-500/50 transition-colors group">
                            <div className="bg-slate-700/50 p-4 rounded-xl text-sky-400 group-hover:text-white transition-colors">
                                <FaEnvelope size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm">Email Me</h4>
                                <p className="text-white text-lg font-medium break-all">junaidelankamal@gmail.com</p>
                            </div>
                        </a>

                        <a href="https://wa.me/919645849718" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 bg-slate-800/40 rounded-2xl border border-slate-700 hover:border-green-500/50 transition-colors group">
                            <div className="bg-slate-700/50 p-4 rounded-xl text-green-500 group-hover:text-white transition-colors">
                                <FaWhatsapp size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm">WhatsApp</h4>
                                <p className="text-white text-lg font-medium">+91 9645849718</p>
                            </div>
                        </a>

                        <a href="https://instagram.com/junaid_elankamal" target="_blank" rel="noopener noreferrer" className="flex items-center gap-5 p-5 bg-slate-800/40 rounded-2xl border border-slate-700 hover:border-pink-500/50 transition-colors group">
                            <div className="bg-slate-700/50 p-4 rounded-xl text-pink-500 group-hover:text-white transition-colors">
                                <FaInstagram size={24} />
                            </div>
                            <div>
                                <h4 className="text-gray-400 text-sm">Instagram</h4>
                                <p className="text-white text-lg font-medium">@junaid_elankamal</p>
                            </div>
                        </a>
                    </motion.div>

                    {/* Simple Form (Visual Only for now or formspree) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="bg-slate-800/20 p-8 rounded-3xl border border-slate-700/50"
                    >
                        <h3 className="text-2xl font-bold text-white mb-6">Send Message</h3>
                        <form className="space-y-4" action="#" onSubmit={(e) => e.preventDefault()}>
                            <input type="text" placeholder="Your Name" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors" />
                            <input type="email" placeholder="Your Email" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors" />
                            <textarea placeholder="Your Message" rows="4" className="w-full bg-slate-900/50 border border-slate-700 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-sky-500 transition-colors"></textarea>
                            <button type="submit" className="w-full bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold py-4 rounded-xl transition-all transform hover:scale-[1.02]">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div className="mt-20 pt-8 border-t border-slate-800 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Junaid Portfolio. Built with React & Tailwind.</p>
                </div>
            </div>
        </section>
    );
};

export default Contact;
