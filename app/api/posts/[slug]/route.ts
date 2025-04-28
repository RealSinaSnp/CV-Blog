import { connectToDB } from '@/lib/mongodb';
import Post from '@/models/post.model';
import { NextResponse } from 'next/server';

export async function DELETE(req: Request, { params }: { params: { slug: string } }) {
  await connectToDB();
  await Post.deleteOne({ slug: params.slug });
  return NextResponse.json({ message: "Deleted" });
}

export async function POST(req: Request, { params }: { params: { slug: string } }) {
  const formData = await req.formData();
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;

  await connectToDB();
  await Post.updateOne({ slug: params.slug }, { title, content });
  return NextResponse.json({ message: "Updated" });
}
