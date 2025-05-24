import '../styles/globals.css';
import { Sora } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const sora = Sora({ subsets: ['latin'], weight: ['400', '600', '700'] });

export const metadata = {
  title: 'RevKnew',
  description: 'CRM + Automation + Reviews for local service pros',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark">
      <body className={`${sora.className} animated-bg text-white`}>
        <Navbar />
        <main className="flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 2xl:px-48">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
