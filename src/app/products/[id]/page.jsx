import Image from "next/image";
import { getProductById } from "@/actions/server/product";
import { notFound } from "next/navigation";
import { FaStar, FaCheckCircle } from "react-icons/fa";

const ProductDetailsPage = async ({ params }) => {
  // ✅ Next.js 14 fix
  const { id } = await params;

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
    <div className="max-w-7xl mx-auto px-4 py-10">

      {/* TOP SECTION */}
      <div className="grid lg:grid-cols-2 gap-12 bg-white p-6 rounded-xl shadow-lg">

        {/* IMAGE */}
        <div className="relative h-[420px] rounded-xl overflow-hidden bg-gray-100">
          <Image
            src={image}
            alt={title}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* CONTENT */}
        <div className="space-y-4">
          <h1 className="text-3xl font-bold">{title}</h1>
          <p className="text-gray-500">{bangla}</p>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <FaStar className="text-yellow-400" />
            <span className="font-semibold">{ratings}</span>
            <span className="text-gray-500">
              ({reviews} reviews • {sold} sold)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-4 mt-4">
            <span className="text-3xl font-bold text-orange-500">
              ৳{finalPrice}
            </span>

            {discount > 0 && (
              <>
                <span className="line-through text-gray-400">
                  ৳{price}
                </span>
                <span className="px-2 py-1 bg-red-500 text-white text-sm rounded">
                  -{discount}%
                </span>
              </>
            )}
          </div>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="btn btn-primary px-10">
              Add to Cart
            </button>
            <button className="btn btn-outline">
              Buy Now
            </button>
          </div>

          {/* Features */}
          <div className="mt-8 space-y-2">
            {info?.map((item, index) => (
              <p key={index} className="flex items-center gap-2">
                <FaCheckCircle className="text-green-500" />
                {item}
              </p>
            ))}
          </div>
        </div>
      </div>

      {/* DESCRIPTION */}
      <div className="mt-14 bg-white p-6 rounded-xl shadow">
        <h2 className="text-2xl font-semibold mb-4">
          Product Description
        </h2>
        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      {/* QNA */}
      {qna?.length > 0 && (
        <div className="mt-12 bg-white p-6 rounded-xl shadow">
          <h2 className="text-2xl font-semibold mb-4">
            Frequently Asked Questions
          </h2>

          <div className="space-y-3">
            {qna.map((item, index) => (
              <details
                key={index}
                className="p-4 border rounded-lg cursor-pointer"
              >
                <summary className="font-medium">
                  {item.question}
                </summary>
                <p className="mt-2 text-gray-600">
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
