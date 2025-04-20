type Post = {
  title: string;
  slug: string;
  createdAt: string | Date;
};


export default function PostCard({ post }: {post:Post}) {
    return (
      <div className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-md space-y-2">
        <a href={`/blog/${post.slug}`} className="text-2xl font-bold text-teal-500 hover:underline">
          {post.title}
        </a>
        <p className="text-sm text-gray-500">{new Date(post.createdAt).toLocaleString()}</p>
      </div>
    );
  }
  