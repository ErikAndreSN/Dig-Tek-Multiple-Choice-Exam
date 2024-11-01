const quizData = [
  // Modul 2: Tallsystemer
  {
    module: "Modul 2: Tallsystemer",
    question: "Hvilken base har det binære tallsystemet?",
    a: "Base 2",
    b: "Base 8",
    c: "Base 10",
    d: "Base 16",
    correct: "a",
  },
  {
    question:
      "Hvor mange forskjellige kombinasjoner av 0 og 1 kan du lage med 8 bits?",
    a: "8",
    b: "16",
    c: "64",
    d: "256",
    correct: "d",
  },
  {
    question: "Hva er 1010 1010 i desimaltall?",
    a: "85",
    b: "170",
    c: "255",
    d: "128",
    correct: "b",
  },
  {
    question: "Hva er det heksadesimale tallet for binærtallet 1111 0000?",
    a: "0xA0",
    b: "0xF0",
    c: "0x0F",
    d: "0xFF",
    correct: "b",
  },
  {
    question: "Hvorfor bruker vi toerkomplement?",
    a: "For å representere flyttall",
    b: "For å representere tekst",
    c: "For å representere negative tall i binær form",
    d: "For å komprimere data",
    correct: "c",
  },
  {
    question:
      "Hva er det største desimaltallet som kan representeres med 8 bit på toerkomplement?",
    a: "255",
    b: "128",
    c: "127",
    d: "256",
    correct: "c",
  },

  {
    question: "Hva er et overflow i binær aritmetikk?",
    a: "Når et tall blir for stort for den tilgjengelige bitlengden",
    b: "Når en bit blir nullstilt",
    c: "Når et tall blir negativt",
    d: "Når et tall deles på null",
    correct: "a",
  },
  {
    question: "Hva er 1011 1101 i desimaltall?",
    a: "189",
    b: "125",
    c: "190",
    d: "183",
    correct: "a",
  },
  {
    question: "Hva er formelen for å konvertere binære tall til desimaltall?",
    a: "Summen av hver bit multiplisert med 2^posisjon",
    b: "Summen av hver bit multiplisert med 10^posisjon",
    c: "Hver bit lagt til og multiplisert med 8",
    d: "Summen av hvert heksadesimalt siffer multiplisert med 16",
    correct: "a",
  },

  // Modul 3: Tekst og multimedia
  {
    module: "Modul 3: Tekst og multimedia",
    question: "Hva er forskjellen mellom ASCII og UTF-8?",
    a: "UTF-8 støtter flere tegn enn ASCII",
    b: "UTF-8 bruker færre byte enn ASCII",
    c: "ASCII støtter flere språk enn UTF-8",
    d: "ASCII bruker flere byte enn UTF-8",
    correct: "a",
  },
  {
    question: "Hva er et tegnsett (charset)?",
    a: "Et verktøy for å transformere data",
    b: "En protokoll for å overføre data mellom datamaskiner",
    c: "Et system som knytter et heltall til et tegn",
    d: "En form for datakompresjon",
    correct: "c",
  },
  {
    question: "Hva står UTF-8 for?",
    a: "Universal Text Format",
    b: "Unicode Transformation Format 8-bit",
    c: "Unified Text Function",
    d: "Unicode Text Finder",
    correct: "b",
  },
  {
    question: "Hva er fordelen med vektorgrafikk i forhold til bitmap?",
    a: "Vektorgrafikk kan skaleres uten tap av kvalitet",
    b: "Bitmap tar mindre plass",
    c: "Vektorgrafikk har høyere oppløsning",
    d: "Bitmap kan enkelt lagres som tekst",
    correct: "a",
  },
  {
    question:
      'Hva betyr "lossy" komprimering, og i hvilke formater brukes det?',
    a: "En komprimering der noe informasjon går tapt, brukes i JPEG, MP3",
    b: "En komprimering uten tap av informasjon, brukes i PNG, GIF",
    c: "En komprimeringsmetode for vektorgrafikk",
    d: "En metode for å kryptere multimediafiler",
    correct: "a",
  },
  {
    question: "Hva står MP3 for, og hva brukes det til?",
    a: "MPEG Audio Layer 3, et komprimert lydformat",
    b: "Multimedia Processor 3, et grafikkformat",
    c: "Motion Picture 3, et videoformat",
    d: "MPEG Picture 3, et bildefilformat",
    correct: "a",
  },
  {
    question: "Hva er forskjellen mellom rastergrafikk og vektorgrafikk?",
    a: "Rastergrafikk består av piksler, mens vektorgrafikk består av geometriske former",
    b: "Vektorgrafikk har lavere oppløsning enn rastergrafikk",
    c: "Rastergrafikk er lettere å skalere uten tap av kvalitet",
    d: "Vektorgrafikk kan ikke lagres som bildefiler",
    correct: "a",
  },
  {
    question: "Hva er BMP-formatet i bilder, og hva brukes det til?",
    a: "Et ukomprimert bildefilformat som brukes for høy kvalitet",
    b: "Et komprimert filformat som brukes for å spare lagringsplass",
    c: "Et format for vektorbaserte bilder",
    d: "Et format for animerte bilder",
    correct: "a",
  },
  {
    question: "Hva er sampling rate, og hvordan påvirker den lydkvaliteten?",
    a: "Antall ganger per sekund lyd blir målt, høyere sampling rate gir bedre kvalitet",
    b: "Antall kanaler som spilles av i en lydfil",
    c: "Størrelsen på lydfilen i kilobyte",
    d: "Tidsforskjellen mellom to lydspor i en fil",
    correct: "a",
  },
  {
    question: "Hva står SVG for, og hva brukes det til?",
    a: "Scalable Vector Graphics, brukt til vektorbilder som kan skaleres uten tap av kvalitet",
    b: "Secure Video Graphics, brukt til å beskytte bilder på nettet",
    c: "Standard Vector Graph, brukt til å lage grafikk i 3D",
    d: "Small Vector Graph, brukt til å lage små bildefiler",
    correct: "a",
  },

  // Modul 4: Datamaskinen
  {
    module: "Modul 4: Datamaskinen",
    question: "Hva er hovedoppgaven til CPU-en?",
    a: "Å lagre data",
    b: "Å prosessere og utføre beregninger",
    c: "Å administrere strømforsyning",
    d: "Å styre nettverkskommunikasjon",
    correct: "b",
  },
  {
    question: "Hva skjer når en datamaskin starter opp (bootstrapping)?",
    a: "Operativsystemet startes automatisk",
    b: "Alle programmer lastes i minnet",
    c: "Bootloader henter inn OS til RAM",
    d: "Harddisken formateres",
    correct: "c",
  },
  {
    question: 'Hva betyr "multitasking" i datamaskiner?',
    a: "Evnen til å lagre flere filer samtidig",
    b: "Å kjøre flere programmer parallelt",
    c: "Å bruke flere skjermer samtidig",
    d: "Å overføre flere filer over nettverk",
    correct: "b",
  },
  {
    question: "Hva er RAM og hvilken rolle spiller det i datamaskinen?",
    a: "Lagrer data permanent",
    b: "Brukes til midlertidig lagring av kjørende programmer",
    c: "Overfører data mellom maskinvare og operativsystem",
    d: "Behandler alle nettverksforespørsler",
    correct: "b",
  },
  {
    question: "Hva er en GPU?",
    a: "En enhet som lagrer data",
    b: "En enhet som prosesserer grafiske beregninger",
    c: "En enhet som håndterer internettforbindelser",
    d: "En type minne for raskere databehandling",
    correct: "b",
  },
  {
    question: "Hva er forskjellen mellom ROM og RAM?",
    a: "ROM er permanent lagring, mens RAM er midlertidig lagring",
    b: "RAM er raskere enn ROM og brukes til langtidslagring",
    c: "ROM brukes til å lagre applikasjoner, mens RAM brukes til å lagre filer",
    d: "RAM brukes kun av operativsystemet, mens ROM brukes av applikasjoner",
    correct: "a",
  },
  {
    question: "Hva er en Northbridge i et hovedkort?",
    a: "En kontroller som håndterer kommunikasjonen mellom CPU og RAM",
    b: "En enhet som styrer grafikkprosessoren",
    c: "En kontroller for eksterne enheter som mus og tastatur",
    d: "En kontroller for nettverkstilkoblinger",
    correct: "a",
  },
  {
    question:
      "Hva er forskjellen mellom en CPU med én kjerne og en flerkjerne-CPU?",
    a: "Flerkjerne-CPUer kan kjøre flere tråder samtidig",
    b: "Enkjerne-CPUer er raskere",
    c: "Flerkjerne-CPUer bruker mindre strøm",
    d: "Enkjerne-CPUer brukes kun i bærbare enheter",
    correct: "a",
  },
  {
    question: "Hva er en SSD, og hvordan skiller den seg fra en harddisk?",
    a: "SSD-er har ingen bevegelige deler, noe som gjør dem raskere og mer pålitelige enn harddisker",
    b: "SSD-er har større kapasitet enn harddisker",
    c: "SSD-er er tregere, men mer energieffektive enn harddisker",
    d: "SSD-er er billigere og mer holdbare enn harddisker",
    correct: "a",
  },
  {
    question: "Hva er en ALU (Aritmetisk Logisk Enhet) i en CPU?",
    a: "En del av CPU-en som utfører matematiske og logiske operasjoner",
    b: "En del av CPU-en som styrer klokkehastigheten",
    c: "En enhet som lagrer midlertidige data",
    d: "En enhet som kontrollerer grafiske data",
    correct: "a",
  },

  // Modul 5: Operativsystemer
  {
    module: "Modul 5: Operativsystemer",
    question: "Hva er en kjerne (kernel) i et operativsystem?",
    a: "En del av harddisken som styrer filsystemet",
    b: "En programvare som kontrollerer maskinvaren og administrerer systemressurser",
    c: "En del av nettverksprotokollen",
    d: "En brukergrensesnittmodul",
    correct: "b",
  },
  {
    question: "Hva er en prosess i operativsystem-sammenheng?",
    a: "En del av et nettverksprotokoll",
    b: "En kjørende applikasjon eller program",
    c: "Et minneområde som lagrer data",
    d: "En fil som ligger i minnet",
    correct: "b",
  },
  {
    question: "Hvorfor bruker operativsystemer multitasking?",
    a: "For å redusere strømkonsumet",
    b: "For å kjøre flere prosesser samtidig og utnytte CPU-en effektivt",
    c: "For å forbedre grafikkytelsen",
    d: "For å forbedre minnekapasiteten",
    correct: "b",
  },
  {
    question: 'Hva er "virtuelt minne" i et operativsystem?',
    a: "En teknikk for å bruke harddiskplass som midlertidig minne",
    b: "En metode for å lage virtuelle maskiner",
    c: "En teknikk for å komprimere minne",
    d: "En metode for å kryptere data i minnet",
    correct: "a",
  },
  {
    question: "Hva er formålet med en filsystemstruktur?",
    a: "Å organisere og lagre data på en datamaskins lagringsenheter",
    b: "Å kryptere alle filer i operativsystemet",
    c: "Å kjøre flere applikasjoner samtidig",
    d: "Å styre nettverkskommunikasjon",
    correct: "a",
  },
  {
    question: 'Hva er "paging" i et operativsystem?',
    a: "En metode for å bytte data mellom RAM og harddisk",
    b: "En teknikk for å administrere eksterne lagringsenheter",
    c: "En metode for å kryptere filer",
    d: "En teknikk for å øke prosessorhastigheten",
    correct: "a",
  },
  {
    question: "Hva er forskjellen mellom prosesser og tråder?",
    a: "Tråder er lettere vektige og deler samme minne, mens prosesser har eget minne",
    b: "Prosesser kjører raskere enn tråder",
    c: "Tråder brukes kun i operativsystemer, mens prosesser brukes i applikasjoner",
    d: "Prosesser kan ikke kjøre flere oppgaver samtidig",
    correct: "a",
  },
  {
    question:
      "Hva er fordelen med preemptive multitasking over cooperative multitasking?",
    a: "Operativsystemet kan kontrollere CPU-tiden mellom prosesser",
    b: "Prosessene samarbeider om å dele CPU-tid",
    c: "Preemptive multitasking er kun egnet for systemer med flere CPU-er",
    d: "Det er ingen forskjell",
    correct: "a",
  },
  {
    question: "Hva er enheten som håndterer minnetildeling til prosesser?",
    a: "Memory Manager",
    b: "Kernel Scheduler",
    c: "ALU (Arithmetic Logic Unit)",
    d: "CPU Cache",
    correct: "a",
  },
  {
    question: "Hva er hensikten med enhetshåndtering i et operativsystem?",
    a: "Å administrere maskinvareenheter som skrivere og mus",
    b: "Å kryptere data under overføring",
    c: "Å forbedre datamaskinens sikkerhet",
    d: "Å organisere filer på harddisken",
    correct: "a",
  },

  // Modul 6: Internett og WWW
  {
    module: "Modul 6: Internett og WWW",
    question: "Hva står RFC for?",
    a: "Request for Code",
    b: "Ready for Connection",
    c: "Request for Comment",
    d: "Random File Control",
    correct: "c",
  },
  {
    question: "Hva er en hovedforskjell mellom HTTP og HTTPS?",
    a: "HTTPS bruker kryptering for sikker kommunikasjon",
    b: "HTTP er raskere enn HTTPS",
    c: "HTTPS brukes kun for e-post",
    d: "HTTP er en eldre versjon av HTTPS",
    correct: "a",
  },
  {
    question: "Hvilken port brukes for HTTPS?",
    a: "Port 80",
    b: "Port 22",
    c: "Port 443",
    d: "Port 25",
    correct: "c",
  },
  {
    question: "Hva er en IP-adresse?",
    a: "En unik identifikator for hver maskin som kobles til Internett",
    b: "En type nettverksprotokoll",
    c: "Et krypteringsverktøy for sikker kommunikasjon",
    d: "Et verktøy for å identifisere domeneeiere",
    correct: "a",
  },
  {
    question: "Hva er en DNS-server?",
    a: "En tjeneste som oversetter domenenavn til IP-adresser",
    b: "En server som krypterer nettverkstrafikk",
    c: "En server som håndterer filoverføringer mellom klienter",
    d: "En enhet som lagrer sikkerhetssertifikater for HTTPS",
    correct: "a",
  },
  {
    question: "Hva er en nettleser?",
    a: "Et program som brukes til å hente og vise websider fra servere",
    b: "En enhet som lagrer nettsider",
    c: "En sikkerhetsprotokoll for nettkommunikasjon",
    d: "En applikasjon for å sende e-post",
    correct: "a",
  },
  {
    question: "Hva er forskjellen mellom GET og POST i HTTP?",
    a: "GET brukes til å hente data fra serveren, mens POST brukes til å sende data til serveren",
    b: "GET er sikrere enn POST",
    c: "POST brukes kun i kryptert kommunikasjon",
    d: "GET brukes kun til å laste ned filer",
    correct: "a",
  },
  {
    question: "Hva er en HTTP-statuskode 404?",
    a: "Siden ble ikke funnet",
    b: "Serveren er overbelastet",
    c: "Tilkoblingen er kryptert",
    d: "Forespørselen krever autentisering",
    correct: "a",
  },
  {
    question: "Hva brukes TLS til?",
    a: "Å sikre kommunikasjon over Internett ved hjelp av kryptering",
    b: "Å redusere størrelsen på nettverkspakker",
    c: "Å optimalisere hastigheten på nettsider",
    d: "Å oversette domenenavn til IP-adresser",
    correct: "a",
  },
  {
    question: "Hva står URL for?",
    a: "Uniform Resource Locator",
    b: "Unique Resource Locator",
    c: "Unified Routing Layer",
    d: "Universal Resource List",
    correct: "a",
  },

  // Modul 7: Nettverk - Applikasjonslaget
  {
    module: "Modul 7: Nettverk - Applikasjonslaget",
    question: "Hva står SMTP for?",
    a: "Simple Mail Transfer Protocol",
    b: "Secure Mail Transfer Protocol",
    c: "Standard Mail Transport Protocol",
    d: "Simple Mail Traffic Program",
    correct: "a",
  },
  {
    question: "Hva er DNS (Domain Name System)?",
    a: "En protokoll for kryptering av data",
    b: "En tjeneste som oversetter domenenavn til IP-adresser",
    c: "En programvare som håndterer filoverføring",
    d: "Et system for å administrere nettverkstilkoblinger",
    correct: "b",
  },
  {
    question: "Hva er forskjellen mellom POP3 og IMAP i e-postsystemer?",
    a: "POP3 sletter e-poster fra serveren etter nedlasting, IMAP beholder dem",
    b: "IMAP er en eldre teknologi enn POP3",
    c: "POP3 støtter ikke vedlegg, mens IMAP gjør det",
    d: "IMAP brukes bare til å sende e-post, mens POP3 brukes til å motta e-post",
    correct: "a",
  },
  {
    question: "Hva er en webserver?",
    a: "En server som leverer nettsider til klienter",
    b: "En enhet som lagrer applikasjonsfiler",
    c: "En server som krypterer e-posttrafikk",
    d: "En enhet som kontrollerer internettforbindelsen",
    correct: "a",
  },
  {
    question: "Hva står HTTP for?",
    a: "HyperText Transfer Protocol",
    b: "High Transfer Technology Protocol",
    c: "Hypertext Technology Program",
    d: "High Transmission Protocol",
    correct: "a",
  },
  {
    question: "Hva er funksjonen til HTTP-forespørsler (GET, POST)?",
    a: "GET brukes til å hente data fra en server, mens POST brukes til å sende data til en server",
    b: "GET brukes til å sende data, mens POST brukes til å hente data",
    c: "GET og POST er identiske i funksjon, men POST brukes i e-postsystemer",
    d: "GET brukes kun for nettsidetrafikk, mens POST brukes til filoverføring",
    correct: "a",
  },
  {
    question: "Hva er hovedoppgaven til FTP?",
    a: "Å overføre filer mellom enheter over et nettverk",
    b: "Å kryptere meldinger mellom klienter",
    c: "Å organisere filsystemer på eksterne enheter",
    d: "Å sende e-post mellom servere",
    correct: "a",
  },
  {
    question: "Hva er en domenenavnsserver (DNS)?",
    a: "En server som oversetter menneskelesbare domenenavn til IP-adresser",
    b: "En server som lagrer filer som skal overføres mellom klienter",
    c: "En server som krypterer trafikk over Internett",
    d: "En enhet som styrer forbindelsen mellom en datamaskin og Internett",
    correct: "a",
  },
  {
    question: "Hva er en TLD (Top-Level Domain)?",
    a: "Den høyeste delen av domenenavnhierarkiet, f.eks. .com eller .org",
    b: "En internasjonal nettverksprotokoll",
    c: "En type IP-adresse brukt i kryptert nettverkstrafikk",
    d: "En protokoll for å sende e-post over Internett",
    correct: "a",
  },
  {
    question: "Hva står ICANN for, og hva er deres rolle?",
    a: "Internet Corporation for Assigned Names and Numbers, organisasjonen som administrerer domenenavn og IP-adresser",
    b: "International Computer Application Network, organisasjonen som håndterer alle internettforbindelser",
    c: "Internet Communication and Network Control, en sikkerhetsorganisasjon for Internett",
    d: "Internet Certified Application Network, en sertifiseringsorganisasjon for webservere",
    correct: "a",
  },

  // Modul 8: Transportlaget
  {
    module: "Modul 8: Transportlaget",
    question: "Hva er TCP-protokollen, og hvordan fungerer den?",
    a: "En pålitelig protokoll som garanterer at data blir levert i riktig rekkefølge",
    b: "En raskere protokoll enn UDP, men mindre pålitelig",
    c: "En protokoll som brukes til å sende ukrypterte meldinger",
    d: "En protokoll som overfører data uten å bekrefte mottak",
    correct: "a",
  },
  {
    question: "Hva er UDP-protokollen, og når brukes den?",
    a: "En rask, men upålitelig protokoll som brukes til strømmetjenester og sanntidsapplikasjoner",
    b: "En pålitelig protokoll som brukes til filoverføring",
    c: "En protokoll som kun brukes i krypterte applikasjoner",
    d: "En sikkerhetsprotokoll som krypterer data mellom klient og tjener",
    correct: "a",
  },
  {
    question: "Hva er hovedforskjellen mellom TCP og UDP?",
    a: "TCP er pålitelig og garanterer levering av data i riktig rekkefølge, mens UDP er raskere men upålitelig",
    b: "TCP er raskere enn UDP",
    c: "UDP garanterer pålitelig levering, mens TCP ikke gjør det",
    d: "UDP brukes kun til kryptert kommunikasjon",
    correct: "a",
  },
  {
    question: "Hva er portnummer, og hvordan brukes det i transportlaget?",
    a: "Et nummer som identifiserer hvilken applikasjon som skal motta data på en datamaskin",
    b: "Et nummer som identifiserer den fysiske maskinen som sender eller mottar data",
    c: "Et nummer som krypterer data under overføring",
    d: "En identifikator for nettverkspakker",
    correct: "a",
  },
  {
    question: 'Hva betyr "full-duplex" i TCP-sammenheng?',
    a: "En kommunikasjonskanal der begge parter kan sende og motta data samtidig",
    b: "En kanal der data bare kan sendes en vei av gangen",
    c: "En krypteringsprotokoll for sikker kommunikasjon",
    d: "En kanal for multicast-kommunikasjon",
    correct: "a",
  },
  {
    question: 'Hva er funksjonen til "flow control" i TCP?',
    a: "Å justere dataoverføringshastigheten for å forhindre overbelastning av mottakeren",
    b: "Å kryptere data som sendes mellom klient og server",
    c: "Å komprimere data for raskere overføring",
    d: "Å styre hvilken vei dataene sendes i nettverket",
    correct: "a",
  },
  {
    question:
      "Hva skjer dersom en TCP-segment ikke blir bekreftet av mottakeren?",
    a: "Segmentet blir sendt på nytt",
    b: "Tilkoblingen blir avsluttet",
    c: "Dataene blir sendt med UDP i stedet",
    d: "Mottakeren sender en feilmelding",
    correct: "a",
  },
  {
    question: 'Hva er hensikten med "congestion control" i TCP?',
    a: "Å forhindre nettverksoverbelastning ved å justere dataoverføringshastigheten",
    b: "Å sikre at data sendes kryptert",
    c: "Å kontrollere hvilke enheter som kan få tilgang til nettverket",
    d: "Å tillate flere enheter å sende data samtidig",
    correct: "a",
  },
  {
    question: "Hva er et portnummer i transportlaget?",
    a: "En identifikator for hvilken applikasjon som skal motta data på en maskin",
    b: "Et tall som identifiserer en spesifikk rute",
    c: "En kode for å kryptere data",
    d: "En adresse for multicast-kommunikasjon",
    correct: "a",
  },
  {
    question: "Hva er hovedoppgaven til transportlaget i OSI-modellen?",
    a: "Å sørge for pålitelig overføring av data mellom enheter",
    b: "Å oversette IP-adresser til MAC-adresser",
    c: "Å kryptere data mellom klienter og servere",
    d: "Å administrere domeneoversettelser",
    correct: "a",
  },

  // Modul 9: Nettverkslaget
  {
    module: "Modul 9: Nettverkslaget",
    question: "Hva er hovedoppgaven til nettverkslaget?",
    a: "Å finne den raskeste veien gjennom nettet for pakker",
    b: "Å rute pakker fra avsender til mottaker via en nettverksrute",
    c: "Å sørge for sikker dataoverføring mellom enheter",
    d: "Å kryptere pakker før de sendes",
    correct: "b",
  },
  {
    question: "Hva er adresse til localhost?",
    a: "192.168.1.1",
    b: "10.0.0.1",
    c: "127.0.0.1",
    d: "8.8.8.8",
    correct: "c",
  },
  {
    question: "Hvor lang er en IPv4-adresse?",
    a: "64-bit",
    b: "16-bit",
    c: "128-bit",
    d: "32-bit",
    correct: "d",
  },
  {
    question:
      "Hvordan får en datamaskin vanligvis tildelt en IPv4-adresse i et LAN?",
    a: "Ved hjelp av DNS",
    b: "Manuelt av brukeren",
    c: "Gjennom DHCP (Dynamic Host Configuration Protocol)",
    d: "Automatisk av Internett-leverandøren",
    correct: "c",
  },
  {
    question: "Hva brukes en nettmaske til?",
    a: "Å identifisere hvilke porter som er åpne",
    b: "Å bestemme hvilken del av IP-adressen som er nettverksprefix og hostdel",
    c: "Å kryptere trafikk mellom nettverksmaskiner",
    d: "Å dirigere pakker mellom nettverk",
    correct: "b",
  },
  {
    question: "Hvilken operasjon brukes for å regne ut adresse med nettmaske?",
    a: "XOR",
    b: "OR",
    c: "AND",
    d: "NOT",
    correct: "c",
  },
  {
    question: "Hva er en privat IP-adresse?",
    a: "En IP-adresse som er skjult fra Internett, men brukes innenfor et lokalt nettverk",
    b: "En IP-adresse som kun er synlig for ISP-en",
    c: "En IP-adresse som brukes av nettverkssikkerhetssystemer",
    d: "En dynamisk IP-adresse som tildeles av DHCP-serveren",
    correct: "a",
  },
  {
    question: "Hva er NAT, og hva løser det?",
    a: "NAT oversetter IP-adresser i lokale nettverk til en offentlig IP-adresse for å kommunisere med Internett",
    b: "NAT komprimerer nettverkstrafikk for raskere overføring",
    c: "NAT brukes til å kryptere data som sendes fra en router",
    d: "NAT sikrer at kun én datamaskin kan sende pakker ut av et lokalt nettverk",
    correct: "a",
  },
  {
    question: "Hva er funksjonen til ICMP-protokollen?",
    a: "Å kryptere nettverkstrafikk",
    b: "Å håndtere feilrapportering og diagnostikk mellom nettverksenheter",
    c: "Å dirigere pakker mellom ulike nettverk",
    d: "Å oppdatere rutingtabeller på rutere",
    correct: "b",
  },
  {
    question: "Hva er forskjellen mellom IPv4 og IPv6?",
    a: "IPv6 bruker 128-bit adresser, mens IPv4 bruker 32-bit adresser",
    b: "IPv6 brukes kun for lokale nettverk, mens IPv4 brukes for Internett",
    c: "IPv4 støtter kryptering, mens IPv6 ikke gjør det",
    d: "IPv4 bruker 64-bit adresser, mens IPv6 bruker 128-bit adresser",
    correct: "a",
  },

  //Modul 10:
  {
    module: "Modul 8: Transportlaget",
    question: "Hva er linklagets hovedansvar?",
    a: "Å transportere data fra en node til en annen over en link",
    b: "Å sikre datakryptering",
    c: "Å koble flere nettverk sammen",
    d: "Å administrere IP-adresser",
    correct: "a",
  },
  {
    question: "Hva er overføringsenheten på linklaget?",
    a: "Pakke (packet)",
    b: "Segment",
    c: "Ramme (frame)",
    d: "Datagram",
    correct: "c",
  },
  {
    question: "Hvilken funksjon har en 'linklagsprotokoll'?",
    a: "Sikre kryptering mellom noder",
    b: "Fastsette hvordan data skal transporteres over en kommunikasjonslink",
    c: "Håndtere feilkorrigering",
    d: "Tilordne IP-adresser",
    correct: "b",
  },
  {
    question:
      "Hva er en av hovedforskjellene mellom punkt-til-punkt og kringkastingslinker?",
    a: "Punkt-til-punkt brukes i nettlesere, kringkasting i TV-tjenester",
    b: "Punkt-til-punkt kobler én til én, mens kringkasting deler informasjon med flere",
    c: "Punkt-til-punkt krever høyere båndbredde",
    d: "Punkt-til-punkt brukes kun i LAN",
    correct: "b",
  },
  {
    question: "Hva er hovedoppgaven til en Multippel aksess-protokoll (MA)?",
    a: "Sikre kryptering i et nettverk",
    b: "Gi tilgang til kanaler når noder skal sende data",
    c: "Analysere IP-pakker",
    d: "Styre rutevalg",
    correct: "b",
  },
  {
    question:
      "Hvilken av følgende protokoller er en random access MAC protokoll?",
    a: "FTP",
    b: "CSMA/CD",
    c: "DNS",
    d: "SMTP",
    correct: "b",
  },
  {
    question: "Hva er en MAC-adresse?",
    a: "En IP-adresse brukt for sikker kommunikasjon",
    b: "En fysisk adresse lagret i nettverkskortet for å identifisere enheter på samme nettverk",
    c: "En adresse som brukes i nettverkslaget",
    d: "En dynamisk IP-adresse",
    correct: "b",
  },
  {
    question:
      "Hvilken protokoll brukes for å finne MAC-adressen som tilsvarer en IP-adresse?",
    a: "HTTP",
    b: "ARP (Address Resolution Protocol)",
    c: "DHCP",
    d: "CSMA",
    correct: "b",
  },
  {
    question: "Hvilken type topologi brukes i moderne Ethernet?",
    a: "Busstopologi",
    b: "Stjernetopologi",
    c: "Ringtopologi",
    d: "Meshtopologi",
    correct: "b",
  },
  {
    question: "Hva er hovedforskjellen mellom en hub og en switch?",
    a: "En hub krypterer data, mens en switch deler data ukryptert",
    b: "En hub sender data til alle porter, mens en switch sender data til spesifikke porter basert på MAC-adresser",
    c: "En hub bruker IP-adresser, mens en switch bruker MAC-adresser",
    d: "En switch kan koble flere nettverk sammen, mens en hub kun fungerer i ett segment",
    correct: "b",
  },
  {
    question: "Hva står WLAN for?",
    a: "Wireless Local Area Network",
    b: "Wired Local Area Network",
    c: "Wide Local Area Network",
    d: "Wireless Large Area Network",
    correct: "a",
  },
  {
    question: "Hvilken standard brukes ofte for å etablere WLAN-nettverk?",
    a: "IEEE 802.11",
    b: "IEEE 802.3",
    c: "FTP",
    d: "TCP/IP",
    correct: "a",
  },
  {
    question:
      "Hvilken av disse egenskapene har CSMA/CA sammenlignet med CSMA/CD?",
    a: "CSMA/CA unngår kollisjoner ved å be om tillatelse før sending",
    b: "CSMA/CA detekterer kollisjoner etter de har skjedd",
    c: "CSMA/CD brukes kun i trådløse nettverk",
    d: "CSMA/CA brukes i kabelbaserte nettverk",
    correct: "a",
  },
  {
    question: "Hvilket av følgende beskriver best hva et kollisjonsdomene er?",
    a: "En protokoll for å kryptere data",
    b: "Et segment av et nettverk der data kan kollidere",
    c: "Et område i nettverket uten dekning",
    d: "En tabell over MAC-adresser",
    correct: "b",
  },
   {
    question: "Hva er fordelen med en selvlærende switch?",
    a: "Den lagrer passord for nettverkssikkerhet",
    b: "Den lagrer MAC-adresser og optimaliserer dataruting innenfor LAN",
    c: "Den tildeler dynamiske IP-adresser til enheter",
    d: "Den forhindrer alle kollisjoner i nettverket",
    correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const submitBtn = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;
let wrongAnswers = []; // Lagrer feil svar
let currentWrongAnswer = 0; // Holder styr på hvilket feil svar som vises

// Funksjon for å laste inn og vise spørsmålene
function loadQuiz() {
  const currentQuizData = quizData[currentQuestion];
  quiz.innerHTML = ""; // Tøm quiz-området

  if (currentQuizData.module) {
    const moduleTitle = document.createElement("h2");
    moduleTitle.innerText = currentQuizData.module;
    quiz.appendChild(moduleTitle);
  }

  const questionTitle = document.createElement("h2");
  questionTitle.innerText = currentQuizData.question;
  quiz.appendChild(questionTitle);

  // Lager alternativer som bruker knapper og onclick
  ["a", "b", "c", "d"].forEach((option) => {
    const label = document.createElement("label");
    const input = document.createElement("input");
    input.type = "radio";
    input.name = "answer";
    input.value = option;
    label.appendChild(input);
    label.appendChild(document.createTextNode(currentQuizData[option]));
    label.style.display = "block";
    quiz.appendChild(label);
  });
}

// Henter valgt svar og konverterer med toLowerCase
function getSelectedAnswer() {
  const answers = quiz.getElementsByTagName("input");
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      return answers[i].value.toLowerCase();
    }
  }
  return null;
}

// Neste spørsmål-funksjon, bruker alert og if-else for feilmeldinger
function nextQuestion() {
  const selectedAnswer = getSelectedAnswer();

  if (selectedAnswer === null) {
    alert("Vennligst velg et svar!");
    return;
  }

  const currentQuizData = quizData[currentQuestion];
  if (selectedAnswer === currentQuizData.correct) {
    score++;
  } else {
    wrongAnswers.push({
      question: currentQuizData.question,
      userAnswer: currentQuizData[selectedAnswer],
      correctAnswer: currentQuizData[currentQuizData.correct],
    });
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuiz();
  } else {
    showResults();
  }
}

// Viser resultatene og starter visning av feil svar
function showResults() {
  quiz.innerHTML = `<h2>Du besvarte ${score} av ${quizData.length} spørsmål korrekt!</h2>`;
  alert(`Du besvarte ${score} av ${quizData.length} spørsmål korrekt!`);

  if (wrongAnswers.length > 0) {
    showWrongAnswer(); // Starter med å vise første feil svar
  } else {
    quiz.innerHTML +=
      "<h3>Gratulerer, du svarte riktig på alle spørsmålene!</h3>";
  }
  submitBtn.style.display = "none"; // Skjul knappen etter quizen
}

// Funksjon som viser ett feilsvar om gangen med "Neste"-knapp
function showWrongAnswer() {
  if (wrongAnswers.length > 0) {
    const entry = wrongAnswers[currentWrongAnswer];
    quiz.innerHTML = `
      <div class="result-box">
        <h3>Feil svar ${currentWrongAnswer + 1} av ${wrongAnswers.length}:</h3>
        <p><strong>Spørsmål:</strong> ${entry.question}</p>
        <p class="wrong-answer"><strong>Ditt svar:</strong> ${
          entry.userAnswer
        }</p>
        <p class="correct-answer"><strong>Riktig svar:</strong> ${
          entry.correctAnswer
        }</p>
      </div>
      <button class="next-btn" id="next">Neste</button>
    `;

    // Legger til en event listener for "Neste"-knappen
    document.getElementById("next").onclick = nextWrongAnswer;
  }
}

// Funksjon som går til neste feil svar
function nextWrongAnswer() {
  currentWrongAnswer++; // Øker telleren

  if (currentWrongAnswer < wrongAnswers.length) {
    showWrongAnswer(); // Viser neste feil
  } else {
    quiz.innerHTML = "<h3>Du har gått gjennom alle feilsvarene!</h3>";
  }
}

submitBtn.onclick = nextQuestion; // Knytter submit-knappen til funksjonen

loadQuiz(); // Starter quizen
