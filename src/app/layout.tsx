import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";
import { ThemeProvider } from "@/providers/ThemeProvider";
import AnimationProvider from "@/providers/AnimationProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nurul Azam",
  icons: {
    icon: "/favicon.png",
  },
  description: "Web Developer (@nurulazamDev)",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          disableTransitionOnChange
        >
          <AnimationProvider>
            <Header />
            <main className="mt-8 md:mt-10 lg:mt-15">
              <div className="mx-auto">{children}</div>
            </main>
            <Footer />
          </AnimationProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
