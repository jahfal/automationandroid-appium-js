class SwipeLeft {
    async performSwipe() {
        // Click on the SWIPE ICON
        const SWIPE_ICON_HOME_SCREEN = `~Test`;
        await $(SWIPE_ICON_HOME_SCREEN).click();

        const anchor = 810;
        const startPoint = 748;
        const endPoint = 210;

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
        await $(
            '//android.widget.CheckBox[@content-desc="Test"]/android.widget.Button'
          ).click();
    }
}

module.exports = SwipeLeft; 
