import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  Search, 
  Clock, 
  ArrowRight,
  TrendingUp,
  Home,
  Calculator,
  FileText,
  Lightbulb,
  Calendar,
  Shield,
  Users,
  CheckCircle,
  Sparkles,
  Eye,
  MapPin,
  AlertTriangle,
  Camera,
  PiggyBank,
  Scale,
  Heart,
  Briefcase,
  ThumbsUp,
  Building,
  LineChart,
  Handshake,
  Award,
  ClipboardCheck,
  Key,
  DollarSign,
  Phone,
  Mail,
  BookOpen,
  Info
} from "lucide-react";
import { motion } from "framer-motion";

const AFFILIATE_URL = "https://tjenestetorget.no/eiendom/";

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState("");

  const blogPosts = [
    {
      id: 1,
      slug: "forbered-boligen-til-salg",
      title: "10 tips for å forberede boligen din til salg",
      excerpt: "Lær hvordan du gjør boligen din mest mulig attraktiv for potensielle kjøpere. Disse enkle tipsene kan gjøre stor forskjell.",
      category: "Forberedelse",
      readTime: "6 min",
      date: "15. januar 2025",
      icon: Home,
      color: "bg-blue-500"
    },
    {
      id: 2,
      slug: "hva-koster-det-selge-bolig",
      title: "Hva koster det egentlig å selge bolig i Norge?",
      excerpt: "En komplett oversikt over alle kostnader ved boligsalg - fra meglerhonorarer til dokumentavgift.",
      category: "Økonomi",
      readTime: "8 min",
      date: "14. januar 2025",
      icon: Calculator,
      color: "bg-green-500"
    },
    {
      id: 3,
      slug: "velge-riktig-megler",
      title: "Slik velger du riktig eiendomsmegler for ditt boligsalg",
      excerpt: "Det finnes mange meglere der ute. Her er kriteriene du bør vurdere når du skal velge den rette for deg.",
      category: "Meglerveiledning",
      readTime: "7 min",
      date: "13. januar 2025",
      icon: Users,
      color: "bg-purple-500"
    },
    {
      id: 4,
      slug: "styling-tips-visning",
      title: "Styling-tips som får boligen din til å skinne ved visning",
      excerpt: "Hjemmestyling kan øke salgsprisen betydelig. Lær de beste triksene fra profesjonelle stylister.",
      category: "Forberedelse",
      readTime: "5 min",
      date: "12. januar 2025",
      icon: Sparkles,
      color: "bg-pink-500"
    },
    {
      id: 5,
      slug: "riktig-prisetting-bolig",
      title: "Riktig prisetting av bolig - en guide for selgere",
      excerpt: "Hvordan finne riktig pris? For høy pris kan skremme kjøpere, for lav pris koster deg penger.",
      category: "Økonomi",
      readTime: "9 min",
      date: "11. januar 2025",
      icon: TrendingUp,
      color: "bg-orange-500"
    },
    {
      id: 6,
      slug: "beste-tidspunkt-selge-bolig",
      title: "Når er det beste tidspunktet å selge bolig?",
      excerpt: "Årstid og markedstiming kan påvirke salgsprisen. Finn ut når du bør legge boligen ut for salg.",
      category: "Marked",
      readTime: "6 min",
      date: "10. januar 2025",
      icon: Calendar,
      color: "bg-cyan-500"
    },
    {
      id: 7,
      slug: "dokumentasjon-boligsalg",
      title: "Hvilken dokumentasjon trenger du ved boligsalg?",
      excerpt: "En komplett sjekkliste over alle dokumenter du må ha på plass før du kan selge boligen.",
      category: "Juridisk",
      readTime: "7 min",
      date: "9. januar 2025",
      icon: FileText,
      color: "bg-indigo-500"
    },
    {
      id: 8,
      slug: "meglerhonorarer-forklart",
      title: "Meglerhonorarer forklart - hva betaler du for?",
      excerpt: "Forstå hva som er inkludert i meglerhonoraret og hvordan ulike meglere strukturerer sine priser.",
      category: "Økonomi",
      readTime: "8 min",
      date: "8. januar 2025",
      icon: Calculator,
      color: "bg-green-500"
    },
    {
      id: 9,
      slug: "tilstandsrapport-guide",
      title: "Alt du trenger å vite om tilstandsrapport",
      excerpt: "Hvorfor trenger du tilstandsrapport, hva koster den, og hvordan påvirker den salget?",
      category: "Juridisk",
      readTime: "6 min",
      date: "7. januar 2025",
      icon: Shield,
      color: "bg-red-500"
    },
    {
      id: 10,
      slug: "energimerking-bolig",
      title: "Energimerking av bolig - påvirker det salgsprisen?",
      excerpt: "Lær om krav til energimerking og hvordan en god energikarakter kan øke boligens verdi.",
      category: "Juridisk",
      readTime: "5 min",
      date: "6. januar 2025",
      icon: Lightbulb,
      color: "bg-yellow-500"
    },
    {
      id: 11,
      slug: "visningsstrategier",
      title: "Effektive visningsstrategier for raskere salg",
      excerpt: "Åpen visning eller private visninger? Lær når og hvordan du bør vise frem boligen din.",
      category: "Salg",
      readTime: "7 min",
      date: "5. januar 2025",
      icon: Eye,
      color: "bg-purple-500"
    },
    {
      id: 12,
      slug: "forhandlingstips-selger",
      title: "Forhandlingstips for boligselgere - få best pris",
      excerpt: "Slik forhandler du smartest når budene begynner å komme inn på boligen din.",
      category: "Salg",
      readTime: "8 min",
      date: "4. januar 2025",
      icon: Handshake,
      color: "bg-blue-500"
    },
    {
      id: 13,
      slug: "selge-bolig-oslo",
      title: "Guide: Selge bolig i Oslo - alt du må vite",
      excerpt: "Spesifikke tips og råd for deg som skal selge bolig i hovedstaden. Markedet, priser og lokale forhold.",
      category: "Lokalt",
      readTime: "10 min",
      date: "3. januar 2025",
      icon: MapPin,
      color: "bg-blue-600"
    },
    {
      id: 14,
      slug: "vanlige-feil-boligsalg",
      title: "De 7 vanligste feilene ved boligsalg - og hvordan unngå dem",
      excerpt: "Lær av andres feil. Her er de mest kostbare tabben selgere gjør, og hvordan du kan unngå dem.",
      category: "Tips",
      readTime: "9 min",
      date: "2. januar 2025",
      icon: AlertTriangle,
      color: "bg-red-600"
    },
    {
      id: 15,
      slug: "fotografering-bolig",
      title: "Slik tar du perfekte boligbilder for salgsannonsen",
      excerpt: "Profesjonelle tips for å ta bilder som får kjøpere til å booke visning. Utstyr, teknikk og redigering.",
      category: "Markedsføring",
      readTime: "6 min",
      date: "1. januar 2025",
      icon: Camera,
      color: "bg-pink-600"
    },
    {
      id: 16,
      slug: "skattefradrag-boligsalg",
      title: "Skattefradrag og avgifter ved boligsalg i Norge",
      excerpt: "Hvilke skatteregler gjelder når du selger bolig? Få oversikt over fradrag, gevinst og avgifter.",
      category: "Økonomi",
      readTime: "8 min",
      date: "31. desember 2024",
      icon: PiggyBank,
      color: "bg-green-600"
    },
    {
      id: 17,
      slug: "budprosessen-forklart",
      title: "Budprosessen forklart: Fra første bud til signert kontrakt",
      excerpt: "Hvordan fungerer budgivning i Norge? Alt om budrunder, frist, aksept og avslag.",
      category: "Juridisk",
      readTime: "7 min",
      date: "30. desember 2024",
      icon: Scale,
      color: "bg-indigo-600"
    },
    {
      id: 18,
      slug: "selge-arvet-bolig",
      title: "Selge arvet bolig - praktisk guide og juridiske forhold",
      excerpt: "Hva må du tenke på når du skal selge en bolig du har arvet? Skatt, arveavgift og fremgangsmåte.",
      category: "Juridisk",
      readTime: "9 min",
      date: "29. desember 2024",
      icon: Heart,
      color: "bg-rose-500"
    },
    {
      id: 19,
      slug: "naboloven-boligsalg",
      title: "Naboloven og ditt ansvar som selger",
      excerpt: "Hvilke opplysningsplikt har du overfor kjøper om naboforhold, støy og andre forhold?",
      category: "Juridisk",
      readTime: "6 min",
      date: "28. desember 2024",
      icon: Users,
      color: "bg-purple-600"
    },
    {
      id: 20,
      slug: "selge-bolig-fort",
      title: "Hvordan selge boligen din raskt - 8 effektive strategier",
      excerpt: "Trenger du å selge fort? Her er strategiene som fungerer for å få boligen solgt på kortest mulig tid.",
      category: "Salg",
      readTime: "7 min",
      date: "27. desember 2024",
      icon: TrendingUp,
      color: "bg-orange-600"
    },
    {
      id: 21,
      slug: "kjopskontrakt-forklart",
      title: "Kjøpskontrakten forklart - punkt for punkt",
      excerpt: "Hva står egentlig i en kjøpskontrakt? Forstå alle vilkårene og klausulene før du signerer.",
      category: "Juridisk",
      readTime: "10 min",
      date: "26. desember 2024",
      icon: FileText,
      color: "bg-slate-600"
    },
    {
      id: 22,
      slug: "selge-leilighet",
      title: "Selge leilighet: Særlige hensyn og vedtekter",
      excerpt: "Hva skiller seg ut når du selger leilighet? Sameie, felleskostnader, vedtekter og mer.",
      category: "Boligtype",
      readTime: "8 min",
      date: "25. desember 2024",
      icon: Building,
      color: "bg-gray-600"
    },
    {
      id: 23,
      slug: "boligmarkedet-2025",
      title: "Boligmarkedet 2025: Trender og prognoser",
      excerpt: "Hva skjer i det norske boligmarkedet? Ekspertenes spådommer for renter, priser og salgsvolum.",
      category: "Marked",
      readTime: "9 min",
      date: "24. desember 2024",
      icon: LineChart,
      color: "bg-blue-700"
    },
    {
      id: 24,
      slug: "meglervalg-erfaringer",
      title: "Meglervalg: Hva sier kundene? Erfaringer fra ekte selgere",
      excerpt: "Lær av andres erfaringer. Hva legger folk vekt på, og hva angret de på?",
      category: "Meglerveiledning",
      readTime: "7 min",
      date: "23. desember 2024",
      icon: ThumbsUp,
      color: "bg-green-700"
    },
    {
      id: 25,
      slug: "renovering-for-salg",
      title: "Lønner det seg å renovere før salg?",
      excerpt: "Hvilke oppgraderinger gir best avkastning? Kostnad-nytte analyse av vanlige renoveringsprosjekter.",
      category: "Forberedelse",
      readTime: "8 min",
      date: "22. desember 2024",
      icon: Briefcase,
      color: "bg-orange-700"
    },
    {
      id: 26,
      slug: "prospekt-og-annonsering",
      title: "Prospekt og annonsering: Slik markedsfører meglerne boligen din",
      excerpt: "Hva bør stå i prospektet? Hvordan annonseres boligen, og hvordan når du flest mulige kjøpere?",
      category: "Markedsføring",
      readTime: "6 min",
      date: "21. desember 2024",
      icon: BookOpen,
      color: "bg-cyan-700"
    },
    {
      id: 27,
      slug: "reklamasjonsrett-selger",
      title: "Selgers ansvar og kjøpers reklamasjonsrett",
      excerpt: "Hva er ditt ansvar som selger etter overtakelse? Forstå reklamasjon og mangelsansvar.",
      category: "Juridisk",
      readTime: "9 min",
      date: "20. desember 2024",
      icon: Shield,
      color: "bg-red-700"
    },
    {
      id: 28,
      slug: "overtakelse-bolig",
      title: "Overtakelse av bolig: Hva skjer på overtakelsesdagen?",
      excerpt: "Alt om selve overtakelsen - befaring, nøkkeloverleverring og hva du må gjøre som selger.",
      category: "Prosess",
      readTime: "7 min",
      date: "19. desember 2024",
      icon: Key,
      color: "bg-yellow-700"
    },
    {
      id: 29,
      slug: "salgsoppgave-megler",
      title: "Salgsoppgaven: Din avtale med eiendomsmegleren",
      excerpt: "Hva er salgsoppgaven, og hva bør du passe på før du signerer? Bindingstid, honorar og vilkår.",
      category: "Meglerveiledning",
      readTime: "8 min",
      date: "18. desember 2024",
      icon: FileText,
      color: "bg-indigo-700"
    },
    {
      id: 30,
      slug: "prisantydning-vs-salgspris",
      title: "Prisantydning vs salgspris: Hvorfor er det forskjell?",
      excerpt: "Forstå forskjellen mellom prisantydning, takst og faktisk salgspris. Hvorfor ender man ofte høyere?",
      category: "Økonomi",
      readTime: "6 min",
      date: "17. desember 2024",
      icon: DollarSign,
      color: "bg-green-800"
    },
    {
      id: 31,
      slug: "selge-uten-megler",
      title: "Kan du selge bolig uten megler? Pros og cons",
      excerpt: "Er det mulig å selge selv? Hva sparer du, og hva går du glipp av? En ærlig vurdering.",
      category: "Alternativ",
      readTime: "8 min",
      date: "16. desember 2024",
      icon: Users,
      color: "bg-slate-700"
    },
    {
      id: 32,
      slug: "digitale-visninger",
      title: "Digitale visninger og VR-teknologi i boligsalg",
      excerpt: "Hvordan fungerer 360-visninger og virtuelle fremvisninger? Fremtidens måte å vise boliger på.",
      category: "Teknologi",
      readTime: "6 min",
      date: "15. desember 2024",
      icon: Eye,
      color: "bg-purple-700"
    },
    {
      id: 33,
      slug: "salgsprosessen-steg-for-steg",
      title: "Salgsprosessen steg for steg: Fullstendig guide",
      excerpt: "Fra beslutning om salg til overtakelse - en detaljert gjennomgang av hele prosessen.",
      category: "Prosess",
      readTime: "12 min",
      date: "14. desember 2024",
      icon: ClipboardCheck,
      color: "bg-blue-800"
    },
    {
      id: 34,
      slug: "forbehold-i-bud",
      title: "Forbehold i bud: Hva betyr det, og bør du akseptere?",
      excerpt: "Finansieringsforbehold, salgsforbehold og takstforbehold - hva innebærer de ulike forbeholdene?",
      category: "Juridisk",
      readTime: "7 min",
      date: "13. desember 2024",
      icon: Info,
      color: "bg-amber-700"
    },
    {
      id: 35,
      slug: "kontakte-megler",
      title: "Hvordan ta kontakt med eiendomsmegler - beste fremgangsmåte",
      excerpt: "Hva bør du spørre om i første møte? Forbered deg godt for å få mest mulig ut av kontakten.",
      category: "Meglerveiledning",
      readTime: "5 min",
      date: "12. desember 2024",
      icon: Phone,
      color: "bg-cyan-800"
    },
    {
      id: 36,
      slug: "markedsforing-sosiale-medier",
      title: "Markedsføring av bolig på sosiale medier",
      excerpt: "Hvordan bruker moderne meglere Instagram, Facebook og TikTok for å nå flere kjøpere?",
      category: "Markedsføring",
      readTime: "6 min",
      date: "11. desember 2024",
      icon: Mail,
      color: "bg-pink-700"
    }
  ];

  const categories = [
    "Alle", 
    "Forberedelse", 
    "Økonomi", 
    "Meglerveiledning", 
    "Juridisk", 
    "Salg", 
    "Marked",
    "Markedsføring",
    "Lokalt",
    "Tips",
    "Boligtype",
    "Prosess",
    "Teknologi",
    "Alternativ"
  ];
  
  const [selectedCategory, setSelectedCategory] = useState("Alle");

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "Alle" || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-purple-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Badge className="mb-4 bg-white/20 backdrop-blur-sm border-white/30 text-white">
              <BookOpen className="w-3 h-3 mr-1" />
              36+ artikler om boligsalg
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Alt du trenger å vite om boligsalg
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Eksperttips, guider og råd for et vellykket boligsalg i Norge. Gratis kunnskap fra erfarne eiendomsmeglere.
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Søk etter artikler om boligsalg, meglere, priser..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg bg-white/10 backdrop-blur-sm border-white/20 text-white placeholder:text-blue-200"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-b">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600">{blogPosts.length}+</div>
              <div className="text-sm text-slate-600">Artikler</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-600">{categories.length - 1}</div>
              <div className="text-sm text-slate-600">Kategorier</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-purple-600">100%</div>
              <div className="text-sm text-slate-600">Gratis kunnskap</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-orange-600">0 kr</div>
              <div className="text-sm text-slate-600">Helt kostnadsfritt</div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-sm font-semibold text-slate-600 mb-4 text-center">FILTRER ETTER KATEGORI</h3>
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? "bg-blue-600 hover:bg-blue-700" : ""}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured CTA */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none shadow-xl">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">
                    Klar til å selge boligen din?
                  </h3>
                  <p className="text-blue-100 text-lg">
                    Sammenlign tilbud fra flere kvalifiserte meglere og finn den som passer best for deg
                  </p>
                </div>
                <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 shadow-lg hover:shadow-xl transition-all">
                    Sammenlign meglere nå
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-8 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-slate-900">
              {selectedCategory === "Alle" ? "Alle artikler" : `Artikler om ${selectedCategory}`}
            </h2>
            <Badge variant="secondary" className="text-sm">
              {filteredPosts.length} artikler
            </Badge>
          </div>
          
          {filteredPosts.length === 0 ? (
            <div className="text-center py-20">
              <Search className="w-16 h-16 text-slate-300 mx-auto mb-4" />
              <p className="text-xl text-slate-500">Ingen artikler funnet</p>
              <p className="text-slate-400 mt-2">Prøv et annet søkeord eller kategori</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.02 }}
                >
                  <Link to={createPageUrl(`BlogPost?id=${post.slug}`)}>
                    <Card className="h-full hover:shadow-2xl transition-all duration-300 cursor-pointer group border-none overflow-hidden">
                      <div className={`h-2 ${post.color}`} />
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className={`w-12 h-12 ${post.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                            <post.icon className="w-6 h-6 text-white" />
                          </div>
                          <Badge variant="secondary" className="text-xs">
                            {post.category}
                          </Badge>
                        </div>
                        
                        <h3 className="text-xl font-bold mb-3 text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2">
                          {post.title}
                        </h3>
                        
                        <p className="text-slate-600 mb-4 leading-relaxed line-clamp-3">
                          {post.excerpt}
                        </p>
                        
                        <div className="flex items-center justify-between text-sm text-slate-500">
                          <div className="flex items-center gap-2">
                            <Clock className="w-4 h-4" />
                            <span>{post.readTime}</span>
                          </div>
                          <span className="text-xs">{post.date}</span>
                        </div>
                        
                        <div className="mt-4 flex items-center text-blue-600 font-medium group-hover:gap-3 gap-2 transition-all">
                          Les mer
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-slate-900">
              Trenger du hjelp med boligsalget?
            </h2>
            <p className="text-xl text-slate-600 mb-8">
              Få gratis og uforpliktende tilbud fra flere kvalifiserte eiendomsmeglere
            </p>
            <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all">
                Sammenlign meglere gratis
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </a>
            <div className="mt-6 flex flex-wrap justify-center gap-6 text-sm text-slate-600">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Helt gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Ingen forpliktelser</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Svar på 2 minutter</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}