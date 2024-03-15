import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './layout.scss'

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
      <body>{children}</body>
    </html>
  );
}