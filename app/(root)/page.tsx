import PostCard from '@/components/cards/PostCard';
import { fetchPosts } from '@/lib/actions/post.actions';
import { UserButton, currentUser } from '@clerk/nextjs';

export default async function Home() {
  const result = await fetchPosts(1, 30);
  const user = await currentUser();

  // console.log(result);

  return (
    <div className='flex flex-col min-h-screen w-full'>
      <h1 className='font-bold text-2xl text-white m-10 w-full'>Home/Posts</h1>

      <section className='flex-grow ml-60 flex flex-col justify-start items-center gap-10'>
        {result.posts.length === 0 ? (
          <p>No Posts</p>
        ) : (
          <>
            {result.posts.map((post) => (
              <PostCard
                key={post._id}
                id={post._id}
                currentUserId={user?.id || ''}
                parentId={post.parentId}
                content={post.text}
                author={post.author}
                createdAt={post.createdAt}
                comments={post.children}
              />
            ))}
          </>
        )}
      </section>
    </div>
  );
}
