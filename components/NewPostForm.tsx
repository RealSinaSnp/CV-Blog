'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function NewPostForm() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const router = useRouter();

  const createPost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const slug = title.toLowerCase().replace(/\s+/g, "-");
    const res = await fetch("/api/posts", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, content, slug }),
    });
    if (res.ok) router.push("/blog");
    else alert("Failed to create post.");
  };

  return (
    <form onSubmit={createPost} className="p-8 space-y-4">
      <input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" className="w-full border p-2" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content" className="w-full border p-2 h-40" />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2">Create</button>
    </form>
  );
}
