import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/globals.css';
import Navbar from '@/components/navbar';
import Link from 'next/link';
import GradientMesh from '@/components/gradient';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Filippo Battaglin',
  description: 'Portfolio personale di Filippo Battaglin',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <head>
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>

      <body className={inter.className}>
        <div style={{ position: 'relative' }}>
          <GradientMesh />

          <div style={{ position: 'relative', zIndex: 0 }}>
            <Navbar />

            <div className='m-10 h-screen'>
              {children}
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
