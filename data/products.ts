import type { IconType } from "react-icons";
import { BsChatDots, BsCashCoin, BsCart3, BsCalculator } from "react-icons/bs";
import type { Accent } from "./accents";

export type ProductStatus = "Live" | "Pilot" | "In Testing";

export interface Metric {
  label: string;
  // Leave null until there is a real number. Null metrics are not rendered.
  value: string | null;
}

export interface Screenshot {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export interface Product {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  icon: IconType;
  accent: Accent;
  platform: string;
  status: ProductStatus;
  // Which contact-form project type a "build something like this" CTA preselects.
  projectType: string;
  problem: string;
  solution: string;
  features: string[];
  stack: { group: string; items: string[] }[];
  // Verifiable facts about what was built. Shown under Results alongside any real metrics.
  highlights: string[];
  metrics: Metric[];
  screenshots: Screenshot[];
  link?: { href: string; label: string };
  beta?: boolean;
  seo: { title: string; description: string };
}

export const products: Product[] = [
  {
    slug: "ttomni",
    name: "TTomni",
    tagline: "One AI assistant for WhatsApp, Telegram, SMS and web chat",
    summary:
      "A done-for-you AI customer assistant that answers on WhatsApp, Telegram, SMS and website chat, captures leads and takes bookings, all managed from one dashboard.",
    icon: BsChatDots,
    accent: "blue",
    platform: "Web App",
    status: "Live",
    projectType: "AI chatbot or assistant",
    problem:
      "Most T&T businesses take customer questions on WhatsApp, and replies depend on whoever is holding the phone. Questions after hours go unanswered, the same answers get typed over and over, and leads are lost.",
    solution:
      "TTomni puts one Claude-powered assistant on every channel a business already uses. It answers from the business's own information, captures leads, and takes booking requests. Owners manage everything from one admin dashboard.",
    features: [
      "One assistant across WhatsApp, Telegram, SMS and a website chat widget",
      "Answers trained on each business's own products, prices and policies",
      "Lead capture and booking requests, with email notifications",
      "Admin dashboard to review conversations and update the assistant",
      "Rate limiting and authenticated admin access",
    ],
    stack: [
      { group: "AI", items: ["Anthropic Claude (Sonnet, Haiku)"] },
      { group: "Backend", items: ["Node.js", "Express", "Zod"] },
      { group: "Frontend", items: ["React", "Vite", "Tailwind CSS"] },
      { group: "Channels", items: ["WhatsApp & SMS via Twilio", "Telegram Bot API"] },
      { group: "Data & hosting", items: ["Neon Postgres", "Vercel serverless"] },
    ],
    highlights: [
      "Live in production at ttomni.app",
      "4 messaging channels served by one assistant",
    ],
    metrics: [
      { label: "Businesses onboarded", value: null },
      { label: "Conversations handled", value: null },
      { label: "Uptime", value: null },
    ],
    screenshots: [],
    link: { href: "https://ttomni.app", label: "Visit ttomni.app" },
    seo: {
      title: "TTomni: AI chatbot for WhatsApp in Trinidad and Tobago | Bridgemohan Technologies",
      description:
        "Case study: how we built TTomni, a Claude-powered AI assistant that answers customers on WhatsApp, Telegram, SMS and web chat for Trinidad and Tobago businesses.",
    },
  },
  {
    slug: "bankerpro",
    name: "BankerPro",
    tagline: "Bank statements in, financial clarity out",
    summary:
      "Upload bank and credit card statements and AI extracts and categorizes every transaction, charts spending, and writes plain-language insights.",
    icon: BsCashCoin,
    accent: "purple",
    platform: "Web App",
    status: "Pilot",
    projectType: "Finance or business tool",
    problem:
      "Local banks give customers PDF statements, not usable data. Understanding where money goes means typing transactions into a spreadsheet by hand, so most people and small businesses never do it.",
    solution:
      "BankerPro reads PDF and CSV statements with Claude, pulls out every transaction, sorts it into categories, and turns the result into charts and AI-written recommendations. Sensitive data is encrypted before it is stored.",
    features: [
      "PDF and CSV statement upload",
      "AI transaction extraction and categorization",
      "Spending charts and trend reports",
      "AI-written insights and saving recommendations",
      "Excel export",
      "Subscription billing through PayPal, plus Google sign-in",
    ],
    stack: [
      { group: "AI", items: ["Anthropic Claude"] },
      { group: "App", items: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Recharts"] },
      { group: "Data", items: ["Neon Postgres", "Drizzle ORM"] },
      { group: "Security", items: ["AES-256-GCM encryption at rest", "JWT sessions", "Google OAuth"] },
      { group: "Payments & hosting", items: ["PayPal Subscriptions API", "Vercel"] },
    ],
    highlights: [
      "Running in pilot with early users",
      "Statement text and transaction descriptions encrypted at rest",
    ],
    metrics: [
      { label: "Pilot users", value: null },
      { label: "Statements processed", value: null },
      { label: "Transactions categorized", value: null },
    ],
    screenshots: [],
    link: { href: "https://bankerpro.vercel.app", label: "View the pilot" },
    seo: {
      title: "BankerPro: AI bank statement analysis | Bridgemohan Technologies",
      description:
        "Case study: BankerPro uses Claude AI to extract and categorize transactions from PDF and CSV bank statements and turn them into spending reports.",
    },
  },
  {
    slug: "groceryhubtt",
    name: "GroceryHubTT",
    tagline: "Create. Compare. Save.",
    summary:
      "A grocery app for Trinidad & Tobago: build shared lists, scan receipts with AI, and compare real prices at Hi-Lo, Massy, PriceSmart and more.",
    icon: BsCart3,
    accent: "green",
    platform: "Android App",
    status: "Live",
    projectType: "Consumer web or mobile app",
    problem:
      "Grocery prices in T&T change constantly and vary between stores, but there is no easy way to see where an item is cheapest. Shoppers rely on flyers and guesswork.",
    solution:
      "GroceryHubTT builds a crowd-sourced price database from shoppers' receipts. Point the camera at a receipt and AI reads the store, items, prices and date. Everyone gets the best recent local prices, plus shared lists with budgets.",
    features: [
      "AI receipt scanning that detects store, items, prices and date",
      "Crowd-sourced price tracking across T&T supermarkets",
      "Grocery lists with budgets, quick-add and batch paste",
      "Group lists edited together in real time",
      "Offline receipt queue that syncs when back online",
      "Watchlist alerts when a tracked item turns up at a good price",
    ],
    stack: [
      { group: "AI", items: ["Google Gemini 2.5 Flash (Firebase AI Logic)"] },
      { group: "App", items: ["Flutter", "Dart", "Hive (offline storage)"] },
      { group: "Backend", items: ["Firebase Auth", "Cloud Firestore", "Cloud Functions", "Cloud Messaging"] },
      { group: "Quality", items: ["Firebase Crashlytics"] },
    ],
    highlights: [
      "Published on Google Play",
      "Real-time shared lists and offline-first receipt capture",
    ],
    metrics: [
      { label: "Installs (Sept 2026)", value: "100+" },
      { label: "Monthly active users", value: "75" },
      { label: "Receipts scanned", value: null },
    ],
    screenshots: [],
    link: { href: "https://play.google.com/store/apps/details?id=com.groceryhubtt.grocery_hub_tt", label: "Get it on Google Play" },
    seo: {
      title: "GroceryHubTT: grocery price comparison app for Trinidad | Bridgemohan Technologies",
      description:
        "Case study: GroceryHubTT is a Flutter and Firebase app that uses AI receipt scanning to compare grocery prices across Trinidad and Tobago supermarkets.",
    },
  },
  {
    slug: "sea-quest-tt",
    name: "SEA Quest TT",
    tagline: "Story-driven maths adventures for SEA students",
    summary:
      "A game that helps Trinidad & Tobago students in Standard 3 to 5 prepare for the SEA exam through quests, missions, XP and progress tracking.",
    icon: BsCalculator,
    accent: "indigo",
    platform: "Android App",
    status: "In Testing",
    projectType: "Education or interactive app",
    problem:
      "SEA maths prep usually means past papers and worksheets. Many students lose motivation long before exam day, and parents have little visibility into what their child actually struggles with.",
    solution:
      "SEA Quest wraps the Standard 5 maths curriculum in a story. Students travel through worlds like the Market District and Pirate Bay, unlocking missions as they master topics, while progress tracking shows what needs more practice.",
    features: [
      "Curriculum-aligned missions grouped into story worlds",
      "XP, stars, coins and levels to keep students playing",
      "Guest play with optional Google sign-in to save progress",
      "Works offline, with progress saved on the device",
      "Multiple student profiles per device",
      "Admin analytics for content and progress",
    ],
    stack: [
      { group: "Mobile", items: ["Flutter", "Riverpod", "Drift (SQLite)"] },
      { group: "Web & API", items: ["Next.js", "React", "Tailwind CSS", "shadcn/ui"] },
      { group: "Data & auth", items: ["PostgreSQL (Supabase)", "Prisma", "NextAuth with Google SSO"] },
      { group: "Hosting", items: ["Vercel"] },
    ],
    highlights: [
      "Closed testing on Google Play",
      "Phone and tablet layouts",
    ],
    metrics: [
      { label: "Students", value: null },
      { label: "Missions completed", value: null },
    ],
    screenshots: [
      { src: "/work/sea-quest-tt/phone-01-login.png", alt: "SEA Quest sign-in screen", width: 1200, height: 1920 },
      { src: "/work/sea-quest-tt/phone-02-home.png", alt: "SEA Quest world map with story worlds and missions", width: 1200, height: 1920 },
      { src: "/work/sea-quest-tt/phone-03-missions.png", alt: "SEA Quest mission list", width: 1200, height: 1920 },
    ],
    beta: true,
    seo: {
      title: "SEA Quest TT: SEA maths learning app | Bridgemohan Technologies",
      description:
        "Case study: SEA Quest TT is a Flutter and Next.js game that helps Trinidad and Tobago students prepare for the SEA maths exam.",
    },
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}
