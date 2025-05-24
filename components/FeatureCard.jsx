'use client'

export default function FeatureCard({ title, description }) {
  return (
    <div className="bg-muted border border-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-xl transition backdrop-blur-sm bg-opacity-80">
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  )
}
