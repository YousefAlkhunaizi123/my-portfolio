export default function Home() {
  const projects = [
    {
      icon: "⚡",
      title: "Fall Detection Device",
      description:
        "A wearable system using ESP32 and MPU6050 sensors to detect abnormal movement and possible falls.",
    },
    {
      icon: "🤖",
      title: "Line-Following Robot",
      description:
        "A robot designed with sensors, motor control logic, and a 3D-printed chassis for stable line tracking.",
    },
    {
      icon: "🔬",
      title: "Capacitor Research",
      description:
        "Comb-shaped capacitor layouts designed and printed using the Voltera printer at UCSD Armor Lab.",
    },
  ];

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <nav className="fixed top-0 left-0 w-full border-b border-zinc-900 bg-black/70 backdrop-blur-xl">
  <div className="mx-auto flex max-w-6xl items-center justify-between px-8 py-5">
    
    <h1 className="text-lg font-semibold tracking-wide">
      Yousef
    </h1>

    <div className="flex gap-8 text-sm text-zinc-400">
      <a href="#projects" className="hover:text-white transition">
        Projects
      </a>

      <a href="/experience" className="hover:text-white transition">
        Experience
      </a>

      <a
        href="mailto:yalkhunaizi@ucsd.edu"
        className="hover:text-white transition"
      >
        Contact
      </a>
    </div>
  </div>
</nav>
      <section className="mx-auto flex min-h-screen max-w-6xl flex-col justify-center px-8 py-20">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-zinc-500">
          Portfolio
        </p>

        <h1 className="max-w-4xl text-6xl font-bold tracking-tight md:text-7xl">
          Hi, I’m Yousef Alkhunaizi.
        </h1>

        <p className="mt-6 max-w-2xl text-2xl text-zinc-400">
          Electrical Engineering student at UCSD interested in embedded systems,
          hardware design, and machine learning.
        </p>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href="#projects"
            className="rounded-full bg-white px-7 py-3 font-medium text-black transition hover:-translate-y-1 hover:bg-zinc-200"
          >
            View Projects
          </a>

          <a
            href="/experience"
            className="rounded-full border border-zinc-700 px-7 py-3 font-medium text-white transition hover:-translate-y-1 hover:border-white"
          >
            Experience
          </a>
        </div>
      </section>

      <section id="projects" className="mx-auto max-w-6xl px-8 pb-28">
        <div className="mb-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-zinc-500">
            Selected Work
          </p>

          <h2 className="text-4xl font-bold">Projects</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.title}
              className="group rounded-3xl border border-zinc-800 bg-zinc-950 p-7 transition duration-300 hover:-translate-y-2 hover:border-zinc-500 hover:bg-zinc-900"
            >
              <div className="mb-8 text-4xl transition duration-300 group-hover:scale-110">
                {project.icon}
              </div>

              <h3 className="mb-4 text-2xl font-semibold">
                {project.title}
              </h3>

              <p className="leading-7 text-zinc-400">
                {project.description}
              </p>

              <p className="mt-8 text-sm text-zinc-500 opacity-0 transition duration-300 group-hover:opacity-100">
                Hover interaction: card lifts, icon grows, and details become emphasized.
              </p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}