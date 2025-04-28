"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "@/components/logo";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    document.body.style.overflow = mobileMenuOpen ? "" : "hidden";
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    document.body.style.overflow = "";
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-dark/80",
          scrolled ? "py-2 shadow-md shadow-primary/10" : "py-4"
        )}
      >
        <div className="container flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <Logo size="sm" className="mr-2" />
          </Link>

          <nav className="flex items-center">
            <ul className="hidden md:flex gap-8">
              <li>
                <Link
                  href="#services"
                  className="relative font-medium opacity-80 hover:opacity-100 hover:text-accent-cyan transition-all after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent-cyan after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full"
                >
                  Услуги
                </Link>
              </li>
              <li>
                <Link
                  href="#ai"
                  className="relative font-medium opacity-80 hover:opacity-100 hover:text-accent-cyan transition-all after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent-cyan after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full"
                >
                  AI решения
                </Link>
              </li>
              <li>
                <Link
                  href="#advantages"
                  className="relative font-medium opacity-80 hover:opacity-100 hover:text-accent-cyan transition-all after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent-cyan after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full"
                >
                  Преимущества
                </Link>
              </li>
              <li>
                <Link
                  href="#cases"
                  className="relative font-medium opacity-80 hover:opacity-100 hover:text-accent-cyan transition-all after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent-cyan after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full"
                >
                  Кейсы
                </Link>
              </li>
              <li>
                <Link
                  href="#faq"
                  className="relative font-medium opacity-80 hover:opacity-100 hover:text-accent-cyan transition-all after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent-cyan after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="relative font-medium opacity-80 hover:opacity-100 hover:text-accent-cyan transition-all after:content-[''] after:absolute after:w-0 after:h-0.5 after:bg-accent-cyan after:bottom-[-4px] after:left-0 after:transition-all hover:after:w-full"
                >
                  Контакты
                </Link>
              </li>
            </ul>
            <Link
              href="#contact"
              className="hidden md:flex ml-8 bg-[#6812F3] text-white font-medium text-lg rounded-xl px-10 py-4"
            >
              Заказать звонок
            </Link>
            <button
              className="md:hidden text-white text-2xl"
              onClick={toggleMobileMenu}
              aria-label="Открыть меню"
            >
              <Menu />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={cn(
          "fixed top-0 right-0 w-4/5 max-w-sm h-full bg-dark/95 backdrop-blur-md z-[1001] p-8 flex flex-col transition-all duration-300",
          mobileMenuOpen ? "right-0" : "-right-full"
        )}
      >
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="flex items-center" onClick={closeMobileMenu}>
            <Logo size="sm" />
          </Link>
          <button
            className="text-white text-2xl"
            onClick={closeMobileMenu}
            aria-label="Закрыть меню"
          >
            <X />
          </button>
        </div>
        <ul className="flex flex-col gap-6">
          <li>
            <Link
              href="#services"
              className="text-xl font-medium"
              onClick={closeMobileMenu}
            >
              Услуги
            </Link>
          </li>
          <li>
            <Link
              href="#ai"
              className="text-xl font-medium"
              onClick={closeMobileMenu}
            >
              AI решения
            </Link>
          </li>
          <li>
            <Link
              href="#advantages"
              className="text-xl font-medium"
              onClick={closeMobileMenu}
            >
              Преимущества
            </Link>
          </li>
          <li>
            <Link
              href="#cases"
              className="text-xl font-medium"
              onClick={closeMobileMenu}
            >
              Кейсы
            </Link>
          </li>
          <li>
            <Link
              href="#faq"
              className="text-xl font-medium"
              onClick={closeMobileMenu}
            >
              FAQ
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="text-xl font-medium"
              onClick={closeMobileMenu}
            >
              Контакты
            </Link>
          </li>
        </ul>
        <Link
          href="#contact"
          onClick={closeMobileMenu}
          className="mt-8 w-full bg-[#6812F3] text-white font-medium text-lg rounded-xl px-10 py-4 text-center block"
        >
          Заказать звонок
        </Link>
      </div>

      {/* Overlay */}
      <div
        className={cn(
          "fixed top-0 left-0 w-full h-full bg-black/50 z-[1000] transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        )}
        onClick={closeMobileMenu}
      />
    </>
  );
}
