import { Instagram, Globe, MessageCircleMore } from "lucide-react"

export default function SocialLinks() {
  const socialLinks = [
    { name: "Tiktok", icon: <Globe size={24} />, url: "https://www.tiktok.com/@lamaisontypology" },
    { name: "Instagram", icon: <Instagram size={24} />, url: "https://instagram.com/lamaisontypology" },
    { name: "Website", icon: <Globe size={24} />, url: "https://lamaisontypology.vercel.app" },
  ]

  const contactLink = {
    name: "Instagram",
    icon: <MessageCircleMore size={20} />,
    url: "https://instagram.com/lamaisontypology",
  }

  return (
    <section className="container mx-auto px-6 py-16">
      <div className="bg-gradient-to-br from-stone-900/90 to-amber-900/90 backdrop-blur-sm p-8 md:p-12 rounded-3xl shadow-xl border border-amber-700/30">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-4xl font-bold text-amber-200 mb-4">Terkoneksi dengan komunitas kami</h2>
          <p className="text-amber-300 text-lg max-w-2xl mx-auto">
            Ikuti Kami di Sosial Media
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-amber-700 mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mt-8">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-br from-amber-800/50 to-stone-800/50 backdrop-blur-sm p-6 rounded-2xl border border-amber-700/20 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex flex-col items-center justify-center"
            >
              <div className="text-amber-300 hover:text-amber-100 transition-colors duration-300 mb-3">{link.icon}</div>
              <span className="text-amber-200 font-medium">{link.name}</span>
            </a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-amber-100 mb-4">Ingin bergabung dengan komunitas?</p>
          <a
            href={contactLink.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-amber-700 hover:bg-amber-800 transition-colors duration-300 text-stone-100 font-semibold shadow-md hover:shadow-lg"
          >
            {contactLink.icon}
            Chat kami via {contactLink.name}
          </a>
        </div>
      </div>
    </section>
  )
}
