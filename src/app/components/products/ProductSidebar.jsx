"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

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

export default function ProductSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentSearch = searchParams.get("search") || "";
  const currentCategory = searchParams.get("category") || "all";

  const [searchInput, setSearchInput] = useState(currentSearch);

  const updateParams = (key, value) => {
    const params = new URLSearchParams(searchParams.toString());

    if (!value || value === "all") {
      params.delete(key);
    } else {
      params.set(key, value);
    }

    const queryString = params.toString();

    router.push(queryString ? `/products?${queryString}` : "/products");
  };

  const handleSearch = (e) => {
    e.preventDefault();

    updateParams("search", searchInput.trim());
  };

  return (
    <aside className="lg:sticky lg:top-24 lg:self-start">
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
              className="rounded-r-lg bg-blue-600 px-4 text-sm font-medium text-white hover:bg-blue-700"
            >
              Search
            </button>
          </div>
        </form>
      </div>

      {/* Categories */}
      <div className="mt-8">
        <h2 className="text-sm font-semibold text-gray-900">Categories</h2>

        <div className="mt-3 space-y-1">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => updateParams("category", category.value)}
              className={`block w-full rounded-lg px-3 py-2.5 text-left text-sm transition ${
                currentCategory === category.value
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
  );
}
