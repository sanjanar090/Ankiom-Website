"use client";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, memo, useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import { motion } from "framer-motion";

const ServiceMenuItems = memo(
  ({ services }: { services: { href: string; label: string }[] }) => (
    <>
      {services.map(({ href, label }) => (
        <Menu.Item key={href}>
          {({ active }) => (
            <Link
              href={href}
              className={`block px-5 py-2 rounded-md ${
                active
                  ? "bg-blue-100 text-blue-700"
                  : "hover:bg-blue-50 text-gray-700"
              } transition focus:outline-none`}
            >
              {label}
            </Link>
          )}
        </Menu.Item>
      ))}
    </>
  )
);
ServiceMenuItems.displayName = "ServiceMenuItems";

export default function NavbarServices() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { href: "/iot", label: "IoT Services" },
    { href: "/nextjs", label: "Next.js Services" },
    { href: "/flutter", label: "Flutter Services" },
    {href: "/embedded", label: "QT-QML Services"}
  ];

  const navLinkClass =
    "relative text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full";

  return (
    <nav className="w-full bg-white border-gray-100 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-[4px]">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <motion.span
            className="text-[20px] font-bold bg-gradient-to-r from-blue-600 to-cyan-400 bg-clip-text text-transparent"
            whileHover={{ scale: 1.03 }}
          >
            Ankiom
          </motion.span>
          <motion.div
            className="w-2 h-2 rounded-full bg-blue-500"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition focus:outline-none"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        {/* Nav Links */}
        <ul
          className={`flex flex-col md:flex-row md:items-center gap-5 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto px-6 md:px-0 py-3 md:py-0 transition-all duration-300 ease-in-out ${
            mobileOpen
              ? "top-[70px] opacity-100"
              : "top-[-500px] opacity-0 md:opacity-100"
          }`}
        >
          <li className={navLinkClass}>
            <Link href="/">Home</Link>
          </li>
          <li className={navLinkClass}>
            <Link href="/about">About Us</Link>
          </li>

          <li
            className="relative"
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <Menu as="div" className="relative">
              {/* 🟢 FIXED this line — string interpolation syntax corrected */}
              <Menu.Button
                className={`${navLinkClass} flex items-center gap-2 cursor-pointer`}
              >
                Services ▾
              </Menu.Button>

              <Transition
                as={Fragment}
                show={servicesOpen}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Menu.Items className="absolute right-0 mt-2 w-52 bg-white rounded-lg py-2 shadow-lg z-50">
                  <ServiceMenuItems services={services} />
                </Menu.Items>
              </Transition>
            </Menu>
          </li>

          <li className={navLinkClass}>
            <Link href="#contact">Contact Us</Link>
          </li>

          <li>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-1.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all hover:scale-105">
              Get Quote
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
