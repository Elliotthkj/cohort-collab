'use server';

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

export async function fetchPosts(pageNumber = 1, pageSize = 20) {
  connectToDB();

  const skipAmount = (pageNumber - 1) * pageSize;

  const postsQuery = Post.find({ parentId: { $in: [null, undefined] } })
    .sort({ createdAt: 'desc' })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({ path: 'author', model: User })
    .populate({
      path: 'children',
      populate: {
        path: 'author',
        model: User,
        select: '_id name parentId',
      },
    });

  const totalPostsCount = await Post.countDocuments({
    parentId: { $in: [null, undefined] },
  });

  const posts = await postsQuery.exec();

  const isNext = totalPostsCount > skipAmount + posts.length;

  return { posts, isNext };
}
