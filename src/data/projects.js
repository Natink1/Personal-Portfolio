import laravelBusiness from "@/assets/proj-laravel-business.jpg";
import laravelApi from "@/assets/proj-laravel-api.jpg";
import adminDashboard from "@/assets/proj-admin-dashboard.jpg";
import network from "@/assets/proj-network.jpg";
import cctv from "@/assets/proj-cctv.jpg";
import biotime from "@/assets/proj-biotime.jpg";
import logos from "@/assets/proj-logos.jpg";
import brand from "@/assets/proj-brand.jpg";
import social from "@/assets/proj-social.jpg";

export const categories = ["All", "Backend", "IT Systems", "Branding"];

export const projects = [
  {
    id: 1,
    title: "EMR Backend",
    description:
      "Enterprise Electronic Medical Record (EMR) backend platform managing patient records, clinical workflows, appointments, and secure doctor-patient access.",
    category: "Backend",
    tags: ["Laravel", "PHP", "MySQL", "Healthcare API"],
    image: laravelBusiness,
  },
  {
    id: 2,
    title: "Demand Link App",
    description:
      "Full-stack web application linking supply and demand across enterprise distribution channels with inventory management and order routing.",
    category: "Backend",
    tags: ["Laravel", "REST API", "Database Design", "Web App"],
    image: laravelApi,
  },
  {
    id: 3,
    title: "Activity Tracker Backend",
    description:
      "High-throughput activity logging service providing real-time user event tracking, audit logs, background queue processing, and telemetry reporting.",
    category: "Backend",
    tags: ["Node.js", "Laravel", "REST API", "WebSockets"],
    image: laravelApi,
  },
  {
    id: 4,
    title: "Licence Tracker App",
    description:
      "Automated enterprise license tracker monitoring software seat entitlements, expiration dates, renewal notifications, and vendor compliance.",
    category: "Backend",
    tags: ["Laravel", "Filament PHP", "MySQL", "Automation"],
    image: laravelBusiness,
  },
  {
    id: 5,
    title: "Admin Dashboards for Websites",
    description:
      "Bespoke administrative control panels crafted with Laravel and Filament PHP, featuring user permission management (RBAC), CRUD interfaces, and analytics.",
    category: "Backend",
    tags: ["Filament PHP", "Laravel", "RBAC", "CRUD"],
    image: adminDashboard,
  },
  {
    id: 6,
    title: "CCTV Installation",
    description:
      "Full-perimeter IP camera surveillance deployment with Hikvision equipment, NVR network storage, and remote mobile/desktop monitoring configuration.",
    category: "IT Systems",
    tags: ["Hikvision", "IP CCTV", "NVR", "Security Ops"],
    image: cctv,
  },
  {
    id: 7,
    title: "Datacenter Installation",
    description:
      "End-to-end datacenter infrastructure deployment: server rack assembly, cable management, patch panel termination, managed switches, and uninterrupted power setup.",
    category: "IT Systems",
    tags: ["Datacenter", "Rack Servers", "Managed Switches", "Networking"],
    image: network,
  },
  {
    id: 8,
    title: "Biotime Attendance Machine Installation and Configuration",
    description:
      "Biometric attendance system rollout integrating ZKTeco BioTime hardware, access control door strike systems, and automated HR attendance report sync.",
    category: "IT Systems",
    tags: ["ZKTeco", "BioTime", "Access Control", "Biometrics"],
    image: biotime,
  },
  {
    id: 9,
    title: "Logo and Branding Projects",
    description:
      "Distinctive corporate visual identities, vector logo designs, brand guideline books, color schemes, and stationery collateral across tech and retail ventures.",
    category: "Branding",
    tags: ["Logo Design", "Brand Identity", "Illustrator", "Typography"],
    image: logos,
  },
  {
    id: 10,
    title: "Social Media Design and Management",
    description:
      "Strategic social media marketing assets, carousel graphics, promotional campaign creatives, and brand presence design optimized for engagement.",
    category: "Branding",
    tags: ["Photoshop", "Social Media", "Visual Content", "Campaigns"],
    image: social,
  },
];
