import PostCard from "@/components/PostCard";

const BlogPage = async () => {
  let posts = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/posts`, { cache: "no-store" });
    if (!res.ok) throw new Error("Failed to fetch posts");
    posts = await res.json();
  } catch (error) {
    console.error("Error loading posts:", error);
  }

  return (
    <main className="px-6 md:px-20 py-10 bg-gray-50 dark:bg-black min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-10 text-indigo-600 dark:text-indigo-400">
          My Brain Dumps
        </h1>
        {posts.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400">No blog posts yet. Get to writing, genius.</p>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <PostCard key={post._id} post={post} />
            ))}
          </div>
        )}
      </div>
    </main>
  );
};

export default BlogPage;