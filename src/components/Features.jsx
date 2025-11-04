import { motion } from "framer-motion";

const features = [
  { title: "Automation", desc: "Save time with smart workflow automations." },
  {
    title: "Collaboration",
    desc: "Work together in real time with your team.",
  },
  { title: "Analytics", desc: "Track performance and optimize productivity." },
];

const Features = () => {
  return (
    <section id="features" className="py-24 px-6 bg-[#111215]">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10 text-white">
          Powerful Features
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((f, i) => (
            <motion.div
              key={i}
              className="p-8 rounded-2xl border border-gray-700 bg-white/5 backdrop-blur-md text-left hover:border-indigo-400 hover:bg-white/10 transition-all duration-300"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <h3 className="text-xl font-semibold mb-3 text-indigo-400">
                {f.title}
              </h3>
              <p className="text-gray-400">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
