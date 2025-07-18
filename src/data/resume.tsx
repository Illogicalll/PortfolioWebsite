import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Will Murphy",
  initials: "WM",
  url: "https://www.w-murphy.com",
  location: "London, UK",
  locationLink: "https://www.google.com/maps/place/london",
  description:
    "A Computing Science graduate with a burning passion for Software Engineering and Web Development.",
  summary:
    "I thrive on embracing challenges, seeking optimised solutions, and building intuitive and scalable software for the real world. I recently graduated with a first class degree and in the past I have [interned and had work experience at start-up tech companies](/#work). At the moment I am seeking full-time employment, as I am eager to continue to grow in this exciting industry!",
  avatarUrl: "/me.jpg",
  skills: [
    "React",
    "Next.js",
    "Typescript",
    "Java",
    "Python",
    "Flutter",
    "Dart",
    "Docker",
    "Svelte",
    "TailwindCSS",
    "Django",
    "MySQL",
    "C++",
    "Javascript",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Back to Top" }],
  contact: {
    email: "contact@w-murphy.com",
    tel: "+44 7938167984",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Illogicalll",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/will-murphy-34a280290/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Send Email",
        url: "mailto:contact@w-murphy.com",
        icon: Icons.email,

        navbar: true,
      },
      CV: {
        name: "See CV",
        url: "/Will-Murphy.pdf",
        icon: Icons.cv,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Glasgow University Software Service",
      href: "https://guss.org.uk/",
      badges: [],
      location: "Remote",
      title: "Software Engineer",
      logoUrl: "/guss.png",
      start: "Feb 2024",
      end: "Present",
      description:
        "Developing a large scale React and Django based platform concerning student wellbeing and university course contribution with a team of software engineers using agile methodology.",
    },
    {
      company: "Assured Insights",
      badges: [],
      href: "https://assuredinsights.com/",
      location: "Remote",
      title: "Software Engineer & Web Developer",
      logoUrl: "/assured.png",
      start: "Jul 2024",
      end: "Sep 2024",
      description:
        "Developed a suite of online tools and products centred around data insights that enable companies to reach high data maturity and optimise their business processes.",
    },
    {
      company: "AccessFintech",
      href: "https://www.accessfintech.com/",
      badges: [],
      location: "Glasgow, UK",
      title: "Summer Work Experience",
      logoUrl: "/accessfintech.jpg",
      start: "Sep 2023",
      end: "Sep 2023",
      description:
        "Acquired valuable insights into the structure of start-up business, emphasising the significance of teamwork, communication, and meticulousness within a dynamic and fast-paced work environment. Additionally, I deepened my comprehension of the financial sector and honed my professional skills.",
    },
    {
      company: "Other",
      href: "/Will-Murphy.pdf",
      badges: [],
      location: "Other",
      title: "Unrelated Work Experience",
      logoUrl: "/work.jpg",
      start: "2017",
      end: "2021",
      description:
        "I have also worked in hospitality and have managed my own freelance video editing business in the past. For more information, see my CV by clicking the image or in the navbar below.",
    },
  ],
  education: [
    {
      school: "University of Glasgow",
      href: "https://www.gla.ac.uk/",
      degree: "Computing Science BSc (Hons) First Class Degree",
      logoUrl: "/uofg.png",
      start: "2022",
      end: "2025",
    },
    {
      school: "Simon Langton Grammar School for Boys",
      href: "https://thelangton.org.uk/",
      degree: "A-Levels: A* A A, GCSEs: Average A* across all 11 courses",
      logoUrl: "/langton.png",
      start: "2015",
      end: "2022",
    },
  ],
  bigprojects: [
    {
      title: "AutoAssign",
      href: "https://github.com/Illogicalll/Automarker",
      dates: "Sep 2024 - March 2025",
      active: true,
      description:
        "An online coding assignment automated marking platform with a competitive element designed to help educators delivering computing science related courses.",
      technologies: [
        "Next.js",
        "Typescript",
        "React",
        "Supabase",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Illogicalll/Automarker",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Video Presentation",
          href: "https://www.youtube.com/watch?v=wZbMp503dlk",
          icon: <Icons.youtube className="size-3" />,
        }
      ],
      image: "/autoassign.png",
      imagemobile: "/autoassignmobile.png",
      video: "",
      videomobile: "",
    }
  ],
  projects: [
    {
      title: "solace",
      href: "https://github.com/Illogicalll/solace",
      dates: "Jul 2025",
      active: true,
      description:
        "A minimalist and advertisement-free solitaire game with practical features and statistics tracking.",
      technologies: [
        "Flutter",
        "Dart",
        "Xcode"
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Illogicalll/solace",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/autoassign2.png",
      video: "",
      videomobile: "",
    },
    {
      title: "911 Trackrats",
      href: "https://github.com/Illogicalll/911trackrats",
      dates: "Aug 2024 - Sep 2024",
      active: true,
      description:
        "An archive site for a group of Porsche 911 enthusiasts to document their track days.",
      technologies: [
        "Svelte",
        "Typescript",
        "SvelteKit",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Source",
          href: "https://github.com/Illogicalll/911trackrats",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/911.mp4",
      videomobile: "/911_mobile.mp4",
    },
    {
      title: "Beau Goodwin",
      href: "https://beaugoodwin.com/",
      dates: "May 2024 - Jun 2024",
      active: true,
      description:
        "A blog and personal portfolio for a music journalist client with live show and album review sections.",
      technologies: [
        "Svelte",
        "Typescript",
        "SvelteKit",
        "TailwindCSS",
        "Shadcn UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://beaugoodwin.com/",
          icon: <Icons.globe className="size-3" />,
        },
        ,
        {
          type: "Source",
          href: "https://github.com/Illogicalll/beaugoodwin",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/beaugoodwin.mp4",
      videomobile: "/beaugoodwin_mobile.mp4",
    },
    {
      title: "Solar System Simulation",
      href: "https://github.com/Illogicalll/Solar-System-Simulation",
      dates: "Nov 2021 - Feb 2022",
      active: true,
      description:
        "An educational tool designed for GCSE Physics students. Intended to supplement lessons about the solar system, introducing an interactive element and enhancing the learning experience.",
      technologies: ["Python"],
      links: [
        {
          type: "Video Demonstration",
          href: "https://www.youtube.com/watch?v=-30mXfeX0CA",
          icon: <Icons.youtube className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Illogicalll/Solar-System-Simulation",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/solarsystem.png",
      video: "",
      videomobile: "",
    },
  ],
} as const;
