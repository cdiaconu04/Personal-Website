import '../App.css';
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "motion/react";
import { forwardRef } from 'react';
import ContactBackground from './backgrounds/ContactBackground';
import emailjs from "emailjs-com";

const Contact = forwardRef(({ windowSize }, ref) => {
    const sectionRef = useRef(null);
    const [isInView, setIsInView] = useState(false);

    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => setIsInView(entry.isIntersecting),
            { threshold: 0.1 }
        );

        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => {
            if (sectionRef.current) observer.unobserve(sectionRef.current);
        };
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.send(
            process.env.REACT_APP_SERVICE_ID,
            process.env.REACT_APP_TEMPLATE_ID,
            {
                title: "Contact Form Message",
                name: formData.name,
                email: formData.email,
                message: formData.message,
            },
            process.env.REACT_APP_PUBLIC_KEY
        )
        .then(() => {
            alert("Email sent successfully!");
            setFormData({ name: "", email: "", message: "" });
        })
        .catch((err) => {
            console.error("Error:", err);
            alert("There was a problem sending your message. Please try again later.");
        });
    };

    return (
        <div className="w-full bg-white dark:bg-black relative inline-block transition duration-200" ref={ref}>
            {windowSize === "xs" ? <div/> : <ContactBackground inView={isInView}/>}

            <div className="max-w-screen-xl mx-auto min-h-screen flex items-center justify-center relative overflow-hidden
                2xl:p-4 xl:p-20 lg:p-20 md:p-20 p-10
            " >
                <motion.section
                    ref={sectionRef}
                    variants={{
                        hidden: { opacity: 0 },
                        show: {
                            opacity: 1,
                            transition: { staggerChildren: 0.25 },
                        },
                    }}
                    initial="hidden"
                    animate={isInView ? "show" : "hidden"}
                    className="w-full"
                >
                    <motion.div variants={{ hidden: { opacity: 0 }, show: { opacity: 1 } }}
                        className="flex flex-col gap-11 items-center justify-center w-full"
                    >
                        <h2 className="text-gray-800 dark:text-white font-bold underline decoration-emerald-400 dark:decoration-emerald-600 transition duration-200
                            2xl:text-5xl xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl text-xl 
                        ">
                            Contact
                        </h2>

                        <motion.div whileHover={{ y: -7 }} className="w-full flex justify-center items-center">
                            <motion.div className="rounded-lg transition duration-200
                                2xl:p-7 xl:p-6 lg:p-5 md:p-4 p-3
                                dark:bg-gradient-to-r dark:from-emerald-600 dark:via-green-600 dark:to-green-700 
                                bg-gradient-to-r from-emerald-400 via-green-400 to-green-500 
                                flex flex-col
                                xl:gap-6 lg:gap-5 md:gap-4 sm:gap-3 gap-2
                                lg:min-w-[60%] md:min-w-[70%] min-w-full 
                            ">
                                <h3 className="text-gray-800 dark:text-white font-bold transition duration-200 text-center
                                    2xl:text-3xl xl:text-3xl lg:text-2xl md:text-xl 
                                ">
                                    Let's get in touch!
                                </h3>

                                <form onSubmit={handleSubmit} className="flex flex-col w-full
                                    xl:gap-4 lg:gap-3 sm:gap-2 gap-2
                                ">
                                    <input
                                        type="text"
                                        name="name"
                                        placeholder="Your Name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="rounded-lg border-none focus:outline-none placeholder-gray-500
                                            text-gray-950 dark:text-gray-700 bg-white dark:bg-green-300
                                            xl:text-base lg:text-sm text-xs 
                                            xl:p-3 md:p-2 sm:p-1.5 p-1
                                            "
                                        required
                                    />

                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Your Email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="rounded-lg border-none focus:outline-none placeholder-gray-500
                                            text-gray-950 dark:text-gray-700 bg-white dark:bg-green-300
                                            xl:text-base lg:text-sm text-xs 
                                            xl:p-3 md:p-2 sm:p-1.5 p-1
                                            "
                                        required
                                    />

                                    <textarea
                                        name="message"
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="5"
                                        className="rounded-lg border-none focus:outline-none placeholder-gray-500
                                            text-gray-950 dark:text-gray-700 bg-white dark:bg-green-300
                                            xl:text-base lg:text-sm text-xs 
                                            xl:p-3 md:p-2 sm:p-1.5 p-1
                                            "
                                        required
                                    />
                                    {/* hover:bg-gradient-to-r hover:from-emerald-500 hover:via-green-500 hover:to-green-600 */}
                                    <motion.button type="submit" 
                                        whileHover={{ scale: 1.01 }}
                                        whileTap={{ scale: 0.99 }}
                                        className="rounded-lg font-bold
                                        text-white transition duration-200
                                        bg-gradient-to-r from-emerald-500 via-green-500 to-green-600
                                        dark:bg-gradient-to-r dark:from-emerald-400 dark:via-green-400 dark:to-green-500
                                        hover:bg-gradient-to-r hover:from-emerald-600 hover:via-green-600 hover:to-green-700
                                        dark:hover:bg-gradient-to-r dark:hover:from-emerald-500 dark:hover:via-green-500 dark:hover:to-green-600
                                        xl:text-xl lg:text-lg sm:text-base text-sm
                                        xl:p-3 md:p-2 p-1
                                        ">
                                        Send
                                    </motion.button>

                                </form>

                            </motion.div>
                        </motion.div>

                    </motion.div>

                </motion.section>
            </div>
        </div>
    );
});

export default Contact;
