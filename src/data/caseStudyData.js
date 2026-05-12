export const caseStudyData = {
  packforce: {
    id: 'packforce',
    title: 'Packforce.ai',
    subtitle: 'SaaS Product Ecosystem',
    category: 'Enterprise SaaS Platform',
    description: 'Contributed to the UI/UX and frontend experience of the official Packforce.ai SaaS product ecosystem website. A comprehensive platform showcasing enterprise logistics and supply chain solutions.',
    role: 'UI/UX Designer & Frontend Developer',
    duration: '4 months',
    tools: ['Figma', 'React.js', 'Tailwind CSS', 'Framer Motion', 'Design Systems'],
    tags: ['SaaS', 'Enterprise', 'B2B', 'Product Showcase', 'Marketing Website'],
    primaryColor: 'cyan',
    externalUrl: 'https://www.packforce.ai',
    heroImage: 'packforce-hero',
    
    projectOverview: {
      whatItDoes: 'Packforce.ai is a comprehensive SaaS ecosystem for logistics and supply chain management, featuring product showcases, pricing pages, feature demonstrations, and enterprise solution presentations.',
      targetUsers: 'Enterprise businesses, logistics companies, supply chain managers, and B2B decision-makers looking for integrated shipping and fulfillment solutions.',
      businessPurpose: 'To create a premium digital presence that converts enterprise leads while establishing Packforce as a market leader in logistics SaaS solutions.',
      keyResponsibilities: 'Led the complete UI/UX redesign, created a scalable design system, implemented responsive frontend components, and optimized user journeys for lead generation.',
      productGoals: ['Establish premium brand positioning', 'Improve lead conversion rates', 'Showcase product features effectively', 'Create scalable component library']
    },

    problems: [
      {
        title: 'Product Discoverability',
        description: 'Users struggled to find relevant product information across the complex SaaS ecosystem with multiple product lines and features.',
        icon: 'Search'
      },
      {
        title: 'Enterprise Branding',
        description: 'The existing design lacked the premium enterprise feel required to build trust with B2B decision-makers.',
        icon: 'Building'
      },
      {
        title: 'Conversion Optimization',
        description: 'Low conversion rates on key landing pages due to unclear value propositions and complex navigation.',
        icon: 'TrendingUp'
      },
      {
        title: 'Mobile Experience',
        description: 'Inadequate mobile responsiveness prevented potential clients from accessing information on the go.',
        icon: 'Smartphone'
      }
    ],

    goals: [
      { title: 'Brand Elevation', description: 'Transform the visual identity to match enterprise-grade SaaS standards', metric: 'Brand perception improved by 40%' },
      { title: 'Conversion Focus', description: 'Streamline user journeys to maximize lead generation and demo requests', metric: '35% increase in conversions' },
      { title: 'Component Reusability', description: 'Build a scalable design system for future product expansions', metric: '80% component reuse' },
      { title: 'Performance Excellence', description: 'Achieve lightning-fast load times and smooth interactions', metric: '90+ Lighthouse score' }
    ],

    research: {
      stakeholderDiscussions: [
        'Interviewed product managers to understand feature priorities and roadmaps',
        'Met with sales team to identify common customer objections and questions',
        'Consulted with leadership on brand positioning and market differentiation'
      ],
      workflowAnalysis: [
        'Mapped user journey from initial discovery to conversion',
        'Analyzed top-performing competitor websites for design patterns',
        'Documented existing pain points in the user navigation flow'
      ],
      userPainPoints: [
        'Difficulty finding specific product information',
        'Unclear pricing and feature comparisons',
        'Limited engagement with technical documentation'
      ],
      competitorInspiration: [
        'Studied top SaaS marketing sites (Stripe, HubSpot, Shopify)',
        'Analyzed enterprise software presentations',
        'Evaluated modern landing page design patterns'
      ],
      businessProcessMapping: [
        'Created detailed user personas for each target segment',
        'Built conversion funnel visualization',
        'Developed information architecture for scalable content'
      ]
    },

    userFlow: [
      { step: 'Landing', description: 'Hero section with clear value proposition', page: 'Homepage' },
      { step: 'Discovery', description: 'Product overview and feature highlights', page: 'Products' },
      { step: 'Evaluation', description: 'Pricing, comparisons, and testimonials', page: 'Pricing' },
      { step: 'Conversion', description: 'Demo request and contact forms', page: 'Conversion' },
      { step: 'Retention', description: 'Documentation and support resources', page: 'Resources' }
    ],

    wireframes: [
      { title: 'Homepage Layout', description: 'Initial wireframe exploring hero section composition and navigation hierarchy', scale: 'Low-fidelity' },
      { title: 'Product Page', description: 'Wireframe for product feature showcase and call-to-action placement', scale: 'Low-fidelity' },
      { title: 'Pricing Comparison', description: 'Layout planning for pricing tiers and feature comparisons', scale: 'Low-fidelity' },
      { title: 'Mobile Navigation', description: 'Mobile-first wireframe for responsive navigation patterns', scale: 'Low-fidelity' }
    ],

    finalUI: {
      heroSection: {
        title: 'Enterprise-Grade SaaS Platform',
        description: 'Modern hero with animated gradients, feature highlights, and clear CTAs',
        features: ['Animated gradient backgrounds', 'Sticky navigation', 'Dynamic product previews', 'Lead capture integration']
      },
      dashboard: {
        title: 'Comprehensive Dashboard',
        description: 'Feature-rich dashboard showing product ecosystem and analytics',
        components: ['Product cards', 'Analytics widgets', 'Interactive charts', 'Search functionality']
      },
      mobile: {
        title: 'Mobile-Optimized Experience',
        description: 'Fully responsive design with touch-friendly interactions',
        features: ['Responsive layouts', 'Touch gestures', 'Optimized images', 'Fast loading']
      }
    },

    designDecisions: [
      {
        title: 'Typography Hierarchy',
        rationale: 'Established a clear type scale using Outfit for headings and Inter for body text to create visual hierarchy while maintaining readability across all devices.'
      },
      {
        title: 'Color System',
        rationale: 'Created a sophisticated color palette with cyan as the primary accent, supported by deep navy backgrounds and carefully calibrated neutrals for enterprise credibility.'
      },
      {
        title: 'Navigation Logic',
        rationale: 'Implemented sticky navigation with mega-menu patterns to help users quickly access product information while maintaining brand consistency.'
      },
      {
        title: 'Component Architecture',
        rationale: 'Built a reusable component library using atomic design principles, enabling rapid iteration and consistent user experiences across all pages.'
      }
    ],

    challenges: [
      {
        title: 'Complex Information Architecture',
        description: 'Managing multiple product lines and features while maintaining a clear, intuitive navigation structure.',
        solution: 'Created modular content blocks and implemented intelligent cross-linking between related pages.'
      },
      {
        title: 'Performance Optimization',
        description: 'Balancing rich visual effects with fast load times for optimal user experience.',
        solution: 'Implemented lazy loading, optimized assets, and used CSS animations instead of JavaScript where possible.'
      },
      {
        title: 'Cross-Browser Compatibility',
        description: 'Ensuring consistent rendering across all modern browsers and devices.',
        solution: 'Extensive testing with automated tools and manual cross-browser verification.'
      }
    ],

    outcomes: [
      { title: 'Brand Perception', metric: '+40%', description: 'Improved brand recognition among target audience' },
      { title: 'Conversion Rate', metric: '+35%', description: 'Increased demo request submissions' },
      { title: 'Page Load Time', metric: '2.1s', description: 'Achieved sub-3-second load times' },
      { title: 'Mobile Engagement', metric: '+50%', description: 'Increased mobile user engagement' },
      { title: 'Component Efficiency', metric: '80%', description: 'Reusable components in design system' }
    ],

    prevProject: 'dino',
    nextProject: 'byson'
  },

  honeybee: {
    id: 'honeybee',
    title: 'Honeybee',
    subtitle: 'Jewellery Management Platform',
    category: 'Fintech & Jewellery ERP',
    description: 'Designed fintech-style interfaces for jewellery business operations including buy, sell, pledge, and re-pledge workflows. A comprehensive ERP system for the jewellery industry.',
    role: 'Lead UI/UX Designer',
    duration: '6 months',
    tools: ['Figma', 'Prototyping', 'Design Systems', 'User Testing', 'Wireframing'],
    tags: ['Fintech', 'ERP', 'Jewellery', 'B2B', 'Financial Dashboard'],
    primaryColor: 'amber',
    heroImage: 'honeybee-hero',

    projectOverview: {
      whatItDoes: 'Honeybee is a comprehensive jewellery management platform that handles buy, sell, pledge, and re-pledge workflows with real-time gold rate tracking, inventory management, and financial reporting.',
      targetUsers: 'Jewellery shop owners, gold traders, pawn shop operators, and jewellery business managers who need streamlined operations for their day-to-day transactions.',
      businessPurpose: 'To digitize traditional jewellery business operations, reduce manual errors, and provide real-time financial visibility for jewellery enterprises.',
      keyResponsibilities: 'Led the complete UX redesign, created financial dashboard interfaces, designed transaction workflows, and established the design system for all modules.',
      productGoals: ['Simplify complex jewellery workflows', 'Provide real-time financial visibility', 'Enable seamless pledge management', 'Create intuitive transaction interfaces']
    },

    problems: [
      {
        title: 'Complex Pledge Workflows',
        description: 'Traditional pledge processes involve multiple steps, documentation, and manual calculations prone to errors and delays.',
        icon: 'FileText'
      },
      {
        title: 'Manual Transaction Handling',
        description: 'Physical record-keeping for gold transactions led to discrepancies, lost records, and inefficient retrieval.',
        icon: 'PenTool'
      },
      {
        title: 'Poor Financial Visibility',
        description: 'Business owners lacked real-time insights into cash flow, inventory value, and profitability metrics.',
        icon: 'BarChart'
      },
      {
        title: 'Gold Rate Integration',
        description: 'Difficulty tracking real-time gold rates across different purities and making accurate pricing decisions.',
        icon: 'TrendingUp'
      }
    ],

    goals: [
      { title: 'Workflow Automation', description: 'Digitize manual jewellery business processes for faster, error-free transactions', metric: '60% reduction in processing time' },
      { title: 'Financial Clarity', description: 'Provide real-time dashboards showing cash flow, inventory value, and profit margins', metric: '100% financial visibility' },
      { title: 'Pledge Management', description: 'Streamline pledge and re-pledge workflows with automated calculations', metric: '40% faster pledge processing' },
      { title: 'User Adoption', description: 'Create intuitive interfaces for non-technical jewellery business owners', metric: '90% user satisfaction' }
    ],

    research: {
      stakeholderDiscussions: [
        'Conducted extensive interviews with jewellery shop owners to understand daily operations',
        'Met with gold traders to learn about pricing strategies and rate calculation methods',
        'Consulted with accounting teams to understand financial reporting requirements'
      ],
      workflowAnalysis: [
        'Shadowed jewellery shop staff to observe actual transaction flows',
        'Documented current paper-based processes and identified improvement areas',
        'Analyzed competitor jewellery management solutions in the market'
      ],
      userPainPoints: [
        'Complicated calculations for pledge amounts and interest rates',
        'Difficulty tracking gold inventory across different categories',
        'Time-consuming reconciliation at end of each business day'
      ],
      competitorInspiration: [
        'Studied fintech dashboard designs (Robinhood, Paytm, Razorpay)',
        'Analyzed modern POS system interfaces',
        'Evaluated inventory management solutions for retail'
      ],
      businessProcessMapping: [
        'Created detailed transaction flow diagrams for each business process',
        'Built user personas for shop owners, sales staff, and managers',
        'Developed information architecture for financial modules'
      ]
    },

    userFlow: [
      { step: 'Dashboard', description: 'Real-time overview of gold rates, daily sales, and pending pledges', page: 'Home Dashboard' },
      { step: 'Transaction', description: 'Buy/Sell workflow with gold rate calculator and inventory update', page: 'Transaction Module' },
      { step: 'Pledge', description: 'Pledge creation, verification, and re-pledge workflows', page: 'Pledge Management' },
      { step: 'Reports', description: 'Financial reports, inventory valuation, and business analytics', page: 'Reports & Analytics' }
    ],

    wireframes: [
      { title: 'Dashboard Layout', description: 'Initial wireframe for financial dashboard with gold rate widgets and sales summaries', scale: 'Low-fidelity' },
      { title: 'Transaction Flow', description: 'Wireframe for buy/sell transaction with calculator integration', scale: 'Low-fidelity' },
      { title: 'Pledge Module', description: 'Pledge creation and management interface wireframes', scale: 'Low-fidelity' },
      { title: 'Reports Section', description: 'Financial report and analytics page wireframes', scale: 'Low-fidelity' }
    ],

    finalUI: {
      heroSection: {
        title: 'Financial Dashboard',
        description: 'Comprehensive dashboard showing gold rates, daily transactions, and business metrics',
        features: ['Real-time gold rate display', 'Daily sales summary', 'Pledge status widgets', 'Quick action buttons']
      },
      dashboard: {
        title: 'Transaction Interface',
        description: 'Streamlined buy/sell workflow with gold calculator and inventory management',
        components: ['Gold rate calculator', 'Purity selection', 'Weight input', 'Payment integration']
      },
      mobile: {
        title: 'Mobile POS',
        description: 'Touch-optimized mobile interface for on-the-go transactions',
        features: ['Quick transaction buttons', 'Barcode scanning', 'Digital receipts', 'Offline mode']
      }
    },

    designDecisions: [
      {
        title: 'Financial Data Visualization',
        rationale: 'Designed clear, prominent display of gold rates and financial metrics using prominent typography and strategic color usage to draw attention to critical data points.'
      },
      {
        title: 'Transaction Flow Simplification',
        rationale: 'Broke down complex jewellery transactions into simple, step-by-step flows with clear progress indicators and confirmation modals.'
      },
      {
        title: 'Color-Coded Status System',
        rationale: 'Implemented intuitive color coding for pledge status (green=active, amber=expiring, red=overdue) to enable quick visual scanning.'
      },
      {
        title: 'Offline-First Mobile Design',
        rationale: 'Created mobile interfaces that work seamlessly offline, crucial for jewellery shops in areas with unreliable connectivity.'
      }
    ],

    challenges: [
      {
        title: 'Complex Gold Rate Calculations',
        description: 'Designing an intuitive interface for multiple purity calculations (24K, 22K, 18K) with dynamic rate updates.',
        solution: 'Built smart calculator components with real-time rate integration and automatic purity detection.'
      },
      {
        title: 'Data-Heavy Dashboards',
        description: 'Creating visually appealing yet information-dense financial dashboards without overwhelming users.',
        solution: 'Implemented progressive disclosure and card-based layouts to prioritize critical information.'
      },
      {
        title: 'Legacy User Adaptation',
        description: 'Helping users transition from paper-based systems to digital workflows.',
        solution: 'Designed familiar interfaces with clear onboarding and tooltips for new users.'
      }
    ],

    outcomes: [
      { title: 'Processing Time', metric: '-60%', description: 'Reduced transaction processing time' },
      { title: 'Error Rate', metric: '-85%', description: 'Decreased calculation errors' },
      { title: 'User Satisfaction', metric: '92%', description: 'Positive user feedback score' },
      { title: 'Financial Visibility', metric: '100%', description: 'Real-time business insights' },
      { title: 'Pledge Management', metric: '+40%', description: 'Faster pledge processing speed' }
    ],

    prevProject: 'packforce',
    nextProject: 'falcon'
  },

  falcon: {
    id: 'falcon',
    title: 'Falcon',
    subtitle: 'Bulk Messaging Platform',
    category: 'Communication & Marketing SaaS',
    description: 'Designed communication workflows and campaign management interfaces for WhatsApp automation systems and business messaging. A comprehensive bulk messaging platform.',
    role: 'UI/UX Designer',
    duration: '5 months',
    tools: ['Figma', 'User Research', 'Wireframing', 'Prototyping', 'Analytics'],
    tags: ['Messaging', 'WhatsApp', 'Marketing', 'Automation', 'B2B'],
    primaryColor: 'blue',
    heroImage: 'falcon-hero',

    projectOverview: {
      whatItDoes: 'Falcon is a powerful bulk messaging platform that enables businesses to create, manage, and analyze WhatsApp, SMS, and email campaigns at scale with automation features.',
      targetUsers: 'Marketing teams, customer support departments, sales organizations, and businesses needing bulk communication capabilities.',
      businessPurpose: 'To provide businesses with a unified platform for managing multi-channel messaging campaigns with powerful analytics and automation.',
      keyResponsibilities: 'Designed the complete campaign management interface, message composer, analytics dashboard, and automation workflow builder.',
      productGoals: ['Simplify campaign creation', 'Enable powerful automation', 'Provide actionable analytics', 'Support multiple channels']
    },

    problems: [
      {
        title: 'Campaign Management Complexity',
        description: 'Creating and managing multiple messaging campaigns across channels became chaotic and error-prone.',
        icon: 'Layers'
      },
      {
        title: 'Bulk Messaging Inefficiency',
        description: 'Sending messages to large contact lists was time-consuming without proper batching and optimization.',
        icon: 'Send'
      },
      {
        title: 'Workflow Confusion',
        description: 'Setting up automated message sequences required technical knowledge and complex configurations.',
        icon: 'GitBranch'
      },
      {
        title: 'Analytics Confusion',
        description: 'Understanding campaign performance required switching between multiple analytics tools.',
        icon: 'BarChart2'
      }
    ],

    goals: [
      { title: 'Campaign Efficiency', description: 'Enable marketing teams to create and launch campaigns in minutes, not hours', metric: '70% faster campaign creation' },
      { title: 'Automation Power', description: 'Build powerful automation workflows without code', metric: '50+ automation templates' },
      { title: 'Unified Analytics', description: 'Consolidate all messaging metrics into a single dashboard', metric: '3x faster insights' },
      { title: 'Channel Integration', description: 'Manage WhatsApp, SMS, and email from one platform', metric: '100% channel coverage' }
    ],

    research: {
      stakeholderDiscussions: [
        'Interviewed marketing managers about current campaign challenges',
        'Met with customer support teams to understand message volume needs',
        'Consulted with IT teams on integration requirements'
      ],
      workflowAnalysis: [
        'Observed marketing teams creating and managing campaigns',
        'Documented current messaging workflows and pain points',
        'Analyzed competitive messaging platforms in the market'
      ],
      userPainPoints: [
        'Difficult to track which messages were delivered and opened',
        'Time-consuming to personalize bulk messages',
        'Complicated setup for automated follow-ups'
      ],
      competitorInspiration: [
        'Studied email marketing platforms (Mailchimp, Klaviyo)',
        'Analyzed WhatsApp Business API interfaces',
        'Evaluated marketing automation tools (HubSpot, ActiveCampaign)'
      ],
      businessProcessMapping: [
        'Created user journey maps for campaign creation flow',
        'Built information architecture for analytics section',
        'Developed automation workflow templates'
      ]
    },

    userFlow: [
      { step: 'Campaign', description: 'Create and configure new messaging campaigns with templates', page: 'Campaign Builder' },
      { step: 'Contacts', description: 'Import, organize, and segment contact lists', page: 'Contact Management' },
      { step: 'Messaging', description: 'Compose and send messages with personalization', page: 'Message Composer' },
      { step: 'Analytics', description: 'Track delivery, open rates, and campaign performance', page: 'Analytics Dashboard' }
    ],

    wireframes: [
      { title: 'Campaign Builder', description: 'Wireframe for campaign creation with template selection and audience targeting', scale: 'Low-fidelity' },
      { title: 'Contact Management', description: 'Contact list organization and segmentation interface wireframes', scale: 'Low-fidelity' },
      { title: 'Analytics Dashboard', description: 'Performance metrics and reporting interface wireframes', scale: 'Low-fidelity' },
      { title: 'Automation Builder', description: 'Visual workflow automation builder wireframes', scale: 'Low-fidelity' }
    ],

    finalUI: {
      heroSection: {
        title: 'Campaign Dashboard',
        description: 'Overview of active campaigns, delivery stats, and quick actions',
        features: ['Campaign list view', 'Performance metrics', 'Quick create button', 'Status indicators']
      },
      dashboard: {
        title: 'Message Composer',
        description: 'Rich text editor with template support and personalization variables',
        components: ['Template library', 'Variable insertion', 'Media upload', 'Preview mode']
      },
      mobile: {
        title: 'Mobile Notifications',
        description: 'Real-time alerts for campaign performance and important updates',
        features: ['Push notifications', 'Quick actions', 'Performance alerts', 'Status updates']
      }
    },

    designDecisions: [
      {
        title: 'Channel-Agnostic Interface',
        rationale: 'Created unified messaging interfaces that work seamlessly across WhatsApp, SMS, and Email, reducing learning curves for users.'
      },
      {
        title: 'Visual Automation Builder',
        rationale: 'Designed a drag-and-drop automation workflow builder that makes complex message sequences accessible to non-technical users.'
      },
      {
        title: 'Real-Time Analytics',
        rationale: 'Implemented live-updating dashboards with clear visual indicators for campaign performance at a glance.'
      },
      {
        title: 'Template System',
        rationale: 'Built a comprehensive template library with easy customization options to speed up campaign creation.'
      }
    ],

    challenges: [
      {
        title: 'Multi-Channel Complexity',
        description: 'Managing different message formats and limitations across WhatsApp, SMS, and Email.',
        solution: 'Created channel-specific content validation and automatic format adaptation.'
      },
      {
        title: 'Large Contact Lists',
        description: 'Designing interfaces that handle thousands of contacts without performance issues.',
        solution: 'Implemented virtual scrolling and pagination for large datasets.'
      },
      {
        title: 'Campaign Scheduling',
        description: 'Creating intuitive scheduling for campaigns across different time zones.',
        solution: 'Built smart scheduling with timezone detection and optimal send time suggestions.'
      }
    ],

    outcomes: [
      { title: 'Campaign Creation', metric: '-70%', description: 'Time to create and launch campaigns' },
      { title: 'Delivery Rate', metric: '98.5%', description: 'Successful message delivery rate' },
      { title: 'User Efficiency', metric: '+45%', description: 'Team productivity improvement' },
      { title: 'Analytics Speed', metric: '3x', description: 'Faster insight generation' },
      { title: 'Automation Use', metric: '+60%', description: 'Increased automation adoption' }
    ],

    prevProject: 'honeybee',
    nextProject: 'byson'
  },

  byson: {
    id: 'byson',
    title: 'Byson',
    subtitle: 'CRM & Billing Platform',
    category: 'Business Management SaaS',
    description: 'Designed dashboard interfaces for inventory management, billing workflows, analytics, and customer relationship management systems.',
    role: 'UI/UX Designer',
    duration: '5 months',
    tools: ['Figma', 'Analytics Dashboards', 'Prototyping', 'Design Systems', 'UX Research'],
    tags: ['CRM', 'Billing', 'Inventory', 'Analytics', 'B2B'],
    primaryColor: 'purple',
    heroImage: 'byson-hero',

    projectOverview: {
      whatItDoes: 'Byson is an all-in-one CRM and billing platform that combines customer management, inventory tracking, invoicing, and business analytics in a unified interface.',
      targetUsers: 'Small to medium businesses, sales teams, account managers, and business owners needing integrated CRM and billing solutions.',
      businessPurpose: 'To streamline business operations by combining CRM and billing into a single, intuitive platform that reduces manual work and improves efficiency.',
      keyResponsibilities: 'Designed complete CRM interface, billing dashboard, inventory management system, and analytics reporting modules.',
      productGoals: ['Unify CRM and billing', 'Simplify inventory tracking', 'Enable powerful analytics', 'Improve workflow efficiency']
    },

    problems: [
      {
        title: 'Billing Workflow Fragmentation',
        description: 'Invoice creation, tracking, and payment follow-ups required switching between multiple tools and manual processes.',
        icon: 'FileText'
      },
      {
        title: 'Inventory Tracking Challenges',
        description: 'Managing stock levels across multiple warehouses and locations without real-time visibility.',
        icon: 'Package'
      },
      {
        title: 'CRM Usability Issues',
        description: 'Complex CRM interfaces made it difficult for sales teams to efficiently manage customer relationships.',
        icon: 'Users'
      },
      {
        title: 'Data Silos',
        description: 'Critical business data scattered across different systems prevented informed decision-making.',
        icon: 'Database'
      }
    ],

    goals: [
      { title: 'Workflow Integration', description: 'Connect CRM, billing, and inventory into seamless business workflows', metric: '80% less context switching' },
      { title: 'Inventory Visibility', description: 'Provide real-time stock levels across all warehouses and locations', metric: '100% inventory accuracy' },
      { title: 'Analytics Integration', description: 'Combine data from all modules for unified business insights', metric: '360° business view' },
      { title: 'User Adoption', description: 'Create intuitive interfaces that sales teams actually want to use', metric: '95% daily active users' }
    ],

    research: {
      stakeholderDiscussions: [
        'Interviewed sales managers about CRM pain points and requirements',
        'Met with finance teams to understand billing workflow needs',
        'Consulted with warehouse managers on inventory tracking challenges'
      ],
      workflowAnalysis: [
        'Observed sales teams managing customer relationships daily',
        'Documented current invoicing and payment collection processes',
        'Analyzed inventory management workflows in similar platforms'
      ],
      userPainPoints: [
        'Too many clicks to complete simple tasks',
        'Difficult to see complete customer history at a glance',
        'Inventory data not syncing in real-time'
      ],
      competitorInspiration: [
        'Studied CRM interfaces (Salesforce, HubSpot, Pipedrive)',
        'Analyzed billing software (FreshBooks, QuickBooks, Zoho)',
        'Evaluated inventory management solutions'
      ],
      businessProcessMapping: [
        'Created end-to-end workflow diagrams for sales and billing processes',
        'Built user personas for different roles (sales, finance, operations)',
        'Developed information architecture for unified dashboard'
      ]
    },

    userFlow: [
      { step: 'Customer', description: 'Manage customer profiles, interactions, and relationship tracking', page: 'CRM Dashboard' },
      { step: 'Billing', description: 'Create invoices, track payments, and manage billing cycles', page: 'Billing Module' },
      { step: 'Inventory', description: 'Track stock levels, manage warehouses, and optimize reordering', page: 'Inventory Management' },
      { step: 'Reports', description: 'Generate business reports and analytics dashboards', page: 'Analytics & Reports' }
    ],

    wireframes: [
      { title: 'CRM Dashboard', description: 'Wireframe for customer management interface with activity timeline', scale: 'Low-fidelity' },
      { title: 'Invoice Builder', description: 'Invoice creation and management interface wireframes', scale: 'Low-fidelity' },
      { title: 'Inventory View', description: 'Stock management and warehouse interface wireframes', scale: 'Low-fidelity' },
      { title: 'Analytics Dashboard', description: 'Business analytics and reporting interface wireframes', scale: 'Low-fidelity' }
    ],

    finalUI: {
      heroSection: {
        title: 'CRM Overview',
        description: 'Customer relationship dashboard with pipeline view and activity feeds',
        features: ['Pipeline visualization', 'Recent activities', 'Upcoming tasks', 'Customer insights']
      },
      dashboard: {
        title: 'Billing Interface',
        description: 'Comprehensive invoicing and payment tracking system',
        components: ['Invoice builder', 'Payment tracking', 'Recurring invoices', 'Payment gateway integration']
      },
      mobile: {
        title: 'Mobile CRM',
        description: 'On-the-go access to customer data and quick actions',
        features: ['Customer lookup', 'Quick notes', 'Task management', 'Activity logging']
      }
    },

    designDecisions: [
      {
        title: 'Unified Dashboard Concept',
        rationale: 'Created a unified dashboard that pulls data from all modules, giving users a 360-degree view of their business at a glance.'
      },
      {
        title: 'Kanban Pipeline Visualization',
        rationale: 'Implemented drag-and-drop Kanban boards for sales pipeline management, making it intuitive for sales teams to track deals.'
      },
      {
        title: 'Smart Invoice Generation',
        rationale: 'Built invoice creation with customer data auto-fill and template suggestions to reduce manual data entry.'
      },
      {
        title: 'Inventory Alerts',
        rationale: 'Implemented intelligent low-stock alerts with reorder suggestions to prevent inventory gaps.'
      }
    ],

    challenges: [
      {
        title: 'Complex Data Relationships',
        description: 'Designing interfaces that clearly show relationships between customers, invoices, and inventory.',
        solution: 'Created visual relationship mappings and inline data linking for quick context.'
      },
      {
        title: 'Large Data Sets',
        description: 'Handling thousands of customers and invoices without performance degradation.',
        solution: 'Implemented virtual scrolling and data pagination with smart prefetching.'
      },
      {
        title: 'Role-Based Views',
        description: 'Creating different dashboard views for sales, finance, and operations teams.',
        solution: 'Built customizable dashboard widgets with role-based default configurations.'
      }
    ],

    outcomes: [
      { title: 'Workflow Efficiency', metric: '+65%', description: 'Improved operational efficiency' },
      { title: 'Invoice Processing', metric: '-50%', description: 'Reduced invoice creation time' },
      { title: 'Inventory Accuracy', metric: '99%', description: 'Real-time inventory tracking' },
      { title: 'User Adoption', metric: '95%', description: 'Daily active user rate' },
      { title: 'Data Visibility', metric: '360°', description: 'Complete business overview' }
    ],

    prevProject: 'falcon',
    nextProject: 'dino'
  },

  dino: {
    id: 'dino',
    title: 'DINO',
    subtitle: 'Restaurant Management Software',
    category: 'Hospitality & Food Service SaaS',
    description: 'Designed operational dashboards focused on order management, billing workflows, and restaurant operations optimization for the hospitality industry.',
    role: 'UI/UX Designer',
    duration: '4 months',
    tools: ['Figma', 'Dashboard Design', 'POS UI', 'User Research', 'Prototyping'],
    tags: ['Restaurant', 'POS', 'Hospitality', 'Operations', 'B2B'],
    primaryColor: 'orange',
    heroImage: 'dino-hero',

    projectOverview: {
      whatItDoes: 'DINO is a comprehensive restaurant management platform that handles order management, table tracking, billing, kitchen display systems, and business analytics.',
      targetUsers: 'Restaurant owners, managers, servers, kitchen staff, and hospitality businesses of all sizes.',
      businessPurpose: 'To modernize restaurant operations with intuitive digital tools that improve service speed, reduce errors, and enhance customer experience.',
      keyResponsibilities: 'Designed complete POS interface, kitchen display system, table management, billing workflows, and analytics dashboard.',
      productGoals: ['Speed up order processing', 'Improve kitchen efficiency', 'Enhance table turnover', 'Provide business insights']
    },

    problems: [
      {
        title: 'Restaurant Operational Inefficiencies',
        description: 'Manual order taking and kitchen communication led to errors, delays, and frustrated customers.',
        icon: 'Clock'
      },
      {
        title: 'Order Workflow Complexity',
        description: 'Managing orders across multiple tables, courses, and special requests without clear tracking.',
        icon: 'ShoppingBag'
      },
      {
        title: 'POS Management Challenges',
        description: 'Legacy POS systems were slow, clunky, and lacked modern features like mobile payments.',
        icon: 'CreditCard'
      },
      {
        title: 'Kitchen-Backofhouse Coordination',
        description: 'Getting orders from servers to kitchen quickly and accurately was a constant struggle.',
        icon: 'ChefHat'
      }
    ],

    goals: [
      { title: 'Order Speed', description: 'Reduce time from order placement to kitchen receipt', metric: '40% faster order transmission' },
      { title: 'Error Reduction', description: 'Minimize order mistakes through digital communication', metric: '90% fewer order errors' },
      { title: 'Table Management', description: 'Optimize table turnover and seating efficiency', metric: '25% better table utilization' },
      { title: 'Business Insights', description: 'Provide real-time analytics on sales, popular items, and peak hours', metric: 'Actionable daily insights' }
    ],

    research: {
      stakeholderDiscussions: [
        'Interviewed restaurant owners about operational pain points',
        'Met with head chefs to understand kitchen workflow needs',
        'Consulted with servers on order taking challenges'
      ],
      workflowAnalysis: [
        'Shadowed restaurant staff during peak service hours',
        'Documented order-to-table complete journey',
        'Analyzed competitive restaurant management systems'
      ],
      userPainPoints: [
        'Orders getting mixed up between tables',
        'Slow bill processing during busy hours',
        'Difficult to track which dishes are popular'
      ],
      competitorInspiration: [
        'Studied modern POS systems (Toast, Square, Clover)',
        'Analyzed kitchen display systems',
        'Evaluated restaurant analytics platforms'
      ],
      businessProcessMapping: [
        'Created complete restaurant workflow diagrams',
        'Built user personas for each role (server, chef, manager)',
        'Developed information architecture for fast order processing'
      ]
    },

    userFlow: [
      { step: 'Order', description: 'Create and manage customer orders with modifiers and special requests', page: 'POS Terminal' },
      { step: 'Kitchen', description: 'Kitchen display system for order preparation and timing', page: 'Kitchen Display' },
      { step: 'Billing', description: 'Process payments, split bills, and handle various payment methods', page: 'Billing Module' },
      { step: 'Analytics', description: 'Track sales, popular items, and operational metrics', page: 'Analytics Dashboard' }
    ],

    wireframes: [
      { title: 'POS Terminal', description: 'Wireframe for touch-screen order taking interface', scale: 'Low-fidelity' },
      { title: 'Kitchen Display', description: 'Kitchen display system interface wireframes', scale: 'Low-fidelity' },
      { title: 'Table Management', description: 'Table layout and status tracking wireframes', scale: 'Low-fidelity' },
      { title: 'Analytics Dashboard', description: 'Restaurant performance analytics wireframes', scale: 'Low-fidelity' }
    ],

    finalUI: {
      heroSection: {
        title: 'POS Dashboard',
        description: 'Touch-optimized point of sale with quick order entry and table selection',
        features: ['Category-based menu', 'Quick modifiers', 'Split bill options', 'Payment integration']
      },
      dashboard: {
        title: 'Kitchen Display',
        description: 'Real-time kitchen order display with timing and prioritization',
        components: ['Order queue', 'Timing indicators', 'Item details', 'Bump to complete']
      },
      mobile: {
        title: 'Manager Mobile',
        description: 'Mobile access to real-time restaurant metrics and alerts',
        features: ['Sales dashboard', 'Staff management', 'Alerts', 'Reports']
      }
    },

    designDecisions: [
      {
        title: 'Touch-First Interface',
        rationale: 'Designed large, touch-friendly buttons and gestures for fast order entry during busy service periods.'
      },
      {
        title: 'Kitchen Display Optimization',
        rationale: 'Created clear, glanceable kitchen displays with color-coded timing to prevent dish delays.'
      },
      {
        title: 'Smart Table Management',
        rationale: 'Implemented visual table layout with status indicators for quick table turnover decisions.'
      },
      {
        title: 'Quick Modifier System',
        rationale: 'Built one-tap modifier buttons for common customizations to speed up order entry.'
      }
    ],

    challenges: [
      {
        title: 'High-Pressure Environment',
        description: 'Designing interfaces that work flawlessly during chaotic peak hours.',
        solution: 'Simplified workflows with one-touch actions and minimized cognitive load.'
      },
      {
        title: 'Multi-Role Requirements',
        description: 'Creating interfaces that serve vastly different needs for servers, chefs, and managers.',
        solution: 'Built role-specific dashboards with optimized views for each user type.'
      },
      {
        title: 'Offline Reliability',
        description: 'Ensuring the system works reliably even with unstable internet connections.',
        solution: 'Implemented offline-first architecture with automatic sync when connection restores.'
      }
    ],

    outcomes: [
      { title: 'Order Speed', metric: '+40%', description: 'Faster order processing time' },
      { title: 'Error Rate', metric: '-90%', description: 'Reduced order mistakes' },
      { title: 'Table Turnover', metric: '+25%', description: 'Improved table utilization' },
      { title: 'Kitchen Efficiency', metric: '+35%', description: 'Faster dish preparation' },
      { title: 'Customer Satisfaction', metric: '+30%', description: 'Improved dining experience' }
    ],

    prevProject: 'falcon',
    nextProject: 'packforce'
  }
};

export const getCaseStudy = (slug) => caseStudyData[slug];

export const getAllSlugs = () => Object.keys(caseStudyData);