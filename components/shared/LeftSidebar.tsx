'use client'

import { sidebarLinks } from '@/constants';
import Link from 'next/link';
import { SignedIn, SignOutButton } from '@clerk/nextjs';
import { BiLogOut } from 'react-icons/bi';
import { useRouter } from 'next/navigation';

function LeftSidebar() {
  const router = useRouter();

  return (
    <section className='h-full'>
      <div
        id='leftgreybox'
        className='relative flex w-60 flex-1 flex-col gap-6 px-6 bg-gray-400 pt-4 h-full'
      >
        {sidebarLinks.map((link) => (
          <Link
            href={link.route}
            key={link.label}
            className='flex items-center'
          >
            <p className='mr-2'>{link.icon}</p>
            <p className='text-slate-950 max-lg:hidden'>{link.label}</p>
          </Link>
        ))}
        <div className='mt-auto mb-4 px-6'>
          <SignedIn>
            <SignOutButton signOutCallback={() => router.push('/sign-in')}>
              <div className='flex cursor-pointer items-center'>
                <BiLogOut />
                <p className='pl-2 max-lg:hidden'>Logout</p>
              </div>
            </SignOutButton>
          </SignedIn>
        </div>
      </div>
    </section>
  );
}

export default LeftSidebar;
