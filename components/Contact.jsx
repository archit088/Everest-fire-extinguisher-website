export default function Contact() {
  return (
    <section id="contact" className="section-anchor py-16">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-600 mb-6">
          Call or WhatsApp: <strong>+91 98765 43210</strong>
        </p>
        <form className="grid gap-4">
          <input className="p-3 border rounded-lg" placeholder="Your name" />
          <input
            className="p-3 border rounded-lg"
            placeholder="Phone or email"
          />
          <textarea
            className="p-3 border rounded-lg"
            placeholder="Message"
            rows={4}
          />
          <button className="bg-fire text-white px-6 py-3 rounded-lg">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
