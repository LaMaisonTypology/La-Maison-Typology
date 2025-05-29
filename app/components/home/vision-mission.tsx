export default function VisionMission() {
  return (
    <section className="container mx-auto px-6 py-16">
      <div className="bg-gradient-to-br from-stone-900/90 to-amber-900/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-amber-700/30">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-4">Visi dan Misi Kami</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gradient-to-br from-stone-800/70 to-amber-900/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-700/20 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-2 h-12 bg-gradient-to-b from-amber-500 to-amber-700 rounded-full mr-4"></div>
              <h3 className="text-3xl font-bold text-amber-200">Visi</h3>
            </div>
            <p className="text-lg text-amber-300 leading-relaxed">
              Visi komunitas La Maison Typology yaitu menjadi komunitas typology yang hidup dan aktif, yang mengedepankan etika, keteraturan, serta menjadi ruang belajar dan bertumbuh bersama dalam memahami typology secara mendalam.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-900/70 to-stone-800/70 backdrop-blur-sm p-8 rounded-2xl border border-amber-700/20 shadow-lg">
            <div className="flex items-center mb-6">
              <div className="w-2 h-12 bg-gradient-to-b from-amber-600 to-amber-800 rounded-full mr-4"></div>
              <h3 className="text-3xl font-bold text-amber-200">Misi</h3>
            </div>
            <p className="text-lg text-amber-300 leading-relaxed mb-6">
              Misi komunitas La Maison Typology yaitu, sebagai berikut:
            </p>
            <ul className="space-y-3 text-amber-300">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg">Menjaga suasana komunitas tetap kondusif dan tertib melalui arahan admin serta aturan yang ditegakkan dengan konsisten.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg">Mengedepankan diskusi yang relevan, bermakna, dan beretika, baik dalam obrolan ringan maupun pembahasan mendalam.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg">Menyediakan ruang belajar typology bagi semua tingkatan—baik pemula maupun yang sudah berpengalaman—dengan semangat saling berbagi dan menghargai.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg">Menciptakan ekosistem komunitas yang rapi namun tetap hangat, agar semua anggota merasa aman, dihargai, dan bisa bertumbuh bersama.</span>
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-amber-500 rounded-full mt-3 mr-4 flex-shrink-0"></span>
                <span className="text-lg">Mendorong keaktifan anggota yang sejalan dengan tujuan komunitas, tanpa mengorbankan kualitas demi kuantitas.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}