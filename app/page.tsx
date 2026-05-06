export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center font-sans">
      <main className="max-w-4xl px-8">
        <h1 className="text-6xl font-bold mb-6">
          Hi, I'm Yousef
        </h1>

        <h2 className="text-2xl text-zinc-400 mb-8">
          Electrical Engineering Student @ UCSD
        </h2>

        <p className="text-lg text-zinc-300 leading-8 max-w-2xl mb-10">
          I am interested in machine learning, embedded systems,
          hardware design, and building engineering projects
          that combine circuits, software, and design.
        </p>

        <div className="flex gap-6">
          <a
            href="/experience"
            className="px-6 py-3 rounded-full bg-white text-black font-medium transition hover:scale-105 hover:bg-zinc-300"
          >
            Experience
          </a>

          <a
            href="#projects"
            className="px-6 py-3 rounded-full border border-zinc-600 transition hover:border-white hover:scale-105"
          >
            Projects
          </a>
        </div>

        <section id="projects" className="mt-24">
          <h2 className="text-4xl font-bold mb-8">
            My Projects
          </h2>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-2 hover:border-white">
              <div className="text-5xl mb-4">🚨</div>

              <h3 className="text-xl font-semibold mb-3">
                Fall Detection Device
              </h3>

              <p className="text-zinc-400">
                Built a wearable fall-detection system using ESP32
                and MPU6050 sensors.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-2 hover:border-white">
              <div className="text-5xl mb-4">🤖</div>

              <h3 className="text-xl font-semibold mb-3">
                Line Following Robot
              </h3>

              <p className="text-zinc-400">
                Designed and programmed a robot using sensors
                and motor control logic.
              </p>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:-translate-y-2 hover:border-white">
              <div className="text-5xl mb-4">🔬</div>

              <h3 className="text-xl font-semibold mb-3">
                Capacitor Research
              </h3>

              <p className="text-zinc-400">
                Created capacitor layouts and worked with
                Voltera printing at UCSD Armor Lab.
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}