import { client } from '../../tina/__generated__/client'
import Link from 'next/link'

export default async function BlogListPage() {
  const { data } = await client.queries.postConnection();

  return (
    <main className="container mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center mb-10">Blog Posts</h1>
      <div className="flex flex-col items-center gap-6">
        {data.postConnection.edges.map((post) => (
          <Link
            key={post.node.id}
            href={`/posts/${post.node._sys.filename}`}
            className="w-full max-w-xl bg-gradient-to-br from-stone-800/90 to-amber-900/90 border border-amber-700/30 rounded-2xl shadow-lg px-6 py-5 hover:scale-[1.02] transition-all"
          >
            <h2 className="text-2xl font-semibold text-amber-200 mb-1">{post.node.title}</h2>
            <span className="text-amber-400 text-sm">{post.node._sys.filename.replace('.md', '')}</span>
          </Link>
        ))}
      </div>
    </main>
  );
}