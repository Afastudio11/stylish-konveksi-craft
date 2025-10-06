import { useState } from "react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    orderSize: "",
    productType: "",
    message: "",
    agreePolicy: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Format message for WhatsApp
    const whatsappMessage = `Halo Sekala Industry,

Nama: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Jumlah Order: ${formData.orderSize}
Jenis Produk: ${formData.productType}

Pesan:
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/6285754777068?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }));
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-accent rounded-3xl p-8 md:p-12 shadow-2xl">
            <div className="text-center mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
                Contact us
              </h2>
              <p className="text-foreground text-lg">
                Hubungi kami dan kami akan merespons dalam 24 jam.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* First Name and Last Name */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                    First name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                    Last name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Order Size and Product Type */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="orderSize" className="block text-sm font-medium text-foreground mb-2">
                    Jumlah Order
                  </label>
                  <select
                    id="orderSize"
                    name="orderSize"
                    value={formData.orderSize}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="">Pilih jumlah</option>
                    <option value="12-23 pcs">12-23 pcs</option>
                    <option value="24-64 pcs">24-64 pcs</option>
                    <option value="65+ pcs">65+ pcs</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="productType" className="block text-sm font-medium text-foreground mb-2">
                    Jenis Produk
                  </label>
                  <select
                    id="productType"
                    name="productType"
                    value={formData.productType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-0 text-foreground focus:outline-none focus:ring-2 focus:ring-primary appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="">Pilih produk</option>
                    <option value="Kaos Polo">Kaos Polo</option>
                    <option value="Kemeja">Kemeja</option>
                    <option value="Hoodie">Hoodie</option>
                    <option value="Sweater">Sweater</option>
                    <option value="Jaket">Jaket</option>
                    <option value="Rompi">Rompi</option>
                    <option value="PDH">PDH</option>
                    <option value="Seragam">Seragam</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tinggalkan pesan untuk kami..."
                  rows={5}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white border-0 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                />
              </div>

              {/* Privacy Policy Checkbox */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreePolicy"
                  name="agreePolicy"
                  checked={formData.agreePolicy}
                  onChange={handleChange}
                  required
                  className="mt-1 w-4 h-4 rounded border-0 text-primary focus:ring-2 focus:ring-primary cursor-pointer"
                />
                <label htmlFor="agreePolicy" className="text-sm text-foreground cursor-pointer">
                  Anda setuju dengan kebijakan privasi kami yang ramah.
                </label>
              </div>

              {/* Submit Button */}
              <Button
                type="submit"
                size="lg"
                className="w-full bg-foreground text-accent hover:bg-foreground/90 font-medium py-6 rounded-lg transition-all hover:scale-[1.02]"
              >
                Send message
              </Button>
            </form>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-foreground/10">
              <p className="text-center text-foreground text-sm mb-6">
                Dipercaya oleh berbagai perusahaan dan organisasi
              </p>
              <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                <div className="text-foreground font-bold text-sm">Perusahaan</div>
                <div className="text-foreground font-bold text-sm">Sekolah</div>
                <div className="text-foreground font-bold text-sm">Universitas</div>
                <div className="text-foreground font-bold text-sm">Komunitas</div>
                <div className="text-foreground font-bold text-sm">Event Organizer</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
