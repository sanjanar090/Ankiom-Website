"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faTwitter,
  faGithub,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <footer className="mt-48 bg-[#0b1223] text-white py-20 px-10 relative z-50">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          {/* Logo + Description */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-indigo-500 bg-clip-text text-transparent">
                Ankiom
              </span>
              <span className="w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500"></span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Pioneering the future of connected intelligence
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                "AI Integration",
                "Embedded Systems",
                "IoT Development",
                "Data Analytics",
              ].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Contact"].map((item, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://in.linkedin.com/company/ankiom-soft-india"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#141b2e] text-gray-300 hover:bg-[#2b3461] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="https://twitter.com/ankiomsoftindia"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#141b2e] text-gray-300 hover:bg-[#2b3461] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faTwitter} />
              </a>

              <a
                href="https://github.com/ankiom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#141b2e] text-gray-300 hover:bg-[#2b3461] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>

              <a
                href="https://www.youtube.com/@ankiom"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 flex items-center justify-center rounded-md bg-[#141b2e] text-gray-300 hover:bg-[#2b3461] hover:text-white hover:-translate-y-1 transition-all duration-300"
              >
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/10 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; 2024 Ankiom. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
