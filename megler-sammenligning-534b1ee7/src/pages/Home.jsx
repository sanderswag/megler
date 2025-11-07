import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building2, 
  CheckCircle2, 
  TrendingUp, 
  Shield, 
  Clock, 
  Users,
  ArrowRight,
  Search,
  FileText,
  Handshake,
  ChevronDown,
  Sparkles
} from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";

const AFFILIATE_URL = "https://tjenestetorget.no/eiendom/";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(null);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.3]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.95]);

  const benefits = [
    {
      icon: TrendingUp,
      title: "Sammenlign priser",
      description: "Se forskjeller i honorar og få oversikt over hva ulike meglere tar for sine tjenester",
      color: "bg-blue-500"
    },
    {
      icon: Clock,
      title: "Spar tid",
      description: "Få tilbud fra flere meglere samtidig – enkelt, raskt og uforpliktende",
      color: "bg-purple-500"
    },
    {
      icon: Shield,
      title: "Gratis og uforpliktende",
      description: "Ingen skjulte kostnader. Sammenlign tilbud uten å forplikte deg til noe",
      color: "bg-green-500"
    },
    {
      icon: Users,
      title: "Kvalitetssikrede meglere",
      description: "Alle meglere i vårt nettverk er autoriserte og erfarne profesjonelle",
      color: "bg-orange-500"
    }
  ];

  const steps = [
    {
      number: "1",
      title: "Fyll ut skjema",
      description: "Fortell oss om boligen din og dine behov. Det tar bare 2 minutter",
      icon: FileText
    },
    {
      number: "2",
      title: "Motta tilbud",
      description: "Få gratis og uforpliktende tilbud fra flere kvalifiserte meglere",
      icon: Search
    },
    {
      number: "3",
      title: "Velg den beste",
      description: "Sammenlign tilbudene og velg megleren som passer best for deg",
      icon: Handshake
    }
  ];

  const faqs = [
    {
      question: "Hvor mye kan jeg spare ved å sammenligne meglere?",
      answer: "Ved å sammenligne tilbud fra flere meglere får du oversikt over markedspriser og kan velge det tilbudet som gir best verdi for pengene. Meglerhonorar varierer, så det lønner seg å sammenligne."
    },
    {
      question: "Er det virkelig helt gratis?",
      answer: "Ja, det er helt gratis å sammenligne tilbud. Du betaler ingenting for å motta tilbud fra meglere, og du forplikter deg ikke til noe."
    },
    {
      question: "Hvor lang tid tar det?",
      answer: "Det tar bare 2-3 minutter å fylle ut skjemaet. Deretter mottar du tilbud fra relevante meglere i ditt område som du kan sammenligne i ro og mak."
    },
    {
      question: "Hvilke meglere samarbeider dere med?",
      answer: "Vi samarbeider kun med autoriserte og etablerte eiendomsmeglere i Norge. Alle meglere i nettverket vårt er kvalitetssikret og har lang erfaring."
    },
    {
      question: "Må jeg velge en av meglerne?",
      answer: "Nei, du er ikke forpliktet til å velge noen av meglerne som sender deg tilbud. Tjenesten er helt uforpliktende, og du bestemmer selv om du vil gå videre."
    },
    {
      question: "Hvordan fungerer sammenligningen?",
      answer: "Etter at du har fylt ut skjemaet, mottar du tilbud fra flere meglere. Du kan så sammenligne pris, tjenester og erfaring for å finne den megleren som passer best til dine behov."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <motion.section 
        style={{ opacity, scale }}
        className="relative overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-900/50 to-blue-900/80" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <Badge className="mb-6 bg-white/20 text-white border-white/30 backdrop-blur-sm">
              <Sparkles className="w-3 h-3 mr-1" />
              Gratis og uforpliktende
            </Badge>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Sammenlign meglere.
              <br />
              <span className="text-blue-200">Finn den som passer deg best</span>
            </h1>
            
            <p className="text-xl md:text-2xl mb-10 text-blue-100 leading-relaxed">
              Få gratis og uforpliktende tilbud fra flere kvalifiserte eiendomsmeglere i ditt område. Enkelt, raskt og helt kostnadsfritt.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-8 py-6 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
                  Sammenlign meglere nå
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 border-white text-white hover:bg-white/10 text-lg px-8 py-6 backdrop-blur-sm"
                onClick={() => document.getElementById('hvordan-det-fungerer')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Se hvordan det fungerer
                <ChevronDown className="ml-2 w-5 h-5" />
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>100% gratis tjeneste</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Ingen forpliktelser</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-green-300" />
                <span>Autoriserte meglere</span>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Benefits Section - Bento Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Hvorfor sammenligne eiendomsmeglere?
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Å velge riktig megler kan bety mye for et vellykket boligsalg. Her er fordelene med å sammenligne.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-shadow duration-300 border-none bg-white">
                  <CardContent className="p-6">
                    <div className={`w-12 h-12 ${benefit.color} rounded-xl flex items-center justify-center mb-4`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2 text-slate-900">{benefit.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="hvordan-det-fungerer" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Sånn fungerer det
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tre enkle steg til å finne den perfekte eiendomsmegleren for ditt boligsalg
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-12 relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-purple-200 to-blue-200" style={{ width: 'calc(100% - 12rem)', left: '6rem' }} />
            
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 text-white text-2xl font-bold mb-6 shadow-lg relative z-10">
                    {step.number}
                  </div>
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-100">
                    <step.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                    <h3 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-lg px-10 py-6 shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                Kom i gang nå – helt gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-slate-900">
              Ofte stilte spørsmål
            </h2>
            <p className="text-xl text-slate-600">
              Her finner du svar på de vanligste spørsmålene om vår tjeneste
            </p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Card 
                  className="cursor-pointer hover:shadow-lg transition-all duration-300 border-2 border-slate-100"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-lg font-semibold text-slate-900 flex-1">
                        {faq.question}
                      </h3>
                      <ChevronDown 
                        className={`w-5 h-5 text-slate-400 transition-transform duration-300 flex-shrink-0 ${
                          openFaq === index ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                    {openFaq === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-slate-600 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=1600')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 to-transparent" />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center relative z-10"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Klar til å finne din ideelle eiendomsmegler?
          </h2>
          <p className="text-xl md:text-2xl mb-10 text-blue-100">
            Få tilbud fra flere kvalifiserte meglere i ditt område. Gratis, enkelt og helt uforpliktende.
          </p>
          <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-lg px-10 py-6 shadow-2xl hover:shadow-xl transition-all duration-300 hover:scale-105">
              Sammenlign meglere nå
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </a>
          
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span>Tar bare 2 minutter</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span>Ingen binding</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-green-300" />
              <span>Helt kostnadsfritt</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Building2 className="w-8 h-8 text-blue-400" />
                <span className="text-xl font-bold text-white">Boligsalgshjelpen.no</span>
              </div>
              <p className="text-sm leading-relaxed">
                Vi hjelper deg med å finne den beste eiendomsmegleren for ditt boligsalg. Sammenlign tilbud fra autoriserte meglere i hele Norge.
              </p>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Om tjenesten</h3>
              <ul className="space-y-2 text-sm">
                <li>100% gratis å bruke</li>
                <li>Ingen forpliktelser</li>
                <li>Kun autoriserte meglere</li>
                <li>Sikker og trygg</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-semibold mb-4">Kontakt</h3>
              <p className="text-sm leading-relaxed">
                Har du spørsmål om tjenesten? Vi svarer gjerne på dine henvendelser.
              </p>
            </div>
          </div>
          
          <div className="border-t border-slate-800 pt-8 text-sm text-center">
            <p>&copy; 2025 Boligsalgshjelpen.no. Alle rettigheter reservert.</p>
            <p className="mt-2 text-xs">
              Denne tjenesten drives i samarbeid med Tjenestetorget. Vi overholder alle gjeldende lover og regler for markedsføring i eiendomsbransjen.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}