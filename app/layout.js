import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Engineers & Contractors',
  description: 'Make by Company Engineers & Contractors',
  openGraph: {
    title: 'Engineers & Contractors',
    description: 'Make by Company Engineers & Contractors',
    images: 'https://www.usnews.com/object/image/00000184-0b98-d844-a5ac-bbbf25520000/gettyimages-1352673708.jpg'
  }
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
