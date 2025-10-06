import { useState } from "react";
import { MessageCircle, Users, Handshake, FileText, Factory, CreditCard, Truck, Package, Clock, Wallet, Sparkles } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

const OrderSystem = () => {
  const [selectedStep, setSelectedStep] = useState<number | null>(null);

  const processFlow = [
    { 
      icon: MessageCircle, 
      label: "Chat", 
      color: "bg-accent", 
      iconColor: "text-black", 
      lineColor: "bg-accent",
      title: "Chat dengan Tim Kami",
      description: "Mulai percakapan dengan tim kami melalui WhatsApp untuk memulai proses pemesanan. Kami siap membantu Anda kapan saja!"
    },
    { 
      icon: Users, 
      label: "Konsultasi", 
      color: "bg-accent", 
      iconColor: "text-black", 
      lineColor: "bg-accent",
      title: "Konsultasi Awal",
      description: "Costumer dapat memulai proses pemesanan dengan menghubungi kami melalui WhatsApp. Tim kami akan melakukan sesi konsultasi untuk memahami kebutuhan Anda, mulai dari jenis produk, bahan yang diinginkan, hingga estimasi kuantitas. Setelah spesifikasi disepakati, kami akan mengirimkan penawaran harga dalam bentuk invoice."
    },
    { 
      icon: Handshake, 
      label: "Deal", 
      color: "bg-accent", 
      iconColor: "text-black", 
      lineColor: "bg-accent",
      title: "Kesepakatan Deal",
      description: "Setelah konsultasi, kami akan menyepakati detail produk, harga, dan timeline. Kesepakatan ini akan menjadi dasar untuk proses selanjutnya."
    },
    { 
      icon: FileText, 
      label: "DP", 
      color: "bg-accent", 
      iconColor: "text-black", 
      lineColor: "bg-accent",
      title: "Down Payment (DP)",
      description: "Pembayaran DP sebesar 50% dari total nilai invoice sebagai konfirmasi pemesanan dan dasar dimulainya proses produksi. Minimum order adalah 12 PCS untuk efisiensi produksi."
    },
    { 
      icon: Factory, 
      label: "Produksi", 
      color: "bg-accent", 
      iconColor: "text-black", 
      lineColor: "bg-accent",
      title: "Proses Produksi",
      description: "Produksi akan dimulai setelah pembayaran DP diterima. Estimasi waktu produksi adalah antara 10 hingga 23 hari kerja, tergantung kompleksitas desain dan jumlah pesanan. Pelanggan akan mendapatkan update secara berkala mengenai progress produksi untuk memastikan transparansi dan kenyamanan selama proses berlangsung."
    },
    { 
      icon: CreditCard, 
      label: "Pelunasan", 
      color: "bg-accent", 
      iconColor: "text-black", 
      lineColor: "bg-accent",
      title: "Pelunasan",
      description: "Pelunasan sebesar 50% dilakukan setelah produksi selesai dan produk siap untuk dikirim. Tim kami akan menghubungi pelanggan untuk pemberitahuan pelunasan sebelum pengiriman dilakukan."
    },
    { 
      icon: Truck, 
      label: "Pengiriman", 
      color: "bg-accent", 
      iconColor: "text-black", 
      lineColor: "bg-accent",
      title: "Pengiriman Produk",
      description: "Setelah pelunasan, produk akan segera dikirim ke alamat tujuan. Kami akan memberikan informasi tracking untuk memantau pengiriman produk Anda."
    }
  ];

  return (
    <section className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-10 max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4">
            Sistem <span style={{ color: '#343CCD' }}>Order</span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Proses pemesanan yang mudah dan transparan untuk kenyamanan Anda
          </p>
        </div>

        {/* Two Column Layout */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 mb-12">
          {/* Left Column - Alur Pembelian (Vertical) */}
          <div>
            <h3 className="text-2xl md:text-3xl font-black text-center lg:text-left mb-8 text-foreground">
              Alur Pembelian
            </h3>
            <div className="flex flex-col space-y-4">
              {processFlow.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <button 
                      onClick={() => setSelectedStep(index)}
                      className="flex items-center gap-4 w-full group cursor-pointer"
                    >
                      <div className={`${step.color} p-5 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                        <Icon className={`w-7 h-7 ${step.iconColor}`} />
                      </div>
                      <span className="text-lg font-bold text-foreground">{step.label}</span>
                    </button>
                    {index < processFlow.length - 1 && (
                      <div className={`w-0.5 h-8 ${step.lineColor} my-2 ml-9`} />
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column - Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 content-start">
            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#d4ff00' }}>
                <Package className="w-8 h-8 text-black" />
              </div>
            </div>
              <h4 className="text-lg font-bold text-black mb-2">Minimum Order</h4>
              <p className="text-2xl font-black text-black">12 PCS</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#d4ff00' }}>
                <Clock className="w-8 h-8 text-black" />
              </div>
            </div>
              <h4 className="text-lg font-bold text-black mb-2">Estimasi Produksi</h4>
              <p className="text-2xl font-black text-black">10-23 Hari</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#d4ff00' }}>
                <Wallet className="w-8 h-8 text-black" />
              </div>
            </div>
              <h4 className="text-lg font-bold text-black mb-2">Sistem Bayar</h4>
              <p className="text-xl font-black text-black">DP 50% + 50%</p>
            </div>

            <div className="bg-white border-2 border-gray-200 rounded-2xl p-6 text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl" style={{ backgroundColor: '#d4ff00' }}>
                <Sparkles className="w-8 h-8 text-black" />
              </div>
            </div>
              <h4 className="text-lg font-bold text-black mb-2">Bonus</h4>
              <p className="text-xl font-black text-black">Konsultasi Gratis</p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a
            href="https://wa.me/6285754777068?text=Halo%20Sekala%20Industry,%20saya%20ingin%20konsultasi%20untuk%20pemesanan%20produk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 text-black font-black text-lg rounded-full shadow-2xl hover:shadow-lg transition-all duration-300 hover:scale-105"
            style={{ backgroundColor: '#d4ff00' }}
          >
            <MessageCircle className="w-6 h-6" />
            Mulai Konsultasi Sekarang
          </a>
          <p className="mt-4 text-muted-foreground">
            Tim kami siap membantu mewujudkan kebutuhan konveksi Anda
          </p>
        </div>
      </div>

      {/* Dialog for Step Details */}
      <Dialog open={selectedStep !== null} onOpenChange={() => setSelectedStep(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              {selectedStep !== null && (
                <>
                  <div className={`p-3 ${processFlow[selectedStep].color} rounded-xl`}>
                    {(() => {
                      const Icon = processFlow[selectedStep].icon;
                      return <Icon className={`w-6 h-6 ${processFlow[selectedStep].iconColor}`} />;
                    })()}
                  </div>
                  {processFlow[selectedStep].title}
                </>
              )}
            </DialogTitle>
          </DialogHeader>
          {selectedStep !== null && (
            <div className="mt-4">
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {processFlow[selectedStep].description}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default OrderSystem;
