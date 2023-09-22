import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { fetchUser } from '@/lib/actions/user.actions';

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (userInfo?.onboarded) redirect('/');

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || '',
    bio: userInfo?.bio || '',
  };

  return (
    <main className='flex mx-auto max-w-3x1 flex-col justify-start px-10 py-20'>
      <h1 className='head-text text-white font-bold text-2xl'>Onboarding</h1>
      <p className='mt-3 text-white'>Profile Setup:</p>

      <section className='mt-9 p-10 bg-gray-800 rounded-lg'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </main>
  );
}

export default Page;
