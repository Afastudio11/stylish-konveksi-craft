import { MessageCircle, Users, Handshake, FileText, Factory, CreditCard, Truck } from "lucide-react";

const OrderSystem = () => {
  const orderSteps = [
    {
      number: "1",
      title: "Konsultasi Awal",
      description: "Costumer dapat memulai proses pemesanan dengan menghubungi kami melalui WhatsApp. Tim kami akan melakukan sesi konsultasi untuk memahami kebutuhan Anda, mulai dari jenis produk, bahan yang diinginkan, hingga estimasi kuantitas. Setelah spesifikasi disepakati, kami akan mengirimkan penawaran harga dalam bentuk invoice."
    },
    {
      number: "2",
      title: "Minimum Order",
      description: "Sekala Industry menetapkan jumlah minimum pemesanan sebesar 12 PCS. Ketentuan ini berlaku untuk efisiensi dalam proses produksi dan optimalisasi biaya. Pemesanan dalam jumlah lebih besar dapat memberikan fleksibilitas tambahan, baik dari sisi harga maupun pilihan bahan."
    },
    {
      number: "3",
      title: "Sistem Pembayaran",
      description: "Pembayaran dilakukan dalam dua tahap sebagai berikut:\n\nTahap 1 - Down Payment (DP) sebesar 50% dari total nilai invoice sebagai konfirmasi pemesanan dan dasar dimulainya proses produksi.\n\nTahap 2 - Pelunasan sebesar 50% dilakukan setelah produksi selesai dan produk siap untuk dikirim. Tim kami akan menghubungi pelanggan untuk pemberitahuan pelunasan sebelum pengiriman dilakukan."
    },
    {
      number: "4",
      title: "Proses Produksi",
      description: "Produksi akan dimulai setelah pembayaran DP diterima. Estimasi waktu produksi adalah antara 10 hingga 23 hari kerja, tergantung kompleksitas desain dan jumlah pesanan. Pelanggan akan mendapatkan update secara berkala mengenai progress produksi untuk memastikan transparansi dan kenyamanan selama proses berlangsung."
    }
  ];

  const processFlow = [
    { icon: MessageCircle, label: "Chat", color: "bg-accent" },
    { icon: Users, label: "Konsultasi", color: "bg-primary" },
    { icon: Handshake, label: "Deal", color: "bg-accent" },
    { icon: FileText, label: "DP", color: "bg-primary" },
    { icon: Factory, label: "Produksi", color: "bg-accent" },
    { icon: CreditCard, label: "Pelunasan", color: "bg-primary" },
    { icon: Truck, label: "Pengiriman", color: "bg-accent" }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-secondary/30 to-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

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
        <div className="mb-20">
          <h3 className="text-2xl md:text-3xl font-black text-center mb-12 text-foreground">
            Alur Pembelian
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
            {processFlow.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center">
                  <div className="flex flex-col items-center group">
                    <div className={`${step.color} p-6 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-foreground" />
                    </div>
                    <span className="mt-3 text-foreground font-medium">{step.label}</span>
                  </div>
                  {index < processFlow.length - 1 && (
                    <div className="hidden md:block w-12 h-0.5 bg-primary/30 mx-2" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Order Steps */}
        <div className="grid md:grid-cols-2 gap-8">
          {orderSteps.map((step, index) => (
            <div
              key={index}
              className="relative bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute -top-6 -right-6 text-[120px] font-black text-accent opacity-20">
                {step.number}
              </div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="text-2xl font-black text-foreground">{step.number}</span>
                  </div>
                  <h4 className="text-xl md:text-2xl font-black text-white">{step.title}</h4>
                </div>
                <p className="text-white/90 leading-relaxed whitespace-pre-line">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-xl text-primary font-medium mb-6">
            #KALACINTABERPOLA
          </p>
          <a
            href="#contact"
            className="inline-block px-8 py-4 bg-accent text-foreground rounded-full hover:bg-accent-dark transition-all duration-300 shadow-glow-accent hover:shadow-xl hover:scale-105"
          >
            Mulai Konsultasi Sekarang
          </a>
        </div>
      </div>
    </section>
  );
};

export default OrderSystem;
