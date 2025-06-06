import React, { useState } from "react";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    contact: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    alert("Login submitted!");
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-white">
      <div className="relative bg-white rounded-3xl shadow-2xl px-10 py-6 w-full max-w-md flex flex-col items-center">
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-gradient-to-tr from-blue-100 via-purple-100 to-white rounded-full blur-xl opacity-80 z-0"></div>
        <h2 className="text-3xl font-extrabold text-blue-900 mb-3 z-10">
          Login
        </h2>
        <form className="w-full space-y-6 z-10" onSubmit={handleSubmit}>
          <div>
            <label
              className="block text-blue-700 font-semibold mb-1"
              htmlFor="email"
            >
              Email
            </label>
            <input
              className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:border-blue-500 outline-none bg-blue-50 transition"
              type="email"
              name="email"
              id="email"
              placeholder="you@example.com"
              value={form.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>
          <div>
            <label
              className="block text-blue-700 font-semibold mb-1"
              htmlFor="contact"
            >
              Contact
            </label>
            <input
              className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:border-blue-500 outline-none bg-blue-50 transition"
              type="text"
              name="contact"
              id="contact"
              placeholder="Contact Number"
              value={form.contact}
              onChange={handleChange}
              required
              autoComplete="tel"
            />
          </div>
          <div>
            <label
              className="block text-blue-700 font-semibold mb-1"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="w-full px-4 py-2 rounded-xl border border-blue-200 focus:border-blue-500 outline-none bg-blue-50 transition pr-10"
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Your password"
                value={form.password}
                onChange={handleChange}
                required
                autoComplete="current-password"
              />
              <button
                type="button"
                className="absolute right-3 top-1/2 -translate-y-1/2 text-blue-400 hover:text-blue-700"
                onClick={() => setShowPassword((v) => !v)}
                tabIndex={-1}
              >
                {showPassword ? (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M12 5c-7 0-10 7-10 7s3 7 10 7 10-7 10-7-3-7-10-7zm0 12c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5zm0-8a3 3 0 100 6 3 3 0 000-6z"
                      fill="currentColor"
                    />
                  </svg>
                ) : (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                    <path
                      d="M1 1l22 22M17.94 17.94C16.13 19.13 14.13 20 12 20c-7 0-10-7-10-7a18.7 18.7 0 014.06-5.94M9.88 9.88A3 3 0 0012 15a3 3 0 002.12-5.12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-2 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold shadow-lg hover:scale-[1.03] transition-transform"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-sm text-gray-500 z-10">
          Don&apos;t have an account?{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
