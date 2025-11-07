import React, { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { 
  ArrowLeft, 
  Clock, 
  Calendar,
  Share2,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { motion } from "framer-motion";

const AFFILIATE_URL = "https://tjenestetorget.no/eiendom/";

export default function BlogPost() {
  const urlParams = new URLSearchParams(window.location.search);
  const postId = urlParams.get('id');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [postId]);

  const blogContent = {
    "forbered-boligen-til-salg": {
      title: "10 tips for å forberede boligen din til salg",
      category: "Forberedelse",
      readTime: "6 min",
      date: "15. januar 2025",
      content: `
        <p>Å selge bolig er en stor beslutning, og forberedelsene kan ha stor betydning for både salgspris og hvor raskt du finner en kjøper. Her er våre 10 beste tips for å gjøre boligen klar for salg.</p>

        <h2>1. Rydd og rens grundig</h2>
        <p>En ryddig og ren bolig gir et mye bedre førsteinntrykk. Gjør en grundig vårrengjøring i hele boligen, og vær spesielt oppmerksom på kjøkken og bad. Potensielle kjøpere vil se etter tegn på vedlikehold og pleie.</p>

        <h2>2. Depersonaliser boligen</h2>
        <p>Fjern personlige gjenstander som familiebilder, magneter på kjøleskapet og personlige samlinger. Dette hjelper potensielle kjøpere med å se for seg hvordan de selv kan bo i boligen.</p>

        <h2>3. Reparer synlige skader</h2>
        <p>Små skader som sprekkede fliser, løse dørhåndtak eller skallet maling kan gi inntrykk av dårlig vedlikehold. Utbedre disse før visning - det er relativt enkle og rimelige fikser som kan gjøre stor forskjell.</p>

        <h2>4. Mal veggene i nøytrale farger</h2>
        <p>Sterke farger kan være vanskelige for kjøpere å se forbi. Nøytrale farger som hvitt, beige eller lysegrått appellerer til flere og gjør rommene lysere og mer romslige.</p>

        <h2>5. Optimaliser lysforholdene</h2>
        <p>Lys gjør rom mer innbydende. Vask vinduer, bytt ut mørke gardiner med lyse, og sørg for god belysning i alle rom. Åpne persienner og gardiner før visning for å slippe inn mest mulig naturlig lys.</p>

        <h2>6. Oppgrader nøkkelpunkter</h2>
        <p>Små oppgraderinger i kjøkken og bad gir ofte god avkastning. Dette kan være nye håndtak på skap, ny dusjdør, eller nye armaturer. Du trenger ikke totalrenovere - små endringer kan gjøre stor forskjell.</p>

        <h2>7. Forbedre uteområdet</h2>
        <p>Førsteinntrykket starter utenfor. Klippe plenen, lukte ugress, og plant noen blomster ved inngangen. Et velstelt uteområde signaliserer at boligen er godt vedlikeholdt.</p>

        <h2>8. Fjern rot og overflødig møbler</h2>
        <p>Mindre er mer når det kommer til visning. Fjern overflødig møbler for å få rommene til å virke større. Leie et lager hvis nødvendig - det er en liten investering som kan gi stor avkastning.</p>

        <h2>9. Sørg for god lukt</h2>
        <p>Lukt er viktigere enn du tror. Luft grundig før visning, og unngå sterke lukter som mat eller parfyme. En subtil duft av rent eller nybakt brød kan være positivt.</p>

        <h2>10. Ta profesjonelle bilder</h2>
        <p>De fleste kjøpere ser boligen på nett først. Investér i en profesjonell fotograf som kan vise boligen din fra sin beste side. Gode bilder gir flere visninger.</p>

        <h2>Trenger du hjelp?</h2>
        <p>En god eiendomsmegler kan gi deg konkrete råd om hva som bør gjøres i din spesifikke bolig. Ulike boliger i ulike prisklasser krever forskjellig tilnærming.</p>
      `
    },
    "hva-koster-det-selge-bolig": {
      title: "Hva koster det egentlig å selge bolig i Norge?",
      category: "Økonomi",
      readTime: "8 min",
      date: "14. januar 2025",
      content: `
        <p>Når du skal selge bolig, er det flere kostnader du må ta høyde for. Her får du en komplett oversikt over hva du kan forvente å betale.</p>

        <h2>Meglerhonoraret - den største kostnaden</h2>
        <p>Meglerhonoraret er vanligvis den største enkeltutgiften ved boligsalg. I Norge varierer honoraret betydelig mellom ulike meglere og geografiske områder, men ligger typisk mellom 1,5% og 3% av salgsprisen, pluss en fast avgift.</p>
        
        <p>For en bolig til 4 millioner kroner kan meglerhonoraret typisk være:</p>
        <ul>
          <li>40.000 - 50.000 kr i fast honorar</li>
          <li>Pluss 1,5% - 2,5% av salgsprisen (60.000 - 100.000 kr)</li>
          <li>Totalt: 100.000 - 150.000 kr</li>
        </ul>

        <p><strong>Viktig å vite:</strong> Meglerhonoraret kan forhandles! Derfor lønner det seg å sammenligne tilbud fra flere meglere.</p>

        <h2>Dokumentavgift</h2>
        <p>Dokumentavgift er en statlig avgift som kjøper vanligvis betaler, men i noen tilfeller kan det forhandles at selger dekker den. Avgiften er 2,5% av kjøpesummen for boliger til privatbruk.</p>

        <h2>Tilstandsrapport</h2>
        <p>En tilstandsrapport er påkrevd ved salg av bolig, med mindre boligen er ferdigstilt de siste 10 årene eller er en enebolig bygget før 1. januar 2015. Kostnaden varierer med boligens størrelse:</p>
        <ul>
          <li>Leilighet: 6.000 - 10.000 kr</li>
          <li>Enebolig: 10.000 - 20.000 kr</li>
          <li>Store eiendommer: 20.000 - 30.000 kr</li>
        </ul>

        <h2>Energiattest</h2>
        <p>Energiattest er obligatorisk og viser boligens energieffektivitet. Kostnaden er vanligvis 2.000 - 4.000 kr.</p>

        <h2>Takst</h2>
        <p>Selv om takst ikke alltid er påkrevd, anbefales det ofte for å sette riktig prisantydning. En takst koster typisk 6.000 - 12.000 kr, avhengig av boligens størrelse og kompleksitet.</p>

        <h2>Forberedelser og styling</h2>
        <p>Kostnadene her varierer veldig basert på boligens tilstand:</p>
        <ul>
          <li>Hjemmestyling: 5.000 - 30.000 kr</li>
          <li>Mindre reparasjoner: 10.000 - 50.000 kr</li>
          <li>Maling og oppussing: 20.000 - 100.000 kr+</li>
          <li>Profesjonell fotografering: 3.000 - 8.000 kr</li>
        </ul>

        <h2>Markedsføring</h2>
        <p>Markedsføringskostnader er ofte inkludert i meglerhonoraret, men kan variere:</p>
        <ul>
          <li>Annonser på nett og i aviser: 5.000 - 20.000 kr</li>
          <li>Visningsskilt og prospekter: 2.000 - 5.000 kr</li>
          <li>Åpen hus-arrangement: 1.000 - 3.000 kr per visning</li>
        </ul>

        <h2>Totalkostnad - et eksempel</h2>
        <p>For en gjennomsnittlig bolig til 4 millioner kroner kan totalkostnadene se slik ut:</p>
        <ul>
          <li>Meglerhonorар: 100.000 - 150.000 kr</li>
          <li>Tilstandsrapport: 10.000 kr</li>
          <li>Energiattest: 3.000 kr</li>
          <li>Takst: 8.000 kr</li>
          <li>Styling og forberedelser: 20.000 kr</li>
          <li>Markedsføring: 10.000 kr</li>
          <li><strong>Totalt: 151.000 - 201.000 kr</strong></li>
        </ul>

        <h2>Hvordan kan du spare penger?</h2>
        <p>Den største besparelsen får du ved å sammenligne meglere. Honoraret kan variere med 50.000 kr eller mer mellom ulike meglere for samme bolig.</p>
        
        <p>Andre sparetips:</p>
        <ul>
          <li>Gjør styling og småfikser selv</li>
          <li>Forhandle pakkepriser med megleren</li>
          <li>Vurder om alle rapporter er nødvendige for din bolig</li>
        </ul>
      `
    },
    "velge-riktig-megler": {
      title: "Slik velger du riktig eiendomsmegler for ditt boligsalg",
      category: "Meglerveiledning",
      readTime: "7 min",
      date: "13. januar 2025",
      content: `
        <p>Valg av eiendomsmegler er en av de viktigste beslutningene du tar når du skal selge bolig. En god megler kan bety forskjellen mellom et raskt, lønnsomt salg og en langvarig prosess. Her er din guide til å velge riktig.</p>

        <h2>Hvorfor er valg av megler så viktig?</h2>
        <p>En dyktig megler gjør mer enn å ta bilder og arrangere visninger. De setter riktig pris, markedsfører boligen effektivt, håndterer forhandlinger, og sørger for at hele prosessen går smooth. En feil valg kan koste deg både tid og penger.</p>

        <h2>Kriterier du bør vurdere</h2>

        <h3>1. Lokal kunnskap og erfaring</h3>
        <p>En megler som kjenner ditt nabolag godt har verdifull innsikt i:</p>
        <ul>
          <li>Lokale prisforskjeller og trender</li>
          <li>Hvem målgruppen er</li>
          <li>Beste salgskanaler for området</li>
          <li>Hva kjøpere i området verdsetter</li>
        </ul>

        <h3>2. Salgsoversikt og track record</h3>
        <p>Sjekk meglerens historikk:</p>
        <ul>
          <li>Hvor mange boliger har de solgt i ditt område?</li>
          <li>Hva er gjennomsnittlig salgstid?</li>
          <li>Hvor tett på prisantydning selges boligene?</li>
          <li>Finnes det anmeldelser eller referanser?</li>
        </ul>

        <h3>3. Kommunikasjon og personlig kjemi</h3>
        <p>Du kommer til å jobbe tett med megleren din i flere uker eller måneder. Derfor er det viktig at:</p>
        <ul>
          <li>Dere kommuniserer godt</li>
          <li>Megleren lytter til dine behov og bekymringer</li>
          <li>Du får rask respons på henvendelser</li>
          <li>Du føler deg trygg og ivaretatt</li>
        </ul>

        <h3>4. Markedsføringsstrategi</h3>
        <p>Spør megleren om deres markedsføringsplan:</p>
        <ul>
          <li>Hvilke kanaler bruker de?</li>
          <li>Hvordan tar de bilder og lager annonser?</li>
          <li>Hvordan planlegges visninger?</li>
          <li>Bruker de sosiale medier aktivt?</li>
        </ul>

        <h3>5. Honorar og kostnader</h3>
        <p>Pris er viktig, men ikke alt. Se på helheten:</p>
        <ul>
          <li>Hva er inkludert i honoraret?</li>
          <li>Finnes det skjulte kostnader?</li>
          <li>Hva koster ekstra tjenester?</li>
          <li>Er det rom for forhandling?</li>
        </ul>

        <h3>6. Tilgjengelighet og ressurser</h3>
        <p>En megler som har for mange oppdrag samtidig kan ikke gi deg den oppmerksomheten du fortjener. Spør:</p>
        <ul>
          <li>Hvor mange aktive salgsoppdrag har de?</li>
          <li>Har de assistenter eller team?</li>
          <li>Hvordan håndteres visninger ved deres fravær?</li>
        </ul>

        <h2>Møt flere meglere før du bestemmer deg</h2>
        <p>Det smarteste du kan gjøre er å møte 3-4 ulike meglere før du bestemmer deg. Dette gir deg:</p>
        <ul>
          <li>Mulighet til å sammenligne tilbud og honorar</li>
          <li>Ulike perspektiver på din bolig</li>
          <li>Bedre forhandlingsposisjon</li>
          <li>Trygghet i valget ditt</li>
        </ul>

        <h2>Spørsmål du bør stille på møtet</h2>
        <p>Forbered deg med disse spørsmålene:</p>
        <ol>
          <li>Hvor mange boliger har du solgt i dette området det siste året?</li>
          <li>Hva mener du boligen min kan selges for, og hvorfor?</li>
          <li>Hva er din markedsføringsstrategi for min bolig?</li>
          <li>Hvor lang salgstid kan jeg forvente?</li>
          <li>Hva er ditt honorar, og hva er inkludert?</li>
          <li>Kan du gi meg referanser fra tidligere kunder?</li>
          <li>Hvor tilgjengelig vil du være under salgsprosessen?</li>
          <li>Hva skjer hvis boligen ikke selges innen forventet tid?</li>
        </ol>

        <h2>Røde flagg - advarselsignaler</h2>
        <p>Vær på vakt mot meglere som:</p>
        <ul>
          <li>Lover urealistisk høy pris for å få oppdraget</li>
          <li>Pusher deg til å signere uten tid til å tenke</li>
          <li>Ikke kan dokumentere tidligere salg</li>
          <li>Virker lite interessert i å lytte til deg</li>
          <li>Ikke har klar prisoversikt eller kontrakt</li>
        </ul>

        <h2>Konklusjon</h2>
        <p>Å velge riktig megler handler om å finne balansen mellom erfaring, pris, og personlig kjemi. Ta deg tid til å undersøke alternativene - det kan bety forskjellen på titusener av kroner i sluttprisen.</p>
      `
    },
    "styling-tips-visning": {
      title: "Styling-tips som får boligen din til å skinne ved visning",
      category: "Forberedelse",
      readTime: "5 min",
      date: "12. januar 2025",
      content: `
        <p>Hjemmestyling, eller "home staging", kan øke boligens salgspris med 5-15% og redusere salgstiden betydelig. Her er de beste tipsene fra profesjonelle stylister.</p>

        <h2>Hvorfor er styling viktig?</h2>
        <p>De fleste kjøpere bestemmer seg innen de første 10 sekundene av en visning. Styling hjelper potensielle kjøpere med å:</p>
        <ul>
          <li>Se boligens fulle potensial</li>
          <li>Forestille seg hvordan de selv kan bo der</li>
          <li>Fokusere på det positive fremfor eventuelle mangler</li>
          <li>Skape en emosjonell tilknytning til boligen</li>
        </ul>

        <h2>Generelle prinsipper</h2>

        <h3>Less is more</h3>
        <p>Mindre rot og færre møbler gjør at rommene virker større og mer luftige. Fjern minst 30-50% av tingene dine før visning.</p>

        <h3>Nøytralitet selger</h3>
        <p>Selv om du elsker knallrøde vegger, kan de skremme potensielle kjøpere. Hold deg til nøytrale, lyse farger som appellerer til flest mulig.</p>

        <h3>Symmetri og balanse</h3>
        <p>Mennesker liker symmetri. Plasser møbler og dekorasjoner symmetrisk der det passer for å skape harmoni.</p>

        <h2>Rom for rom - stylingtips</h2>

        <h3>Stue</h3>
        <ul>
          <li>Plasser sofaen slik at den skaper en innbydende samtalesone</li>
          <li>Legg til myke tekstiler: puter, pledd, tepper</li>
          <li>Skape et fokuspunkt (peis, kunstverk, vakker utsikt)</li>
          <li>Sørg for god belysning med flere lyskilder</li>
          <li>Fjern personlige bilder og erstatt med nøytral kunst</li>
        </ul>

        <h3>Kjøkken</h3>
        <ul>
          <li>Rydd ALLE benkeplater - helt tomme</li>
          <li>Legg frem kun 2-3 dekorative elementer (fruktfat, kaffekkvern)</li>
          <li>Sørg for at alle apparater er blanke og rene</li>
          <li>Organiser skap og skuffer (kjøpere åpner dem!)</li>
          <li>Legg ut friske blomster eller grønne planter</li>
        </ul>

        <h3>Soverom</h3>
        <ul>
          <li>Investér i nytt, hvitt sengetøy</li>
          <li>Legg mange puter på sengen (5-7 stk)</li>
          <li>Fjern personlige gjenstander fra nattbord</li>
          <li>Tøm eller minimaliser kleseskapene (virker større)</li>
          <li>Bruk dempet, behagelig belysning</li>
        </ul>

        <h3>Bad</h3>
        <ul>
          <li>Hvite håndklær matchet i størrelse og stil</li>
          <li>Rull dem pent og vis dem frem</li>
          <li>Fjern ALL personlig hygiene fra syne</li>
          <li>Tøm søppelbøtta</li>
          <li>Legg ut duftlys (tennes rett før visning)</li>
        </ul>

        <h2>Farger og belysning</h2>
        <p>Lys og farger er essensielt for stemningen:</p>
        <ul>
          <li>Mal vegger i hvitt, lyse grå eller beige toner</li>
          <li>Maksimér naturlig lys - vask vinduer, åpne gardiner</li>
          <li>Legg til lamper i mørke hjørner</li>
          <li>Bruk lyspærer med varm (2700-3000K) fargetemperatur</li>
          <li>Tenn ALLE lys under visning, selv på dagtid</li>
        </ul>

        <h2>Dekorasjonstips</h2>
        <p>Riktig dekor setter prikken over i-en:</p>
        <ul>
          <li>Friske blomster i stue og på kjøkkenbenk</li>
          <li>Grønne planter for liv og friskhet</li>
          <li>Nøytrale kunstplakater i enkle rammer</li>
          <li>Dekorative boker stablet på bord</li>
          <li>Matchende oppbevaringsbokser i hyller</li>
        </ul>

        <h2>Lukt - den glemte sansen</h2>
        <p>Luktsansen er sterkt knyttet til minner og følelser:</p>
        <ul>
          <li>Luft grundig før visning (minst 30 min)</li>
          <li>Bak vaniljeboller eller brød (klassisk triks!)</li>
          <li>Bruk subtile duftlys (vanilje, sitrus, lavendel)</li>
          <li>Unngå sterke parfymer eller luftfriskere</li>
          <li>Sørg for at kjæledyrlukt er borte</li>
        </ul>

        <h2>Budsjett styling</h2>
        <p>Du trenger ikke bruke formuer på styling:</p>
        <ul>
          <li><strong>Under 5.000 kr:</strong> Fokus på rydding, nye tekstiler (puter, håndklær), blomster</li>
          <li><strong>5.000-15.000 kr:</strong> Legg til maling, nye gardiner, dekor fra IKEA/H&M Home</li>
          <li><strong>15.000-30.000 kr:</strong> Lei møbler, ansett profesjonell stylist for råd</li>
          <li><strong>Over 30.000 kr:</strong> Full profesjonell styling med leiemøbler</li>
        </ul>

        <h2>Før-og-etter sjekkliste</h2>
        <p>Gjør dette 24 timer før visning:</p>
        <ul>
          <li>Støvsug og mopp alle gulv</li>
          <li>Tørk av alle overflater</li>
          <li>Rens speil og vinduer</li>
          <li>Tøm søppelbøtter</li>
          <li>Gjør rent bad og kjøkken ekstra grundig</li>
          <li>Redd alle senger med nytt tøy</li>
          <li>Plukk frem friske blomster</li>
          <li>Tenn duftlys 15 min før visning</li>
        </ul>

        <h2>Konklusjon</h2>
        <p>God styling handler om å vise boligens beste sider og hjelpe kjøpere med å forestille seg et liv der. Med relativt enkle grep kan du øke boligens appell betydelig - og det reflekteres i salgsprisen.</p>
      `
    },
    // Default content for all other slugs
    "default": {
      title: "Boligsalg i Norge - Komplett guide",
      category: "Guide",
      readTime: "10 min",
      date: "2025",
      content: `
        <p>Velkommen til vår omfattende guide om boligsalg i Norge. Denne artikkelen gir deg verdifull innsikt i prosessen med å selge bolig.</p>

        <h2>Hvorfor er det viktig å være godt forberedt?</h2>
        <p>Å selge bolig er en av de største økonomiske transaksjonene de fleste gjennomfører i løpet av livet. God forberedelse kan spare deg for tid, penger og stress.</p>

        <h2>Nøkkelpunkter ved boligsalg</h2>
        <ul>
          <li>Velg riktig megler basert på erfaring, lokalkunnskap og honorar</li>
          <li>Forbered boligen grundig før visning - det kan øke salgsprisen betydelig</li>
          <li>Sett riktig pris fra start - verken for høyt eller for lavt</li>
          <li>Forstå alle kostnadene involvert i et boligsalg</li>
          <li>Ha all nødvendig dokumentasjon klar</li>
        </ul>

        <h2>Valg av eiendomsmegler</h2>
        <p>Valg av riktig eiendomsmegler er kritisk for et vellykket salg. Sammenlign alltid flere meglere før du bestemmer deg.</p>

        <h3>Hva bør du se etter i en megler?</h3>
        <ul>
          <li>Erfaring med salg i ditt område</li>
          <li>God kommunikasjon og tilgjengelighet</li>
          <li>Tydelig markedsføringsstrategi</li>
          <li>Konkurransedyktig honorar</li>
          <li>Gode referanser fra tidligere kunder</li>
        </ul>

        <h2>Dokumentasjon og juridiske krav</h2>
        <p>Ved boligsalg i Norge er det flere dokumenter som må være på plass:</p>
        <ul>
          <li>Tilstandsrapport (påkrevd for de fleste boliger)</li>
          <li>Energiattest</li>
          <li>Salgsoppgave</li>
          <li>Kjøpekontrakt</li>
          <li>Panteattest</li>
        </ul>

        <h2>Kostnader ved salg</h2>
        <p>De største kostnadene ved boligsalg inkluderer:</p>
        <ul>
          <li>Meglerhonorар (typisk 1,5-3% av salgsprisen pluss fast avgift)</li>
          <li>Tilstandsrapport (6.000-20.000 kr)</li>
          <li>Energiattest (2.000-4.000 kr)</li>
          <li>Forberedelser og styling (varierende)</li>
          <li>Markedsføring (ofte inkludert i meglerhonoraret)</li>
        </ul>

        <h2>Forberedelse av boligen</h2>
        <p>God forberedelse kan øke salgsprisen med 5-15%:</p>
        <ul>
          <li>Rydd og rens grundig</li>
          <li>Depersonaliser</li>
          <li>Mal i nøytrale farger</li>
          <li>Reparer synlige skader</li>
          <li>Optimaliser lysforhold</li>
          <li>Invester i profesjonell fotografering</li>
        </ul>

        <h2>Timing og marked</h2>
        <p>Tidspunktet for salg kan påvirke både pris og salgstid. Generelt er vår og tidlig høst de beste periodene for boligsalg i Norge.</p>

        <h2>Trenger du hjelp?</h2>
        <p>Det beste rådet vi kan gi er å sammenligne tilbud fra flere kvalifiserte eiendomsmeglere. Dette gir deg mulighet til å finne den megleren som passer best for nettopp din bolig og situasjon.</p>

        <h2>Konklusjon</h2>
        <p>Et vellykket boligsalg krever god planlegging, riktig timing, og den rette megleren. Ved å følge rådene i denne guiden, og ved å sammenligne flere meglere, øker du sjansene betydelig for et raskt salg til god pris.</p>
      `
    }
  };

  const currentPost = blogContent[postId] || blogContent["default"];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <Link to={createPageUrl("Blog")}>
            <Button variant="ghost" className="text-white hover:text-blue-200 mb-6 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Tilbake til bloggen
            </Button>
          </Link>
          
          <Badge className="mb-4 bg-blue-500 text-white">
            {currentPost.category}
          </Badge>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
            {currentPost.title}
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-slate-300">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{currentPost.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{currentPost.readTime} lesetid</span>
            </div>
            <Button variant="ghost" size="sm" className="text-slate-300 hover:text-white">
              <Share2 className="w-4 h-4 mr-2" />
              Del artikkel
            </Button>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div 
            className="prose prose-lg prose-slate max-w-none
              prose-headings:font-bold prose-headings:text-slate-900
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-6
              prose-ul:my-6 prose-li:my-2
              prose-strong:text-slate-900 prose-strong:font-semibold"
            dangerouslySetInnerHTML={{ __html: currentPost.content }}
          />

          {/* CTA within article */}
          <Card className="my-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white border-none shadow-xl">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">
                Klar til å selge boligen din?
              </h3>
              <p className="text-blue-100 mb-6 text-lg">
                Få gratis og uforpliktende tilbud fra flere kvalifiserte eiendomsmeglere
              </p>
              <a href={AFFILIATE_URL} target="_blank" rel="noopener noreferrer">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 shadow-lg hover:shadow-xl transition-all">
                  Sammenlign meglere nå
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </a>
              <div className="mt-6 flex flex-wrap gap-4 text-sm">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>100% gratis</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Ingen forpliktelser</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>Svar på minutter</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-slate-50 border-t">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-slate-900">
            Les flere artikler om boligsalg
          </h2>
          <p className="text-xl text-slate-600 mb-8">
            Vi har samlet ekspertkunnskap om alle aspekter av boligsalg
          </p>
          <Link to={createPageUrl("Blog")}>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Se alle artikler
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}