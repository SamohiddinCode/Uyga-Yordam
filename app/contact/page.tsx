"use client"

import type React from "react"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Mail, MapPin, Send } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function ContactPage() {
  const { language, t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your backend
    console.log("Form submitted:", formData)
    alert(language === "uz" ? "Xabar yuborildi!" : "Сообщение отправлено!")
    setFormData({ name: "", phone: "", message: "" })
  }

  const handleTelegramClick = () => {
    window.open("https://t.me/uyga_yordam_bot", "_blank")
  }

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold">{t.contact.title}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.contact.subtitle}</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <Card className="p-8 mb-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.name}</label>
                  <Input
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    placeholder={language === "uz" ? "Ismingizni kiriting" : "Введите ваше имя"}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.phone}</label>
                  <Input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    placeholder="+998 90 123 45 67"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.contact.message}</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    placeholder={language === "uz" ? "Xabaringizni yozing..." : "Напишите ваше сообщение..."}
                  />
                </div>

                <Button type="submit" className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white">
                  {t.contact.send}
                </Button>
              </form>
            </Card>

            <Card className="p-6 bg-brand-blue text-white">
              <h3 className="text-xl font-bold mb-4">
                {language === "uz" ? "Yoki Telegram bot orqali murojaat qiling" : "Или обратитесь через Telegram бот"}
              </h3>
              <Button className="w-full bg-white text-brand-blue hover:bg-gray-100 gap-2" onClick={handleTelegramClick}>
                <Send className="w-5 h-5" />
                {t.hero.cta}
              </Button>
            </Card>
          </div>

          <div className="space-y-6">
            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{language === "uz" ? "Telefon" : "Телефон"}</h3>
                  <a href={`tel:${t.footer.phone}`} className="text-muted-foreground hover:text-brand-blue">
                    {t.footer.phone}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-red/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-brand-red" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{language === "uz" ? "Email" : "Электронная почта"}</h3>
                  <a href={`mailto:${t.footer.email}`} className="text-muted-foreground hover:text-brand-blue">
                    {t.footer.email}
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-brand-blue/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-brand-blue" />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{language === "uz" ? "Manzil" : "Адрес"}</h3>
                  <p className="text-muted-foreground">{t.footer.address}</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
