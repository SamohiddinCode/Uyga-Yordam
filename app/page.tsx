"use client"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/hooks/use-language"
import { Phone, Send, Stethoscope, Syringe, TestTube, User, Clock, CheckCircle } from "lucide-react"

type Language = "uz" | "ru"

const translations = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      about: "Biz haqimizda",
      contact: "Aloqa",
    },
    hero: {
      title: "Tibbiy Yordam Uyingizda",
      subtitle: "24/7 professional tibbiy yordam uyingizda. Sog’lig’ingiz haqida bizga qayg’uring.",
      cta: "Shifokorni chaqirish",
    },
    services: {
      title: "Bizning Xizmatlarimiz",
      subtitle: "Uyingizda professional tibbiy yordam",
      doctor: {
        title: "Shifokor Chaqiruvi",
        desc: "Malakali shifokorlar uyingizga tashrif buyuradi",
      },
      nursing: {
        title: "Hamshiralik Xizmati",
        desc: "Professional hamshiralar tomonidan davolanish",
      },
      tests: {
        title: "Tibbiy Tahlillar",
        desc: "Uyda namuna olish va natijalar",
      },
    },
    howItWorks: {
      title: "Qanday Ishlaydi?",
      subtitle: "3 oddiy qadam orqali tibbiy yordam oling",
      step1: {
        title: "Telegram Botga Murojaat",
        desc: "Botni bosing va xizmat turini tanlang",
      },
      step2: {
        title: "Malumot Bering",
        desc: "Manzil va kerakli xizmatni kiriting",
      },
      step3: {
        title: "Shifokorni Qabul Qiling",
        desc: "Professional mutaxassis sizga keladi",
      },
    },
    footer: {
      contact: "Aloqa",
      phone: "+998 90 123 45 67",
      email: "info@uygayordam.uz",
      address: "Toshkent, Uzbekiston",
      rights: "© 2026 Uyga Yordam. Barcha huquqlar himoyalangan.",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      services: "Услуги",
      about: "О нас",
      contact: "Контакты",
    },
    hero: {
      title: "Медицинская Помощь На Дому",
      subtitle: "Профессиональная медицинная помощь на дому: лицензированные специалисты, безопасность и комфорт — 24/7",
      cta: "Вызвать врача сейчас",
    },
    services: {
      title: "Наши Услуги",
      subtitle: "Профессиональная медицинская помощь на дому",
      doctor: {
        title: "Вызов Врача",
        desc: "Квалифицированные врачи приедут к вам домой",
      },
      nursing: {
        title: "Сестринский Уход",
        desc: "Лечение профессиональными медсёстрами",
      },
      tests: {
        title: "Медицинские Анализы",
        desc: "Забор образцов на дому и результаты",
      },
    },
    howItWorks: {
      title: "Как Это Работает?",
      subtitle: "Получите медицинскую помощь за 3 простых шага",
      step1: {
        title: "Обратитесь в Telegram бот",
        desc: "Нажмите на бота и выберите тип услуги",
      },
      step2: {
        title: "Предоставьте Информацию",
        desc: "Введите адрес и необходимую услугу",
      },
      step3: {
        title: "Примите Врача",
        desc: "Профессиональный специалист приедет к вам",
      },
    },
    footer: {
      contact: "Контакты",
      phone: "+998 90 123 45 67",
      email: "info@uygayordam.uz",
      address: "Ташкент, Узбекистан",
      rights: "© 2026 Uyga Yordam. Все права защищены.",
    },
  },
}

export default function MedicalLandingPage() {
  const { t, language } = useLanguage()

  const handleTelegramClick = () => {
    window.open("https://t.me/uyga_yordam_bot", "_blank")
  }

  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-balance">{t.hero.title}</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">{t.hero.subtitle}</p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-brand-blue hover:bg-brand-blue/90 text-white gap-2"
                  onClick={handleTelegramClick}
                >
                  <Send className="w-5 h-5" />
                  {t.hero.cta}
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-brand-blue text-brand-blue hover:bg-brand-blue hover:text-white bg-transparent"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  {t.footer.phone}
                </Button>
              </div>
            </div>

            <div className="relative">
              <div className="relative w-full h-[400px] lg:h-[500px] animate-float">
                <svg viewBox="0 0 200 200" className="w-full h-full">
                  <defs>
                    <linearGradient id="pulse" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" style={{ stopColor: "#183E9E", stopOpacity: 0.8 }} />
                      <stop offset="100%" style={{ stopColor: "#EC0405", stopOpacity: 0.6 }} />
                    </linearGradient>
                  </defs>

                  {/* Medical Cross */}
                  <g transform="translate(100, 100)">
                    <rect x="-12" y="-40" width="24" height="80" fill="url(#pulse)" rx="4">
                      <animate attributeName="opacity" values="0.8;1;0.8" dur="2s" repeatCount="indefinite" />
                    </rect>
                    <rect x="-40" y="-12" width="80" height="24" fill="url(#pulse)" rx="4">
                      <animate
                        attributeName="opacity"
                        values="0.8;1;0.8"
                        dur="2s"
                        begin="0.5s"
                        repeatCount="indefinite"
                      />
                    </rect>

                    {/* Pulse rings */}
                    <circle cx="0" cy="0" r="60" fill="none" stroke="#183E9E" strokeWidth="2" opacity="0.3">
                      <animate attributeName="r" values="60;80;60" dur="3s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.3;0;0.3" dur="3s" repeatCount="indefinite" />
                    </circle>
                    <circle cx="0" cy="0" r="60" fill="none" stroke="#EC0405" strokeWidth="2" opacity="0.3">
                      <animate attributeName="r" values="60;80;60" dur="3s" begin="1.5s" repeatCount="indefinite" />
                      <animate
                        attributeName="opacity"
                        values="0.3;0;0.3"
                        dur="3s"
                        begin="1.5s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </g>

                  {/* Floating medical icons */}
                  <circle cx="40" cy="40" r="8" fill="#183E9E" opacity="0.6">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-10; 0,0"
                      dur="4s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="160" cy="60" r="6" fill="#EC0405" opacity="0.6">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,10; 0,0"
                      dur="3s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="30" cy="160" r="7" fill="#183E9E" opacity="0.6">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,-8; 0,0"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                  <circle cx="170" cy="150" r="9" fill="#EC0405" opacity="0.6">
                    <animateTransform
                      attributeName="transform"
                      type="translate"
                      values="0,0; 0,12; 0,0"
                      dur="4.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Services Overview */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">{t.services.title}</h2>
          <p className="text-xl text-muted-foreground mb-12">{t.services.subtitle}</p>
          <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white" asChild>
            <a href="/services">{language === "uz" ? "Barcha Xizmatlar" : "Все Услуги"}</a>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-blue group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                <Stethoscope className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.services.doctor.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.services.doctor.desc}</p>
              <Button
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white gap-2"
                onClick={handleTelegramClick}
              >
                <Send className="w-4 h-4" />
                {t.hero.cta}
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-red group">
              <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-red group-hover:scale-110 transition-all duration-300">
                <Syringe className="w-8 h-8 text-brand-red group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.services.nursing.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.services.nursing.desc}</p>
              <Button
                className="w-full bg-brand-red hover:bg-brand-red/90 text-white gap-2"
                onClick={handleTelegramClick}
              >
                <Send className="w-4 h-4" />
                {t.hero.cta}
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-2 hover:border-brand-blue group">
              <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:scale-110 transition-all duration-300">
                <TestTube className="w-8 h-8 text-brand-blue group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4">{t.services.tests.title}</h3>
              <p className="text-muted-foreground leading-relaxed mb-6">{t.services.tests.desc}</p>
              <Button
                className="w-full bg-brand-blue hover:bg-brand-blue/90 text-white gap-2"
                onClick={handleTelegramClick}
              >
                <Send className="w-4 h-4" />
                {t.hero.cta}
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="about" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-4xl font-bold">{t.howItWorks.title}</h2>
            <p className="text-xl text-muted-foreground">{t.howItWorks.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative">
            {/* Connection lines for desktop */}
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-brand-blue via-brand-red to-brand-blue opacity-20 -translate-y-1/2" />

            <div className="relative bg-card rounded-2xl p-8 border-2 border-border hover:border-brand-blue transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10">
                1
              </div>
              <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <Send className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{t.howItWorks.step1.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{t.howItWorks.step1.desc}</p>
            </div>

            <div className="relative bg-card rounded-2xl p-8 border-2 border-border hover:border-brand-red transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-brand-red text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10">
                2
              </div>
              <div className="w-16 h-16 bg-brand-red/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <User className="w-8 h-8 text-brand-red" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{t.howItWorks.step2.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{t.howItWorks.step2.desc}</p>
            </div>

            <div className="relative bg-card rounded-2xl p-8 border-2 border-border hover:border-brand-blue transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center text-2xl font-bold mb-6 mx-auto relative z-10">
                3
              </div>
              <div className="w-16 h-16 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 mx-auto">
                <CheckCircle className="w-8 h-8 text-brand-blue" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-center">{t.howItWorks.step3.title}</h3>
              <p className="text-muted-foreground text-center leading-relaxed">{t.howItWorks.step3.desc}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-brand-blue text-white">
        <div className="container mx-auto text-center space-y-6">
          <Clock className="w-16 h-16 mx-auto opacity-90" />
          <h2 className="text-4xl font-bold">24/7 {language === "uz" ? "Xizmat" : "Сервис"}</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto leading-relaxed">
            {language === "uz"
              ? "Kecha-kunduz professional tibbiy yordam. Telegram bot orqali hoziroq murojaat qiling!"
              : "Круглосуточная профессиональная медицинская помощь. Обратитесь сейчас через Telegram бот!"}
          </p>
          <Button size="lg" className="bg-white text-brand-blue hover:bg-gray-100 gap-2" onClick={handleTelegramClick}>
            <Send className="w-5 h-5" />
            {t.hero.cta}
          </Button>
        </div>
      </section>
    </div>
  )
}
