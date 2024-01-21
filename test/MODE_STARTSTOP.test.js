import { describe, it, expect, beforeAll } from "vitest";

import { PARSE_APP_ID, PARSE_JAVASCRIPT_ID, PARSE_MASTER_KEY, PARSE_SERVER_URL } from "./utils/Config";
import { getUser, createUser, deleteUser, deleteEvent, assignUserTo_wrOrganizer_Role } from "./utils/ParseHelper";
import { EVENT_NAME, ORGANIZER, EVENT_DATA, TIMEKEEPER } from "./utils/MODE_STARTSTOP_DATA";

import Parse from "parse/dist/parse.min.js";

describe("Test MODE_STARTSTOP", () => {
  let wrEvent;

  beforeAll(async () => {
    console.log("beforeAll");
    Parse.serverURL = PARSE_SERVER_URL;
    Parse.initialize(PARSE_APP_ID, PARSE_JAVASCRIPT_ID, PARSE_MASTER_KEY);

    await deleteEvent(EVENT_NAME);
    await deleteUser(ORGANIZER.username);
    await deleteUser(TIMEKEEPER.username);
  });

  it("Create OrganizerUser", async () => {
    let user = await createUser(ORGANIZER);
    user = await getUser(user.objectId);
    await assignUserTo_wrOrganizer_Role(user);
    expect(user.username).toEqual(ORGANIZER.username);
  });

  it("Create MODE_STARTSTOP_Event", async () => {
    (EVENT_DATA.createdBy = await Parse.User.logIn(ORGANIZER.username, ORGANIZER.password)),
      (wrEvent = await new Parse.Object("WR_EVENT").save(EVENT_DATA));
    expect(wrEvent.get("eventName")).toEqual(EVENT_NAME);
  });

  it("Create MODE_STARTSTOP_Event_TimeKeeper", async () => {
    TIMEKEEPER.usertype.id = wrEvent.id;
    const user = await getUser((await createUser(TIMEKEEPER)).objectId);
    expect(user.username).toEqual(TIMEKEEPER.username);
  });
});
