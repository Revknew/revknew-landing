export default function Home() {
  return (
    <main className="bg-gray-950 text-gray-100 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-gradient-to-br from-gray-900 via-gray-950 to-black">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-glow">
            Welcome to <span className="text-blue-500">Revknew</span>
          </h1>
          <p className="text-xl text-gray-400 mb-8">
            The future-proof platform to run your local service empire. Automate, grow, and win your market.
          </p>
          <a href="#" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition transform hover:scale-105">
            Get Early Access
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-glow">Platform Power</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            ["Unified CRM", "Capture and manage every lead, job, and client conversation in real time."],
            ["AI Follow-Ups", "Never lose a client again. Behavior-based automations close the loop for you."],
            ["Messaging Command Hub", "Text, email, and manage conversations from one secure dashboard."],
            ["Dynamic Scheduling", "Visual calendar with drag-and-drop assignments, time blocks, and team sync."],
            ["Instant Invoicing", "Create and send invoices in seconds. Get paid without the paperwork."],
            ["Live Performance Dashboard", "Revenue, pipeline, reviews — all tracked in one visual hub."]
          ].map(([title, desc], idx) => (
            <Feature key={idx} title={title} description={desc} />
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-tr from-blue-700 to-purple-800 text-white text-center px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-glow">Rewire Your Ops</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-100">
          All-in-one simplicity. No-code automation. A real competitive edge.
        </p>
        <a href="#" className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-200 transition shadow-lg transform hover:scale-105">
          Join the Beta →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Revknew. Crafted for the next generation.
      </footer>
    </main>
  );
}

function Feature({ title, description }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 backdrop-blur-sm bg-opacity-60">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
