import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="py-20 px-6 md:px-16 bg-indigo-600 text-center rounded-2xl mx-6 md:mx-20 my-24 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
          Join thousands of teams using Aurora
        </h2>
        <p className="text-indigo-100 mb-8 text-sm md:text-base">
          Start your free trial today — no credit card required.
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition"
        >
          Get Started
        </motion.button>
      </motion.div>

      {/* subtle aurora glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.15)_0%,transparent_70%)] opacity-50 pointer-events-none" />
    </section>
  );
};

export default CTA;
