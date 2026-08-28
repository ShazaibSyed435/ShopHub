import Container from "./Container";

export default function Newsletter() {
  return (
    <section className="py-20">
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Stay in the Loop
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-gray-600">
            Get updates about new products, special offers, and
            exclusive deals.
          </p>

          <form className="mx-auto mt-8 flex max-w-xl flex-col gap-3 sm:flex-row">
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
            />

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
            >
              Subscribe
            </button>
          </form>

        </div>
      </Container>
    </section>
  );
}