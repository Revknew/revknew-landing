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
            The future-proof platform to run your local service empire. Automate, grow, and win your market with zero tech bloat.
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg shadow-lg transition transform hover:scale-105"
          >
            Request Early Access
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 text-white drop-shadow-glow">
          Everything You Need to Scale
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Feature title="Unified CRM" description="Capture and manage every lead, job, and client interaction in real time — simple, fast, and mobile-first." />
          <Feature title="AI Follow-Ups" description="Trigger personalized texts or emails based on behavior. Never lose a lead or review again." />
          <Feature title="Multi-Channel Inbox" description="Text, email, and manage client communication from one secure hub. Searchable, synced, and owned by you." />
          <Feature title="Drag & Drop Scheduling" description="Dispatch jobs, block off hours, and manage your team's calendar without chaos." />
          <Feature title="Fast Invoicing" description="Send branded estimates and invoices in seconds. Get paid faster with auto-reminders." />
          <Feature title="Live Performance Dashboard" description="Know your revenue, close rate, review volume, and pipeline — all in one visual dashboard." />
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-tr from-blue-700 to-purple-800 text-white text-center px-6 py-24">
        <h2 className="text-4xl font-extrabold mb-4 drop-shadow-glow">
          Ready to Leave the Old Stack Behind?
        </h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto text-gray-100">
          Revknew is the ops layer built for real operators. No spreadsheets. No Zapier duct tape. Just scale.
        </p>
        <a
          href="#"
          className="bg-white text-blue-700 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-200 transition shadow-lg transform hover:scale-105"
        >
          Join the Private Beta →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-center py-6 text-sm text-gray-500">
        © {new Date().getFullYear()} Revknew. Built for the bold.
      </footer>
    </main>
  );
}

// Feature Card Component
function Feature({ title, description }) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 shadow-md hover:shadow-xl transition duration-300 backdrop-blur-sm bg-opacity-60">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
}
