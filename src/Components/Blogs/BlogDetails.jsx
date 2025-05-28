"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

// Example blog data (replace with your own or fetch from API)
const blogs = [
  {
    id: "1",
    title: "Mastering React: Tips & Tricks",
    image:
      "../../assets/images/Blogs_banner/different_web_&_software_developer.jpg",
    date: "May 2025",
    desc: "Discover advanced React techniques and best practices to build scalable web apps.",
    content: `
      <p>React is a powerful library for building user interfaces. In this article, we'll explore advanced techniques such as custom hooks, context API, and performance optimization strategies.</p>
      <ul>
        <li>Custom Hooks for code reuse</li>
        <li>Context API for global state management</li>
        <li>React.memo and useMemo for performance</li>
      </ul>
      <p>By mastering these, you can build robust and scalable React applications.</p>
    `,
    tags: ["React", "Frontend", "Tips"],
  },
  {
    id: "2",
    title: "Web Development Trends 2025",
    image:
      "../../assets/images/Blogs_banner/different_web_&_software_developer.jpg",
    date: "April 2025",
    desc: "Stay ahead with the latest trends and technologies shaping the web development landscape.",
    content: `
      <p>The web is evolving rapidly. In 2025, expect to see more AI-driven interfaces, serverless architectures, and a focus on accessibility and performance.</p>
      <ul>
        <li>AI & Machine Learning in UI</li>
        <li>Serverless & Edge Computing</li>
        <li>Accessibility as a priority</li>
      </ul>
      <p>Stay updated to keep your skills relevant!</p>
    `,
    tags: ["Web", "Trends", "Tech"],
  },
  {
    id: "3",
    title: "Difference: Web vs. Software Developer",
    image:
      "../../assets/images/Blogs_banner/different_web_&_software_developer.jpg",
    date: "March 2025",
    desc: "Understand the key differences between web and software development roles.",
    content: `
      <p>Web developers focus on building websites and web apps, while software developers may work on a wider range of applications, including desktop and mobile.</p>
      <ul>
        <li>Web: HTML, CSS, JS, frameworks</li>
        <li>Software: C++, Java, Python, etc.</li>
        <li>Different deployment and testing strategies</li>
      </ul>
      <p>Both roles are crucial in the tech industry.</p>
    `,
    tags: ["Career", "Web", "Software"],
  },
];

const BlogDetails = () => {
  const params = useParams();
  const { id } = params;
  const blog = blogs.find((b) => b.id === id);

  if (!blog) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          Blog Not Found
        </h1>
        <Link href="/blogs" className="text-blue-600 hover:underline">
          Back to Blogs
        </Link>
      </div>
    );
  }

  return (
    <section className="container mx-auto py-6 px-4 min-h-screen">
      <div className="mx-auto bg-white rounded-xl shadow-2xl p-8 animate-fade-in-up">
        <Link
          href="/blogs"
          className="text-blue-600 hover:underline mb-4 inline-block animate-fade-in-down"
        >
          ← Back to Blogs
        </Link>
        <div className="mb-6">
          <Image
            height={256}
            width={512}
            src={blog.image}
            alt={blog.title}
            className="w-full h-64 object-cover rounded-xl shadow mb-6 transition-transform duration-500 hover:scale-105"
          />
          <h1 className="text-3xl font-extrabold mb-2 text-blue-700 animate-fade-in-down">
            {blog.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
              >
                #{tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">{blog.date}</span>
        </div>
        <div
          className="prose max-w-none text-gray-800 animate-fade-in-up"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
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
      `}</style>
    </section>
  );
};

export default BlogDetails;
