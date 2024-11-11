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
    a: "Bitmap tar mindre plass",
    b: "Vektorgrafikk kan skaleres uten tap av kvalitet",
    c: "Vektorgrafikk har høyere oppløsning",
    d: "Bitmap kan enkelt lagres som tekst",
    correct: "b",
  },
  {
    question:
      'Hva betyr "lossy" komprimering, og i hvilke formater brukes det?',
    a: "En komprimering uten tap av informasjon, brukes i PNG, GIF",
    b: "En komprimeringsmetode for vektorgrafikk",
    c: "En metode for å kryptere multimediafiler",
    d: "En komprimering der noe informasjon går tapt, brukes i JPEG, MP3",
    correct: "d",
  },
  {
    question: "Hva står MP3 for, og hva brukes det til?",
    a: "Multimedia Processor 3, et grafikkformat",
    b: "Motion Picture 3, et videoformat",
    c: "MPEG Audio Layer 3, et komprimert lydformat",
    d: "MPEG Picture 3, et bildefilformat",
    correct: "c",
  },
  {
    question: "Hva er forskjellen mellom rastergrafikk og vektorgrafikk?",
    a: "Vektorgrafikk kan ikke lagres som bildefiler",
    b: "Rastergrafikk består av piksler, mens vektorgrafikk består av geometriske former",
    c: "Rastergrafikk er lettere å skalere uten tap av kvalitet",
    d: "Vektorgrafikk har lavere oppløsning enn rastergrafikk",
    correct: "b",
  },
  {
    question: "Hva er BMP-formatet i bilder, og hva brukes det til?",
    a: "Et komprimert filformat som brukes for å spare lagringsplass",
    b: "Et format for vektorbaserte bilder",
    c: "Et format for animerte bilder",
    d: "Et ukomprimert bildefilformat som brukes for høy kvalitet",
    correct: "d",
  },
  {
    question: "Hva er sampling rate, og hvordan påvirker den lydkvaliteten?",
    a: "Antall kanaler som spilles av i en lydfil",
    b: "Størrelsen på lydfilen i kilobyte",
    c: "Tidsforskjellen mellom to lydspor i en fil",
    d: "Antall ganger per sekund lyd blir målt, høyere sampling rate gir bedre kvalitet",
    correct: "d",
  },
  {
    question: "Hva står SVG for, og hva brukes det til?",
    a: "Secure Video Graphics, brukt til å beskytte bilder på nettet",
    b: "Scalable Vector Graphics, brukt til vektorbilder som kan skaleres uten tap av kvalitet",
    c: "Standard Vector Graph, brukt til å lage grafikk i 3D",
    d: "Small Vector Graph, brukt til å lage små bildefiler",
    correct: "b",
  },

  // Modul 4: Datamaskinen
  {
    module: "Modul 4: Datamaskinen",
    question: "Hva er hovedoppgaven til CPU-en?",
    a: "Å lagre data",
    b: "Å administrere strømforsyning",
    c: "Å prosessere og utføre beregninger",
    d: "Å styre nettverkskommunikasjon",
    correct: "c",
  },
  {
    question: "Hva skjer når en datamaskin starter opp (bootstrapping)?",
    a: "Alle programmer lastes i minnet",
    b: "Harddisken formateres",
    c: "Bootloader henter inn OS til RAM",
    d: "Operativsystemet startes automatisk",
    correct: "c",
  },
  {
    question: 'Hva betyr "multitasking" i datamaskiner?',
    a: "Å overføre flere filer over nettverk",
    b: "Å kjøre flere programmer parallelt",
    c: "Evnen til å lagre flere filer samtidig",
    d: "Å bruke flere skjermer samtidig",
    correct: "b",
  },
  {
    question: "Hva er RAM og hvilken rolle spiller det i datamaskinen?",
    a: "Overfører data mellom maskinvare og operativsystem",
    b: "Brukes til midlertidig lagring av kjørende programmer",
    c: "Behandler alle nettverksforespørsler",
    d: "Lagrer data permanent",
    correct: "b",
  },
  {
    question: "Hva er en GPU?",
    a: "En enhet som håndterer internettforbindelser",
    b: "En enhet som prosesserer grafiske beregninger",
    c: "En enhet som lagrer data",
    d: "En type minne for raskere databehandling",
    correct: "b",
  },
  {
    question: "Hva er forskjellen mellom ROM og RAM?",
    a: "RAM er raskere enn ROM og brukes til langtidslagring",
    b: "ROM brukes til å lagre applikasjoner, mens RAM brukes til å lagre filer",
    c: "ROM er permanent lagring, mens RAM er midlertidig lagring",
    d: "RAM brukes kun av operativsystemet, mens ROM brukes av applikasjoner",
    correct: "c",
  },
  {
    question: "Hva er en Northbridge i et hovedkort?",
    a: "En kontroller for eksterne enheter som mus og tastatur",
    b: "En kontroller for nettverkstilkoblinger",
    c: "En enhet som styrer grafikkprosessoren",
    d: "En kontroller som håndterer kommunikasjonen mellom CPU og RAM",
    correct: "d",
  },
  {
    question:
      "Hva er forskjellen mellom en CPU med én kjerne og en flerkjerne-CPU?",
    a: "Flerkjerne-CPUer kan kjøre flere tråder samtidig",
    b: "Enkjerne-CPUer brukes kun i bærbare enheter",
    c: "Enkjerne-CPUer er raskere",
    d: "Flerkjerne-CPUer bruker mindre strøm",
    correct: "a",
  },
  {
    question: "Hva er en SSD, og hvordan skiller den seg fra en harddisk?",
    a: "SSD-er har større kapasitet enn harddisker",
    b: "SSD-er er billigere og mer holdbare enn harddisker",
    c: "SSD-er har ingen bevegelige deler, noe som gjør dem raskere og mer pålitelige enn harddisker",
    d: "SSD-er er tregere, men mer energieffektive enn harddisker",
    correct: "c",
  },
  {
    question: "Hva er en ALU (Aritmetisk Logisk Enhet) i en CPU?",
    a: "En enhet som kontrollerer grafiske data",
    b: "En enhet som lagrer midlertidige data",
    c: "En del av CPU-en som styrer klokkehastigheten",
    d: "En del av CPU-en som utfører matematiske og logiske operasjoner",
    correct: "d",
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
    a: "En metode for å lage virtuelle maskiner",
    b: "En metode for å kryptere data i minnet",
    c: "En teknikk for å bruke harddiskplass som midlertidig minne",
    d: "En teknikk for å komprimere minne",
    correct: "c",
  },
  {
    question: "Hva er formålet med en filsystemstruktur?",
    a: "Å kryptere alle filer i operativsystemet",
    b: "Å organisere og lagre data på en datamaskins lagringsenheter",
    c: "Å kjøre flere applikasjoner samtidig",
    d: "Å styre nettverkskommunikasjon",
    correct: "b",
  },
  {
    question: "Hva er forskjellen mellom prosesser og tråder?",
    a: "Prosesser kan ikke kjøre flere oppgaver samtidig",
    b: "Prosesser kjører raskere enn tråder",
    c: "Tråder brukes kun i operativsystemer, mens prosesser brukes i applikasjoner",
    d: "Tråder er lettere vektige og deler samme minne, mens prosesser har eget minne",
    correct: "d",
  },
  {
    question:
      "Hva er fordelen med preemptive multitasking over cooperative multitasking?",
    a: "Prosessene samarbeider om å dele CPU-tid",
    b: "Det er ingen forskjell",
    c: "Preemptive multitasking er kun egnet for systemer med flere CPU-er",
    d: "Operativsystemet kan kontrollere CPU-tiden mellom prosesser",
    correct: "d",
  },
  {
    question: "Hva er enheten som håndterer minnetildeling til prosesser?",
    a: "Kernel Scheduler",
    b: "Memory Manager",
    c: "CPU Cache",
    d: "ALU (Arithmetic Logic Unit)",
    correct: "b",
  },
  {
    question: "Hva er hensikten med enhetshåndtering i et operativsystem?",
    a: "Å forbedre datamaskinens sikkerhet",
    b: "Å organisere filer på harddisken",
    c: "Å kryptere data under overføring",
    d: "Å administrere maskinvareenheter som skrivere og mus",
    correct: "d",
  },

  // Modul 6: Internett og WWW
  {
    module: "Modul 6: Internett og WWW",
    question: "Hva er hovedforskjellen mellom Internett og WWW?",
    a: "Internett er en nettleser, mens WWW er et nettverk",
    b: "Internett er et globalt nettverk, mens WWW er et system for tilgang til informasjon via Internett",
    c: "Internett er kun tilgjengelig i USA, mens WWW er globalt",
    d: "Internett brukes til sosiale medier, mens WWW brukes til e-post",
    correct: "b",
  },
  {
    question: "Hva var ARPAnet?",
    a: "En tidlig versjon av dagens operativsystemer",
    b: "Et eksperimentelt nettverk utviklet av det amerikanske forsvaret",
    c: "En nettleser som ble brukt til å få tilgang til WWW",
    d: "Et sikkerhetssystem for å beskytte internettbrukere",
    correct: "b",
  },
  {
    question: "Hva er hensikten med å organisere Internett i flere lag?",
    a: "For å kunne sende data uten forsinkelser",
    b: "For å øke kapasiteten for å lagre informasjon",
    c: "For å gi struktur og sikkerhet til nettverkskommunikasjonen",
    d: "For å gjøre det enklere å endre brukerinnstillinger",
    correct: "c",
  },
  {
    question: "Hva er DNS sin rolle i internettkommunikasjon?",
    a: "Å kryptere meldinger som sendes mellom enheter",
    b: "Å sørge for at e-poster kan sendes sikkert",
    c: "Å oversette domenenavn til IP-adresser",
    d: "Å gi tilgang til lukkede nettverk",
    correct: "c",
  },
  {
    question: "Hvordan fungerer IP-adresser på Internett?",
    a: "De angir posisjonen til hver server på WWW",
    b: "De brukes for å identifisere hver enhet unikt på Internett",
    c: "De gir krypteringsnøkler til hver enhet",
    d: "De lagrer data permanent",
    correct: "b",
  },
  {
    question: "Hvorfor beskrives HTTP som en stateløs protokoll?",
    a: "Den holder ikke rede på tidligere forespørsler mellom klient og server",
    b: "Den lagrer all informasjon om klientens aktivitet",
    c: "Den er kun tilgjengelig via spesialiserte nettverk",
    d: "Den er ikke kompatibel med moderne enheter",
    correct: "a",
  },
  {
    question: "Hva er SMTP, og hvordan brukes det?",
    a: "En sikkerhetsprotokoll for nettlesere",
    b: "En protokoll for overføring av e-post",
    c: "Et program for nettsidebygging",
    d: "En teknologi for bildekomprimering",
    correct: "b",
  },
  {
    question: "Hvilken type informasjon gir en HTTP-statuskode 404?",
    a: "At serveren er overbelastet",
    b: "At forespørselen krever autentisering",
    c: "At nettsiden ikke ble funnet",
    d: "At tilkoblingen er kryptert",
    correct: "c",
  },
  {
    question: "Hva er et formål med TCP-protokollen på Internett?",
    a: "Å garantere at data blir levert i riktig rekkefølge",
    b: "Å kryptere alt innhold på nettsiden",
    c: "Å kontrollere tilgang til sikre nettverk",
    d: "Å lagre nettdata permanent",
    correct: "a",
  },
  {
    question: "Hva gjør TLS i nettverkssikkerhet?",
    a: "Øker hastigheten på nettsidelastingen",
    b: "Sikrer kommunikasjon over Internett gjennom kryptering",
    c: "Kobler brukere direkte til Internett-leverandører",
    d: "Lagrer historikken over alle besøk på nettsider",
    correct: "b",
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
    a: "IMAP er en eldre teknologi enn POP3",
    b: "POP3 sletter e-poster fra serveren etter nedlasting, IMAP beholder dem",
    c: "POP3 støtter ikke vedlegg, mens IMAP gjør det",
    d: "IMAP brukes bare til å sende e-post, mens POP3 brukes til å motta e-post",
    correct: "b",
  },
  {
    question: "Hva er en webserver?",
    a: "En enhet som kontrollerer internettforbindelsen",
    b: "En enhet som lagrer applikasjonsfiler",
    c: "En server som leverer nettsider til klienter",
    d: "En server som krypterer e-posttrafikk",
    correct: "c",
  },
  {
    question: "Hva står HTTP for?",
    a: "Hypertext Technology Program",
    b: "High Transmission Protocol",
    c: "High Transfer Technology Protocol",
    d: "HyperText Transfer Protocol",
    correct: "d",
  },
  {
    question: "Hva er funksjonen til HTTP-forespørsler (GET, POST)?",
    a: "GET brukes kun for nettsidetrafikk, mens POST brukes til filoverføring",
    b: "GET og POST er identiske i funksjon, men POST brukes i e-postsystemer",
    c: "GET brukes til å hente data fra en server, mens POST brukes til å sende data til en server",
    d: "GET brukes til å sende data, mens POST brukes til å hente data",
    correct: "c",
  },
  {
    question: "Hva er hovedoppgaven til FTP?",
    a: "Å organisere filsystemer på eksterne enheter",
    b: "Å sende e-post mellom servere",
    c: "Å kryptere meldinger mellom klienter",
    d: "Å overføre filer mellom enheter over et nettverk",
    correct: "d",
  },
  {
    question: "Hva er en domenenavnsserver (DNS)?",
    a: "En server som lagrer filer som skal overføres mellom klienter",
    b: "En server som krypterer trafikk over Internett",
    c: "En enhet som styrer forbindelsen mellom en datamaskin og Internett",
    d: "En server som oversetter menneskelesbare domenenavn til IP-adresser",
    correct: "d",
  },
  {
    question: "Hva er en TLD (Top-Level Domain)?",
    a: "En type IP-adresse brukt i kryptert nettverkstrafikk",
    b: "En protokoll for å sende e-post over Internett",
    c: "En internasjonal nettverksprotokoll",
    d: "Den høyeste delen av domenenavnhierarkiet, f.eks. .com eller .org",
    correct: "d",
  },
  {
    question: "Hva står ICANN for, og hva er deres rolle?",
    a: "Internet Certified Application Network, en sertifiseringsorganisasjon for webservere",
    b: "International Computer Application Network, organisasjonen som håndterer alle internettforbindelser",
    c: "Internet Corporation for Assigned Names and Numbers, organisasjonen som administrerer domenenavn og IP-adresser",
    d: "Internet Communication and Network Control, en sikkerhetsorganisasjon for Internett",
    correct: "c",
  },

  // Modul 8: Transportlaget
  {
    module: "Modul 8: Transportlaget",
    question: "Hva er TCP-protokollen, og hvordan fungerer den?",
    a: "En protokoll som brukes til å sende ukrypterte meldinger",
    b: "En protokoll som overfører data uten å bekrefte mottak",
    c: "En pålitelig protokoll som garanterer at data blir levert i riktig rekkefølge",
    d: "En raskere protokoll enn UDP, men mindre pålitelig",
    correct: "c",
  },
  {
    question: "Hva er UDP-protokollen, og når brukes den?",
    a: "En rask, men upålitelig protokoll som brukes til strømmetjenester og sanntidsapplikasjoner",
    b: "En sikkerhetsprotokoll som krypterer data mellom klient og tjener",
    c: "En pålitelig protokoll som brukes til filoverføring",
    d: "En protokoll som kun brukes i krypterte applikasjoner",
    correct: "a",
  },
  {
    question: "Hva er hovedforskjellen mellom TCP og UDP?",
    a: "UDP brukes kun til kryptert kommunikasjon",
    b: "UDP garanterer pålitelig levering, mens TCP ikke gjør det",
    c: "TCP er raskere enn UDP",
    d: "TCP er pålitelig og garanterer levering av data i riktig rekkefølge, mens UDP er raskere men upålitelig",
    correct: "d",
  },
  {
    question: "Hva er portnummer, og hvordan brukes det i transportlaget?",
    a: "En identifikator for nettverkspakker",
    b: "Et nummer som identifiserer den fysiske maskinen som sender eller mottar data",
    c: "Et nummer som identifiserer hvilken applikasjon som skal motta data på en datamaskin",
    d: "Et nummer som krypterer data under overføring",
    correct: "c",
  },
  {
    question: 'Hva betyr "full-duplex" i TCP-sammenheng?',
    a: "En krypteringsprotokoll for sikker kommunikasjon",
    b: "En kanal der data bare kan sendes en vei av gangen",
    c: "En kanal for multicast-kommunikasjon",
    d: "En kommunikasjonskanal der begge parter kan sende og motta data samtidig",
    correct: "d",
  },
  {
    question: 'Hva er funksjonen til "flow control" i TCP?',
    a: "Å komprimere data for raskere overføring",
    b: "Å kryptere data som sendes mellom klient og server",
    c: "Å justere dataoverføringshastigheten for å forhindre overbelastning av mottakeren",
    d: "Å styre hvilken vei dataene sendes i nettverket",
    correct: "c",
  },
  {
    question:
      "Hva skjer dersom en TCP-segment ikke blir bekreftet av mottakeren?",
    a: "Tilkoblingen blir avsluttet",
    b: "Segmentet blir sendt på nytt",
    c: "Mottakeren sender en feilmelding",
    d: "Dataene blir sendt med UDP i stedet",
    correct: "b",
  },
  {
    question: 'Hva er hensikten med "congestion control" i TCP?',
    a: "Å tillate flere enheter å sende data samtidig",
    b: "Å kontrollere hvilke enheter som kan få tilgang til nettverket",
    c: "Å sikre at data sendes kryptert",
    d: "Å forhindre nettverksoverbelastning ved å justere dataoverføringshastigheten",
    correct: "d",
  },

  {
    question: "Hva er hovedoppgaven til transportlaget i OSI-modellen?",
    a: "Å administrere domeneoversettelser",
    b: "Å oversette IP-adresser til MAC-adresser",
    c: "Å sørge for pålitelig overføring av data mellom enheter",
    d: "Å kryptere data mellom klienter og servere",
    correct: "c",
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

  //Modul 10 Nettverk - Linklaget:
  {
    module: "Modul 10 Nettverk - Linklaget:",
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
/*function nextQuestion() {
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
}*/

// Neste spørsmål-funksjon, viser riktig svar umiddelbart
let answerSelected = false; // Variabel for å holde styr på om et svar er valgt og vises

// Funksjon for å hente valgt svar og sette tilstanden
function getSelectedAnswer() {
  const answers = quiz.getElementsByTagName("input");
  for (let i = 0; i < answers.length; i++) {
    if (answers[i].checked) {
      return answers[i].value.toLowerCase();
    }
  }
  return null;
}

// Neste spørsmål-funksjon
function nextQuestion() {
  const selectedAnswer = getSelectedAnswer();

  // Sjekk om brukeren prøver å sende svar etter å ha sett resultatet
  if (answerSelected) {
    alert("Vennligst trykk Neste!");
    return;
  }

  if (selectedAnswer === null) {
    alert("Vennligst velg et svar!");
    return;
  }

  const currentQuizData = quizData[currentQuestion];
  if (selectedAnswer === currentQuizData.correct) {
    score++;
    quiz.innerHTML = `
            <div class="result-box">
                <h3>Korrekt!</h3>
                <p><strong>Spørsmål:</strong> ${currentQuizData.question}</p>
                <p style="background-color: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 10px; border-radius: 5px;">
                    <strong>Riktig svar:</strong> ${
                      currentQuizData[currentQuizData.correct]
                    }
                </p>
            </div>
            <button class="next-btn" id="next">Neste</button>
        `;
  } else {
    // Legg til feilsvaret i listen
    wrongAnswers.push({
      question: currentQuizData.question,
      userAnswer: currentQuizData[selectedAnswer],
      correctAnswer: currentQuizData[currentQuizData.correct],
    });

    quiz.innerHTML = `
            <div class="result-box">
                <h3>Feil svar</h3>
                <p><strong>Spørsmål:</strong> ${currentQuizData.question}</p>
                <p style="background-color: #f8d7da; border: 1px solid #f5c6cb; color: #721c24; padding: 10px; border-radius: 5px;">
                    <strong>Ditt svar:</strong> ${
                      currentQuizData[selectedAnswer]
                    }
                </p>
                <p><strong>Riktig svar:</strong> ${
                  currentQuizData[currentQuizData.correct]
                }</p>
            </div>
            <button class="next-btn" id="next">Neste</button>
        `;
  }

  answerSelected = true; // Sett til true når resultatet vises

  // Legger til en event listener for "Neste"-knappen for å gå videre
  document.getElementById("next").onclick = goToNextQuestion;
}

// Funksjon for å gå videre til neste spørsmål
function goToNextQuestion() {
  currentQuestion++;
  answerSelected = false; // Tilbakestill til false når vi går til neste spørsmål

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
