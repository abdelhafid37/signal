import Container from "../ui/Container";
import { navLinks, socialLinks } from "@/lib/data";
import Dot from "../ui/Dot";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";

interface FooterProps {
  variant?: "home" | "inner" | "contact";
}

export default function Footer({ variant = "inner" }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const tNav = useTranslations("Nav");
  const t = useTranslations("Footer");

  return (
    <footer className="bg-ink text-bg">
      <Container className="pt-12 pb-6 md:pt-16 xl:pt-20 md:pb-7 xl:pb-8">
        <div className="flex flex-col justify-between gap-9 md:gap-0 md:flex-row">
          <div>
            <p className="mb-3 font-bold font-display">SIGNAL</p>
            <p className="font-body text-sm text-dark-soft max-w-[240px] hidden md:block">
              {t("tagline")}
            </p>
          </div>

          <div className="flex gap-9 md:gap-12 xl:gap-20">
            <div className={variant === "contact" ? "hidden xl:block" : ""}>
              <p className="font-mono text-[11px] uppercase tracking-widest text-dark-soft mb-4">
                {t("sitemap")}
              </p>

              <ul className="flex flex-col gap-y-2.5">
                {navLinks.map((link) => (
                  <li key={link.href} className="text-sm font-body">
                    <Link href={link.href}>{tNav(link.key)}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {variant === "contact" ? (
              <div>
                <p className="font-mono text-[11px] uppercase tracking-widest text-dark-soft mb-4">
                  {t("social")}
                </p>
                <div className="flex flex-col gap-y-2.5">
                  {socialLinks.map((social) => (
                    <a key={social.label} href={social.href} className="text-sm font-body">
                      {social.label}
                    </a>
                  ))}
                </div>
              </div>
            ) : (
              <div className={variant === "inner" ? "hidden xl:block" : ""}>
                <p className="font-mono text-[11px] uppercase tracking-widest text-dark-soft mb-4">
                  {t("contact")}
                </p>
                <div className="flex flex-col gap-y-2.5">
                  <a href="mailto:hello@signalstudio.co" className="text-sm font-body">
                    hello@signalstudio.co
                  </a>
                  <p className="text-sm font-body">
                    <span className="xl:hidden">{t("remoteFirst")}</span>
                    <span className="hidden xl:inline">{t("remoteFirstFull")}</span>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex flex-col pt-6 border-t gap-y-4 md:flex-row md:items-center md:justify-between border-white/10 mt-14">
          <p className="font-mono text-xs text-dark-soft">
            <span className="xl:hidden">&copy; {t("copyright", { year: currentYear })}</span>
            <span className="hidden xl:inline">
              &copy; {t("copyrightFull", { year: currentYear })}
            </span>
          </p>
          <p className="flex items-center font-mono text-xs gap-x-2">
            <Dot className="bg-tally animate-pulse" />
            <span className="md:hidden">{t("available")}</span>
            <span className="hidden md:inline">{t("availableFull")}</span>
          </p>
        </div>
      </Container>
    </footer>
  );
}
