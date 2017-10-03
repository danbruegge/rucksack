browser.browserAction.onClicked.addListener(onClicked);

function onClicked() {
    browser.tabs.create({
        url: '../dashboard.html',
    });
}
