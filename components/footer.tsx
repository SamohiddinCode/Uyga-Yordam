"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, MapPin } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function Footer() {
  const { language, t } = useLanguage()

  return (
    <footer className="bg-muted/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image src="/images/logo.png" alt="Uyga Yordam Logo" width={56} height={56} className="object-contain" />
              <div>
                <span className="text-xl font-bold block" style={{ color: "#183E9E" }}>
                  Uyga Yordam
                </span>
                <span className="text-sm" style={{ color: "#183E9E" }}>
                  To'g'ridan to'g'ri uyga
                </span>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              {language === "uz"
                ? "Uyda professional tibbiy yordam xizmati"
                : "Профессиональная медицинская помощь на дому"}
            </p>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.nav.services}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-brand-blue cursor-pointer transition-colors">
                <Link href="/services">{t.services.doctor.title}</Link>
              </li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">
                <Link href="/services">{t.services.nursing.title}</Link>
              </li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">
                <Link href="/services">{t.services.tests.title}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{language === "uz" ? "Sahifalar" : "Страницы"}</h4>
            <ul className="space-y-2 text-muted-foreground">
              <li className="hover:text-brand-blue cursor-pointer transition-colors">
                <Link href="/">{t.nav.home}</Link>
              </li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">
                <Link href="/about">{t.nav.about}</Link>
              </li>
              <li className="hover:text-brand-blue cursor-pointer transition-colors">
                <Link href="/contact">{t.nav.contact}</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">{t.footer.contact}</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-brand-blue" />
                <a href={`tel:${t.footer.phone}`} className="hover:text-brand-blue transition-colors">
                  {t.footer.phone}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-brand-blue" />
                <a href={`mailto:${t.footer.email}`} className="hover:text-brand-blue transition-colors">
                  {t.footer.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-brand-blue" />
                <span>{t.footer.address}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>{t.footer.rights}</p>
        </div>
      </div>
    </footer>
  )
}
