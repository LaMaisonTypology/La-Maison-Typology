import HeaderBanner from "../components/header-banner"

export default function BlogPage() {
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
            <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mb-4">Coming Soon</h2>
            <p className="text-lg text-amber-300 leading-relaxed max-w-3xl mx-auto">
              Our blog is currently under development. We are preparing thoughtful articles and discussions about
              personality typology. Please check back soon for updates.
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <div className="bg-gradient-to-r from-amber-800 to-amber-900 text-amber-100 px-8 py-4 rounded-full text-lg font-semibold shadow-xl border border-amber-700/30 inline-block">
              Stay Tuned
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
