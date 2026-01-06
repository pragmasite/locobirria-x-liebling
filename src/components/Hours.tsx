import { motion } from "framer-motion";
import { Clock, CheckCircle } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Hours = () => {
  const { t } = useLanguage();

  const schedule = [
    { hours: "10:30 - 23:00" },
    { hours: "10:30 - 23:00" },
    { hours: "10:30 - 23:00" },
    { hours: "10:30 - 23:00" },
    { hours: "10:30 - 23:00" },
    { hours: t.hours.closed },
    { hours: t.hours.closed },
  ];

  const todayIndex = new Date().getDay();

  return (
    <section id="offnungszeiten" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div className="mb-16 text-center">
          <span className="text-sm uppercase tracking-widest text-primary">{t.hours.label}</span>
          <h2 className="font-serif text-4xl md:text-5xl mt-2">{t.hours.title}</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mx-auto max-w-2xl rounded-2xl border bg-card shadow-soft overflow-hidden"
        >
          <div className="flex items-center gap-3 border-b bg-primary/5 px-6 py-4">
            <Clock className="h-5 w-5 text-primary" />
            <span className="font-serif text-lg">{t.hours.header}</span>
          </div>
          <div className="divide-y">
            {schedule.map((item, i) => {
              const isToday = i === todayIndex;
              const isClosed = item.hours === t.hours.closed;
              return (
                <div key={i} className={`px-6 py-4 flex justify-between items-center ${isToday ? "bg-primary/5" : ""}`}>
                  <div className="flex items-center gap-3">
                    {isToday && <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />}
                    <span className={isToday ? "font-medium text-primary" : "text-foreground"}>
                      {t.hours.days[i]}
                    </span>
                    {isToday && (
                      <span className="text-xs bg-primary/10 text-primary px-2 py-0.5 rounded-full whitespace-nowrap">
                        {t.hours.today}
                      </span>
                    )}
                  </div>
                  <span className={isClosed ? "text-muted-foreground font-medium" : "text-foreground font-medium"}>
                    {item.hours}
                  </span>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hours;
