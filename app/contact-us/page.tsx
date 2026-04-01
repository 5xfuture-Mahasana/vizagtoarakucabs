'use client';

import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { PhoneCall, Mail, MapPin, MessageCircle } from 'lucide-react';

const PHONE_NUMBER = "+91 9493159595";
const WHATSAPP_NUMBER = "919493159595";
const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=Hi%2C%20I%20would%20like%20to%20book%20a%20cab%20for%20Araku.`;

export default function ContactUs() {
  return (
    <main className="relative min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2000&auto=format&fit=crop"
            alt="Car driving on a scenic mountain road"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Contact Us</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">We are here to help you plan your perfect trip.</p>
        </div>
      </section>
      
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          
          <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h2>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <PhoneCall className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Call Us</h3>
                  <p className="text-gray-600 mb-2">We are available 24/7 for bookings and support.</p>
                  <a href={`tel:${PHONE_NUMBER.replace(/\s/g, '')}`} className="text-emerald-600 font-bold text-lg hover:underline">
                    {PHONE_NUMBER}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">WhatsApp</h3>
                  <p className="text-gray-600 mb-2">Chat with us for quick quotes and itineraries.</p>
                  <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-emerald-600 font-bold text-lg hover:underline">
                    Message on WhatsApp
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-emerald-600" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">Location</h3>
                  <p className="text-gray-600">
                    Visakhapatnam, Andhra Pradesh, India
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-emerald-900 p-8 md:p-12 rounded-2xl shadow-xl text-white">
            <h2 className="text-3xl font-bold mb-6">Send us a Message</h2>
            <p className="text-emerald-100 mb-8">Fill out the form below and we will get back to you shortly.</p>
            
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-emerald-100 mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 bg-emerald-800/50 border border-emerald-700 rounded-xl text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="John Doe"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-emerald-100 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-3 bg-emerald-800/50 border border-emerald-700 rounded-xl text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="+91 9876543210"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-emerald-100 mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  className="w-full px-4 py-3 bg-emerald-800/50 border border-emerald-700 rounded-xl text-white placeholder-emerald-300/50 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  placeholder="Tell us about your travel plans..."
                ></textarea>
              </div>
              
              <button type="submit" className="w-full bg-[#22c55e] hover:bg-[#1ea04c] text-white font-bold py-4 rounded-xl transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </section>
    </main>
  );
}
