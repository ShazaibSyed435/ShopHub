import { products } from "@data/products";

export default async function ProductDetailsPage({ params }) {
  const { slug } = await params;
  // const data = await params;

  // console.log("Slug : " + JSON.stringify(data, null, 2));
  // console.log("Slug : " + slug);

  const product = products.find((product) => product.slug === slug);

  if (!product) {
    return (
      <div className="py-20 text-center">
        <h1 className="text-2xl font-bold">Product Not Found</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="grid gap-10 lg:grid-cols-2">
        {/* Image */}
        <div className="overflow-hidden rounded-2xl bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full max-h-[500px] w-full object-cover"
          />
        </div>

        {/* Details */}
        <div>
          <p className="text-sm font-medium text-blue-600">
            {product.category}
          </p>

          <h1 className="mt-2 text-4xl font-bold text-gray-900">
            {product.name}
          </h1>

          <p className="mt-2 text-gray-500">{product.brand}</p>

          <div className="mt-5 flex items-center gap-2">
            <span className="text-yellow-500">★</span>

            <span>{product.rating}</span>
          </div>

          <p className="mt-6 text-3xl font-bold">
            ${product.price.toLocaleString()}
          </p>

          <button className="mt-8 w-full rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white hover:bg-blue-700">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
