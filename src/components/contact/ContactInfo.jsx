import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactInfo = () => {
  return (
    <div className="bg-white/60 backdrop-blur-md p-8 rounded-2xl shadow-xl space-y-6">
      <h2 className="text-2xl font-semibold">📍 Our Office</h2>

      <div className="flex items-center gap-4">
        <FaMapMarkerAlt className="text-primary text-xl" />
        <p>Dhaka, Bangladesh</p>
      </div>

      <div className="flex items-center gap-4">
        <FaPhoneAlt className="text-primary text-xl" />
        <p>+880 1700-000000</p>
      </div>

      <div className="flex items-center gap-4">
        <FaEnvelope className="text-primary text-xl" />
        <p>support@toystory.com</p>
      </div>

      <p className="text-gray-600 text-sm">
        Our support team is available 24/7. Feel free to contact us for any queries.
      </p>
    </div>
  );
};

export default ContactInfo;
