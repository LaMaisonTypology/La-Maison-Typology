"use client"

interface Member {
  id: number
  name: string
  type: string
  joinDate: string
  status: "Active" | "Inactive" | "Pending"
}

export default function MembersSummary() {

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="bg-gradient-to-br from-stone-900/90 to-amber-900/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-amber-700/30 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mb-2">Member Komunitas</h2>
        <p className="text-amber-300 mb-6"> </p>
        
        <div className="bg-stone-800/60 border border-amber-700/30 rounded-2xl p-6 text-center">
          <p className="text-xl md:text-2xl font-semibold text-amber-100">
            Total Members: <span className="text-amber-400">107</span>
          </p>
        </div>
      </div>
    </section>
  )
}
