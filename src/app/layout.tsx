import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import Navbar from '@/components/navbar';

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
        <Navbar />
        <div className='m-10'>
          {children}
        </div>
      </body>
    </html>
  );
}
