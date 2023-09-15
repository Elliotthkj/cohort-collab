import '../globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';

import Topbar from '@/components/shared/Topbar';
import LeftSidebar from '@/components/shared/LeftSidebar';
import RightSidebar from '@/components/shared/RightSidebar';
import Bottombar from '@/components/shared/Bottombar';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'CohortCollab | Home',
  description: 'Milestone 3 MERN project for UNLV bootcamp w/ Nextjs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={inter.className}>
          {/* <h1>Hello World!</h1> */}
          <Topbar />

          <main>
            <LeftSidebar />

            <section className='main-container'>
              <div className='w-full max-w-4x1'>
                {children}
              </div>
            </section>

            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
