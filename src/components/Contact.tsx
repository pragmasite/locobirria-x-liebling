import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 76 499 49 23",
      href: "tel:+41764994923",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Zürcherstrasse 133, 8952 Schlieren, CH",
      href: "https://maps.google.com/?q=Z%C3%BCrcherstrasse+133,+8952+Schlieren",
    },
  ];

  return (
    <section id="kontakt" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">{t.contact.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70">{t.contact.description}</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="font-serif text-lg text-foreground mb-1">{info.label}</p>
                    <a
                      href={info.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              );
            })}

            <Button asChild size="lg" className="w-full mt-8">
              <a href="tel:+41764994923">
                <Phone className="mr-2 h-5 w-5" />
                {t.contact.callNow}
              </a>
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-lg overflow-hidden shadow-medium h-96"
          >
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2699.5206487869567!2d8.464504!3d47.397161!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479a99d9c9c9c9c9%3A0x0!2sLiebling%20Bar%20Schlieren!5e0!3m2!1sen!2sch!4v1234567890"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
