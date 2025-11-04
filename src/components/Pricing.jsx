import { useState } from "react";
import { motion } from "framer-motion";

const plans = [
  {
    name: "Starter",
    price: "Free",
    features: ["Basic tools", "1 team", "Community support"],
  },
  {
    name: "Pro",
    price: "$12/mo",
    features: ["Unlimited projects", "Priority support", "Advanced analytics"],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    features: ["Dedicated support", "Custom integrations", "SLAs"],
  },
];

const Pricing = () => {
  const [formPlan, setFormPlan] = useState(null);

  return (
    <>
      <section id="pricing" className="py-24 px-6 bg-[#111215] text-white">
        <section className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">
            Simple, transparent pricing
          </h2>

          <section className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, i) => (
              <motion.section
                key={i}
                className={`relative p-8 rounded-2xl border backdrop-blur-md bg-white/5 hover:bg-white/10 transition-all duration-300 ${
                  plan.popular
                    ? "border-indigo-400 shadow-[0_0_20px_-5px_rgba(99,102,241,0.4)]"
                    : "border-gray-700"
                }`}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                {plan.popular && (
                  <section className="absolute -top-3 right-4 bg-indigo-500 text-xs font-semibold px-3 py-1 rounded-full">
                    Most Popular
                  </section>
                )}

                <h3 className="text-xl font-semibold mb-2 text-indigo-400">
                  {plan.name}
                </h3>
                <p className="text-2xl font-bold mb-6">{plan.price}</p>

                <ul className="text-gray-400 space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j}>{f}</li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setFormPlan(plan.name)}
                  className={`px-6 py-2 rounded-lg transition ${
                    plan.popular
                      ? "bg-indigo-500 hover:bg-indigo-600"
                      : "border border-gray-500 hover:border-indigo-400"
                  }`}
                >
                  Choose Plan
                </motion.button>
              </motion.section>
            ))}
          </section>
        </section>

        {/* Mock form overlay */}
        {formPlan && (
          <section className="fixed inset-0 flex items-center justify-center bg-black/80 z-50">
            <section className="bg-black rounded-lg p-10 w-90 relative">
              <button
                onClick={() => setFormPlan(null)}
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700 font-bold"
              >
                ✕
              </button>
              <h2 className="text-xl font-bold mb-4">
                Start {formPlan} Plan Trial
              </h2>
              <input
                className="w-full p-2 border rounded mb-4"
                placeholder="Your email"
              />
              <button
                onClick={() => setFormPlan(null)}
                className="w-full bg-indigo-500 text-white py-2 rounded hover:bg-indigo-600"
              >
                Submit
              </button>
            </section>
          </section>
        )}
      </section>
    </>
  );
};

export default Pricing;
