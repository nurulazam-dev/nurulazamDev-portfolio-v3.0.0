import blogImg3 from "../images/Blogs_banner/different_web_&_software_developer.jpg";
import blogImg2 from "../images/Blogs_banner/dimand_web_development.jpeg";
import blogImg1 from "../images/Blogs_banner/learn_react.jpeg";
import blogImg4 from "../images/Blogs_banner/mobile_app_vs_web_dev.jpeg";
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
    des1: "This is a  full-stack project/website. Users and Admin can log in website using Google, Github, and email password.",
    des2: " User can add order and give a review on items/parts. An Admin can manage to add products and control users.",
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
    des1: "This is a  full-stack project. On this website, we use some different types of routes ( Home, Blogs, Manage item, Add item and About Us, etc).",
    des2: "A register or login user can see the Manage item and Add item option. Users can delete items from Manage Inventories Panel.",
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
    des1: "This is a frontend project/website.",
    des2: "On this website, we use some section like - Slider, Packages Price, Frequently Q/A, Event Planner Build, Services and Footer etc.",
    technologies: ["HTML5", "CSS3"],
    imageLink: project3Img,
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
    des1: "This is a frontend (React.js) project/website.",
    des2: "In this website, we use some routes like-- Home, Blogs, Premium, About US, etc.",
    technologies: ["React.JS", "React Router Dom", "Tailwind CSS", "DaisyUI"],
    imageLink: project4Img,
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
    des1: "This is a frontend project/website.",
    des2: "On this website, we use some authentication methods for SignIn like signing with email/password, Google, and Github.",
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
    des1: "This is a frontend (React.js) project/website.",
    des2: "In this website, we design dynamic cards fetching data",
    technologies: ["React.JS", "CSS3"],
    imageLink: project6Img,
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
    des1: "This is a frontend project/website.",
    des2: "In this website, we design landing home page using Bootstrap and CSS3.",
    technologies: ["HTML5", "CSS3", "Bootstrap"],
    imageLink: project7Img,
    liveProject: "https://panda-ecommerce-landing-page.netlify.app/",
    clientCode: "https://github.com/nurulazam-dev/panda-commerce-bootstrap",
  },
  {
    id: "project08",
    category: "backend",
    projectColor: "bg-violet-600",
    imageLink: "https://i.ibb.co/VMqhqjn/photographer.jpg",
  },
  {
    id: "project09",
    category: "backend",
    projectColor: "bg-violet-600",
    imageLink: "https://i.ibb.co/VMqhqjn/photographer.jpg",
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
    title: "Front-End",
    desc: "React, ES6, React Router Dom, CSS3, Tailwind CSS",
  },
  {
    id: "service002",
    image: serviceImg2,
    title: "Back-End",
    desc: "Express.JS, MongoDB, NodeJS, JWT, Mongoose",
  },
  {
    id: "service003",
    image: serviceImg3,
    title: "Full-Stack",
    desc: "Full-Stack MERN Web",
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
// blogs_data
export const blogData = [
  {
    id: "blog001",
    image: blogImg1,
    date: "1 July, 2022",
    title: "𝟲 𝗿𝗲𝗮𝘀𝗼𝗻𝘀 𝘄𝗵𝘆 𝘆𝗼𝘂 𝘀𝗵𝗼𝘂𝗹𝗱 𝗹𝗲𝗮𝗿𝗻 𝗥𝗲𝗮𝗰𝘁𝗝𝘀 𝗶𝗻 𝟮𝟬𝟮𝟯!",
    desc: "আপনি যদি আজকের দিনে Google সার্চ করেন যে Top '10 Prgramming Languages' তাহলে সবার উপরে যেটা থাকবে সেটা হচ্ছে Javascript। আর কোন একটা Language তখন ই বেশি পপুলার হয় যখন এর উপর বেইজ করে অনেক লাইব্রেরী, ফ্রেমওয়ার্ক বা রিসোর্স থাকে।  Javascript এর রয়েছে প্রচুর লাইব্রেরী এন্ড ফ্রেমওয়ার্ক যা একাধারে ফ্রন্ট-এন্ড এবং সার্ভার সাইডেও প্রচুর ব্যাবহার হচ্ছে। Javascript এর অনেক অনেক পপুলার লাইব্রেরী বা ফ্রেমওয়ার্ক এর একটি হচ্ছে ReactJs। React হচ্ছে একটি ফ্রি ওপেন সোর্স ফ্রন্ট-এন্ড জাভাস্ক্রিট লাইব্রেরী যার সাহায্যে আমরা খুব সহজেই একটি ইন্টারেক্টিভ ওয়েব এপ্লিকেশন তৈরি করে ফেলতে পারি। অনেক বড় বড় প্রতিষ্ঠিত কোম্পানি (Netflix, Airbnb, Instagram) এটি ব্যবহার করে থাকে। ওয়েব ডেভেলপমেন্ট সেক্টর এর জনপ্রিয়তার শীর্ষে থাকা এবং চাকরির বাজার ডমিনেট করে রাখা এই লাইব্রেরী টা আপনার কেন শেখা প্রয়োজন এমন ৬ টি কারন নিয়ে আজকের এই আলোচনা।",
    text_one:
      "1. Cross-Platform: রিএক্ট শিখলে আপনি cross-platform অর্থাৎ ReactJs ব্যাবহার করে আপনি ওয়েব এপ্লিকেশন যেমন বানাতে পারবেন তেমন এর Native ভার্সন React Native ব্যাবহার করে মোবাইল এপ্লিকেশন ও ডেভেলপ করতে পারবেন। কত্ত মজা তাই না! একটা Technology আপনি ভাল করে আয়ত্ত করেই দুটো প্লাটফরম এ কাজ করতে পারবেন।",
    text_two:
      "2. Components Bases Architecture: রিএক্ট হচ্ছে একটা কম্পোনেন্ট বেইজড লাইব্রেরী। আপনি আপনার পুরো এপ্লিকেশন কে ছোট ছোট টুকরো আকারে চিন্তা করে সেগুলো কে তৈরি করে ফেলবেন। পরে সেগুলো সব একসাথে করে একটি পূর্ণাঙ্গ জটিল Web Page বানিয়ে ফেলবেন। এতে করে আপনার অনেক টাইম বেচে যাবে এবং এপ্লিকেশন এর স্টেট গুলো নিজস্ব কম্পোনেন্ট এর মধ্যেই আলাদা করে হেন্ডেল করা যাবে।",
    text_three:
      "3.  Amazing Huge Community: ReactJs এর অনেক বড় একটা ডেডিকেটেড community রয়েছে। যারা এটাকে আপডেট এবং মেইন্টেইন করে থাকে প্রতিনিয়ত। এছাড়াও প্রছুর মানুষ এটা কে ব্যাবহার করার কারনে আপনি কোন সমস্যায় পরলে একটু গুছিয়ে গুগোল করতে পারলেই আপনি আপনার সমস্যার সল্যুশন পেয়ে যাবেন ৯৯% ক্ষেত্রেই।",
    text_four:
      "4. Big Companies Are Using This: React এর এত পপুলারিটি এর অন্যতম একটি কারন হচ্ছে এটি অনেক বড় বড় কোম্পানি ব্যাবহার করছে এবং Big Scale এ এর পারফর্মেন্স প্রমানিত। এটা মূলত ফেইসবুক এর তৈরি এবং ফেইসবুক এটা তাদের অন্যান্য অনেক এপ্লিকেশনেও ব্যাবহার করছে। এছাড়াও অনেক বড় বড় Tech Giants যেমন   Instagram, WhatsApp, Uber, Netflix, Tesla, DropBox, Twitter এটা ব্যাবহার করে আসছে। এইসব কম্পানির ফিউচার এর মত আপনার ফিউচার কে সমৃদ্ধ করতে চাইলে আপনি ও React শেখা শুরু করে দিন।",
    text_five:
      "5. React Embraces JavaScript: আপনি যদি জাভাস্ক্রিপ্ট জেনে থাকেন তাহলে আপনি খুব সহজেই React শিখে ফেলতে পারবেন। React এ আপনি Javascript এর সব পাওয়ারফুল ফিচার গুলো ব্যাবহার করতে পারবেন। React হচ্ছে flexible এবং back-end agnostic। মানে আপনি যে কোন backend stack এর সাথেই React ব্যাবহার করতে পারবেন।",
    text_six:
      "6. Fast Learning Curve: অন্যান্য লাইব্রেরি বা ফ্রেমওয়ার্ক এর তুলনায় React শেখা অনেকটা সহজ। এটা Angular এর মত তত টা heavyweight না। React এ কোন কিছু ডেভেলপ করার প্রসেস টা একটু আলাদা অন্যান্য ফ্রেমওয়ার্ক গুলোর তুলনায়। Javascript এর বেসিক নলেজ আছে এমন যে কেও কয়েকদিনের টিউশন এ খুব সুন্দর এপ্লিকেশন তৈরি করে ফেলতে পারবেন। © Programming Hero",
  },
  {
    id: "blog002",
    image: blogImg2,
    date: "2 July, 2022",
    title: "ওয়েব ডেভেলপমেন্ট-এর চাহিদা সামনে বাড়বে নাকি কমে যেতে পারে?",
    desc: "নেক্সট কয়েক বছরে কমবে না বরং বাড়বে বলে মনে হচ্ছে। আজ থেকে ৭-৮ বছর আগে ভাবছিলাম এপ ডেভেলপমেন্ট হয়তো ওয়েব ডেভেলপমেন্ট এর অনেক জব খেয়ে ফেলবে। তবে ২০২২-২৩ এসে মনে হচ্ছে-- মোবাইল ডেভেলপমেন্ট এর চাহিদা যে তালে বাড়ছে তার চাইতে বেশি তালে ওয়েব ডেভেলপমেন্ট এর জব বেড়েছে। এইটা আমি ধারণা করে বলতেছি। ",
    text_one:
      "এন্টারটেইনমেন্ট, কমিউনিকেশন এবং শর্টকাটে সারা পসিবল এমন অনেক কাজ আমরা মোবাইল দিয়ে বেশি করি। এইসব জায়গায় এপ এবং এপ ডেভেলপার এর চাহিদা অবশ্যই বেড়েছে। সামনে আরো বাড়বে। তবে রেগুলার অনেক অনেক কাজ মোবাইল দিয়ে এখনো যুতসইভাবে করা যায় না। তাই ওয়েবসাইট এর দরকার পড়ে।",
    text_two:
      "তবে প্রফেশনাল কাজগুলো কিন্তু ডেস্কটপ এবং ওয়েব সাইট দিয়েই করা হয় বেশি। এবং নেক্সট কয়েক বছর সেটা চেইঞ্জ হওয়ার চান্স দেখি না। যেমন ধরো, তুমি এসাইনমেন্ট করবে, প্রেজেটেনেশন বানাবে, ভিডিও এডিট করবে, প্রোডাক্ট ডিজাইন করবে, ওয়েব এর কোডিং করবে, মার্কেটিং ম্যানেজার মার্কেটিং প্ল্যান বানাবে। একাউন্টেন্ট হিসাব করবে। সাহিত্যিক সাহিত্য লিখবে। যারা ব্যাংকে জব করে ব্যাংকার কাজ করবে। অফিস আদালতে। সব জায়গায় ল্যাপটপ বা ডেস্কটপ ইউজ করে। আর তাই সেখানে ওয়েবসাইট এর বেশি দরকার পড়ে। ভালো পরিমাণ ফটো এডিট করলে। অনেক অনেক বড় রিপোর্ট বা অনেক বেশি ইমেইল লিখলে। তখন ওয়েবসাইট এর দরকার পড়ে। এতে ওয়েব ডেভেলপার এর দরকার আরো বেশি পড়বে। ",
    text_three:
      "ডেভেলপিং কান্ট্রিগুলোতে বিশেষ করে বাংলাদেশ, ভারত, দক্ষিণ আমেরিকা, আফ্রিকা এবং মিডল ইস্টের একটা বড় অংশ ধীরে ধীরে ইন্টারনেটের সাথে যুক্ত হচ্ছে। সেটা করতে গিয়ে অনেক অনেক জায়গায় ডিজিটালাইজেশন এর দরকার পড়ে। এবং ওয়েব এপ্লিকেশন এর দরকার হচ্ছে। যেমন আগে স্কুল বা ভার্সিটিগুলার ওয়েব সাইট থাকতো না। এখন দরকার হয়ে গেছে। সেগুলা কে বানাবে। সামনে সেগুলার চাহিদা আরো বাড়বে।  যদিও কিছু কিছু কাজ মোবাইল দিয়ে করার চেষ্টা করে অনেকেই। তবে প্রফেশনাল লেভেলের বেশিরভাগ কাজ মোবাইল দিয়ে করা পসিবল হয় না। তখন ওয়েবসাইট এবং ওয়েব ডেভেলপার এর দরকার আরো বেশি হবে।",
    text_four:
      "ধীরে ধীরে রিমোট জব বাংলাদেশ ঢুকতেছে। অল্প হলেও ঢুকতে শুরু করতেছে। বিশেষ করে যেসব জব রিমোটলি দূর থেকে করা সম্ভব। তাদের মধ্যে অন্যতম হচ্ছে ওয়েব ডেভেলপমেন্ট, প্রোগ্রামিং, ইত্যাদি। সো, সেজন্য সামনে বাংলাদেশের ওয়েব ডেভেলপারদের জন জব বাড়তে পারে।",
    text_five:
      "দেশে আইটি কোম্পানির সংখ্যা ধীরে ধীরে বাড়তেছে। যেমন ধরো এডটেক হচ্ছে সামনে আরো হবে। ডেলিভারি সার্ভিস। ই-কমার্স হচ্ছে এবং সামনে আরো হবে। এইগুলার জন্য ওয়েব ডেভেলপার এর ডিমান্ড নেক্সট কিছু বছর বাড়বে বলে ধারণা করা যায়।",
    text_six:
      "আরেকটা জিনিস-- ওয়েব এর টেকনোলোজি কিন্তু ক্রমশ এডভান্স হচ্ছে। আজ থেকে ওয়েবসাইট দিয়ে আমরা যেসব কাজ করতাম এখন আরো অনেক কমপ্লেক্স এবং পাওয়ারফুল কাজ ওয়েবসাইট এ করা হয়। এবং আজ থেকে পাঁচ বছর পরে নিশ্চিত আরো আরো অনেক বেশি এডভান্সড কাজ ওয়েবসাইট দিয়ে করা হবে। আগের বানানো সাইটগুলো পুরান বা ব্যবহারযোগ্য থাকবে না। সো, সেগুলা আপডেট করার জন্য হলেও আরো অনেক অনেক ওয়েব ডেভেলপার লাগবে। তারপর ১০-১৫-২০ বছর পরে কি হবে সেটা ধারণা করা ঠিক হবে না। কারণ এখনকার দিনে দুনিয়ার খুব দ্রুত চেইঞ্জ হতে থাকে। (এইগুলা আমার ব্যক্তিগত ধারণা। অন্যদের ডিফারেন্ট ধারণা হতেই পারে) © Jhankar Mahbub",
  },
  {
    id: "blog003",
    image: blogImg3,
    date: "3 July, 2022",
    title:
      "ওয়েব ডেভেলপমেন্ট এবং সফটওয়্যার ডেভেলপমেন্টের এর মধ্যে সম্পর্ক কি?",
    desc: "সফটওয়্যার ডেভেলপমেন্টে এবং ওয়েব ডেভেলপমেন্ট এর মধ্যে সম্পর্ক বোঝার আছে আমরা সফটওওয়্যার কি সেটা ছোট্ট করে বলি। সফটওয়্যার হল একধরনের নির্দেশাবলী, ডেটা বা প্রোগ্রামের একটি সেট যা কম্পিউটারের হার্ডওয়ারের সাথে কমিউনিকেট করে নির্দিষ্ট কাজ সম্পাদন করতে ব্যবহৃত হয়। আর এই যে নির্দেশাবলী, ডেটা বা প্রোগ্রামের একটি সেট তৈরির কাজ করে বলা হয় সফটওয়্যার ডেভেলপমেন্ট বলে।",
    text_one:
      "এই যে আমি এখন যে গুগল ডকে এই লেখাটা লিখছি এটি একটি সফটওয়্যার, তুমি যে মোবাইলে ফেসবুকে এই লেখাটা পড়ছ সেটাও এক ধরনের সফটওয়্যার। আমি যে ল্যাপটপে গুগল ডকে এই লেখাটা লিখছি একে বলে ওয়েব এপ্লিকেশন আর তুমি যে মোবাইলে লেখাটা পড়ছ একে বলা হয় মোবাইল এপ্লিকেশন। এর মাধ্যমে কি তুমি কিছু বুঝতে পারছ। আসলে সফটওয়্যার যখন একেক ডিভাইজে ভিন্ন ভিন্ন কাজে ব্যবহার করা হয় তখন এর কাজের ধরনের উপর নির্ভর করে নামও ভিন্ন হয়ে যাচ্ছে। তার মানে সফটওয়্যার ডেভেলমেন্ট ও ওয়েব ডেভেলপমেন্ট আলাদা কিছু না। সফটওয়্যার ডেভেলপমেন্টের একটা প্রকারভেদ হচ্ছে ওয়েব ডেভেলপমেন্ট । অর্থাৎ সফটওয়্যার ডেভেলপমেন্টের একটা অংশ হচ্ছে ওয়েব ডেভেলপমেন্ট। সেই অংশ হিসেবে আছে মোবাইল এপ ডেভেলপমেন্ট , ডেস্কটপ এপ ডেভেলপমেন্ট ও রয়েছে। সফটওয়্যার ডেভেলপমেন্টের প্রকারভেদগুলো হলো – (১) ওয়েব ডেভেলপমেন্ট, (২) মোবাইল এপ ডেভেলপমেন্ট, (৩) ডেস্কটপ এপ ডেভেলপমেন্ট, (৪) এমভেডেট প্রোগ্রামিং |",
    text_two:
      "(১) ওয়েব ডেভেলপমেন্টঃ যে সফটওয়্যারগুলো আমরা ব্রাউজারে রান করে থাকি সেগুলোকে ওয়েব এপ্লিকেশন বলা হয়ে থাকে। এই ওয়েব এপ্লিকেশনগুলোকে তৈরি করাকে ওয়েব ডেভেলপমেন্ট বলা হয়।",
    text_three:
      "(২) মোবাইল এপ ডেভেলপমেন্টঃ যে সফটওয়্যারগুলো মোবাইলে রান করে থাকে সেগুলোকে মোবাইল এপ্লিকেশন বলে। যেমনঃ ফেসবুক, জুম, ওয়াটস এপ, ম্যাসেঞ্জার। এই মোবাইল এপ্লিকেশন তৈরি করাকে মোবাইল এপ ডেভেলপমেন্ট বলে।",
    text_four:
      "(৩) ডেস্কটপ এপ ডেভেলপমেন্টঃ আমাদের ল্যাপটপ বা পিসিতে যে সফটওয়্যারগুলো ইন্সিটল করে থাকি সেগুলোকে ডেস্কটপ এপ বলে। যেমনঃ মাইক্রোফট অফিস, বিভিন্ন এন্টিভাইরাস ইত্যাদি। এই ডেস্কটপ এপ্লিকেশন তৈরি করাকে ডেস্কটপ এপ ডেভেলপমেন্ট বলে।",
    text_five:
      "(৪) এমভেডেট প্রোগ্রামিংঃ বিভিন্ন ধরনের ইলেক্ট্রনিক ডিভাইজ বা বিভিন্ন ধরনের মেশিনের মধ্যে কিছু প্রোগ্রাম ইন্ট্রিগেটেড ভাবে থাকে। যেমনঃ বিভিন্ন আধুনিক গাড়ি, স্মার্ট রেফ্রিজারেশন, অডিও ডিভাইজে থাকে।",
    text_six:
      "আশা করি আপনারা এখন থেকে আর ওয়েব ডেভেলপমেন্ট ও সফটওয়্যার ডেভেলপমেন্টের মধ্যে কনফিউশড থাকবে না। © Phitron",
  },
  {
    id: "blog004",
    image: blogImg4,
    date: "4 July, 2022",
    title: "মোবাইল-এপস-ডেভেলপমেন্ট নাকি ওয়েব-ডেভেলপমেন্ট!!-কোনটা-শেখা-উচিৎ?",
    desc: "বর্তমান ইন্টারনেটের দুনিয়ায় ক্রমবর্ধমান ইন্টারনেট ব্যবহারকারীর সাথে সাথে এই সংশ্লিষ্ট চাকুরীও অনেক বাড়ছে। সেই সাথে ইন্টারনেটে ব্যবহৃত সফটওয়্যার, ওয়েবসাইট এবং মোবাইলে ব্যবহৃত এপসগুলো বানানোর জন্য ডেভেলপারের চাহিদাও দিন দিন বাড়ছে। কিন্তু প্রথমে কেউ এসব শিখতে গেলে বুঝে উঠতে পারে না তার কোনটা শিখা উচিত। তো সেই বিষয়ে ধারনা দেয়ার জন্য নিচের দুটি বিষয় নিয়েই আলোচনা করলাম। ইন্টারনেটের দুনিয়ায় যা আমরা ব্যবহার করি সেগুলোকে প্রধানত ২ ভাগে ভাগ করা যায়। (১) ওয়েব অ্যাপ্লিকেশন, (২) মোবাইল অ্যাপ্লিকেশন",
    text_one:
      "প্রথমে আমরা ওয়েব অ্যাপ্লিকেশন নিয়ে কথা বলি। ওয়েব অ্যাপ্লিকেশন হলো কম্পিউটার ব্যবহার করে আমরা যা কিছুই দেখি তার সবই প্রায় ওয়েব অ্যাপ্লিকেশন বা ওয়েব সফটওয়্যার। আমরা যত রকম ওয়েবসাইট ব্রাউজ করি এগুলো সবই ওয়েবসাইট বা ওয়েব অ্যাপ্লিকেশন। যেমন: ফেসবুক, টুইটার, লিঙ্কডিন, প্রথম-আলো, বিডি জবস, ইত্যাদি। তাহলে Web Development কি? ওয়েব ডেভেলপার হতে হলে কি কি শিখতে হয়?",
    text_two:
      "ওয়েব ডেভেলপমেন্ট: ওয়েব ডেভেলপমেন্ট হচ্ছে ওয়েবসাইট ও ওয়েব অ্যাপ্লিকেশন ডিজাইন করা, ডেভেলপ করা, মডিফাই করা। আর যারা এই কাজগুলো করে তাদেরকে ওয়েব ডেভেলপার বলে। ওয়েব ডেভেলপার তিন ক্যাটাগরির হয়। (১) ফ্রন্টএন্ড ডেভেলপার: যারা ওয়েবের শুধু UI(User Interface) ইউজার ইন্টারফেস ডিজাইন করে, অর্থাৎ ওয়েবসাইট বা ওয়েব অ্যাপ্লিকেশনটা দেখতে কেমন হবে সেটা ডিজাইন করে। ফ্রন্টএন্ড ডেভেলপার হতে হলে HTML, CSS, JavaScript, React এগুলো জানতে হয়। (২) ব্যাকএন্ড ডেভেলপার: যারা শুধু ওয়েবসাইটে প্রোগ্রামিং ল্যাংগুয়েজ ব্যবহার করে তাকে সচল একটি অ্যাপ্লিকেশনে পরিনত করে এবং ওয়েবসাইটের ডাটাবেজ ও সার্ভারের উপর কাজ করে তাদেরকে ব্যাকএন্ড ডেভেলপার বলে। ব্যাকএন্ড ডেভেলপার হতে হলে কোনো একটি প্রোগ্রামিং ল্যাংগুয়েজ জানতে হয়। যেমন: C++, C#, PHP, Python, Ruby ইত্যাদি। সাথে একটি ডাটাবেজ ল্যাংগুয়েজ যেমন MySql শিখতে হয়। (৩) ফুলস্ট্যাক ডেভেলপার: যারা ওয়েবসাইট ডিজাইন ও ডেভেলপ দুটোই করতে পারে তাদেরকে ফুলস্ট্যাক ডেভেলপার বলে। এছাড়াও এখন ওয়েবসাইট ডেভেলপ করার জন্য CMS (Content Management System) টেকনোলজি আছে যার মাধ্যমে কোন প্রোগ্রামিং না জেনেও ওয়েবসাইট ডেভেলপ করা যায়। যেমন: WordPress, Joomla. উল্লেখ্য যে, ফ্রন্টএন্ড ডেভেলপমেন্টের চেয়ে ব্যাকএন্ড ডেভেলপমেন্ট তুলনামূলক কঠিন ও কষ্টসাধ্য। ফ্রন্টএন্ড টেকনোলজির চেয়েও ব্যাকএন্ড টেকনোলজিগুলো শিখতেও সময় বেশি লাগে।",
    text_three:
      "অ্যান্ড্রয়েট ডেভেলপমেন্ট: আমাদের অ্যান্ড্রয়েট ফোনে যেসব এপস আমরা ব্যবহার করি সেগুলোকে অ্যান্ড্রয়েট অ্যাপস বলে।যেমন: টিকটক,লাইকি,হোয়াটস অ্যাপ ইত্যাদি। এই সকল এপস যারা তৈরি করে তাদেরকে Android Developer বলে। অ্যান্ড্রয়েট সিস্টেমটা Linux এর Kernel এর উপর ভিত্তি করে বানানো হয়েছে। ওয়েব ডেভেলপমেন্টের চেয়ে এন্ড্রয়েট ডেভেলপমেন্ট ‍শিখাটা কিছুটা চ্যালেন্জিং। কারন, মোবাইলগুলো আলাদা আলাদা টেকনোলজি ব্যবহার করে। যেমন: Android (Google), iOS (Apple), Bada (Samsung), Blackberry OS (Blackberry), Windows OS (Microsoft), Symbian OS (Nokia), Tizen (Samsung). তবে সবচেয়ে বেশি চলে গুগলের Android ও এপলের ডেভেলপ করা iOS। তাই একজন মোবাইল অ্যাপস ডেভেলপারকে দুটো প্লাটফর্মের টেকনোলজি শিখতে হয়। Android এর জন্য যেমন Java Programming language শিখতে হয় তেমনি iOS এর জন্য Swift শিখতে হয়। তবে এখন Flutter শিখেই সবগুলো প্লাটফর্মের জন্য অ্যাপস বানানো যায়।",
    text_four:
      "ওয়েব ও অ্যান্ড্রয়েট ডেভেলপমেন্ট নিয়ে তুলনামূলক আলোচনা: অ্যান্ড্রয়েট application শুধুমাত্র অ্যান্ড্রয়েট প্লাটফর্মের জন্য। আর ওয়েব application ইন্টারনেট চলে এমন সব ডিভাইসের জন্য। সফটওয়্যার ডেভেলপমেন্টও ওয়েব ডেভেলপমেন্টের অন্তর্গত। তাই অ্যান্ড্রয়েট ডেভেলপমেন্ট এর কাজের পরিধি ছোট। ওয়েব ডেভেলপমেন্টের কাজের পরিধি বিশাল। তবে সারা বিশ্বজুড়ে মোবাইলের ব্যবহার বৃদ্ধির কারনে অ্যান্ড্রয়েট ডেভেলপমেন্টের কাজও বাড়ছে। সারা বিশ্বে এখন মোবইল কেন্দ্রিক অনেক বড় বড় বিজনেস গড়ে ওঠছে। যেমন: উবার, পাঠাও,ফুডপান্ডা ইত্যাদি। শুধুমাত্র মোবাইলের ১টি অ্যাপস দিয়েই হাজার হাজার কোটি টাকার বিসনেজ হচ্ছে সারা পৃথিবীতে। তাই এই সেক্টরের ডেভেলপারদের চাহিদাও দিন দিন বৃদ্ধি পাচ্ছে। তবে যদি কোনদিন অ্যান্ড্রয়েটের জায়গায় অন্য কোন টেকনোলজি চলে আসে অথবা মোবাইল ফোনের পরিবর্তে অন্য কোন ডিভাইস চলে আসে যেটা অ্যান্ড্রয়েট দিয়ে চলে না। তাহলে এই সেক্টর হুমকির মুখে পড়বে। পরদিকে ওয়েব ডেভেলপমেন্ট পুরো ইন্টারনেট জুড়েই বিস্তারিত বলে এর চাহিদা ছিলো এবং এখনো আছে। আর যতদিন ইন্টারনেট থাকবে ততদিন সফটওয়্যার এর চাহিদাও থাকবে।",
    text_five:
      "ফোবর্স ম্যাগাজিনের তথ্য অনুযায়ী সারা বিশ্বে প্রায় ৮.৯ মিলিয়ন(৮০ লক্ষ ৯০ হাজার) মোবাইল অ্যাপস আছে। যার প্রায় ৪০% (চল্লিশ শতাংশ) চিনের দখলে। আর চিনের বাজারে চিনা ডেভেলপাররাই বেশি কাজ করে থাকে। আর সারা বিশ্বে মোবাইল ডেভেলপার আছে ১২ মিলিয়ন(১ কোটি ২০ লক্ষ) এর মত। অপরদিকে সারাবিশ্বে প্রায় ২৩ মিলিয়ন (২ কোটি ৩০ লক্ষ) ওয়েব ডেভেলপার আছে। আর তার বিপরীতে ওয়েবসাইট রয়েছে প্রায় ৫৩৭ মিলিয়ন (প্রায় ৫৩ কোটি ৭০ লক্ষ)। এতে করেই বোঝা যায় এই সেক্টর কতটা বড় আর এর চাহিদাও কত ব্যাপক। অ্যাপ ডেভেলপারদের চাইতে ওয়েব ডেভেলপারদের চাহিদা এখনো অনেক বেশি। ওয়েব ডেভেলপারদের সংখ্যাও অ্যাপ ডেভেলপারদের চেয়ে বেশি।",
    text_six:
      "সারা বিশ্বে ওয়েব ডেভেলপারদের স্যালারি বছরে আনুমানিক ৭৩ হাজার ডলার থেকে ১ লক্ষ ডলার। আর অ্যাপ ডেভেলপারদের স্যালারি বছরে ৯০ হাজার ডলার থেখে ১ লক্ষ ২০ হাজার ডলার পর্যন্ত হয়ে থাকে। তবে উন্নত বিশ্বের সাথে এই উপমহাদেশের বাৎসরিক স্যালারির পার্থক্য অনেক বেশি। তাই দেশিও প্রতিষ্ঠানের চেয়ে আমাদের দেশের ভালো ভালো ডেভেলপাররা বাহিরের দেশের প্রতিষ্ঠানের সাথে কাজ করতে বেশি আগ্রহী। Copy: Programming Hero",
  },
];
