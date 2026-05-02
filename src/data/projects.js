import laravelBusiness from "@/assets/proj-laravel-business.jpg";
import laravelApi from "@/assets/proj-laravel-api.jpg";
import adminDashboard from "@/assets/proj-admin-dashboard.jpg";
import network from "@/assets/proj-network.jpg";
import cctv from "@/assets/proj-cctv.jpg";
import biotime from "@/assets/proj-biotime.jpg";
import logos from "@/assets/proj-logos.jpg";
import brand from "@/assets/proj-brand.jpg";
import social from "@/assets/proj-social.jpg";
import marketingVideo from "@/assets/proj-marketing-video.jpg";
import trainingVideo from "@/assets/proj-training-video.jpg";

export const categories = ["All", "Laravel", "IT Systems", "Branding", "Motion Design"];

export const projects = [
  {
    id: 1,
    title: "Laravel Business System",
    description: "End-to-end business management platform with role-based access, inventory and reporting modules.",
    category: "Laravel",
    tags: ["Laravel", "PHP", "MySQL", "Dashboard"],
    image: laravelBusiness,
  },
  {
    id: 2,
    title: "Laravel REST API",
    description: "Token-authenticated REST API powering mobile and web clients with versioning and rate limiting.",
    category: "Laravel",
    tags: ["API", "Auth", "Backend"],
    image: laravelApi,
  },
  {
    id: 3,
    title: "Admin Dashboard",
    description: "Polished admin panel with user roles, CRUD modules, audit logs and analytics.",
    category: "Laravel",
    tags: ["Roles", "CRUD", "Laravel"],
    image: adminDashboard,
  },
  {
    id: 4,
    title: "Network Setup",
    description: "Designed and deployed office network: routers, managed switches and access points across floors.",
    category: "IT Systems",
    tags: ["Router", "Switch", "Access Point"],
    image: network,
  },
  {
    id: 5,
    title: "CCTV Installation",
    description: "Full-perimeter IP camera deployment with NVR, remote monitoring and storage planning.",
    category: "IT Systems",
    tags: ["Security", "Cameras"],
    image: cctv,
  },
  {
    id: 6,
    title: "Biotime Setup",
    description: "Biometric attendance system rollout with device configuration and HR integration.",
    category: "IT Systems",
    tags: ["Attendance", "Device"],
    image: biotime,
  },
  {
    id: 7,
    title: "Logo Collection",
    description: "Selection of original logo marks across tech, retail and service brands.",
    category: "Branding",
    tags: ["Logo", "Identity"],
    image: logos,
  },
  {
    id: 8,
    title: "Brand Identity Project",
    description: "Complete identity system: typography, color, usage rules and stationery.",
    category: "Branding",
    tags: ["Typography", "Colors"],
    image: brand,
  },
  {
    id: 9,
    title: "Social Media Design",
    description: "Cohesive social campaign visuals optimized for engagement across platforms.",
    category: "Branding",
    tags: ["Visual Design"],
    image: social,
  },
  {
    id: 10,
    title: "Marketing Video",
    description: "Promotional motion piece blending typography, transitions and product highlights.",
    category: "Motion Design",
    tags: ["After Effects", "Promo"],
    image: marketingVideo,
  },
  {
    id: 11,
    title: "Training Video",
    description: "Animated explainer with kinetic typography for internal staff training.",
    category: "Motion Design",
    tags: ["Motion", "Editing"],
    image: trainingVideo,
  },
];
