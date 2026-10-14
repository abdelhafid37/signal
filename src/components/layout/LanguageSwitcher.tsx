"use client";

import { Link, usePathname } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";
import { useLocale, useTranslations } from "next-intl";
import React from "react";

export default function LanguageSwitcher() {
  const activeLocale = useLocale();
  const pathname = usePathname();
  const t = useTranslations("LanguageSwitcher");

  return (
    <div
      role="group"
      aria-label={t("label")}
      className="flex items-center font-mono text-xs tracking-wide uppercase gap-x-3"
    >
      {routing.locales.map((locale) => (
        <Link
          key={locale}
          href={pathname}
          locale={locale}
          aria-current={locale === activeLocale ? "true" : undefined}
          className={locale === activeLocale ? "text-bg" : "text-dark-soft"}
        >
          {locale}
        </Link>
      ))}
    </div>
  );
}
