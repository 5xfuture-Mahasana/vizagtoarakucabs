import Navbar from '@/components/Navbar';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <main className="relative min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=2000&auto=format&fit=crop"
            alt="Scenic mountain road in Araku Valley"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">About Us</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">Your trusted travel partner for exploring the pristine beauty of Araku Valley.</p>
        </div>
      </section>
      
      <section className="py-20 px-4 max-w-4xl mx-auto">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100">
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            Welcome to Araku Cabs, your trusted travel partner for exploring the pristine beauty of Araku Valley and Visakhapatnam. We specialize in providing safe, reliable, and comfortable outstation taxi services.
          </p>
          
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            With years of experience navigating the scenic but challenging ghat roads of the Eastern Ghats, our local drivers ensure that your journey is not just a commute, but a memorable part of your vacation.
          </p>
          
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Our Mission</h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            To provide transparent, affordable, and high-quality transportation services that allow tourists to experience the magic of Araku Valley without any travel-related stress.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">1000+</div>
              <div className="text-gray-700 font-medium">Happy Customers</div>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">50+</div>
              <div className="text-gray-700 font-medium">Verified Drivers</div>
            </div>
            <div className="text-center p-6 bg-emerald-50 rounded-xl">
              <div className="text-3xl font-bold text-emerald-600 mb-2">24/7</div>
              <div className="text-gray-700 font-medium">Customer Support</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
