import { 
  MapPin, 
  Phone, 
  MessageCircle, 
  Clock, 
  CheckCircle2, 
  Mail, 
  Navigation,
  BookOpen,
  Coffee,
  ShieldCheck,
  ChevronRight
} from "lucide-react";

export default function App() {
  const phone = "+919446566673";
  const whatsappUrl = "https://wa.me/919446566673";
  const email = "idealcet@gmail.com";
  const mapLink = "https://share.google/21oaQZXa5TeeLM52P";

  return (
    <div className="min-h-screen bg-[#F8F8F6] font-sans selection:bg-brand-yellow selection:text-black">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-[68px] h-[68px] bg-brand-yellow rounded-full flex flex-col items-center justify-center text-black shadow-sm shrink-0" style={{ fontFamily: "'Opificio', 'OpificioRounded', 'Varela Round', sans-serif" }}>
              <span className="text-[20px] tracking-tight leading-none font-semibold mt-1">ideal</span>
              <span className="font-bold text-[7px] tracking-[0.15em] leading-none mt-0.5 ml-0.5">enterprises</span>
            </div>
            <span className="hidden sm:block font-bold text-xl tracking-tight text-gray-900 ml-1">
              Ideal Enterprises
            </span>
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-gray-600">
            <a href="#services" className="hover:text-black transition-colors">Services</a>
            <a href="#about" className="hover:text-black transition-colors">About Us</a>
            <a href="#location" className="hover:text-black transition-colors">Location</a>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href={`tel:${phone}`}
              className="hidden md:flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-black transition-colors"
            >
              <Phone className="w-4 h-4" />
              {phone}
            </a>
            <a 
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-yellow text-black px-5 py-2.5 rounded-lg font-bold text-sm shadow-sm hover:bg-brand-yellow-dark transition-colors"
            >
              Contact Us
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-50 text-yellow-800 text-xs font-bold rounded-full border border-yellow-200">
              <MapPin className="w-4 h-4" />
              CET Junction, Thiruvananthapuram
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1]">
              Your local hub for <span className="text-brand-yellow underline decoration-2 underline-offset-8">learning</span> & living essentials.
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl leading-relaxed">
              Everything you need for your studies and daily life under one roof. Conveniently located near the College of Engineering Trivandrum, open seven days a week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href={`tel:${phone}`}
                className="bg-brand-yellow text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all hover:bg-brand-yellow-dark shadow-lg shadow-yellow-200/50 flex items-center justify-center gap-2"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black bg-transparent px-8 py-4 rounded-lg text-lg font-bold hover:bg-black/5 transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </div>
            <div className="flex items-center gap-6 text-sm text-gray-500 font-medium pt-4">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-black" />
                Open Today until 8:30 PM
              </div>
              <div className="flex items-center gap-2 relative">
                <ShieldCheck className="w-4 h-4 text-black" />
                Trusted by CET Students
              </div>
            </div>
          </div>
          
          <div className="flex-1 w-full relative">
            <div className="relative w-full aspect-[4/5] object-cover rounded-[40px] overflow-hidden shadow-2xl bg-brand-yellow flex flex-col items-center text-center text-black pt-16">
              
              <div className="flex-1 flex flex-col items-center justify-center">
                <h2 className="text-[120px] md:text-[140px] font-bold leading-none mb-12 -rotate-2" style={{ fontFamily: "'Dancing Script', cursive", fontWeight: 700 }}>
                  hello!
                </h2>
                
                <div className="space-y-4 mb-10 w-full flex flex-col items-center">
                  <p className="text-sm font-medium tracking-widest uppercase">to socials by</p>
                  
                  <div className="flex flex-col items-center justify-center mt-3" style={{ fontFamily: "'Opificio', 'OpificioRounded', 'Varela Round', sans-serif" }}>
                    <span className="font-bold text-5xl tracking-normal leading-none font-medium">ideal</span>
                  </div>
                  
                  <div className="flex items-center justify-center gap-3 mt-4">
                    <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 448 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"></path></svg>
                    </div>
                    <div className="w-10 h-10 border-2 border-black rounded-lg flex items-center justify-center">
                      <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 320 512" height="22" width="22" xmlns="http://www.w3.org/2000/svg"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"></path></svg>
                    </div>
                  </div>
                  
                  <p className="text-sm font-medium mt-6">{email}</p>
                </div>
              </div>
              
              <div className="px-8 pb-10 w-full mb-8">
                <a href={mapLink} target="_blank" rel="noopener noreferrer" className="bg-white text-[#2196f3] px-6 py-4 rounded-xl text-xl font-bold flex items-center justify-center gap-3 shadow-[0_4px_14px_0_rgba(0,118,255,0.19)] hover:shadow-[0_6px_20px_rgba(0,118,255,0.23)] transition-all">
                  <svg stroke="currentColor" fill="none" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round" height="24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                  MAPS.GOOGLE.COM
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Everything you need in one place</h2>
            <p className="text-gray-600 text-lg">We carry a comprehensive selection of items designed to support your academic and everyday residential needs.</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-200 cursor-pointer">
              <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center mb-6 text-black shadow-sm">
                <BookOpen className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Essentials</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                From notebooks, pens, and project materials to specialized collegiate stationery. We ensure students and professionals have exactly what they need to succeed.
              </p>
              <ul className="space-y-3">
                {["Academic Notebooks & Paper", "Pens, Markers & Art Supplies", "Project & Presentation Materials", "General Office Supplies"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="bg-white p-8 rounded-xl border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-gray-200 cursor-pointer">
              <div className="w-14 h-14 bg-brand-yellow rounded-full flex items-center justify-center mb-6 text-black shadow-sm">
                <Coffee className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Living Essentials</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Beyond the classroom, we stock essential everyday items perfect for hostel living, local residents, and quick conveniences without traveling far.
              </p>
              <ul className="space-y-3">
                {["Hostel & Room Basic Needs", "Daily Personal Care Items", "Quick Snacks & Refreshments", "Everyday Convenience Goods"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-medium text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-black" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* About & Trust Section */}
      <section id="about" className="py-24 bg-gray-900 text-white px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8 z-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight">The trusted choice at CET Junction.</h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Ideal Enterprises isn't just a shop; it's a dedicated local institution situated perfectly in Ideal Towers, Sreekariyam. For years, we've focused entirely on providing exactly what our community and students demand. No long trips required—just simple, reliable convenience right in your neighborhood.
            </p>
            <div className="grid grid-cols-2 gap-6 pt-4 border-t border-gray-800">
              <div>
                <p className="text-3xl font-bold text-brand-yellow mb-2">7 Days</p>
                <p className="text-sm font-medium text-gray-400">Open all week</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-brand-yellow mb-2">12 Hrs</p>
                <p className="text-sm font-medium text-gray-400">Morning 'til night</p>
              </div>
            </div>
          </div>
          
          {/* Enhanced Image Re-creation */}
          <div className="relative h-[480px] w-full rounded-[40px] p-2 bg-gradient-to-br from-brand-yellow/40 via-gray-800 to-gray-900 shadow-2xl group">
            <div className="absolute inset-0 bg-brand-yellow/10 blur-3xl rounded-[40px] opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
            <div className="relative w-full h-full rounded-[32px] overflow-hidden bg-gray-800 border box-border border-gray-700/50">
              {/* College of Engineering Trivandrum Aesthetic */}
              <img 
                src="https://images.unsplash.com/photo-1541829070764-84a7d30dd3f3?auto=format&fit=crop&w=1200&q=80" 
                alt="College Campus" 
                className="object-cover w-full h-full opacity-60 mix-blend-overlay group-hover:scale-105 group-hover:opacity-80 transition-all duration-1000 ease-out"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-brand-yellow/10 mix-blend-multiply"></div>
              
              {/* Badge overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between">
                 <div className="bg-gray-900/80 backdrop-blur-md px-5 py-3 rounded-2xl border border-gray-700 shadow-xl flex items-center gap-3 group-hover:-translate-y-1 transition-transform duration-500">
                   <div className="w-10 h-10 bg-brand-yellow rounded-full flex flex-col items-center justify-center text-black shrink-0">
                      <span className="font-bold text-[13px] tracking-tight leading-none mt-1">ideal</span>
                   </div>
                   <div>
                     <p className="text-sm font-bold text-white">Serving CET</p>
                     <p className="text-xs text-brand-yellow font-medium">Since establishment</p>
                   </div>
                 </div>
                 
                 <div className="hidden sm:flex bg-brand-yellow/10 backdrop-blur-md w-12 h-12 rounded-full items-center justify-center border border-brand-yellow/20 text-brand-yellow group-hover:rotate-12 transition-transform duration-500">
                    <ShieldCheck className="w-5 h-5" />
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reassurance / Credibility */}
      <section className="py-20 bg-brand-yellow px-6">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <h2 className="text-3xl font-bold text-black">Why the Local Community Counts on Us</h2>
          <div className="flex flex-wrap justify-center gap-4 text-black font-semibold pt-8">
            {["Premium Product Quality", "Always Fully Stocked", "Student-Friendly Access", "Fair Local Pricing"].map((perk, i) => (
              <div key={i} className="flex items-center gap-2 bg-black/5 px-4 py-2 rounded-full border border-black/10">
                <CheckCircle2 className="w-5 h-5 text-black" />
                {perk}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="location" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Information Card */}
          <div className="bg-white p-8 md:p-10 rounded-xl shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] border border-[#E5E7EB] flex flex-col justify-center space-y-10">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-4 tracking-tight">Visit us today</h2>
              <p className="text-gray-600">We respond quickly during business hours. Drop by the store, give us a call, or send a quick WhatsApp.</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 cursor-pointer group" onClick={() => window.open(mapLink, '_blank')}>
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center group-hover:bg-brand-yellow transition-colors shrink-0">
                  <MapPin className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                  <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                    Ideal Towers, CET Junction,<br />
                    Sreekariyam, Thiruvananthapuram
                  </p>
                  <span className="text-black text-sm font-semibold mt-2 inline-flex items-center gap-1 group-hover:underline">
                    Get Directions <ChevronRight className="w-4 h-4" />
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Opening Hours</h4>
                  <p className="text-gray-600 text-sm">
                    Monday to Sunday<br />
                    Morning 8:30 AM – 8:30 PM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-gray-900" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">Direct Contact</h4>
                  <div className="space-y-2 mt-2">
                    <a href={`tel:${phone}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-black font-medium">
                       {phone}
                    </a>
                    <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-gray-600 hover:text-green-600 font-medium">
                       WhatsApp Message
                    </a>
                    <a href={`mailto:${email}`} className="flex items-center gap-2 text-sm text-gray-600 hover:text-black font-medium">
                       {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="pt-4">
               <a 
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gray-900 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-800 transition-all flex items-center justify-center gap-2"
              >
                Send a Message
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Store Interior / Actions */}
          <div className="relative h-[600px] lg:h-auto rounded-xl overflow-hidden border border-[#E5E7EB] shadow-[0_4px_6px_-1px_rgba(0,0,0,0.05)] group">
            <img 
              src="https://images.unsplash.com/photo-1513346940221-6f673d962e97?auto=format&fit=crop&w=1200&q=80" 
              alt="Inside Ideal Enterprises" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gray-900/10 group-hover:bg-gray-900/20 transition-colors"></div>
            
            <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
              <div className="max-w-md bg-white p-6 rounded-2xl shadow-xl backdrop-blur-md bg-white/95">
                <h3 className="font-bold text-gray-900 text-lg mb-2">Step inside our vibrant store</h3>
                <p className="text-sm text-gray-600 mb-6">Explore our extensive collection of art supplies, stationary, and everyday essentials directly at CET Junction.</p>
                <a 
                  href={mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full bg-brand-yellow text-black font-bold py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-yellow-400 shadow-sm transition-colors"
                >
                  <Navigation className="w-4 h-4" />
                  Get Google Map Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200 py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-brand-yellow rounded-full flex flex-col items-center justify-center text-black shrink-0" style={{ fontFamily: "'Opificio', 'OpificioRounded', 'Varela Round', sans-serif" }}>
              <span className="text-[17px] tracking-tight leading-none font-semibold mt-1">ideal</span>
              <span className="font-bold text-[6px] tracking-[0.15em] leading-none mt-0.5 ml-0.5">enterprises</span>
            </div>
            <span className="font-bold text-lg tracking-tight text-gray-900 ml-1">
              Ideal Enterprises
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 md:gap-12 text-sm text-gray-500 text-center md:text-left">
            <span>Sreekariyam, Thiruvananthapuram</span>
            <a href={`tel:${phone}`} className="hover:text-black transition-colors">{phone}</a>
            <a href={`mailto:${email}`} className="hover:text-black transition-colors">{email}</a>
          </div>
          
          <div className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Ideal Enterprises. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
