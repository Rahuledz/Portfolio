import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Target, GitBranch, Layout, Sparkles, TrendingUp } from 'lucide-react';

const steps = [
  {
    id: 1,
    title: 'Problem',
    description: 'Complex jewellery business workflows needed simplification for non-technical users',
    icon: Target,
    color: 'red',
  },
  {
    id: 2,
    title: 'User Flow',
    description: 'Mapped user journeys for buy, sell, pledge, and re-pledge operations',
    icon: GitBranch,
    color: 'blue',
  },
  {
    id: 3,
    title: 'Wireframes',
    description: 'Low-fidelity wireframes to establish layout and information hierarchy',
    icon: Layout,
    color: 'purple',
  },
  {
    id: 4,
    title: 'Final UI',
    description: 'High-fidelity designs with consistent design system and components',
    icon: Sparkles,
    color: 'cyan',
  },
  {
    id: 5,
    title: 'Design Decisions',
    description: 'Data-driven decisions focused on usability and conversion optimization',
    icon: Layout,
    color: 'amber',
  },
  {
    id: 6,
    title: 'Outcome',
    description: 'Improved user efficiency and reduced support tickets by 40%',
    icon: TrendingUp,
    color: 'green',
  },
];

const colorMap = {
  red: { bg: 'bg-red-500/10', border: 'border-red-500/30', text: 'text-red-400', hover: 'hover:bg-red-500/20' },
  blue: { bg: 'bg-blue-500/10', border: 'border-blue-500/30', text: 'text-blue-400', hover: 'hover:bg-blue-500/20' },
  purple: { bg: 'bg-purple-500/10', border: 'border-purple-500/30', text: 'text-purple-400', hover: 'hover:bg-purple-500/20' },
  cyan: { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400', hover: 'hover:bg-cyan-500/20' },
  amber: { bg: 'bg-amber-500/10', border: 'border-amber-500/30', text: 'text-amber-400', hover: 'hover:bg-amber-500/20' },
  green: { bg: 'bg-green-500/10', border: 'border-green-500/30', text: 'text-green-400', hover: 'hover:bg-green-500/20' },
};

export default function CaseStudy() {
  const [openStep, setOpenStep] = useState(null);

  const toggleStep = (id) => {
    setOpenStep(openStep === id ? null : id);
  };

  return (
    <section id="case-study" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Process</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Design <span className="gradient-text">Methodology</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
            A systematic approach to solving complex design challenges
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-4">
          {steps.map((step, index) => {
            const colors = colorMap[step.color];
            const Icon = step.icon;
            const isOpen = openStep === step.id;

            return (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <motion.div
                  whileHover={{ scale: 1.01 }}
                  className={`${colors.bg} backdrop-blur-sm rounded-xl border ${colors.border} overflow-hidden`}
                >
                  <button
                    onClick={() => toggleStep(step.id)}
                    className="w-full p-5 flex items-center justify-between text-left"
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${colors.bg} border ${colors.border}`}>
                        <Icon className={colors.text} size={20} />
                      </div>
                      <div>
                        <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">
                          Step {step.id}
                        </span>
                        <h3 className="text-white font-semibold text-lg">{step.title}</h3>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ChevronDown className="text-gray-500" size={20} />
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-5 pb-5 pt-0">
                          <div className="ml-12 p-4 bg-[#0a1628]/50 rounded-lg border border-white/5">
                            <div className="grid grid-cols-3 gap-3 mb-4">
                              {[...Array(6)].map((_, i) => (
                                <div key={i} className="h-20 bg-[#0f2140]/50 rounded-lg border border-white/5" />
                              ))}
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                              {step.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}