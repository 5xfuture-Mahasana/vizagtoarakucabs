'use client';

import Link from 'next/link';
import { PhoneCall, ChevronDown, Menu, X } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

const PHONE_NUMBER = "+91 9493159595";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="absolute top-0 w-full z-50 px-4 md:px-6 py-4 flex justify-between items-center max-w-7xl mx-auto left-0 right-0">
      <Link href="/" className="text-2xl font-heading font-bold text-white tracking-tight z-50">
        Araku<span className="text-green-400">Cabs</span>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-8 bg-black/30 backdrop-blur-md px-8 py-3 rounded-full border border-white/10">
        <Link href="/about-us" className="text-white hover:text-green-400 font-medium transition-colors">
          About Us
        </Link>
        
        <div 
          className="relative group"
          onMouseEnter={() => setIsDropdownOpen(true)}
          onMouseLeave={() => setIsDropdownOpen(false)}
        >
          <button className="flex items-center gap-1 text-white hover:text-green-400 font-medium transition-colors">
            Route Pages <ChevronDown className="w-4 h-4" />
          </button>
          
          <AnimatePresence>
            {isDropdownOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-xl overflow-hidden py-2"
              >
                <Link href="/" className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 font-medium transition-colors">
                  Vizag to Araku Cabs
                </Link>
                <Link href="/araku-to-vizag-cabs" className="block px-4 py-2 text-gray-800 hover:bg-green-50 hover:text-green-600 font-medium transition-colors">
                  Araku to Vizag Cabs
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <Link href="/blog" className="text-white hover:text-green-400 font-medium transition-colors">
          Blog
        </Link>
        <Link href="/contact-us" className="text-white hover:text-green-400 font-medium transition-colors">
          Contact Us
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <a 
          href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
          className="flex items-center gap-2 bg-[#22c55e] hover:bg-[#1ea04c] text-white px-5 py-2.5 md:px-7 md:py-3 rounded-full font-bold transition-all hover:scale-105 shadow-xl shadow-green-500/60 hover:shadow-green-500/80"
        >
          <PhoneCall className="w-4 h-4 md:w-5 md:h-5" />
          <span className="hidden sm:inline">{PHONE_NUMBER}</span>
          <span className="sm:hidden">Call</span>
        </a>

        {/* Mobile Menu Toggle */}
        <button 
          className="lg:hidden text-white p-2 bg-black/30 backdrop-blur-md rounded-full border border-white/10"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl lg:hidden overflow-hidden border border-white/20"
          >
            <div className="flex flex-col px-6 py-6 gap-5">
              <Link href="/about-us" className="text-gray-900 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                About Us
              </Link>
              
              <div className="flex flex-col gap-3">
                <div className="text-gray-500 text-sm font-bold uppercase tracking-wider">Route Pages</div>
                <Link href="/" className="text-gray-800 text-lg font-medium pl-4 border-l-2 border-green-500" onClick={() => setIsMobileMenuOpen(false)}>
                  Vizag to Araku Cabs
                </Link>
                <Link href="/araku-to-vizag-cabs" className="text-gray-800 text-lg font-medium pl-4 border-l-2 border-green-500" onClick={() => setIsMobileMenuOpen(false)}>
                  Araku to Vizag Cabs
                </Link>
              </div>

              <Link href="/blog" className="text-gray-900 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                Blog
              </Link>
              <Link href="/contact-us" className="text-gray-900 text-lg font-semibold" onClick={() => setIsMobileMenuOpen(false)}>
                Contact Us
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
