import HeaderBanner from "./components/header-banner"
import VisionMission from "./components/home/vision-mission"
import Values from "./components/home/values"
import Gallery from "./components/home/gallery"

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeaderBanner
        title="La Maison"
        subtitle="Typology"
        imagePath="/mansion-header.png"
        description="lorem ipsum dolor sit amet, consectetur adipiscing elit."
        height="min-h-[40vh]"
      />

      <main className="relative z-10 -mt-20">
        <section className="container mx-auto px-8 mb-6">
          <div className="bg-gradient-to-br from-stone-900/95 to-amber-950/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8 md:p-12 border border-amber-800/30">
            <div className="text-center mb-6">
              <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mb-4">
                Selamat Datang di Komunitas Kami
              </h2>
              <p className="text-lg text-amber-300 leading-relaxed max-w-3xl mx-auto">
La Maison Typology dikelola secara terstruktur dengan admin sebagai pengarah, penjaga etika, dan mediator diskusi. Meski otoriter, komunitas tetap hangat, interaktif, dan terbuka untuk berbagi pandangan dalam batas relevan.              </p>
            </div>
          </div>
        </section>

        <div id="vision-mission">
          <VisionMission />
        </div>

        <Values />

        <Gallery />
      </main>
    </div>
  )
}
