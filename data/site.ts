import type { IconType } from "react-icons";
import { BsChatDots, BsGraphUp, BsPhone, BsController, BsSearch, BsVectorPen, BsCodeSlash, BsRocket, BsLifePreserver } from "react-icons/bs";
import type { Accent } from "./accents";

export const SITE_URL = "https://www.bridgemohan.com";
export const CONTACT_EMAIL = "nbridgemohan@gmail.com";
export const LINKEDIN_URL = "https://linkedin.com/in/bridgemohan";
export const CONTRA_URL = "https://contra.com/nicholas_bridgemohan_2lj9tch8";
export const TTOMNI_URL = "https://ttomni.app";

// Every number here must be true. `value` animates up from 0; `suffix` is appended.
export const stats = [
  { value: 15, suffix: "+", label: "Years of engineering experience" },
  { value: 4, suffix: "", label: "Products designed, built and launched in-house" },
  { value: 3, suffix: "", label: "AI-powered products in production or pilot" },
  { value: 100, suffix: "+", label: "Installs of GroceryHubTT on Google Play" },
];

export interface Service {
  title: string;
  tagline: string;
  icon: IconType;
  accent: Accent;
  forWho: string;
  deliver: string[];
  proofSlug: string;
  projectType: string;
}

export const services: Service[] = [
  {
    title: "AI assistants and chatbots",
    tagline: "Answer every customer, on every channel, at any hour.",
    icon: BsChatDots,
    accent: "blue",
    forWho: "Clinics, agencies, retailers and service businesses fielding the same questions every day on WhatsApp, SMS or their website.",
    deliver: [
      "An assistant grounded in your products, prices and policies",
      "WhatsApp, SMS, Telegram and website chat",
      "Lead capture and bookings into your existing tools",
      "A dashboard to review every conversation",
    ],
    proofSlug: "ttomni",
    projectType: "AI chatbot or assistant",
  },
  {
    title: "Fintech and business software",
    tagline: "Turn documents, spreadsheets and manual work into software.",
    icon: BsGraphUp,
    accent: "purple",
    forWho: "Companies running finance, reporting, HR/payroll or inventory on spreadsheets, email and paper.",
    deliver: [
      "AI document and data processing",
      "Dashboards, reports and exports",
      "HR/payroll and inventory systems",
      "Role-based access and encryption at rest",
    ],
    proofSlug: "bankerpro",
    projectType: "Finance or business tool",
  },
  {
    title: "Web and mobile apps",
    tagline: "From first sketch to the App Store, on one codebase.",
    icon: BsPhone,
    accent: "green",
    forWho: "Founders and product teams launching a new app, or replacing one that has outgrown its first version.",
    deliver: [
      "iOS, Android and web from one Flutter codebase",
      "Accounts, payments and push notifications",
      "Offline-first data and real-time sync",
      "App Store and Google Play release",
    ],
    proofSlug: "groceryhubtt",
    projectType: "Consumer web or mobile app",
  },
  {
    title: "Learning and interactive products",
    tagline: "Products people come back to.",
    icon: BsController,
    accent: "indigo",
    forWho: "EdTech companies, publishers, schools and training providers who need learning that people actually finish.",
    deliver: [
      "Curriculum-aligned lessons and practice",
      "Game mechanics: levels, rewards, streaks",
      "Offline-friendly mobile apps",
      "Progress analytics for parents, teachers or admins",
    ],
    proofSlug: "sea-quest-tt",
    projectType: "Education or interactive app",
  },
];

export const processSteps: { title: string; description: string; icon: IconType }[] = [
  { title: "Discovery", description: "A free call to understand the problem, the users and what success looks like. You get a written scope and a quote.", icon: BsSearch },
  { title: "Prototype", description: "Clickable screens or a working demo early on, so you react to something real before the full build.", icon: BsVectorPen },
  { title: "Build", description: "Short development cycles with a demo at the end of each. You always know where the project stands.", icon: BsCodeSlash },
  { title: "Launch", description: "Release to the web, Google Play or the App Store, with analytics and error monitoring from day one.", icon: BsRocket },
  { title: "Support", description: "Fixes, updates and new features after launch, on a monthly plan or as needed.", icon: BsLifePreserver },
];

// Technologies used across the portfolio products.
export const techStack = [
  "Anthropic Claude",
  "Google Gemini",
  "Next.js",
  "React",
  "TypeScript",
  "Node.js",
  "Flutter",
  "Firebase",
  "PostgreSQL",
  "Tailwind CSS",
  "Twilio",
  "Vercel",
];

export interface StarterPackage {
  name: string;
  // e.g. "US$2,500". Leave null to show "Fixed quote after a free call".
  priceFrom: string | null;
  timeline: string | null;
  description: string;
  includes: string[];
  projectType: string;
  featured?: boolean;
}

export const packages: StarterPackage[] = [
  {
    name: "Custom AI assistant",
    priceFrom: "US$3,500",
    timeline: "2–3 weeks, then a TTomni plan from US$149/month",
    description: "An AI assistant built around your workflows and connected to the systems you already use.",
    includes: [
      "Assistant trained on your business information",
      "WhatsApp, SMS and website chat",
      "Connection to your booking system or CRM",
      "30 days of tuning after launch",
    ],
    projectType: "AI chatbot or assistant",
  },
  {
    name: "Product MVP",
    priceFrom: "US$15,000",
    timeline: "Typically 8–12 weeks",
    description: "A first working version of your web or mobile product, ready for real users and investors.",
    includes: [
      "Discovery workshop and written scope",
      "Core features, accounts and admin area",
      "AI features where they add value",
      "Deployment, handover and source code",
    ],
    projectType: "Consumer web or mobile app",
    featured: true,
  },
  {
    name: "Operations system",
    priceFrom: "US$20,000",
    timeline: "Typically 10–14 weeks",
    description: "Inventory, HR or back-office software that replaces spreadsheets and fits how your team works.",
    includes: [
      "Workflows mapped and scoped",
      "Reports, dashboards and exports",
      "Role-based access for your team",
      "Data migration from your spreadsheets",
    ],
    projectType: "Finance or business tool",
  },
];

// Reasons an overseas client can work with a studio in Trinidad. Keep every point true.
export const whyUs = [
  {
    title: "Your working hours",
    description:
      "We're on UTC-4: the same hours as US Eastern for much of the year, with a solid overlap with European afternoons. Calls happen during your day.",
  },
  {
    title: "Proof before you hire",
    description:
      "Every service we offer is backed by a product our team designed, built and runs. You can try them before you talk to us.",
  },
  {
    title: "Senior team, nearshore rates",
    description:
      "15+ years of engineering experience, at a lower cost than a US or European agency, on the same modern stack.",
  },
  {
    title: "Security by default",
    description:
      "Encryption at rest, role-based access and secure sign-in are part of how we build, not add-ons.",
  },
];

export const about = {
  intro:
    "Bridgemohan Technologies is a software studio based in Port of Spain, Trinidad and Tobago. Our team designs, builds and runs production software: AI assistants, fintech tools, and web and mobile apps.",
  body:
    "We started by building products of our own, because the best way to prove we can ship is to ship. Today we bring the same team, stack and standards to client projects in the US, Europe and the Caribbean.",
  principles: [
    { title: "Small, senior team", description: "The people you meet on the first call are the people who build your product." },
    { title: "Fixed scope, clear price", description: "Written scope and a quote before work starts. No open-ended billing surprises." },
    { title: "You own everything", description: "Source code, designs and accounts are yours from day one." },
  ],
  leader: { name: "Nicholas Bridgemohan", role: "Founder & Principal Software Architect" },
};

// Add real quotes only. The section is hidden while this list is empty.
export const testimonials: { quote: string; name: string; role: string }[] = [];

export const projectTypes = [
  "AI chatbot or assistant",
  "Finance or business tool",
  "Consumer web or mobile app",
  "Education or interactive app",
  "Website",
  "Something else",
];

// Update these ranges to match how you price work.
export const budgetRanges = [
  "Not sure yet",
  "Under US$5,000",
  "US$5,000 – US$15,000",
  "US$15,000 – US$40,000",
  "US$40,000+",
];
