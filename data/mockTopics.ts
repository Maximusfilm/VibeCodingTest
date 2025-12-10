import { Topic, TagCategory } from '@/types';

export const mockTopics: Topic[] = [
  {
    id: '1',
    title: 'Vertikale Farmen in der Großstadt - Die Zukunft der Landwirtschaft?',
    tags: [
      TagCategory.BILDSTARK,
      TagCategory.WISSENSCHAFT,
      TagCategory.UMWELT,
      TagCategory.TECHNOLOGIE,
      TagCategory.GESELLSCHAFTLICH_RELEVANT,
      TagCategory.AKTUELL
    ],
    summary: 'In Berlin entsteht Europas größte vertikale Farm. Auf mehreren Etagen werden hier ohne Sonnenlicht und Erde Salate, Kräuter und sogar Erdbeeren angebaut. Die spektakulären LED-beleuchteten Pflanzenwände liefern bis zu 100-mal mehr Ertrag als traditionelle Landwirtschaft.',
    relevance: 'Angesichts von Klimawandel, Bevölkerungswachstum und schwindenden Anbauflächen könnte vertikale Landwirtschaft die Ernährung der Zukunft sichern. Die Technologie spart 95% Wasser, benötigt keine Pestizide und produziert direkt in der Stadt - mit null Transportwegen.',
    visualConcept: {
      description: 'Spektakuläre Aufnahmen der mehrgeschossigen Pflanzentürme mit pinkfarbenem LED-Licht, Zeitraffer-Aufnahmen des Pflanzenwachstums, Drohnenflüge durch die Hallen, Makroaufnahmen der Wurzelsysteme in Nährstofflösungen',
      locations: ['Berlin - Vertical Farm Startup', 'Vergleich: Traditioneller Bauernhof', 'Labor für Nährstofflösungen'],
      requiredEquipment: ['Drohne für Indoor-Flüge', '4K-Kamera', 'Makro-Objektive', 'Zeitraffer-Setup'],
      estimatedBudget: '15.000-20.000 EUR',
      visualHighlights: [
        'Pink leuchtende Pflanzenwände in industriellem Gebäude',
        'Zeitraffer: Vom Samen zur Pflanze in 30 Sekunden',
        'Ernte-Roboter bei der Arbeit',
        'Geschmackstest: Vergleich zu normalem Salat'
      ]
    },
    sources: [
      {
        title: 'Nature Food - Vertical Farming Study 2024',
        url: 'https://nature.com/articles/vertical-farming-2024',
        type: 'Studie',
        publishDate: '2024-11'
      },
      {
        title: 'Infarm - Europas größte vertikale Farm',
        url: 'https://infarm.com/press',
        type: 'Pressemitteilung',
        publishDate: '2024-10'
      },
      {
        title: 'Agrartechnologie-Bericht 2024',
        url: 'https://agrartech.de/vertical-farming',
        type: 'Artikel',
        publishDate: '2024-12'
      }
    ],
    storyline: {
      duration: 12,
      hook: 'Mitten in Berlin wachsen Erdbeeren - ohne Sonne, ohne Erde, ohne Regen. Willkommen in der Zukunft der Landwirtschaft!',
      acts: [
        {
          title: 'Der Wow-Effekt',
          durationMinutes: 2,
          description: 'Erste spektakuläre Eindrücke der vertikalen Farm: Pink leuchtende Pflanzenwände, mehrere Stockwerke hoch. Reporter betritt die Farm.',
          visualElements: ['Establishing Shot von außen', 'Reveal: Inneres der Farm', 'Drohnenflug durch Hallen']
        },
        {
          title: 'Wie funktioniert das?',
          durationMinutes: 4,
          description: 'Erklärung der Technologie: LED-Licht statt Sonne, Nährstofflösung statt Erde, automatisierte Bewässerung. Interview mit Gründer/Agrarwissenschaftler.',
          visualElements: ['Infografiken', 'Nahaufnahmen Wurzelsysteme', 'Zeitraffer Pflanzenwachstum', 'Labor-Szenen']
        },
        {
          title: 'Die Vorteile',
          durationMinutes: 3,
          description: 'Vergleich mit traditioneller Landwirtschaft: Wassereinsparung, keine Pestizide, 100x höherer Ertrag pro Quadratmeter, ganzjährige Ernte, keine Transportwege.',
          visualElements: ['Split-Screen Vergleiche', 'Animationen', 'Experimente']
        },
        {
          title: 'Der Geschmackstest',
          durationMinutes: 2,
          description: 'Blind-Verkostung: Können Menschen den Unterschied schmecken? Test mit Passanten und Koch.',
          visualElements: ['Geschmackstest auf der Straße', 'Reaktionen', 'Koch bereitet Gerichte zu']
        },
        {
          title: 'Ausblick',
          durationMinutes: 1,
          description: 'Weitere Standorte in Planung, Skalierbarkeit, Vision für 2030. Wird das die Landwirtschaft revolutionieren?',
          visualElements: ['Zukunftsvisionen', 'Computeranimationen', 'Statements Experten']
        }
      ],
      conclusion: 'Ob vertikale Farmen die traditionelle Landwirtschaft ersetzen werden, bleibt abzuwarten. Aber eines ist klar: In Zeiten des Klimawandels brauchen wir innovative Lösungen - und die wachsen hier bereits in die Höhe!'
    },
    createdAt: new Date('2024-12-08'),
    alreadyAired: false
  },
  {
    id: '2',
    title: 'E-Fuel Tankstellen: Umweltfreundlich tanken mit synthetischen Kraftstoffen',
    tags: [
      TagCategory.WISSENSCHAFT,
      TagCategory.UMWELT,
      TagCategory.TECHNOLOGIE,
      TagCategory.AKTUELL,
      TagCategory.GESELLSCHAFTLICH_RELEVANT
    ],
    summary: 'Die erste E-Fuel Tankstelle Deutschlands öffnet in München. Mit synthetischen Kraftstoffen aus Wasser, CO2 und Ökostrom können Verbrenner-Autos klimaneutral fahren. Die Technologie könnte Millionen bestehender Fahrzeuge retten.',
    relevance: 'Während E-Autos den Markt erobern, gibt es bereits 48 Millionen Benzin- und Diesel-Fahrzeuge in Deutschland. E-Fuels könnten diese Autos klimaneutral machen, ohne dass sie verschrottet werden müssen. Die EU hat E-Fuels ab 2035 erlaubt.',
    visualConcept: {
      description: 'Aufnahmen der futuristischen Tankstelle, Herstellungsprozess von E-Fuels in Pilotanlage, Experimente zur Verbrennung, Vergleichstests mit normalem Benzin',
      locations: ['München - E-Fuel Tankstelle', 'Pilotanlage Karlsruhe', 'Testgelände für Fahrzeuge'],
      requiredEquipment: ['4K-Kamera', 'Zeitlupe-Kamera für Verbrennung', 'Messgeräte für Emissionen'],
      estimatedBudget: '12.000-18.000 EUR',
      visualHighlights: [
        'Futuristische Tankstelle mit moderner Architektur',
        'Herstellungsprozess in Industrieanlage',
        'Zeitlupen-Aufnahmen: E-Fuel vs. Benzin verbrennen',
        'Emissionsmessung im Vergleich',
        'Straßentest mit verschiedenen Fahrzeugen'
      ]
    },
    sources: [
      {
        title: 'Fraunhofer ISE - E-Fuel Studie 2024',
        url: 'https://fraunhofer.de/efuel-study',
        type: 'Studie',
        publishDate: '2024-09'
      },
      {
        title: 'EU-Kommission - E-Fuels nach 2035',
        url: 'https://ec.europa.eu/efuels-regulation',
        type: 'Pressemitteilung',
        publishDate: '2024-11'
      },
      {
        title: 'ADAC - E-Fuel Test und Bewertung',
        url: 'https://adac.de/efuel-test-2024',
        type: 'Artikel',
        publishDate: '2024-10'
      }
    ],
    storyline: {
      duration: 10,
      hook: 'Tanken ohne schlechtes Gewissen? An dieser Tankstelle wird das Realität - mit Kraftstoff aus Luft und Wasser!',
      acts: [
        {
          title: 'Die Revolution an der Zapfsäule',
          durationMinutes: 2,
          description: 'Erste E-Fuel Tankstelle in München. Reporter tankt sein Auto mit dem neuen Kraftstoff.',
          visualElements: ['Tankstellen-Außenaufnahme', 'Tankvorgang', 'Interview mit Tankstellen-Betreiber']
        },
        {
          title: 'Wie entsteht E-Fuel?',
          durationMinutes: 3,
          description: 'Besuch in Produktionsanlage: CO2 wird aus der Luft gefiltert, mit Wasserstoff (aus Ökostrom) kombiniert. Chemische Prozesse erklärt.',
          visualElements: ['Industrieanlage', 'Infografiken', 'Interview Chemiker', 'Nahaufnahmen Reaktoren']
        },
        {
          title: 'Test: E-Fuel vs. Benzin',
          durationMinutes: 3,
          description: 'Vergleichstest auf Testgelände: Leistung, Verbrauch, Emissionen. Was sind die Unterschiede?',
          visualElements: ['Fahrzeug-Tests', 'Messungen', 'Grafiken', 'Experteninterview']
        },
        {
          title: 'Die Kritik',
          durationMinutes: 2,
          description: 'E-Fuels sind teuer und energieintensiv. Sind E-Autos nicht effizienter? Gegenüberstellung der Argumente.',
          visualElements: ['Straßenumfrage', 'Experten-Statements', 'Kostenvergleich']
        }
      ],
      conclusion: 'E-Fuels sind keine Wunderlösung, aber sie könnten eine Brücke sein - für Millionen Bestandsfahrzeuge und Bereiche, wo E-Autos nicht funktionieren.'
    },
    createdAt: new Date('2024-12-07'),
    alreadyAired: false
  },
  {
    id: '3',
    title: 'Urbane Seilbahnen: Stau-frei über der Stadt schweben',
    tags: [
      TagCategory.BILDSTARK,
      TagCategory.TECHNOLOGIE,
      TagCategory.UMWELT,
      TagCategory.GESELLSCHAFTLICH_RELEVANT,
      TagCategory.INTERNATIONAL
    ],
    summary: 'Seilbahnen sind nicht nur für Skigebiete: Weltweit setzen Städte wie La Paz, Medellin und bald auch München auf Seilbahnen als öffentliches Verkehrsmittel. Sie sind schnell, umweltfreundlich und spektakulär.',
    relevance: 'Städte weltweit kämpfen mit Stau und Luftverschmutzung. Urbane Seilbahnen können in Monaten statt Jahren gebaut werden, kosten einen Bruchteil von U-Bahnen und bieten eine spektakuläre Aussicht.',
    visualConcept: {
      description: 'Atemberaubende Luftaufnahmen aus Seilbahn-Gondeln über verschiedene Städte, Zeitraffer-Fahrten, Vergleich Rush Hour unten vs. entspanntes Gleiten oben',
      locations: ['La Paz, Bolivien', 'Medellin, Kolumbien', 'München (Planung)', 'Wien (Test)'],
      requiredEquipment: ['4K-Kameras', 'Drohnen', '360°-Kamera für Gondel-POV', 'Zeitraffer-Setup'],
      estimatedBudget: '25.000-35.000 EUR (mit Auslandsdreh)',
      visualHighlights: [
        'Gondeln schweben über Stau und Verkehrschaos',
        'Sonnenuntergang-Fahrt über La Paz',
        'Zeitraffer: Stadt aus Gondel-Perspektive',
        'Bau einer Stationsanlage im Zeitraffer',
        '360° Rundumblick aus Gondel'
      ]
    },
    sources: [
      {
        title: 'Mi Teleférico La Paz - Passagierzahlen 2024',
        url: 'https://miteleferico.bo/statistics',
        type: 'Pressemitteilung',
        publishDate: '2024-11'
      },
      {
        title: 'Urban Cable Propelled Transit Study',
        url: 'https://transport-research.info/cable-transit',
        type: 'Studie',
        publishDate: '2024-08'
      },
      {
        title: 'München plant Seilbahn-Verbindung',
        url: 'https://muenchen.de/seilbahn-projekt',
        type: 'Artikel',
        publishDate: '2024-12'
      }
    ],
    storyline: {
      duration: 15,
      hook: 'Vergiss U-Bahn und Bus - die Zukunft des Nahverkehrs schwebt 100 Meter über deinem Kopf!',
      acts: [
        {
          title: 'La Paz: Die Seilbahn-Hauptstadt',
          durationMinutes: 4,
          description: 'Das größte urbane Seilbahn-Netz der Welt: 36 km, 10 Linien. Reporter fährt mit in Rush Hour und erlebt den Unterschied zu Stau unten.',
          visualElements: ['Luftaufnahmen La Paz', 'Gondel-POV', 'Pendler-Interviews', 'Split-Screen: Gondel vs. Stau']
        },
        {
          title: 'Warum Seilbahnen?',
          durationMinutes: 3,
          description: 'Vorteile: Schneller Bau (1-2 Jahre), geringere Kosten, keine Staus, umweltfreundlich, überwindet Höhenunterschiede. Vergleich mit U-Bahn, Bus.',
          visualElements: ['Infografiken', 'Kostenvergleich', 'Bauzeit-Animation', 'Experten-Interview']
        },
        {
          title: 'Medellin: Soziale Transformation',
          durationMinutes: 3,
          description: 'Wie Seilbahnen ein Armenviertel angebunden und transformiert haben. Vorher/Nachher-Vergleich.',
          visualElements: ['Dokumentarische Aufnahmen', 'Bewohner-Interviews', 'Archivmaterial', 'Stadtentwicklung']
        },
        {
          title: 'München: Die Planung',
          durationMinutes: 3,
          description: 'Erste deutsche Großstadt mit urbaner Seilbahn? Pläne, Streckenführung, Kritik (Lärmschutz, Privatsphäre).',
          visualElements: ['Planungskarten', 'Simulationen', 'Pro/Contra Interviews', 'Anwohner-Reaktionen']
        },
        {
          title: 'Selbsttest',
          durationMinutes: 2,
          description: 'Reporter testet: Wie fühlt sich Seilbahn-Pendeln an? Würdest du es nutzen?',
          visualElements: ['POV-Aufnahmen', 'Zeit-Vergleich verschiedener Verkehrsmittel', 'Fazit']
        }
      ],
      conclusion: 'Seilbahnen könnten die Städte der Zukunft verändern - wenn wir den Mut haben, nach oben zu denken statt nur nach unten zu graben.'
    },
    createdAt: new Date('2024-12-06'),
    alreadyAired: false
  },
  {
    id: '4',
    title: 'Insekten-Burger: Die Protein-Revolution auf deinem Teller',
    tags: [
      TagCategory.FOOD,
      TagCategory.UMWELT,
      TagCategory.GESELLSCHAFTLICH_RELEVANT,
      TagCategory.MYSTERY
    ],
    summary: 'In Deutschland eröffnen die ersten Insekten-Restaurants. Mehlwürmer, Grillen und Heuschrecken sind proteinreich, nachhaltig und sollen - richtig zubereitet - sogar lecker sein. Trauen wir uns das auf den Teller?',
    relevance: 'Insekten benötigen 1000x weniger Wasser und 100x weniger Fläche als Rinder für die gleiche Proteinmenge. Die EU hat bereits mehrere Insektenarten als Lebensmittel zugelassen. 2 Milliarden Menschen weltweit essen bereits Insekten.',
    visualConcept: {
      description: 'Nahaufnahmen der Insekten-Zubereitung, Geschmackstest mit Testpersonen, Besuch in Insekten-Farm, Vergleich mit traditionellen Fleisch-Burgern',
      locations: ['Berlin - Insekten-Restaurant', 'Insekten-Farm', 'Supermarkt', 'Straßentest'],
      requiredEquipment: ['Makro-Objektive', '4K-Kamera', 'Beleuchtung für Food-Fotografie'],
      estimatedBudget: '8.000-12.000 EUR',
      visualHighlights: [
        'Appetitlich angerichtete Insekten-Gerichte',
        'Reaktionen beim ersten Bissen',
        'Insekten-Farm mit Millionen Grillen',
        'Blind-Verkostung: Insekt vs. Fleisch',
        'Koch bereitet Gourmet-Insekten-Gericht zu'
      ]
    },
    sources: [
      {
        title: 'EU-Verordnung zu Insekten als Lebensmittel',
        url: 'https://eur-lex.europa.eu/insects-regulation',
        type: 'Pressemitteilung',
        publishDate: '2024-01'
      },
      {
        title: 'FAO - The Future of Food: Insects',
        url: 'https://fao.org/insect-protein-study',
        type: 'Studie',
        publishDate: '2024-06'
      },
      {
        title: 'Verbraucherzentrale - Insekten essen',
        url: 'https://verbraucherzentrale.de/insekten-lebensmittel',
        type: 'Artikel',
        publishDate: '2024-11'
      }
    ],
    storyline: {
      duration: 8,
      hook: 'Würdest du einen Burger aus Grillen essen? In diesem Restaurant in Berlin ist das die Spezialität!',
      acts: [
        {
          title: 'Das Insekten-Restaurant',
          durationMinutes: 2,
          description: 'Reporter besucht erstes Insekten-Restaurant. Menükarte mit exotischen Gerichten. Erste Reaktionen.',
          visualElements: ['Restaurant-Atmosphäre', 'Menükarte', 'Gerichte werden serviert', 'Reporter testet']
        },
        {
          title: 'Warum Insekten?',
          durationMinutes: 2,
          description: 'Umweltvorteile: Wasserverbrauch, Flächennutzung, CO2-Fußabdruck. Nährwerte im Vergleich. Interview mit Ernährungswissenschaftler.',
          visualElements: ['Infografiken', 'Vergleichs-Animationen', 'Experten-Statement']
        },
        {
          title: 'Die Insekten-Farm',
          durationMinutes: 2,
          description: 'Besuch bei Züchter: So werden Insekten für Lebensmittel produziert. Millionen Grillen in Klimakammern.',
          visualElements: ['Zuchtanlagen', 'Ernte-Prozess', 'Verarbeitung', 'Interview Züchter']
        },
        {
          title: 'Der Ekel-Faktor',
          durationMinutes: 2,
          description: 'Straßentest: Menschen probieren Insekten (ohne es zu wissen vs. mit Wissen). Reaktionen.',
          visualElements: ['Blind-Verkostung', 'Reveal-Moment', 'Verschiedene Reaktionen', 'Umfrage']
        }
      ],
      conclusion: 'Ob Insekten das Fleisch der Zukunft werden, liegt an uns. Die Fakten sprechen dafür - aber isst auch dein Kopf mit?'
    },
    createdAt: new Date('2024-12-05'),
    alreadyAired: false
  },
  {
    id: '5',
    title: 'Digital Detox Camps: Urlaub ohne Smartphone',
    tags: [
      TagCategory.GESELLSCHAFTLICH_RELEVANT,
      TagCategory.AKTUELL,
      TagCategory.ENTERTAINMENT
    ],
    summary: 'Eine Woche ohne Smartphone, Social Media und Internet: In speziellen Digital Detox Camps können Menschen komplett abschalten. Die Nachfrage boomt - besonders bei der Generation Z.',
    relevance: 'Deutsche verbringen durchschnittlich 3,5 Stunden pro Tag am Smartphone. Studien zeigen: Übermäßige Smartphone-Nutzung führt zu Stress, Schlafproblemen und verringert die Konzentrationsfähigkeit. Immer mehr junge Menschen suchen nach einem Ausweg.',
    visualConcept: {
      description: 'Kontrast: Hektisches Social Media Leben vs. entspanntes Camp-Leben. Teilnehmer geben Phones ab. Aktivitäten ohne digitale Ablenkung. Emotionale Momente beim Wiedereinschalten.',
      locations: ['Digital Detox Camp im Schwarzwald', 'Vergleich: Normale Campingplätze', 'Nachher: Teilnehmer zu Hause'],
      requiredEquipment: ['4K-Kamera', 'Dokumentarisches Setup', 'Interview-Equipment'],
      estimatedBudget: '10.000-15.000 EUR',
      visualHighlights: [
        'Zeremonie: Smartphones werden in Tresor eingeschlossen',
        'Zeitraffer: 7 Tage ohne Phone in 30 Sekunden',
        'Aktivitäten: Lagerfeuer, Wandern, echte Gespräche',
        'Emotionale Momente: Was haben Teilnehmer vermisst?',
        'Der Moment des Wiedereinschaltens'
      ]
    },
    sources: [
      {
        title: 'DAK-Studie: Smartphone-Sucht bei Jugendlichen',
        url: 'https://dak.de/smartphone-studie-2024',
        type: 'Studie',
        publishDate: '2024-10'
      },
      {
        title: 'Digital Detox: Trend oder Notwendigkeit?',
        url: 'https://zeit.de/digital-detox-trend',
        type: 'Artikel',
        publishDate: '2024-11'
      },
      {
        title: 'Psychologie Heute - Offline glücklich',
        url: 'https://psychologie-heute.de/offline-gluecklich',
        type: 'Artikel',
        publishDate: '2024-09'
      }
    ],
    storyline: {
      duration: 10,
      hook: 'Eine Woche ohne Instagram, TikTok und WhatsApp - für viele unvorstellbar. Diese Menschen haben es gewagt!',
      acts: [
        {
          title: 'Tag 0: Die Abgabe',
          durationMinutes: 2,
          description: 'Ankunft im Camp. Teilnehmer geben ihre Smartphones ab. Erste Reaktionen: Nervosität, Unsicherheit, auch Vorfreude.',
          visualElements: ['Ankunft', 'Smartphone-Abgabe', 'Interviews vor Start', 'Erste Stunden ohne Phone']
        },
        {
          title: 'Die ersten Tage: Entzug',
          durationMinutes: 3,
          description: 'Phantom-Vibrationen, Griff zur leeren Hosentasche. Wie schwer ist der Verzicht? Aktivitäten im Camp ohne Ablenkung.',
          visualElements: ['Dokumentation Alltag', 'Interviews Teilnehmer', 'Gruppenaktivitäten', 'Reflexions-Runden']
        },
        {
          title: 'Die Verwandlung',
          durationMinutes: 2,
          description: 'Ab Tag 4-5: Teilnehmer wirken entspannter, schlafen besser, führen tiefere Gespräche. Was verändert sich?',
          visualElements: ['Vorher/Nachher-Vergleich', 'Tiefe Gespräche am Lagerfeuer', 'Natur-Erlebnisse']
        },
        {
          title: 'Der Reality-Check',
          durationMinutes: 2,
          description: 'Smartphones werden zurückgegeben. Wie fühlt sich das an? Was hat sich angesammelt? Zurück im digitalen Leben.',
          visualElements: ['Rückgabe-Zeremonie', 'Reaktionen beim Einschalten', 'Nachricht-Flut', '1 Monat später: Follow-Up']
        },
        {
          title: 'Fazit und Experteneinschätzung',
          durationMinutes: 1,
          description: 'Was bleibt nach dem Detox? Tipps für gesunde Smartphone-Nutzung im Alltag.',
          visualElements: ['Teilnehmer-Fazit', 'Psychologen-Interview', 'Praktische Tipps']
        }
      ],
      conclusion: 'Digital Detox ist kein Allheilmittel - aber ein Weckruf. Die Frage ist nicht ob, sondern wie wir Technologie nutzen wollen.'
    },
    createdAt: new Date('2024-12-04'),
    alreadyAired: false
  },
  {
    id: '6',
    title: 'Unterwasser-Datacenter: Server am Meeresgrund',
    tags: [
      TagCategory.BILDSTARK,
      TagCategory.TECHNOLOGIE,
      TagCategory.WISSENSCHAFT,
      TagCategory.MYSTERY
    ],
    summary: 'Microsoft versenkt Server-Container im Meer. Die Idee: Natürliche Kühlung durch Meerwasser, erneuerbare Energie durch Offshore-Windparks und Schutz vor Umwelteinflüssen. Die ersten Tests sind vielversprechend.',
    relevance: 'Rechenzentren verbrauchen 1% des weltweiten Stroms - Tendenz steigend. Die Kühlung ist dabei das größte Problem. Unterwasser-Datacenter könnten eine nachhaltige Lösung sein und gleichzeitig näher bei Küstenstädten stehen.',
    visualConcept: {
      description: 'Unterwasser-Aufnahmen der Server-Container, Tauchroboter-Inspektionen, Verlegung mit Schiff, Vergleich mit traditionellem Rechenzentrum an Land',
      locations: ['Nordsee - Unterwasser-Datacenter', 'Microsoft-Projekt Schottland', 'Vergleich: Traditionelles Rechenzentrum'],
      requiredEquipment: ['Unterwasser-Kameras', 'ROV (Tauchroboter)', '4K-Drohnen', 'Spezial-Equipment für Schiffsdrehs'],
      estimatedBudget: '30.000-40.000 EUR',
      visualHighlights: [
        'Container wird von Schiff zu Wasser gelassen',
        'Unterwasser-Aufnahmen: Server-Container am Meeresgrund',
        'ROV-Perspektive: Inspektion der Anlage',
        'Meereslebewesen rund um Container',
        'Control Room: Überwachung der Unterwasser-Server',
        '3D-Animation: Aufbau und Kühlsystem'
      ]
    },
    sources: [
      {
        title: 'Microsoft Project Natick - Final Report',
        url: 'https://microsoft.com/natick-results',
        type: 'Studie',
        publishDate: '2024-07'
      },
      {
        title: 'Nature - Underwater Data Centers Environmental Impact',
        url: 'https://nature.com/underwater-datacenters',
        type: 'Studie',
        publishDate: '2024-08'
      },
      {
        title: 'Fraunhofer - Kühltechnologien für Rechenzentren',
        url: 'https://fraunhofer.de/datacenter-cooling',
        type: 'Artikel',
        publishDate: '2024-10'
      }
    ],
    storyline: {
      duration: 12,
      hook: 'Deine Cloud-Daten liegen nicht in der Wolke - sondern 35 Meter unter Wasser! Willkommen bei den Rechenzentren der Zukunft.',
      acts: [
        {
          title: 'Die Versenkung',
          durationMinutes: 3,
          description: 'Ein riesiger Server-Container wird von einem Schiff ins Meer gelassen. Spektakuläre Szenen der Versenkung.',
          visualElements: ['Schiff auf See', 'Container-Vorbereitung', 'Versenkung', 'Unterwasser-Aufnahmen']
        },
        {
          title: 'Warum unter Wasser?',
          durationMinutes: 3,
          description: 'Das Problem mit Rechenzentren an Land: Enormer Energieverbrauch für Kühlung. Unterwasser: Konstante Temperaturen, natürliche Kühlung, Offshore-Wind-Energie.',
          visualElements: ['Problem-Erklärung', 'Infografiken', 'Vergleich Land vs. Wasser', 'Experten-Interview']
        },
        {
          title: 'Wie funktioniert es?',
          durationMinutes: 3,
          description: 'Technik-Einblick: Wärmeaustausch, Salzwasser-Schutz, Wartungskonzept, Datenübertragung zu Land. 3D-Animationen.',
          visualElements: ['3D-Animationen', 'Technische Zeichnungen', 'Control-Room', 'Datenübertragung']
        },
        {
          title: 'Unterwasser-Inspektion',
          durationMinutes: 2,
          description: 'Tauchroboter inspiziert den Container am Meeresgrund. Wie sieht es dort unten aus?',
          visualElements: ['ROV-Aufnahmen', 'Container am Grund', 'Meereslebewesen', 'Zustand nach Monaten']
        },
        {
          title: 'Die Zukunft',
          durationMinutes: 1,
          description: 'Pläne für großflächigen Ausbau. Könnten alle Rechenzentren unter Wasser wandern?',
          visualElements: ['Zukunftsvisionen', 'Weltkar te mit Standorten', 'Experten-Ausblick']
        }
      ],
      conclusion: 'Unterwasser-Datacenter klingen nach Science-Fiction - sind aber bereits Realität. Die Zukunft des Internets könnte nasser werden als gedacht!'
    },
    createdAt: new Date('2024-12-03'),
    alreadyAired: false
  }
];
