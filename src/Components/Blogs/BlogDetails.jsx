"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo } from "react";
import { useParams } from "next/navigation";
import { blogsData } from "@/assets/data/blogsData";

const BlogDetails = () => {
  const params = useParams();
  const { id } = params;

  const blog = useMemo(() => blogsData?.find((b) => b?.id === id), [id]);

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
          <div className="flex justify-center">
            <Image
              src={blog?.image}
              alt={blog?.title}
              width={500}
              height={280}
              className="object-cover rounded shadow mb-6 transition-transform duration-500 hover:scale-105"
            />
          </div>
          <h1 className="text-3xl font-extrabold mb-2 text-blue-700 animate-fade-in-down">
            {blog?.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog?.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
          <span className="text-sm text-gray-500">{blog?.date}</span>
        </div>
        <div
          className="prose max-w-none text-justify text-gray-800 animate-fade-in-up"
          dangerouslySetInnerHTML={{ __html: blog?.content }}
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
