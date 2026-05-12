import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Layers, TrendingUp, MessageSquare, BarChart3, UtensilsCrossed, Globe, ExternalLink } from 'lucide-react';
import { Figma } from '../components/Icons';

const projects = [
  {
    id: 1,
    slug: 'packforce',
    title: 'Packforce.ai',
    subtitle: 'SaaS Product Ecosystem',
    description: 'Contributed to the UI/UX and frontend experience of the official Packforce.ai SaaS product ecosystem website.',
    role: 'UI/UX Designer & Frontend Dev',
    tools: ['Figma', 'React.js', 'Tailwind CSS'],
    problem: 'Modern SaaS marketing site with product showcase and conversion optimization.',
    color: 'cyan',
    externalUrl: 'https://www.packforce.ai',
    isSaaS: true,
  },
  {
    id: 2,
    slug: 'byson',
    title: 'Byson',
    subtitle: 'CRM & Billing Platform',
    description: 'Designed dashboard interfaces for inventory management, billing workflows, analytics, and customer management systems.',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Analytics Dashboards', 'Prototyping'],
    problem: 'Centralized CRM functionality with complex billing integrations.',
    color: 'purple',
    isCRM: true,
  },
  {
    id: 3,
    slug: 'falcon',
    title: 'Falcon',
    subtitle: 'Bulk Messaging Platform',
    description: 'Designed communication workflows and campaign management interfaces for WhatsApp automation systems and business messaging.',
    role: 'UI/UX Designer',
    tools: ['Figma', 'User Research', 'Wireframing'],
    problem: 'Streamlined bulk messaging operations for enterprise marketing teams.',
    color: 'blue',
    isMessaging: true,
  },
  {
    id: 4,
    slug: 'honeybee',
    title: 'Honeybee',
    subtitle: 'Jewellery Management Platform',
    description: 'Designed fintech-style interfaces for jewellery business operations including buy, sell, pledge, and re-pledge workflows.',
    role: 'Lead UI/UX Designer',
    tools: ['Figma', 'Prototyping', 'Design Systems'],
    problem: 'Complex jewellery business workflows needed simplification for non-technical users.',
    color: 'amber',
    isFintech: true,
  },
  {
    id: 5,
    slug: 'dino',
    title: 'DINO',
    subtitle: 'Restaurant Management Software',
    description: 'Designed operational dashboards focused on order management, billing workflows, and restaurant operations optimization.',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Dashboard Design', 'POS UI'],
    problem: 'Streamlined restaurant operations with intuitive order tracking and billing workflows.',
    color: 'orange',
    isRestaurant: true,
  },
];

const colorMap = {
  cyan: {
    gradient: 'from-cyan-500/20 to-teal-500/20',
    border: 'border-cyan-500/30',
    accent: 'text-cyan-400',
    glow: 'group-hover:shadow-cyan-500/20',
    bg: 'bg-cyan-500/10',
  },
  amber: {
    gradient: 'from-amber-500/20 to-orange-500/20',
    border: 'border-amber-500/30',
    accent: 'text-amber-400',
    glow: 'group-hover:shadow-amber-500/20',
    bg: 'bg-amber-500/10',
  },
  blue: {
    gradient: 'from-blue-500/20 to-cyan-500/20',
    border: 'border-blue-500/30',
    accent: 'text-blue-400',
    glow: 'group-hover:shadow-blue-500/20',
    bg: 'bg-blue-500/10',
  },
  purple: {
    gradient: 'from-purple-500/20 to-pink-500/20',
    border: 'border-purple-500/30',
    accent: 'text-purple-400',
    glow: 'group-hover:shadow-purple-500/20',
    bg: 'bg-purple-500/10',
  },
  orange: {
    gradient: 'from-orange-500/20 to-red-500/20',
    border: 'border-orange-500/30',
    accent: 'text-orange-400',
    glow: 'group-hover:shadow-orange-500/20',
    bg: 'bg-orange-500/10',
  },
};

function SaaSWebsiteMockup({ colors }) {
  return (
    <div className="w-full h-full bg-[#0a1628] rounded-lg p-2 flex flex-col">
      <div className="flex items-center gap-2 mb-2">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
        </div>
        <div className="flex-1 h-4 bg-[#162d54] rounded flex items-center px-2">
          <div className="w-3 h-3 rounded-full bg-cyan-500/50 mr-2" />
          <span className="text-[8px] text-gray-400">packforce.ai</span>
        </div>
      </div>
      <div className="flex-1 bg-[#162d54]/50 rounded overflow-hidden">
        <div className="h-6 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 flex items-center px-2">
          <div className="w-8 h-2 bg-white/20 rounded" />
          <div className="flex gap-1 ml-auto">
            <div className="w-6 h-2 bg-white/10 rounded" />
            <div className="w-6 h-2 bg-white/10 rounded" />
            <div className="w-8 h-2 bg-cyan-500/40 rounded" />
          </div>
        </div>
        <div className="p-2 flex gap-2">
          <div className="flex-1 space-y-1.5">
            <div className="h-4 bg-gradient-to-r from-white/10 to-transparent rounded" />
            <div className="h-2 w-3/4 bg-white/5 rounded" />
            <div className="h-2 w-1/2 bg-white/5 rounded" />
            <div className="flex gap-1 mt-2">
              <div className="h-5 w-12 bg-cyan-500/40 rounded" />
              <div className="h-5 w-12 bg-white/10 rounded" />
            </div>
          </div>
          <div className="w-1/3 bg-[#1e3a6e]/50 rounded p-1.5">
            <div className="h-2 w-1/2 bg-white/20 rounded mb-1" />
            <div className="space-y-1">
              {[1,2,3].map(i => (
                <div key={i} className="h-3 bg-white/10 rounded flex items-center gap-1">
                  <div className="w-2 h-2 rounded-full bg-green-500/60" />
                  <div className="flex-1 h-1 bg-white/10 rounded" />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-px bg-white/5 mx-2" />
        <div className="p-2 grid grid-cols-3 gap-1.5">
          {[1,2,3].map(i => (
            <div key={i} className="h-8 bg-[#1e3a6e]/50 rounded p-1">
              <div className="h-1.5 w-1/2 bg-white/20 rounded mb-1" />
              <div className="h-2 bg-gradient-to-r from-cyan-500/40 to-transparent rounded" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function HoneybeeMockup({ colors }) {
  return (
    <div className="w-full h-full bg-[#0a1628] rounded-lg p-2 flex flex-col gap-1.5">
      <div className="flex gap-1.5">
        <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
          <div className={`text-[8px] ${colors.accent} font-semibold mb-1`}>GOLD RATE</div>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-white">₹6,245</span>
            <span className="text-[7px] text-green-400">+0.8%</span>
          </div>
          <div className="h-2 mt-1 bg-gradient-to-r from-green-500/40 to-transparent rounded" />
        </div>
        <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
          <div className="text-[8px] text-gray-400 font-semibold mb-1">TODAY'S SALES</div>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-white">₹12.5L</span>
            <span className="text-[7px] text-green-400">+15%</span>
          </div>
          <div className="h-2 mt-1 bg-gradient-to-r from-blue-500/40 to-transparent rounded" />
        </div>
      </div>
      <div className="flex gap-1.5">
        {['BUY', 'SELL', 'PLEDGE'].map((action, i) => (
          <div key={action} className={`flex-1 ${i === 0 ? 'bg-amber-500/20' : i === 1 ? 'bg-blue-500/20' : 'bg-purple-500/20'} rounded p-1.5 flex items-center justify-center`}>
            <span className={`text-[9px] font-semibold ${i === 0 ? 'text-amber-400' : i === 1 ? 'text-blue-400' : 'text-purple-400'}`}>{action}</span>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
        <div className="text-[8px] text-gray-400 mb-1">RECENT TRANSACTIONS</div>
        <div className="space-y-1">
          {['Gold Necklace - ₹45,000', 'Gold Ring - ₹8,500', 'Pledge - ₹12,000'].map((item, i) => (
            <div key={i} className="flex items-center justify-between text-[7px]">
              <span className="text-gray-300 truncate">{item}</span>
              <span className="text-amber-400">₹{(Math.random() * 50000 + 5000).toFixed(0)}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FalconMockup({ colors }) {
  return (
    <div className="w-full h-full bg-[#0a1628] rounded-lg p-2 flex flex-col gap-1.5">
      <div className="flex gap-1.5">
        <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
          <div className={`text-[8px] ${colors.accent} font-semibold mb-1`}>DELIVERED</div>
          <div className="text-sm font-bold text-white">2,847</div>
          <div className="h-2 mt-1 bg-gradient-to-r from-green-500/60 to-green-500/20 rounded" />
        </div>
        <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
          <div className="text-[8px] text-gray-400 font-semibold mb-1">PENDING</div>
          <div className="text-sm font-bold text-white">156</div>
          <div className="h-2 mt-1 bg-gradient-to-r from-amber-500/60 to-amber-500/20 rounded" />
        </div>
      </div>
      <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
        <div className="text-[8px] text-gray-400 mb-1">CAMPAIGNS</div>
        <div className="space-y-1">
          {[
            { name: 'Flash Sale', status: 'Active', color: 'bg-green-500' },
            { name: 'New Arrivals', status: 'Scheduled', color: 'bg-blue-500' },
            { name: 'Weekend Offer', status: 'Active', color: 'bg-green-500' },
          ].map((campaign, i) => (
            <div key={i} className="flex items-center justify-between bg-[#1e3a6e]/50 rounded px-1.5 py-1">
              <div className="flex items-center gap-1">
                <div className={`w-1.5 h-1.5 rounded-full ${campaign.color}`} />
                <span className="text-[7px] text-gray-300">{campaign.name}</span>
              </div>
              <span className="text-[6px] text-gray-500">{campaign.status}</span>
            </div>
          ))}
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 bg-green-500/20 rounded p-1 text-center">
          <MessageSquare className="w-3 h-3 mx-auto mb-0.5" style={{ color: '#22c55e' }} />
          <span className="text-[7px] text-green-400">WhatsApp</span>
        </div>
        <div className="flex-1 bg-blue-500/20 rounded p-1 text-center">
          <MessageSquare className="w-3 h-3 mx-auto mb-0.5" style={{ color: '#3b82f6' }} />
          <span className="text-[7px] text-blue-400">SMS</span>
        </div>
        <div className="flex-1 bg-purple-500/20 rounded p-1 text-center">
          <MessageSquare className="w-3 h-3 mx-auto mb-0.5" style={{ color: '#a855f7' }} />
          <span className="text-[7px] text-purple-400">Email</span>
        </div>
      </div>
    </div>
  );
}

function BysonMockup({ colors }) {
  return (
    <div className="w-full h-full bg-[#0a1628] rounded-lg p-2 flex flex-col gap-1.5">
      <div className="flex gap-1.5">
        <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
          <div className="text-[8px] text-gray-400 font-semibold mb-1">REVENUE</div>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-white">₹8.2L</span>
            <span className="text-[7px] text-green-400">↑ 23%</span>
          </div>
        </div>
        <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
          <div className="text-[8px] text-gray-400 font-semibold mb-1">INVOICES</div>
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-bold text-white">124</span>
            <span className="text-[7px] text-amber-400">8 pending</span>
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
        <div className="text-[8px] text-gray-400 mb-1">SALES TREND</div>
        <div className="flex items-end gap-0.5 h-8">
          {[40, 60, 45, 80, 65, 90, 75, 95, 85, 100, 70, 88].map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              transition={{ delay: i * 0.05 }}
              className="flex-1 bg-gradient-to-t from-purple-500/60 to-purple-400/30 rounded-t"
            />
          ))}
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 bg-[#1e3a6e]/50 rounded p-1">
          <div className="text-[7px] text-gray-400 mb-0.5">CUSTOMERS</div>
          <div className="text-[10px] font-bold text-white">342</div>
        </div>
        <div className="flex-1 bg-[#1e3a6e]/50 rounded p-1">
          <div className="text-[7px] text-gray-400 mb-0.5">INVENTORY</div>
          <div className="text-[10px] font-bold text-white">89%</div>
        </div>
        <div className="flex-1 bg-[#1e3a6e]/50 rounded p-1">
          <div className="text-[7px] text-gray-400 mb-0.5">BILLS</div>
          <div className="text-[10px] font-bold text-white">156</div>
        </div>
      </div>
    </div>
  );
}

function DINOMockup({ colors }) {
  return (
    <div className="w-full h-full bg-[#0a1628] rounded-lg p-2 flex flex-col gap-1.5">
      <div className="flex gap-1.5">
        <div className="flex-1 bg-orange-500/10 rounded p-1.5">
          <div className={`text-[8px] ${colors.accent} font-semibold`}>ACTIVE ORDERS</div>
          <div className="text-sm font-bold text-white">12</div>
        </div>
        <div className="flex-1 bg-green-500/10 rounded p-1.5">
          <div className="text-[8px] text-green-400 font-semibold">COMPLETED</div>
          <div className="text-sm font-bold text-white">48</div>
        </div>
      </div>
      <div className="flex gap-1.5">
        <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
          <div className="text-[8px] text-gray-400 mb-1">QUICK ORDERS</div>
          <div className="grid grid-cols-4 gap-1">
            {['New', 'Bill', 'Pay', 'Split'].map((action, i) => (
              <div key={action} className={`h-5 rounded text-[6px] flex items-center justify-center font-medium ${
                i === 0 ? 'bg-orange-500/40 text-orange-300' : 'bg-[#1e3a6e]/50 text-gray-300'
              }`}>{action}</div>
            ))}
          </div>
        </div>
      </div>
      <div className="flex-1 bg-[#162d54]/50 rounded p-1.5">
        <div className="text-[8px] text-gray-400 mb-1">TABLES</div>
        <div className="grid grid-cols-5 gap-1">
          {[1,2,3,4,5,6,7,8].map((n) => (
            <div key={n} className={`h-5 rounded flex items-center justify-center text-[7px] font-medium ${
              n <= 3 ? 'bg-green-500/40 text-green-300' : n <= 6 ? 'bg-amber-500/40 text-amber-300' : 'bg-[#1e3a6e]/50 text-gray-400'
            }`}>
              {n <= 3 ? 'T' + n : n <= 6 ? 'T' + n : 'T' + n}
            </div>
          ))}
        </div>
        <div className="flex gap-2 mt-1 text-[6px]">
          <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-green-500" /> Available</span>
          <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-amber-500" /> Occupied</span>
          <span className="flex items-center gap-0.5"><span className="w-1.5 h-1.5 rounded-full bg-gray-600" /> Reserved</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.externalUrl) {
      window.open(project.externalUrl, '_blank', 'noopener,noreferrer');
    } else {
      navigate(`/case-study/${project.slug}`);
    }
  };
  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-blue-400 text-sm font-semibold uppercase tracking-wider">Projects</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-bold text-white mt-3">
            Featured <span className="gradient-text">Work</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, index) => {
            const colors = colorMap[project.color];
            
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`group relative bg-[#0f2140]/50 backdrop-blur-sm rounded-2xl overflow-hidden border ${colors.border} transition-all duration-300 ${colors.glow} hover:scale-[1.02] hover:shadow-2xl`}
                whileHover={{ y: -5 }}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <div className="relative p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`p-2.5 rounded-xl ${colors.bg} ${colors.border}`}>
                        {project.isSaaS ? (
                          <Globe className={colors.accent} size={22} />
                        ) : project.isFintech ? (
                          <TrendingUp className={colors.accent} size={22} />
                        ) : project.isMessaging ? (
                          <MessageSquare className={colors.accent} size={22} />
                        ) : project.isCRM ? (
                          <BarChart3 className={colors.accent} size={22} />
                        ) : project.isRestaurant ? (
                          <UtensilsCrossed className={colors.accent} size={22} />
                        ) : (
                          <Layers className={colors.accent} size={22} />
                        )}
                      </div>
                      <div>
                        <h3 className="text-white font-display font-bold text-xl">{project.title}</h3>
                        <p className={`${colors.accent} text-sm`}>{project.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  <div className="w-full h-48 bg-[#0a1628] rounded-xl mb-4 border border-white/5 overflow-hidden shadow-inner">
                    {project.isSaaS && <SaaSWebsiteMockup colors={colors} />}
                    {project.isFintech && <HoneybeeMockup colors={colors} />}
                    {project.isMessaging && <FalconMockup colors={colors} />}
                    {project.isCRM && <BysonMockup colors={colors} />}
                    {project.isRestaurant && <DINOMockup colors={colors} />}
                  </div>

                  <p className="text-gray-400 text-sm leading-relaxed mb-4">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool) => (
                      <span key={tool} className="px-2.5 py-1 rounded-lg bg-[#0a1628] text-gray-300 text-xs border border-white/5 flex items-center gap-1.5 hover:bg-[#162d54]/50 transition-colors">
                        {tool === 'Figma' && <Figma size={12} />}
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="border-t border-white/5 pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-gray-500 text-xs mb-0.5">Role</p>
                        <p className="text-white text-sm font-medium">{project.role}</p>
                      </div>
                      <motion.button
                        onClick={() => handleProjectClick(project)}
                        whileHover={{ x: 5, scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-2 ${colors.accent} text-sm font-semibold bg-[#0a1628] px-4 py-2 rounded-xl border border-current/20 hover:bg-current/10 transition-all`}
                      >
                        {project.externalUrl ? 'Visit Website' : 'View Case Study'}
                        {project.externalUrl ? (
                          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                        ) : (
                          <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                        )}
                      </motion.button>
                    </div>
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