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
      desc: "Menu andalan Puspitafood. Sayuran matang segar dengan siraman bumbu kacang tanah sangrai yang kental, gurih, dan legit khas ulekan Betawi.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      available: true,
      tag: "Paling Laris"
    },
    {
      id: 2,
      name: "Karedok Betawi",
      desc: "Kesegaran sayuran mentah yang diulek dadakan dengan kencur harum dan terasi pilihan. Segar dan nagih!",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      available: true,
      tag: "Segar & Sehat"
    },
    {
      id: 3,
      name: "Rujak Buah",
      desc: "Potongan buah tropis segar dengan sambal gula jawa pedas racikan dapur Puspitafood.",
      image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=800&auto=format&fit=crop",
      available: false,
      tag: "Segera Hadir"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100 overflow-x-hidden">
      
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-4 md:px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-lg shadow-md shadow-orange-200">
              <ChefHat className="text-white" size={18} />
            </div>
            <span className="text-lg md:text-xl font-black tracking-tighter uppercase">Puspitafood</span>
          </div>
          <div className="flex items-center gap-4 md:gap-8 font-bold text-slate-950">
            <a href="#menu" className="text-[10px] md:text-xs hover:text-orange-600 transition tracking-widest uppercase text-slate-950">Menu</a>
            <a href="#lokasi" className="text-[10px] md:text-xs hover:text-orange-600 transition tracking-widest uppercase text-slate-950">Lokasi</a>
          </div>
        </div>
      </nav>

      <section className="relative w-full aspect-[4/3] md:aspect-auto md:min-h-[85vh] flex items-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroBannerPath} 
            alt="Masakan Betawi Puspitafood"
            fill
            priority
            className="object-cover object-center brightness-100 md:brightness-[0.35]"
          />
        </div>

        <div className="hidden md:block max-w-6xl mx-auto px-6 relative z-10 text-white w-full py-12 md:py-20">
          <div className="max-w-4xl text-left">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-4 py-1.5 rounded-full mb-6 border border-orange-500 shadow-xl font-bold">
              <Utensils size={12} />
              <span className="text-[11px] tracking-[0.2em] leading-none uppercase">Kedai Rumahan Betawi</span>
            </div>
            <h1 className="text-5xl md:text-7xl lg:text-[8rem] font-black leading-[0.9] md:leading-[0.85] tracking-tighter mb-8 uppercase italic text-white">
              Asli Ulekan <br />
              <span className="text-orange-500 not-italic">Betawi</span>
            </h1>
            <p className="text-base md:text-xl text-slate-100 max-w-xl leading-relaxed mb-10 border-l-4 border-orange-500 pl-6 tracking-tight font-medium text-white">
              Cita rasa legendaris dari dapur Puspitafood. Bumbu kacang kental diulek dadakan, tanpa pengawet, murni rasa tradisional.
            </p>
            <div className="flex flex-row gap-4 font-bold">
              <a href="#menu" className="bg-white text-slate-950 px-10 py-5 rounded-2xl tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-2xl uppercase font-black text-base text-center">
                Lihat Menu
              </a>
              <div className="flex items-center justify-center gap-3 px-6 py-5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 text-slate-100 font-semibold">
                <Clock className="text-orange-500" size={18} />
                <span className="text-sm tracking-widest uppercase text-white">09:00 - 14:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-16 md:py-24 px-4 md:px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3 uppercase text-slate-950">Menu Puspitafood</h2>
            <p className="text-[10px] md:text-sm text-slate-500 font-semibold tracking-widest uppercase">Ulekan Dadakan • Bahan Segar Harian</p>
            <div className="h-1.5 w-16 md:w-24 bg-orange-600 mx-auto mt-4 md:mt-5 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10">
            {menus.map((item) => (
              <div 
                key={item.id} 
                className={`group bg-white rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-md border border-slate-200 transition-all duration-700 ${
                  !item.available ? 'opacity-60 grayscale' : 'hover:shadow-2xl hover:border-orange-100 md:hover:-translate-y-2'
                }`}
              >
                <div className="relative h-56 md:h-64 w-full bg-slate-200 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 md:group-hover:scale-110" />
                  <div className="absolute top-4 left-4 md:top-6 md:left-6 font-bold">
                    <span className={`text-[9px] md:text-[10px] px-3 py-1.5 md:px-4 md:py-2 rounded-lg shadow-lg uppercase ${
                      !item.available ? 'bg-slate-800 text-white' : 'bg-white text-orange-600'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <h3 className="text-xl md:text-2xl font-black mb-3 md:mb-4 leading-none tracking-tight uppercase text-slate-950">{item.name}</h3>
                  <p className="text-xs md:text-sm text-slate-500 leading-relaxed min-h-0 md:min-h-[60px] font-medium">{item.desc}</p>
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
                {/* Judul tetap center di mobile (text-center) dan left di desktop (md:text-left) */}
                <h2 className="text-3xl md:text-6xl font-black mb-10 md:mb-12 leading-none tracking-tighter uppercase text-center md:text-left text-white">
                  Mampir ke <br className="hidden md:block" /> <span className="text-orange-500">Kedai Kami</span>
                </h2>
                
                {/* Ikon dan Teks tetap rata kiri (text-left) */}
                <div className="flex flex-col gap-8 md:gap-10 items-start max-w-sm mx-auto md:mx-0">
                  <div className="flex items-center gap-5 md:gap-6 w-full">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 shadow-lg shrink-0">
                      <MapPin size={26} className="md:size-8" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-[12px] md:text-lg mb-0.5 tracking-widest uppercase font-bold text-white leading-tight">Alamat Kedai</h4>
                      <p className="text-slate-400 text-[11px] md:text-base leading-snug tracking-tight uppercase font-medium">
                        Jalan Pemuda No.61, RT 001/08,<br />
                        Kreo Selatan, Larangan, Tangerang
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-5 md:gap-6 w-full">
                    <div className="w-14 h-14 md:w-20 md:h-20 bg-white/10 rounded-2xl flex items-center justify-center text-orange-500 border border-white/10 shadow-lg shrink-0">
                      <Clock size={26} className="md:size-8" />
                    </div>
                    <div className="text-left">
                      <h4 className="text-[12px] md:text-lg mb-0.5 tracking-widest uppercase font-bold text-white leading-tight">Jam Operasional</h4>
                      <p className="text-slate-400 text-[11px] md:text-base leading-snug tracking-tight uppercase font-medium">
                        Setiap Hari: 09:00 — 14:00 WIB
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full relative z-10">
                <div className="bg-white p-7 md:p-10 lg:p-14 rounded-[2rem] md:rounded-[3.5rem] shadow-2xl text-slate-950 border-t-8 border-orange-600">
                  <div className="flex items-center gap-3 md:gap-4 mb-6 md:mb-8 text-orange-600">
                    <ShoppingBag size={28} />
                    <h4 className="text-lg md:text-2xl font-black leading-none tracking-tight uppercase">Beli Langsung</h4>
                  </div>
                  <div className="space-y-4 md:space-y-6">
                    <p className="text-sm md:text-base leading-relaxed tracking-tight font-bold text-slate-950">
                      Melayani pembelian langsung ke lokasi (Take Away / Dine-In)
                    </p>
                    <div className="space-y-3 md:space-y-4 pt-4 md:pt-6 border-t border-slate-100 font-semibold uppercase text-left">
                      {["Ulekan fresh dadakan", "Bumbu kacang fresh harian", "Bahan baku segar setiap pagi"].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 md:gap-4 text-[10px] md:text-sm tracking-tight text-slate-950">
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
                className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-orange-600 text-white px-4 py-2.5 md:px-6 md:py-3 rounded-lg md:rounded-xl font-bold flex items-center gap-2 shadow-2xl hover:bg-orange-500 transition-colors uppercase text-[10px] md:text-xs tracking-widest"
              >
                <ExternalLink size={14} />
                Buka di Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-12 md:py-16 px-6 border-t border-slate-100 text-center font-bold bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-4 md:mb-6">
            <ChefHat className="text-orange-600" size={20}/>
            <span className="text-lg md:text-2xl text-slate-950 tracking-tighter uppercase font-black">Puspitafood</span>
          </div>
          <p className="text-slate-400 text-[9px] md:text-xs tracking-[0.3em] md:tracking-[0.4em] uppercase font-semibold">
            Warisan Rasa Betawi • Larangan • 2026
          </p>
        </div>
      </footer>

    </div>
  );
}