"use client";

import { useEffect, useState } from "react";

import Link from "next/link";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import { Download, ExternalLink, Mail } from "lucide-react";

import { Particles } from "@/components/magicui/particles";

import Services from "./_components/services";
import TechStack from "./_components/tech-stack";
import ProjectCard from "@/components/project-card";

import Image from "next/image";

export default function Page() {
  const { theme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [theme]);

  return (
    <main>
      <Particles
        className="absolute inset-0 z-0"
        quantity={150}
        ease={80}
        color={color}
        refresh
      />

      {/* About */}
      <section id="about" className="container py-24 lg:py-40">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Left Side – Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                Software Engineer
              </h1>

              <p className="text-balance text-muted-foreground text-lg">
                Experienced Full-Stack Developer with over 8 years of building
                responsive UIs, developing scalable APIs, and enhancing user
                experiences. Skilled in both frontend and backend development,
                with a focus on creating efficient, secure systems. Always
                looking for ways to improve and learn, I’m committed to being a
                positive, valuable team member.
              </p>
            </div>

            {/* Buttons + Social */}
            <div className="flex flex-wrap items-center gap-4">
              <Link href="mailto:elmaranchuelo@gmail.com" target="_blank">
                <Button aria-label="Hire me via email">
                  <Mail className="mr-2 h-4 w-4" />
                  Hire me
                </Button>
              </Link>

              <Link href="/resume.pdf" target="_blank">
                <Button aria-label="Download Resume">
                  <Download className="mr-2 h-4 w-4" />
                  Resume
                </Button>
              </Link>

              {/* Social Links */}
              <div className="flex items-center gap-2">
                {/* GitHub */}
                <Link href="https://github.com/elmaranchuelo" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="GitHub Profile"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <path
                        fill="currentColor"
                        d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 008 10.93c.58.1.79-.25.79-.56
                  0-.28-.01-1.02-.02-2-3.26.71-3.95-1.57-3.95-1.57-.53-1.36-1.3-1.72-1.3-1.72
                  -1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.72 1.27
                  3.39.97.11-.75.41-1.27.75-1.56-2.6-.3-5.33-1.3-5.33-5.78
                  0-1.28.46-2.32 1.2-3.14-.12-.3-.52-1.52.11-3.17
                  0 0 .98-.31 3.2 1.2a11.1 11.1 0 015.82 0c2.22-1.51
                  3.2-1.2 3.2-1.2.63 1.65.23 2.87.11 3.17.75.82
                  1.2 1.86 1.2 3.14 0 4.5-2.74 5.47-5.35 5.76
                  .42.36.8 1.08.8 2.18 0 1.57-.01 2.84-.01 3.23
                  0 .31.21.67.8.56A11.5 11.5 0 0023.5 12
                  C23.5 5.65 18.35.5 12 .5z"
                      />
                    </svg>
                  </Button>
                </Link>

                {/* LinkedIn */}
                <Link href="https://linkedin.com/in/ejanchuelo" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    aria-label="LinkedIn Profile"
                  >
                    <svg viewBox="0 0 24 24" className="h-4 w-4">
                      <path
                        fill="currentColor"
                        d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5
                  1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.5 8h4v16h-4V8zm7.5
                  0h3.6v2.2h.05c.5-.95 1.72-1.95 3.54-1.95
                  3.79 0 4.49 2.5 4.49 5.75V24h-4v-8.5
                  c0-2.03-.04-4.65-2.83-4.65-2.83
                  0-3.26 2.21-3.26 4.5V24h-4V8z"
                      />
                    </svg>
                  </Button>
                </Link>
              </div>
            </div>
          </div>

          <div className="flex justify-center ">
            <div className="relative w-64 h-64 lg:w-80 lg:h-80 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/photo.jpg"
                alt="Your Name"
                fill
                className="object-cover object-top scale-[1.3]"
                priority
                quality={75}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="service" className="container pb-24">
        <Services />
      </section>

      {/* Tech Stack */}
      <section className="container">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-12">
          Technology Stack
        </h2>

        <TechStack />
      </section>

      {/* Work Experiences */}
      <section id="experience" className="container py-12 md:py-24">
        <div className="flex justify-between mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Work Experiences
          </h2>

          <Link href={"/projects"} aria-label="See all projects">
            <Button variant={"outline"} className="ml-0.5">
              See More
              <ExternalLink className="size-4" />
            </Button>
          </Link>
        </div>

        <ProjectCard />
      </section>
    </main>
  );
}
