<template>
  <v-dialog v-model="dialog" width="auto" max-width="470px">
    <v-card>
      <v-card-title class="wrDarkGreen yellow--text justify-center"> AGB </v-card-title>

      <v-card-title>Nutzungsbedingungen</v-card-title>

      <v-card-text>
        Das Unternehmen WeRace, Schumann, Böhme & Orbanz GbR (nachfolgend "WeRace") bietet den Organisatoren von Sport-Veranstaltungen
        (nachfolgend "Veranstalter") eine Online-Plattform zur bequemen und schnellen Abwicklung von Sport-Veranstaltungen aller Art. Die
        Plattform unterstützt die Verwaltung von Sport-Veranstaltungen verschiedenster Art, den Verkauf von Startplätzen an die Kunden der
        Veranstalter (nachfolgend "Teilnehmer"), die Kommunikation zwischen Veranstalter und Teilnehmern (zusammen "Nutzer" genannt) sowie
        die Ergebniserfassung und Präsentation. Dieses Angebot richtet sich an Unternehmer, Institutionen und Privatpersonen.
      </v-card-text>
      <v-divider class="mx-6"></v-divider>
      <v-card-text>
        <v-row class="ma-2" v-for="(item, idx) in data" :key="idx">
          <v-col cols="12" justify="start">{{ item.title }}</v-col>
          <v-row v-for="(c, i) in item.content" :key="i" justify="start">
            <v-col cols="2" class="mx-1 text-left">{{ c.number }}</v-col>
            <v-col cols="9" class="caption">{{ c.text }}</v-col>
            <div v-if="c.sub">
              <v-row v-for="(c1, i) in c.sub" :key="i" justify="start" class="ml-1">
                <v-col class="ml-2 text-right" cols="2">{{ c1.number }}</v-col>
                <v-col class="pl-4 caption" cols="8" offset="1">{{ c1.text }}</v-col></v-row
              >
            </div>
          </v-row>
          <!-- <v-divider class="ma-4"></v-divider> -->
        </v-row>
      </v-card-text>

      <v-card-subtitle class="text-center">Stand: 06. April 2023</v-card-subtitle>

      <v-divider class="mx-8"></v-divider>

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

const data = [
  {
    title: "1. Registrierung",
    content: [
      {
        number: "1.1",
        text: "Mit der Registrierung akzeptiert ein Nutzer die Nutzungsbedingungen von WeRace.",
      },
      {
        number: "1.2",
        text: "Der Nutzer verpflichtet sich, wahrheitsgemäße, aktuelle und vollständige Angaben zu seiner Person zu machen und diese Angaben dauerhaft vollständig und aktuell zu halten.",
      },
    ],
  },
  {
    title: "2. Dienstleistungsangebot",
    content: [
      {
        number: "2.1",
        text: "Der Veranstalter beauftragt WeRace damit, als Vertreter mit Abschlussvollmacht im Namen und für die Rechnung des Veranstalters die auf der Plattform von dem Veranstalter eingestellten Veranstaltungen online anzubieten, Anmeldungen der Teilnehmer entgegenzunehmen, Anmeldebestätigungen an die Teilnehmer zu versenden und die Ergebnisse der Teilnehmer zu erfassen sowie online dazustellen.",
      },
      {
        number: "2.2",
        text: "WeRace ist nicht selbst Veranstalter der angebotenen Veranstaltungen. Diese werden durch den jeweiligen Veranstalter durchgeführt, der auch Anbieter der Startplätze ist.",
      },
      {
        number: "2.3",
        text: "Durch die Anmeldung bzw. dem Erwerb eines Startplatzes zu einer Veranstaltung kommen vertragliche Beziehungen zwischen dem Teilnehmer und dem Veranstalter zustande. Der Veranstalter ist für die Abwicklung und die Erfüllung der zwischen ihm und den Teilnehmern geschlossenen Verträge unabhängig von WeRace verantwortlich.",
      },
      {
        number: "2.4",
        text: "Wie jeder Online-Dienst ist WeRace von der Bereitstellung technischer Infrastruktur durch Dritte abhängig und kann deshalb keine ununterbrochene Verfügbarkeit garantieren. Ereignisse, die außerhalb des Einflussbereichs von WeRace liegen, wie z.B. Stromausfälle, sowie Wartungsbelange können zur zeitweisen Aussetzung der Dienstleistung führen.",
      },
      {
        number: "2.5",
        text: "Für die ordentliche Ergebniserfassung benötigen die dafür bereitgestellten Dienstleitungen von WeRace einen funktionstüchtigen Internetzugang auf dem genutzten Endgerät. Bei schwankender oder nicht verfügbarer Netzwerkabdeckung kann der umfängliche Funktionsumfang von WeRace nicht garantiert werden.",
      },
    ],
  },
  {
    title: "3. Entgelte und Abrechnungen",
    content: [
      {
        number: "3.1",
        text: "Für kostenlose Veranstaltungen, bei denen der Eintritt unentgeltlich angeboten wird, kann der Veranstalter die Grundfunktionen der WeRace-Plattform kostenfrei nutzen. Wird der Eintritt nicht direkt vom Teilnehmer bezahlt, sondern von Dritten für diesen übernommen, gilt die Veranstaltung als kostenpflichtig.",
      },
      {
        number: "3.2",
        text: 'Für kostenpflichtige Veranstaltungen werden gegenüber dem Veranstalter Gebühren für die Softwarenutzung und die Zahlungsabwicklung erhoben (nachfolgend "Servicegebühr"). Die anfallenden Gebühren richten sich nach der auf der WeRace-Webseite veröffentlichten Preistabelle bzw. nach den direkt zwischen WeRace und dem Veranstalter verhandelten Preisen. Der Veranstalter akzeptiert durch das Erstellen und Veröffentlichen einer kostenpflichtigen Veranstaltung die damit verbundene Zahlungsverpflichtung.',
      },
      {
        number: "3.3",
        text: "In Abrechnungen, die dem Veranstalter zur Verfügung gestellt werden, werden zeitnah zu den Transaktionen Umsätze und Gebühren ausgewiesen.",
      },
      {
        number: "3.4",
        text: "Sollte eine Veranstaltung nicht zustande kommen, fallen lediglich Servicegebühren für genutzte Zahlungsabwicklungen über WeRace an.",
      },
      {
        number: "3.5",
        text: "Der Veranstalter kann bestimmen, dass er selbst die Zahlungen z.B. über ein Veranstalterkonto abwickelt. In diesem Fall obliegt dem Veranstalter die Überwachung der Zahlungseingänge, und er kann mit Hilfe der WeRace-Funktionen Zusagen, Absagen oder Nachrichten an die Teilnehmer senden, um den Zahlungsverkehr zu organisieren.",
      },
      {
        number: "3.6",
        text: "WeRace stellt dem Veranstalter nach dem Event eine Rechnung über die angefallenen Servicegebühren. WeRace kann entscheiden, bereits vorher eine Rechnung über die bis dahin angefallenen Servicegebühren zu stellen. Zahlungsabwicklung durch WeRace",
      },
      {
        number: "3.7",
        text: 'Der Veranstalter kann WeRace mit der Dienstleistung beauftragen, die Zahlungen direkt vom Teilnehmer über im Online-Zahlungsverkehr übliche Zahlungsdienstleister einzuziehen und die Zahlungen zu verwahren ("WeRace-Zahlungsdienstleistung").',
      },
      {
        number: "3.8",
        text: "Der Veranstalter erhält die vereinnahmten Startplatzgebühren nach Abzug der Servicegebühren.",
        sub: [
          {
            number: "3.8.1",
            text: "Schlussabrechnung: WeRace überweist dem Veranstalter mit einer Schlussabrechnung 5 Werktage nach der Veranstaltung die eingezogenen Ticketgebühren abzüglich der Servicegebühren.",
          },
          {
            number: "3.8.2",
            text: "Vorabauszahlung: Bereits vor der Veranstaltung kann WeRace auf Anfrage 70% der bis dahin eingezogenen Startplatzgebühren nach Abzug der Servicegebühren auszahlen. Die restlichen 30% der bis dahin eingezogenen Startplatzgebühren gelten zur Absicherung von ggf. auftretenden Rückbuchungen durch die Teilnehmer und werden mit der Schlussabrechnung nach der Veranstaltung überwiesen.",
          },
          {
            number: "3.8.3",
            text: "Weitere Auszahlungen: In Einzelfällen können nach der Schlussabrechnung noch Ticketgebühren auf dem WeRace-Konto eingehen. In diesem Fall werden diese Gebühren nachträglich überwiesen und die Schlussabrechnung um die betreffenden Beträge ergänzt.",
          },
        ],
      },
      {
        number: "3.9",
        text: "Die Überweisungen erfolgen auf eine Kontoverbindung, die im Veranstalterprofil hinterlegt wird. Nach Überweisung der Beträge ist der Vertrag von Seiten WeRace erfüllt.",
      },
      {
        number: "3.10",
        text: "Bei bestimmten Zahlungsarten (z.B. Lastschrift oder Kreditkarte) besteht die Möglichkeit einer Rückbuchung durch den Teilnehmer. Das Risiko für Rückbuchungen trägt allein der Veranstalter.",
      },
      {
        number: "3.11",
        text: "Der Veranstalter kann durch die Zubuchung von Paketen einer festgelegten Laufzeit (z.B. ein Monat oder ein Jahr) weitere Leistungen und Softwarefunktionen für die Abwicklung seiner Veranstaltungen erhalten. Die Pakete und die darin enthaltenen Leistungen sind auf der WeRace-Webseite veröffentlicht bzw. werden auf Anfrage genannt.",
      },
    ],
  },
  {
    title: "4. Verantwortlichkeit für Inhalte des Veranstalters",
    content: [
      {
        number: "4.1",
        text: "Jeder Veranstalter entscheidet eigenständig und allein, welche Informationen er im Zusammenhang mit seiner Veranstaltung einschließlich der Festlegung der Startplatzpreise und geltenden Umsatzsteuersätzen zur Verfügung stellt. WeRace hat hierauf keinen Einfluss; die Verantwortung für die Richtigkeit aller Informationen und Einstellungen der Veranstaltung obliegt dem Veranstalter.",
      },
      {
        number: "4.2",
        text: "Der Veranstalter ist dazu verpflichtet, bei der Nutzung der WeRace-Dienstleistungen wahrheitsgemäße Angaben zu machen und stets nach bestem Wissen und Gewissen zu handeln.",
      },
      {
        number: "4.3",
        text: "Der Veranstalter ist dazu verpflichtet, bei der Nutzung der WeRace-Dienstleistungen geltendes Gesetz sowie die Rechte anderer Nutzer bzw. Dritter zu beachten.",
      },
      {
        number: "4.4",
        text: "WeRace übernimmt keine Verantwortung für die von den Veranstaltern bereitgestellten Inhalte, sowie für Inhalte auf vom Veranstalter verlinkten, externen Webseiten.",
      },
    ],
  },
  {
    title: "5. Haftung",
    content: [
      {
        number: "5.1",
        text: "Schadensersatzansprüche gegen WeRace oder dessen Erfüllungsgehilfen, die leichte Fahrlässigkeit voraussetzen, bestehen nur, wenn eine wesentliche Vertragspflicht oder Kardinalpflicht verletzt worden ist und sind in diesem Fall der Höhe nach auf den typischen, vorhersehbaren Schaden beschränkt.",
      },
      {
        number: "5.2",
        text: "Die Haftung für entgangenen Gewinn ist ausgeschlossen.",
      },
    ],
  },
  {
    title: "6. Beendigung des Vertrages",
    content: [
      {
        number: "6.1",
        text: "Der Veranstalter kann sein Konto bei WeRace jederzeit ohne Angabe von Gründen löschen und die Nutzung von WeRace-Dienstleistungen beenden. Zu diesem Zeitpunkt noch bestehende Ansprüche von WeRace auf Servicegebühren bleiben hiervon unberührt.",
      },
      {
        number: "6.2",
        text: "WeRace kann das Nutzungsverhältnis bei Vorliegen eines wichtigen Grundes nach eigenem Ermessen jederzeit beenden und die Inhalte eines Veranstalters entfernen. Ein wichtiger Grund liegt dann vor, wenn es für WeRace unter Berücksichtigung der Umstände des Einzelfalls und unter Abwägung der Interessen von WeRace und des Veranstalters nicht zumutbar ist, das Nutzungsverhältnis fortzusetzen. Wichtige Gründe sind insbesondere der Verstoß des Veranstalters gegen gesetzliche Vorschriften oder diese Nutzungsbedingungen sowie die erhebliche Beeinträchtigung des Image von WeRace durch die spezifische Nutzung der WeRace-Dienstleistungen. Der Veranstalter stimmt zu, dass WeRace bei einer Vertragsbeendigung aus den oben genannten Gründen weder Nutzern noch Dritten gegenüber haftet.",
      },
    ],
  },
  {
    title: "7. Schlußbestimmungen",
    content: [
      {
        number: "7.1",
        text: "Änderungen dieser Nutzungsbedingungen bedürfen der Schriftform. Erklärungen der Parteien können telekommunikativ oder per Brief übermittelt werden. Nebenabreden bestehen nicht.",
      },
      {
        number: "7.2",
        text: "Sollte eine Regelung dieser Nutzungsbedingungen unwirksam sein, wird die Wirksamkeit der übrigen Regelungen davon nicht berührt. Die Parteien verpflichten sich, anstelle der unwirksamen Regelung eine dieser Bestimmung möglichst nahekommende wirksame Regelung zu treffen. Das gilt entsprechend bei Regelungslücken.",
      },
      {
        number: "7.3",
        text: "WeRace behält sich vor, sein Angebot weiter zu entwickeln und abweichende Dienste anzubieten, außer dies ist für den Veranstalter nicht zumutbar.",
      },
      {
        number: "7.4",
        text: "WeRace darf den Veranstalter mit Namen und/oder Logo in seiner Referenzkundenliste aufnehmen.",
      },
      {
        number: "7.5",
        text: "Es gilt deutsches Recht unter Ausschluss des internationalen Privatrechts (IPR) und des UN-Kaufrechts.",
      },
      {
        number: "7.6",
        text: "Erfüllungsort und Gerichtsstand sind, soweit gesetzlich zulässig, der Sitz von WeRace",
      },
    ],
  },
];

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
