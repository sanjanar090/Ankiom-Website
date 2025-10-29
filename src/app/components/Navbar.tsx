"use client";

import Link from "next/link";
import { Menu, Transition } from "@headlessui/react";
import { Fragment, memo, useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";

const ServiceMenuItems = memo(({ services }: { services: { href: string; label: string }[] }) => (
  <>
    {services.map(({ href, label }) => (
      <Menu.Item key={href}>
        {({ active }) => (
          <Link
            href={href}
            className={`block px-5 py-2 rounded-md ${
              active ? "bg-blue-100 text-blue-700" : "hover:bg-blue-50 text-gray-700"
            } transition focus:outline-none`}
          >
            {label}
          </Link>
        )}
      </Menu.Item>
    ))}
  </>
));
ServiceMenuItems.displayName = "ServiceMenuItems"; 

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  const services = [
    { href: "/flutter", label: "Flutter Services" },
    { href: "/nextjs", label: "Next.js Services" },
    { href: "/services", label: "Qt-QML Services" },
  ];

  const navLinkClass =
    "relative text-lg font-semibold text-gray-800 hover:text-blue-500 transition-colors duration-150 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-blue-500 after:transition-all hover:after:w-full";

  return (
    <nav className="w-full bg-white/80">
      <div className="container mx-auto flex justify-between items-center px-6 md:px-12 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-700 hover:text-blue-800 transition">
          Ankiom
        </Link>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition focus:outline-none"
        >
          {mobileOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
        </button>

        <ul
          className={`flex flex-col md:flex-row md:items-center gap-6 absolute md:static bg-white md:bg-transparent left-0 w-full md:w-auto px-6 md:px-0 py-6 md:py-0 transition-all duration-300 ease-in-out ${
            mobileOpen ? "top-[64px] opacity-100" : "top-[-500px] opacity-0 md:opacity-100"
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
              <Menu.Button className={`${navLinkClass} flex items-center gap-2`}>
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
            <Link href="/blog">Blog</Link>
          </li>
          <li className={navLinkClass}>
            <Link href="#contact">Contact Us</Link>
          </li>
          <li>
            <button className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-5 py-2 rounded-lg font-semibold shadow-md hover:shadow-xl transition-all hover:scale-105 focus:outline-none">
              Get Quote
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
}
