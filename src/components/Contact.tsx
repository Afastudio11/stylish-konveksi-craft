import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    companyName: "",
    industry: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `Halo Sekala Industry,

Nama: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}
Nama Perusahaan: ${formData.companyName}
Industri: ${formData.industry}

Pesan:
${formData.message}`;

    const encodedMessage = encodeURIComponent(whatsappMessage);
    window.open(`https://wa.me/6285754777068?text=${encodedMessage}`, '_blank');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section id="contact" className="py-12 md:py-16 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4 lg:px-8 relative z-10 max-w-2xl">
          <div className="relative">
            <div className="absolute inset-0 bg-black/20 rounded-3xl translate-x-2 translate-y-2"></div>
            <div className="relative bg-primary rounded-3xl p-8 shadow-xl">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* First Name and Last Name */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                      First Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                      Last Name <span className="text-accent">*</span>
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Enter Your Name"
                      required
                      className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                    Your Email <span className="text-accent">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Your Email"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label htmlFor="companyName" className="block text-sm font-semibold text-white mb-2">
                    Company Name <span className="text-accent">*</span>
                  </label>
                  <input
                    type="text"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    placeholder="Enter Your Company Name"
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50"
                  />
                </div>

                {/* Industry */}
                <div>
                  <label htmlFor="industry" className="block text-sm font-semibold text-white mb-2">
                    Industry <span className="text-accent">*</span>
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    value={formData.industry}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent text-foreground focus:outline-none focus:border-accent/50 appearance-none cursor-pointer"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23000' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center' }}
                  >
                    <option value="">Select your industry</option>
                    <option value="Pendidikan">Pendidikan</option>
                    <option value="Korporat">Korporat</option>
                    <option value="Event & Komunitas">Event & Komunitas</option>
                    <option value="Pemerintahan">Pemerintahan</option>
                    <option value="Retail & Fashion">Retail & Fashion</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                    Your Message <span className="text-accent">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Your Message"
                    rows={4}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white border-2 border-transparent text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-accent/50 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  className="px-8 py-3 bg-accent text-foreground font-semibold rounded-lg hover:bg-accent/90 transition-all hover:scale-[1.02]"
                >
                  Send
                </button>
              </form>
            </div>
          </div>
      </div>
    </section>
  );
};

export default Contact;
