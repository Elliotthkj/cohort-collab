import AccountProfile from '@/components/forms/AccountProfile';
import { currentUser } from '@clerk/nextjs';
import { userInfo } from 'os';

async function Page() {
  const user = await currentUser();

  const userData = {
    id: user?.id,
    objectId: userInfo?._id,
    username: userInfo?.username || user?.username,
    name: userInfo?.name || user?.firstName || '',
    bio: userInfo?.bio || '',
    image: userInfo?.image || user?.imageUrl,
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
