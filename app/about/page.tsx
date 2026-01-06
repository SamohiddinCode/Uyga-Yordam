"use client"

import { Card } from "@/components/ui/card"
import { Target, Users, Award, Mail, Phone } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export default function AboutPage() {
  const { language, t } = useLanguage()

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-5xl font-bold">{t.about.title}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.about.subtitle}</p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <Card className="p-8 md:p-12">
            <p className="text-lg text-muted-foreground leading-relaxed">{t.about.description}</p>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Target className="w-10 h-10 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.mission.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.about.mission.desc}</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-brand-red/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Users className="w-10 h-10 text-brand-red" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.team.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.about.team.desc}</p>
          </Card>

          <Card className="p-8 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
            <div className="w-20 h-20 bg-brand-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <Award className="w-10 h-10 text-brand-blue" />
            </div>
            <h3 className="text-2xl font-bold mb-4">{t.about.experience.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{t.about.experience.desc}</p>
          </Card>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">{t.about.teamSection.title}</h2>
            <p className="text-xl text-muted-foreground">{t.about.teamSection.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* CEO */}
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gradient-to-br from-brand-blue to-brand-blue/70 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-white text-4xl font-bold">CEO</div>
              </div>
              <h3 className="text-xl font-bold mb-1">{t.about.teamSection.ceo.name}</h3>
              <p className="text-brand-blue font-semibold mb-3">{t.about.teamSection.ceo.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{t.about.teamSection.ceo.desc}</p>
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <Mail className="w-4 h-4" />
              </div>
            </Card>

            {/* Chief Doctor */}
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gradient-to-br from-brand-red to-brand-red/70 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-white text-4xl font-bold">MD</div>
              </div>
              <h3 className="text-xl font-bold mb-1">{t.about.teamSection.chiefDoctor.name}</h3>
              <p className="text-brand-red font-semibold mb-3">{t.about.teamSection.chiefDoctor.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{t.about.teamSection.chiefDoctor.desc}</p>
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <Mail className="w-4 h-4" />
              </div>
            </Card>

            {/* Senior Doctor */}
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gradient-to-br from-brand-blue to-brand-blue/70 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-white text-3xl font-bold">DR</div>
              </div>
              <h3 className="text-xl font-bold mb-1">{t.about.teamSection.doctor1.name}</h3>
              <p className="text-brand-blue font-semibold mb-3">{t.about.teamSection.doctor1.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{t.about.teamSection.doctor1.desc}</p>
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <Mail className="w-4 h-4" />
              </div>
            </Card>

            {/* Lead Nurse */}
            <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
              <div className="w-32 h-32 bg-gradient-to-br from-brand-red to-brand-red/70 rounded-full mx-auto mb-4 flex items-center justify-center overflow-hidden">
                <div className="text-white text-3xl font-bold">RN</div>
              </div>
              <h3 className="text-xl font-bold mb-1">{t.about.teamSection.nurse1.name}</h3>
              <p className="text-brand-red font-semibold mb-3">{t.about.teamSection.nurse1.role}</p>
              <p className="text-sm text-muted-foreground mb-4">{t.about.teamSection.nurse1.desc}</p>
              <div className="flex items-center justify-center gap-3 text-sm text-muted-foreground">
                <Phone className="w-4 h-4" />
                <Mail className="w-4 h-4" />
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
