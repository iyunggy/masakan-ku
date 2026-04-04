import React from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Clock, 
  ChefHat, 
  CheckCircle2, 
  ShoppingBag, 
  Utensils, 
  ExternalLink 
} from 'lucide-react';

export default function Home() {
  const heroBannerPath = "/images/hero-banner.png";
  const googleMapsUrl = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d638.4964228694924!2d106.73986185603718!3d-6.239933929589058!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sid!2sid!4v1774752304150!5m2!1sid!2sid";
  const directMapsLink = "https://maps.app.goo.gl/jsnH6aRKAXgJ7n5P7"; 

  const menus = [
    {
      id: 1,
      name: "Gado-Gado Betawi",
      desc: "Racikan sayur segar dengan bumbu kacang tanah sangrai yang kental dan legit. Rasa klasik yang selalu dirindukan keluarga.",
      image: "/images/menus/gado-gado.jpg",
      available: true,
      tag: "Favorit Keluarga",
      time: "09:00 - 14:00"
    },
    {
      id: 2,
      name: "Karedok Betawi",
      desc: "Sensasi segar sayuran mentah dengan aroma kencur pilihan. Pilihan sehat dan nikmat untuk makan siang Anda.",
      image: "/images/menus/karedok.jpeg",
      available: true,
      tag: "Segar & Sehat",
      time: "09:00 - 14:00"
    },
    {
      id: 3,
      name: "Nasi Uduk Betawi",
      desc: "Nasi uduk harum santan dengan rempah autentik, bihun tahu tempe, semur telor, dan semur jengkol yang bikin nambah lagi.",
      image: "/images/menus/nasi-uduk.jpg",
      available: true,
      tag: "Primadona Malam",
      time: "16:30 - Malam"
    },
    {
      id: 4,
      name: "Rujak Buah",
      desc: "Potongan buah tropis segar dengan sambal gula jawa pedas. Penutup sempurna untuk hari yang produktif.",
      image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=800&auto=format&fit=crop",
      available: false,
      tag: "Segera Hadir",
      time: "09:00 - 14:00"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 overflow-x-hidden">
      
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="bg-orange-600 p-1.5 rounded-lg shadow-md group-hover:rotate-12 transition-transform">
              <ChefHat className="text-white" size={18} />
            </div>
            <span className="text-lg md:text-xl font-bold tracking-tight">Puspitafood</span>
          </div>
          <div className="flex items-center gap-4 md:gap-8 font-semibold">
            <a href="#menu" className="text-xs hover:text-orange-600 transition-colors">Menu</a>
            <a href="#lokasi" className="text-xs hover:text-orange-600 transition-colors">Lokasi</a>
          </div>
        </div>
      </nav>

      <section className="relative w-full aspect-[4/3] md:aspect-auto md:min-h-[85vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroBannerPath} 
            alt="Hero Banner"
            fill
            priority
            className="object-cover object-center brightness-100 md:brightness-[0.4]"
          />
        </div>

        <div className="hidden md:block max-w-6xl mx-auto px-6 relative z-10 text-white w-full py-12 md:py-20 animate-[fade-in-up_0.8s_ease-out]">
          <div className="max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 bg-orange-600/90 text-white px-4 py-1.5 rounded-full mb-6 border border-orange-400 shadow-xl font-semibold backdrop-blur-sm">
              <Utensils size={12} />
              <span className="text-[11px] tracking-wide leading-none">Rasa Autentik Sejak Dahulu</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[7.5rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 italic text-white">
              Warisan Rasa <br />
              <span className="text-orange-500 not-italic">Untuk Semua</span>
            </h1>
            <p className="text-base md:text-xl text-slate-100 max-w-xl leading-relaxed mb-10 border-l-4 border-orange-500 pl-6 font-medium">
              Dari ulekan dadakan yang dirindukan orang tua, hingga gurihnya nasi uduk yang dicintai anak muda. Di Puspitafood, semua lidah punya cerita.
            </p>
            <div className="flex flex-row gap-4 font-bold">
              <a href="#menu" className="bg-white text-slate-950 px-10 py-5 rounded-2xl hover:bg-orange-500 hover:text-white transition-all hover:shadow-xl text-base text-center active:scale-95">
                Jelajahi Menu
              </a>
              <div className="flex items-center justify-center gap-3 px-6 py-5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 text-slate-100 font-semibold">
                <Clock className="text-orange-500" size={18} />
                <span className="text-sm">Selalu Fresh Setiap Hari</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3">Menu Puspitafood</h2>
            <p className="text-xs md:text-sm text-slate-500 font-semibold tracking-wide">Pilihan Terbaik • Bahan Segar Harian • Pagi s/d Malam</p>
            <div className="h-1.5 w-16 md:w-24 bg-orange-600 mx-auto mt-4 md:mt-5 rounded-full shadow-lg"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 text-slate-950">
            {menus.map((item) => (
              <div 
                key={item.id} 
                className={`group bg-white rounded-[2rem] overflow-hidden shadow-md border border-slate-200 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  !item.available ? 'opacity-60 grayscale' : ''
                }`}
              >
                <div className="relative h-56 w-full bg-slate-200 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-4 left-4 font-bold flex flex-col gap-2">
                    <span className={`text-[9px] px-3 py-1.5 rounded-lg shadow-lg uppercase ${
                      !item.available ? 'bg-slate-800 text-white' : 'bg-white text-orange-600'
                    }`}>
                      {item.tag}
                    </span>
                    {item.available && (
                      <span className="text-[9px] px-3 py-1.5 rounded-lg shadow-lg uppercase bg-orange-600 text-white flex items-center gap-1">
                        <Clock size={10} /> {item.time}
                      </span>
                    )}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-black mb-2 leading-none tracking-tight">{item.name}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lokasi" className="py-16 md:py-24 px-4 md:px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-950 rounded-[2.5rem] md:rounded-[4rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col gap-10 md:gap-12">
            <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
              <div className="flex-1 relative z-10 w-full text-center md:text-left">
                <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-12 leading-none tracking-tighter text-white">
                  Mampir ke <br className="hidden md:block" /> <span className="text-orange-500">Kedai Kami</span>
                </h2>
                
                <div className="flex flex-col gap-8 md:gap-10 items-start max-w-sm mx-auto md:mx-0">
                  <div className="flex items-center gap-5 md:gap-6 w-full">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 shadow-lg shrink-0 transition-transform group hover:rotate-6">
                      <MapPin size={26} className="md:size-8" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm md:text-lg mb-0.5 font-bold text-white leading-tight">Alamat Kedai</h4>
                      <p className="text-slate-400 text-[11px] md:text-base leading-snug tracking-tight font-medium">
                        Jalan Pemuda No.61, RT 001/08,<br />
                        Kreo Selatan, Larangan, Tangerang
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 md:gap-6 w-full">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 shadow-lg shrink-0 transition-transform group hover:-rotate-6">
                      <Clock size={26} className="md:size-8" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-sm md:text-lg mb-0.5 font-bold text-white leading-tight">Jam Operasional</h4>
                      <p className="text-slate-400 text-[11px] md:text-base leading-snug tracking-tight font-medium">
                        Ulekan: 09:00 — 14:00 WIB <br />
                        Nasi Uduk: 16:30 — Malam
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full relative z-10 text-slate-950">
                <div className="bg-white p-7 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl border-t-8 border-orange-600">
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 text-orange-600">
                    <ShoppingBag size={28} />
                    <h4 className="text-xl md:text-2xl font-black leading-none tracking-tight">Beli Langsung</h4>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-sm md:text-base leading-relaxed font-bold">
                      Melayani pembelian langsung ke lokasi (Take Away / Dine-In)
                    </p>
                    <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-slate-100 font-bold text-left">
                      {["Ulekan fresh dadakan (Pagi)", "Nasi uduk rempah (Sore)", "Bahan baku segar harian"].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-sm">
                          <CheckCircle2 size={16} className="text-green-500 shrink-0" />
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[300px] md:h-[400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden border-4 border-white/10 relative group">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 md:group-hover:grayscale-0 md:group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <a 
                href={directMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-orange-600 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold flex items-center gap-2 shadow-2xl hover:bg-orange-500 transition-colors text-[10px] md:text-xs tracking-wider"
              >
                <ExternalLink size={14} />
                Buka di Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 md:py-16 px-6 border-t border-slate-100 text-center font-bold bg-white text-slate-950">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <ChefHat className="text-orange-600" size={20}/>
            <span className="text-lg md:text-2xl tracking-tighter font-black">Puspitafood</span>
          </div>
          <p className="text-slate-400 text-[9px] md:text-xs tracking-widest font-semibold">
            Warisan Rasa Betawi • Larangan • 2026
          </p>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />

    </div>
  );
}