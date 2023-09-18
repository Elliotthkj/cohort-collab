'use client';

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { usePathname, useRouter } from 'next/navigation';
import { Textarea } from '../ui/textarea';

// import { updateUser } from '@/lib/actions/user.actions';
import { PostValidation } from '@/lib/validations/post';
import { create } from 'domain';
import { createPost } from '@/lib/actions/post.actions';

interface Props {
  user: {
    id: string;
    objectId: string;
    username: string;
    name: string;
    bio: string;
    image: string;
  };
  btnTitle: string;
}

function SubmitPost({ userId }: { userId: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const form = useForm({
    resolver: zodResolver(PostValidation),
    defaultValues: {
      post: '',
      accountId: userId,
    },
  });

  const onSubmit = async (values: z.infer<typeof PostValidation>) => {
    await createPost({
      text: values.post,
      author: userId,
      path: pathname,
    });

    router.push('/')
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8 m-10'>
        <FormField
          control={form.control}
          name='post'
          render={({ field }) => (
            <FormItem className='flex flex-col w-full'>
              <FormLabel>Content</FormLabel>
              <FormControl className='no-focus border border-grey-700 bg-gray-900 text-white'>
                <Textarea rows={10} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit' className='bg-green-600'>
          Submit Post
        </Button>
      </form>
    </Form>
  );
}

export default SubmitPost;
