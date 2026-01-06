import { useLanguage } from "@/hooks/useLanguage";

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-foreground text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-lg mb-4">LIEBLING</h3>
            <p className="text-sm text-white/70">{t.footer.description}</p>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm text-white/70">
              <li><a href="#uber-uns" className="hover:text-white transition-colors">{t.nav.about}</a></li>
              <li><a href="#angebote" className="hover:text-white transition-colors">{t.nav.services}</a></li>
              <li><a href="#galerie" className="hover:text-white transition-colors">{t.nav.gallery}</a></li>
              <li><a href="#offnungszeiten" className="hover:text-white transition-colors">{t.nav.hours}</a></li>
              <li><a href="#kontakt" className="hover:text-white transition-colors">{t.nav.contact}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-serif text-lg mb-4">{t.contact.phone}</h4>
            <p className="text-sm text-white/70">+41 76 499 49 23</p>
            <p className="text-sm text-white/70 mt-4">Zürcherstrasse 133</p>
            <p className="text-sm text-white/70">8952 Schlieren, CH</p>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 text-center text-sm text-white/50">
          <p>{t.footer.tagline} • {t.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
