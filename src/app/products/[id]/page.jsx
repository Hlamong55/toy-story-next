import Image from "next/image";
import { getProductById } from "@/actions/server/product";
import { notFound } from "next/navigation";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  const  id = (params.id);

  const product = await getProductById(id);
  if (!product) notFound();

  const {
    title,
    bangla,
    image,
    price,
    discount,
    ratings,
    reviews,
    sold,
    description,
    info,
    qna,
  } = product;

  const finalPrice = discount
    ? Math.round(price - (price * discount) / 100)
    : price;

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">

      {/* ================= TOP SECTION ================= */}
      <div className="grid lg:grid-cols-2 gap-14 items-start">

        {/* IMAGE CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="relative h-[420px] rounded-xl overflow-hidden bg-gray-100">
            <Image
              src={image}
              alt={title}
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>

        {/* INFO CARD */}
        <div className="bg-white rounded-2xl shadow-lg p-8 space-y-6">

          {/* TITLE */}
          <div>
            <h1 className="text-3xl font-bold text-gray-800">{title}</h1>
            <p className="text-gray-500 mt-1">{bangla}</p>
          </div>

          {/* RATINGS */}
          <div className="flex items-center gap-2 text-sm">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{ratings}</span>
            <span className="text-gray-500">
              ({reviews} reviews • {sold} sold)
            </span>
          </div>

          {/* PRICE */}
          <div className="flex items-center gap-4">
            <span className="text-4xl font-bold text-orange-500">
              ৳{finalPrice}
            </span>

            {discount > 0 && (
              <>
                <span className="line-through text-gray-400 text-lg">
                  ৳{price}
                </span>
                <span className="px-3 py-1 bg-red-500 text-white text-sm rounded-full">
                  {discount}% OFF
                </span>
              </>
            )}
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex gap-4 pt-2">
            <button className="btn btn-primary flex-1 text-lg">
              Add to Cart
            </button>
            <button className="btn btn-outline flex-1 text-lg">
              Buy Now
            </button>
          </div>

          {/* FEATURES */}
          <div className="pt-6 border-t space-y-3">
            {info?.map((item, index) => (
              <p
                key={index}
                className="flex items-center gap-2 text-gray-700"
              >
                <FaCheckCircle className="text-green-500" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* ================= DESCRIPTION ================= */}
      <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
        <h2 className="text-2xl font-semibold mb-4 border-b pb-2">
          Product Description
        </h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* ================= Q&A ================= */}
      {qna?.length > 0 && (
        <div className="mt-14 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 border-b pb-2">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {qna.map((item, index) => (
              <details
                key={index}
                className="group border rounded-xl p-4 cursor-pointer hover:bg-gray-50 transition"
              >
                <summary className="font-medium text-gray-800">
                  {item.question}
                </summary>
                <p className="mt-3 text-gray-600 leading-relaxed">
                  {item.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetailsPage;
