import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/globals.css';
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { Analytics } from '@vercel/analytics/next';

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
          <div className='fixed top-0'>
            <canvas className='h-screen w-screen animated-background' />
          </div>

          <div style={{ position: 'relative', zIndex: 0 }}>
            <Navbar />

            <div className='mx-20 mt-12 h-svh'>
              {children}
              <SpeedInsights />
              <Analytics />
            </div>

            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
