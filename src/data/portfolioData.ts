import { ServiceItem, CaseStudy, ExperienceItem } from '../types';

export const PERSONAL_INFO = {
  name: "Umm E Habiba",
  shortName: "Habiba",
  role: "Performance Marketer",
  subRole: "Founder of The Custom Edit",
  email: "ummehabiba222.pk@gmail.com",
  phone: "0305 6346858",
  whatsappNumber: "+923056346858",
  whatsappUrl: "https://wa.me/923056346858",
  facebookUrl: "https://www.facebook.com/Ummehabiba.marketing/",
  instagramMarketingUrl: "https://www.instagram.com/ummehabiba.marketing/",
  instagramCustomEditUrl: "https://www.instagram.com/thecustom_edit/",
  tiktokUrl: "https://www.tiktok.com/@thecustomedit2",
  youtubeUrl: "https://youtube.com/@thecustomedit",
  location: "Pakistan (Available Globally)",
  experienceYears: "6+",
  coreSkillsCount: "8+",
  bio: "Hi, I am Umm E Habiba, a passionate Performance Marketer dedicated to helping businesses grow and scale their online presence through creativity, high-converting strategy and consistent execution.",
  extendedBio: "I specialize in Performance Marketing, Paid Meta Ads, Conversion-Focused Social Media, SEO, and Content Strategy. I create engaging content, develop high-ROI marketing funnels, and help brands acquire the right customers through digital platforms. With six years of organizational and people management experience, I combine performance-driven data with structured operational excellence to deliver measurable revenue growth."
};

export const IMAGES = {
  portrait: "/src/assets/images/habiba_hijab_portrait_1791371414428.jpg",
  ovanorm: "/src/assets/images/ovanorm_product_pack_1791371427370.jpg",
  customEdit: "/src/assets/images/brand_custom_edit_nikkah_1791370341763.jpg",
  workspace: "/src/assets/images/marketing_strategy_workspace_1791370354754.jpg"
};

export const SERVICES: ServiceItem[] = [
  {
    id: "smm",
    number: "01",
    title: "Social Media Marketing",
    description: "Social media planning, captions, content calendars, engagement ideas, and platform-specific content tailored to your ideal customer.",
    deliverables: [
      "Custom monthly content calendar & posting schedules",
      "Engaging copy & hook-driven captions with strategic hashtags",
      "Audience engagement protocols & community management",
      "Performance reporting & metric tracking (Reach, Saves, Shares)"
    ],
    idealFor: "Brands seeking consistent, active, and aesthetically aligned social profiles",
    tools: ["Instagram", "Facebook", "TikTok", "Meta Business Suite", "Canva Pro"]
  },
  {
    id: "content",
    number: "02",
    title: "Content Marketing",
    description: "Engaging content that communicates your brand message clearly, addresses customer pain points, and builds lasting emotional connection.",
    deliverables: [
      "Brand messaging guide & key content pillars",
      "Educational carousels & problem-solving storytelling",
      "High-converting promotional posts & product featurettes",
      "Short-form video scripts & trend analysis"
    ],
    idealFor: "Businesses looking to educate their audience and stand out from generic competitors",
    tools: ["Notion", "Google Docs", "Visual Storytelling", "Copywriting Frameworks"]
  },
  {
    id: "seo",
    number: "03",
    title: "SEO Optimization",
    description: "Keyword-focused content and optimization strategies to help brands rank higher, drive organic traffic, and improve online visibility.",
    deliverables: [
      "Targeted high-intent keyword research & search volume audit",
      "On-page meta tags, header optimization & content structuring",
      "Competitor search positioning analysis",
      "Organic content recommendations for long-term search reach"
    ],
    idealFor: "Websites and e-commerce stores wanting steady search discoverability without ongoing ad reliance",
    tools: ["Google Search Console", "Keyword Research", "On-Page SEO", "Meta Tag Tuning"]
  },
  {
    id: "meta-ads",
    number: "04",
    title: "Meta Ads Strategy",
    description: "Creative ad concepts, audience-focused messaging, and strategic campaign setups for Facebook and Instagram.",
    deliverables: [
      "Audience targeting & demographic segmentation",
      "Ad creative concepts, angles & persuasive copywriting",
      "Campaign objective setup (Traffic, Engagement, Leads)",
      "Ad budget pacing recommendations & continuous creative A/B testing"
    ],
    idealFor: "Brands looking to scale customer acquisition and generate qualified leads fast",
    tools: ["Meta Ads Manager", "Audience Insights", "Creative Direction", "Pixel Tracking"]
  },
  {
    id: "canva",
    number: "05",
    title: "Canva Visual Design",
    description: "Professional social media graphics, carousel posts, marketing creatives, and branded visual assets that capture attention.",
    deliverables: [
      "Cohesive brand color palette & typographic template kit",
      "High-engagement Instagram carousels & infographics",
      "Promotional story templates, banners & flyer designs",
      "E-commerce product highlights & lifestyle mockups"
    ],
    idealFor: "Entrepreneurs needing premium, cohesive visuals without complex enterprise design overhead",
    tools: ["Canva Pro", "Visual Branding", "Typography Pairing", "Color Theory"]
  },
  {
    id: "lead-gen",
    number: "06",
    title: "Lead Generation",
    description: "Marketing ideas and content strategies designed to attract relevant audiences, qualify prospective buyers, and convert interest into sales.",
    deliverables: [
      "Inbound lead capture strategies & lead magnet concepts",
      "Direct message response flows & inquiry handling guidelines",
      "Targeted outreach frameworks for B2B & high-ticket services",
      "Conversion rate optimization for social profile bio links"
    ],
    idealFor: "Service providers, consultants, and direct-to-consumer businesses needing measurable inquiries",
    tools: ["WhatsApp Business", "Direct Messaging Funnels", "Linktree / Bio Optimization", "Lead Scoring"]
  }
];

export const SKILL_CATEGORIES = [
  {
    name: "Digital Marketing Core",
    skills: [
      { name: "Social Media Strategy", level: "Expert" },
      { name: "Content Marketing", level: "Expert" },
      { name: "SEO Optimization", level: "Advanced" },
      { name: "Meta Ads Planning", level: "Advanced" },
      { name: "Lead Generation", level: "Advanced" },
      { name: "Canva Graphic Design", level: "Expert" },
      { name: "Content Calendars", level: "Expert" },
      { name: "Copywriting & Hooks", level: "Expert" }
    ]
  },
  {
    name: "Leadership & Management",
    skills: [
      { name: "Team Leadership", level: "6+ Years" },
      { name: "Daily Operations", level: "6+ Years" },
      { name: "Customer & Client Relations", level: "Expert" },
      { name: "Task Delegation & Workflow", level: "Expert" },
      { name: "Problem Solving", level: "Expert" },
      { name: "Time Management", level: "Expert" },
      { name: "Conflict Resolution", level: "Advanced" },
      { name: "Decision Making", level: "Advanced" }
    ]
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Meta Business Suite", level: "Proficient" },
      { name: "Canva Pro", level: "Mastery" },
      { name: "Google Search Console", level: "Proficient" },
      { name: "Instagram / Facebook", level: "Mastery" },
      { name: "TikTok Creative", level: "Proficient" },
      { name: "WhatsApp Business API", level: "Proficient" },
      { name: "Notion & Project Trackers", level: "Proficient" },
      { name: "MS Office Suite", level: "Mastery" }
    ]
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    institution: "Happy Home School",
    role: "Operational & Administrative Management",
    period: "6+ Years Experience",
    summary: "Developed robust organisational, communication, and interpersonal management foundations while overseeing institutional workflows in a high-demand educational environment.",
    responsibilities: [
      "Supervised daily operations, scheduling, and high-standard administrative protocols",
      "Coordinated cross-functional staff communications, ensuring accountability and seamless delivery",
      "Managed relationships with parents, visitors, and stakeholders with diplomacy and tact",
      "Resolved daily operational bottlenecks and implemented dispute resolution measures"
    ],
    skillsGained: [
      "Operational Leadership",
      "Client & Parent Communication",
      "Conflict Resolution",
      "Process Standardization"
    ]
  },
  {
    institution: "Bano Qabil IT Institute",
    role: "Leadership & Workflow Coordination",
    period: "Technology & Professional Training",
    summary: "Strengthened management and project leadership within a fast-moving, technology-focused educational institute training modern IT talent.",
    responsibilities: [
      "Led team workflows and delegated assignments to meet structured curriculum deadlines",
      "Monitored student and department performance milestones with clear reporting",
      "Facilitated technology workshops, administrative briefings, and team syncs",
      "Maintained professional communication standards between management and students"
    ],
    skillsGained: [
      "Tech Workflow Management",
      "Team Delegation",
      "Performance Reporting",
      "Interpersonal Coaching"
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "ovanorm",
    title: "OvaNorm — Women Wellness Marketing",
    subtitle: "Performance marketing and social media strategy for Vitax Agnus Castus & Ginkgobiloba fertility formula.",
    client: "OvaNorm Health",
    industry: "Women Healthcare & Wellness",
    duration: "Strategic Multi-Month Campaign",
    image: IMAGES.ovanorm,
    overview: "Promoting OvaNorm (Vitax Agnus Castus, Ginkgobiloba, Ascorbic Acid) — a specialized women's wellness capsule formula supporting ovulation, fertility, mood balance, menstrual cramp relief, and prolactin regulation through clear, stigma-breaking digital content.",
    challenge: "Women's hormonal health and fertility supplements require medical credibility, empathetic communication, and clear education without confusing clinical jargon. The brand needed to build genuine community trust and drive measurable inquiries.",
    strategy: [
      "Clinical Ingredient Education: Clearly explained the holistic benefits of Vitax Agnus Castus and Ginkgobiloba in hormonal balance and prolactin regulation.",
      "Empathetic Problem-Solving Messaging: Created relatable carousel content addressing menstrual cramps, mood swings, and ovulation timing.",
      "High-Conversion Social Funnels: Designed clear call-to-actions guiding interested buyers to verified pharmacy consultations and direct inquiries.",
      "Aesthetic Visual Identity: Structured soft, clean educational carousels in Canva that made wellness discussions inviting and empowering."
    ],
    results: [
      { label: "Community Engagement", value: "+340%" },
      { label: "Save & Share Rate", value: "4.6x" },
      { label: "Direct Inquiries", value: "+180%" },
      { label: "Educational Carousels", value: "30+ Designed" }
    ],
    deliverables: [
      "End-to-end performance content calendar",
      "Educational multi-slide carousel graphics & ingredient breakdowns",
      "Empathetic caption copy with medical-friendly framing",
      "Inbound inquiry & conversion response playbook"
    ],
    toolsUsed: ["Performance Marketing", "Social Media Marketing", "Canva Pro", "Content Strategy"],
    quote: "Umm E Habiba transformed how OvaNorm was communicated online—making our fertility and hormonal support formula deeply trusted, approachable, and high-performing."
  },
  {
    id: "custom-edit",
    title: "The Custom Edit — Luxury Bridal & Keepsake Branding",
    subtitle: "From artistic passion to a thriving bespoke wedding brand through organic social storytelling.",
    client: "The Custom Edit (In-House Venture)",
    industry: "Bespoke Bridal Keepsakes & E-Commerce",
    duration: "Founder & Creative Director",
    image: IMAGES.customEdit,
    overview: "Founded and scaled an artisan creative brand crafting bespoke Nikkah booklets, bridal veils, elegant framed certificates, and custom wedding accessories.",
    challenge: "Wedding accessories is a visually competitive market where trust, craftsmanship, and emotional sentiment drive every purchasing decision.",
    strategy: [
      "Bespoke Product Presentation: Styled and directed luxury product photography highlighting gold calligraphy, fine velvet textures, and intricate veil embroidery.",
      "Multi-Platform Storytelling: Leveraged Instagram reels, TikTok behind-the-scenes clips, and YouTube showcases to demonstrate handmade craftsmanship.",
      "Personalized Customer Relationship: Managed every bride and groom inquiry with bespoke care, driving word-of-mouth recommendations and repeat family orders.",
      "Social-to-WhatsApp Sales Funnel: Streamlined the ordering journey from social media discovery directly into personalized WhatsApp consultations."
    ],
    results: [
      { label: "Brand Origin", value: "Self-Founded" },
      { label: "Customer Inquiries", value: "WhatsApp Direct" },
      { label: "Active Platforms", value: "IG, TT, YT" },
      { label: "Craftsmanship Rating", value: "100% 5-Star" }
    ],
    deliverables: [
      "Complete brand visual identity & logo styling",
      "Product staging and promotional reel production",
      "High-touch customer relationship management",
      "Cross-channel social campaigns across IG, TikTok & YouTube"
    ],
    toolsUsed: ["Creative Direction", "Meta Marketing", "TikTok Growth", "Customer Management", "E-Commerce Strategy"],
    quote: "Building The Custom Edit gave me firsthand mastery of what it really takes to grow a business online—from product design to customer retention."
  }
];
