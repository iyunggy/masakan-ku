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
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100">
      
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-lg shadow-md shadow-orange-200">
              <ChefHat className="text-white" size={20} />
            </div>
            <span className="text-xl font-black tracking-tighter uppercase">Puspitafood</span>
          </div>
          <div className="flex items-center gap-8 font-bold">
            <a href="#menu" className="text-xs hover:text-orange-600 transition tracking-widest uppercase">Menu</a>
            <a href="#lokasi" className="text-xs hover:text-orange-600 transition tracking-widest uppercase">Lokasi</a>
          </div>
        </div>
      </nav>

      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src={heroBannerPath} 
            alt="Masakan Betawi Puspitafood"
            fill
            priority
            className="object-cover object-center brightness-[0.3]"
          />
        </div>

        <div className="max-w-6xl mx-auto px-6 relative z-10 text-white w-full pt-32 pb-20">
          <div className="max-w-4xl">
            <div className="inline-flex items-center gap-2 bg-orange-600 text-white px-5 py-2 rounded-full mb-8 border border-orange-500 shadow-xl font-bold">
              <Utensils size={14} />
              <span className="text-[11px] tracking-[0.2em] leading-none uppercase">Kedai Rumahan Betawi</span>
            </div>
            <h1 className="text-6xl md:text-[8rem] font-black leading-[0.85] tracking-tighter mb-8 uppercase italic">
              Asli Ulekan <br />
              <span className="text-orange-500 not-italic">Betawi</span>
            </h1>
            <p className="text-lg md:text-xl text-slate-100 max-w-xl leading-relaxed mb-12 border-l-4 border-orange-500 pl-6 tracking-tight font-medium">
              Cita rasa legendaris dari dapur Puspitafood. Bumbu kacang kental diulek dadakan, tanpa pengawet, murni rasa tradisional.
            </p>
            <div className="flex flex-wrap gap-4 font-bold">
              <a href="#menu" className="bg-white text-slate-950 px-10 py-5 rounded-2xl tracking-widest hover:bg-orange-500 hover:text-white transition-all shadow-2xl uppercase font-black">
                Lihat Menu
              </a>
              <div className="flex items-center gap-3 px-6 py-5 bg-black/40 backdrop-blur-md rounded-2xl border border-white/20 text-slate-100 font-semibold">
                <Clock className="text-orange-500" size={20} />
                <span className="text-sm tracking-widest uppercase">09:00 - 14:00</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="menu" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black tracking-tight mb-3 uppercase">Menu Puspitafood</h2>
            <p className="text-sm text-slate-500 font-semibold tracking-widest uppercase">Ulekan Dadakan • Bahan Segar Harian</p>
            <div className="h-1.5 w-24 bg-orange-600 mx-auto mt-5 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {menus.map((item) => (
              <div 
                key={item.id} 
                className={`group bg-white rounded-[2.5rem] overflow-hidden shadow-md border border-slate-200 transition-all duration-700 ${
                  !item.available ? 'opacity-60 grayscale' : 'hover:shadow-2xl hover:border-orange-100 hover:-translate-y-2'
                }`}
              >
                <div className="relative h-64 w-full bg-slate-200 overflow-hidden">
                  <Image src={item.image} alt={item.name} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute top-6 left-6 font-bold">
                    <span className={`text-[10px] px-4 py-2 rounded-lg shadow-lg uppercase ${
                      !item.available ? 'bg-slate-800 text-white' : 'bg-white text-orange-600'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-2xl font-black mb-4 leading-none tracking-tight uppercase">{item.name}</h3>
                  <p className="text-sm text-slate-500 leading-relaxed min-h-[60px] font-medium">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="lokasi" className="py-24 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-950 rounded-[4rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col gap-12">
            <div className="flex flex-col md:flex-row gap-16 items-start">
              <div className="flex-1 relative z-10">
                <h2 className="text-4xl md:text-6xl font-black mb-12 leading-none tracking-tighter uppercase">
                  Mampir ke <br /> <span className="text-orange-500">Kedai Kami</span>
                </h2>
                <div className="space-y-8">
                  <div className="flex gap-6 items-start">
                    <div className="bg-white/10 p-4 rounded-2xl text-orange-500 border border-white/10 shadow-lg">
                      <MapPin size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1 tracking-widest uppercase font-bold text-white">Alamat Kedai</h4>
                      <p className="text-slate-400 text-lg leading-relaxed max-w-sm tracking-tight uppercase font-medium">
                        Jalan Pemuda No.61, RT 001/08,<br />
                        Kreo Selatan, Larangan, Tangerang
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6 items-start">
                    <div className="bg-white/10 p-4 rounded-2xl text-orange-500 border border-white/10 shadow-lg">
                      <Clock size={28} />
                    </div>
                    <div>
                      <h4 className="text-lg mb-1 tracking-widest uppercase font-bold text-white">Jam Operasional</h4>
                      <p className="text-slate-400 text-lg tracking-tight uppercase font-medium">Setiap Hari: 09:00 — 14:00 WIB</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex-1 w-full relative z-10">
                <div className="bg-white p-8 md:p-10 rounded-[3rem] shadow-2xl text-slate-950 border-t-8 border-orange-600">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3 text-orange-600">
                      <ShoppingBag size={24} />
                      <h4 className="text-xl font-black leading-none tracking-tight uppercase">Beli Langsung</h4>
                    </div>
                  </div>
                  <div className="space-y-6">
                    <p className="text-sm leading-relaxed tracking-tight font-bold">
                      Melayani pembelian langsung ke lokasi (Take Away / Dine-In)
                    </p>
                    <div className="space-y-3 pt-4 border-t border-slate-100 font-semibold uppercase">
                      {["Ulekan fresh dadakan", "Bumbu kacang fresh", "Bahan baku harian"].map((text, i) => (
                        <div key={i} className="flex items-center gap-3 text-[11px] tracking-tight">
                          <CheckCircle2 size={14} className="text-green-500 shrink-0" />
                          <span>{text}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-[400px] rounded-[3rem] overflow-hidden border-4 border-white/10 relative group">
              <iframe
                src={googleMapsUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
              ></iframe>
              <a 
                href={directMapsLink}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-6 right-6 bg-orange-600 text-white px-6 py-3 rounded-xl font-bold flex items-center gap-2 shadow-2xl hover:bg-orange-500 transition-colors uppercase text-xs tracking-widest"
              >
                <ExternalLink size={16} />
                Buka di Maps
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-16 px-6 border-t border-slate-100 text-center font-bold bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-3 mb-6">
            <ChefHat className="text-orange-600" size={24}/>
            <span className="text-2xl text-slate-950 tracking-tighter uppercase font-black">Puspitafood</span>
          </div>
          <p className="text-slate-400 text-xs tracking-[0.4em] uppercase font-semibold">
            Warisan Rasa Betawi • Larangan • 2026
          </p>
        </div>
      </footer>

    </div>
  );
}