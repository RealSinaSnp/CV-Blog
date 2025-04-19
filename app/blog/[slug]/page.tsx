// app/blog/[slug]/page.tsx

import { Metadata } from "next";
import ReactMarkdown from "react-markdown";
import { connectToDB } from "@/lib/mongodb";
import Post from "@/models/post.model";
import remarkGfm from "remark-gfm";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";

export const dynamic = "force-dynamic"; // 👈 Fixes weird Next.js param warnings

type Props = {
  params: {
    slug: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Post - ${params.slug}`,
  };
}

export default async function PostPage({ params }: Props) {
  await connectToDB();

  const post = await Post.findOne({ slug: params.slug });

  if (!post) {
    return <div className="p-4 text-red-500">Post not found</div>;
  }

  return (
    <div className="prose dark:prose-invert max-w-none p-8">
      <h1>{post.title}</h1>
      <p className="text-gray-400 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeHighlight]}
      >
        {post.content}
      </ReactMarkdown>
    </div>
  );
}
