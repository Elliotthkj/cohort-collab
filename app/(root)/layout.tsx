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
      <html lang='en' className='min-h-screen h-full'>
        <body className={`${inter.className} h-full m-0 p-0 overflow-y-hidden`}>
          {/* <h1>Hello World!</h1> */}
          <Topbar />

          <main className='flex flex-row bg-black h-[calc(100%-64px)]'>
            <LeftSidebar />

            <section className='h-full'>
              <div className='w-full max-w-4x1 h-full'>{children}</div>
            </section>

            <RightSidebar />
          </main>

          <Bottombar />
        </body>
      </html>
    </ClerkProvider>
  );
}
