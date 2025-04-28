import { connectToDB } from '@/lib/mongodb';
import Post from '@/models/post.model';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/authOptions';

type Props = {
  params: { slug: string };
};

export default async function AdminEditPage({ params }: Props) {
  const session = await getServerSession(authOptions);

  if (!session?.user) {
    return <div className="p-4 text-red-500">Unauthorized</div>;
  }

  await connectToDB();
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  const post = await Post.findOne({ slug });

  if (!post) {
    return <div className="p-4 text-red-500">Post not found</div>;
  }

  return (
    <form className="flex flex-col gap-4 p-8"
      action={`/api/posts/${post.slug}`}
      method="POST"
    >
      <input name="title" defaultValue={post.title} className="input input-bordered" />
      <textarea name="content" defaultValue={post.content} className="textarea textarea-bordered h-96" />
      <button type="submit" className="btn btn-primary">Save Changes</button>
    </form>
  );
}
