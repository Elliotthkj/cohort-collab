import { ClerkProvider } from '@clerk/nextjs';
import { Inter } from 'next/font/google';
import '../globals.css';

export const metadata = {
  title: 'CohortCollab | Authentication',
  description: 'Milestone 3 MERN project for UNLV bootcamp w/ Nextjs',
};

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-black h-full`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
