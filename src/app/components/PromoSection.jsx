import Link from "next/link";
import Container from "./Container";

export default function PromoSection() {
  return (
    <section className="py-20">
      <Container>
        <div className="overflow-hidden rounded-3xl bg-blue-600 px-6 py-16 text-center sm:px-12">
          
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Upgrade Your Everyday
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-blue-100">
            Discover products designed to make your daily life easier,
            smarter, and better.
          </p>

          <Link
            href="/products"
            className="mt-8 inline-block rounded-lg bg-white px-6 py-3 font-semibold text-blue-600 transition hover:bg-gray-100"
          >
            Explore Products
          </Link>

        </div>
      </Container>
    </section>
  );
}