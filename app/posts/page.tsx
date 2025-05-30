import { client } from '../../tina/__generated__/client'
import Link from 'next/link'
import HeaderBanner from '../components/header-banner'

export default async function BlogListPage() {
  const { data } = await client.queries.postConnection();
  // Filter duplikat berdasarkan id filename
  const posts = (data.postConnection.edges || [])
    .filter((post, idx, arr) =>
      post?.node?._sys?.filename &&
      arr.findIndex(p => p?.node?._sys?.filename === post?.node?._sys?.filename) === idx
    );

  return (
    <div className="min-h-screen">
      <HeaderBanner
        title="Postingan"
        imagePath="/mansion-header.png"
        height="min-h-[40vh]"
      />
      <section className="mt-10 mb-6 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length === 0 ? (
            <div className="col-span-full text-center text-amber-400 text-lg">Belum ada postingan.</div>
          ) : (
            posts.map((post) => (
              post?.node && (
                <Link
                  key={post.node.id}
                  href={`/posts/${post.node._sys.filename}`}
                  className="flex flex-col h-full bg-gradient-to-br from-stone-800/90 to-amber-900/90 border border-amber-700/30 rounded-2xl shadow-lg hover:shadow-2xl px-8 py-6 hover:scale-[1.03] transition-all group"
                >
                  <h2 className="text-2xl font-bold text-amber-100 mb-2 group-hover:text-amber-300 transition-colors line-clamp-2">{post.node.title}</h2>
                  <div className="flex-1 text-amber-300 mb-4 line-clamp-3">
                    {/* Optionally show excerpt or first lines of body here if available */}
                  </div>
                  <div className="flex items-center justify-between text-sm text-amber-400 mt-auto">
                    <span>Slug: {post.node._sys.filename.replace('.md', '')}</span>
                    {post.node.author && <span className="italic">by {post.node.author}</span>}
                  </div>
                </Link>
              )
            ))
          )}
        </div>
      </section>
    </div>
  );
}