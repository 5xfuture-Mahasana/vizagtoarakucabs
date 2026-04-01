'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, MapPin, Car, Plane, ShieldCheck, Clock, ThumbsUp, Star, ChevronDown, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const PHONE_NUMBER = "+91 9493159595";
const WHATSAPP_NUMBER = "919493159595";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20would%20like%20to%20book%20an%20Araku%20to%20Vizag%20cab.`;

export default function ArakuToVizagCabs() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Araku to Vizag Cabs",
    "image": "https://picsum.photos/seed/arakuvalley/1920/1080",
    "description": "Book Araku to Vizag cabs at best price ₹3499. Safe, reliable taxi service with experienced drivers. Call now for instant booking.",
    "telephone": "+91-9493159595",
    "areaServed": ["Araku Valley", "Visakhapatnam"],
    "priceRange": "₹3499"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price for Araku to Vizag cab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The starting price for Araku to Vizag cab is ₹3499 depending on vehicle type."
        }
      },
      {
        "@type": "Question",
        "name": "How much time does it take to travel from Araku to Vizag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It takes approximately 3 to 4 hours depending on traffic and road conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Is one-way cab available from Araku to Vizag?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, one-way taxi service is available at affordable prices."
        }
      },
      {
        "@type": "Question",
        "name": "Are drivers experienced for ghat roads?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, all drivers are experienced in driving on Araku ghat roads."
        }
      }
    ]
  };

  return (
    <main className="relative min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] py-20 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop"
            alt="Scenic mountain road in Araku Valley with lush greenery"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/80" />
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Araku to Vizag Cabs – Safe & Affordable Taxi Service
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light"
          >
            Looking for Araku to Vizag cab service? Book a safe and affordable taxi from Araku Valley to Visakhapatnam (Vizag). Enjoy comfortable travel with experienced drivers at the best price.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-col items-center gap-3"
          >
            <div className="flex flex-wrap justify-center items-center gap-3">
              <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-lg font-semibold tracking-wide">
                Distance: 115 km | Travel Time: 3–4 hours | Starting Price: ₹3499
              </span>
            </div>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-sm md:text-base text-gray-200 font-medium drop-shadow-md mt-4">
              <span className="flex items-center gap-1"><Star className="w-4 h-4 text-yellow-400 fill-yellow-400" /> 4.9 Rating</span>
              <span className="hidden md:inline text-gray-400">|</span>
              <span>1000+ Happy Customers</span>
              <span className="hidden md:inline text-gray-400">|</span>
              <span>Trusted Local Drivers</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-lg font-semibold px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg shadow-green-500/30"
            >
              <MessageCircle className="w-6 h-6" />
              Book Araku to Vizag Cab Now
            </a>
            
            <div className="mt-6 flex flex-col items-center gap-4">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-white hover:text-green-400 font-medium text-lg transition-colors bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now: {PHONE_NUMBER}
              </a>
              
              <Link 
                href="/" 
                className="text-gray-300 hover:text-white underline underline-offset-4 transition-colors text-sm md:text-base mt-2"
              >
                Also check Vizag to Araku cab service &rarr;
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SEO Content Block & Quick Details */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
                Araku to Vizag Cabs – Book Safe & Affordable Taxi Service
              </h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p className="mb-4">
                  Looking for the best <strong>Araku to Vizag cabs</strong>? We provide reliable and affordable taxi service from Araku Valley to Visakhapatnam (Vizag). Whether you are returning from a trip or planning a comfortable ride back, our cab service ensures a smooth journey with experienced drivers, clean vehicles, and transparent pricing.
                </p>
                <p>
                  Our <strong>Araku to Vizag taxi service</strong> is ideal for families, tourists, and business travelers. Enjoy a hassle-free journey through scenic ghat roads with complete safety and comfort.
                </p>
              </div>
            </div>
            
            <div className="lg:w-1/3 w-full bg-emerald-50 p-8 rounded-2xl border border-emerald-100 shadow-sm">
              <h3 className="text-xl font-bold text-gray-900 mb-6 border-b border-emerald-200 pb-4">Quick Details</h3>
              <ul className="space-y-4">
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Distance:</span>
                  <span className="font-bold text-gray-900">115 km</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Travel Time:</span>
                  <span className="font-bold text-gray-900">3 to 4 hours</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Starting Price:</span>
                  <span className="font-bold text-emerald-600 text-lg">₹3499</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Pickup:</span>
                  <span className="font-bold text-gray-900">Araku Valley</span>
                </li>
                <li className="flex justify-between items-center">
                  <span className="text-gray-600 font-medium">Drop:</span>
                  <span className="font-bold text-gray-900">Vizag (Visakhapatnam)</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gray-50" id="why-us">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
                  alt="Car driving on a scenic mountain road"
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
            
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-8">
                Why Choose Our Araku to Vizag Taxi Service?
              </h2>
              
              <div className="space-y-6">
                <FeatureItem 
                  icon={<ShieldCheck className="w-6 h-6 text-emerald-600" />}
                  title="Experienced local drivers for hill routes"
                  description="Our drivers are experts at navigating the Araku ghat roads safely."
                />
                <FeatureItem 
                  icon={<ThumbsUp className="w-6 h-6 text-emerald-600" />}
                  title="Affordable and transparent pricing"
                  description="Get the best Araku to Vizag fare with zero hidden charges."
                />
                <FeatureItem 
                  icon={<Car className="w-6 h-6 text-emerald-600" />}
                  title="Clean and well-maintained vehicles"
                  description="Travel in comfort with our sanitized and well-kept cabs."
                />
                <FeatureItem 
                  icon={<Clock className="w-6 h-6 text-emerald-600" />}
                  title="On-time pickup and drop"
                  description="We value your time and ensure punctuality for every ride."
                />
                <FeatureItem 
                  icon={<PhoneCall className="w-6 h-6 text-emerald-600" />}
                  title="24/7 customer support"
                  description="We are available round the clock to assist you with your booking."
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white" id="services">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Services Offered by Araku to Vizag Cabs
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We offer a variety of travel options to suit your needs and budget. Choose Araku to Vizag Cabs for a memorable journey.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ServiceCard 
              icon={<MapPin className="w-8 h-8 text-emerald-600" />}
              title="One Way Araku to Vizag Cab"
              description="Perfect for a direct drop from Araku to your destination in Vizag."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Car className="w-8 h-8 text-emerald-600" />}
              title="Round Trip Cab Service"
              description="Book a round trip for a complete, hassle-free vacation experience."
              delay={0.2}
            />
            <ServiceCard 
              icon={<Plane className="w-8 h-8 text-emerald-600" />}
              title="Araku to Vizag Airport Drop"
              description="Timely transfers to Visakhapatnam Airport for your flight."
              delay={0.3}
            />
            <ServiceCard 
              icon={<Star className="w-8 h-8 text-emerald-600" />}
              title="Sightseeing + Drop Packages"
              description="Explore local attractions on your way back to Vizag."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions – Araku to Vizag Cabs
            </h2>
          </div>

          <div className="space-y-4">
            <FaqItem 
              question="Q1: What is the price for Araku to Vizag cab?"
              answer="The starting price for Araku to Vizag cab is ₹3499 depending on vehicle type."
            />
            <FaqItem 
              question="Q2: How much time does it take to travel from Araku to Vizag?"
              answer="It takes approximately 3 to 4 hours depending on traffic and road conditions."
            />
            <FaqItem 
              question="Q3: Is one-way cab available from Araku to Vizag?"
              answer="Yes, an Araku to Vizag one way cab is available at affordable prices. Book your Araku to Vizag Cabs today."
            />
            <FaqItem 
              question="Q4: Are drivers experienced for ghat roads?"
              answer="Yes, all drivers are experienced in driving on Araku ghat roads."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Book Your Araku to Vizag Cab Now
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Call now or book via WhatsApp to get instant confirmation and best price.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-emerald-900 hover:bg-gray-100 text-lg font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg"
            >
              <PhoneCall className="w-6 h-6" />
              Call Now: {PHONE_NUMBER}
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1EBE5D] text-white text-lg font-bold px-8 py-4 rounded-full transition-transform hover:scale-105 shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              Book on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <Link href="/" className="text-2xl font-heading font-bold text-white tracking-tight mb-4 inline-block">
                Araku<span className="text-emerald-500">Cabs</span>
              </Link>
              <p className="text-gray-400 max-w-sm mb-6">
                Your trusted travel partner for exploring the pristine beauty of Araku Valley. Safe, reliable, and affordable taxi services.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><Link href="/" className="hover:text-emerald-400 transition-colors">Home</Link></li>
                <li><Link href="#services" className="hover:text-emerald-400 transition-colors">Services</Link></li>
                <li><Link href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</Link></li>
                <li><Link href="#faq" className="hover:text-emerald-400 transition-colors">FAQs</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Contact Us</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <PhoneCall className="w-4 h-4 text-emerald-500" />
                  <span>{PHONE_NUMBER}</span>
                </li>
                <li className="flex items-center gap-2">
                  <MessageCircle className="w-4 h-4 text-emerald-500" />
                  <span>WhatsApp Available</span>
                </li>
                <li className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-emerald-500" />
                  <span>Visakhapatnam, AP</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-gray-800 text-sm text-center text-gray-500 flex flex-col md:flex-row justify-between items-center">
            <p>&copy; {new Date().getFullYear()} Araku Cabs. All rights reserved.</p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

    </main>
  );
}

function ServiceCard({ icon, title, description, delay }: { icon: React.ReactNode, title: string, description: string, delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay }}
      className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
    >
      <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </motion.div>
  );
}

function FeatureItem({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex gap-4">
      <div className="flex-shrink-0 w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center">
        {icon}
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

function FaqItem({ question, answer }: { question: string, answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden">
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
      >
        <span className="font-semibold text-gray-900">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div 
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-5 text-gray-600">
          {answer}
        </div>
      </motion.div>
    </div>
  );
}
