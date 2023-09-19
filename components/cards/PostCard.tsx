import Link from 'next/link';

interface Props {
  id: string;
  currentUserId: string;
  parentId: string | null;
  content: string;
  author: { name: string; id: string };
  createdAt: string;
  comments: {
    author: {
      name: string;
    };
  }[];
  isComment?: boolean;
}

const PostCard = ({
  id,
  currentUserId,
  parentId,
  content,
  author,
  createdAt,
  comments,
}: Props) => {
  return (
    <article className='flex w-full flex-col rounded-xl bg-gray-800'>
      <div className='flex items-start justify-between'>
        <div className='flex w-full flex-1 flex-row gap-4'>
          <div>
            <Link href={`/profile/${author.id}`} className='w-fit'>
              <div className='cursor-pointer ml-5 pt-2'>
                <h4 className='font-bold text-xl text-white'>{author.name}</h4>
                <hr className='border-b-1 border-black mt-1 w-full' />
              </div>
            </Link>
          </div>
        </div>
      </div>

      <h2 className='text-white px-5 pb-3 pt-2'>{content}</h2>
    </article>
  );
};

export default PostCard;
