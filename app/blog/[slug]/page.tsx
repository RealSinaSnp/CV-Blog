// /app/blog/[slug]/page.tsx

import { connectToDB } from '@/lib/mongodb';
import Post from "@/models/post.model";
import MarkdownViewer from "./MarkdownViewer";

import { getServerSession } from "next-auth"; // server-side session
import { authOptions } from "@/lib/authOptions";

type Props = {
  params: { slug: string };
};



export default async function PostPage({ params }: Props) {
  // Await the params prop
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  await connectToDB();
  const post = await Post.findOne({ slug });
  const session = await getServerSession(authOptions);

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

        {session?.user && (
          <div className="mt-4">
            <a href={`/blog/admin/${post.slug}`} 
              className="inline-block bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded">
              ✏️ Edit Post
            </a>
          </div>
        )}
      </div>
    </main>
  );
}
