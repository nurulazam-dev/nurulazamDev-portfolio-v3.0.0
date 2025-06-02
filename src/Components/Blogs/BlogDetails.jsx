"use client";
import Link from "next/link";
import Image from "next/image";
import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { blogsData } from "@/assets/data/blogsData";

const BlogDetails = () => {
  const params = useParams();
  const { id } = params;

  const blog = useMemo(() => blogsData?.find((b) => b?.id === id), [id]);

  // Comment state
  const [comments, setComments] = useState([]);
  const [commentInput, setCommentInput] = useState("");
  const [nameInput, setNameInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [error, setError] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (!emailInput.trim() || !nameInput.trim() || !commentInput.trim()) {
      setError("Email, name, and comment are required.");
      return;
    }
    setComments([
      ...comments,
      {
        name: nameInput.trim(),
        email: emailInput.trim(),
        comment: commentInput.trim(),
        date: new Date().toLocaleString(),
      },
    ]);
    setNameInput("");
    setEmailInput("");
    setCommentInput("");
    setError("");
  };

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
    <section className="relative min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-100 py-10 px-2 font-sans">
      {/* Decorative background shapes */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-blue-200 rounded-full opacity-20 blur-2xl -z-10 animate-float" />
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-200 rounded-full opacity-20 blur-2xl -z-10 animate-float2" />

      <div className="max-w-5xl mx-auto bg-white/90 rounded-3xl shadow-2xl p-8 md:p-14 animate-fade-in-up">
        <Link
          href="/blogs"
          className="text-blue-600 hover:underline mb-6 inline-flex items-center gap-2 font-semibold transition hover:-translate-x-1"
        >
          <svg
            width="22"
            height="22"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path d="M15 18l-6-6 6-6" />
          </svg>
          Back to Blogs
        </Link>
        <div className="mb-8">
          <div className="relative flex justify-center">
            <Image
              src={blog?.image}
              alt={blog?.title}
              width={700}
              height={350}
              className="object-cover rounded-2xl shadow-xl border-4 border-blue-100 animate-zoom-in"
              priority
            />
            <span className="absolute top-4 left-4 bg-gradient-to-r from-blue-600 to-purple-500 text-white text-xs px-4 py-1 rounded-full shadow-lg opacity-90 font-semibold tracking-wide animate-pulse">
              {blog?.category || "Blog"}
            </span>
          </div>
          <h1 className="text-4xl font-extrabold mb-3 mt-8 text-blue-800 animate-fade-in-down leading-tight font-display">
            {blog?.title}
          </h1>
          <div className="flex flex-wrap gap-2 mb-4">
            {blog?.tags?.map((tag) => (
              <span
                key={tag}
                className="bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold shadow"
              >
                #{tag}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-2">
            <span>
              <svg
                className="inline mr-1"
                width="18"
                height="18"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <circle cx="12" cy="12" r="10" />
                <path d="M12 6v6l4 2" />
              </svg>
              {blog?.date}
            </span>
            {blog?.author && (
              <span>
                <svg
                  className="inline mr-1"
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <circle cx="12" cy="7" r="4" />
                  <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
                </svg>
                {blog?.author}
              </span>
            )}
          </div>
        </div>
        <div
          className="prose max-w-none text-justify text-gray-700 animate-fade-in-up prose-img:rounded-xl prose-img:shadow-lg prose-h2:text-blue-700 prose-h3:text-blue-600 font-serif"
          style={{ fontFamily: "'Merriweather', 'Georgia', serif" }}
          dangerouslySetInnerHTML={{ __html: blog?.content }}
        />
        {/* Comment Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-4 text-blue-700 flex items-center gap-2">
            <svg
              width="28"
              height="28"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Comments
          </h2>
          <form
            onSubmit={handleCommentSubmit}
            className="mb-8 bg-gradient-to-br from-white via-blue-50 to-purple-50 rounded-2xl p-8 shadow-xl flex flex-col gap-4 border border-blue-100 backdrop-blur-md"
          >
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1">
                <label className="block text-sm font-semibold text-blue-700 mb-1">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    placeholder="you@email.com"
                    className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium bg-white/80 shadow-inner transition"
                    value={emailInput}
                    onChange={(e) => setEmailInput(e.target.value)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 4h16v16H4z" stroke="none" />
                      <path d="M22 6l-10 7L2 6" />
                    </svg>
                  </span>
                </div>
              </div>
              <div className="flex-1">
                <label className="block text-sm font-semibold text-blue-700 mb-1">
                  Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-2 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium bg-white/80 shadow-inner transition"
                    value={nameInput}
                    onChange={(e) => setNameInput(e.target.value)}
                  />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400">
                    <svg
                      width="18"
                      height="18"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="7" r="4" />
                      <path d="M5.5 21a8.38 8.38 0 0 1 13 0" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-blue-700 mb-1">
                Comment
              </label>
              <textarea
                placeholder="Write your comment..."
                className="w-full px-4 py-3 rounded-lg border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400 font-medium bg-white/80 shadow-inner transition resize-none"
                rows={4}
                value={commentInput}
                onChange={(e) => setCommentInput(e.target.value)}
              />
            </div>
            {error && <div className="text-red-500 mb-2">{error}</div>}
            <button
              type="submit"
              className="self-end px-8 py-2 bg-gradient-to-r from-blue-700 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:scale-105 hover:from-blue-800 hover:to-purple-700 transition text-lg animate-bounce-slow flex items-center gap-2"
            >
              Post
              <svg
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </button>
          </form>
          <div>
            {comments.length === 0 && (
              <div className="text-gray-500 italic text-center">
                No comments yet. Be the first to comment!
              </div>
            )}
            <div className="space-y-6">
              {comments.map((c, idx) => (
                <div
                  key={idx}
                  className="relative p-5 bg-white/90 rounded-xl shadow border-l-4 border-blue-400 animate-fade-in-up"
                  style={{
                    animationDelay: `${idx * 0.07 + 0.1}s`,
                    animationName: "fadeInUp",
                    animationDuration: "0.7s",
                    animationFillMode: "both",
                  }}
                >
                  <div className="flex items-center mb-1 gap-2">
                    <span className="font-bold text-blue-700">{c.name}</span>
                    <span className="ml-2 text-xs text-gray-400">
                      {c.email}
                    </span>
                    <span className="ml-2 text-xs text-gray-400">{c.date}</span>
                  </div>
                  <div className="text-gray-700">{c.comment}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Inter:wght@400;600;800&family=Merriweather:wght@400;700&display=swap");
        html {
          font-family: "Inter", "Segoe UI", "Helvetica Neue", Arial,
            "Merriweather", serif;
        }
        .font-display {
          font-family: "Inter", "Segoe UI", Arial, sans-serif;
        }
        .font-serif {
          font-family: "Merriweather", "Georgia", serif;
        }
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
        @keyframes zoom-in {
          0% {
            transform: scale(0.92);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-zoom-in {
          animation: zoom-in 0.7s both;
        }
        @keyframes float {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        @keyframes float2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(20px);
          }
        }
        .animate-float2 {
          animation: float2 7s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
        @keyframes bounce-slow {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
};

export default BlogDetails;
