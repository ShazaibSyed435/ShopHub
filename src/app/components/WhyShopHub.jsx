import Container from "./Container";

const features = [
  {
    title: "Quality Products",
    description:
      "Carefully selected products from trusted brands.",
    icon: "✓",
  },
  {
    title: "Secure Shopping",
    description:
      "Your information and payments are protected.",
    icon: "🔒",
  },
  {
    title: "Fast Delivery",
    description:
      "Get your orders delivered quickly and reliably.",
    icon: "🚚",
  },
  {
    title: "Easy Returns",
    description:
      "Simple and hassle-free returns.",
    icon: "↩",
  },
];

export default function WhyShopHub() {
  return (
    <section className="bg-gray-50 py-20">
      <Container>
        
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Why Shop With Us?
          </h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl bg-white p-6 text-center shadow-sm"
            >
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-blue-100 text-xl text-blue-600">
                {feature.icon}
              </div>

              <h3 className="mt-5 text-lg font-semibold text-gray-900">
                {feature.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </Container>
    </section>
  );
}