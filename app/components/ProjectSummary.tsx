import { ArrowUpRight, Armchair, Building2, House, Layers, Palmtree, RefreshCcw } from "lucide-react";
import { siteConfig } from "../lib/site-config";
import styles from "./ProjectSummary.module.css";

const services = [
  { icon: House, label: "Jasa Desain Rumah", href: "#desain-rumah" },
  { icon: Palmtree, label: "Jasa Desain Villa", href: "#desain-villa" },
  { icon: Armchair, label: "Jasa Desain Interior", href: "#desain-interior" },
  { icon: Layers, label: "Jasa Desain Rumah + Interior", href: "#desain-rumah-interior" },
  { icon: Building2, label: "Jasa Desain Bangunan Lain", href: "#desain-komersial" },
  { icon: RefreshCcw, label: "Jasa Renovasi Rumah", href: "#renovasi-rumah" },
];

export default function ProjectSummary() {
  return <section className={styles.section} aria-labelledby="completed-projects-title">
    <div className={styles.summary}>
      <span className={styles.eyebrow}>SETIAP RANCANGAN, SEBUAH KEPERCAYAAN</span>
      <strong className={styles.count}>{siteConfig.stats[0].value}</strong>
      <h2 id="completed-projects-title">Desain Finish</h2>
      <p>Proyek yang telah selesai dirancang</p>
      <div className={styles.actions}>
        <a href="#portofolio" className={styles.primary}>Desain Terbaik <ArrowUpRight size={17} aria-hidden="true" /></a>
        <a href="#kontak" className={styles.secondary}>Kontak Kami <ArrowUpRight size={17} aria-hidden="true" /></a>
      </div>
    </div>
    <nav className={styles.services} aria-label="Pilihan jasa desain">
      {services.map(({ icon: Icon, label, href }) => <a key={href} href={href} className={styles.service}>
        <Icon size={28} strokeWidth={1.35} aria-hidden="true" />
        <span>{label}</span>
        <ArrowUpRight size={15} aria-hidden="true" className={styles.arrow} />
      </a>)}
    </nav>
  </section>;
}
