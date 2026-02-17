import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/Footer";
import ContactFormModal from "@/components/contact-form-modal";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "elmaranchuelo | Portfolio",
  description:
    "Discover elmaranchuelo's front-end developer portfolio featuring innovative projects, modern web technologies, and a passion for clean, user-friendly design. Explore expertise in React, Next.js, Tailwind CSS, and more.",
  keywords: [
    "Software Engineer",
    "Front-End Developer",
    "Web Developer",
    "React Developer",
    "Next.js Portfolio",
    "JavaScript Developer",
    "UI/UX Design",
    "Responsive Web Design",
    "Tailwind CSS",
    "Web Development Projects",
    "Modern Web Technologies",
  ],
  authors: [{ name: "elmaranchuelo", url: "https://elmaranchuelo.vercel.app/" }],
  openGraph: {
    title: "elmaranchuelo | Software engineer Portfolio",
    description:
      "Explore elmaranchuelo's cutting-edge front-end development projects, utilizing modern frameworks like React, Next.js, and Tailwind CSS.",
    url: "https://elmaranchuelo.vercel.app/",
    siteName: "elmaranchuelo Portfolio",
    images: [
      {
        url: "https://elmaranchuelo.vercel.app/preview.png",
        width: 1200,
        height: 630,
        alt: "elmaranchuelo Portfolio Preview",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "elmaranchuelo | Front-End Developer Portfolio",
    description:
      "Showcasing innovative web projects using React, Next.js, and modern UI/UX practices.",
    images: ["https://elmaranchuelo.vercel.app/preview.png"],
  },
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn("font-sans antialiased relative", inter.className)}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <Navbar />
          {children} {/* Main Page Content */}
          <Footer />
          <ContactFormModal />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
