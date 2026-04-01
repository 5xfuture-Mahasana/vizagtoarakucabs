'use client';

import { motion } from 'motion/react';
import Image from 'next/image';
import { MessageCircle, MapPin, Car, Plane, ShieldCheck, Clock, ThumbsUp, Star, ChevronDown, PhoneCall } from 'lucide-react';
import { useState } from 'react';
import Navbar from '@/components/Navbar';

const PHONE_NUMBER = "+91 9493159595";
const WHATSAPP_NUMBER = "919493159595";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20cab%20for%20Araku.`;

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Araku Cabs",
    "image": "https://picsum.photos/seed/arakuvalley/1920/1080",
    "description": "Book Vizag to Araku cabs at best price ₹3499. Safe and reliable taxi service with experienced drivers. Call now for instant booking.",
    "telephone": "+91-9493159595",
    "areaServed": ["Visakhapatnam", "Araku Valley"],
    "priceRange": "₹3499"
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price for Vizag to Araku cab?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The starting price for Vizag to Araku cab is ₹3499 depending on vehicle type."
        }
      },
      {
        "@type": "Question",
        "name": "How much time does it take from Vizag to Araku?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "It takes around 3 to 4 hours depending on traffic and road conditions."
        }
      },
      {
        "@type": "Question",
        "name": "Is one-way cab available from Vizag to Araku?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, one-way taxi service is available at affordable prices."
        }
      },
      {
        "@type": "Question",
        "name": "Is the route safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the route is safe and drivers are experienced in ghat roads."
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
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-heading font-bold text-white mb-6 leading-tight"
          >
            Vizag to Araku Cabs – <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">
              Best Taxi Service at Affordable Price
            </span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light"
          >
            Book Vizag (Visakhapatnam) to Araku Valley cab service at best price. Safe, fast & reliable taxi service.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-10 flex flex-col items-center gap-3"
          >
            <span className="inline-block bg-white/10 backdrop-blur-md border border-white/20 text-white px-6 py-2 rounded-full text-xl font-semibold tracking-wide">
              Starting from <span className="text-green-400">₹3499</span>
            </span>
            <div className="flex flex-wrap justify-center items-center gap-x-3 gap-y-1 text-sm md:text-base text-gray-200 font-medium drop-shadow-md">
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
              Book Araku Cab Now
            </a>
            
            <div className="mt-6">
              <a 
                href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
                className="inline-flex items-center gap-2 text-white hover:text-green-400 font-medium text-lg transition-colors bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm border border-white/10"
              >
                <PhoneCall className="w-5 h-5" />
                Call Now: {PHONE_NUMBER}
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-6">
            Vizag to Araku Cabs – Book Safe & Affordable Taxi Service
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Looking for the best Vizag to Araku cabs? We provide reliable and affordable Vizag to Araku taxi service from Visakhapatnam to Araku Valley. Whether you are planning a weekend trip or a one-day tour, our cab service ensures a smooth and comfortable journey through scenic ghat roads.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed">
            Our Vizag to Araku cab service is perfect for families, couples, and tourists who want a safe and enjoyable travel experience. With experienced drivers and well-maintained vehicles, we guarantee a stress-free ride. Get the best Vizag to Araku fare when you book with us.
          </p>
        </div>
      </section>

      {/* Quick Details Section */}
      <section className="py-12 bg-emerald-50 border-y border-emerald-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-sm border border-emerald-100 p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Quick Details</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Distance</p>
                  <p className="text-lg font-bold text-gray-900">115 km</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Travel Time</p>
                  <p className="text-lg font-bold text-gray-900">3 to 4 hours</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-emerald-600 font-bold text-xl">₹</span>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Starting Price</p>
                  <p className="text-lg font-bold text-gray-900">₹3499</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Pickup</p>
                  <p className="text-lg font-bold text-gray-900">Vizag (Visakhapatnam)</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-emerald-600" />
                <div>
                  <p className="text-sm text-gray-500 font-medium">Drop</p>
                  <p className="text-lg font-bold text-gray-900">Araku Valley</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-white" id="why-us">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-10 text-center">
            Why Choose Vizag to Araku Cabs?
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FeatureItem 
              icon={<ShieldCheck className="w-6 h-6 text-emerald-600" />}
              title="Experienced Drivers"
              description="Experienced drivers for ghat roads"
            />
            <FeatureItem 
              icon={<ThumbsUp className="w-6 h-6 text-emerald-600" />}
              title="Affordable Pricing"
              description="Affordable and transparent pricing"
            />
            <FeatureItem 
              icon={<Car className="w-6 h-6 text-emerald-600" />}
              title="Clean Vehicles"
              description="Clean and comfortable vehicles"
            />
            <FeatureItem 
              icon={<Clock className="w-6 h-6 text-emerald-600" />}
              title="Punctual Service"
              description="On-time pickup and drop"
            />
            <FeatureItem 
              icon={<ShieldCheck className="w-6 h-6 text-emerald-600" />}
              title="No Hidden Costs"
              description="No hidden charges"
            />
            <FeatureItem 
              icon={<PhoneCall className="w-6 h-6 text-emerald-600" />}
              title="24/7 Support"
              description="24/7 support"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50" id="services">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-10 text-center">
            Vizag to Araku Cabs – Our Taxi Services
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ServiceCard 
              icon={<MapPin className="w-8 h-8 text-emerald-600" />}
              title="One Way Vizag to Araku Cab"
              description="Book a comfortable Vizag to Araku one way cab at the best fare."
              delay={0.1}
            />
            <ServiceCard 
              icon={<Car className="w-8 h-8 text-emerald-600" />}
              title="Round Trip Cab Service"
              description="Enjoy a hassle-free round trip with our reliable Vizag to Araku cabs."
              delay={0.2}
            />
            <ServiceCard 
              icon={<MapPin className="w-8 h-8 text-emerald-600" />}
              title="Vizag to Araku Sightseeing Cab"
              description="Explore all the beautiful spots with our dedicated sightseeing taxi."
              delay={0.3}
            />
            <ServiceCard 
              icon={<Plane className="w-8 h-8 text-emerald-600" />}
              title="Vizag Airport to Araku Cab"
              description="Direct pickup from Vizag Airport and drop to your Araku hotel."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white" id="faq">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-gray-900 mb-4">
              Frequently Asked Questions – Vizag to Araku Cabs
            </h2>
          </div>
          <div className="space-y-4">
            <FaqItem 
              question="Q1: What is the price for Vizag to Araku cab?"
              answer="The starting price for Vizag to Araku cab is ₹3499 depending on vehicle type."
            />
            <FaqItem 
              question="Q2: How much time does it take from Vizag to Araku?"
              answer="It takes around 3 to 4 hours depending on traffic and road conditions."
            />
            <FaqItem 
              question="Q3: Is one-way cab available from Vizag to Araku?"
              answer="Yes, one-way taxi service is available at affordable prices."
            />
            <FaqItem 
              question="Q4: Is the route safe?"
              answer="Yes, the route is safe and drivers are experienced in ghat roads."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">
            Book Your Vizag to Araku Cabs Now
          </h2>
          <p className="text-xl text-emerald-100 mb-10">
            Call now or book via WhatsApp for instant confirmation and best price.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <a 
              href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 bg-white text-emerald-900 hover:bg-gray-100 px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl"
            >
              <PhoneCall className="w-6 h-6" />
              +91 9493159595
            </a>
            <a 
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1EBE5D] text-white px-8 py-4 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              WhatsApp Booking
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="text-2xl font-heading font-bold text-white tracking-tight mb-4">
                Araku<span className="text-emerald-500">Cabs</span>
              </div>
              <p className="text-gray-400 max-w-sm mb-6">
                Your trusted travel partner for exploring the pristine beauty of Araku Valley. Safe, reliable, and affordable taxi services.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#services" className="hover:text-emerald-400 transition-colors">Services</a></li>
                <li><a href="#why-us" className="hover:text-emerald-400 transition-colors">Why Choose Us</a></li>
                <li><a href="#reviews" className="hover:text-emerald-400 transition-colors">Reviews</a></li>
                <li><a href="#faq" className="hover:text-emerald-400 transition-colors">FAQs</a></li>
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

function ReviewCard({ name, date, text }: { name: string, date: string, text: string }) {
  return (
    <div className="bg-emerald-800/50 p-8 rounded-2xl border border-emerald-700/50">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
        ))}
      </div>
      <p className="text-emerald-50 mb-6 italic">&quot;{text}&quot;</p>
      <div>
        <div className="font-bold text-white">{name}</div>
        <div className="text-emerald-300 text-sm">{date}</div>
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
