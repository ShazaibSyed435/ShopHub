"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Menu,
  X,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Products", href: "/products" },
  { name: "Categories", href: "/categories" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white">
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-gray-900"
        >
          Shop<span className="text-blue-600">Hub</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-gray-600 transition hover:text-blue-600"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Right Side */}
        <div className="hidden items-center gap-5 md:flex">
          
          <Link
            href="/search"
            className="text-gray-600 transition hover:text-blue-600"
            aria-label="Search"
          >
            <Search size={20} />
          </Link>

          <Link
            href="/cart"
            className="relative text-gray-600 transition hover:text-blue-600"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={20} />

            {/* Cart Count */}
            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
              2
            </span>
          </Link>

          <Link
            href="/login"
            className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
          >
            <User size={17} />
            Login
          </Link>
        </div>

        {/* Mobile Right Side */}
        <div className="flex items-center gap-4 md:hidden">
          
          {/* Search */}
          <Link
            href="/search"
            className="text-gray-700"
            aria-label="Search"
          >
            <Search size={21} />
          </Link>

          {/* Cart */}
          <Link
            href="/cart"
            className="relative text-gray-700"
            aria-label="Shopping Cart"
          >
            <ShoppingCart size={21} />

            <span className="absolute -right-2 -top-2 flex h-4 min-w-4 items-center justify-center rounded-full bg-blue-600 px-1 text-[10px] font-bold text-white">
              2
            </span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="border-t bg-white md:hidden">
          <div className="mx-auto max-w-7xl px-4 py-4">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="rounded-lg px-3 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-100 hover:text-blue-600"
                >
                  {link.name}
                </Link>
              ))}

              {/* Mobile Login */}
              <Link
                href="/login"
                onClick={() => setIsMenuOpen(false)}
                className="mt-2 flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                <User size={17} />
                Login
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}