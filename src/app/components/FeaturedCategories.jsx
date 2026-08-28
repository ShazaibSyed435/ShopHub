import Link from "next/link";
import Container from "./Container";

const categories = [
  {
    name: "Electronics",
    description: "Latest gadgets, devices, and accessories.",
    icon: "💻",
  },
  {
    name: "Fashion",
    description: "Modern styles for every occasion.",
    icon: "👕",
  },
  {
    name: "Home & Living",
    description: "Make your space comfortable and beautiful.",
    icon: "🏠",
  },
  {
    name: "Accessories",
    description: "Complete your everyday look.",
    icon: "👜",
  },
];

export default function FeaturedCategories() {
  return (
    <section className="py-20">
      <Container>
        
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Shop by Category
          </h2>

          <p className="mt-4 text-gray-600">
            Find what you're looking for quickly.
          </p>
        </div>

        {/* Categories */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {categories.map((category) => (
            <Link
              href={`/categories/${category.name
                .toLowerCase()
                .replace(/\s*&\s*/g, "-")
                .replace(/\s+/g, "-")}`}
              key={category.name}
              className="group rounded-2xl border border-gray-200 bg-white p-6 transition hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl">
                {category.icon}
              </div>

              <h3 className="mt-5 text-xl font-semibold text-gray-900 group-hover:text-blue-600">
                {category.name}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

      </Container>
    </section>
  );
}