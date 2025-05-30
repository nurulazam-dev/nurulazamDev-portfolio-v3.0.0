"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Img1 from "../../assets/images/Blogs_banner/different_web_&_software_developer.jpg";

const blogs = [
  {
    id: 1,
    title: "Mastering React: Tips & Tricks",
    image: Img1,
    date: "May 2025",
    desc: "Discover advanced React techniques and best practices to build scalable web apps.",
    tags: ["React", "Frontend", "Tips"],
    link: "#",
  },
  {
    id: 2,
    title: "Web Development Trends 2025",
    image: Img1,
    date: "April 2025",
    desc: "Stay ahead with the latest trends and technologies shaping the web development landscape.",
    tags: ["Web", "Trends", "Tech"],
    link: "#",
  },
  {
    id: 3,
    title: "Difference: Web vs. Software Developer",
    image: Img1,
    date: "March 2025",
    desc: "Understand the key differences between web and software development roles.",
    tags: ["Career", "Web", "Software"],
    link: "#",
  },
];

const Blogs = () => {
  const [hovered, setHovered] = useState(null);

  return (
    <section className="container mx-auto py-16 px-4">
      <div className="text-center mb-12">
        <h4 className="uppercase text-blue-600 font-semibold tracking-widest mb-2 animate-fade-in-down">
          Latest Blogs
        </h4>
        <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 animate-fade-in-down">
          Insights & Articles
        </h1>
        <p className="text-gray-500 mt-2 max-w-xl mx-auto animate-fade-in-up">
          Explore my latest articles on web development, programming, and tech
          trends.
        </p>
      </div>

      <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
        {blogs.map((blog, idx) => (
          <Link
            href={blog.link}
            key={blog.id}
            className="group relative bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl animate-fade-in-up"
            style={{ animationDelay: `${idx * 0.1 + 0.2}s` }}
            onMouseEnter={() => setHovered(blog.id)}
            onMouseLeave={() => setHovered(null)}
          >
            <div className="relative h-56 w-full overflow-hidden">
              <Image
                height={224}
                width={400}
                src={blog.image}
                alt={blog.title}
                className={`object-cover w-full h-full transition-transform duration-500 ${
                  hovered === blog.id ? "scale-110" : "scale-100"
                }`}
                loading="lazy"
              />
              <span className="absolute top-4 left-4 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow animate-fade-in-down">
                {blog.date}
              </span>
            </div>
            <div className="p-6 flex flex-col h-48">
              <h2 className="text-xl font-bold text-blue-700 mb-2 group-hover:text-purple-700 transition-colors duration-300">
                {blog.title}
              </h2>
              <p className="text-gray-600 mb-4 line-clamp-3">{blog.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {blog.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
            <Link
              //   href={`/blogs/${blog?.title.toLowerCase().replace(/ /g, "-")}`}
              href={`/blogs/${blog?.id}`}
              className="absolute bottom-4 right-4 text-blue-600 font-semibold group-hover:underline transition"
            >
              Read More →
            </Link>
          </Link>
        ))}
      </div>
      <style jsx global>{`
        @keyframes fade-in-down {
          0% {
            opacity: 0;
            transform: translateY(-30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-up {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fade-in-down 0.7s both;
        }
        .animate-fade-in-up {
          animation: fade-in-up 0.7s both;
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Blogs;
