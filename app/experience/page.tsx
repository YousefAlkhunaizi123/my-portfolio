export default function Experience() {
    return (
      <main className="min-h-screen bg-black text-white px-8 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="mb-14 text-6xl font-bold">
            Experience
          </h1>
  
          <div className="space-y-8">
  
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-2 hover:border-zinc-500">
              <h2 className="text-3xl font-semibold mb-2">
                Armor Lab at UCSD
              </h2>
  
              <p className="text-zinc-400 mb-6">
                Researcher • July 2024 – August 2024
              </p>
  
              <p className="leading-8 text-zinc-300">
                Worked on capacitor layouts, Voltera printing,
                troubleshooting fabrication processes, and sensor experiments.
              </p>
            </div>
  
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-2 hover:border-zinc-500">
              <h2 className="text-3xl font-semibold mb-2">
                Summer Engineering Institute
              </h2>
  
              <p className="text-zinc-400 mb-6">
                Work Study Participant • 2022 – 2024
              </p>
  
              <p className="leading-8 text-zinc-300">
                Gained experience with CAD, MATLAB, 3D printing,
                soldering, circuits, and engineering design tools.
              </p>
            </div>
  
            <div className="rounded-3xl border border-zinc-800 bg-zinc-950 p-8 transition hover:-translate-y-2 hover:border-zinc-500">
              <h2 className="text-3xl font-semibold mb-2">
                UCSD Projects & Research
              </h2>
  
              <p className="text-zinc-400 mb-6">
                Embedded Systems & Hardware Development
              </p>
  
              <p className="leading-8 text-zinc-300">
                Built engineering projects involving ESP32 systems,
                PCB design, embedded programming, and sensor integration.
              </p>
            </div>
  
          </div>
        </div>
      </main>
    );
  }