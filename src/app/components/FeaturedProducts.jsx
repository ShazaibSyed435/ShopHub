import Container from "./Container";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    category: "Electronics",
    price: "$89.99",
    rating: 4.8,
    image: "/products/headphones.jpg",
  },
  {
    id: 2,
    name: "Smart Watch",
    category: "Electronics",
    price: "$129.99",
    rating: 4.7,
    image: "/products/watch.jpg",
  },
  {
    id: 3,
    name: "Classic T-Shirt",
    category: "Fashion",
    price: "$29.99",
    rating: 4.6,
    image: "/products/tshirt.jpg",
  },
  {
    id: 4,
    name: "Modern Backpack",
    category: "Accessories",
    price: "$59.99",
    rating: 4.9,
    image: "/products/backpack.jpg",
  },
  {
    id: 5,
    name: "Table Lamp",
    category: "Home & Living",
    price: "$39.99",
    rating: 4.5,
    image: "/products/lamp.jpg",
  },
  {
    id: 6,
    name: "Running Shoes",
    category: "Fashion",
    price: "$79.99",
    rating: 4.8,
    image: "/products/shoes.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        
        {/* Header */}
        <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Featured Products
            </h2>

            <p className="mt-3 text-gray-600">
              Our most popular picks, selected for you.
            </p>
          </div>

          <a
            href="/products"
            className="font-semibold text-blue-600 hover:text-blue-700"
          >
            View All →
          </a>
        </div>

        {/* Products */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="overflow-hidden rounded-2xl border border-gray-200 bg-white transition hover:-translate-y-1 hover:shadow-lg"
            >
              
              {/* Image */}
              <div className="flex h-56 items-center justify-center bg-gray-100">
                <span className="text-gray-400">
                  Product Image
                </span>
              </div>

              {/* Content */}
              <div className="p-5">
                <p className="text-xs font-medium uppercase tracking-wide text-blue-600">
                  {product.category}
                </p>

                <h3 className="mt-2 text-lg font-semibold text-gray-900">
                  {product.name}
                </h3>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-2">
                  <span className="text-yellow-500">★</span>

                  <span className="text-sm font-medium text-gray-700">
                    {product.rating}
                  </span>
                </div>

                {/* Price */}
                <p className="mt-3 text-xl font-bold text-gray-900">
                  {product.price}
                </p>

                {/* Buttons */}
                <div className="mt-5 flex gap-2">
                  <button className="flex-1 rounded-lg bg-blue-600 px-3 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
                    Add to Cart
                  </button>

                  <a
                    href={`/products/${product.id}`}
                    className="rounded-lg border border-gray-300 px-3 py-2.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-100"
                  >
                    Details
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}