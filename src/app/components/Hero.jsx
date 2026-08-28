import Link from "next/link";
import Container from "./Container";

export default function Hero() {
  return (
    <section className="bg-gray-50 py-20 sm:py-24 lg:py-32">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          {/* Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-600">
              Welcome to ShopHub
            </span>

            <h1 className="max-w-2xl text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
              Everything You Need, All in One Place
            </h1>

            <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600">
              Discover quality products across electronics, fashion, home, and
              more. Shop your favorites at prices you'll love.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/products"
                className="rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white transition hover:bg-blue-700"
              >
                Shop Now
              </Link>

              <Link
                href="/categories"
                className="rounded-lg border border-gray-300 bg-white px-6 py-3 text-center font-semibold text-gray-700 transition hover:bg-gray-100"
              >
                Explore Categories
              </Link>
            </div>
          </div>

          {/* Hero Image Placeholder */}
          <div className="overflow-hidden rounded-2xl">
            <img
              src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1000&q=80"
              alt="ShopHub online shopping"
              className="h-[350px] w-full object-cover lg:h-[450px]"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
