import { motion } from "framer-motion";
import { useLanguage } from "@/hooks/useLanguage";

const About = () => {
  const { t } = useLanguage();

  return (
    <section id="uber-uns" className="py-24 bg-muted">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">{t.about.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">
            {t.about.title1}
            <br />
            <span className="text-primary">{t.about.title2}</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{t.about.p1}</p>
            <p className="text-lg text-foreground/80 leading-relaxed">{t.about.p2}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 gap-8"
          >
            {[0, 1, 2].map((i) => (
              <div key={i} className="text-center">
                <div className="text-4xl font-serif text-primary mb-2">
                  {i === 0 ? "20+" : i === 1 ? "500+" : "98%"}
                </div>
                <p className="text-muted-foreground">
                  {i === 0 ? t.about.stat1 : i === 1 ? t.about.stat2 : t.about.stat3}
                </p>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-4 gap-6"
        >
          {t.about.features.map((feature, i) => (
            <div key={i} className="bg-background p-6 rounded-lg shadow-soft">
              <h3 className="font-serif text-lg text-primary mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
