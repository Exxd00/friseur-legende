import { Metadata } from "next";
import { business } from "@/lib/data";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: `Datenschutzerklärung von ${business.name}`
};

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen py-20 pt-28">
      <div className="container mx-auto container-padding">
        <div className="max-w-3xl mx-auto">
          <h1 className="heading-lg mb-8">
            <span className="text-gradient">Datenschutzerklärung</span>
          </h1>

          <div className="prose prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Datenschutz auf einen Blick
              </h2>
              <h3 className="text-lg font-medium text-foreground mb-2">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                2. Datenerfassung auf dieser Website
              </h2>
              <h3 className="text-lg font-medium text-foreground mb-2">
                Wer ist verantwortlich für die Datenerfassung auf dieser Website?
              </h3>
              <p className="text-muted-foreground mb-4">
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber.
                Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>

              <h3 className="text-lg font-medium text-foreground mb-2">
                Wie erfassen wir Ihre Daten?
              </h3>
              <p className="text-muted-foreground mb-4">
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen.
                Hierbei kann es sich z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
              </p>
              <p className="text-muted-foreground">
                Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website
                durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser,
                Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Ihre Rechte
              </h2>
              <p className="text-muted-foreground mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und
                Zweck Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein
                Recht, die Berichtigung oder Löschung dieser Daten zu verlangen.
              </p>
              <p className="text-muted-foreground">
                Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie diese
                Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht,
                unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen
                Daten zu verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Kontaktformular
              </h2>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus
                dem Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert.
              </p>
              <p className="text-muted-foreground">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO,
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur
                Durchführung vorvertraglicher Maßnahmen erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Bilder-Upload
              </h2>
              <p className="text-muted-foreground">
                Wenn Sie Bilder über unser Kontaktformular hochladen, werden diese ausschließlich
                zur Bearbeitung Ihrer Anfrage verwendet. Die Bilder werden automatisch komprimiert
                und nach Bearbeitung Ihrer Anfrage gelöscht. Es erfolgt keine Weitergabe an Dritte.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Cookies
              </h2>
              <p className="text-muted-foreground">
                Unsere Website verwendet keine Cookies zu Tracking-Zwecken. Es werden lediglich
                technisch notwendige Cookies verwendet, die für den Betrieb der Website erforderlich sind.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                7. SSL-Verschlüsselung
              </h2>
              <p className="text-muted-foreground">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte eine SSL-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran,
                dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">
                8. Kontakt
              </h2>
              <p className="text-muted-foreground">
                Bei Fragen zum Datenschutz können Sie uns jederzeit kontaktieren:<br />
                Telefon: {business.phone}<br />
                WhatsApp: {business.whatsapp}
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
