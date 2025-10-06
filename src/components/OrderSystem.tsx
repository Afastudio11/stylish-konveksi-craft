import { useState } from "react";
import { MessageCircle, Users, Handshake, FileText, Factory, CreditCard, Truck } from "lucide-react";
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
      color: "bg-primary", 
      iconColor: "text-accent", 
      lineColor: "bg-primary",
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
      color: "bg-primary", 
      iconColor: "text-accent", 
      lineColor: "bg-primary",
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
      color: "bg-primary", 
      iconColor: "text-accent", 
      lineColor: "bg-primary",
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
      color: "bg-primary", 
      iconColor: "text-accent", 
      lineColor: "bg-primary",
      title: "Pengiriman Produk",
      description: "Setelah pelunasan, produk akan segera dikirim ke alamat tujuan. Kami akan memberikan informasi tracking untuk memantau pengiriman produk Anda."
    }
  ];

  return (
    <section className="py-24 bg-background relative overflow-hidden">

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto animate-fade-in">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground mb-6">
            Sistem <span className="text-accent">Order</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Proses pemesanan yang mudah dan transparan untuk kenyamanan Anda
          </p>
        </div>

        {/* Alur Pembelian */}
        <div>
          <h3 className="text-2xl md:text-3xl font-black text-center mb-12 text-foreground">
            Alur Pembelian
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {processFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <button 
                    onClick={() => setSelectedStep(index)}
                    className="flex flex-col items-center group cursor-pointer"
                  >
                    <div className={`${step.color} p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className={`w-8 h-8 ${step.iconColor}`} />
                    </div>
                    <span className="mt-3 text-foreground font-medium">{step.label}</span>
                  </button>
                  {index < processFlow.length - 1 && (
                    <div className={`hidden md:block w-12 h-0.5 ${step.lineColor} mx-2`} />
                  )}
                </div>
              );
            })}
          </div>
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
