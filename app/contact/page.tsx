import HeaderBanner from "../components/header-banner"
import AdminProfiles from "../components/contact/admin-profiles"
import SocialLinks from "../components/contact/social-links"
import MembersTable from "../components/contact/members-table"

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <HeaderBanner
        title="Contact Us"
        subtitle="Connect with La Maison"
        imagePath="/mansion-header.png"
        height="min-h-[40vh]"
      />

      <main className="relative z-10 -mt-10">
        <AdminProfiles />

        <SocialLinks />

        <MembersTable />

 
      </main>
    </div>
  )
}
