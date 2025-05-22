
export default function CallToAction() {
  return (
    <section id="waitlist" className="py-16 px-6 text-center bg-white">
      <h2 className="text-2xl font-bold mb-4">Be the first to know when we launch.</h2>
      <p className="mb-6 text-gray-700">No spam. No fluff. Just updates when it matters.</p>
      <form action="https://formspree.io/f/moqozvlj" method="POST" className="max-w-md mx-auto flex flex-col gap-4">
        <input type="email" name="email" required placeholder="Enter your email" className="p-3 border border-gray-300 rounded-lg"/>
        <button type="submit" className="bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition">Join Waitlist</button>
      </form>
    </section>
  )
}
