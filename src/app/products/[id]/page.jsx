import Image from "next/image";
import { FaStar, FaShoppingCart, FaTruck } from "react-icons/fa";
import { notFound } from "next/navigation";

// demo fetch (replace with real DB call)
const getProduct = async (id) => {
  // fetch from DB / API
  return {
    title: "Number and Counting Learning Board",
    image: "https://i.ibb.co.com/p6Q0fchX/81a72-DDFc-KL-AC-SL1500.jpg",
    price: 1250,
    discount: 10,
    ratings: 4.6,
    reviews: 19,
    sold: 31,
    description:
      "এই learning board টি শিশুদের প্রাথমিক গণিত শেখার জন্য একটি কার্যকর educational toy।",
    info: [
      "সংখ্যা ও গণনার ধারণা তৈরি করে",
      "হ্যান্ডস-অন লার্নিং নিশ্চিত করে",
      "নন-টক্সিক ও শিশু-নিরাপদ উপকরণ",
    ],
    qna: [
      {
        question: "এই বোর্ডটি কোন বয়সের শিশুদের জন্য উপযুক্ত?",
        answer: "৩ থেকে ৬ বছর বয়সী শিশুদের জন্য উপযোগী।",
      },
    ],
  };
};

const ProductDetailsPage = async ({ params }) => {
  const product = await getProduct(params.id);

  if (!product) return notFound();

  const discountedPrice = product.discount
    ? Math.round(
        product.price - (product.price * product.discount) / 100
      )
    : product.price;

  return (
    <div className="max-w-7xl mx-auto p-6">
      {/* ================== TOP SECTION ================== */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* IMAGE */}
        <div className="bg-base-200 rounded-xl p-6">
          <div className="relative w-full h-[400px]">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* INFO */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          {/* Rating */}
          <div className="flex items-center gap-2">
            <div className="flex items-center text-warning">
              <FaStar />
              <span className="ml-1 font-semibold">
                {product.ratings}
              </span>
            </div>
            <span className="text-gray-500">
              ({product.reviews} reviews)
            </span>
            <span className="text-gray-400">
              | Sold {product.sold}
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center gap-3">
            <span className="text-3xl font-bold text-primary">
              ৳{discountedPrice}
            </span>
            {product.discount > 0 && (
              <span className="line-through text-gray-400">
                ৳{product.price}
              </span>
            )}
            {product.discount > 0 && (
              <span className="badge badge-error text-white">
                -{product.discount}%
              </span>
            )}
          </div>

          {/* Short Description */}
          <p className="text-gray-600 leading-relaxed">
            {product.description}
          </p>

          {/* Actions */}
          <div className="flex gap-4 pt-4">
            <button className="btn btn-primary gap-2">
              <FaShoppingCart />
              Add to Cart
            </button>
            <button className="btn btn-outline">
              Buy Now
            </button>
          </div>

          {/* Delivery */}
          <div className="flex items-center gap-2 text-sm text-gray-500 pt-2">
            <FaTruck />
            <span>Fast delivery available</span>
          </div>
        </div>
      </div>

      {/* ================== DETAILS SECTION ================== */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Description */}
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Product Description
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {product.description}
            </p>
          </div>

          {/* QnA */}
          <div>
            <h2 className="text-xl font-semibold mb-3">
              Questions & Answers
            </h2>
            <div className="space-y-3">
              {product.qna.map((item, i) => (
                <div
                  key={i}
                  className="bg-base-200 p-4 rounded-lg"
                >
                  <p className="font-medium">{item.question}</p>
                  <p className="text-gray-600 mt-1">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-base-200 p-6 rounded-xl h-fit">
          <h3 className="text-lg font-semibold mb-4">
            Product Features
          </h3>
          <ul className="space-y-2">
            {product.info.map((item, i) => (
              <li
                key={i}
                className="flex items-center gap-2 text-gray-600"
              >
                ✔ {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
