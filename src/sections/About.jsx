import { motion } from 'framer-motion';
import { GraduationCap, Building2, Sparkles } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 md:py-32 relative">
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
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">About Me</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Designing with <span className="gradient-text">Purpose</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-2xl blur-xl" />
              <div className="relative bg-[#0f2140]/50 backdrop-blur-sm rounded-2xl p-8 border border-white/5">
                <div className="w-full h-64 bg-gradient-to-br from-[#162d54] to-[#0f2140] rounded-xl flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-3 p-6">
                    {[...Array(9)].map((_, i) => (
                      <div key={i} className="w-16 h-16 bg-[#1e3a6e]/50 rounded-lg border border-white/5" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <GraduationCap className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">BCA Graduate</h3>
                  <p className="text-gray-500 text-sm">Bachelor of Computer Applications</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-blue-500/10 border border-blue-500/20">
                  <Building2 className="text-blue-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">UI/UX Designer at Packforce Pvt Ltd</h3>
                  <p className="text-gray-500 text-sm">August 2024 – Present</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/20">
                  <Sparkles className="text-amber-400" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-1">Design Impact Award 2025</h3>
                  <p className="text-gray-500 text-sm">Recognized for contribution to product design</p>
                </div>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed">
              Experienced in designing SaaS products, dashboard systems, CRM, billing platforms, and business applications. 
              Strong focus on user-centered design and creating scalable, enterprise-grade interfaces. 
              Collaborative approach with frontend teams for seamless design-to-code handoff.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}