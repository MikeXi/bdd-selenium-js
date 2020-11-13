var { After, Status } = require("@cucumber/cucumber");

After(async function(scenario) {
    var world = this;

    if (scenario.result.status === Status.FAILED) {
        await driver.takeScreenshot().then(function (screenshot) {
            const img = Buffer.alloc(screenshot.length, screenshot, 'base64');
            world.attach(img, 'image/png');
          });
    }
});
