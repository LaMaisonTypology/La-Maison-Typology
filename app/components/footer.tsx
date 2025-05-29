import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-stone-950 to-amber-950 text-center py-12 border-t border-amber-800/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-left">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Tentang La Maison</h3>
            <p className="text-amber-300 mb-4">
              Terarah dalam Etika, Akrab dalam Interaksi dan Merangkul Kebersamaan. 
            </p>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Link Cepat</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-amber-300 hover:text-amber-100 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-amber-300 hover:text-amber-100 transition-colors duration-300">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/test" className="text-amber-300 hover:text-amber-100 transition-colors duration-300">
                  Test
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-amber-300 hover:text-amber-100 transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h3 className="text-xl font-bold text-amber-200 mb-4">Terhubung Dengan Kami</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.instagram.com/lamaisontypology?"
                className="text-amber-300 hover:text-amber-100 transition-colors duration-300"
                aria-label="Instagram"
              >
               Instagram
              </a>
              <a
                href=" https://www.tiktok.com/@lamaisontypology"
                className="text-amber-300 hover:text-amber-100 transition-colors duration-300"
                aria-label="Tiktok"
              >
                Tiktok
              </a>
              <a
                href="mailto:lamaisontypology@gmail.com"
                className="text-amber-300 hover:text-amber-100 transition-colors duration-300"
                aria-label="Email"
              >
                 Email
              </a>
            </div>
            <p className="mt-4 text-amber-300">
              Email: lamaisontypology@gmail.com
              <br />
              Protonmail : lamaisontypology@proton.me
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-amber-800/20">
          <p className="text-amber-300 text-lg">
            © {new Date().getFullYear()} La Maison Typology. All rights reserved.
          </p>
          <p className="text-amber-400/70 text-sm mt-2">Crafted with elegance and sophistication</p>
        </div>
      </div>
    </footer>
  )
}
