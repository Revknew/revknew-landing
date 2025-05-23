export default function Home() {
  return (
    <main className="bg-white text-gray-900">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-6 py-24 bg-gray-100">
        <div className="text-center max-w-3xl">
          <h1 className="text-5xl font-extrabold leading-tight mb-6">
            The Operating System for Local Service Businesses
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Revknew helps high-performing service companies streamline operations, improve client communication,
            and scale with confidence — all from a single, intuitive platform.
          </p>
          <a
            href="#"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-medium text-lg inline-block"
          >
            Request Early Access
          </a>
        </div>
      </section>

      {/* Problem & Why Section */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">You're Not Just Running Jobs — You're Running a Company</h2>
        <p className="text-lg text-gray-700">
          Most CRMs are bloated, outdated, or designed for industries that don't think like you do. If you're managing
          scheduling, estimates, reviews, client communication, and follow-ups in five different tools — Revknew replaces all of that.
          It's designed for trades, home services, contractors, and high-output operators who care about growth without chaos.
        </p>
      </section>

      {/* Features Section */}
      <section className="bg-gray-50 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Everything You Need — Nothing You Don’t</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Feature
              title="Unified CRM"
              description="Capture leads, manage clients, assign jobs, and track every conversation — all in one place."
            />
            <Feature
              title="Automated Review Engine"
              description="Request reviews at the perfect moment via text or email. Watch your reputation grow — hands-free."
            />
            <Feature
              title="Workflow Automations"
              description="Trigger actions based on job status, missed calls, form fills, or anything else. Automate follow-ups and free your time."
            />
            <Feature
              title="Smart Scheduling"
              description="Schedule and dispatch without back-and-forth. Sync calendars, block availability, and keep the team on track."
            />
            <Feature
              title="Instant Invoicing & Payments"
              description="Send branded invoices, accept payments online, and track status in real-time. Never chase a check again."
            />
            <Feature
              title="Centralized Messaging"
              description="Text, email, and call clients from a single inbox. Every message is logged, searchable, and owned by your business."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white text-center px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-4">Built for Owners Who Don't Have Time to Babysit Software</h2>
        <p className="text-lg mb-6 max-w-2xl mx-auto">
          Revknew gives you the structure of an enterprise platform with the speed of a solo operator.
          If you're serious about growing a modern service company, this is your unfair advantage.
        </p>
        <a
          href="#"
          className="bg-white text-blue-600 px-6 py-3 rounded-xl font-semibold text-lg hover:bg-gray-100 transition"
        >
          Join the Private Beta
        </a>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 text-center py-8 text-sm text-gray-500">
        © {new Date().getFullYear()} Revknew. All rights reserved.
      </footer>
    </main>
  )
}

// Feature Card Component
function Feature({ title, description }) {
  return (
    <div className="bg-white rounded-lg shadow p-6 text-left">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}
