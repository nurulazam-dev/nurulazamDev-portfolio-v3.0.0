"use client";

import { skillsData } from "public/assets/data/dataBank";
import SectionHeader from "../Shared/SectionHeader";

const skillIconMap: Record<string, string> = {
  HTML5:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  CSS3: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  Bootstrap:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg",
  "Tailwind CSS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  "Daisy Ui": "https://img.icons8.com/color/96/daisyui.png",
  JavaScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ES6: "https://img.icons8.com/color/96/javascript--v1.png",
  "React JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  "Next JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  TypeScript:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  "ShadCN UI": "https://ui.shadcn.com/apple-touch-icon.png",
  "Framer Motion": "https://cdn.worldvectorlogo.com/logos/framer-motion.svg",
  "React Router": "https://reactrouter.com/favicon-dark.png",
  Redux:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  "Node JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  "Express JS":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  Prisma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/prisma/prisma-original.svg",
  PostgreSQL:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  MongoDB:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  Mongoose:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongoose/mongoose-original.svg",
  JWT: "https://jwt.io/img/pic_logo.svg",
  Zod: "https://zod.dev/logo.svg",
  Git: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  "VS Code":
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg",
  Github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  Netlify:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/netlify/netlify-original.svg",
  Heroku:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/heroku/heroku-original.svg",
  Figma:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg",
  Firebase:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg",
  Render: "https://avatars.githubusercontent.com/u/42658878?s=200&v=4",
  Vercel:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vercel/vercel-original.svg",
  Postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",
  Antigravity: "https://img.icons8.com/fluency/96/physics.png",
  Cursor:
    "https://registry.npmmirror.com/@lobehub/icons-static-png/latest/files/dark/cursor.png",
};

const fallbackIcon = "https://img.icons8.com/fluency/96/source-code.png";

export default function TechnologyTools() {
  return (
    <section className="px-4 py-14 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader title="Skills & Tools I Use" subtitle="Tech Stack" />

        <div className="space-y-10">
          {skillsData.map((group) => (
            <div key={group.id}>
              <h3 className="mb-5 text-center text-xl font-bold text-slate-700">
                {group.title}
              </h3>
              <div className="grid grid-cols-3 gap-x-5 gap-y-6 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8">
                {group.skillsData.map((skill: { name: string }) => (
                  <div
                    key={skill.name}
                    className="group flex flex-col items-center justify-start text-center"
                  >
                    <div className="flex h-20 w-20 items-center justify-center rounded-full border border-slate-200 bg-white shadow-md transition-all duration-300 group-hover:-translate-y-1 group-hover:border-cyan-300 group-hover:shadow-cyan-100">
                      <img
                        src={skillIconMap[skill.name] ?? fallbackIcon}
                        alt={skill.name}
                        loading="lazy"
                        className="h-10 w-10 object-contain"
                      />
                    </div>
                    <span className="mt-2 text-sm font-medium text-slate-700">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
