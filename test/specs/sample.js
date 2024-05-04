const addNew = require("../../actions/addTask");
const SwipeLeft = require("../../actions/swipeLeft");

describe("To Do List Scenario", () => {
  it("Add Item", async () => {
    AddTask = new addNew();
    await AddTask.performTask(); // Ensure await here
  });

  it("Swipe To Delete Checkbox", async () => {
    const Swipe = new SwipeLeft();
    await Swipe.performSwipe(); // Ensure await here
  });
});
