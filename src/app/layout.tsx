import type { Metadata } from 'next';

import './globals.css';
import { inter } from '@/libs/configs/fonts';
export const metadata: Metadata = {
  title: 'Aung Chan Oo',
  description: `Aung Chan Oo's developer portfolio`,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-black text-white`}>
        {children}
      </body>
    </html>
  );
}
