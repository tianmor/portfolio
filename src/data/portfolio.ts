export const site = {
  name: "Mark Christian Morando",
  monogram: "MCM",
  role: "Computer Engineer · Test Engineer",
  email: "christianmorando6@gmail.com",
  github: "https://github.com/tianmor",
  linkedin: "https://www.linkedin.com/in/mark-christian-morando-7a72502a9",
  location: "LAGUNA, PH",
  title: "Mark Christian Morando | Computer Engineer & Developer",
  description:
    "Portfolio of Christian, a Computer Engineer and Test Engineer interested in software development, automation, and AI.",
} as const;

export const navLinks = [
  ["About", "about"],
  ["Experience", "experience"],
  ["Projects", "projects"],
  ["Contact", "contact"],
] as const;

export const tickerTerms = [
  "ENGINEERING",
  "SOFTWARE",
  "AUTOMATION",
  "ARTIFICIAL INTELLIGENCE",
] as const;

export const aboutPills = [
  "Software development",
  "Python",
  "Artificial intelligence",
  "Test engineering",
  "Automation",
  "Problem solving",
] as const;

export const projects = [
  {
    n: "01",
    title: "Filipino Sign Language Translation System",
    type: "AI · COMPUTER VISION",
    text: "An assistive technology concept exploring real-time sign recognition and speech output—connecting computer vision with accessible communication.",
    stack: ["MediaPipe", "MobileNetV3", "TensorFlow Lite", "Raspberry Pi"],
    visual: "◉",
    tint: "violet",
  },
  {
    n: "02",
    title: "Expense Monitoring System",
    type: "WEB APP · FINANCE",
    text: "A personal finance application for recording income and expenses, reviewing transaction history, and understanding spending through a clear dashboard.",
    stack: ["React", "JavaScript", "SQL"],
    visual: "＋",
    tint: "green",
  },
  {
    n: "03",
    title: "Sales Dashboard",
    type: "WEB APP · DATA",
    text: "A web-based workspace for organizing sales records and surfacing useful business information through summary views and interactive charts.",
    stack: ["Next.js", "TypeScript", "Supabase"],
    visual: "↗",
    tint: "blue",
  },
] as const;

export const skills = [
  ["01", "Programming", "Python · JavaScript · HTML · CSS"],
  ["02", "Web development", "React · Next.js · Node.js · Responsive design"],
  ["03", "Tools & technologies", "Git · GitHub · VS Code · SQL · Linux · Raspberry Pi"],
  [
    "04",
    "Engineering & AI",
    "Machine troubleshooting · Test equipment · MediaPipe · TensorFlow Lite · MobileNetV3 · Computer vision",
  ],
] as const;

export const experience = {
  date: "JUL 2026 — PRESENT",
  location: "PHILIPPINES",
  role: "Test Engineer",
  company: "TDK Philippines Corporation",
  summary:
    "Supporting production operations and equipment reliability through hands-on troubleshooting, monitoring, and clear shift documentation.",
  highlights: [
    "Support troubleshooting and repair of testing machines.",
    "Perform automation-based adjustments and mechanical troubleshooting.",
    "Monitor equipment uptime and performance; document major machine downtime in shift reports.",
  ],
  type: ["ENGINEERING", "MANUFACTURING"],
} as const;

export const education = {
  mark: "UPHSL",
  school: "UNIVERSITY OF PERPETUAL HELP SYSTEM LAGUNA",
  degree: ["Bachelor of Science in", "Computer Engineering"],
  field: "COMPUTER ENGINEERING",
} as const;

export const contactLinks = [
  {
    label: "CHRISTIANMORANDO6@GMAIL.COM ↗",
    href: `mailto:${site.email}`,
  },
  { label: "GITHUB.COM/TIANMOR ↗", href: site.github },
  { label: "LINKEDIN PROFILE ↗", href: site.linkedin },
] as const;
