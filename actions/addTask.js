const { expect } = require("chai");

class addNew {
    async performTask() {
        await $("android.widget.Button").click();
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
    }
}

module.exports = addNew;