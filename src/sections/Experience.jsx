import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

const experiences = [
  {
    company: 'Packforce Pvt Ltd',
    role: 'UI/UX Designer',
    period: 'August 2024 – Present',
    type: 'Current',
    responsibilities: [
      'SaaS product design',
      'Dashboard systems',
      'Responsive UI',
      'Frontend collaboration',
      'Design systems',
      'Developer handoff',
      'User-centered workflows',
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 md:py-32 relative">
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
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Experience</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Professional <span className="gradient-text">Journey</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-blue-500/20 to-transparent md:-translate-x-px" />
              
              <div className="relative flex flex-col md:flex-row gap-8">
                <div className="flex-1 md:text-right md:pr-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#0f2140]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5 text-left"
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="px-2 py-1 rounded-md bg-green-500/20 text-green-400 text-xs font-medium">
                        {exp.type}
                      </span>
                    </div>
                    <h3 className="text-white font-display font-bold text-xl mb-1">{exp.company}</h3>
                    <p className="text-blue-400 font-medium mb-2">{exp.role}</p>
                    <p className="text-gray-500 text-sm mb-4">{exp.period}</p>
                  </motion.div>
                </div>

                <div className="absolute left-0 md:left-1/2 top-8 w-4 h-4 rounded-full bg-blue-500 border-4 border-[#0a1628] -translate-x-1/2 md:translate-x-0" />

                <div className="flex-1 md:pl-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-[#0f2140]/50 backdrop-blur-sm rounded-2xl p-6 border border-white/5"
                  >
                    <h4 className="text-gray-400 text-sm font-semibold uppercase tracking-wider mb-3">Responsibilities</h4>
                    <div className="space-y-2">
                      {exp.responsibilities.map((resp, i) => (
                        <div key={i} className="flex items-center gap-2 text-gray-300 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                          {resp}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12"
          >
            <div className="relative">
              <div className="absolute left-0 md:left-1/2 top-0 w-px h-8 bg-gradient-to-b from-transparent to-blue-500/50 -translate-x-1/2 md:translate-x-0" />
              
              <div className="flex flex-col md:flex-row gap-8">
                <div className="flex-1" />
                
                <div className="flex-1 md:pl-12">
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    className="bg-gradient-to-br from-amber-500/10 to-orange-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20"
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <Award className="text-amber-400" size={20} />
                      </div>
                      <div>
                        <p className="text-amber-400 font-semibold text-sm">Design Impact Award 2025</p>
                        <p className="text-gray-500 text-xs">2024 - Present</p>
                      </div>
                    </div>
                    <p className="text-gray-400 text-sm">Recognized for contribution to product design and user experience excellence</p>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}