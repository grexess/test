const ResultKeepingMap = {
  MODE_ONLY_STARTTIME: {
    title: "Start",
    modeDropDown: "Zeit (Start und Stop separat)",
  },
  MODE_ONLY_STOPTIME: { title: "Ziel" },
  MODE_STARTSTOP: {
    title: "Rundkurs",
    modeDropDown: "Zeit (Start und Stop zusammen [Rundkurs] )",
  },
  MODE_WIDTH: {
    title: "Eingabe Weite",
    modeDropDown: "Weite",
  },
  MODE_POINTS: { title: "Eingabe Punkte", modeDropDown: "Punkte" },
};

const DB = {
  QUERY_LIMIT: 1000,
  CLASS_EVENT: "WR_EVENT",
  CLASS_EVENT_TIMETABLE: "WR_EVENT_TIMETABLE",
  CLASS_POPUP: "WR_POPUP",
  CLASS_POPUP_TIMETABLE: "WR_POPUP_TIMETABLE",
  CLASS_ARRAY_REGISTRANTS: "Participants",
  CLASS_FIELD_STARTNUMBER: "StartNumber",
  CLASS_FIELD_STARTTIME: "StartTime",
  CLASS_FIELD_FINISHTIME: "FinishTime",
  CLASS_FIELD_RESULT: "Result",
  CLASS_FIELD_STAGE: "Stage",
  CLASS_FIELD_EVENTID: "EventId",
  CLASS_FIELD_POPUPID: "PopupId",
  CLASS_FIELD_OBJECTID: "objectId",
  REGISTRANT_FIELD_STARTNUMBER: "startNumber",
  USERTYPE_FIELD_EVENTID: "eventId",
  USERTYPE_FIELD_POPUPID: "popupId",
};

export { ResultKeepingMap, DB };
