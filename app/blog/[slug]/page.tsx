// /app/blog/[slug]/page.tsx

import ReactMarkdown from "react-markdown";
import { connectToDB } from '@/lib/mongodb'; // Adjust path if needed
import Post from "@/models/post.model";
import remarkGfm from "remark-gfm"; // GitHub flavored markdown (tables, strikethrough, etc.)
import rehypeRaw from 'rehype-raw'
import rehypeHighlight from "rehype-highlight"; // Syntax highlighting for code blocks
import "highlight.js/styles/github-dark.css"; // You can pick another style too


type Props = {
  params: Promise<{ slug: string }>; // yes, a Promise
};




export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = await Post.findOne({ slug });

  if (!post) {
    return <div className="p-4 text-red-500">Post not found</div>;
  }

  return (
    <div className="bg-gray-800 prose prose-invert max-w-none p-8">
      <h1>{post.title}</h1>
      <p className="text-gray-400 text-sm">{new Date(post.createdAt).toLocaleString()}</p>
      <ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeHighlight]}>
        {post.content}
      </ReactMarkdown>
    </div>
  );
}