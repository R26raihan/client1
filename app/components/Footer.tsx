import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { InstagramIcon, YoutubeIcon, TiktokIcon } from "./BrandIcons";
import { siteConfig } from "../lib/site-config";

const currentYear = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="border-t border-border-subtle bg-accent text-accent-foreground">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div data-motion="text" className="flex flex-col gap-4">
          <Link href="/#top" className="font-serif text-2xl font-semibold">
            {siteConfig.name}
          </Link>
          <p className="max-w-xs text-lg text-accent-foreground/90">
            {siteConfig.description}
          </p>
          <div className="flex items-center gap-3">
            <a
              href={siteConfig.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              className="inline-flex size-12 items-center justify-center rounded-full border border-accent-foreground/20 p-2 transition-[transform,color] duration-200 hover:-translate-y-1 active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 hover:border-primary hover:text-primary"
            >
              <InstagramIcon size={18} />
            </a>
            <a
              href={siteConfig.socials.tiktok}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="inline-flex size-12 items-center justify-center rounded-full border border-accent-foreground/20 p-2 transition-[transform,color] duration-200 hover:-translate-y-1 active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 hover:border-primary hover:text-primary"
            >
              <TiktokIcon size={18} />
            </a>
            <a
              href={siteConfig.socials.youtube}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="inline-flex size-12 items-center justify-center rounded-full border border-accent-foreground/20 p-2 transition-[transform,color] duration-200 hover:-translate-y-1 active:scale-95 motion-reduce:transition-none motion-reduce:hover:translate-y-0 motion-reduce:active:scale-100 hover:border-primary hover:text-primary"
            >
              <YoutubeIcon size={18} />
            </a>
          </div>
        </div>

        <div data-motion="text" className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold uppercase tracking-wide text-accent-foreground/90">
            Navigasi
          </h3>
          {siteConfig.navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href === "#portofolio" ? "/portofolio" : link.href.startsWith("/") ? link.href : `/${link.href}`}
              className="inline-flex min-h-12 items-center text-lg text-accent-foreground/95 transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div data-motion="text" className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold uppercase tracking-wide text-accent-foreground/90">
            Layanan
          </h3>
          <span className="text-lg text-accent-foreground/95">Desain Arsitektur</span>
          <span className="text-lg text-accent-foreground/95">Desain Interior</span>
          <span className="text-lg text-accent-foreground/95">Jasa Bangun &amp; Renovasi</span>
          <span className="text-lg text-accent-foreground/95">RAB &amp; Konsultasi</span>
        </div>

        <div data-motion="text" className="flex flex-col gap-3">
          <h3 className="text-lg font-semibold uppercase tracking-wide text-accent-foreground/90">
            Kontak
          </h3>
          <span className="flex items-start gap-2 text-lg text-accent-foreground/95">
            <MapPin size={16} className="mt-0.5 shrink-0" />
            {siteConfig.address}
          </span>
          <a
            href={`tel:${siteConfig.waNumber}`}
            className="flex items-center gap-2 text-lg text-accent-foreground/95 hover:text-primary"
          >
            <Phone size={16} className="shrink-0" />
            {siteConfig.phoneDisplay}
          </a>
          <a
            href={`mailto:${siteConfig.email}`}
            className="flex items-center gap-2 text-lg text-accent-foreground/95 hover:text-primary"
          >
            <Mail size={16} className="shrink-0" />
            {siteConfig.email}
          </a>
        </div>
      </div>

      <div className="border-t border-accent-foreground/10 px-6 py-6 text-center text-lg text-accent-foreground/90">
        © {currentYear} {siteConfig.name}. Seluruh hak cipta dilindungi.
      </div>
    </footer>
  );
}
