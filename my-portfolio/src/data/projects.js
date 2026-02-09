import projectimg1 from "../assets/communi-skill.png"; 
import projectimg2 from "../assets/food-point.png";
import projectimg3 from "../assets/link-health.png";

export const projects = [
  {
    id: 1,
    title: "Communi-Skill",
    description: "A next-gen skill-sharing ecosystem featuring a high-performance MERN architecture and immersive motion design.",
    className: "md:col-span-2 md:row-span-2", 
    image: projectimg1, 
    link: "https://communi-skill.vercel.app/",
    color: "bg-pink-500/10"
  },
  {
    id: 2,
    title: "Food Point",
    description: "A streamlined, role-based food ordering and management platform",
    className: "md:col-span-1 md:row-span-1",
    image: projectimg2, 
    link: "https://food-point-frontend.vercel.app/",
    color: "bg-purple-500/10"
  },
  {
    id: 3,
    title: "Link Health",
    description: "Connecting patients and doctors through seamless appointment booking.",
    className: "md:col-span-1 md:row-span-2", 
    image: projectimg3, 
    color: "bg-emerald-500/10"
  }
];