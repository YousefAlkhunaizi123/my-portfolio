export default function Home() {
  const experiences = [
    {
      role: "Researcher",
      company: "Armor Lab at UCSD",
      date: "July 2024 – August 2024",
      details:
        "Designed comb-shaped capacitor layouts, worked with Voltera printing, and supported sensor testing experiments.",
    },
    {
      role: "Work Study Participant",
      company: "Summer Engineering Institute",
      date: "August 2022 – September 2024",
      details:
        "Gained hands-on experience with CAD, MATLAB, 3D printing, soldering, circuits, and engineering design tools.",
    },
  ];

  const projects = [
    {
      title: "Fall Detection Device",
      details:
        "Built a wearable fall-detection system using ESP32 and MPU6050 sensors to detect abnormal motion.",
    },
    {
      title: "Line-Following Robot",
      details:
        "Designed and programmed a robot using light sensors, motor control logic, and a 3D-printed chassis.",
    },
    {
      title: "Capacitor Research",
      details:
        "Created capacitor layouts and worked with Voltera printing at UCSD Armor Lab.",
    },
  ];

  return (
    <main className="min-h-screen bg-slate-950 text-slate-200">
      <div className="mx-auto grid max-w-6xl gap-10 px-8 py-16 lg:grid-cols-2 lg:py-24">
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

          <nav className="mt-12 hidden flex-col gap-4 text-sm uppercase tracking-widest text-slate-500 lg:flex">
            <a href="#about" className="transition hover:text-teal-300">
              About
            </a>
            <a href="#experience" className="transition hover:text-teal-300">
              Experience
            </a>
            <a href="#projects" className="transition hover:text-teal-300">
              Projects
            </a>
          </nav>

          <a
            href="mailto:yalkhunaizi@ucsd.edu"
            className="mt-10 inline-block rounded-full border border-slate-700 px-6 py-3 text-sm font-medium transition hover:border-teal-300 hover:text-teal-300"
          >
            Contact Me
          </a>
        </section>

        <section className="space-y-24">
          <section id="about">
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

          <section id="experience">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-400">
              Experience
            </h2>

            <div className="space-y-4">
              {experiences.map((item) => (
                <div
                  key={item.company}
                  className="group rounded-xl p-5 transition hover:bg-slate-900/80"
                >
                  <p className="text-sm text-slate-500">{item.date}</p>

                  <h3 className="mt-2 text-xl font-semibold text-white group-hover:text-teal-300">
                    {item.role} · {item.company}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {item.details}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section id="projects">
            <h2 className="mb-6 text-sm font-bold uppercase tracking-widest text-slate-400">
              Projects
            </h2>

            <div className="space-y-4">
              {projects.map((project) => (
                <div
                  key={project.title}
                  className="group rounded-xl border border-transparent p-5 transition hover:-translate-y-1 hover:border-slate-700 hover:bg-slate-900/80"
                >
                  <h3 className="text-xl font-semibold text-white group-hover:text-teal-300">
                    {project.title}
                  </h3>

                  <p className="mt-3 leading-7 text-slate-400">
                    {project.details}
                  </p>

                  <p className="mt-4 text-sm text-teal-300 opacity-0 transition group-hover:opacity-100">
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