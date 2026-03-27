import React from 'react';
import Image from 'next/image';
import { 
  MapPin, 
  Phone, 
  Clock, 
  ChevronRight, 
  Store, 
  ChefHat, 
  Info,
  CheckCircle2,
  Utensils
} from 'lucide-react';

export default function Home() {
  const menus = [
    {
      id: 1,
      name: "Gado-Gado Siram",
      desc: "Primadona kami. Racikan sayur mayur segar, tahu kuning, tempe krispi, dan telur rebus yang disiram saus kacang tanah pilihan dengan tekstur kental dan rasa gurih nan legit.",
      image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=800&auto=format&fit=crop",
      available: true,
      tag: "Terlaris"
    },
    {
      id: 2,
      name: "Karedok Mentah Segar",
      desc: "Cita rasa otentik Sunda. Irisan kacang panjang, kol, mentimun, dan tauge segar yang diulek mendadak dengan kencur harum, terasi udang, dan bumbu rahasia Masakan-Ku.",
      image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=800&auto=format&fit=crop",
      available: true,
      tag: "Favorit Sehat"
    },
    {
      id: 3,
      name: "Rujak Buah Serut/Potong",
      desc: "Kesegaran buah tropis pilihan mulai dari nanas madu, mangga muda, hingga bengkoang renyah, disajikan dengan sambal gula jawa pedas yang mengguncang lidah.",
      image: "https://images.unsplash.com/photo-1519996529931-28324d5a630e?q=80&w=800&auto=format&fit=crop",
      available: false,
      tag: "Segera Hadir"
    },
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-orange-100">
      
      {/* --- NAVBAR --- */}
      <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-xl border-b border-slate-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="bg-orange-600 p-1.5 rounded-lg shadow-md shadow-orange-200">
              <ChefHat className="text-white" size={20} />
            </div>
            <span className="text-lg font-black tracking-tighter text-slate-900">MASAKAN-KU.COM</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-xs font-bold text-slate-600 hover:text-orange-600 transition uppercase tracking-widest">Menu</a>
            <a href="#lokasi" className="text-xs font-bold text-slate-600 hover:text-orange-600 transition uppercase tracking-widest">Lokasi</a>
            <a href="https://wa.me/628123456789" className="bg-slate-950 text-white px-6 py-2 rounded-full text-xs font-bold hover:bg-orange-600 transition-all shadow-lg shadow-slate-200 uppercase tracking-widest">
              Pesan WA
            </a>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-16 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-orange-50 text-orange-700 px-4 py-1.5 rounded-full mb-6 border border-orange-100">
            <Store size={14} />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] leading-none">Kreo Selatan • Larangan • Tangerang</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black leading-tight tracking-tighter mb-6 text-slate-950">
            Kelezatan Tradisi <br />
            <span className="text-orange-600">Satu Ulekan Dadakan</span>
          </h1>
          <p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed font-medium">
            Kami menghidangkan kesegaran sayuran pilihan dengan racikan bumbu kacang legendaris. 
            Tanpa pengawet, tanpa pemanis buatan—murni kebahagiaan di setiap suapan.
          </p>
        </div>
      </section>

      {/* --- MENU SECTION --- */}
      <section id="menu" className="py-20 px-6 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-black tracking-tight text-slate-900 mb-2 uppercase">Menu Andalan Kami</h2>
            <p className="text-sm text-slate-500 font-bold uppercase tracking-widest">Segar • Alami • Mengenyangkan</p>
            <div className="h-1 w-16 bg-orange-500 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {menus.map((item) => (
              <div 
                key={item.id} 
                className={`group bg-white rounded-[2rem] overflow-hidden shadow-sm border border-slate-200 transition-all duration-500 ${
                  !item.available 
                    ? 'opacity-60 grayscale' 
                    : 'hover:shadow-xl hover:border-orange-100 hover:-translate-y-1'
                }`}
              >
                <div className="relative h-60 w-full bg-slate-200 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className={`text-[9px] font-black px-3 py-1.5 rounded-md uppercase tracking-[0.15em] shadow-md ${
                      !item.available ? 'bg-slate-800 text-white' : 'bg-white text-orange-600'
                    }`}>
                      {item.tag}
                    </span>
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-xl font-black mb-3 text-slate-900 leading-none uppercase tracking-tight">{item.name}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 min-h-[60px]">
                    {item.desc}
                  </p>
                  
                  {item.available ? (
                    <a href="https://wa.me/628123456789" className="flex items-center gap-2 text-xs font-black text-orange-600 hover:text-orange-800 transition-all group/btn uppercase tracking-widest">
                      Detail & Pesan 
                      <ChevronRight size={16} className="transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  ) : (
                    <div className="flex items-center gap-2 text-[10px] text-slate-400 font-bold bg-slate-50 px-4 py-2 rounded-xl w-fit border border-slate-100">
                      <Info size={14} />
                      HUBUNGI ADMIN UNTUK KETERSEDIAAN
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- SECTION LOKASI --- */}
      <section id="lokasi" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-slate-950 rounded-[3rem] p-8 md:p-16 text-white relative overflow-hidden flex flex-col md:flex-row gap-12 items-center">
            
            <div className="flex-1 relative z-10">
              <h2 className="text-3xl md:text-5xl font-black mb-10 leading-none uppercase tracking-tighter">
                Kunjungi <br /> <span className="text-orange-500">Kedai Kami</span>
              </h2>
              
              <div className="space-y-8">
                <div className="flex gap-5 items-start">
                  <div className="bg-white/5 p-3 rounded-xl text-orange-500 border border-white/10">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white uppercase tracking-widest">Alamat Kedai</h4>
                    <p className="text-slate-400 text-base leading-relaxed max-w-sm font-medium">
                      Jalan Pemuda No.61, RT 001/08,<br />
                      Kreo Selatan, Larangan, Tangerang
                    </p>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="bg-white/5 p-3 rounded-xl text-orange-500 border border-white/10">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm mb-1 text-white uppercase tracking-widest">Jam Operasional</h4>
                    <p className="text-slate-400 text-base font-medium">Setiap Hari: 09:00 — 17:00 WIB</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex-1 w-full relative z-10">
              <div className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl">
                <div className="flex items-center gap-3 mb-6 text-orange-600">
                  <Utensils size={28} />
                  <h4 className="text-2xl font-black text-slate-950 leading-none uppercase tracking-tight">Pemesanan</h4>
                </div>
                <div className="space-y-3 mb-8">
                  {[
                    "Siap antar area Larangan & sekitarnya", 
                    "Melayani Katering & Nasi Kotak", 
                    "Bumbu kacang dipisah (opsional)"
                  ].map((feature, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-slate-600 font-bold">
                      <CheckCircle2 size={14} className="text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <a href="https://wa.me/628123456789" className="block w-full text-center bg-orange-600 text-white font-black py-4 rounded-2xl shadow-lg hover:bg-orange-500 transition-all uppercase tracking-[0.2em] text-sm">
                  Chat via WhatsApp
                </a>
              </div>
            </div>

            {/* Efek Cahaya Dekoratif */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 blur-[100px] rounded-full -mr-32 -mt-32"></div>
          </div>
        </div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="py-12 px-6 border-t border-slate-100 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-4">
            <ChefHat className="text-orange-600" size={18}/>
            <span className="font-black text-sm text-slate-900 tracking-tighter uppercase">Masakan-Ku.com</span>
          </div>
          <p className="text-slate-400 text-[10px] font-bold tracking-[0.3em] uppercase">
            Warisan Rasa • Tangerang • 2026
          </p>
        </div>
      </footer>

    </div>
  );
}