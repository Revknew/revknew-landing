export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-2xl text-center">
        <h1 className="text-5xl font-extrabold text-gray-800 mb-4">
          Welcome to <span className="text-blue-600">Revknew</span> 🚀
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          CRM + Reviews + Automation built for local service pros who don't have time to babysit software.
        </p>
        <a
          href="#"
          className="inline-block bg-blue-600 text-white text-lg font-medium px-6 py-3 rounded-xl hover:bg-blue-700 transition"
        >
          Join the Waitlist
        </a>
      </div>
    </main>
  )
}
