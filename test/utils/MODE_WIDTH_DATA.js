import { getRegistrants } from "./Helper.js";

const ORGANIZER_NAME = "Width-Organizer";
const EVENT_NAME = "Width-Event";
const STAGE_NAME = "First Width Stage";
const STAGE_TRY_COUNT = 2;
const TIMEKEEPER_START_PIN = "444444";

const AMOUNT_REGISTRANTS = 10;

const EVENT_DATA = {
  eventName: EVENT_NAME,
  tecName: EVENT_NAME,
  eventStagesGroup: {
    eventStagesArea: {
      stagePhone: "+49 123456789",
      eventStagesTable: [
        {
          stageName: STAGE_NAME,
          tryCount: STAGE_TRY_COUNT,
          mode: "MODE_WIDTH",
          timeKeeperStartPin: TIMEKEEPER_START_PIN,
        },
      ],
    },
  },
  registrants: getRegistrants(AMOUNT_REGISTRANTS),
};

const ORGANIZER = {
  username: ORGANIZER_NAME,
  password: ORGANIZER_NAME,
  email: `${ORGANIZER_NAME}@werace.de`,
};

const TIMEKEEPER = {
  username: TIMEKEEPER_START_PIN,
  password: TIMEKEEPER_START_PIN,
  email: `${TIMEKEEPER_START_PIN}@werace.de`,
  usertype: {
    type: "event",
    mode: "MODE_WIDTH",
    eventName: EVENT_NAME,
    stage: STAGE_NAME,
    stageTryCount: STAGE_TRY_COUNT,
  },
};

export { EVENT_DATA, EVENT_NAME, ORGANIZER, TIMEKEEPER };
