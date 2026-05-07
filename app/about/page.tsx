export default function About() {
    return (
      <main className="min-h-screen bg-slate-950 text-slate-200 px-8 py-20">
        <div className="mx-auto max-w-4xl">
          <a href="/" className="text-teal-300 hover:underline">
            ← Back Home
          </a>
  
          <h1 className="mt-10 text-5xl font-bold text-white">About Me</h1>
  
          <p className="mt-6 leading-8 text-slate-400">
            I am Yousef Alkhunaizi, an Electrical Engineering student at UCSD.
            I am interested in embedded systems, hardware design, machine learning,
            and engineering projects that connect circuits, software, and real-world
            problem solving.
          </p>
  
          <p className="mt-6 leading-8 text-slate-400">
            This portfolio was built using Next.js. I used route-generated pages,
            including a homepage, an experience page, and this about page.
          </p>
        </div>
      </main>
    );
  }