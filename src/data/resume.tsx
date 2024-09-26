import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sree Ragu Nandha",
  initials: "T",
  url: "https://portfoilo.sree-ragu.in",
  location: "San Francisco, CA",
  locationLink: "https://www.google.com/maps/place/sanfrancisco",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Twitter.",
  summary:
    `At the moment, I am pursuing a degree in Computer Science while interning at an AI startup. My passion lies in coding and working on various projects, continuously sharpening my technical skills.
With a strong foundation in both academic and practical experiences, I aim to further my career by building and scaling innovative software solutions.

`,
  avatarUrl: "/me.png",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Python",
    "Java",
    "C++",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "ragunanthan8888@gmail.com",
    tel: "+919360037079",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/ragunandhant",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sree-ragu-nandha-t-07a11b242/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Akaike Technologies",
      href: "https://www.akaike.ai/",
      badges: [],
      location: "Bengluru, India",
      title: "Data Science  Intern",
      logoUrl: "/akaike.svg",
      start: "June 2024",
      end: "Ongoing",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
    },

  ],
  education: [
    {
      school: "Sri Eshwar College of Engineering",
      href: "https://sece.ac.in/",
      degree: "B.E  Computer Science and Engineering",
      logoUrl: "/sece.jpeg",
      start: "2021",
      end: "2025",
    },
    {
      school: "Vidya Nethrra Matriculation Higher Secondary School",
      href: "https://uwaterloo.ca",
      degree: "Higher Secondary School",
      logoUrl: "/waterloo.png",
      start: "2016",
      end: "2021",
    }
  ],
  projects: [
    {
      title: "Resource Management System",
      href: "https://www.mithreshvar.tech/",
      dates: "Jan 2024 - May 2024",
      active: true,
      description:
        "UniOps is a resource management system designed for college environments. It allows users to request resources, such as equipment or facilities, and routes these requests through a hierarchical approval system involving various college personnel. This streamlined process ensures efficient resource allocation and approval, improving operational workflow within educational institutions",
      technologies: [
        "Next.js",
        "Typescript",
        "MongoDB",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.mithreshvar.tech/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/mithreshvar/uniops",
          icon: <Icons.github className="size-3" />,
        }
      ],
      image: "",
      video:
        "",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
   
   
  ],
  hackathons: [
    {
      title: "Smart India Hackathon",
      dates: "May 12th - 14th, 2022",
      location: "Tamil Nadu, India",
      description: "Developed a solution for ayurvedic food recommendation system",
      image:
        "",
      links: [],
    },
  ],
} as const;
