type Post = {
  title: string;
  slug: string;
  createdAt: string | Date;
  imageUrl?: string; // Add this to your DB later!
};

export default function PostCard({ post }: { post: Post }) {
  const formattedDate = new Date(post.createdAt).toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return (
    <a href={`/blog/${post.slug}`} className="block rounded-2xl overflow-hidden shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 bg-gray-900">
      {post.imageUrl && (
        <img src={post.imageUrl || "/public/img/postPlaceholder.jpg"} 
          alt={post.title} className="w-full h-64 object-cover  rounded-t-2xl transition-transform duration-300 group-hover:scale-105"/>
      )}
      <div className="p-6 space-y-2">
        <h3 className="text-2xl font-bold text-teal-400">
          {post.title}
        </h3>
        <p className="text-sm text-gray-400">{formattedDate}</p>
      </div>
    </a>
  );
}
