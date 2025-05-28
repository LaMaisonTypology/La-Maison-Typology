// app/page.tsx
import Image from "next/image"; 
export default function Home() {
  const slides = [
    {
      id: 1,
      imageSrc: "/next.svg", 
      altText: "Slide 1 Image",
      title: "Title ",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      id: 2,
      imageSrc: "/vercel.svg", 
      altText: "Slide 2 Image",
      title: "Diskusi Mendalam",
      description: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
    {
      id: 3,
      imageSrc: "/globe.svg", 
      altText: "Slide 3 Image",
      title: "Eksplorasi Tipologi",
      description: "Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.",
    },
  ];

  return (
    <div className="container mx-auto p-8">
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <div className="md:w-1/2 flex justify-center mb-6 md:mb-0">
          <Image
            src="/next.svg" 
            alt="Header Image"
            width={300}
            height={100} 
            priority
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left md:pl-8">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white mb-4">Welcome to La Maison Typology</h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            La Maison Typology adalah Otoriter Hangat. La Maison Typology dijalankan dengan sistem yang terstruktur dan terkontrol, dengan peran aktif admin sebagai pengarah suasana, penjaga etika, dan menjembatani diskusi. Meski bersifat otoriter, komunitas tetap membuka ruang untuk kehangatan, interaksi santai, serta saling berbagi pandangan dengan tetap menjaga batas dan relevansi.
          </p>
        </div>
      </div>

      <section className="mb-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Visi Kami</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Visi komunitas La Maison Typology yaitu menjadi komunitas typology yang hidup dan aktif, yang mengedepankan etika, keteraturan, serta menjadi ruang belajar dan bertumbuh bersama dalam memahami typology secara mendalam.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 text-center border-b pb-2 border-gray-200 dark:border-gray-700">Galeri Komunitas</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {slides.map((slide) => (
            <div key={slide.id} className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-48 md:h-56 lg:h-64">
                <Image
                  src={slide.imageSrc}
                  alt={slide.altText}
                  layout="fill" // Makes the image fill the parent container
                  objectFit="cover" // Covers the area without distorting aspect ratio
                  className="rounded-t-lg"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{slide.title}</h3>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{slide.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Misi Kami</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
        <ul className="list-disc list-inside ml-4 mt-4 text-gray-700 dark:text-gray-300">
          <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
          <li>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
          <li>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</li>
        </ul>
      </section>

      <section className="mb-12 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Nilai-nilai Kami</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Curabitur pretium tincidunt lacus. Nulla gravida orci a odio. Nullam varius, turpis et commodo pharetra, est eros bibendum elit, nec luctus magna felis sollicitudin mauris.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Integer in mauris eu nibh euismod gravida. Duis ac tellus et risus auctor dictum. Maecenas eu arcu eu risus mollis lobortis. Donec eu arcu.
        </p>
      </section>

      {/* Status Proyek Section */}
      <section className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 border-b pb-2 border-gray-200 dark:border-gray-700">Status Proyek</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          Saat ini proyek berada pada tahap prototipe awal. Kami sedang menyusun struktur halaman, sistem CMS, dan dasar konten.
        </p>
        <p className="mt-4 text-gray-600 dark:text-gray-400">
          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Vivamus in erat at urna tristique volutpat.
        </p>
      </section>
    </div>
  );
}