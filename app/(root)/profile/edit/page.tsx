import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

import { fetchUser } from '@/lib/actions/user.actions';
import AccountProfile from '@/components/forms/AccountProfile';

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  const userData = {
    id: user.id,
    objectId: userInfo?._id || '',
    username: userInfo ? userInfo?.username : user.username,
    name: userInfo ? userInfo?.name : user.firstName ?? '',
    bio: userInfo ? userInfo?.bio : '',
  };

  return (
    <div className='m-10'>
      <h1 className='text-4xl font-bold text-white'>Edit Profile</h1>

      <section className='mt-12'>
        <AccountProfile user={userData} btnTitle='Continue' />
      </section>
    </div>
  );
}

export default Page;
