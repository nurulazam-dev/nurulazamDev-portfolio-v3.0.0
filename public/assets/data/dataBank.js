import serviceImg2 from "../images/services/backend.png";
import serviceImg1 from "../images/services/frontend.png";
import serviceImg3 from "../images/services/full-stack.png";
import skillImg2 from "../images/skills/backend.png";
import skillImg1 from "../images/skills/frontend.png";
import skillImg3 from "../images/skills/tool.png";
import bootstrapImg from "../images/programming-logo/bootstrap.png";
import cssImg from "../images/programming-logo/css.png";
import daisyUIImg from "../images/programming-logo/daisyUI.png";
import expressImg from "../images/programming-logo/express.png";
import figmaImg from "../images/programming-logo/figma.png";
import firebaseImg from "../images/programming-logo/firebase.png";
import gitImg from "../images/programming-logo/git.png";
import githubImg from "../images/programming-logo/github.png";
import herokuImg from "../images/programming-logo/heroku.png";
import htmlImg from "../images/programming-logo/html.png";
import javascriptImg from "../images/programming-logo/javascript.png";
import mongodbImg from "../images/programming-logo/mongodb.png";
import mongooseImg from "../images/programming-logo/mongoose.png";
import netlifyImg from "../images/programming-logo/netlify.png";
import nextJSImg from "../images/programming-logo/next-js.png";
import nodeImg from "../images/programming-logo/node.png";
import reactDomImg from "../images/programming-logo/react-dom.png";
import reactImg from "../images/programming-logo/react.png";
import reduxImg from "../images/programming-logo/redux.png";
import renderImg from "../images/programming-logo/render.png";
import tailwindImg from "../images/programming-logo/tailwind.png";
import vercelImg from "../images/programming-logo/vercel.png";
import vsCodeImg from "../images/programming-logo/vs-code.png";

// Education_Data
export const educationData = [
  {
    id: "edu-1",
    org: "Programming Hero",
    time: "(Dec 2025 - April 2026)",
    title: "Next Level Web Development",
    desc: "Completed the Next Level Web Development (Level-2) course from Programming Hero. Gained expertise in TypeScript, Node.js, Express.js, Golang, Next.js, PostgreSQL, Prisma, Docker, Nginx, and AI.",
    rate: "Black Belt",
  },
  {
    id: "edu-2",
    org: "Programming Hero",
    time: "(Jan 2022 - June 2022)",
    title: "Web Development",
    desc: "Completed the Web Development (Level-1) course with Jhankar Mahbub at Programming Hero. Gained expertise in HTML, CSS, Bootstrap, Tailwind CSS, JavaScript (ES6), React, React Router, DaisyUI, Firebase, MongoDB, Node.js, and Express.js.",
    rate: "Black Belt",
  },
  {
    id: "edu-3",
    org: "National University",
    time: "(Batch 2020-21)",
    title: "Bachelor of Business Studies",
    desc: "Completed a Bachelor of Business Studies (B.B.S.) degree at Raozan University College under the National University.",
    rate: "Second Class",
  },
  {
    id: "edu-4",
    org: "Chittagong Board",
    time: "(2018 - 2020)",
    title: "Higher Secondary Certificate",
    desc: "Completed the Higher Secondary Certificate (HSC) in Business Studies from Gohira College under the Chittagong Board.",
    rate: "4.00/5",
  },
];

// Experience_Data
export const experienceData = [
  {
    id: 1,
    company: "The Editing Factory (India)",
    period: "(Oct 2022 - Dec 2022)",
    role: "Frontend React Developer (Intern)",
    desc: "Completed a remote internship at The Editing Factory (Hyderabad, Telangana, India) as a Frontend React.js Developer from October 2022 to December 2022. Contributed to a travel agency project, focusing on frontend development.",
  },
  {
    id: 2,
    company: "S.Y.A Electronics (Head Office) - Walton",
    period: "(Jun 2023 - Oct 2023)",
    role: "Assistant Manager",
    desc: "Worked at SYA Electronics' head office (Anderkilla, Chittagong) as an Assistant Manager from June 2023 to October 2023. SYA Electronics is a distributor of Walton in the Chittagong Zone.",
  },
  /*   {
    id: 3,
    company: "Mna24BD, MNA Web Programming",
    period: "(2018 - Present)",
    role: "Content Creator",
    desc: "Working as a content creator for the Mna24BD and MNA Web Programming YouTube channels. Mna24BD is an Islamic content channel, while MNA Web Programming focuses on web development and educational content.",
  }, */
  {
    id: 4,
    company: "Knowledge Teaching Home",
    period: "(2015 - 2020)",
    role: "Director & Teacher",
    desc: "Knowledge Teaching Home is a coaching center that provides education to students from class 6 to class 10 across various schools and madrasas.",
  },
];

// Skills_Data
export const skillsData = [
  {
    id: 1,
    title: "Frontend",
    image: skillImg1,
    skillsData: [
      { name: "HTML5" },
      { name: "CSS3" },
      { name: "React JS" },
      { name: "Next JS" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Bootstrap" },
      { name: "Daisy Ui" },
      { name: "JavaScript" },
      { name: "ES6" },
      { name: "ShadCN UI" },
      { name: "Framer Motion" },
      { name: "React Router" },
      { name: "Redux" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    image: skillImg2,
    skillsData: [
      { name: "Node JS" },
      { name: "Express JS" },
      { name: "Prisma" },
      { name: "PostgreSQL" },
      { name: "Better-Auth" },
      { name: "MongoDB" },
      { name: "Mongoose" },
      { name: "JWT" },
      { name: "Zod" },
    ],
  },
  {
    id: 3,
    title: "Tools",
    image: skillImg3,
    skillsData: [
      { name: "Git" },
      { name: "VS Code" },
      { name: "Github" },
      { name: "Netlify" },
      { name: "Heroku" },
      { name: "Figma" },
      { name: "Firebase" },
      { name: "Render" },
      { name: "Vercel" },
      { name: "Postman" },
      { name: "Antigravity" },
      { name: "Cursor" },
    ],
  },
];

// service_Data
export const serviceData = [
  {
    id: "service001",
    image: serviceImg1,
    title: "Frontend",
    desc: "Pixel-perfect UI with React, Next.js, Tailwind, and animations for interactive user experiences.",
    // desc: "React, ES6, React Router Dom, CSS3, Tailwind CSS",
  },
  {
    id: "service002",
    image: serviceImg2,
    title: "Backend",
    desc: "Powerful APIs & databases using Node.js, Express, MongoDB for secure, scalable apps.",
    // desc: "Express.JS, MongoDB, NodeJS, JWT, Mongoose",
  },
  {
    id: "service003",
    image: serviceImg3,
    title: "Full Stack",
    // desc: "Full-Stack MERN Web",
    desc: "Seamless end-to-end applications from UI to server logic and data integration.",
  },
];

// Testimonials_Data
export const testimonialsData = [
  {
    name: "Sarah Lee",
    role: "Product Manager, TechNova",
    image: serviceImg1,
    quote:
      "Working with Nurul Azam was a game-changer. The website exceeded our expectations in both design and performance. Highly recommended!",
  },
  {
    name: "James Carter",
    role: "Founder, StartupX",
    image: serviceImg2,
    quote:
      "Professional, creative, and always on time. The solutions delivered helped us scale our business rapidly.",
  },
  {
    name: "Alicia Gomez",
    role: "Lead Designer, Creatify",
    image: serviceImg3,
    quote:
      "Nurul’s attention to detail and passion for quality shine through in every project. A pleasure to collaborate with!",
  },
  {
    name: "Michael Tan",
    role: "CTO, FinEdge",
    image: serviceImg1,
    quote:
      "The best developer I’ve worked with. Communication was clear, and the results were outstanding.",
  },
  {
    name: "Emily Chen",
    role: "CEO, Brandify",
    image: serviceImg2,
    quote:
      "Nurul brought our vision to life with creativity and technical excellence. Highly recommended!",
  },
];

// InfiniteScroll_Data
export const scrollData = [
  {
    title: "HTML5",
    image: htmlImg,
    color: "#ea580c",
    progressValue: 95,
  },
  {
    title: "CSS3",
    image: cssImg,
    color: "#1d4ed8",
    progressValue: 90,
  },
  {
    title: "Bootstrap",
    image: bootstrapImg,
    color: "#6d28d9",
    progressValue: 80,
  },
  {
    title: "Tailwind CSS",
    image: tailwindImg,
    color: "teal-500",
    progressValue: 95,
  },
  {
    title: "DaisyUI",
    image: daisyUIImg,
    color: "emerald-500",
    progressValue: 90,
  },
  {
    title: "Javascript",
    image: javascriptImg,
    color: "#eab308",
    progressValue: 70,
  },
  {
    title: "React JS",
    image: reactImg,
    color: "#22d3ee",
    progressValue: 90,
  },
  {
    title: "Next JS",
    image: nextJSImg,
    color: "stone-950",
    progressValue: 20,
  },
  {
    title: "React Router",
    image: reactDomImg,
    color: "red-700",
    progressValue: 80,
  },
  {
    title: "Redux",
    image: reduxImg,
    color: "violet-800",
    progressValue: 30,
  },
  {
    title: "Express JS",
    image: expressImg,
    color: "gray-950",
    progressValue: 70,
  },
  {
    title: "Node JS",
    image: nodeImg,
    color: "green-600",
    progressValue: 85,
  },
  {
    title: "Mongodb",
    image: mongodbImg,
    color: "#15803d",
    progressValue: 90,
  },
  {
    title: "Mongoose",
    image: mongooseImg,
    color: "#65a30d",
    progressValue: 80,
  },
  {
    title: "Git",
    image: gitImg,
    color: "#c2410c",
    progressValue: 80,
  },
  {
    title: "VS Code",
    image: vsCodeImg,
    color: "#1d4ed8",
    progressValue: 95,
  },
  {
    title: "GitHub",
    image: githubImg,
    color: "gray-950",
    progressValue: 92,
  },
  {
    title: "Firebase",
    image: firebaseImg,
    color: "orange-500",
    progressValue: 83,
  },
  {
    title: "Figma",
    image: figmaImg,
    color: "orange-600",
    progressValue: 40,
  },
  {
    title: "Netlify",
    image: netlifyImg,
    color: "cyan-400",
    progressValue: 90,
  },
  {
    title: "Heroku",
    image: herokuImg,
    color: "violet-800",
    progressValue: 70,
  },
  {
    title: "Render",
    image: renderImg,
    color: "teal-400",
    progressValue: 50,
  },
  {
    title: "Vercel",
    image: vercelImg,
    color: "gray-950",
    progressValue: 50,
  },
];
