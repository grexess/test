<template>
  <v-dialog v-model="dialog" width="auto" max-width="500px">
    <v-card>
      <v-card-title class="wrDarkGreen yellow--text justify-center"> Datenschutzerklärung </v-card-title>

      <v-divider class="mx-6"></v-divider>
      <v-card-text>
        <div>
          <v-card-title>Datenschutzerklärung</v-card-title>
          <v-divider class="mx-4" />
          <div class="text-h6"></div>
          <v-card-text
            >Verantwortlicher im Sinne der Datenschutzgesetze, insbesondere der EU- Datenschutzgrundverordnung (DSGVO), ist: <br /><br />
            Jan Orbanz<br />
            E-Mail: Datenschutz@werace.de</v-card-text
          >
          <v-card-subtitle>Ihre Betroffenenrechte</v-card-subtitle>
          <v-card-text>
            <p>Unter den angegebenen Kontaktdaten unseres Datenschutzbeauftragten können Sie jederzeit folgende Rechte ausüben:</p>
            <p></p>
            <ul>
              <li>Auskunft über Ihre bei uns gespeicherten Daten und deren Verarbeitung (Art. 15 DSGVO)</li>
              <li>Berichtigung unrichtiger personenbezogener Daten (Art. 16 DSGVO)</li>
              <li>Löschung Ihrer bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
              <li>
                Einschränkung der Datenverarbeitung, sofern wir Ihre Daten aufgrund gesetzlicher Pflichten noch nicht löschen dürfen (Art.
                18 DSGVO)
              </li>
              <li>Widerspruch gegen die Verarbeitung Ihrer Daten bei uns (Art. 21 DSGVO)</li>
              <li>
                Datenübertragbarkeit, sofern Sie in die Datenverarbeitung eingewilligt haben oder einen Vertrag mit uns abgeschlossen haben
                (Art. 20 DSGVO)
              </li>
            </ul>

            <p>Sofern Sie uns eine Einwilligung erteilt haben, können Sie diese jederzeit mit Wirkung für die Zukunft widerrufen.</p>
            <p>
              Sie können sich jederzeit mit einer Beschwerde an eine Aufsichtsbehörde wenden, z.B. an die zuständige Aufsichtsbehörde des
              Bundeslands Ihres Wohnsitzes oder an die für uns als verantwortliche Stelle zuständige Behörde. Eine Liste der
              Aufsichtsbehörden (für den nichtöffentlichen Bereich) mit Anschrift finden Sie unter:
              <a target="_blank" href="https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"
                >https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html</a
              >.
            </p></v-card-text
          >
          <v-card-subtitle>Erfassung allgemeiner Informationen beim Besuch unserer Website</v-card-subtitle>
          <v-card-text>
            <p><strong>Art und Zweck der Verarbeitung</strong></p>
            <p>
              Wenn Sie auf unsere Website zugreifen, d.h., wenn Sie sich nicht registrieren oder anderweitig Informationen übermitteln,
              werden automatisch Informationen allgemeiner Natur erfasst. Diese Informationen (Server-Logfiles) beinhalten etwa die Art des
              Webbrowsers, das verwendete Betriebssystem, den Domainnamen Ihres Internet-Service-Providers, Ihre IP-Adresse und ähnliches.
            </p>
            <p>Sie werden insbesondere zu folgenden Zwecken verarbeitet:</p>
            <p></p>
            <ul>
              <li>Sicherstellung eines problemlosen Verbindungsaufbaus der Website</li>
              <li>Sicherstellung einer reibungslosen Nutzung unserer Website</li>
              <li>Auswertung der Systemsicherheit und -stabilität</li>
              <li>zur Optimierung unserer Website</li>
            </ul>

            <p>
              Wir verwenden Ihre Daten nicht, um Rückschlüsse auf Ihre Person zu ziehen. Informationen dieser Art werden von uns ggfs.
              anonymisiert statistisch ausgewertet, um unseren Internetauftritt und die dahinterstehende Technik zu optimieren.
            </p>
            <p><strong>Rechtsgrundlage und berechtigtes Interesse</strong></p>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an der Verbesserung der
              Stabilität und Funktionalität unserer Website.
            </p>
            <p><strong>Empfänger</strong></p>
            <p>
              Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Webseite als
              Auftragsverarbeiter tätig werden.
            </p>
            <p><strong>Drittlandtransfer:</strong></p>
            <p>Es erfolgt keine Datentransfer in Drittländer.</p>
            <p><strong>Speicherdauer</strong></p>
            <p>
              Die Daten werden gelöscht, sobald diese für den Zweck der Erhebung nicht mehr erforderlich sind. Dies ist für die Daten, die
              der Bereitstellung der Website dienen, grundsätzlich der Fall, wenn die jeweilige Sitzung beendet ist.
            </p>
            <p>
              Im Falle der Speicherung der Daten in Logfiles ist dies nach spätestens 14 Tagen der Fall. Eine darüberhinausgehende
              Speicherung ist möglich. In diesem Fall werden die IP-Adressen der Nutzer anonymisiert, sodass eine Zuordnung des aufrufenden
              Clients nicht mehr möglich ist.
            </p>
            <p>
              <strong>Bereitstellung vorgeschrieben oder erforderlich</strong>
            </p>
            <p>
              Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne die
              IP-Adresse ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste
              und Services nicht verfügbar oder eingeschränkt sein. Aus diesem Grund ist ein Widerspruch ausgeschlossen.
            </p>
          </v-card-text>
          <v-card-subtitle>Cookies</v-card-subtitle>
          <v-card-text>
            <p>
              Wie viele andere Webseiten verwenden wir auch so genannte „Cookies“. Bei Cookies handelt es sich um kleine Textdateien, die
              auf Ihrem Endgerät (Laptop, Tablet, Smartphone o.ä.) gespeichert werden, wenn Sie unsere Webseite besuchen.
            </p>
            <p>
              Sie können Sie einzelne Cookies oder den gesamten Cookie-Bestand löschen. Darüber hinaus erhalten Sie Informationen und
              Anleitungen, wie diese Cookies gelöscht oder deren Speicherung vorab blockiert werden können. Je nach Anbieter Ihres Browsers
              finden Sie die notwendigen Informationen unter den nachfolgenden Links:
            </p>
            <p></p>
            <ul>
              <li>
                Mozilla Firefox:
                <a
                  target="_blank"
                  href="https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites-
entfernen"
                  >https://support.mozilla.org/de/kb/cookies-loeschen-daten-von-websites- entfernen</a
                >
              </li>
              <li>
                Internet Explorer:
                <a
                  target="_blank"
                  href="https://support.microsoft.com/de-de/help/17442/windows-internet-
explorer-delete-manage-cookies"
                  >https://support.microsoft.com/de-de/help/17442/windows-internet- explorer-delete-manage-cookies</a
                >
              </li>
              <li>
                Google Chrome:
                <a target="_blank" href="https://support.google.com/accounts/answer/61416?hl=de"
                  >https://support.google.com/accounts/answer/61416?hl=de</a
                >
              </li>
              <li>
                Opera:
                <a target="_blank" href="http://www.opera.com/de/help">http://www.opera.com/de/help</a>
              </li>
              <li>
                Safari:
                <a target="_blank" href="https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE"
                  >https://support.apple.com/kb/PH17191?locale=de_DE&viewlocale=de_DE</a
                >
              </li>
            </ul>
            <p><strong>Speicherdauer und eingesetzte Cookies</strong></p>
            <p>
              Soweit Sie uns durch Ihre Browsereinstellungen oder Zustimmung die Verwendung von Cookies erlauben, können folgende Cookies
              auf unseren Webseiten zum Einsatz kommen:
            </p>
            <ul>
              <li>Session-Cookie, unbegrenzte Speicherdauer bzw. abhängig von den Einstellungen im Browser.</li>
            </ul>
          </v-card-text>
          <v-card-subtitle>Technisch notwendige Cookies</v-card-subtitle>
          <v-card-text>
            <p><strong>Art und Zweck der Verarbeitung:</strong></p>
            <p>
              Wir setzen Cookies ein, um unsere Website nutzerfreundlicher zu gestalten. Einige Elemente unserer Internetseite erfordern es,
              dass der aufrufende Browser auch nach einem Seitenwechsel identifiziert werden kann. Der Zweck der Verwendung technisch
              notwendiger Cookies ist, die Nutzung von Websites für die Nutzer zu vereinfachen. Einige Funktionen unserer Internetseite
              können ohne den Einsatz von Cookies nicht angeboten werden. Für diese ist es erforderlich, dass der Browser auch nach einem
              Seitenwechsel wiedererkannt wird.
            </p>
            <p>Für folgende Anwendungen benötigen wir Cookies:</p>
            <ul>
              <li>Zur Session-Verwaltung</li>
              <li>Zur Nutzerregistrierung</li>
              <li>Zum Erstellen und Bearbeiten von Inhalten</li>
            </ul>
            <p><strong>Rechtsgrundlage und berechtigtes Interesse:</strong></p>
            <p>
              Die Verarbeitung erfolgt gemäß Art. 6 Abs. 1 lit. f DSGVO auf Basis unseres berechtigten Interesses an einer
              nutzerfreundlichen Gestaltung unserer Website.
            </p>
            <p><strong>Empfänger:</strong></p>
            <p>
              Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als
              Auftragsverarbeiter tätig werden.
            </p>
            <p><strong>Drittlandtransfer:</strong></p>
            <p>Es erfolgt keine Datentransfer in Drittländer.</p>
            <p>
              <strong>Bereitstellung vorgeschrieben oder erforderlich:</strong>
            </p>
            <p>
              Die Bereitstellung der vorgenannten personenbezogenen Daten ist weder gesetzlich noch vertraglich vorgeschrieben. Ohne diese
              Daten ist jedoch der Dienst und die Funktionsfähigkeit unserer Website nicht gewährleistet. Zudem können einzelne Dienste und
              Services nicht verfügbar oder eingeschränkt sein.
            </p>
          </v-card-text>

          <v-card-subtitle>Widerspruch</v-card-subtitle>
          <v-card-text>
            <p>Lesen Sie dazu die Informationen über Ihr Widerspruchsrecht nach Art. 21 DSGVO weiter unten.</p>
          </v-card-text>

          <v-card-subtitle>Registrierung auf unserer Website</v-card-subtitle>
          <v-card-text>
            <p><strong>Art und Zweck der Verarbeitung:</strong></p>
            <p>
              Für die Registrierung auf unserer Website benötigen wir einige personenbezogene Daten, die über eine Eingabemaske an uns
              übermittelt werden. Zum Zeitpunkt der Registrierung werden zusätzlich folgende Daten erhoben:
            </p>

            <ul>
              <li>Zeitstempel der Registrierung.</li>
            </ul>
            Ihre Registrierung ist für das Bereithalten bestimmter Inhalte und Leistungen auf unserer Website erforderlich.

            <p><strong>Rechtsgrundlage:</strong></p>
            <p>
              Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt auf Grundlage einer Einwilligung des Nutzers (Art. 6
              Abs. 1 lit. a DSGVO).
            </p>
            <p><strong>Empfänger:</strong></p>
            <p>
              Empfänger der Daten sind ggf. technische Dienstleister, die für den Betrieb und die Wartung unserer Website als
              Auftragsverarbeiter tätig werden.
            </p>
            <p><strong>Drittlandtransfer:</strong></p>
            <p>Es erfolgt keine Datentransfer in Drittländer.</p>
            <p><strong>Speicherdauer:</strong></p>
            <p>Daten werden in diesem Zusammenhang nur verarbeitet, solange die entsprechende Einwilligung vorliegt.</p>
            <p>
              <strong>Bereitstellung vorgeschrieben oder erforderlich:</strong>
            </p>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig, allein auf Basis Ihrer Einwilligung. Ohne die
              Bereitstellung Ihrer personenbezogenen Daten können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte gewähren.
            </p>
          </v-card-text>
          <v-card-subtitle>Erbringung kostenpflichtiger Leistungen</v-card-subtitle>
          <v-card-text>
            <p><strong>Art und Zweck der Verarbeitung:</strong></p>
            <p>
              Zur Erbringung kostenpflichtiger Leistungen werden von uns zusätzliche Daten erfragt, wie z. B. Zahlungsangaben, um Ihre
              Bestellung ausführen zu können.
            </p>
            <p><strong>Rechtsgrundlage:</strong></p>
            <p>Die Verarbeitung der Daten, die für den Abschluss des Vertrages erforderlich ist, basiert auf Art. 6 Abs. 1 lit. b DSGVO.</p>
            <p><strong>Empfänger:</strong></p>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
            <p><strong>Drittlandtransfer:</strong></p>
            <p>Es erfolgt keine Datentransfer in Drittländer.</p>
            <p><strong>Speicherdauer:</strong></p>
            <p>
              Wir speichern diese Daten in unseren Systemen bis die gesetzlichen Aufbewahrungsfristen abgelaufen sind. Diese betragen
              grundsätzlich 6 oder 10 Jahre aus Gründen der ordnungsmäßigen Buchführung und steuerrechtlichen Anforderungen.
            </p>
            <p>
              <strong>Bereitstellung vorgeschrieben oder erforderlich:</strong>
            </p>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Ohne die Bereitstellung Ihrer personenbezogenen Daten
              können wir Ihnen keinen Zugang auf unsere angebotenen Inhalte und Leistungen gewähren.
            </p>
          </v-card-text>
          <v-card-subtitle>Kontaktformular</v-card-subtitle>
          <v-card-text>
            <p><strong>Art und Zweck der Verarbeitung:</strong></p>
            <p>
              Die von Ihnen eingegebenen Daten werden zum Zweck der individuellen Kommunikation mit Ihnen gespeichert. Hierfür ist die
              Angabe einer validen E-Mail-Adresse sowie Ihres Namens erforderlich. Diese dient der Zuordnung der Anfrage und der
              anschließenden Beantwortung derselben. Die Angabe weiterer Daten ist optional.
            </p>
            <p><strong>Rechtsgrundlage:</strong></p>
            <p>
              Die Verarbeitung der in das Kontaktformular eingegebenen Daten erfolgt auf der Grundlage eines berechtigten Interesses (Art. 6
              Abs. 1 lit. f DSGVO). Durch Bereitstellung des Kontaktformulars möchten wir Ihnen eine unkomplizierte Kontaktaufnahme
              ermöglichen. Ihre gemachten Angaben werden zum Zwecke der Bearbeitung der Anfrage sowie für mögliche Anschlussfragen
              gespeichert. Sofern Sie mit uns Kontakt aufnehmen, um ein Angebot zu erfragen, erfolgt die Verarbeitung der in das
              Kontaktformular eingegebenen Daten zur Durchführung vorvertraglicher Maßnahmen (Art. 6 Abs. 1 lit. b DSGVO).
            </p>
            <p><strong>Empfänger:</strong></p>
            <p>Empfänger der Daten sind ggf. Auftragsverarbeiter.</p>
            <p><strong>Drittlandtransfer:</strong></p>
            <p>Es erfolgt keine Datentransfer in Drittländer.</p>
            <p><strong>Speicherdauer:</strong></p>
            <p>
              Daten werden spätestens 6 Monate nach Bearbeitung der Anfrage gelöscht. Sofern es zu einem Vertragsverhältnis kommt,
              unterliegen wir den gesetzlichen Aufbewahrungsfristen nach HGB und löschen Ihre Daten nach Ablauf dieser Fristen.
            </p>
            <p>
              <strong>Bereitstellung vorgeschrieben oder erforderlich:</strong>
            </p>
            <p>
              Die Bereitstellung Ihrer personenbezogenen Daten erfolgt freiwillig. Wir können Ihre Anfrage jedoch nur bearbeiten, sofern Sie
              uns Ihren Namen, Ihre E-Mail-Adresse und den Grund der Anfrage mitteilen.
            </p>
          </v-card-text>
          <v-card-subtitle>Verwendung von Matomo</v-card-subtitle>
          <v-card-text>
            <p>
              Soweit Sie ihre Einwilligung gegeben haben, wird auf dieser Website Matomo (vormals Piwik) eingesetzt, eine
              Open-Source-Software zur statistischen Auswertung von Besucherzugriffen. Anbieter der Software Matomo ist die InnoCraft Ltd.,
              150 Willis St, 6011 Wellington, Neuseeland. Matomo setzt einen Cookie (eine Textdatei) auf Ihrem Endgerät, mit dem Ihr Browser
              wiedererkannt werden kann. Werden Unterseiten unserer Website aufgerufen, werden folgende Informationen gespeichert:
            </p>

            <ul>
              <li>die IP-Adresse des Nutzers, gekürzt um die letzten zwei Bytes (anonymisiert)</li>
              <li>die aufgerufene Unterseite und Zeitpunkt des Aufrufs</li>
              <li>die Seite, von der der Nutzer auf unsere Webseite gelangt ist (Referrer)</li>
              <li>welcher Browser mit welchen Plugins, welches Betriebssystem und welche Bildschirmauflösung genutzt wird</li>
              <li>die Verweildauer auf der Website</li>
              <li>die Seiten, die von der aufgerufenen Unterseite aus angesteuert werden</li>
            </ul>

            <p>
              Die Verwendung von Matomo erfolgt zu dem Zweck, die Qualität unserer Website und ihre Inhalte zu verbessern. Dadurch erfahren
              wir, wie die Website genutzt wird und können so unser Angebot stetig optimieren. Durch die Anonymisierung der IP-Adresse um
              sechs Stellen tragen wir dem Interesse des Webseitenbesuchers am Schutz personenbezogener Daten Rechnung. Die Daten werden
              nicht dazu genutzt, den Nutzer der Website persönlich zu identifizieren und werden nicht mit anderen Daten zusammengeführt.
              Die durch das Cookie erzeugten Informationen über Ihre Benutzung dieser Webseite werden nicht an Dritte weitergegeben.
            </p>
            <p><strong>Drittlandtransfer:</strong></p>
            <p>Es erfolgt keine Datentransfer in Drittländer.</p>
            <p><strong>Widerruf der Einwilligung:</strong></p>
            <p>
              Sie können Ihre Einwilligung zur Speicherung und Auswertung Ihrer Daten durch Matomo jederzeit über den unten aufgeführten
              Link widerrufen. Es wird dann ein sogenanntes Opt-Out-Cookie auf Ihrem Gerät gespeichert, das zwei Jahre Gültigkeit hat. Es
              hat zur Folge, dass Matomo keinerlei Sitzungsdaten erhebt. Beachten Sie allerdings, dass das Opt-Out-Cookie gelöscht wird,
              wenn Sie alle Cookies löschen.
            </p>

            <ul>
              <li>
                Momentan ist die Datenerhebung über Matomo noch nicht auf Werace.de aktiv. Sobald das erfolgt, wird hier der entsprechende
                Link eingesetzt.
              </li>
            </ul>
            <p>
              Nähere Informationen zu den Privatsphäre-Einstellungen der Matomo Software finden Sie unter folgendem Link:
              <a href="https://matomo.org/docs/privacy/">https://matomo.org/docs/privacy/</a>. Sie können die Verwendung von Cookies auch
              durch eine entsprechende Einstellung Ihrer Browser Software verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
              Fall gegebenenfalls nicht sämtliche Funktionen dieser Website vollumfänglich werden nutzen können.
            </p>
          </v-card-text>

          <v-card-subtitle>Verwendung von Google Maps</v-card-subtitle>
          <v-card-text>
            <p>
              Auf dieser Website nutzen wir das Angebot von Google Maps. Google Maps wird von Google LLC, 1600 Amphitheatre Parkway,
              Mountain View, CA 94043, USA (nachfolgend „Google“) betrieben. Dadurch können wir Ihnen interaktive Karten direkt in der
              Webseite anzeigen und ermöglichen Ihnen die komfortable Nutzung der Karten-Funktion. Nähere Informationen über die
              Datenverarbeitung durch Google können Sie den Google-Datenschutzhinweisen entnehmen:
              <a href="https://policies.google.com/privacy">https://policies.google.com/privacy</a>. Dort können Sie im Datenschutzcenter
              auch Ihre persönlichen Datenschutz-Einstellungen verändern.
            </p>
            <p>
              Ausführliche Anleitungen zur Verwaltung der eigenen Daten im Zusammenhang mit Google-Produkten finden Sie hier:
              <a href="https://www.dataliberation.org">https://www.dataliberation.or</a>
            </p>
            <p>
              Durch den Besuch der Website erhält Google Informationen, dass Sie die entsprechende Unterseite unserer Webseite aufgerufen
              haben. Dies erfolgt unabhängig davon, ob Google ein Nutzerkonto bereitstellt, über das Sie eingeloggt sind, oder ob keine
              Nutzerkonto besteht. Wenn Sie bei Google eingeloggt sind, werden Ihre Daten direkt Ihrem Konto zugeordnet. Wenn Sie die
              Zuordnung in Ihrem Profil bei Google nicht wünschen, müssen Sie sich vor Aktivierung des Buttons bei Google ausloggen. Google
              speichert Ihre Daten als Nutzungsprofile und nutzt sie für Zwecke der Werbung, Marktforschung und/oder bedarfsgerechter
              Gestaltung seiner Websites. Eine solche Auswertung erfolgt insbesondere (selbst für nicht eingeloggte Nutzer) zur Erbringung
              bedarfsgerechter Werbung und um andere Nutzer des sozialen Netzwerks über Ihre Aktivitäten auf unserer Website zu informieren.
              Ihnen steht ein Widerspruchsrecht zu gegen die Bildung dieser Nutzerprofile, wobei Sie sich zur Ausübung dessen an Google
              richten müssen.
            </p>
            <p><strong>Drittlandtransfer:</strong></p>
            <p>Es erfolgen Datentransfers in Drittländer an Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
            <p><strong>Widerruf der Einwilligung:</strong></p>
            <p>
              Vom Anbieter wird derzeit keine Möglichkeit für einen einfachen Opt-out oder ein Blockieren der Datenübertragung angeboten.
              Wenn Sie eine Nachverfolgung Ihrer Aktivitäten auf unserer Website verhindern wollen, widerrufen Sie bitte im
              Cookie-Consent-Tool Ihre Einwilligung für die entsprechende Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und
              Datenübertragungen. In diesem Fall können Sie unsere Website jedoch ggfs. nicht oder nur eingeschränkt nutzen.
            </p>
          </v-card-text>

          <v-card-subtitle>Eingebettete YouTube-Videos</v-card-subtitle>
          <v-card-text>
            <p>
              Auf unserer Website betten wir YouTube-Videos ein. Betreiber der entsprechenden Plugins ist die YouTube, LLC, 901 Cherry Ave.,
              San Bruno, CA 94066, USA (nachfolgend „YouTube“). Die YouTube, LLC ist einer Tochtergesellschaft der Google LLC, 1600
              Amphitheatre Pkwy, Mountain View, CA 94043, USA (nachfolgend „Google“). Wenn Sie eine Seite mit dem YouTube-Plugin besuchen,
              wird eine Verbindung zu Servern von YouTube hergestellt. Dabei wird YouTube mitgeteilt, welche Seiten Sie besuchen. Wenn Sie
              in Ihrem YouTube-Account eingeloggt sind, kann YouTube Ihr Surfverhalten Ihnen persönlich zuzuordnen. Dies verhindern Sie,
              indem Sie sich vorher aus Ihrem YouTube-Account ausloggen.
            </p>
            <p>Wird ein YouTube-Video gestartet, setzt der Anbieter Cookies ein, die Hinweise über das Nutzerverhalten sammeln.</p>
            <p>
              Weitere Informationen zu Zweck und Umfang der Datenerhebung und ihrer Verarbeitung durch YouTube erhalten Sie in den
              Datenschutzerklärungen des Anbieters. Dort erhalten Sie auch weitere Informationen zu Ihren diesbezüglichen Rechten und
              Einstellungsmöglichkeiten zum Schutze Ihrer Privatsphäre (<a href="https://policies.google.com/privacy"
                >https://policies.google.com/privacy</a
              >).
            </p>
            <p><strong>Drittlandtransfer:</strong></p>
            <p>Es erfolgen Datentransfers in Drittländer an Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA.</p>
            <p><strong>Widerruf der Einwilligung:</strong></p>
            <p>
              Vom Anbieter wird derzeit keine Möglichkeit für einen einfachen Opt-out oder ein Blockieren der Datenübertragung angeboten.
              Wenn Sie eine Nachverfolgung Ihrer Aktivitäten auf unserer Website verhindern wollen, widerrufen Sie bitte im
              Cookie-Consent-Tool Ihre Einwilligung für die entsprechende Cookie-Kategorie oder alle technisch nicht notwendigen Cookies und
              Datenübertragungen. In diesem Fall können Sie unsere Website jedoch ggfs. nicht oder nur eingeschränkt nutzen.
            </p>
          </v-card-text>

          <v-card-subtitle>SSL-Verschlüsselung</v-card-subtitle>
          <v-card-text>
            <p>
              Um die Sicherheit Ihrer Daten bei der Übertragung zu schützen, verwenden wir dem aktuellen Stand der Technik entsprechende
              Verschlüsselungsverfahren (z. B. SSL) über HTTPS.
            </p>
          </v-card-text>

          <v-card-subtitle>Information über Ihr Widerspruchsrecht nach Art. 21 DSGVO</v-card-subtitle>
          <v-card-text>
            <p><strong>Einzelfallbezogenes Widerspruchsrecht</strong></p>
            <p>
              Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, jederzeit gegen die Verarbeitung Sie
              betreffender personenbezogener Daten, die aufgrund Art. 6 Abs. 1 lit. f DSGVO (Datenverarbeitung auf der Grundlage einer
              Interessenabwägung) erfolgt, Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmung gestütztes Profiling im Sinne
              von Art. 4 Nr. 4 DSGVO.
            </p>
            <p>
              Legen Sie Widerspruch ein, werden wir Ihre personenbezogenen Daten nicht mehr verarbeiten, es sei denn, wir können zwingende
              schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihre Interessen, Rechte und Freiheiten überwiegen, oder die
              Verarbeitung dient der Geltendmachung, Ausübung oder Verteidigung von Rechtsansprüchen.
            </p>
            <p><strong>Empfänger eines Widerspruchs</strong></p>
            <p>
              Werace.de -
              <a href="mailto:Datenschutz@werace.de">Datenschutz@werace.de</a>
            </p>
            <p><strong>Änderung unserer Datenschutzbestimmungen</strong></p>
            <p>
              Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen
              entspricht oder um Änderungen unserer Leistungen in der Datenschutzerklärung umzusetzen, z.B. bei der Einführung neuer
              Services. Für Ihren erneuten Besuch gilt dann die neue Datenschutzerklärung.
            </p>
            <p><strong>Fragen an den Datenschutzbeauftragten</strong></p>
            <p>
              Wenn Sie Fragen zum Datenschutz haben, schreiben Sie uns bitte eine E-Mail oder wenden Sie sich direkt an die für den
              Datenschutz verantwortliche Person in unserer Organisation:
            </p>
            <a href="mailto:Datenschutz@werace.de">Datenschutz@werace.de</a>
            <p></p>
          </v-card-text>
          <v-card-text>
            <p style="font-style: italic">
              Die Datenschutzerklärung wurde mithilfe der activeMind AG erstellt, den Experten für externe Datenschutzbeauftragte (Version
              #2020-09-30).
            </p>
          </v-card-text>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="wrDarkGreen" text @click="dialog = false"> Schliessen </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script setup>
import { ref } from "vue";

const dialog = ref(false);
const resolve = ref(null);
const reject = ref(null);

const open = () => {
  dialog.value = true;
  return new Promise((res, rej) => {
    resolve.value = res;
    reject.value = rej;
  });
};

const close = () => {
  resolve.value(true);
  dialog.value = false;
};

defineExpose({
  open,
  close,
});
</script>
