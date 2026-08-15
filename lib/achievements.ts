export type Achievement = {
  badge: string;
  title: string;
  description: string;
  thumbnail?: string;
  media?: { type: "image" | "video"; url: string }[];
  detailedDescription?: string;
  link?: string;
};

export const achievements: Achievement[] = [
  {
    badge: "Oracle",
    title: "Agentic AI Certified Foundations Associate",
    description:
      "Certified in agentic AI concepts, design patterns and tooling for building autonomous intelligent systems.",
    media: [
      { type: "image", url: "/Certifications-media/Oracle Agentic AI Certified Foundations Associate.png" }
    ],
    thumbnail: "/Certifications-media/Oracle Agentic AI Certified Foundations Associate.png",
  },
  {
    badge: "Oracle",
    title: "Cloud Infrastructure AI Foundations",
    description: "Foundations in Oracle Cloud AI services and infrastructure for deploying AI workloads.",
    media:[{
      type:"image",
      url:"/Certifications-media/Oracle Cloud Infrastructure Certified AI Foundations Associate.png"
    }],
    thumbnail:"/Certifications-media/Oracle Cloud Infrastructure Certified AI Foundations Associate.png",
  },
];
