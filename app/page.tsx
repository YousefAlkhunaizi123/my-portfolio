"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = ["about", "experience", "projects"];

    const handleScroll = () => {
      let current = "about";

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const rect = element.getBoundingClientRect();

          if (rect.top <= 200) {
            current = section;
          }
        }
      });

      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const experiences = [
    {
      date: "July 2024 – August 2024",
      title: "Researcher · Armor Lab at UCSD",
      description:
        "Designed comb-shaped capacitor layouts, worked with Voltera printing, and supported sensor testing experiments.",
      tags: ["Eagle CAD", "Voltera", "Sensors", "Research"],
    },
    {
      date: "August 2022 – September 2024",
      title: "Work Study Participant · Summer Engineering Institute",
      description:
        "Gained hands-on experience with CAD, MATLAB, 3D printing, soldering, circuits, and engineering design tools.",
      tags: ["CAD", "MATLAB", "3D Printing", "Circuits"],
    },
  ];

  const projects = [
    {
      title: "Fall Detection Device",
      description:
        "Built a wearable fall-detection system using ESP32 and MPU6050 sensors to detect abnormal motion.",
      tags: ["ESP32", "MPU6050", "KiCad", "Embedded Systems"],
    },
    {
      title: "Line-Following Robot",
      description:
        "Designed and programmed a robot using light sensors, motor control logic, and a 3D-printed chassis.",
      tags: ["Robotics", "Sensors", "Motor Control", "Onshape"],
    },
    {
      title: "Capacitor Research",
      description:
        "Created capacitor layouts and worked with Voltera printing at UCSD Armor Lab.",
      tags: ["Eagle CAD", "Voltera", "Fabrication", "Testing"],
    },
  ];

  const navLinkClass = (section: string) =>
    `transition ${
      activeSection === section
        ? "text-teal-300 translate-x-2"
        : "text-slate-500 hover:text-teal-300"
    }`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-slate-200">
      <div className="pointer-events-none fixed left-20 top-20 h-72 w-72 rounded-full bg-teal-400/10 blur-3xl" />
      <div className="pointer-events-none fixed bottom-20 right-20 h-80 w-80 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-8 py-16 lg:grid-cols-2 lg:py-24">
        <section className="lg:sticky lg:top-24 lg:h-fit">
          <h1 className="text-5xl font-bold tracking-tight text-white">
            Yousef Alkhunaizi
          </h1>

          <h2 className="mt-4 text-xl text-slate-300">
            Electrical Engineering Student @ UCSD
          </h2>

          <p className="mt-6 max-w-md leading-7 text-slate-400">
            I’m interested in embedded systems, hardware design, machine
            learning, and building engineering projects that connect circuits,
            software, and real-world problem solving.
          </p>

          <nav className="mt-12 hidden flex-col gap-4 text-sm uppercase tracking-widest lg:flex">
            <a href="#about" className={navLinkClass("about")}>
              About
            </a>

            <a href="#experience" className={navLinkClass("experience")}>
              Experience
            </a>

            <a href="#projects" className={navLinkClass("projects")}>
              Projects
            </a>
            <a href="/playground" className="transition hover:text-teal-300">
              Playground
</a>
          </nav>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:yalkhunaizi@ucsd.edu"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-medium transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-300"
            >
              Contact Me
            </a>

            <a
              href="/about"
              className="rounded-full border border-slate-700 px-6 py-3 text-sm font-medium transition hover:-translate-y-1 hover:border-teal-300 hover:text-teal-300"
            >
              About Page
            </a>
          </div>
        </section>

        <section className="space-y-24">
          <section id="about" className="scroll-mt-24">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-400">
              About
            </h2>

            <p className="leading-8 text-slate-400">
              I am an Electrical Engineering student at UCSD with experience in
              embedded systems, circuit design, CAD tools, and programming. I
              enjoy projects where hardware and software work together, such as
              sensors, microcontrollers, robotics, and machine learning systems.
            </p>
          </section>

          <section id="experience" className="scroll-mt-24">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-400">
              Experience
            </h2>

            <div className="space-y-4">
              {experiences.map((item) => (
                <div
                  key={item.title}
                  className="group rounded-xl border border-transparent p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-teal-500/5"
                >
                  <p className="text-sm text-slate-500">{item.date}</p>

                  <h3 className="mt-2 text-xl font-semibold text-white transition group-hover:text-teal-300">
                    {item.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-teal-400/10 px-3 py-1 text-sm text-teal-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="projects" className="scroll-mt-24">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-400">
              Projects
            </h2>

            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-xl border border-transparent p-5 transition duration-300 hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-teal-500/5"
                >
                  <h3 className="text-xl font-semibold text-white transition group-hover:text-teal-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {project.description}
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-teal-400/10 px-3 py-1 text-sm text-teal-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 text-sm text-teal-300 opacity-0 transition duration-300 group-hover:opacity-100">
                    View project →
                  </p>
                </div>
              ))}
            </div>
          </section>
        </section>
      </div>
    </main>
  );
}