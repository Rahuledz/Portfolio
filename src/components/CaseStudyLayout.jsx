import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeft, ExternalLink, Calendar, Clock, Wrench, User,
  Target, GitBranch, Layout, Sparkles, TrendingUp, AlertTriangle,
  CheckCircle, ArrowRight, ChevronRight, Layers, Package, Users,
  FileText, BarChart2, ShoppingBag, CreditCard, ChefHat, Clock as ClockIcon,
  Building, Search, Smartphone, Database, PenTool, Send, Mail, MessageSquare,
  DollarSign, Wallet, PieChart, Activity, ArrowUpRight, ArrowDownRight,
  ChevronLeft, X
} from 'lucide-react';
import { caseStudyData } from '../data/caseStudyData';

const colorMap = {
  cyan: {
    gradient: 'from-cyan-500/30 via-blue-500/20 to-transparent',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    accentBg: 'bg-cyan-500/10',
    glow: 'shadow-cyan-500/20',
    gradientText: 'from-cyan-400 to-blue-500',
    button: 'bg-cyan-500 hover:bg-cyan-400',
    cardBorder: 'border-cyan-500/20',
    hover: 'hover:border-cyan-500/40',
    iconBg: 'bg-cyan-500/20',
    statGradient: 'from-cyan-500/40 to-blue-500/20',
  },
  amber: {
    gradient: 'from-amber-500/30 via-orange-500/20 to-transparent',
    border: 'border-amber-500/30',
    accent: 'text-amber-400',
    accentBg: 'bg-amber-500/10',
    glow: 'shadow-amber-500/20',
    gradientText: 'from-amber-400 to-orange-500',
    button: 'bg-amber-500 hover:bg-amber-400',
    cardBorder: 'border-amber-500/20',
    hover: 'hover:border-amber-500/40',
    iconBg: 'bg-amber-500/20',
    statGradient: 'from-amber-500/40 to-orange-500/20',
  },
  blue: {
    gradient: 'from-blue-500/30 via-cyan-500/20 to-transparent',
    border: 'border-blue-500/30',
    accent: 'text-blue-400',
    accentBg: 'bg-blue-500/10',
    glow: 'shadow-blue-500/20',
    gradientText: 'from-blue-400 to-cyan-500',
    button: 'bg-blue-500 hover:bg-blue-400',
    cardBorder: 'border-blue-500/20',
    hover: 'hover:border-blue-500/40',
    iconBg: 'bg-blue-500/20',
    statGradient: 'from-blue-500/40 to-cyan-500/20',
  },
  purple: {
    gradient: 'from-purple-500/30 via-pink-500/20 to-transparent',
    border: 'border-purple-500/30',
    accent: 'text-purple-400',
    accentBg: 'bg-purple-500/10',
    glow: 'shadow-purple-500/20',
    gradientText: 'from-purple-400 to-pink-500',
    button: 'bg-purple-500 hover:bg-purple-400',
    cardBorder: 'border-purple-500/20',
    hover: 'hover:border-purple-500/40',
    iconBg: 'bg-purple-500/20',
    statGradient: 'from-purple-500/40 to-pink-500/20',
  },
  orange: {
    gradient: 'from-orange-500/30 via-red-500/20 to-transparent',
    border: 'border-orange-500/30',
    accent: 'text-orange-400',
    accentBg: 'bg-orange-500/10',
    glow: 'shadow-orange-500/20',
    gradientText: 'from-orange-400 to-red-500',
    button: 'bg-orange-500 hover:bg-orange-400',
    cardBorder: 'border-orange-500/20',
    hover: 'hover:border-orange-500/40',
    iconBg: 'bg-orange-500/20',
    statGradient: 'from-orange-500/40 to-red-500/20',
  },
};

const iconMap = {
  Search, Building, TrendingUp, Smartphone, FileText, PenTool, BarChart2,
  GitBranch, Layers, Package, Users, Clock, ShoppingBag, CreditCard,
  ChefHat, Database, Send, Mail, MessageSquare, DollarSign, Wallet,
  PieChart, Activity, Target, Layout, Sparkles, AlertTriangle
};

function StickyNavigation({ data, colors }) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    { id: 'overview', label: 'Overview' },
    { id: 'problem', label: 'Problem' },
    { id: 'goals', label: 'Goals' },
    { id: 'research', label: 'Research' },
    { id: 'flow', label: 'User Flow' },
    // { id: 'wireframes', label: 'Wireframes' },
    // { id: 'final-ui', label: 'Final UI' },
    { id: 'decisions', label: 'Decisions' },
    { id: 'challenges', label: 'Challenges' },
    { id: 'outcomes', label: 'Outcomes' },
  ];

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          className="fixed top-0 left-0 right-0 z-50 bg-navy-900/95 backdrop-blur-lg border-b border-white/10"
        >
          <div className="max-w-7xl mx-auto px-4 py-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className={`px-3 py-1.5 rounded-lg ${colors.accentBg} ${colors.border} border`}>
                  <span className={`font-display font-bold ${colors.accent}`}>{data.title}</span>
                </div>
                <span className="text-gray-400 text-sm">{data.subtitle}</span>
              </div>
              <div className="flex items-center gap-1">
                {sections.slice(0, 5).map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className="px-3 py-1.5 text-xs text-gray-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {section.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function HeroSection({ data, colors }) {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      <div className={`absolute inset-0 bg-gradient-to-b ${colors.gradient} opacity-50`} />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-current opacity-5 rounded-full blur-3xl" style={{ color: colors.accent.replace('text-', '') }} />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-current opacity-5 rounded-full blur-3xl" style={{ color: colors.accent.replace('text-', '') }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-6 group"
            >
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span className="text-sm">Back to Portfolio</span>
            </button>

            <div className="flex flex-wrap gap-2 mb-4">
              {data.tags.slice(0, 3).map((tag, i) => (
                <span key={i} className={`px-3 py-1 rounded-full text-xs ${colors.accentBg} ${colors.accent}`}>
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4">
              {data.title}
            </h1>
            <p className={`text-xl md:text-2xl ${colors.accent} mb-6`}>
              {data.subtitle}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              {data.description}
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                { icon: User, label: 'Role', value: data.role },
                { icon: Clock, label: 'Duration', value: data.duration },
                { icon: Calendar, label: 'Category', value: data.category },
                { icon: Wrench, label: 'Tools', value: data.tools.slice(0, 2).join(', ') },
              ].map((item, i) => (
                <div key={i} className={`p-3 rounded-xl ${colors.accentBg} border ${colors.cardBorder}`}>
                  <div className="flex items-center gap-2 mb-1">
                    <item.icon size={14} className={colors.accent} />
                    <span className="text-gray-500 text-xs">{item.label}</span>
                  </div>
                  <p className="text-white text-sm font-medium truncate">{item.value}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              {data.externalUrl ? (
                <a
                  href={data.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl ${colors.button} text-white font-semibold transition-all hover:scale-105`}
                >
                  <ExternalLink size={18} />
                  Visit Website
                </a>
              ) : (
                <button
                  className={`flex items-center gap-2 px-6 py-3 rounded-xl ${colors.button} text-white font-semibold transition-all hover:scale-105`}
                >
                  <ExternalLink size={18} />
                  View Live
                </button>
              )}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className={`relative bg-navy-800/50 rounded-2xl border ${colors.border} p-6 backdrop-blur-sm`}>
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
              <ProductMockup type={data.id} colors={colors} />
            </div>
            <div className={`absolute -inset-4 bg-gradient-to-r ${colors.gradient} opacity-30 blur-2xl rounded-3xl -z-10`} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProductMockup({ type, colors }) {
  const mockups = {
    packforce: () => (
      <div className="w-full h-64 md:h-80 bg-navy-900 rounded-lg p-3 flex flex-col">
        <div className="flex items-center gap-2 mb-2">
          <div className="flex gap-1.5">
            <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
            <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
          </div>
          <div className="flex-1 h-5 bg-navy-700 rounded flex items-center px-2">
            <div className="w-3 h-3 rounded-full bg-cyan-500/50 mr-2" />
            <span className="text-[8px] text-gray-400">packforce.ai</span>
          </div>
        </div>
        <div className="flex-1 bg-navy-700/50 rounded overflow-hidden">
          <div className="h-8 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center px-3">
            <div className="w-16 h-2 bg-white/20 rounded" />
            <div className="flex gap-2 ml-auto">
              <div className="w-8 h-2 bg-white/10 rounded" />
              <div className="w-10 h-2 bg-cyan-500/40 rounded" />
            </div>
          </div>
          <div className="p-3 flex gap-3">
            <div className="flex-1 space-y-2">
              <div className="h-6 bg-gradient-to-r from-white/10 to-transparent rounded" />
              <div className="h-3 w-3/4 bg-white/5 rounded" />
              <div className="h-3 w-1/2 bg-white/5 rounded" />
              <div className="flex gap-2 mt-3">
                <div className="h-6 w-16 bg-cyan-500/40 rounded" />
                <div className="h-6 w-16 bg-white/10 rounded" />
              </div>
            </div>
            <div className="w-1/3 bg-navy-600/50 rounded p-2">
              <div className="h-2 w-1/2 bg-white/20 rounded mb-2" />
              <div className="space-y-1">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="h-4 bg-white/10 rounded flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-500/60" />
                    <div className="flex-1 h-1 bg-white/10 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="h-px bg-white/5 mx-3" />
          <div className="p-3 grid grid-cols-3 gap-2">
            {[1, 2, 3].map(i => (
              <div key={i} className="h-12 bg-navy-600/50 rounded p-2">
                <div className="h-2 w-1/2 bg-white/20 rounded mb-1" />
                <div className="h-3 bg-gradient-to-r from-cyan-500/40 to-transparent rounded" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    honeybee: () => (
      <div className="w-full h-64 md:h-80 bg-navy-900 rounded-lg p-3 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex-1 bg-navy-700/50 rounded p-2">
            <div className={`text-[10px] ${colors.accent} font-semibold mb-1`}>GOLD RATE (24K)</div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-white">₹6,245</span>
              <span className="text-[9px] text-green-400">+0.8%</span>
            </div>
            <div className="h-3 mt-1 bg-gradient-to-r from-green-500/40 to-transparent rounded" />
          </div>
          <div className="flex-1 bg-navy-700/50 rounded p-2">
            <div className="text-[10px] text-gray-400 font-semibold mb-1">TODAY'S SALES</div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-white">₹12.5L</span>
              <span className="text-[9px] text-green-400">+15%</span>
            </div>
            <div className="h-3 mt-1 bg-gradient-to-r from-blue-500/40 to-transparent rounded" />
          </div>
        </div>
        <div className="flex gap-2">
          {['BUY', 'SELL', 'PLEDGE'].map((action, i) => (
            <div key={action} className={`flex-1 ${i === 0 ? 'bg-amber-500/20' : i === 1 ? 'bg-blue-500/20' : 'bg-purple-500/20'} rounded p-2 flex items-center justify-center`}>
              <span className={`text-[10px] font-semibold ${i === 0 ? 'text-amber-400' : i === 1 ? 'text-blue-400' : 'text-purple-400'}`}>{action}</span>
            </div>
          ))}
        </div>
        <div className="flex-1 bg-navy-700/50 rounded p-2">
          <div className="text-[10px] text-gray-400 mb-1">RECENT TRANSACTIONS</div>
          <div className="space-y-1.5">
            {['Gold Necklace - ₹45,000', 'Gold Ring - ₹8,500', 'Pledge - ₹12,000', 'Gold Chain - ₹22,000'].map((item, i) => (
              <div key={i} className="flex items-center justify-between text-[9px]">
                <span className="text-gray-300 truncate">{item}</span>
                <span className="text-amber-400 font-medium">₹{(Math.random() * 50000 + 5000).toFixed(0)}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-navy-700/30 rounded p-1.5 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-green-500" />
            <span className="text-[8px] text-gray-400">Active Pledges: 12</span>
          </div>
          <div className="flex-1 bg-navy-700/30 rounded p-1.5 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-amber-500" />
            <span className="text-[8px] text-gray-400">Expiring: 3</span>
          </div>
        </div>
      </div>
    ),
    falcon: () => (
      <div className="w-full h-64 md:h-80 bg-navy-900 rounded-lg p-3 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex-1 bg-navy-700/50 rounded p-2">
            <div className={`text-[10px] ${colors.accent} font-semibold mb-1`}>DELIVERED</div>
            <div className="text-xl font-bold text-white">2,847</div>
            <div className="h-3 mt-1 bg-gradient-to-r from-green-500/60 to-green-500/20 rounded" />
          </div>
          <div className="flex-1 bg-navy-700/50 rounded p-2">
            <div className="text-[10px] text-gray-400 font-semibold mb-1">OPEN RATE</div>
            <div className="text-xl font-bold text-white">89%</div>
            <div className="h-3 mt-1 bg-gradient-to-r from-blue-500/60 to-blue-500/20 rounded" />
          </div>
        </div>
        <div className="flex-1 bg-navy-700/50 rounded p-2">
          <div className="text-[10px] text-gray-400 mb-1">ACTIVE CAMPAIGNS</div>
          <div className="space-y-1.5">
            {[
              { name: 'Flash Sale 2024', status: 'Active', color: 'bg-green-500' },
              { name: 'New Arrivals', status: 'Scheduled', color: 'bg-blue-500' },
              { name: 'Weekend Special', status: 'Active', color: 'bg-green-500' },
              { name: 'Newsletter #45', status: 'Active', color: 'bg-green-500' },
            ].map((campaign, i) => (
              <div key={i} className="flex items-center justify-between bg-navy-600/50 rounded px-2 py-1.5">
                <div className="flex items-center gap-1.5">
                  <div className={`w-2 h-2 rounded-full ${campaign.color}`} />
                  <span className="text-[9px] text-gray-300">{campaign.name}</span>
                </div>
                <span className="text-[7px] text-gray-500">{campaign.status}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-green-500/20 rounded p-2 text-center">
            <MessageSquare className="w-4 h-4 mx-auto mb-1" style={{ color: '#22c55e' }} />
            <span className="text-[8px] text-green-400">WhatsApp</span>
          </div>
          <div className="flex-1 bg-blue-500/20 rounded p-2 text-center">
            <MessageSquare className="w-4 h-4 mx-auto mb-1" style={{ color: '#3b82f6' }} />
            <span className="text-[8px] text-blue-400">SMS</span>
          </div>
          <div className="flex-1 bg-purple-500/20 rounded p-2 text-center">
            <Mail className="w-4 h-4 mx-auto mb-1" style={{ color: '#a855f7' }} />
            <span className="text-[8px] text-purple-400">Email</span>
          </div>
        </div>
      </div>
    ),
    byson: () => (
      <div className="w-full h-64 md:h-80 bg-navy-900 rounded-lg p-3 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex-1 bg-navy-700/50 rounded p-2">
            <div className="text-[10px] text-gray-400 font-semibold mb-1">REVENUE</div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-white">₹8.2L</span>
              <span className="text-[9px] text-green-400">↑ 23%</span>
            </div>
          </div>
          <div className="flex-1 bg-navy-700/50 rounded p-2">
            <div className="text-[10px] text-gray-400 font-semibold mb-1">INVOICES</div>
            <div className="flex items-baseline gap-1">
              <span className="text-lg font-bold text-white">124</span>
              <span className="text-[9px] text-amber-400">8 pending</span>
            </div>
          </div>
        </div>
        <div className="flex-1 bg-navy-700/50 rounded p-2">
          <div className="text-[10px] text-gray-400 mb-1">SALES TREND</div>
          <div className="flex items-end gap-0.5 h-16">
            {[40, 60, 45, 80, 65, 90, 75, 95, 85, 100, 70, 88].map((h, i) => (
              <motion.div
                key={i}
                initial={{ height: 0 }}
                whileInView={{ height: `${h}%` }}
                transition={{ delay: i * 0.03 }}
                className="flex-1 bg-gradient-to-t from-purple-500/60 to-purple-400/30 rounded-t"
              />
            ))}
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-navy-600/50 rounded p-1.5">
            <div className="text-[8px] text-gray-400 mb-0.5">CUSTOMERS</div>
            <div className="text-sm font-bold text-white">342</div>
          </div>
          <div className="flex-1 bg-navy-600/50 rounded p-1.5">
            <div className="text-[8px] text-gray-400 mb-0.5">INVENTORY</div>
            <div className="text-sm font-bold text-white">89%</div>
          </div>
          <div className="flex-1 bg-navy-600/50 rounded p-1.5">
            <div className="text-[8px] text-gray-400 mb-0.5">BILLS</div>
            <div className="text-sm font-bold text-white">156</div>
          </div>
        </div>
        <div className="bg-navy-700/30 rounded p-2">
          <div className="text-[8px] text-gray-400 mb-1">RECENT LEADS</div>
          <div className="flex items-center gap-2">
            {['Acme Corp', 'TechStart', 'GlobalInc'].map((lead, i) => (
              <span key={i} className="text-[7px] px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded">{lead}</span>
            ))}
          </div>
        </div>
      </div>
    ),
    dino: () => (
      <div className="w-full h-64 md:h-80 bg-navy-900 rounded-lg p-3 flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex-1 bg-orange-500/10 rounded p-2">
            <div className={`text-[10px] ${colors.accent} font-semibold`}>ACTIVE ORDERS</div>
            <div className="text-xl font-bold text-white">12</div>
          </div>
          <div className="flex-1 bg-green-500/10 rounded p-2">
            <div className="text-[10px] text-green-400 font-semibold">COMPLETED</div>
            <div className="text-xl font-bold text-white">48</div>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-navy-700/50 rounded p-2">
            <div className="text-[10px] text-gray-400 mb-1">QUICK ACTIONS</div>
            <div className="grid grid-cols-4 gap-1">
              {['New', 'Bill', 'Pay', 'Split'].map((action, i) => (
                <div key={action} className={`h-6 rounded text-[8px] flex items-center justify-center font-medium ${
                  i === 0 ? 'bg-orange-500/40 text-orange-300' : 'bg-navy-600/50 text-gray-300'
                }`}>{action}</div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex-1 bg-navy-700/50 rounded p-2">
          <div className="text-[10px] text-gray-400 mb-1">TABLE STATUS</div>
          <div className="grid grid-cols-5 gap-1">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((n) => (
              <div key={n} className={`h-6 rounded flex items-center justify-center text-[8px] font-medium ${
                n <= 3 ? 'bg-green-500/40 text-green-300' : n <= 7 ? 'bg-amber-500/40 text-amber-300' : 'bg-navy-600/50 text-gray-400'
              }`}>
                {n}
              </div>
            ))}
          </div>
          <div className="flex gap-3 mt-2 text-[7px]">
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-green-500" /> Available</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-amber-500" /> Occupied</span>
            <span className="flex items-center gap-1"><span className="w-2 h-2 rounded-full bg-gray-600" /> Reserved</span>
          </div>
        </div>
        <div className="flex gap-2">
          <div className="flex-1 bg-navy-700/30 rounded p-1.5 flex items-center justify-between">
            <span className="text-[8px] text-gray-400">Avg. Order</span>
            <span className="text-xs font-bold text-white">₹450</span>
          </div>
          <div className="flex-1 bg-navy-700/30 rounded p-1.5 flex items-center justify-between">
            <span className="text-[8px] text-gray-400">Wait Time</span>
            <span className="text-xs font-bold text-white">8 min</span>
          </div>
        </div>
      </div>
    ),
  };

  const MockupComponent = mockups[type] || mockups.packforce;
  return <MockupComponent />;
}

function ProjectOverview({ data, colors }) {
  const items = [
    { icon: FileText, label: 'What it does', value: data.projectOverview.whatItDoes },
    { icon: Users, label: 'Target Users', value: data.projectOverview.targetUsers },
    { icon: TrendingUp, label: 'Business Purpose', value: data.projectOverview.businessPurpose },
    { icon: Target, label: 'Key Responsibilities', value: data.projectOverview.keyResponsibilities },
  ];

  return (
    <section id="overview" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Project Overview</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            Understanding the Product
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm transition-all ${colors.hover}`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl ${colors.iconBg}`}>
                  <item.icon className={colors.accent} size={22} />
                </div>
                <div className="flex-1">
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wider">{item.label}</span>
                  <p className="text-gray-300 mt-2 leading-relaxed">{item.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-navy-800/50 to-navy-700/30 border border-white/5"
        >
          <span className="text-gray-400 text-sm font-medium">Product Goals</span>
          <div className="flex flex-wrap gap-3 mt-3">
            {data.projectOverview.productGoals.map((goal, i) => (
              <span key={i} className={`px-4 py-2 rounded-xl ${colors.accentBg} ${colors.accent} text-sm`}>
                {goal}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function ProblemStatement({ data, colors }) {
  return (
    <section id="problem" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Problem Statement</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            Challenges We Addressed
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.problems.map((problem, i) => {
            const Icon = iconMap[problem.icon] || AlertTriangle;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`group p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm transition-all ${colors.hover} hover:scale-[1.02]`}
              >
                <div className="flex items-start gap-4">
                  <div className={`p-3 rounded-xl ${colors.iconBg} group-hover:scale-110 transition-transform`}>
                    <Icon className={colors.accent} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-semibold text-lg mb-2">{problem.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{problem.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function GoalsObjectives({ data, colors }) {
  return (
    <section id="goals" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Goals & Objectives</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            What We Achieved
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.goals.map((goal, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm`}
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="text-white font-semibold text-lg">{goal.title}</h3>
                <div className={`px-3 py-1 rounded-lg ${colors.accentBg} ${colors.accent} text-sm font-bold`}>
                  {goal.metric}
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">{goal.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResearchDiscovery({ data, colors }) {
  const researchItems = [
    { title: 'Stakeholder Discussions', items: data.research.stakeholderDiscussions, icon: Users },
    { title: 'User Pain Points', items: data.research.userPainPoints, icon: AlertTriangle },
    { title: 'Competitor Inspiration', items: data.research.competitorInspiration, icon: Search },
    { title: 'Business Process Mapping', items: data.research.businessProcessMapping, icon: GitBranch },
  ];

  return (
    <section id="research" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Research & Discovery</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            Understanding User Needs
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {researchItems.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colors.iconBg}`}>
                  <item.icon className={colors.accent} size={20} />
                </div>
                <h3 className="text-white font-semibold text-lg">{item.title}</h3>
              </div>
              <ul className="space-y-3">
                {item.items.map((subItem, j) => (
                  <li key={j} className="flex items-start gap-2">
                    <div className={`w-1.5 h-1.5 rounded-full ${colors.accent.replace('text-', 'bg-')} mt-2`} />
                    <span className="text-gray-400 text-sm">{subItem}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-8 p-6 rounded-2xl bg-navy-800/30 border border-white/5"
        >
          <h3 className="text-white font-semibold mb-4">Workflow Analysis</h3>
          <p className="text-gray-400 leading-relaxed">{data.research.workflowAnalysis.join('. ')}</p>
        </motion.div>
      </div>
    </section>
  );
}

function UserFlow({ data, colors }) {
  return (
    <section id="flow" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>User Flow</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            User Journey Mapping
          </h2>
        </motion.div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {data.userFlow.map((flow, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex-1 w-full"
            >
              <div className={`relative p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm text-center group hover:scale-105 transition-transform`}>
                <div className={`absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full ${colors.accentBg} ${colors.accent} flex items-center justify-center text-sm font-bold`}>
                  {i + 1}
                </div>
                <h3 className="text-white font-semibold mt-2 mb-1">{flow.step}</h3>
                <p className="text-gray-400 text-sm mb-2">{flow.description}</p>
                <span className={`inline-block px-3 py-1 rounded-full text-xs ${colors.accentBg} ${colors.accent}`}>
                  {flow.page}
                </span>
              </div>
              {i < data.userFlow.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ChevronRight className="text-gray-600" size={24} />
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Wireframes({ data, colors }) {
  return (
    <section id="wireframes" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Wireframes</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            Low-Fidelity Designs
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.wireframes.map((wireframe, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`group p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm hover:scale-[1.02] transition-all`}
            >
              <div className="aspect-video bg-navy-900 rounded-xl border border-white/10 mb-4 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-800/20 to-gray-900/50" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Layout className="text-gray-600" size={48} />
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end">
                  <div className="w-1/3 h-2 bg-white/10 rounded" />
                  <div className="w-1/4 h-2 bg-white/10 rounded" />
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-white font-semibold">{wireframe.title}</h3>
                  <p className="text-gray-500 text-sm mt-1">{wireframe.description}</p>
                </div>
                <span className={`px-3 py-1 rounded-full text-xs ${colors.accentBg} ${colors.accent}`}>
                  {wireframe.scale}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalUIDesign({ data, colors }) {
  const features = data.finalUI;

  return (
    <section id="final-ui" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Final UI Design</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            High-Fidelity Interfaces
          </h2>
        </motion.div>

        <div className="space-y-8">
          {Object.entries(features).map(([key, feature], i) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-8 rounded-3xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm`}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-white font-display font-bold text-2xl mb-3">{feature.title}</h3>
                  <p className="text-gray-400 mb-4">{feature.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {(feature.features || feature.components || []).map((item, j) => (
                      <span key={j} className={`px-3 py-1.5 rounded-lg ${colors.accentBg} ${colors.accent} text-sm`}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative">
                  <div className={`aspect-video rounded-2xl bg-navy-900 border ${colors.border} p-4 overflow-hidden`}>
                    <ProductMockup type={data.id} colors={colors} />
                  </div>
                  <div className={`absolute -inset-2 bg-gradient-to-r ${colors.gradient} opacity-20 blur-xl rounded-3xl -z-10`} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DesignDecisions({ data, colors }) {
  return (
    <section id="decisions" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Design Decisions</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            UX Rationale & Thinking
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.designDecisions.map((decision, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm`}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`p-2 rounded-lg ${colors.iconBg}`}>
                  <Sparkles className={colors.accent} size={20} />
                </div>
                <h3 className="text-white font-semibold text-lg">{decision.title}</h3>
              </div>
              <p className="text-gray-400 leading-relaxed">{decision.rationale}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Challenges({ data, colors }) {
  return (
    <section id="challenges" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Challenges</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            Obstacles We Overcame
          </h2>
        </motion.div>

        <div className="space-y-4">
          {data.challenges.map((challenge, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm`}
            >
              <div className="grid md:grid-cols-2 gap-4 items-start">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className={colors.accent} size={20} />
                    <h3 className="text-white font-semibold text-lg">{challenge.title}</h3>
                  </div>
                  <p className="text-gray-400">{challenge.description}</p>
                </div>
                <div className={`p-4 rounded-xl ${colors.accentBg} border ${colors.cardBorder}`}>
                  <span className="text-gray-500 text-xs font-medium uppercase tracking-wider block mb-2">Solution</span>
                  <p className="text-gray-300">{challenge.solution}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function OutcomeImpact({ data, colors }) {
  return (
    <section id="outcomes" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-800/30 to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <span className={`${colors.accent} text-sm font-semibold uppercase tracking-wider`}>Outcome & Impact</span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3">
            Results & Metrics
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {data.outcomes.map((outcome, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className={`p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm text-center group hover:scale-105 transition-all`}
            >
              <div className={`text-3xl font-display font-bold ${colors.accent} mb-2`}>
                {outcome.metric}
              </div>
              <div className="text-white font-semibold text-sm mb-1">{outcome.title}</div>
              <div className="text-gray-500 text-xs">{outcome.description}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-navy-800/50 to-navy-700/30 border border-white/5"
        >
          <div className="flex items-center justify-center gap-3">
            <CheckCircle className={colors.accent} size={24} />
            <span className="text-white font-semibold">Project completed successfully with measurable business impact</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function NextProjectNavigation({ data, colors }) {
  const navigate = useNavigate();
  const allProjects = ['packforce', 'byson', 'falcon', 'honeybee', 'dino'];
  const currentIndex = allProjects.indexOf(data.id);

  const prevProject = currentIndex > 0 ? caseStudyData[allProjects[currentIndex - 1]] : null;
  const nextProject = currentIndex < allProjects.length - 1 ? caseStudyData[allProjects[currentIndex + 1]] : null;

  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10" />

        <div className="grid md:grid-cols-3 gap-4 mt-8">
          <button
            onClick={() => navigate('/')}
            className={`p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm text-left hover:scale-[1.02] transition-all group`}
          >
            <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
              <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </div>
            <div className="text-white font-semibold">All Projects</div>
          </button>

          {prevProject && (
            <button
              onClick={() => navigate(`/case-study/${prevProject.id}`)}
              className={`p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm text-left hover:scale-[1.02] transition-all group`}
            >
              <div className="flex items-center gap-2 text-gray-500 text-sm mb-2">
                <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
                Previous Project
              </div>
              <div className="text-white font-semibold">{prevProject.title}</div>
            </button>
          )}

          {nextProject && (
            <button
              onClick={() => navigate(`/case-study/${nextProject.id}`)}
              className={`p-6 rounded-2xl bg-navy-800/50 border ${colors.cardBorder} backdrop-blur-sm text-left hover:scale-[1.02] transition-all group`}
            >
              <div className="flex items-center justify-end gap-2 text-gray-500 text-sm mb-2">
                Next Project
                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <div className="text-white font-semibold">{nextProject.title}</div>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default function CaseStudyLayout({ slug }) {
  const data = caseStudyData[slug];
  const colors = colorMap[data?.primaryColor] || colorMap.cyan;

  if (!data) {
    return (
      <div className="min-h-screen bg-navy-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white mb-4">Case Study Not Found</h1>
          <p className="text-gray-400">The requested case study doesn't exist.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-navy-900">
      <StickyNavigation data={data} colors={colors} />
      
      <HeroSection data={data} colors={colors} />
      <ProjectOverview data={data} colors={colors} />
      <ProblemStatement data={data} colors={colors} />
      <GoalsObjectives data={data} colors={colors} />
      <ResearchDiscovery data={data} colors={colors} />
      <UserFlow data={data} colors={colors} />
      {/* <Wireframes data={data} colors={colors} />
      <FinalUIDesign data={data} colors={colors} /> */}
      <DesignDecisions data={data} colors={colors} />
      <Challenges data={data} colors={colors} />
      <OutcomeImpact data={data} colors={colors} />
      <NextProjectNavigation data={data} colors={colors} />
    </div>
  );
}