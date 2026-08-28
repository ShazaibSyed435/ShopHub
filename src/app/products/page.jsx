"use client";

import { useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { products } from "@data/products";
import ProductCard from "@components/ProductCard";

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

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all" || value === "featured") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const queryString = params.toString();

    router.push(queryString ? `/products?${queryString}` : "/products");
  };

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
    }

    return result;
  }, [searchQuery, selectedCategory, selectedSort]);

  return (
    <>
      {/* Top Bar */}
      <div className="mb-6 flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-center">
        {/* Results */}
        <p className="text-sm text-gray-600">
          Showing{" "}
          <span className="font-semibold text-gray-900">
            {filteredProducts.length}
          </span>{" "}
          of{" "}
          <span className="font-semibold text-gray-900">{products.length}</span>{" "}
          products
        </p>

        {/* Sort */}
        <div className="flex items-center gap-3">
          <label htmlFor="sort" className="text-sm font-medium text-gray-700">
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

      {/* Products */}
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
    </>
  );
}
