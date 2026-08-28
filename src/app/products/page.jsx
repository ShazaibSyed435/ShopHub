"use client";

import { useMemo, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import Container from "../components/Container";

const categories = [
  {
    name: "All Products",
    value: "all",
  },
  {
    name: "Electronics",
    value: "electronics",
  },
  {
    name: "Fashion",
    value: "fashion",
  },
  {
    name: "Home & Living",
    value: "home",
  },
  {
    name: "Accessories",
    value: "accessories",
  },
];

const sortOptions = [
  {
    name: "Featured",
    value: "featured",
  },
  {
    name: "Price: Low to High",
    value: "price-low",
  },
  {
    name: "Price: High to Low",
    value: "price-high",
  },
  {
    name: "Highest Rated",
    value: "rating",
  },
  {
    name: "Newest",
    value: "newest",
  },
];

export default function ProductsPage() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const searchQuery = searchParams.get("search") || "";
  const selectedCategory = searchParams.get("category") || "all";
  const selectedSort = searchParams.get("sort") || "featured";

  const [searchInput, setSearchInput] = useState(searchQuery);

  // Update URL parameters
  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all" || value === "featured") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    router.push(`/products?${params.toString()}`);
  };

  // Filter + Search + Sort
  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Search
    if (searchQuery) {
      result = result.filter((product) =>
        `${product.name} ${product.brand}`
          .toLowerCase()
          .includes(searchQuery.toLowerCase()),
      );
    }

    // Category
    if (selectedCategory !== "all") {
      result = result.filter(
        (product) => product.category === selectedCategory,
      );
    }

    // Sort
    switch (selectedSort) {
      case "price-low":
        result.sort((a, b) => a.price - b.price);
        break;

      case "price-high":
        result.sort((a, b) => b.price - a.price);
        break;

      case "rating":
        result.sort((a, b) => b.rating - a.rating);
        break;

      case "newest":
        result.sort((a, b) => Number(b.newest) - Number(a.newest));
        break;

      case "featured":
      default:
        result.sort((a, b) => Number(b.featured) - Number(a.featured));
        break;
    }

    return result;
  }, [searchQuery, selectedCategory, selectedSort]);

  // Search submit
  const handleSearch = (e) => {
    e.preventDefault();

    updateParams("search", searchInput.trim());
  };

  return (
    <main className="bg-white">
      {/* Page Header */}
      <section className="border-b bg-gray-50 py-12">
        <Container>
          <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            All Products
          </h1>

          <p className="mt-3 text-gray-600">
            Explore our complete collection of products.
          </p>
        </Container>
      </section>

      {/* Main Content */}
      <section className="py-10">
        <Container>
          <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
            {/* Sidebar */}
            <aside>
              {/* Search */}
              <div>
                <h2 className="text-sm font-semibold text-gray-900">Search</h2>

                <form onSubmit={handleSearch} className="mt-3">
                  <div className="flex">
                    <input
                      type="text"
                      value={searchInput}
                      onChange={(e) => setSearchInput(e.target.value)}
                      placeholder="Search products..."
                      className="min-w-0 flex-1 rounded-l-lg border border-r-0 border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-blue-600"
                    />

                    <button
                      type="submit"
                      className="rounded-r-lg bg-blue-600 px-4 text-white hover:bg-blue-700"
                    >
                      Search
                    </button>
                  </div>
                </form>
              </div>

              {/* Categories */}
              <div className="mt-8">
                <h2 className="text-sm font-semibold text-gray-900">
                  Categories
                </h2>

                <div className="mt-3 space-y-1">
                  {categories.map((category) => (
                    <button
                      key={category.value}
                      onClick={() => updateParams("category", category.value)}
                      className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                        selectedCategory === category.value
                          ? "bg-blue-50 font-semibold text-blue-600"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>
            </aside>

            {/* Products Area */}
            <div>
              {/* Top Bar */}
              <div className="mb-6 flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center">
                {/* Results */}
                <p className="text-sm text-gray-600">
                  Showing{" "}
                  <span className="font-semibold text-gray-900">
                    {filteredProducts.length}
                  </span>{" "}
                  of{" "}
                  <span className="font-semibold text-gray-900">
                    {products.length}
                  </span>{" "}
                  products
                </p>

                {/* Sort */}
                <div className="flex items-center gap-3">
                  <label
                    htmlFor="sort"
                    className="text-sm font-medium text-gray-700"
                  >
                    Sort By
                  </label>

                  <select
                    id="sort"
                    value={selectedSort}
                    onChange={(e) => updateParams("sort", e.target.value)}
                    className="rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:border-blue-600"
                  >
                    {sortOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
                  {filteredProducts.map((product) => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              ) : (
                <div className="rounded-xl border border-dashed border-gray-300 py-20 text-center">
                  <h3 className="text-lg font-semibold text-gray-900">
                    No products found
                  </h3>

                  <p className="mt-2 text-sm text-gray-500">
                    Try changing your search or category.
                  </p>
                </div>
              )}
            </div>
          </div>
        </Container>
      </section>
    </main>
  );    
}
