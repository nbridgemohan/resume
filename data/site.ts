import type { IconType } from "react-icons";
import { BsChatDots, BsGraphUp, BsPhone, BsController, BsSearch, BsVectorPen, BsCodeSlash, BsRocket, BsLifePreserver } from "react-icons/bs";
import type { Accent } from "./accents";

export const SITE_URL = "https://www.bridgemohan.com";
export const CONTACT_EMAIL = "nbridgemohan@gmail.com";

// Every number here must be true. Replace or add as real figures come in.
export const stats = [
  { number: "15+", label: "Years building software" },
  { number: "4", label: "Products built in-house" },
  { number: "3", label: "AI-powered products" },
  { number: "Web + Android", label: "Platforms we ship on" },
];

export interface Service {
  title: string;
  icon: IconType;
  accent: Accent;
  forWho: string;
  deliver: string[];
  proofSlug: string;
  projectType: string;
}

export const services: Service[] = [
  {
    title: "AI chatbots and assistants",
    icon: BsChatDots,
    accent: "blue",
    forWho: "Businesses answering the same customer questions on WhatsApp, Instagram or their website every day.",
    deliver: [
      "An AI assistant trained on your products, prices and policies",
      "WhatsApp, Telegram, SMS and website chat",
      "Lead capture and booking requests",
      "A dashboard to review conversations",
    ],
    proofSlug: "ttomni",
    projectType: "AI chatbot or assistant",
  },
  {
    title: "Finance and business tools",
    icon: BsGraphUp,
    accent: "purple",
    forWho: "Companies running key processes on spreadsheets, paper or email: finance, reporting, HR/payroll or inventory.",
    deliver: [
      "Document and data processing with AI",
      "Dashboards, reports and exports",
      "HR/payroll and inventory systems",
      "Secure logins, roles and encrypted data",
    ],
    proofSlug: "bankerpro",
    projectType: "Finance or business tool",
  },
  {
    title: "Consumer web and mobile apps",
    icon: BsPhone,
    accent: "green",
    forWho: "Founders and brands launching a mobile app, web app or online store.",
    deliver: [
      "Android, iOS and web apps from one Flutter codebase",
      "Accounts, payments and push notifications",
      "E-commerce and ordering",
      "Play Store and App Store release",
    ],
    proofSlug: "groceryhubtt",
    projectType: "Consumer web or mobile app",
  },
  {
    title: "Education and interactive apps",
    icon: BsController,
    accent: "indigo",
    forWho: "Schools, tutors, publishers and training providers who want learning people will actually finish.",
    deliver: [
      "Curriculum-aligned lessons and quizzes",
      "Game mechanics: levels, rewards, progress",
      "Offline-friendly mobile apps",
      "Progress reports for parents, teachers or admins",
    ],
    proofSlug: "sea-quest-tt",
    projectType: "Education or interactive app",
  },
];

export const processSteps: { title: string; description: string; icon: IconType }[] = [
  { title: "Discovery", description: "A free call to understand the problem, the users and what success looks like. You get a written scope and a quote.", icon: BsSearch },
  { title: "Prototype", description: "Clickable screens or a working demo within the first weeks, so you can react to something real before the full build.", icon: BsVectorPen },
  { title: "Build", description: "Development in short cycles with a demo at the end of each, so you always know where the project stands.", icon: BsCodeSlash },
  { title: "Launch", description: "Deployment to the web, Google Play or the App Store, with analytics and error monitoring set up from day one.", icon: BsRocket },
  { title: "Support", description: "Bug fixes, updates and new features after launch, on a monthly plan or as needed.", icon: BsLifePreserver },
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
}

export const packages: StarterPackage[] = [
  {
    name: "Custom AI chatbot",
    priceFrom: "US$3,500",
    timeline: "Typically 2–3 weeks, then a TTomni plan from US$149/month",
    description: "An AI assistant built around your workflows and connected to the systems you already use. Need something standard? TTomni plans start at US$149/month.",
    includes: [
      "Assistant trained on your business information",
      "WhatsApp, SMS and website chat",
      "Connection to your booking system or CRM",
      "30 days of tuning after launch",
    ],
    projectType: "AI chatbot or assistant",
  },
  {
    name: "Business web app MVP",
    priceFrom: "US$15,000",
    timeline: "Typically 8–12 weeks",
    description: "A first working version of your idea, ready to put in front of real users.",
    includes: [
      "Discovery workshop and written scope",
      "Core features, user accounts and admin area",
      "Hosting and deployment",
      "Handover and training",
    ],
    projectType: "Finance or business tool",
  },
  {
    name: "Inventory or HR system",
    priceFrom: "US$20,000",
    timeline: "Typically 10–14 weeks",
    description: "Replace spreadsheets with a system built around how your business already works.",
    includes: [
      "Stock or staff records in one place",
      "Reports and exports",
      "Role-based access for your team",
      "Data migration from your spreadsheets",
    ],
    projectType: "Finance or business tool",
  },
];

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

// Reasons an overseas client can work with a studio in Trinidad. Keep every point true.
export const whyUs = [
  {
    title: "Your working hours",
    description:
      "We're on UTC-4: the same hours as US Eastern for much of the year, and overlapping European afternoons. Calls happen during your day, not at midnight.",
  },
  {
    title: "Proof before you hire",
    description:
      "Every service we offer is backed by a product we built and run ourselves. You can try them before you talk to us.",
  },
  {
    title: "Senior-level work, nearshore rates",
    description:
      "15+ years building software, at a lower cost than a US or European agency, with the same tools and cloud platforms.",
  },
  {
    title: "Security built in",
    description:
      "Encryption at rest, role-based access and secure sign-in are part of how we build, as in BankerPro.",
  },
];
