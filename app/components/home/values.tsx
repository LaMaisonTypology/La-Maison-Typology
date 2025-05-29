export default function Values() {
  const values = [
    {
      title: "Keteraturan Beretika",
      description:
        "Kami mengutamakan keteraturan dan etika. Admin aktif menjaga suasana tertib, etis, dan relevan demi lingkungan yang aman dan nyaman.",
    },
    {
      title: "Ruang Belajar Inklusif",
      description:
        "La Maison Typology adalah ruang belajar inklusif bagi semua tingkatan, di mana anggota saling berbagi dan menghargai untuk tumbuh bersama.",
    },
    {
      title: "Diskusi Bermakna",
      description:
        "Kami mendorong diskusi relevan dan bermakna untuk pertukaran ide berbobot, membantu anggota belajar dan memahami tipologi lebih dalam.",
    },
    {
      title: "Kehangatan Terstruktur",
      description: "Meski terstruktur, kami mengedepankan kehangatan dan interaksi santai. Ini menciptakan ekosistem yang rapi, hangat, dan aman untuk pertumbuhan bersama.",
    },
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-4">Nilai Inti Kami</h2>
        <p className="text-xl text-amber-300 max-w-3xl mx-auto">
          Prinsip-prinsip yang memandu komunitas kami dan membentuk pendekatan kami terhadap tipologi
        </p>
        <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mt-6"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((value, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-stone-800/90 to-amber-900/90 backdrop-blur-sm p-8 rounded-2xl border border-amber-700/30 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <h3 className="text-2xl font-bold text-amber-200 mb-4">{value.title}</h3>
            <div className="w-12 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mb-4"></div>
            <p className="text-amber-300">{value.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
