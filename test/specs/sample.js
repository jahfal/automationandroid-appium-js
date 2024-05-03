const { expect } = require("chai");

describe("To Do List Scenario", () => {
  beforeEach(async () => {
    // Click the add button
    await $("android.widget.Button").click();
  });

  it("Add Item and Swipe Checkbox", async () => {
    // Access the task input element by its class name and set value
    const taskInput = $("android.widget.EditText");
    await taskInput.click();
    await taskInput.setValue("Test");

    // Click the confirm button
    await $('//android.widget.Button[@content-desc="Confirm"]').click();

    // Assert that the added task exists in the list
    const element = await $('//android.widget.CheckBox[@content-desc="Test"]');
    const contentDesc = await element.getAttribute("content-desc");
    expect(contentDesc).to.equal("Test");
    console.log("Content-desc sesuai", contentDesc); // Log the text content of the element

    // Click on the SWIPE ICON
    const SWIPE_ICON_HOME_SCREEN = `~Test`;
    await $(SWIPE_ICON_HOME_SCREEN).click();

    const anchor = 810;
    const startPoint = 748;
    const endPoint = 210;

    for (let swipeTime = 0; swipeTime < 5; swipeTime++) {
      await browser.performActions([
        {
          type: "pointer",
          id: "finger1",
          parameters: { pointerType: "touch" },
          actions: [
            { type: "pointerMove", duration: 0, x: startPoint, y: anchor },
            { type: "pointerDown", button: 0 },
            { type: "pause", duration: 1000 },
            { type: "pointerMove", duration: 1000, x: endPoint, y: anchor },
            { type: "pointerUp", button: 0 },
          ],
        },
      ]);
    }
    await $(
      '//android.widget.CheckBox[@content-desc="Test"]/android.widget.Button'
    ).click();
  });
});
