import {
  Lightbulb,
  Bot,
  Infinity,
  HeartHandshake,
  Unlock,
  Sparkles,
  Cpu,
  Database,
  Workflow,
  Palette,
  Code2,
  Briefcase,
  HardDrive,
  Globe,
  Wand2,
  type LucideIcon,
} from "lucide-react";

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface BruthaProduct {
  id: string;
  name: string;
  description: string;
  icon: LucideIcon;
  category: string;
  url: string;
  tagline: string;
}

export interface ProductCategory {
  id: string;
  name: string;
  label: string;
  description: string;
  icon: LucideIcon;
  color: string;
}

export const mission = {
  headline: "Infrastructure for the",
  highlight: "imagination era",
  body: "BRUTHA is a creative cloud infrastructure built for the age of AI agents. We give creators, developers, and teams the platform to build, ship, and scale ideas that were previously impossible — connecting human creativity with autonomous intelligence at planetary scale.",
};

export const values: Value[] = [
  {
    id: "creativity",
    title: "Radical Creativity",
    description: "Technology should amplify imagination, not constrain it. We build tools that bend to your vision — never the other way around.",
    icon: Lightbulb,
  },
  {
    id: "agent-first",
    title: "Agent-First",
    description: "AI agents are the new primitives of software. Every layer of our infrastructure is designed for the autonomous era from the ground up.",
    icon: Bot,
  },
  {
    id: "scale",
    title: "Limitless Scale",
    description: "From your first prototype to planetary reach. Our elastic fabric grows silently with your ambition — no rewrites, no limits.",
    icon: Infinity,
  },
  {
    id: "joy",
    title: "Developer Joy",
    description: "Every API should spark delight. Every workflow should feel intuitive. We obsess over the developer experience so you can obsess over what matters.",
    icon: Sparkles,
  },
  {
    id: "openness",
    title: "Radical Openness",
    description: "Open standards, interoperable APIs, zero lock-in. Your work belongs to you — we just provide the canvas and the brushes.",
    icon: Unlock,
  },
  {
    id: "sovereignty",
    title: "Creative Sovereignty",
    description: "You own your data, your models, and your creative output. Privacy and control are not features — they are foundational rights.",
    icon: HeartHandshake,
  },
];

export const productCategories: ProductCategory[] = [
  {
    id: "studio",
    name: "BRUTHA STUDIO",
    label: "Studio",
    description: "Creative workspace and design tools for teams",
    icon: Palette,
    color: "#FF8C00",
  },
  {
    id: "develop",
    name: "BRUTHA DEVELOP",
    label: "Develop",
    description: "Full-stack development platform with AI agents",
    icon: Code2,
    color: "#FF8C00",
  },
  {
    id: "business",
    name: "BRUTHA BUSINESS",
    label: "Business",
    description: "Enterprise solutions for growth and operations",
    icon: Briefcase,
    color: "#FF8C00",
  },
  {
    id: "storage",
    name: "BRUTHA STORAGE",
    label: "Storage",
    description: "Intelligent storage and content delivery",
    icon: HardDrive,
    color: "#FF8C00",
  },
  {
    id: "connect",
    name: "BRUTHA CONNECT",
    label: "Connect",
    description: "Global networking, APIs, and event streams",
    icon: Globe,
    color: "#FF8C00",
  },
  {
    id: "create",
    name: "BRUTHA CREATE",
    label: "Create",
    description: "AI-powered creative generation tools",
    icon: Wand2,
    color: "#FF8C00",
  },
];

export const bruthaProducts: BruthaProduct[] = [
  {
    id: "canvas-studio",
    name: "Canvas Studio",
    description: "A collaborative design environment where teams prototype, iterate, and ship creative projects in real time with AI-assisted workflows.",
    icon: Palette,
    category: "studio",
    url: "/products/canvas-studio",
    tagline: "Design without boundaries",
  },
  {
    id: "prototype-ai",
    name: "Prototype AI",
    description: "Rapidly transform sketches, wireframes, and ideas into interactive prototypes powered by generative AI.",
    icon: Sparkles,
    category: "studio",
    url: "/products/prototype-ai",
    tagline: "From idea to interactive in seconds",
  },
  {
    id: "design-sync",
    name: "Design Sync",
    description: "Version control and collaboration for design assets with real-time conflict resolution and review workflows.",
    icon: Lightbulb,
    category: "studio",
    url: "/products/design-sync",
    tagline: "Collaborate without chaos",
  },
  {
    id: "code-engine",
    name: "Code Engine",
    description: "Cloud-native IDE with AI pair programming, automated refactoring, and one-click deployments.",
    icon: Code2,
    category: "develop",
    url: "/products/code-engine",
    tagline: "Ship code at the speed of thought",
  },
  {
    id: "deploy-pipelines",
    name: "Deploy Pipelines",
    description: "CI/CD pipelines with intelligent caching, parallel builds, and canary deployments across any infrastructure.",
    icon: Workflow,
    category: "develop",
    url: "/products/deploy-pipelines",
    tagline: "Release with confidence",
  },
  {
    id: "api-studio",
    name: "API Studio",
    description: "Design, test, and document APIs collaboratively with automatic SDK generation and mock servers.",
    icon: Globe,
    category: "develop",
    url: "/products/api-studio",
    tagline: "APIs built better together",
  },
  {
    id: "analytics-hub",
    name: "Analytics Hub",
    description: "Real-time business intelligence with AI-driven insights, custom dashboards, and predictive modeling.",
    icon: Database,
    category: "business",
    url: "/products/analytics-hub",
    tagline: "Data that drives decisions",
  },
  {
    id: "team-management",
    name: "Team Management",
    description: "Organize people, permissions, and projects with role-based access, SSO, and activity auditing.",
    icon: Briefcase,
    category: "business",
    url: "/products/team-management",
    tagline: "Orchestrate your organization",
  },
  {
    id: "billing-suite",
    name: "Billing Suite",
    description: "Usage-based billing, invoicing, and subscription management with real-time cost analytics and budget alerts.",
    icon: HeartHandshake,
    category: "business",
    url: "/products/billing-suite",
    tagline: "Bill smarter, not harder",
  },
  {
    id: "object-vault",
    name: "Object Vault",
    description: "Geo-redundant object storage with intelligent tiering, versioning, and lifecycle policies for any workload.",
    icon: HardDrive,
    category: "storage",
    url: "/products/object-vault",
    tagline: "Store everything, lose nothing",
  },
  {
    id: "edge-cache",
    name: "Edge Cache",
    description: "Global content delivery network with edge compute capabilities and sub-millisecond cache response times.",
    icon: Globe,
    category: "storage",
    url: "/products/edge-cache",
    tagline: "Blazing fast, everywhere",
  },
  {
    id: "media-lake",
    name: "Media Lake",
    description: "Purpose-built storage for media assets with automatic transcoding, thumbnail generation, and streaming optimization.",
    icon: Database,
    category: "storage",
    url: "/products/media-lake",
    tagline: "Media at planetary scale",
  },
  {
    id: "api-gateway",
    name: "API Gateway",
    description: "Feature-rich API gateway with rate limiting, authentication, caching, and AI-powered request routing.",
    icon: Globe,
    category: "connect",
    url: "/products/api-gateway",
    tagline: "Connect everything",
  },
  {
    id: "mesh-network",
    name: "Mesh Network",
    description: "Software-defined networking with zero-trust security, service mesh, and multi-cloud interconnect.",
    icon: Workflow,
    category: "connect",
    url: "/products/mesh-network",
    tagline: "Networking for the next decade",
  },
  {
    id: "event-stream",
    name: "Event Stream",
    description: "Real-time event streaming and processing with exactly-once semantics and automatic partitioning.",
    icon: Infinity,
    category: "connect",
    url: "/products/event-stream",
    tagline: "Stream without limits",
  },
  {
    id: "gen-studio",
    name: "Gen Studio",
    description: "Text-to-image, text-to-video, and multi-modal generation with fine-tuning and style customization.",
    icon: Wand2,
    category: "create",
    url: "/products/gen-studio",
    tagline: "Create anything, instantly",
  },
  {
    id: "model-trainer",
    name: "Model Trainer",
    description: "Train, evaluate, and deploy custom AI models with automated hyperparameter optimization and managed infrastructure.",
    icon: Cpu,
    category: "create",
    url: "/products/model-trainer",
    tagline: "Your models, your way",
  },
  {
    id: "prompt-lab",
    name: "Prompt Lab",
    description: "Experiment with prompts, compare model outputs, and optimize prompts for production-grade AI applications.",
    icon: Lightbulb,
    category: "create",
    url: "/products/prompt-lab",
    tagline: "Craft perfect prompts",
  },
];

export const getProductsByCategory = (categoryId: string) =>
  bruthaProducts.filter((p) => p.category === categoryId);
