import Image from "next/image"

interface AdminProfile {
  id: number
  name: string
  role: string
  bio: string
  imageSrc: string
}

export default function AdminProfiles() {
  const admins: AdminProfile[] = [
    { id: 1, name: "Rosetta", role: "Founder & Executive Director", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 2, name: "Radha", role: "General Manager", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 3, name: "Andrea", role: "Ethics & Moderation Lead", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 4, name: "Fal", role: "Event Operations Coordinator", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 5, name: "Lax", role: "Event Operations Associate", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 6, name: "Mitsu Way", role: "Educational Content Manager", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 7, name: "Gian", role: "Creative Director", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 8, name: "Fadhli", role: "Digital Promotions Strategist", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 9, name: "Lana", role: "Documentation & Archive Specialist", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
    { id: 10, name: "Remi", role: "Archival Research Coordinator", bio: "Lorem ipsum dolor sit amet.", imageSrc: "/placeholder.svg" },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-semibold text-amber-200">Administrative Team</h2>
        <div className="w-20 h-1 bg-amber-600 mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
        {admins.map((admin) => (
          <div
            key={admin.id}
            className="bg-stone-900/60 border border-amber-800 rounded-xl shadow-sm hover:shadow-md transition duration-300 overflow-hidden"
          >
            <div className="relative w-full h-40">
              <Image
                src={admin.imageSrc}
                alt={admin.name}
                fill
                className="object-cover"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-amber-100 text-lg font-semibold">{admin.name}</h3>
              <p className="text-amber-400 text-sm">{admin.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
