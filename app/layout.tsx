import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import Navbar from './components/navbar/Navbar';
import LoginModal from './components/modals/LoginModal';
import SignupModal from './components/modals/SignupModal';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'airbnb-clone',
  description: 'airbnb-clone-description',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />

        <div className="pt-32">{children}</div>

        <LoginModal />
        <SignupModal />
      </body>
    </html>
  );
}
