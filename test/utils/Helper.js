const FIELD_MAP = new Map([
  ["eMail", "email"],
  ["Startnummer", "StartNumber"],
  ["Starterklasse", "ageGroup"],
  ["Name", "firstName"],
  ["Nachname", "lastName"],
  ["Team", "team"],
]);

const getRegistrants = (amount) => {
  const registrants = new Array(amount);
  for (let i = 0; i < amount; i++) {
    registrants[i] = {
      [FIELD_MAP.get("eMail")]: `email${i + 1}@werace.de`,
      [FIELD_MAP.get("Startnummer")]: `${i + 1}`,
      [FIELD_MAP.get("Starterklasse")]: "Männer",
      [FIELD_MAP.get("Name")]: `Firstname ${i + 1}`,
      [FIELD_MAP.get("Nachname")]: `Lastname ${i + 1}`,
      [FIELD_MAP.get("Team")]: `Team ${i + 1}`,
    };
  }
  return registrants;
};

export { getRegistrants };
