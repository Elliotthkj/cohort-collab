import SubmitPost from '@/components/forms/SubmitPost';
import { fetchUser } from '@/lib/actions/user.actions';
import { currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';

async function Page() {
  const user = await currentUser();
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  if (!userInfo?.onboarded) redirect('/onboarding');

  return (
    <>
      <h1 className='font-bold text-2xl text-white m-10'>Create Post</h1>

      <SubmitPost userId={userInfo._id} />
    </>
  );
}

export default Page;
