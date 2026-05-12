import { motion } from 'framer-motion';
import { PenTool, Monitor, Code } from 'lucide-react';

const skillCategories = [
  {
    title: 'UI/UX Design',
    icon: PenTool,
    skills: ['Wireframing', 'Prototyping', 'User Research', 'Design Systems', 'Responsive Design', 'Dashboard Design'],
    color: 'blue',
  },
  {
    title: 'Tools',
    icon: Monitor,
    skills: ['Figma', 'Adobe XD', 'Photoshop', 'Premiere Pro', 'After Effects'],
    color: 'purple',
  },
  {
    title: 'Frontend',
    icon: Code,
    skills: ['HTML', 'CSS', 'JavaScript', 'React.js'],
    color: 'cyan',
  },
];

const platforms = ['AWS Amplify', 'AWS CloudFront', 'MySQL'];

const colorMap = {
  blue: {
    bg: 'bg-blue-500/10',
    border: 'border-blue-500/20',
    text: 'text-blue-400',
    hover: 'hover:bg-blue-500/20',
  },
  purple: {
    bg: 'bg-purple-500/10',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    hover: 'hover:bg-purple-500/20',
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    hover: 'hover:bg-cyan-500/20',
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl -translate-x-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Skills</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Tools & <span className="gradient-text">Expertise</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {skillCategories.map((category, categoryIndex) => {
            const colors = colorMap[category.color];
            const Icon = category.icon;
            
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                className={`${colors.bg} backdrop-blur-sm rounded-2xl p-6 border ${colors.border}`}
              >
                <div className={`inline-flex p-3 rounded-xl ${colors.bg} border ${colors.border} mb-4`}>
                  <Icon className={colors.text} size={24} />
                </div>
                <h3 className="text-white font-semibold text-lg mb-4">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05 }}
                      className={`px-3 py-1.5 rounded-lg bg-[#0f2140]/50 border border-white/5 text-gray-300 text-sm ${colors.hover} transition-all cursor-default`}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-red-500/10 backdrop-blur-sm rounded-2xl p-6 border border-amber-500/20"
        >
          <h3 className="text-white font-semibold mb-4">Platforms & Infrastructure</h3>
          <div className="flex flex-wrap gap-2">
            {platforms.map((platform) => (
              <motion.span
                key={platform}
                whileHover={{ scale: 1.05 }}
                className="px-3 py-1.5 rounded-lg bg-[#0f2140]/50 border border-white/5 text-gray-300 text-sm hover:bg-amber-500/20 transition-all cursor-default"
              >
                {platform}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}