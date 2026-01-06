"use client"

import type React from "react"

import { createContext, useState } from "react"

export type Language = "uz" | "ru"

export const translations = {
  uz: {
    nav: {
      home: "Bosh sahifa",
      services: "Xizmatlar",
      about: "Biz haqimizda",
      contact: "Aloqa",
    },
    hero: {
      title: "Tibbiy Yordam Uyingizda",
      subtitle: "Professional shifokorlar va hamshiralar xizmati sizning uyingiz qulayligida. 24/7 ishlaydi.",
      cta: "Telegram Bot orqali murojaat",
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
      injection: {
        title: "Ukol Xizmati",
        desc: "Xavfsiz va og'riqsiz ukol qo'yish",
      },
      physiotherapy: {
        title: "Fizioterapiya",
        desc: "Uyda reabilitatsiya va davolash",
      },
      consultation: {
        title: "Maslahat Xizmati",
        desc: "Onlayn va oflayn maslahatlar",
      },
      orderButton: "Buyurtma berish",
      adultNursing: {
        title: "UMUMIY HAMSHIRA",
        subtitle: "Kattalar uchun",
        items: [
          {
            name: "Uyga chaqirish xizmati",
            price: "20,000",
            note: "(+ tungi vaqtda taksi uchun alohida)",
          },
          {
            name: "Qon bosimi o'lchash",
            price: "10,000",
          },
          {
            name: "Tomir ichiga ukol (vena orqali)",
            price: "20,000",
          },
          {
            name: "Yonboshga ukol (muskul ichiga)",
            price: "20,000",
          },
          {
            name: "Teri ostiga inyeksiya",
            price: "20,000",
          },
          {
            name: "Venaga kateter qo'yish (stilet)",
            price: "40,000",
          },
          {
            name: "Tomchilatuvchi sistema (kapelnitsa)",
            price: "30,000",
          },
          {
            name: "Sekin ketadigan systema",
            price: "50,000",
            note: "*har soatiga",
          },
          {
            name: "Tahlil uchun qon olish xizmati",
            price: "30,000",
          },
          {
            name: "Yaralarni bog'lash (perevyazka)",
            price: "30,000+",
          },
          {
            name: "Siydik yo'liga (mochevoy) kateter qo'yish / almashtirish",
            price: "100,000",
          },
          {
            name: "Kindik sohasiga ukol",
            price: "20,000",
          },
          {
            name: "Klizma qilish",
            price: "100,000",
          },
        ],
      },
      childNursing: {
        title: "UMUMIY HAMSHIRA",
        subtitle: "7 yoshdan kichik bolalar va chaqaloqlar uchun",
        items: [
          {
            name: "Uyga chaqirish xizmati",
            price: "20,000",
          },
          {
            name: "Tomir ichiga ukol (vena orqali)",
            price: "30,000",
          },
          {
            name: "Yonboshga ukol (muskul ichiga)",
            price: "30,000",
          },
          {
            name: "Teri ostiga inyeksiya",
            price: "30,000",
          },
          {
            name: "Venaga kateter qo'yish (stilet)",
            price: "50,000",
          },
          {
            name: "Tomchilatuvchi sistema (kapelnitsa)",
            price: "35,000",
          },
          {
            name: "Tahlil uchun qon olish",
            price: "40,000",
          },
          {
            name: "Yaralarni bog'lash (perevyazka)",
            price: "35,000+",
          },
          {
            name: "Kindik sohasiga ukol",
            price: "30,000",
          },
          {
            name: "Klizma qilish",
            price: "80,000",
          },
        ],
      },
      ctaTitle: "Xizmatga buyurtma bering",
      ctaSubtitle: "Telegram botimiz orqali 24/7 xizmat buyurtma qiling va professional yordam oling",
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
    about: {
      title: "Biz Haqimizda",
      subtitle: "Professional tibbiy yordam xizmati",
      description:
        "Uyga Yordam - bu zamonaviy tibbiy xizmat ko'rsatish platformasi. Biz 2020-yildan boshlab O'zbekiston bo'ylab professional shifokorlar va hamshiralarning uyga tashrif buyurish xizmatlarini taqdim etamiz.",
      mission: {
        title: "Bizning Missiyamiz",
        desc: "Har bir oilaga sifatli va qulay tibbiy yordam ko'rsatish",
      },
      team: {
        title: "Professional Jamoa",
        desc: "100+ malakali shifokor va hamshiralar",
      },
      experience: {
        title: "Tajriba",
        desc: "5+ yillik xizmat ko'rsatish tajribasi",
      },
      teamSection: {
        title: "Bizning Jamoa",
        subtitle: "Mutaxassislar bilan tanishing",
        ceo: {
          name: "Dr. Alisher Karimov",
          role: "Bosh Direktor",
          desc: "15 yillik tibbiy boshqaruv tajribasi",
        },
        chiefDoctor: {
          name: "Dr. Nodira Rahimova",
          role: "Bosh Shifokor",
          desc: "20 yillik klinik tajriba",
        },
        doctor1: {
          name: "Dr. Jamshid Tursunov",
          role: "Umumiy Shifokor",
          desc: "Oilaviy shifokor mutaxassisi",
        },
        nurse1: {
          name: "Gulnora Sharipova",
          role: "Bosh Hamshira",
          desc: "10 yillik hamshiralik tajribasi",
        },
      },
    },
    contact: {
      title: "Biz Bilan Bog'laning",
      subtitle: "Savollaringiz bormi? Biz sizga yordam berishga tayyormiz",
      name: "Ismingiz",
      phone: "Telefon",
      message: "Xabar",
      send: "Yuborish",
    },
    footer: {
      contact: "Aloqa",
      phone: "+998 90 123 45 67",
      email: "info@uygayordam.uz",
      address: "Samarqand, O'zbekiston",
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
      subtitle: "Профессиональные врачи и медсёстры в комфорте вашего дома. Работаем 24/7.",
      cta: "Обратиться через Telegram бот",
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
      injection: {
        title: "Инъекции",
        desc: "Безопасные и безболезненные уколы",
      },
      physiotherapy: {
        title: "Физиотерапия",
        desc: "Реабилитация и лечение на дому",
      },
      consultation: {
        title: "Консультации",
        desc: "Онлайн и офлайн консультации",
      },
      orderButton: "Заказать",
      adultNursing: {
        title: "ОБЩАЯ МЕДСЕСТРА",
        subtitle: "Для взрослых",
        items: [
          {
            name: "Вызов на дом",
            price: "20,000",
            note: "(+ отдельно такси в ночное время)",
          },
          {
            name: "Измерение давления",
            price: "10,000",
          },
          {
            name: "Внутривенная инъекция",
            price: "20,000",
          },
          {
            name: "Внутримышечная инъекция",
            price: "20,000",
          },
          {
            name: "Подкожная инъекция",
            price: "20,000",
          },
          {
            name: "Установка венозного катетера",
            price: "40,000",
          },
          {
            name: "Капельница",
            price: "30,000",
          },
          {
            name: "Медленная система",
            price: "50,000",
            note: "*за каждый час",
          },
          {
            name: "Забор крови на анализ",
            price: "30,000",
          },
          {
            name: "Перевязка ран",
            price: "30,000+",
          },
          {
            name: "Установка/замена мочевого катетера",
            price: "100,000",
          },
          {
            name: "Инъекция в область пупка",
            price: "20,000",
          },
          {
            name: "Клизма",
            price: "100,000",
          },
        ],
      },
      childNursing: {
        title: "ОБЩАЯ МЕДСЕСТРА",
        subtitle: "Для детей до 7 лет и младенцев",
        items: [
          {
            name: "Вызов на дом",
            price: "20,000",
          },
          {
            name: "Внутривенная инъекция",
            price: "30,000",
          },
          {
            name: "Внутримышечная инъекция",
            price: "30,000",
          },
          {
            name: "Подкожная инъекция",
            price: "30,000",
          },
          {
            name: "Установка венозного катетера",
            price: "50,000",
          },
          {
            name: "Капельница",
            price: "35,000",
          },
          {
            name: "Забор крови на анализ",
            price: "40,000",
          },
          {
            name: "Перевязка ран",
            price: "35,000+",
          },
          {
            name: "Инъекция в область пупка",
            price: "30,000",
          },
          {
            name: "Клизма",
            price: "80,000",
          },
        ],
      },
      ctaTitle: "Закажите услугу",
      ctaSubtitle: "Закажите услугу через наш Telegram бот 24/7 и получите профессиональную помощь",
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
    about: {
      title: "О Нас",
      subtitle: "Профессиональная медицинская помощь",
      description:
        "Uyga Yordam - это современная платформа медицинских услуг. С 2020 года мы предоставляем услуги профессиональных врачей и медсестер на дому по всему Узбекистану.",
      mission: {
        title: "Наша Миссия",
        desc: "Качественная и удобная медицинская помощь каждой семье",
      },
      team: {
        title: "Профессиональная Команда",
        desc: "100+ квалифицированных врачей и медсестер",
      },
      experience: {
        title: "Опыт",
        desc: "5+ лет опыта предоставления услуг",
      },
      teamSection: {
        title: "Наша Команда",
        subtitle: "Познакомьтесь с нашими специалистами",
        ceo: {
          name: "Д-р. Алишер Каримов",
          role: "Генеральный Директор",
          desc: "15 лет опыта медицинского управления",
        },
        chiefDoctor: {
          name: "Д-р. Нодира Рахимова",
          role: "Главный Врач",
          desc: "20 лет клинического опыта",
        },
        doctor1: {
          name: "Д-р. Джамшид Турсунов",
          role: "Врач Общей Практики",
          desc: "Специалист семейной медицины",
        },
        nurse1: {
          name: "Гульнора Шарипова",
          role: "Старшая Медсестра",
          desc: "10 лет опыта сестринского дела",
        },
      },
    },
    contact: {
      title: "Свяжитесь С Нами",
      subtitle: "Есть вопросы? Мы готовы помочь",
      name: "Ваше имя",
      phone: "Телефон",
      message: "Сообщение",
      send: "Отправить",
    },
    footer: {
      contact: "Контакты",
      phone: "+998 90 123 45 67",
      email: "info@uygayordam.uz",
      address: "Самарканд, Узбекистан",
      rights: "© 2026 Uyga Yordam. Все права защищены.",
    },
  },
}

type LanguageContextType = {
  language: Language
  setLanguage: (lang: Language) => void
  t: (typeof translations)["uz"]
}

export const LanguageContext = createContext<LanguageContextType>({
  language: "uz",
  setLanguage: () => {},
  t: translations.uz,
})

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("uz")

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t: translations[language] }}>
      {children}
    </LanguageContext.Provider>
  )
}
