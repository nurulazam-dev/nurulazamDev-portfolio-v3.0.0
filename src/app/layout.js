import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/Components/Shared/Header";
import Footer from "@/Components/Shared/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Nurul Azam",
  icons: {
    icon: "/favicon.png",
  },
  description: "Web Developer (@nurulazamDev)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="mt-8 md:mt-10 lg:mt-15">
          <div className="mx-auto">{children}</div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
