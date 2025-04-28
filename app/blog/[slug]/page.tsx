// /app/blog/[slug]/page.tsx

import { connectToDB } from '@/lib/mongodb';
import Post from "@/models/post.model";
import MarkdownViewer from "./MarkdownViewer";

type Props = {
  params: { slug: string };
};

export default async function PostPage({ params }: Props) {
  const { slug } = params;
  await connectToDB();
  const post = await Post.findOne({ slug });

  if (!post) {
    return <div className="p-4 text-red-500">Post not found</div>;
  }

  return (
    <main className="px-6 md:px-20 py-10 bg-[#222] min-h-screen">
    <div className="prose prose-invert max-w-none p-8">
      <h1>{post.title}</h1>
      <p className="text-gray-400 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
      {post.content ? (
        <MarkdownViewer content={post.content} />
      ) : (
        <p>No content available.</p>
      )}
    </div>
    </main>
  );
}
