import { motion } from "framer-motion";

const Hero = () => {
  return (
      <section id="hero" className="flex flex-col items-center justify-center text-center py-24 px-6 max-w-4xl mx-auto h-screen">
      <motion.h1
        className="text-4xl md:text-6xl font-bold leading-tight mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Supercharge your workflow with{" "}
        <span className="text-indigo-400">Aurora</span>.
      </motion.h1>

      <motion.p
        className="text-gray-300 mb-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Aurora helps your team collaborate in real-time, automate tasks, and
        stay focused on what matters most.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <button className="bg-indigo-500 px-6 py-3 rounded-lg text-sm hover:bg-indigo-600 transition">
          Get Started
        </button>
        <button className="border border-gray-500 px-6 py-3 rounded-lg text-sm hover:border-indigo-400 transition">
          Learn More
        </button>
      </motion.div>
    </section>
  );
};

export default Hero;
