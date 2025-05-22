
import Head from 'next/head'
import Hero from '../components/Hero'
import Features from '../components/Features'
import CallToAction from '../components/CallToAction'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="bg-white text-gray-900">
      <Head>
        <title>Revknew</title>
        <meta name="description" content="CRM, Reviews, and Automation for Local Service Businesses" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
      <Features />
      <CallToAction />
      <Footer />
    </div>
  )
}
