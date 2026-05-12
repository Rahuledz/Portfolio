import { motion } from 'framer-motion';
import { Quote, Award, Star } from 'lucide-react';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Recognition</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Awards & <span className="gradient-text">Recognition</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className="bg-gradient-to-br from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-8 md:p-10 border border-amber-500/20 relative overflow-hidden"
          >
            <div className="absolute top-4 right-4">
              <Quote className="text-amber-500/20" size={48} />
            </div>

            <div className="relative">
              <div className="flex items-center gap-2 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="text-amber-400 fill-amber-400" size={20} />
                ))}
              </div>

              <blockquote className="text-white/90 text-xl md:text-2xl font-medium leading-relaxed mb-6">
                "Recognized with Design Impact Award 2025 for contribution to product design and user experience excellence."
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-amber-500/20">
                  <Award className="text-amber-400" size={24} />
                </div>
                <div>
                  <p className="text-white font-semibold">Packforce Pvt Ltd</p>
                  <p className="text-amber-400 text-sm">2025 Recognition</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}