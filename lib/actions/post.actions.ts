'use server'

import { revalidatePath } from 'next/cache';
import Post from '../models/post.model';
import User from '../models/user.model';
import { connectToDB } from '../mongoose';

interface Params {
  text: string;
  author: string;
  path: string;
}

export async function createPost({ text, author, path }: Params) {
  try {
    connectToDB();

    const createdPost = await Post.create({
      text,
      author,
      path,
    });

    await User.findByIdAndUpdate(author, {
      $push: { posts: createdPost._id },
    });
  } catch (error: any) {
    throw new Error(`Error creating post: ${error.message}`);
  }

  revalidatePath(path);
}
