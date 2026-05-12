import { motion } from 'framer-motion';
import { Linkedin, Github } from './Icons';
import { Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="text-center md:text-left">
            <p className="text-gray-400 text-sm">
              Designed & Developed by{' '}
              <span className="text-white font-medium">Rahul P</span>
            </p>
            <p className="text-gray-600 text-xs mt-1">
              {currentYear} All rights reserved.
            </p>
          </div>

          <div className="flex items-center gap-4">
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="mailto:rahul@example.com"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
            >
              <Mail size={18} />
            </motion.a>
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, y: -2 }}
              className="p-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-400 hover:text-white transition-all"
            >
              <Github size={18} />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}