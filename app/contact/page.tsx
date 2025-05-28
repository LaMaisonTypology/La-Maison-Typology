// app/contact/page.tsx
export default function Contact() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg mb-8">
        Have a question or want to get in touch? Feel free to reach out to us!
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">General Inquiries</h2>
        <p className="text-lg">
          For general questions about La Maison Typology or partnerships, please email us at:
        </p>
        <p className="mt-2">
          <a href="mailto:lamaisontypology@gmail.com" className="text-blue-500 hover:underline">lamaisontypology@gmail.com</a>
        </p>
        <p className="mt-2">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold mb-4">Support & Assistance</h2>
        <p className="text-lg">
          If you need technical support or assistance with our community, our support team is available at:
        </p>
        <p className="mt-2">
          <a href="mailto:lamaisontypology@gmail.com" className="text-blue-500 hover:underline">lamaisontypology@gmail.com</a>
        </p>
        <p className="mt-2">
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-bold mb-4">Connect with Us</h2>
        <p className="text-lg">
          Follow us on our social media channels to stay updated:
        </p>
        <ul className="list-disc list-inside ml-4 mt-2">
          <li>Twitter: <a href="#" className="text-blue-500 hover:underline">@LaMaisonTypology</a></li>
          <li>Discord: <a href="#" className="text-blue-500 hover:underline">La Maison Community</a></li>
          <li>Instagram: <a href="#" className="text-blue-500 hover:underline">@lamaisontypology</a></li>
        </ul>
        <p className="mt-2">
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </p>
      </section>
    </div>
  );
}