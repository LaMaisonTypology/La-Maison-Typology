import HeaderBanner from "../components/header-banner"
import Link from "next/link"
import client from "../../tina/__generated__/client"
import { TinaMarkdown } from "tinacms/dist/rich-text"

export default async function BlogPage() {
  // Fetch all posts from TinaCMS
  const postsListData = await client.queries.postConnection({
    sort: "_sys.createdAt desc"
  })
  const posts = postsListData.data.postConnection.edges || []

  return (
    <div className="min-h-screen">
      <HeaderBanner
        title="Our Blog"
        subtitle="Insights & Discussions"
        imagePath="/mansion-header.png"
        height="min-h-[40vh]"
      />

      <main className="container mx-auto px-6 py-16 -mt-10 relative z-10">
        <div className="bg-gradient-to-br from-stone-900/95 to-amber-950/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-800/30">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mb-4">Blog Posts</h2>
            <p className="text-lg text-amber-300 leading-relaxed max-w-3xl mx-auto">
              Temukan artikel terbaru seputar typology dan komunitas La Maison.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.length === 0 && (
              <div className="col-span-full text-center text-amber-300">Belum ada postingan.</div>
            )}
            {posts.map((edge) => (
              <Link
                key={edge?.node?._sys.filename}
                href={`/blog/${edge?.node?._sys.filename}`}
                className="block bg-gradient-to-br from-amber-800/80 to-stone-900/80 rounded-2xl shadow-lg hover:shadow-2xl border border-amber-700/30 p-6 transition-all hover:scale-105"
              >
                <h3 className="text-2xl font-bold text-amber-100 mb-2">{edge?.node?.title}</h3>
                <div className="prose prose-invert text-amber-300 line-clamp-3">
                  <TinaMarkdown content={edge?.node?.body} />
                </div>
                <span className="inline-block mt-4 text-amber-400 hover:text-amber-200 font-semibold">Baca Selengkapnya →</span>
              </Link>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}
