function getTabs() {
    return browser.storage.local.get('tabs');
}

function setTabs(tabs) {
    return browser.storage.local.set({ tabs });
}

function clearStorage(callback) {
    return browser.storage.local.clear().then(callback);
}
