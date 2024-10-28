import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-white border-t border-gray-200 text-gray-700">
      {/* footer top */}
      <div className="max-w-screen-2xl container mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          {/* company info */}
          <div className="md:w-[400px]">
            <Link to="/">
              <img
                src="/src/assets/Nav-Logo.png"
                alt="Coral Logo"
                className="w-28 h-12 mb-6"
              />
            </Link>
            <p className="mb-8 text-gray-500 leading-relaxed">
              Discover our curated selection of premium fashion accessories,
              designed to enhance your unique style.
            </p>
            <div className="flex items-center gap-4">
              <FaFacebookF className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaTwitter className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaLinkedinIn className="w-5 h-5 cursor-pointer hover:text-orange-500" />
              <FaInstagram className="w-5 h-5 cursor-pointer hover:text-orange-500" />
            </div>
          </div>

          {/* Links Section */}
          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16">
            {/* Catalog */}
            <div>
              <h4 className="font-semibold mb-3 text-lg text-gray-700">
                CATALOG
              </h4>
              <div className="space-y-2 text-gray-500">
                <Link to="/" className="hover:text-orange-500">
                  Necklaces
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Hoodies
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Jewelry Box
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  T-shirt
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Jacket
                </Link>
              </div>
            </div>

            {/* Customer Services */}
            <div>
              <h4 className="font-semibold mb-3 text-lg text-gray-700">
                CUSTOMER SERVICES
              </h4>
              <div className="space-y-2 text-gray-500">
                <Link to="/" className="hover:text-orange-500">
                  Contact Us
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Track Your Order
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Product Care & Repair
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Book an Appointment
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Shipping & Returns
                </Link>
              </div>
            </div>

            {/* About Us */}
            <div>
              <h4 className="font-semibold mb-3 text-lg text-gray-700">
                ABOUT US
              </h4>
              <div className="space-y-2 text-gray-500">
                <Link to="/" className="hover:text-orange-500">
                  Our Producers
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Sitemap
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  FAQ
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  About Us
                </Link>
                <Link to="/" className="hover:text-orange-500">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* footer bottom */}
      <div className="bg-gray-50 py-4">
        <p className="text-center text-gray-400">
          © {currentYear} Silksage, Inc. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
