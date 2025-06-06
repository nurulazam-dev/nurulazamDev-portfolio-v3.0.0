import serviceImg2 from "../images/services/backend.png";
import serviceImg1 from "../images/services/frontend.png";
import serviceImg3 from "../images/services/full-stack.png";
import skillImg2 from "../images/skills/backend.png";
import skillImg1 from "../images/skills/frontend.png";
import skillImg3 from "../images/skills/tool.png";
import project1Img from "../images/projects/1-Projects_Thumbnail/1-mna-computer-manufacture.png";
import project3Img from "../images/projects/1-Projects_Thumbnail/3-mna-events-ltd.png";
import project4Img from "../images/projects/1-Projects_Thumbnail/4-wind-travels.png";
import project5Img from "../images/projects/1-Projects_Thumbnail/5-mna-munna-photographer.png";
import project6Img from "../images/projects/1-Projects_Thumbnail/6-mna-bike-bazar.png";
import project7Img from "../images/projects/1-Projects_Thumbnail/7-panda-eCommerce.png";
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

// Projects/Portfolio_Data
export const projectsData = [
  {
    id: "project01",
    category: "fullStack",
    projectType: "E-Commerce",
    projectColor: "bg-orange-700",
    title: "MNA Computer Manufacturer",
    subTitle: "A Computer Manufacturer parts selling website...",
    des1: "A robust full-stack web application where both users and admins can securely log in using Google, GitHub, or email/password authentication. The platform ensures a seamless experience for managing computer parts and orders.",
    des2: "Users can easily place orders and submit reviews for products, while admins have advanced controls to add, update, or remove products and manage user roles. The intuitive dashboard streamlines all management tasks.",
    des3: "Built with the MERN stack, this project features real-time updates, responsive design, and strong security practices, making it a scalable solution for modern e-commerce needs.",
    technologies: [
      "React.JS",
      "React Router Dom",
      "Tailwind CSS",
      "DaisyUI",
      "React firebase hooks",
      "React hook form",
      "React Toastify",
      "Google firebase",
      "Express JS",
      "MongoDB",
    ],
    imageLink: project1Img,
    youtubeLink: "https://youtu.be/RZHDuzQHksM",
    liveProject: "https://mna-computer-manufacturer.web.app",
    clientCode:
      "https://github.com/nurulazam-dev/mna-computer-manufacturer-client",
    serverCode:
      "https://github.com/nurulazam-dev/mna-computer-manufacturer-server",
  },
  {
    id: "project02",
    category: "fullStack",
    projectType: "Stock Management",
    projectColor: "bg-blue-700",
    title: "MNA Cars Warehouse",
    subTitle: "A cars stocking warehouse website...",
    des1: "A comprehensive full-stack warehouse management system designed for efficient inventory tracking and control. The application features multiple routes for easy navigation, including Home, Blogs, Manage Item, Add Item, and About Us.",
    des2: "Registered users can manage and add inventory items, while admins have the ability to oversee all stock operations. The system supports secure authentication and provides a user-friendly interface for all inventory actions.",
    des3: "With real-time data updates, responsive layouts, and robust backend integration, this project streamlines warehouse operations and enhances productivity for businesses of any size.",
    technologies: [
      "React.JS",
      "React Router Dom",
      "Bootstrap",
      "React firebase hooks",
      "React hook form",
      "React font-awesome",
      "React Recharts",
      "Google firebase",
      "Express JS",
      "MongoDB",
    ],
    imageLink: "https://i.ibb.co/r5VcR0s/warehouse.jpg",
    youtubeLink: "https://youtu.be/RZHDuzQHksM",
    liveProject: "https://mna-cars-warehouse.web.app/",
    clientCode: "https://github.com/nurulazam-dev/mna-cars-warehouse-client",
    serverCode: "https://github.com/nurulazam-dev/mna-cars-warehouse-server",
  },
  {
    id: "project03",
    category: "frontend",
    projectType: "Event Management",
    projectColor: "bg-green-700",
    title: "MNA Events Ltd",
    subTitle: "An Event Management service provider website...",
    des1: "A modern frontend web application for event management companies, featuring a visually appealing and interactive user interface.",
    des2: "The site includes sections such as sliders, package pricing, FAQs, event planner tools, and detailed service listings, all designed for optimal user engagement.",
    des3: "Built with clean HTML5 and CSS3, this project ensures fast load times, mobile responsiveness, and a delightful browsing experience for potential clients.",
    technologies: ["HTML5", "CSS3"],
    imageLink: project3Img,
    youtubeLink: "",
    liveProject: "https://mna-event-ltd.netlify.app/",
    clientCode: "https://github.com/nurulazam-dev/mna-event-ltd",
  },
  {
    id: "project04",
    category: "frontend",
    projectType: "Travel Agency",
    projectColor: "bg-sky-700",
    title: "Wind Travels",
    subTitle: "A Travel Agency website...",
    des1: "A responsive React.js travel agency website designed to inspire and inform travelers with beautiful visuals and intuitive navigation.",
    des2: "Features multiple routes such as Home, Blogs, Premium, and About Us, providing comprehensive information and seamless user journeys.",
    des3: "The site leverages Tailwind CSS and DaisyUI for a modern look and feel, ensuring accessibility and a great experience on all devices.",
    technologies: ["React.JS", "React Router Dom", "Tailwind CSS", "DaisyUI"],
    imageLink: project4Img,
    youtubeLink: "",
    liveProject: "https://wind-travels-agency.netlify.app/",
    clientCode: "https://github.com/nurulazam-dev/wind-travel-agency",
  },

  {
    id: "project05",
    category: "frontend",
    projectType: "Event Management",
    projectColor: "bg-green-700",
    title: "MNA Munna Photographer",
    subTitle: "A service provider website...",
    des1: "A professional portfolio and booking platform for photographers, built with a focus on user authentication and secure access.",
    des2: "Supports multiple sign-in methods including email/password, Google, and GitHub, making it easy for clients to register and book services.",
    des3: "The site is optimized for performance and usability, with a clean Bootstrap-based design and real-time notifications using React Toastify.",
    technologies: [
      "React.JS",
      "React Router Dom",
      "Bootstrap",
      "React firebase hooks",
      "React font-awesome",
      "Google firebase",
      "React Toastify",
    ],
    imageLink: project5Img,
    youtubeLink: "",
    liveProject: "https://mna-munna-photographer.web.app/",
    clientCode: "https://github.com/nurulazam-dev/mna-munna-photographer",
  },
  {
    id: "project06",
    category: "frontend",
    projectType: "E-Commerce",
    projectColor: "bg-violet-700",
    title: "MNA Bike Bazar",
    subTitle: "A Bike selling website...",
    des1: "A dynamic and visually engaging frontend project for showcasing and selling bikes online, built with React.js.",
    des2: "Features dynamic product cards that fetch and display data in real-time, providing users with up-to-date information and a smooth browsing experience.",
    des3: "The design is fully responsive and optimized for all devices, ensuring accessibility and ease of use for every visitor.",
    technologies: ["React.JS", "CSS3"],
    imageLink: project6Img,
    youtubeLink: "",
    liveProject: "https://mna-bike-bazar.netlify.app/",
    clientCode: "https://github.com/nurulazam-dev/mna-bike-bazar",
  },
  {
    id: "project07",
    category: "frontend",
    projectType: "E-Commerce",
    projectColor: "bg-violet-700",
    title: "Panda E-Commerce",
    subTitle: "An E-Commerce products selling website...",
    des1: "A clean and modern e-commerce landing page designed to attract and convert visitors using Bootstrap and CSS3.",
    des2: "The site features a visually appealing layout, intuitive navigation, and responsive design for optimal performance on any device.",
    des3: "Perfect for showcasing products and driving sales, this project demonstrates strong frontend development and UI/UX skills.",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    imageLink: project7Img,
    youtubeLink: "",
    liveProject: "https://panda-ecommerce-landing-page.netlify.app/",
    clientCode: "https://github.com/nurulazam-dev/panda-commerce-bootstrap",
  },
  {
    id: "project08",
    category: "backend",
    title: "Panda E-Commerce",
    projectColor: "bg-violet-600",
    youtubeLink: "",
    imageLink: "https://i.ibb.co/VMqhqjn/photographer.jpg",
    des1: "A backend-focused project demonstrating advanced server-side logic and API development.",
    des2: "Built with modern backend technologies to ensure scalability, security, and high performance.",
    des3: "Ideal for powering complex web applications and integrating with various frontend solutions.",
  },
  {
    id: "project09",
    category: "backend",
    title: "Panda E-Commerce",
    projectColor: "bg-violet-600",
    youtubeLink: "",
    imageLink: "https://i.ibb.co/VMqhqjn/photographer.jpg",
    des1: "A robust backend project designed for reliability and efficient data management.",
    des2: "Implements secure authentication, RESTful APIs, and optimized database interactions.",
    des3: "Provides a solid foundation for scalable and maintainable web applications.",
  },
];

// Education_Data
export const educationData = [
  {
    id: 1,
    org: "Programming Hero",
    time: "(Jan 2022 - June 2022)",
    title: "Web Development",
    desc: "Complete the Web Development Course with Jhankar Mahabub. Expert: HTML, CSS, Bootstrap, Tailwind CSS, JavaScript, ES6, React, React Router, DaisyUI, Google Firebase, MongoDB, Node.js, Express.js.",
    rate: "Black Base",
  },
  {
    id: 2,
    org: "National University",
    time: "(2000 - Continue)",
    title: "Bachelor of Business Studies",
    desc: "I am a student of Raozan University College under the National University. I plan to pursue a Bachelor of Business Studies (B.B.S.) Degree.",
    rate: "Continue",
  },
  {
    id: 3,
    org: "Chittagong Board ",
    time: "(2018 - 2020)",
    title: "Higher Secondary Certificate",
    desc: "I completed a Higher Secondary Certificate (HSC) in the Department of Business Studies at Gohira College, which is under the Chittagong board.",
    rate: "4.00/5 ",
  },
];

// Experience_Data
export const experienceData = [
  {
    id: 1,
    company: "The Editing Factory (India)",
    period: "(Oct 2022 - Dec 2022)",
    role: "Frontend React Developer (Intern)",
    desc: "I am Internship on The_Editing_Factory (Hyderabad, Telangana, India) remotely as a Frontend React.js Developer from October 2022 to December 2022. I'm working on a Travel Agency project.",
  },
  {
    id: 2,
    company: "S.Y.A Electronics - Walton (Head Office)",
    period: "(Jun 2023 - Oct 2023)",
    role: "Assistant Manager",
    desc: "I am working at SYA Electronics head office (Anderkilla, Chittagong) as an Assistant Manager from June 2023 to October 2023. SYA Electronics is a distributor of Walton in Chittagong Zone.",
  },
  {
    id: 3,
    company: "Mna24BD, MNA Web Programming, Tech Tuber Boss",
    period: "(2018 - Present)",
    role: "Content Creator",
    desc: "I am working on Mna24BD, MNA Web Programming, and Tech Tuber Boss Youtube Channel as a content creator. Mna24Bd is an Islamic channel, MNA Web Programming is a web programming channel and Tech Tuber Boss is a tech and educational channel.",
  },
  {
    id: 4,
    company: "Knowledge Teaching Home",
    period: "(2015 - 2020)",
    role: "Director & Teacher",
    desc: "Knowledge Teaching Home is a Coaching center. Which provides tech to many Schools and Madrasha's students from class Six (06) to class Ten (10).",
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
      { name: "Bootstrap" },
      { name: "Tailwind CSS" },
      { name: "Daisy Ui" },
      { name: "JavaScript" },
      { name: "ES6" },
      { name: "React JS" },
      { name: "React Router" },
      { name: "Redux" },
    ],
  },
  {
    id: 2,
    title: "Backend",
    image: skillImg2,
    skillsData: [
      { name: "Express JS" },
      { name: "MongoDB" },
      { name: "Node JS" },
      { name: "Mongoose" },
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
