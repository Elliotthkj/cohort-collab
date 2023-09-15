import Link from 'next/link';
import { BsChatRightQuote } from 'react-icons/bs';
import { BiLogOut } from 'react-icons/bi';
import { SignedIn, SignOutButton, OrganizationSwitcher } from '@clerk/nextjs';

function Topbar() {
  return (
    <nav className='topbar flex justify-between items-center bg-gray-300'>
      <Link href='/' className='flex items-center gap-4 m-2'>
        <div className='flex items-center ml-4'>
          <BsChatRightQuote />
          <p className='ml-2 font-bold text-2xl'>CohortCollab</p>
        </div>
      </Link>

      <div className='flex items-center gap-1 m-2'>
        <div className='block md:hidden'>
          <SignedIn>
            <SignOutButton>
              <div className='flex cursor-pointer'>
                <BiLogOut />
              </div>
            </SignOutButton>
          </SignedIn>
        </div>

        <OrganizationSwitcher
          appearance={{
            elements: {
              organizationSwitcherTrigger: 'py-2 px-4',
            },
          }}
        />
      </div>
    </nav>
  );
}

export default Topbar;
