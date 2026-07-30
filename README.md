# Scharf Photovoltaik – D2D Recruiting Landingpage

Statische Recruiting-Landingpage für Door-to-Door-Vertriebspartner im Solarbereich.
Reines HTML + CSS mit minimalem Vanilla-JS, kein Build-Schritt, kein Framework.

## Struktur

```
index.html            Landingpage (Hero, Ablauf vor Ort, Verdienst, Fit-Check,
                      Über uns, Bewerbungsablauf, FAQ, Bewerbung)
impressum.html        Impressum
datenschutz.html      Datenschutzerklärung
assets/
  css/style.css       Komplettes Stylesheet (Design-Tokens in :root)
  js/script.js        Navigation, Scroll-Reveal, FAQ, Bewerbungsmodal,
                      Ablauf-Fortschritt, Datenschutz-Hinweis
  img/                Optimierte Bilder – je Motiv .webp (primär) + .jpg (Fallback)
```

Die Stellenbezeichnung („Door-to-Door Vertriebspartner im Solar-Bereich
(m/w/d)“) steht ausgeschrieben in der Hero-Headline, in der Überschrift des
Bewerbungsblocks und im Dialogtitel. Sie ist deutlich länger als eine übliche
Headline; Hero und Bewerbungsblock haben deshalb einen eigenen, kleineren
Schriftgrad. Wer den Text kürzt oder erweitert, prüft beide Grade mit.
`<title>` und Meta-Description tragen noch die alte, kürzere Formulierung –
sie sind Suchmaschinen-Text und wurden bewusst nicht mitgezogen.

## Lokal ansehen

Ein beliebiger statischer Server genügt, z. B.:

```bash
python3 -m http.server 8000
# -> http://localhost:8000
```

Die Seite direkt per `file://` zu öffnen funktioniert grundsätzlich auch,
der Formular-Versand braucht aber `http(s)://`.

## Bewerbungsformular

Das Formular ist ein **Multi-Step-Dialog**, der über jeden „Jetzt bewerben“-Button
geöffnet wird (natives `<dialog>`-Element, Fokus-Trap und ESC out of the box).

- Versand: `POST` an Formspree (`https://formspree.io/f/xlgvoyrr`)
- Drei Schritte: Führerschein und Auto, Stunden pro Woche, Kontaktdaten
- Freitext und Einwilligungshäkchen stehen im dritten Schritt. Sie waren früher
  ein eigener vierter Schritt – beides sind aber keine Fragen, und die Seite
  verspricht außen „3 Fragen“.
- **Die Feldnamen sind deutsch** (`Vorname`, `Nachname`, `E-Mail`, `Telefon`,
  `Führerschein und Auto`, `Stunden pro Woche`, `Nachricht`, `Datenschutz`) –
  Formspree zeigt sie unverändert als Beschriftung in der Benachrichtigung.
  Ältere Einsendungen tragen noch die englischen Namen.
- Damit hängt die **Antwortadresse** an einem eigenen Feld: Formspree liest sie
  aus einem Feld namens `email` oder `_replyto`, und `email` heißt jetzt
  `E-Mail`. Das versteckte `_replyto` wird beim Absenden aus dem Mailfeld
  gefüllt (`script.js`). Felder mit führendem Unterstrich gelten bei Formspree
  als Steuerfelder und erscheinen nicht in der Mail – wie `_subject`.
  Ohne JavaScript bleibt `_replyto` leer; die Adresse steht dann nur im
  Nachrichtentext.
- Die früheren Felder `sales_experience*` entfallen. Ältere Einsendungen im
  Posteingang enthalten sie noch.
- Ohne JavaScript fällt das Formular auf einen normalen Browser-`POST` zurück.

Zentriert sind im Dialog nur Frage und Hinweis über dem jeweiligen Schritt.
Alles, was man ausfüllt, läuft linksbündig: Beschriftung, Feldinhalt und der
Einwilligungssatz teilen sich im dritten Schritt eine Kante. Die Kontaktfelder
stehen einzeln untereinander – Vor- und Nachname nebeneinander mussten sich die
Breite teilen und wirkten gedrängt.

Nicht jeder Schritt hat einen Hinweis unter der Frage (der dritte hat keinen).
Den Abstand zum Schrittinhalt trägt deshalb die Frage, und ein folgender
Hinweis zieht ihn mit `margin-top: -0.85rem` wieder auf seinen kleineren Wert
zusammen – so bleiben die 22px über dem ersten Feld in allen drei Schritten
gleich, ohne `:has()`.

Das Einwilligungskästchen ist selbst gestaltet (`appearance: none` plus
Haken als Inline-SVG im `background-image`). Gestylt wird der Input selbst,
nicht ein danebengelegtes Ersatz-Element: so bleiben Fokus, Tastaturbedienung
und Trefferfläche unverändert, und `field.focus()` aus der Schrittprüfung
landet weiterhin sichtbar auf dem Kästchen. Der Scrollbalken des Dialogkörpers
ist aus demselben Grund eigen gestylt – der Systembalken sitzt als heller Block
auf der dunklen Fläche. `::-webkit-scrollbar` gilt für Chrome und Safari;
`scrollbar-width` steht bewusst in einem `@supports not
selector(::-webkit-scrollbar)`-Block, denn sobald die Standard-Eigenschaft
gesetzt ist, ignoriert Blink die `::-webkit`-Regeln komplett.

Der Schließen-Button liegt absolut,
nicht als Flex-Nachbar der Überschrift – als Nachbar nähme er rechts Platz weg
und die Überschrift säße um seine halbe Breite versetzt. Auf dem schmalen Sheet
(≤ 640 px) bekommt er eine eigene Zeile darüber; seitliches Freihalten reichte
dort nicht, die Überschrift kam ihm bis auf 5 px nahe.

## Impressum und Datenschutz

Beide Seiten tragen **dieselbe Kopf- und Fußzeile wie die Startseite** und
laden dasselbe Stylesheet und Skript. Vorher hatten sie ein eigenes,
dunkelblaues Inline-Stylesheet aus der Zeit vor der Umstellung auf die
Markenfarben und eine eigene, minimale Kopfzeile.

- Die Navigationsziele zeigen auf `index.html#…`, sonst liefen die Anker ins
  Leere.
- Der CTA im Header ist dort ein normaler Link ohne `data-apply-open`: das
  Bewerbungsformular gibt es nur auf der Startseite, und das Skript bindet die
  Auslöser ohnehin nur, wenn der Dialog im Dokument steht.
- Der Einwilligungs-Hinweis liegt mit im Markup, weil die Fußzeile den Knopf
  *Datenschutz-Einstellungen* trägt – ohne den Banner liefe er ins Leere.
- Der Rechtstext ist unverändert übernommen; nur `.legal__section` als Klasse
  kam dazu.

Kopf- und Fußzeile stehen damit **dreimal im Repo** – einmal je Seite. Das ist
der Preis dafür, ohne Build-Schritt auszukommen: wer an der Navigation etwas
ändert, ändert es in `index.html`, `impressum.html` und `datenschutz.html`.

## Bilder

Es liegen nur noch die sechs Motive unter `assets/img/`, die auch eingebunden
sind – Platzhalter gibt es keine mehr.

| Datei | Einsatz | Format |
| ----- | ------- | ------ |
| `hero-wohnsiedlung.*` | Hero-Hintergrund | 1672×941 |
| `enno-hero.*` | Portrait in der Hero-Karte | 917×831, unbeschnitten |
| `enno-ueber-uns.*` | Foto im Abschnitt „Über uns“ | 1000×1249, auf 4:5 beschnitten |
| `d2d-haustuer.*` | Hintergrund im Ablauf | 1440×1080 |
| `logo-dunkel.*`, `logo-hell.*` | Wortmarke hell/dunkel | 552×154 |

Jedes Motiv liegt als `.webp` (ausgeliefert) und `.jpg` (Rückfalllinie) vor.

Bild und Rahmen müssen im Seitenverhältnis zusammenpassen, sonst schneidet
`object-fit: cover` an. Zwei Wege, je nach Motiv:

- **Hero-Karte**: der Rahmen folgt dem Bild. `.hero__portrait-card` trägt
  `aspect-ratio: 917 / 831` – exakt das Format der Datei, damit das Foto
  vollständig zu sehen ist. Beim Bildtausch diesen Wert mitziehen.
- **Über uns**: das Bild folgt dem Rahmen. Das `<figure>` läuft auf
  `aspect-ratio: 4/5`, die Datei ist darauf beschnitten.

Der Hero ist auf ein **helles** Hintergrundmotiv ausgelegt: die Typografie steht
dunkel auf einem warmweißen Verlauf (`.hero__scrim`), und die Navigation schaltet
oben auf dunkle Schrift um (`.nav:not(.nav--scrolled)`). Ein dunkles Hero-Motiv
würde beides unlesbar machen – dann müssten Scrim und Nav-Farben mitgezogen
werden. Beim Bildtausch den Textkontrast über dem neuen Motiv nachmessen, nicht
schätzen: Der Verlauf ist auf genau dieses Foto abgestimmt.

Das Motiv im Ablauf liegt als `::before` unter dem Abschnitt, mit 20 %
Deckkraft, leicht weichgezeichnet und entsättigt. Ein `::after` legt einen
aufgehellten Kern darüber – der trägt die Lesbarkeit, nicht die niedrige
Deckkraft. Deshalb darf das Motiv sichtbar sein, ohne dass der Text leidet:
gemessen 8,5:1 (mobil) für den aktiven Schritt und 16,8:1 für die Überschrift.

Drei Details hängen daran. `.tasks` braucht `isolation: isolate`, sonst rutscht
das `z-index: -1` hinter den Seitenhintergrund. Weichzeichnung und Entsättigung
stecken **in der Datei**, nicht in einem CSS-`filter`: gefiltert müsste das
`::before` über den Abschnitt hinausstehen, sonst franst die Kante aus – und
dieser Überstand verbreiterte die Seite um 14px. Und das Motiv ist oben wie
unten per `mask-image` ausgeblendet, damit es an den Abschnittskanten nicht
schlagartig einsetzt.

## Hero-Rhythmus auf dem Phone

Der Hero läuft mobil in einer **32px-Stufe**: unter der Standort-Pille, unter
dem Fließtext und unter der Vorteilsliste steht überall derselbe Wert, dazu
32px zwischen Header und Pille. Zwei Ausnahmen sind Absicht:

- unter der Überschrift genügt eine halbe Stufe (24px) – ihre Zeilen stehen
  ohnehin dicht beieinander,
- die Zeile unter dem CTA gehört zu ihm und bleibt mit 14px am nächsten dran.

Der größte Bruch liegt vor dem Foto: 56px aus dem `gap` des `.hero__layout`,
dazu 48px Polster unter dem Bild. So steht die Copy im ersten Bildschirm für
sich und das Foto beginnt sichtbar einen Abschnitt später.

Die Regeln stehen gesammelt in einem Block im `@media (max-width: 768px)` –
vorher lagen `.hero__actions` und `.hero__subhead` mehrfach verstreut darin,
teils mit gegenläufigen Werten.

## Übergang Hero → Ablauf

Der Hero endete hart an der Kante des nächsten Abschnitts: warmes Foto oben,
kühles Weiß darunter. Beide Seiten tragen jetzt denselben Ton.

- `--cream` (`#fdf7e8`) ist die gemeinsame Farbe – warm, aber zurückhaltend.
  Der Hero blendet über die unteren rund 26 % seiner Höhe darauf aus (erster
  Layer im `.hero__scrim`, zuerst gelistet heißt zuoberst gezeichnet). Höher
  angesetzt legte sich der Schleier über Himmel und Häuser.
- Die Ausblendung steht an **drei** Stellen, und das ist Absicht:
  in `.hero__scrim` (Desktop), in der Phone-Regel – die ersetzt den kompletten
  Verlauf, ein Layer von oben ginge dort verloren – und in `.hero__scrim::after`.
  Das `::after` trägt die gelben Schleier des Hero; ohne die Ausblendung auch
  dort legte sich der Schleier unten rechts wieder über den fertigen Übergang
  und die Naht wurde an dieser Kante sichtbar (gemessen 13/255).
- `.tasks` läuft als Verlauf von `--cream` oben nach `--gray-50` unten – das ist
  die Farbe des Verdienst-Abschnitts darunter. So trägt der Abschnitt an jeder
  Kante die Farbe seines Nachbarn.

Gemessen über die volle Breite bleibt an der oberen Naht ein Sprung von 0/255
(Desktop) bzw. 2/255 (mobil), an der unteren 1/255. Vorher waren es 44/255.

Im Ablauf gibt es **keine hellen Flächen** mehr: weder die Karte, die früher
mit `--near` hinter dem aktiven Schritt herauswuchs, noch der gefüllte Kasten um
den Schlusshinweis. Über dem Hintergrundmotiv standen beide als weiße Flecken im
Bild. Den aktiven Zustand trägt jetzt allein die Schrift (Deckkraft 0,44 → 1)
zusammen mit dem gefüllten Marker; der Schlusshinweis behält nur seine gelbe
Kante links. Wer hier wieder eine Fläche einzieht, holt sich den weißen Fleck
zurück.

## Fortschritt im Ablauf („Dein Ablauf vor Ort“)

Zwei Darstellungen aus **einem** Markup, umgeschaltet bei 900px
(`TASKS_DESKTOP` in `script.js`, gleiche Breite im Stylesheet):

| | bis 899px | ab 900px |
| --- | --- | --- |
| Anordnung | senkrechte Liste | drei Spalten, mittlere um `--task-versatz` tiefer |
| Verbindung | senkrechte Schiene je Schritt | eine S-Kurve durch alle Punkte |
| Antrieb | Scrollstand | läuft von selbst durch |
| Schritt-Fläche | keine – die Schrift trägt den Zustand | keine – die Kurve trägt die Gliederung |

Die Amplitude der Welle hängt allein an `--task-versatz`: der mittlere Schritt
hängt um diesen Betrag tiefer, die Kurve holt entsprechend weit aus. Wie *steil*
sie dabei ist, steuert `ZUG` in `script.js` – der Faktor schiebt die
Bézier-Kontrollpunkte über die halbe Strecke hinaus, sodass sie sich kreuzen.
Genau auf halber Strecke (0.5) ergäbe das eine gleichmäßig weiche S-Form; über
0.5 bleibt die Kurve an den Punkten länger flach und fällt dazwischen steiler
ab. Der Abstand zwischen Punkt und Text ist zugleich der Abstand zur Kurve –
sie läuft durch die Punktmitten.

Beide setzen dieselben CSS-Variablen, nur die Quelle wechselt:

| Variable | Bedeutung | steuert |
| -------- | --------- | ------- |
| `--near` | 0…1, Nähe zum Fortschrittspunkt | Deckkraft des Textes, Marker-Füllung und -Größe |
| `--fill` | 0…1, Füllstand zum nächsten Punkt | die senkrechte Linie (nur schmal) |

**Hervorgehoben ist immer nur ein Schritt** – der, an dem der Punkt gerade
steht. Alles davor und danach bleibt grau. Ein Restwert für passierte Schritte
war ausprobiert und wieder raus: dann sind zwei Blöcke gleichzeitig dunkel und
der Blick weiß nicht, wo er hinschauen soll. Den Fortschritt trägt die gefüllte
Linie, nicht der Text. `is-done` färbt deshalb nichts mehr, markiert den Stand
aber weiterhin im DOM.

**Die Kurve steht nicht im Markup.** Ihre Stützpunkte sind die echten
Marker-Mittelpunkte, die sich mit Breite, Schriftgröße und Textumbruch
verschieben; `script.js` legt den Pfad nach dem Layout und bei jedem Resize neu.
Die Kontrollpunkte liegen waagerecht auf halber Strecke – daraus entsteht die
weiche S-Form. Wo welcher Punkt auf der Bahn liegt, wird abgetastet und nicht
in Dritteln geschätzt: bei ungleichen Abständen stimmten die nicht.

Der Lauf startet, wenn die Section ins Bild kommt, und pausiert beim Verlassen –
eine Animation, die niemand sieht, muss nicht laufen, und sie soll beim
Hinscrollen von vorn beginnen. Eine Runde ist Reise (6,6 s) → Halten (2,6 s) →
Ausblenden (0,5 s) → von vorn. Ausgeblendet wird, weil eine zurückschnappende
Linie sonst sichtbar wäre.

**Bei `prefers-reduced-motion` läuft nichts** – der Ablauf steht in beiden
Breiten fertig da, inklusive Haken. Auch schmal: eine voll gefüllte Linie mit
blassen Punkten daneben wäre nur widersprüchlich.

Sechs Details, die beim Anfassen leicht kaputtgehen:

- **Die betroffenen Regeln tragen bewusst kein `transition`.** Der Wert *ist*
  die Bewegung; eine Übergangszeit würde ihr nur hinterherlaufen. Nur für die
  Blende zwischen zwei Runden ist eine gesetzt.
- Das `opacity` zum Dimmen sitzt auf `.tasks__body`, **nicht** auf
  `.tasks__step` und **nicht** auf `.tasks__marker`. Auf dem Schritt würde es
  einen Stacking-Context erzeugen und den `z-index` des Markers einsperren, auf
  dem Marker würde seine weiße Füllung durchscheinen – in beiden Fällen liefe
  die Verbindungslinie sichtbar über den Punkt.
- Das SVG steht **neben** der Liste, nicht darin: in `<ol>` gehören nur `<li>`.
  Als Grid-Kind würde es außerdem eine Spalte belegen. Beides löst der
  `.tasks__wrap` – die Kurve liegt absolut darüber.
- Die senkrechte Linie besteht aus zwei Lagen je Schritt: `::before` graue
  Schiene, `::after` gelbe Füllung. Die Reihenfolge ist nicht beliebig – bei
  gleichem `z-index` zeichnet der Browser `::after` über `::before`. Ab 900px
  sind beide auf `content: none`.
- Die Marker-Füllung liegt in einem `::before` mit `opacity: var(--near)`. Ein
  `background-image` lässt sich nicht interpolieren, seine Deckkraft schon.
- **Die Ziffer bleibt über den ganzen Verlauf dunkel.** Von Grau nach Weiß zu
  blenden hieße, mitten im Übergang eine helle Ziffer auf halb gefülltem Gelb zu
  haben – genau dort ist der Kontrast am schlechtesten. Mit dunkler Ziffer sind
  es durchgehend 5,7:1 bis 12,7:1, am gerenderten Bild abgetastet.

Ziffer und Haken liegen in derselben Rasterzelle des Markers
(`display: inline-grid`, beide `grid-area: 1 / 1`) und blenden gegeneinander
über. Der Haken hängt weiterhin an einer Klasse und nicht an `--near`: er ist
ein Zustand, kein Verlauf – halb eingeblendet ergäbe er kein Bild.

Der letzte Punkt wächst mobil stärker als die anderen (Faktor 0.34 statt 0.07,
gemessen 38px → 50px). Das Wachsen hängt an `--near` und nicht an der Klasse:
so läuft es mit dem Scroll mit und beim Zurückscrollen wieder zurück. Eine
Transition auf `.is-active` täte es auch – bis die Klasse wegfällt, dann
schnappt der Punkt zurück. Den Akzent setzt ein einmaliger Ring
(`::after`, `@keyframes task-erledigt`), der nach außen ausläuft. Am Desktop
sitzen die Punkte auf der Kurve, dort bleibt es beim kleinen Faktor.

## Rechenblock „Einordnung aus der Praxis“

Die drei Karten (`.lead-econ__step`) bilden eine Rechnung ab und sind deshalb
streng parallel aufgebaut: `__step-label` → `__step-value` → `__step-meta`.
Im Wert steht immer dieselbe Reihenfolge `__approx?` · `__num` · `__unit` ·
`__per`, ohne Verschachtelung.

- **Die Bezugsgröße (`__per`, z. B. „pro Stunde“) wird in `rem` bemessen, nicht
  in `em`.** In `em` hinge sie an der Zahl darüber; steckte sie zusätzlich in
  einem Wrapper, multiplizierten sich die Faktoren und dieselbe Angabe wäre je
  Karte unterschiedlich groß – auf dem Phone zuletzt 6px in der einen und 11px
  in der anderen Karte.
- `__unit` („€“, „Termine“) trägt aus demselben Grund eine `rem`-Untergrenze:
  `max(0.62em, 1rem)`. Ohne sie fällt die Einheit auf kleinen Phones unter die
  Bezugsgröße und die Hierarchie kippt.
- Der Wert ist ein Flex-Container; die Abstände kommen aus `column-gap`, nicht
  aus `&nbsp;` im Markup. `__per` bekommt über `flex: 0 0 100%` in jeder Karte
  verlässlich eine eigene Zeile – so hängt die Zeilenaufteilung nicht an der
  Textlänge und kann zwischen den Karten nicht auseinanderlaufen.
- `__step-meta` hat `margin-top: auto` und hält die Fußzeilen auf einer Linie.
  Die dritte Karte trägt auf Wunsch keine mehr.
- Das Innenpolster der Karte ist oben und unten rund doppelt so groß wie
  seitlich – die Rechnung braucht Raum, sonst klebt sie am Rand.

Die Einordnungs-Hinweise („Überschlagsrechnung zur Orientierung“, „Keine
Garantie für konkrete Abrechnung“, „kein Fixlohn“) wurden auf Wunsch entfernt.
Als Einordnung bleiben die Rubrik *Einordnung aus der Praxis*, das Kartenlabel
*Ableitung (Orientierung)* und die FAQ-Antwort zur Vergütung. Wer die
Stundenangabe prominenter macht, sollte das im Blick behalten – eine
Verdienstangabe ohne erkennbaren Vorbehalt ist wettbewerbsrechtlich angreifbar.

## Bilder austauschen

Neue Motive in beiden Formaten ablegen (`.webp` + `.jpg`, gleicher Dateiname)
und im `<picture>`-Block in `index.html` referenzieren. Die `width`/`height`-
Attribute müssen den echten Pixelmaßen entsprechen, sonst springt das Layout
beim Laden (CLS).

Richtwerte: Hero max. 1920px Breite, Inhaltsbilder max. 1200px, JPEG-Qualität 80.

## Datenschutz-Hinweis

Die Seite setzt **keine Cookies**, lädt **nichts von Dritten** und misst keine
Reichweite. Seit das Video raus ist, gibt es technisch nichts mehr
freizuschalten – der Hinweis steht als Information da.

- Banner erscheint beim ersten Besuch (`#consentBanner`), zwei Schaltflächen:
  *Nur notwendige* und *Akzeptieren*
- Gespeichert wird im **localStorage** unter `d2d-consent` als
  `{ v: 2, accepted: <bool>, ts: … }`, nicht in einem Cookie – der Wert muss nie
  zum Server. Gespeichert wird allein, damit der Hinweis nicht bei jedem Besuch
  wieder erscheint.
- Ältere Einträge (`v: 1`, Schlüssel `youtube`) gelten als ungültig; der Hinweis
  erscheint dann einmalig erneut. Das ist Absicht – der Text hat sich geändert.
- Erneut aufrufbar über *Datenschutz-Einstellungen* im Footer
  (`[data-consent="reopen"]`)

**Kommt wieder ein Drittanbieter dazu** (Video, Karte, Tracking), gehört die
eigentliche Freischaltung an die Stelle in `script.js`, wo heute nur gespeichert
wird – und der Abschnitt „Cookies und lokale Speicherung“ in `datenschutz.html`
muss mit. Solange nichts geladen wird, darf die Erklärung auch nichts anderes
behaupten.

## Fit-Check („Passt Door-to-Door zu dir?“)

Unter den beiden Karten steht **ein** Schlussblock (`.recruit-panel__aside`):
„Benötige ich Vorerfahrung?“ und das Schlusswort zur Vergütung. Früher waren
das zwei getrennte Blöcke mit je eigenem Trennstrich – sie sagen dasselbe
weiter, also jetzt ein Abschnitt, eine Linie, eine Schriftgröße.

Alle vier Absätze tragen denselben Grad. Der erste war vorher größer und
heller; zwei Größen in einem zusammenhängenden Text lesen sich wie zwei
Textsorten. Die Betonung trägt der Fettdruck.

Der Block ist mit `max-width: 50rem` schmaler als das Kartenpaar darüber und
sitzt mittig darunter – über die volle Panelbreite liefe die Zeile am Desktop
auf über 100 Zeichen. Der Text darin bleibt linksbündig.

Optisch ist es eine **angedeutete** Karte: Fläche, Haarlinie, Radius, weicher
Schatten – aber kein Rand-Verlauf und kein Schein wie bei den beiden Karten
darüber. Gemessen hebt sich die Fläche mit 1,1–1,5:1 vom Abschnitt ab, die
Kante mit ~1,6:1. Mit der vollen Kartenoptik stünden hier drei gleichrangige
Karten untereinander, und der Fit-Check verlöre seinen Vorrang.

## Über uns – Spaltenaufteilung

Foto rechts, alles andere links: Rubrik, Überschrift, Fließtext, „Ich zeige
dir“, Versprechen und CTA stehen zusammen in `.editorial__copy`.

Vier Dinge hängen daran und müssen zusammen bleiben:

- Das Raster wird bei **1024px** einspaltig. Bei genau dieser Breite löst
  `display: contents` die Textspalte auf, damit ihre Kinder einzeln
  einsortierbar werden – sonst stünde das Foto einspaltig hinter dem CTA, also
  ganz am Ende des Abschnitts. Wer eine der beiden Grenzen verschiebt, muss die
  andere mitziehen, sonst entsteht dazwischen genau dieser Zustand.
- Die aufgelöste Spalte hat eine zweite Folge: jedes Kind ist jetzt eine eigene
  Rasterzeile und bekommt den `gap` obendrauf. Rubrik und Überschrift standen
  dadurch einspaltig 48px statt 16px von ihrem Text entfernt. Deshalb
  `row-gap: 0` einspaltig – den Abstand tragen die Elemente selbst (Lernliste,
  Versprechen, CTA haben ihn ohnehin), nur das Foto braucht einen eigenen
  `margin-top`. Wer den `gap` wieder einschaltet, holt sich die doppelten
  Abstände zurück.
- `align-items: start` statt `center`: die linke Spalte ist deutlich länger als
  das Foto, zentriert schwebte es in der Mitte und die Oberkanten liefen
  auseinander.
- Damit rechts unten keine große leere Fläche bleibt, läuft das Foto ab 1025px
  mit (`position: sticky`). Es klebt am `<picture>`, nicht am `<figure>` – ein
  sticky-Element klebt nur innerhalb seines Elternkastens, und das `<figure>`
  wäre mit `align-items: start` nur so hoch wie das Bild selbst. Deshalb
  `align-self: stretch` am `<figure>` und die ganze Optik (Radius, Schatten,
  Seitenverhältnis) am `<picture>`.

Beide Absätze im Fließtext tragen dieselbe Schrift. Vorher war der erste 19px
und der zweite 16px – zwei Größen in einem zusammenhängenden Text lesen sich
wie zwei verschiedene Textsorten.

## Logo

Zwei Fassungen liegen im Markup und werden per CSS umgeschaltet:

- `logo-dunkel.*` – über dem hellen Hero (Header ungescrollt)
- `logo-hell.*` – auf dem dunklen Header-Balken und im Footer

Der Wechsel läuft über `opacity` auf gestapelten Bildern (`.logo__img--dark` /
`--light`), gesteuert von `.nav--scrolled`. Nur das jeweils sichtbare Bild trägt
ein `alt`, das zweite ist `aria-hidden` – sonst läse ein Screenreader den
Markennamen doppelt vor.

### Warum die Dateien normalisiert sind

**Beide Dateien liegen auf derselben Leinwand (552×154) und sind so ineinander
eingepasst, dass die Wortmarke gleich groß ist und an derselben Stelle sitzt.
Sie sind also nicht die gelieferten Originale.**

Grund: die beiden gelieferten Fassungen sind nicht dasselbe Lockup. Bezogen auf
die Gesamthöhe ist die Wortmarke der hellen Fassung 22 % größer, das Icon dafür
8 % kleiner. Eine gemeinsame CSS-Höhe kann deshalb nur eines von beidem
angleichen – das Logo würde beim Scrollen sichtbar die Größe wechseln.

Die Normalisierung skaliert jede Fassung mit dem geometrischen Mittel aus beiden
nötigen Faktoren. Danach liegt jedes Element rund 9 % daneben statt 20 % – unter
der Schwelle, ab der der Wechsel auffällt. Beide werden zusätzlich so vertikal
verschoben, dass die Mitte der Wortmarke exakt übereinanderliegt; beim
Überblenden springt die Schrift dadurch nicht.

Beim nächsten Logotausch: **nicht einfach ersetzen.** Entweder saubere, aus
derselben Quelle exportierte Fassungen liefern lassen – dann genügt randloses
Beschneiden – oder die Normalisierung wiederholen. Danach die `width`/`height`-
Attribute im Markup auf die echten Pixelmaße setzen, sonst springt das Layout
beim Laden.

Gemessen wird das Ergebnis am gerenderten Bild, nicht an der Datei: die sichtbare
Fassung (`opacity > 0.5`) oben und nach dem Scrollen vergleichen – beide müssen
dieselbe Höhe haben.

## Farbschema

Die Seite läuft durchgehend auf **Gelb** mit warmen Dunkeltönen. Die Gelbtöne
sind aus dem Logo abgeleitet (`#fdc606` / `#fdd406`).
Alle Werte hängen an den Tokens in `:root`:

| Token | Wert | Einsatz |
| ----- | ---- | ------- |
| `--accent` | `#fcc00a` | Markengelb – Flächen, Icons, Deko |
| `--accent-bright` | `#fde047` | helles Gelb auf dunklem Grund |
| `--accent-deep` | `#eda008` | tiefes Gold |
| `--accent-text` | `#9a5b00` | **Text auf hellem Grund** |
| `--ink-950` … `--ink-600` | `#150c04` … `#70471c` | warme Dunkelstufen (früher Navy) |
| `--gray-50` … `--gray-600` | warm getönte Neutralwerte | Flächen und Fließtext |

Zwei Fallstricke, die beim Umstellen aufgefallen sind:

- **`--accent` taugt nicht als Textfarbe.** Auf Weiß erreicht das Gelb nur rund
  1.6:1. Für Text und kleine Icons auf hellem Grund gehört `--accent-text`
  (5.4:1) hin.
- **Weiße Schrift auf Gelb ist unlesbar** (1.3–2.0:1). Der Primär-Button trägt
  deshalb dunkle Schrift auf dem Gelbverlauf – dort sind es 8.7–13.5:1.

Bewusst *nicht* in Markenfarbe: die Haken in den Aufzählungen (`--check`,
`#157f3c`), die grün/rot-Paare der Ja-/Nein-Liste, das grüne Erfolgs-Icon im
Bewerbungsdialog und rote Fehlermeldungen. Alle tragen Bedeutung und nicht
Marke.

## Buttons

Eine CTA-Farbe für die ganze Seite:

| Klasse         | Einsatz                                              |
| -------------- | ---------------------------------------------------- |
| `btn--primary` | Standard-CTA, Gelb-Orange-Verlauf mit dunkler Schrift |
| `btn--light`   | Weiß, für Foto- und Dunkelflächen                    |
| `btn--ghost`   | Sekundär (z. B. „Zurück“ im Bewerbungsdialog)        |
| `btn--sm/lg`   | Größenstufen (40 / 56 px Mindesthöhe)                |
| `btn--glow`    | Pulsierender Rand, nur für den jeweiligen Haupt-CTA   |

Auf Phones sind CTAs **75 % breit und mittig**, 56 px hoch, 17 px Schrift –
groß in der Fläche, aber nicht randlos. Der Button in der Bewerbungskarte
braucht dafür zusätzlich `display: flex`: als `inline-flex` ignoriert er
`margin-inline: auto` und säße links. Die anderen sind Flex-Kinder, dort
zentriert der auto-Rand von allein. Eine zusätzliche Sticky-Leiste am unteren
Rand gibt es bewusst nicht – es zählen nur die CTAs in den Sections.

Ab 768 px abwärts trägt auch der Header keinen CTA mehr (`.nav__cta` auf
`display: none`); der Balken zeigt dort nur Logo und Menü-Button. „Jetzt
bewerben“ steckt auf dem Phone im aufgeklappten Menü und in jeder Section.
Ab 769 px ist der Header-CTA wieder da.

## Mobil-Menü

Der Header liegt über der Menüfläche (`z-index` 1000 gegen 999). Solange nicht
gescrollt wurde, trägt er seinen hellen Verlauf für den Hero – bei offenem Menü
blieb der oberste Streifen dadurch hell, während darunter alles dunkel war.

`script.js` setzt beim Öffnen deshalb `.nav--menu-open` auf den Header. Die
Klasse blendet **beide** Header-Ebenen aus (`::before` Hintergrund, `::after`
heller Verlauf) und schaltet Logo und Burger auf die helle Fassung. Den
Hintergrund liefert dann allein die Menüfläche – der Streifen hat exakt
denselben Ton wie der Rest. Ein eigener dunkler Header-Hintergrund wäre der
falsche Weg: er ist ein anderer Ton und zöge unten eine sichtbare Kante.

Beim Schließen wird `lastY` im Scroll-Handler neu gesetzt. Die Scroll-Sperre
hält die Seite währenddessen auf Position 0 und springt beim Entsperren zurück;
ohne Resync liest der Handler diesen Sprung als kräftige Abwärtsbewegung und
blendet den Header aus – er wäre nach dem Schließen weg.

## Design-Tokens

Alle Farben, Abstände und Timings liegen als CSS Custom Properties in `:root`
(`assets/css/style.css`). Der vertikale Rhythmus hängt an einem einzigen Token:

```css
--section-y: /* Innenabstand oben/unten je Section  */
```

Jede Section nutzt `padding-block: var(--section-y)` – der Abstand zwischen zwei
Sections ist also immer exakt `2 × --section-y`. Für Sonderfälle nicht mit
Multiplikatoren arbeiten, sondern das Token im jeweiligen Breakpoint anpassen.

## Deployment

Cloudflare Pages, Root-Verzeichnis als Output, kein Build-Command.
