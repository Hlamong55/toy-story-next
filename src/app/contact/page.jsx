import ContactForm from "@/components/contact/ContactForm";
import ContactInfo from "@/components/contact/ContactInfo";
import MapSection from "@/components/contact/MapSection";

const ContactPage = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">📞 Contact Us</h1>
        <p className="text-gray-500 mt-2">
          We’d love to hear from you. Reach out anytime.
        </p>
      </div>

      {/* Grid Layout */}
      <div className="grid md:grid-cols-2 gap-10">
        <ContactInfo />
        <ContactForm />
      </div>

      {/* Map */}
      <div className="mt-16">
        <MapSection />
      </div>
    </div>
  );
};

export default ContactPage;
