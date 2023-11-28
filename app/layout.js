import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Engineers & Contractors',
  description: 'Make by Company Engineers & Contractors',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: 'smooth' }}>
      <body className={inter.className} style={{ scrollBehavior: 'smooth' }}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
