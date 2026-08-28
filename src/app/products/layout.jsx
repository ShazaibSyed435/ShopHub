import Container from "@components/Container";
import ProductSidebar from "@components/products/ProductSidebar";

export default function ProductsLayout({ children }) {
  return (
    <main className="bg-white">
      {/* Products Header */}
      <section className="border-b py-12">
        <Container>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            All Products
          </h1>

          <p className="mt-3 text-gray-600">
            Explore our complete collection of products.
          </p>
        </Container>
      </section>

      {/* Products Layout */}
      <section className="py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            {/* Persistent Sidebar */}
            <ProductSidebar />

            {/* Page Content */}
            <div className="min-w-0">{children}</div>
          </div>
        </Container>
      </section>
    </main>
  );
}
