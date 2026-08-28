import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg">
      {/* Product Image */}
      <Link href={`/products/${product.slug}`}>
        <div className="h-56 overflow-hidden bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition duration-300 hover:scale-105"
          />
        </div>
      </Link>

      {/* Product Info */}
      <div className="p-5">
        <p className="text-sm text-gray-500">{product.brand}</p>

        <Link href={`/products/${product.slug}`}>
          <h3 className="mt-1 text-lg font-semibold text-gray-900 hover:text-blue-600">
            {product.name}
          </h3>
        </Link>

        <div className="mt-3 flex items-center gap-2">
          <span className="text-yellow-500">★</span>

          <span className="text-sm font-medium text-gray-600">
            {product.rating}
          </span>
        </div>

        <div className="mt-4 flex items-center justify-between">
          <p className="text-xl font-bold text-gray-900">
            ${product.price.toLocaleString()}
          </p>

          <button className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
