import emoji from "react-easy-emoji";
import {
  EducationType,
  ExperienceType,
  FeedbackType,
  ProjectType,
  SkillsSectionType,
  SkillBarsType,
  SEODataType,
  SocialLinksType,
  GreetingsType,
} from "./types/sections";


export const greetings: GreetingsType = {
  name: "Rifky Rizkita Gandawidura",
  title: "Hi all, I'm Rifky",
  description:
    "I'm a passionate Full Stack web developer with experience developing Full Stack web applications with Express.js, Go, React.js, and MySQL. I am strongly interested in learning new technologies and implementing them in my projects. I'm a self-motivated and hardworking individual who is always ready to learn new things and work in a team. I am also involved in data analysis using Python.",
  resumeLink: "https://drive.google.com/file/d/1C-6wslJ6rB4XW2S3plajqHjQUtSjT1hK/view?usp=sharing",
};

export const openSource = {
  githubUserName: "rifkyrizkita",
};

export const contact = {};

export const socialLinks: SocialLinksType = {
  email: "mailto:rifky.rizkita.g@gmail.com",
  linkedin: "http://www.linkedin.com/in/rifky-rizkita-gandawidura-b69b1929a",
  github: "https://github.com/rifkyrizkita",
  // instagram: "https://www.instagram.com/__hanzla100",
  // facebook: 'https://www.facebook.com/1hanzla100',
  // twitter: 'https://twitter.com/1hanzla100',
};

export const skillsSection: SkillsSectionType = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  data: [
    {
      title: "Full Stack Development",
      lottieAnimationFile: "/lottie/skills/fullstack.json", // Path of Lottie Animation JSON File
      skills: [
        emoji("⚡ Building responsive Single-Page-Apps (SPA) in React.js"),
        emoji("⚡ Building responsive static websites using Next.js"),
        emoji("⚡ Building RESTful APIs in Express.js Framework"),
        emoji("⚡ Building backend services with Golang"),
        
      ],
      softwareSkills: [
        {
          skillName: "Python",
          iconifyTag: "logos:python",
        },
        {
          skillName: "JavaScript",
          iconifyTag: "logos:javascript",
        },
        {
          skillName: "Reactjs",
          iconifyTag: "vscode-icons:file-type-reactjs",
        },
        {
          skillName: "Github",
          iconifyTag: "akar-icons:github-fill",
        },
        {
          skillName: "Docker",
          iconifyTag: "logos:docker-icon",
        },
        {
          skillName: "Nodejs",
          iconifyTag: "logos:nodejs-icon",
        },
        {
          skillName: "Expressjs",
          iconifyTag: "logos:express",
        },
        {
          skillName: "MySQL",
          iconifyTag: "logos:mysql",
        },
        {
          skillName: "Golang",
          iconifyTag: "logos:go",
        },
      ],
    },
  ],
};

export const SkillBars: SkillBarsType[] = [
  {
    Stack: "Frontend/Design", //Insert stack or technology you have experience in
    progressPercentage: "85", //Insert relative proficiency in percentage
  },
  {
    Stack: "Backend",
    progressPercentage: "90",
  },
  {
    Stack: "Programming",
    progressPercentage: "95",
  },
];

export const educationInfo: EducationType[] = [
  {
    schoolName: "University of Central Punjab",
    subHeader: "Bachelor of Science in Computer Science",
    duration: "September 2017 - April 2020",
    desc: "",
    grade: "Grade A",
    descBullets: [], // Array of Strings
  },
];

export const experience: ExperienceType[] = [
  {
    role: "Django Developer",
    company: "Meganos Software",
    companyLogo: "/img/icons/common/meganos.png",
    date: "Aug 2022 - Present",
    desc: "I crafted backends for diverse web apps, APIs, and WebSockets in e-commerce, podcasts, and property management. Managed server upkeep, deployments on Linux, Heroku, and AWS S3. Implemented PyTest for automated unit and integration testing, slashing 4 hours of manual testing each sprint, fortifying a dependable and flawless code foundation.",
  },
  {
    role: "Full Stack Developer",
    company: "Duseca Software",
    companyLogo: "/img/icons/common/duseca_software_logo.jpeg",
    date: "Jan 2022 - Sept 2023",
    desc: "Crafted robust mobile application backends employing Django, Python, and REST APIs. Leveraged Django REST Framework, PostgreSQL, AWS, Firebase, Stripe, and WebSocket for efficient development. Collaborated across teams to surpass client expectations. Designed intuitive UIs, empowering clients to effortlessly manage their applications with a visually captivating interface.",
    // descBullets: [
    // 	"Lorem ipsum dolor sit amet, consdfgectetur adipiscing elit",
    // 	"Lorem ipsum dolor sit amet, consectetur adipiscing elit",
    // ],
  },
  {
    role: "Full Stack Developer",
    company: "ZRTechnologies",
    companyLogo: "/img/icons/common/zrtech.jpeg",
    date: "Aug 2022 - Jun 2023",
    desc: "Crafting diverse web applications, I've elevated functionality and user engagement. Spearheaded Visual Portfolio, leveraging AI for captivating presentations from parsed text. Proficiently set up and optimized applications on Linux servers, guaranteeing smooth scalability and top-notch performance for seamless user experiences.",
  },
  {
    role: "Backend Developer",
    company: "Bleed-AI",
    companyLogo: "/img/icons/common/bleedAI.jpg",
    date: "Sept 2021 - Oct 2021",
    desc: "As a Django developer at Bleed AI, I integrated a computer vision AI model to process YouTube URLs on a website. I used Django Channels and Websockets to show real-time processing and implemented threading to run multiple instances of the AI model. I also used jQuery for UI rendering and deployed the website on a Heroku server.",
  },
];

export const projects: ProjectType[] = [
  {
    name: "Alphamart",
    desc: "Contributed to AlphaMart, an e-commerce site, handling both frontend and backend development. Implemented features like product listings, cart functionality, and user authentication using React.js and Express.js. Collaborated with the team to ensure smooth and efficient development, resulting in a successful launch of the e-commerce site.",
    github: "https://github.com/purwadhikafullstack/JCWD010801",
    link: "https://jcwd010801.purwadhikabootcamp.com/",
  },
  {
    name: "Dukun IT",
    desc: "I am currently working with my team on Dukun IT, a platform designed to offer comprehensive IT solutions and support. It provides tools and resources for IT professionals, including troubleshooting guides and interactive features.",
    link: "https://dukun.tech/",
  },
  {
    name: "Personal Blog",
    desc: "I independently developed the backend of a personal blog project using Golang with the Fiber framework. This demonstrates my expertise in leveraging Golang and Fiber for efficient server-side development, showcasing my ability to create a robust backend infrastructure for web applications.",
    github: "https://github.com/rifkyrizkita/golang_project_1",
  },
  {
    name: "Attendance and Salary Management App",
    desc: "Built a comprehensive system for tracking employee attendance and automating salary calculations for employees. Utilized React.js and Node.js to create a secure and intuitive app, streamlining attendance tracking and payroll processes.",
    github: "https://github.com/rifkyrizkita/frontend_rifky/",
  },
];

export const feedbacks: FeedbackType[] = [
  {
    name: "Syed Jamal",
    role: "Frontend Developer at Meganos Software",
    feedback:
      "You were a wonderful addition to our team, alhumdulillah. I'm quite impressed with your abilities and professional practices. You approach problems from a unique perspective and always ask the right question. Finding a good teammate like Hanzla is extremely difficult. He has contributed to the growth of our organization and continues to do so. May Allah bless you with everything you desire.",
  },
  {
    name: "Wajahat Malek",
    role: "CEO at Duseca Software",
    feedback:
      "Hanzla has a deep understanding of web development technologies and is adept at using them to build scalable, robust, and secure web applications. He has worked on various projects, ranging from small-scale to large-scale, and has shown his ability to work collaboratively with others while maintaining a high level of productivity and quality. Hanzla is a pleasure to work with, and I have no doubt that he will be an asset to any team or organization. I highly recommend Hanzla for any Full Stack Django, React.js, or Blockchain development projects, and I wish him all the best in his future endeavors.",
  },
  {
    name: "Zaid Zaffar",
    role: "CEO at ZR Technologies",
    feedback:
      "Very skilled at what he does and has an in depth knowledge of Django and he's always ready to handle any challenges thrown at him. He's been a valuable member of my team and i look forward to working with him in the years to come",
  },
];

// See object prototype on /types/section.ts page
export const seoData: SEODataType = {
  title: "Rifky",
  description: greetings.description,
  author: "Rifky",
  image: "https://avatars.githubusercontent.com/u/59178380?v=4",
  url: "https://developer-portfolio-1hanzla100.vercel.app",
  keywords: [
    "Hanzla",
    "Hanzla Tauqeer",
    "@1hanzla100",
    "1hanzla100",
    "Portfolio",
    "Hanzla Portfolio ",
    "Hanzla Tauqeer Portfolio",
  ],
};
