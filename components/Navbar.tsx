"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Login from "./Login";

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Use Fragment to wrap nav and dialog */}
      <nav className="flex justify-between items-center z-50 px-8 h-20 sticky top-0 bg-[#121620]">
        {/* Nav links */}
        <section className="flex gap-10 w-90">
          {/* Desktop nav */}
          <ul className="hidden md:flex gap-2 items-center ">
            <li>
              <Link
                className="hover:scale-110 px-4 inline-block transition-transform duration-200 ease-in-out"
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-110 px-4 inline-block transition-transform duration-200 ease-in-out"
                href="/nosotros"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                className="hover:scale-110 px-4 inline-block transition-transform duration-200 ease-in-out"
                href="/valores"
              >
                Nuestros Valores
              </Link>
            </li>
          </ul>

          {/* Mobile nav Hamburger Button */}
          <button
            className="md:hidden p-2 -ml-2"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
            aria-expanded={isMobileMenuOpen}
            aria-controls="mobile-menu-dialog"
          >
            <Image
              src={"/assets/icons/hamburger-menu.svg"}
              alt="Open Menu"
              width={32}
              height={32}
              className="h-8 w-auto hover:cursor-pointer"
            />
          </button>
        </section>

        {/* Logo */}
        <section>
          <Link href="/" aria-label="Go to homepage">
            <Image
              src={"/assets/icons/northnodeLogo.svg"}
              alt="North Node Logo"
              width={80}
              height={80}
              className="h-26 w-auto"
              priority
            />
          </Link>
        </section>

        {/* Fake Login / User Icon */}
        <section className="w-90 flex justify-end">
          <Login />
        </section>
      </nav>
      {/* Mobile Menu Dialog */}
      {/* Overlay + Dialog Container */}
      <div
        id="mobile-menu-dialog"
        className={`fixed inset-0 z-50 transform transition-transform duration-300 ease-in-out md:hidden ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog" // Accessibility
        aria-modal="true" // Accessibility
        aria-labelledby="mobile-menu-title" // Accessibility
      >
        {/* Dialog Content */}
        <div className="flex flex-col h-full w-full bg-[#121620] p-6">
          {/* Header section inside dialog (optional but good practice) */}
          <div className="flex justify-between items-center mb-10">
            <h2
              id="mobile-menu-title"
              className="text-xl font-semibold sr-only"
            >
              Mobile Menu
            </h2>
            <button onClick={toggleMobileMenu} aria-label="Close mobile menu">
              <Image
                src={"/assets/icons/close.svg"}
                alt="Close Menu"
                width={32}
                height={32}
                className="h-8 w-auto"
              />
            </button>
          </div>

          {/* Navigation Links - Copied and styled for mobile */}
          <ul className="flex flex-col gap-6 items-center justify-center flex-grow text-2xl">
            {/* Larger text, centered */}
            <li>
              <Link
                className="hover:opacity-80 px-4 py-2 inline-block transition-opacity" // Use opacity or other effect
                href="/"
                onClick={closeMobileMenu} // Close menu on link click
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-80 px-4 py-2 inline-block transition-opacity"
                href="/nosotros"
                onClick={closeMobileMenu} // Close menu on link click
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                className="hover:opacity-80 px-4 py-2 inline-block transition-opacity"
                href="/valores"
                onClick={closeMobileMenu} // Close menu on link click
              >
                Nuestros Valores
              </Link>
            </li>
          </ul>

          {/* Optional Footer in Dialog (e.g., social links, duplicate user icon) */}
          <div className="mt-auto flex justify-center pb-4">
            {/* Example: You could add social icons or other elements here */}
          </div>
        </div>
      </div>
      {/* Optional: Overlay for dimming background when menu is open */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40 md:hidden" // Lower z-index than dialog
          onClick={toggleMobileMenu} // Close menu when clicking overlay
          aria-hidden="true" // Hide from screen readers
        ></div>
      )}
    </>
  );
};
