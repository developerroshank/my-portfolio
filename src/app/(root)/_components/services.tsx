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

let notifications = [
  {
    name: "API Integration",
    description:
      "Connect and integrate third-party services to enhance functionality and data exchange in your web app.",
  },
  {
    name: "Payment Gateway Integration",
    description:
      "Securely handle online payments with services like Stripe, PayPal, or custom payment solutions.",
  },
  {
    name: "WebSockets & Real-Time Applications",
    description:
      "Enable two-way communication for live updates, chat apps, notifications, and collaborative features.",
  },
  {
    name: "Authentication & Authorization",
    description:
      "Implement secure user login systems using JWT, OAuth, or SSO for access control.",
  },
  {
    name: "Page Load Speed Optimization",
    description:
      "Improving load times by optimizing images, minifying CSS/JS, and utilizing caching. Faster sites rank better on Google and improve user experience.",
  },
  {
    name: "Responsive Design",
    description:
      "Ensuring the site is mobile-friendly and adapts to all screen sizes, which is a critical factor for SEO and user satisfaction.",
  },
  {
    name: "Meta Tags Optimization",
    description:
      "Optimizing title tags, meta descriptions, and header tags with relevant keywords helps search engines understand your content and improves click-through rates.",
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
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]"
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
        className
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
    name: "Use Meaningful Variable Names",
    body: "Choose descriptive variable names that clearly indicate their purpose, improving readability and maintainability.",
  },
  {
    name: "Keep Functions Small and Focused",
    body: "A function should do one thing and do it well. Keeping functions small improves readability and makes debugging easier.",
  },
  {
    name: "Avoid Global Variables",
    body: "Use local variables or encapsulation to prevent unintended side effects and improve modularity.",
  },
  {
    name: "Use Consistent Formatting",
    body: "Follow a consistent code style, such as indentation, spacing, and naming conventions, to improve readability.",
  },
  {
    name: "Write Modular Code",
    body: "Break your code into reusable modules or components to improve maintainability and scalability.",
  },
  {
    name: "Use Comments Wisely",
    body: "Write comments only when necessary to explain complex logic; avoid redundant comments that state the obvious.",
  },
  {
    name: "Handle Errors Properly",
    body: "Use try-catch blocks and meaningful error messages to handle exceptions gracefully.",
  },
  {
    name: "Optimize Loops and Conditions",
    body: "Avoid unnecessary iterations and use efficient data structures to improve performance.",
  },
  {
    name: "Avoid Hardcoding Values",
    body: "Use constants, environment variables, or configuration files to manage configurable values.",
  },
  {
    name: "Use Version Control",
    body: "Use Git or another version control system to track changes and collaborate effectively.",
  },
];

const features = [
  {
    name: "Services",
    description:
      "developing professional responsive websites, Landing pages, and web applications.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },

  {
    name: "Converting",
    description:
      "Converting design files (Figma, XD, Sketch, and PSD) into pixel-perfect.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },

  {
    name: "Clean Code",
    description:
      "Writing maintainable, efficient, and scalable code following best practices.",
    href: "#",
    cta: "Learn more",
    className: "col-span-3 lg:col-span-1",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {bestPractices.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
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
