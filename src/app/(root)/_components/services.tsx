"use client";

import { cn } from "@/lib/utils";
import { AnimatedBeamMultipleOutputDemo } from "@/components/magicui/animated-beam-multiple-outputs";
import { AnimatedList } from "@/components/magicui/animated-list";
import { BentoCard, BentoGrid } from "@/components/magicui/bento-grid";
import { Marquee } from "@/components/magicui/marquee";

interface Item {
  name: string;
  description: string;
}

let notifications: Item[] = [
  {
    name: "API Integration",
    description:
      "Design and integrate RESTful APIs to enable secure and seamless data exchange.",
  },
  {
    name: "Payment Processing",
    description:
      "Implement secure and reliable payment solutions for online transactions, including gateways, subscriptions, and e-commerce workflows.",
  },
  {
    name: "Real-Time Communication",
    description:
      "Use WebSockets or server-sent events for live updates, chat apps, notifications, and collaborative features.",
  },
  {
    name: "Authentication & Security",
    description:
      "Implement JWT, OAuth, SSO, and Microsoft authentication to secure your applications.",
  },
  {
    name: "Performance Optimization",
    description:
      "Improve page load speed, caching, and asset optimization for high-performing web apps.",
  },
  {
    name: "Monitoring & Observability",
    description:
      "Set up logging, metrics, and alerting systems to track application health, performance, and errors in production.",
  },
  {
    name: "Responsive & Accessible Design",
    description:
      "Ensure your applications work flawlessly across all devices, while adhering to accessibility best practices.",
  },
  {
    name: "SEO & Meta Optimization",
    description:
      "Optimize meta tags, titles, and headers to improve search engine visibility and click-through rates.",
  },
];

notifications = Array.from({ length: 25 }, () => notifications).flat();

const Notification = ({ name, description }: Item) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-4",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row items-center gap-3">
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium dark:text-white">
            <span className="text-sm sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
          </figcaption>
          <p className="text-sm font-normal dark:text-white/60">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};

export function AnimatedListDemo({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full flex-col overflow-hidden p-2",
        className,
      )}
    >
      <AnimatedList delay={2500}>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-background"></div>
    </div>
  );
}

const bestPractices = [
  {
    name: "Meaningful Variables",
    body: "Use descriptive variable names to make code readable and self-documenting.",
  },
  {
    name: "Small & Focused Functions",
    body: "Each function should perform a single task, making code easier to test and maintain.",
  },
  {
    name: "DRY Principle",
    body: "Avoid code duplication by reusing functions, components, or modules to improve maintainability.",
  },
  {
    name: "Unit Testing",
    body: "Write automated tests for functions and modules to catch bugs early and ensure code reliability.",
  },
  {
    name: "Modular Code",
    body: "Organize code into reusable, loosely coupled modules for scalability and maintainability.",
  },
  {
    name: "Error Handling",
    body: "Use try-catch blocks and meaningful error messages for robust applications.",
  },
  {
    name: "Consistent Formatting",
    body: "Follow a consistent code style, naming conventions, and formatting rules to improve readability.",
  },
  {
    name: "Avoid Hardcoding",
    body: "Use constants, configuration files, or environment variables for values that may change.",
  },
  {
    name: "Version Control",
    body: "Track changes and collaborate effectively using Git or another version control system.",
  },
];
const features = [
  {
    name: "Web Development",
    description:
      "Designing and developing robust, scalable, and secure server-side applications and APIs that power web and mobile platforms.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[460px] w-full scale-75 border-none transition-all duration-300 ease-out  group-hover:scale-90" />
    ),
  },

  {
    name: "Frontend & Design",
    description:
      "Transforming UI/UX designs into interactive, responsive, and pixel-perfect interfaces for optimal user experience.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[460px] border-none transition-all duration-300 ease-out  group-hover:scale-105" />
    ),
  },

  {
    name: "Coding Best Practices",
    description:
      "Writing clean, maintainable, and efficient code following industry standards, design patterns, and scalable architecture principles.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 [--duration:20s]"
      >
        {bestPractices.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transition-all duration-300 ease-out hover:blur-none",
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs">{f.body}</blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },
];

const Services = () => {
  return (
    <BentoGrid>
      {features.map((feature, idx) => (
        <BentoCard key={idx} {...feature} />
      ))}
    </BentoGrid>
  );
};

export default Services;
