import { motion } from 'framer-motion'
import { Code, Smartphone, Cloud, Layout, Shield, Zap, Globe, Database, Laptop, Server } from 'lucide-react'
import rudrappaImg from '../assets/rudrappa.png'
import praveenImg from '../assets/praveen.png'

export default function About() {
    const services = [
        {
            icon: Globe,
            title: 'Web Development',
            description: 'We build responsive, high-performance websites using the latest technologies like React, Next.js, and Node.js. Our web solutions are SEO-friendly, scalable, and designed to convert visitors into customers.'
        },
        {
            icon: Smartphone,
            title: 'Mobile App Development',
            description: 'Native and cross-platform mobile apps for Android and iOS. We create seamless, intuitive mobile experiences that keep users engaged, utilizing frameworks like React Native and Flutter.'
        },
        {
            icon: Layout,
            title: 'UI/UX Design',
            description: 'Our design philosophy centers on the user. We create stunning, pixel-perfect interfaces that are not only beautiful but also intuitive and easy to navigate, ensuring a delightful user experience.'
        },
        {
            icon: Cloud,
            title: 'AWS Cloud Services',
            description: 'Leveraging the power of Amazon Web Services (AWS) for secure, scalable, and reliable infrastructure. We handle everything from server setup and database management to cloud migration and DevOps.'
        }
    ]

    return (
        <div className="min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        About{' '}
                        <div className="inline-flex">
                            {"SoftForge Technologies".split("").map((char, index) => (
                                <motion.span
                                    key={index}
                                    className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent inline-block origin-bottom"
                                    animate={{
                                        scale: [1, 1.2, 1],
                                        opacity: [1, 0.8, 1],
                                        y: [0, -5, 0]
                                    }}
                                    transition={{
                                        duration: 2,
                                        repeat: Infinity,
                                        delay: index * 0.1,
                                        ease: "easeInOut"
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </div>
                    </h1>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Your Partner in Digital Transformation. We craft exceptional digital experiences through innovative software solutions.
                    </p>
                </motion.div>

                {/* Our Story / Who We Are */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mb-20 grid md:grid-cols-2 gap-12 items-center"
                >
                    <div className="p-8 bg-gradient-to-br from-blue-900/20 to-purple-900/20 backdrop-blur-md border border-white/10 rounded-3xl">
                        <h2 className="text-3xl font-bold mb-6">Who We Are</h2>
                        <p className="text-gray-300 text-lg leading-relaxed mb-4">
                            At <strong className="text-white">SoftForge Technologies</strong>, we are more than just a software company; we are architects of the digital future. We specialize in building cutting-edge web and mobile applications that empower businesses to thrive in a connected world.
                        </p>
                        <p className="text-gray-300 text-lg leading-relaxed">
                            Our team of passionate developers and designers combines technical expertise with creative vision to deliver software that is robust, scalable, and visually stunning. We believe that great software should not only work perfectly but also look beautiful.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <Code className="w-8 h-8 mx-auto mb-2 text-blue-400" />
                            <h3 className="font-semibold">Clean Code</h3>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <Shield className="w-8 h-8 mx-auto mb-2 text-purple-400" />
                            <h3 className="font-semibold">Secure</h3>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <Zap className="w-8 h-8 mx-auto mb-2 text-yellow-400" />
                            <h3 className="font-semibold">Fast</h3>
                        </div>
                        <div className="p-6 bg-white/5 rounded-2xl border border-white/10 text-center">
                            <Database className="w-8 h-8 mx-auto mb-2 text-green-400" />
                            <h3 className="font-semibold">Scalable</h3>
                        </div>
                    </div>
                </motion.div>

                {/* Our Expertise Section */}
                <div className="mb-20">
                    <h2 className="text-4xl font-bold text-center mb-12">
                        Our <span className="text-purple-400">Expertise</span>
                    </h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-8 bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-md border border-white/10 rounded-2xl hover:border-purple-500/50 transition-colors group"
                            >
                                <div className="flex items-start space-x-4">
                                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                                        <p className="text-gray-400 leading-relaxed">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Meet the Founders Section */}
                <div className="mb-20">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl font-bold mb-4">Meet the <span className="text-blue-400">Visionaries</span></h2>
                        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                            The driving force behind SoftForge Technologies' innovation and success.
                        </p>
                    </motion.div>

                    <div className="space-y-16">
                        {/* Rudrappa H M */}
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row gap-10 items-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-blue-500/30 transition-colors"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl relative p-[2px] bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500">
                                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900">
                                        <img
                                            src={rudrappaImg}
                                            alt="Rudrappa H M"
                                            className="w-full h-full object-cover brightness-75"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-left">
                                <h3 className="text-3xl font-bold mb-2">Rudrappa H M</h3>
                                <div className="mb-6 flex items-center gap-2">
                                    <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-500/30">Co-Founder</span>
                                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">Lead Developer</span>
                                    <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent ml-2">SoftForge Technologies</span>
                                </div>
                                <p className="text-gray-300 leading-8 text-lg mb-6">
                                    As the architectural mind behind SoftForge Technologies, Rudrappa brings a blend of technical brilliance and strategic foresight. With deep expertise in full-stack development, he envisions software not just as code, but as a catalyst for business transformation. His commitment to scalable, clean, and efficient architecture ensures that every SoftForge Technologies solution is future-proof. He leads the development team with a philosophy rooted in continuous learning and excellence, driving the company to push the boundaries of what's possible in web and mobile technology.
                                </p>
                                <div className="flex gap-4">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Code className="w-5 h-5 text-blue-400" />
                                        <span>System Architecture</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Server className="w-5 h-5 text-green-400" />
                                        <span>Backend Engineering</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Praveen G */}
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="flex flex-col md:flex-row-reverse gap-10 items-center bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 hover:border-purple-500/30 transition-colors"
                        >
                            <div className="flex-shrink-0">
                                <div className="w-64 h-80 rounded-2xl overflow-hidden shadow-2xl relative p-[2px] bg-gradient-to-br from-purple-500 via-pink-500 to-blue-500">
                                    <div className="w-full h-full rounded-2xl overflow-hidden bg-gray-900 flex items-center justify-center">
                                        <img
                                            src={praveenImg}
                                            alt="Praveen G"
                                            className="w-full h-full object-cover brightness-75"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="text-left md:text-right">
                                <h3 className="text-3xl font-bold mb-2">Praveen G</h3>
                                <div className="mb-6 flex items-center gap-2 justify-start md:justify-end">
                                    <span className="text-xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mr-2">SoftForge Technologies</span>
                                    <span className="bg-purple-500/20 text-purple-300 px-3 py-1 rounded-full text-sm font-medium border border-purple-500/30">Co-Founder</span>
                                    <span className="bg-pink-500/20 text-pink-300 px-3 py-1 rounded-full text-sm font-medium border border-pink-500/30">Tech Lead</span>
                                </div>
                                <p className="text-gray-300 leading-8 text-lg mb-6">
                                    Praveen is the creative and technical force that bridges the gap between complex functionality and user-centric design. Leading the technology strategy at SoftForge Technologies, he focuses on delivering high-performance applications that are intuitive and engaging. His passion lies in solving intricate problems with elegant solutions, ensuring that the end-user experience is always paramount. Praveen's leadership fosters a culture of innovation, where every challenge is viewed as an opportunity to create something extraordinary and impactful.
                                </p>
                                <div className="flex gap-4 justify-start md:justify-end">
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Smartphone className="w-5 h-5 text-pink-400" />
                                        <span>Mobile Innovation</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-400">
                                        <Database className="w-5 h-5 text-indigo-400" />
                                        <span>Data Strategy</span>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Technology Stack CTA */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="p-12 bg-gradient-to-r from-indigo-900/60 to-purple-900/60 rounded-3xl border border-white/10 text-center"
                    >
                        <h2 className="text-3xl md:text-4xl font-bold mb-6">Powered by Modern Technology</h2>
                        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-8">
                            We utilize a robust stack including React, Node.js, Python, PostgreSQL, and AWS to ensure your application is built to last and ready to scale.
                        </p>
                        <div className="flex flex-wrap justify-center gap-4">
                            <span className="px-4 py-2 bg-blue-600/20 border border-blue-500/30 rounded-full text-blue-300">React</span>
                            <span className="px-4 py-2 bg-green-600/20 border border-green-500/30 rounded-full text-green-300">Node.js</span>
                            <span className="px-4 py-2 bg-yellow-600/20 border border-yellow-500/30 rounded-full text-yellow-300">AWS</span>
                            <span className="px-4 py-2 bg-pink-600/20 border border-pink-500/30 rounded-full text-pink-300">Framer Motion</span>
                            <span className="px-4 py-2 bg-cyan-600/20 border border-cyan-500/30 rounded-full text-cyan-300">Tailwind CSS</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
