import Link from 'next/link';
import { AiOutlineEdit } from 'react-icons/ai';

interface Props {
  accountId: string;
  authUserId: string;
  name: string;
  username: string;
  bio: string;
}

const ProfileHeader = ({ accountId, authUserId, name, username, bio }: Props) => {
  return (
    <div className='flex w-full flex-col justify-start m-10'>
      {/* <h1 className="text-white">Profile Header</h1> */}
      <div className='flex items-center justify-between'>
        <div className='flex items-center gap-3'>
          <div className='flex-1'>
            <h2 className='flex text-4xl font-bold text-white'>
              {name}
              <Link href='/profile/edit'>
                <div id='AiOutlineEdit' className='ml-4 mt-3 text-2xl'>
                  <AiOutlineEdit />
                </div>
              </Link>
            </h2>

            <p className='text-gray-300'>@{username}</p>
          </div>
        </div>
      </div>
      <p className='text-white mt-4 border border-solid border-gray-800 rounded'>
        {bio}
      </p>
    </div>
  );
};

export default ProfileHeader;
