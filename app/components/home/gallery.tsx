import Image from "next/image"

export default function Gallery() {
  const slides = [
    {
      id: 1,
      imageSrc: "/home.jpeg",
      altText: "Slide 1 Image",
      title: "Ruang Tamu : Ruang Mengobrol",
      description:
        "Ruang paling ringan di rumah ini. Tempat bersenda gurau, menyapa, dan mengobrol tanpa tekanan.",
    },
    {
      id: 2,
      imageSrc: "/curhat.jpeg",
      altText: "Slide 3 Image",
      title: "Ruang Keluarga : Ruang Curhat dan Sentimental",
      description:
        "Tempat menaruh keresahan, berbagi luka atau sekedar menuliskan isi hati.",
    },
    {
      id: 3,
      imageSrc: "/typology.jpeg",
      altText: "Slide 2 Image",
      title: "Kamar #1 : Pembahasan Typology",
      description:
        "Jantung rumah kita. Disinlah diskusi teoritis dan praktis mengenai typology berlangsung.",
    },
    {
      id: 3,
      imageSrc: "/deepl.jpeg",
      altText: "Slide 4 Image",
      title: "Kamar #2 : Deep Talk & Pembahasan Berat",
      description:
        "Tempat berbincang mengenai Filsafat, Sains, Politik, Sosial, Budaya, dan topik berat lainnya.",
    },
    {
      id: 3,
      imageSrc: "/game.jpeg",
      altText: "Slide 5 Image",
      title: "Kamar #3 : Ruang Bermain dan Game",
      description:
        "Ruang paling seru di rumah ini. Tempat berbagi, berdiskusi, dan bersenang-senang dengan segala hal tentang game , dari yang santai sampai yang kompetitif.",
    },
  ]

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="bg-gradient-to-br from-stone-800/90 to-amber-900/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-amber-700/30">
        <div className="text-center mb-8">
          <h2 className="text-4xl md:text-5xl font-bold text-amber-200 mb-4">Galeri Komunitas</h2>
          <p className="text-amber-300 text-lg">Temukan keindahan interaksi komunitas kami</p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mt-6"></div>
        </div>

        <div className="overflow-x-auto">
          <div className="flex gap-6 snap-x snap-mandatory overflow-x-scroll scroll-smooth pb-4">
            {slides.map((slide) => (
              <div
                key={slide.id}
                className="min-w-[85%] md:min-w-[45%] lg:min-w-[32%] group/card hover:scale-105 transition-all duration-500 snap-start"
              >
                <div className="bg-gradient-to-br from-amber-800 to-stone-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-amber-700/30">
                  <div className="relative w-full h-48 md:h-56 lg:h-64 overflow-hidden">
                    <Image
                      src={slide.imageSrc || "/placeholder.svg"}
                      alt={slide.altText}
                      fill
                      className="object-cover group-hover/card:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-amber-200 mb-3">{slide.title}</h3>
                    <p className="text-amber-300 leading-relaxed">{slide.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
