import { describe, it, expect, beforeEach } from "vitest";
import { setActivePinia, createPinia } from "pinia";
import { useTimerStore } from "@/scripts/stores/index.js";

describe("TimerStore Test", () => {
  let timerStore = null;

  beforeEach(() => {
    setActivePinia(createPinia());
    timerStore = useTimerStore();
  });

  it("Get MaxStartnumber for Popup", () => {
    expect(timerStore.getMaxStartNumber).toEqual(1); // undefined popup
    timerStore.user = { usertype: { type: "popup", popupType: "code" } };
    expect(timerStore.getMaxStartNumber).toEqual(1000);
    timerStore.user = { usertype: { type: "popup", popupType: "free5x5" } };
    expect(timerStore.getMaxStartNumber).toEqual(5);
  });

  it("Get StartNumbers for Popups", () => {
    timerStore.starters = Array.from({ length: 5 }, (_, i) => ({ StartNumber: (i + 1).toString() }));
    timerStore.user = { usertype: { type: "popup" } };
    expect(timerStore.getStartNumbers).toEqual(["1", "2", "3", "4", "5"]); // each starter is available
    timerStore.starterOnStage = { 1: "anyId", 5: "anyId" };
    expect(timerStore.getStartNumbers).toEqual(["2", "3", "4"]); // 1 and 5 are on stage
  });

  it("Get StartNumbers for Events", () => {
    timerStore.starters = Array.from({ length: 4 }, (_, i) => ({ StartNumber: (i + 1).toString() }));
    timerStore.user = { usertype: { type: "event" } };
    expect(timerStore.getStartNumbers).toEqual([]);
    timerStore.user = { usertype: { type: "event", stageTryCount: 1 } };
    expect(timerStore.getStartNumbers).toEqual(["1", "2", "3", "4"]); // each starter is available
    timerStore.starterOnStage = { 2: "anyId", 3: "anyId" };
    expect(timerStore.getStartNumbers).toEqual(["1", "4"]); // 2 and 3 are on stage
    timerStore.finishedStarter = { 1: ["anyId"] };
    expect(timerStore.getStartNumbers).toEqual(["4"]); // 2 and 3 are on stage, 1 is finished
  });
});
