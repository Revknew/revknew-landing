'use client'

import { useState } from 'react'

export default function EmailCapture() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!email) return
    setSubmitted(true)
    // 🔒 Hook up to real backend or email service here
  }

  return (
    <section className="section bg-muted text-center rounded-2xl shadow-lg mx-4 sm:mx-8 my-16 max-w-2xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Stay in the loop</h2>
      <p className="text-gray-400 mb-6">We’ll email you when RevKnew opens up early access.</p>
      {!submitted ? (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-3 rounded-xl text-black w-full sm:w-auto focus-ring"
          />
          <button
            type="submit"
            className="btn-primary animate-glow"
          >
            Notify Me
          </button>
        </form>
      ) : (
        <p className="text-green-400 font-medium">You're on the list — we'll be in touch! ✅</p>
      )}
    </section>
  )
}
