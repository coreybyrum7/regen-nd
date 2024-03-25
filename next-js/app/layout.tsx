import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './layout.scss'
import { Providers } from '@/lib/providers';

export const metadata: Metadata = {
  title: "Regen Network Development",
  description: "Data Streaming Full-Stack Code Challenge",
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={inter.className}>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
