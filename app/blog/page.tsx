import Navbar from '@/components/Navbar';
import Image from 'next/image';
import Link from 'next/link';

export default function Blog() {
  const posts = [
    {
      title: "Top 5 Places to Visit in Araku Valley",
      excerpt: "Discover the hidden gems of Araku Valley, from the ancient Borra Caves to the lush coffee plantations.",
      date: "March 15, 2026",
      image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "Best Time to Visit Vizag and Araku",
      excerpt: "Planning a trip? Find out the best season to experience the pleasant weather and scenic beauty of the Eastern Ghats.",
      date: "February 28, 2026",
      image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=800&auto=format&fit=crop"
    },
    {
      title: "A Foodie's Guide to Araku",
      excerpt: "Don't miss out on the famous Bamboo Chicken and Araku Coffee. Here is your ultimate food guide.",
      date: "January 10, 2026",
      image: "https://images.unsplash.com/photo-1542224566-6e85f2e6772f?q=80&w=800&auto=format&fit=crop"
    }
  ];

  return (
    <main className="relative min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=2000&auto=format&fit=crop"
            alt="Beautiful green terraced valley in Araku"
            fill
            className="object-cover"
            priority
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>
        <div className="relative z-10 text-center px-4 mt-16">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-4">Travel Blog</h1>
          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto">Tips, guides, and stories for your next adventure.</p>
        </div>
      </section>
      
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative h-48 w-full">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-6">
                <div className="text-sm text-emerald-600 font-medium mb-2">{post.date}</div>
                <h2 className="text-xl font-bold text-gray-900 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                <Link href="#" className="text-emerald-600 font-semibold hover:text-emerald-700 transition-colors">
                  Read More &rarr;
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
