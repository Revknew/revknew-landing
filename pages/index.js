export default function Home() {
  return (
    <main className="bg-white text-gray-900 font-sans">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight mb-6 text-gray-900">
            The Operating System for Local Service Businesses
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Revknew streamlines operations, improves communication, and gives service pros a serious advantage — without tech bloat.
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg inline-block shadow transition"
          >
            Request Early Access
          </a>
        </div>
      </section>

      {/* Why Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Built for Trades, Techs, and Service Teams</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Juggling five tools to run your business? Stop. Revknew combines CRM, reviews, messaging, scheduling, and automation in one place.
          No more switching tabs. No more duct tape. Just control, speed, and growth.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-white px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Platform Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Feature title="Smart CRM" description="Track leads, clients, and jobs from inquiry to invoice — simple, visual, mobile-first." />
            <Feature title="Auto Review Requests" description="Get more 5-star reviews on autopilot via text or email. Fully branded, fully automated." />
            <Feature title="Workflow Automations" description="Trigger reminders, follow-ups, and internal actions based on client behavior." />
            <Feature title="Messaging Hub" description="Text, email, and manage client comms from one unified inbox — searchable, synced, secure." />
            <Feature title="Simple Scheduling" description="Book jobs, send confirmations, block time, and keep your calendar in sync." />
            <Feature title="Invoicing & Payments" description="Send branded invoices, take credit cards, and track payments in real-time." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-4">Ready to Run Smarter?</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Revknew helps you scale your service business without the chaos. If you're serious about growth, let's go.
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-100 shadow transition"
        >
          Join the Private Beta →
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Revknew. All rights reserved.
      </footer>
    </main>
  )
}

function Feature({ title, description }) {
  return (
    <div className="bg-gray-50 rounded-xl shadow-sm p-6 border border-gray-200 transition hover:shadow-md">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600 text-base">{description}</p>
    </div>
  )
}
