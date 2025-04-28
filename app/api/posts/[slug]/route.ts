// @/app/api/posts/[slug]/route.ts

import { connectToDB } from '@/lib/mongodb';
import Post from '@/models/post.model';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
  await connectToDB();
  await Post.deleteOne({ slug: params.slug });
  return NextResponse.json({ message: "Deleted" });
}

export async function POST(req: Request, context: { params: { slug: string } }) {
  const formData = await req.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  // Access params from the context and await it
  const { params } = await context;

  await connectToDB();
  try {
    await Post.updateOne({ slug: params.slug }, { title, content });
  } catch (error) {
    console.warn("Caught and ignoring potential error:", error);
  }
  return NextResponse.json({ message: "Updated" });
}
