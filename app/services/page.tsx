"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Send } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function ServicesPage() {
  const { language, t } = useLanguage()

  const handleTelegramClick = () => {
    window.open("https://t.me/uyga_yordam_bot", "_blank")
  }

  return (
    <>
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h1 className="text-5xl font-bold">{t.services.title}</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">{t.services.subtitle}</p>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
              <h2 className="text-3xl font-bold text-center">{t.services.adultNursing.title}</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-brand-blue to-transparent" />
            </div>
            <p className="text-center text-lg text-muted-foreground mb-8">{t.services.adultNursing.subtitle}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.adultNursing.items.map((service: any, index: number) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-brand-blue group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold flex-1 leading-tight">{service.name}</h3>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-brand-blue">{service.price}</p>
                      <p className="text-xs text-muted-foreground">so'm</p>
                    </div>
                  </div>
                  {service.note && <p className="text-sm text-muted-foreground mb-4 italic">{service.note}</p>}
                  <Button
                    size="sm"
                    className="w-full text-white gap-2 mt-2"
                    style={{ backgroundColor: "#183E9E" }}
                    onClick={handleTelegramClick}
                  >
                    <Send className="w-4 h-4" />
                    {t.services.orderButton}
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16">
            <div className="flex items-center gap-4 mb-8">
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
              <h2 className="text-3xl font-bold text-center">{t.services.childNursing.title}</h2>
              <div className="h-1 flex-1 bg-gradient-to-r from-transparent via-brand-red to-transparent" />
            </div>
            <p className="text-center text-lg text-muted-foreground mb-8">{t.services.childNursing.subtitle}</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {t.services.childNursing.items.map((service: any, index: number) => (
                <Card
                  key={index}
                  className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-2 hover:border-brand-red group"
                >
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-lg font-bold flex-1 leading-tight">{service.name}</h3>
                    <div className="text-right ml-4">
                      <p className="text-2xl font-bold text-brand-red">{service.price}</p>
                      <p className="text-xs text-muted-foreground">so'm</p>
                    </div>
                  </div>
                  {service.note && <p className="text-sm text-muted-foreground mb-4 italic">{service.note}</p>}
                  <Button
                    size="sm"
                    className="w-full text-white gap-2 mt-2"
                    style={{ backgroundColor: "#EC0405" }}
                    onClick={handleTelegramClick}
                  >
                    <Send className="w-4 h-4" />
                    {t.services.orderButton}
                  </Button>
                </Card>
              ))}
            </div>
          </div>

          {/* Telegram CTA Section */}
          <div className="mt-16 text-center">
            <Card className="p-12 bg-gradient-to-br from-brand-blue/10 to-brand-red/10 border-2 border-brand-blue">
              <h2 className="text-3xl font-bold mb-4">{t.services.ctaTitle}</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">{t.services.ctaSubtitle}</p>
              <Button
                size="lg"
                className="text-white gap-3 text-lg px-8 py-6"
                style={{ backgroundColor: "#183E9E" }}
                onClick={handleTelegramClick}
              >
                <Send className="w-5 h-5" />
                {t.hero.cta}
              </Button>
            </Card>
          </div>
        </div>
      </section>
    </>
  )
}
