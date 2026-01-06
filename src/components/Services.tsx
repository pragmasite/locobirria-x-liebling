import { motion } from "framer-motion";
import { Wine, Utensils, Music, Users, Sparkles, Heart } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Services = () => {
  const { t } = useLanguage();

  const icons = [Wine, Utensils, Music, Sparkles, Users, Heart];

  return (
    <section id="angebote" className="py-24">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">{t.services.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">{t.services.title}</h2>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-foreground/70">{t.services.description}</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.services.items.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group relative bg-card p-8 rounded-lg shadow-soft hover:shadow-medium transition-all"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative z-10">
                  <Icon className="h-12 w-12 text-primary mb-4 group-hover:text-accent transition-colors" />
                  <h3 className="font-serif text-xl text-foreground mb-3">{service.title}</h3>
                  <p className="text-muted-foreground">{service.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
