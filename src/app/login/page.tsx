import Link from "next/link";

export default function LoginPage() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-purple-100 px-4 py-12">
      <div className="absolute -left-16 -top-20 h-64 w-64 rounded-full bg-cyan-200/60 blur-3xl" />
      <div className="absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-indigo-200/60 blur-3xl" />

      <div className="relative z-10 w-full max-w-md rounded-2xl border border-white/70 bg-white/85 p-7 shadow-2xl backdrop-blur-md dark:border-slate-700 dark:bg-slate-900/80">
        <div className="mb-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-cyan-600">
            Welcome Back
          </p>
          <h1 className="mt-2 text-3xl font-extrabold text-slate-900 dark:text-slate-100">
            Login to your account
          </h1>
          <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">
            Continue building with smooth workflow and secure access.
          </p>
        </div>

        <form className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="mb-1 block text-sm font-medium text-slate-700 dark:text-slate-200"
            >
              Email Address
            </label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              required
            />
          </div>

          <div>
            <div className="mb-1 flex items-center justify-between">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-slate-700 dark:text-slate-200"
              >
                Password
              </label>
              <Link
                href="#"
                className="text-xs font-medium text-cyan-600 hover:underline"
              >
                Forgot password?
              </Link>
            </div>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full rounded-lg border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-100 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-100"
              required
            />
          </div>

          <label className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
            <input
              type="checkbox"
              className="h-4 w-4 rounded border-slate-300 text-cyan-600 focus:ring-cyan-400"
            />
            Remember me
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-gradient-to-r from-cyan-500 to-indigo-600 px-4 py-3 text-sm font-semibold text-white shadow-lg transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-cyan-400"
          >
            Sign In
          </button>
        </form>

        <div className="my-5 flex items-center gap-3">
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
          <span className="text-xs text-slate-500 dark:text-slate-400">
            OR CONTINUE WITH
          </span>
          <div className="h-px flex-1 bg-slate-200 dark:bg-slate-700" />
        </div>

        <div className="grid grid-cols-2 gap-3">
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
          >
            Google
          </button>
          <button
            type="button"
            className="rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50 dark:border-slate-600 dark:bg-slate-800 dark:text-slate-200"
          >
            GitHub
          </button>
        </div>

        <p className="mt-6 text-center text-sm text-slate-600 dark:text-slate-300">
          Do not have an account?{" "}
          <Link href="#" className="font-semibold text-cyan-600 hover:underline">
            Create one
          </Link>
        </p>
      </div>
    </section>
  );
}
