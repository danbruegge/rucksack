export function getTabs() {
    return browser.storage.local.get('tabs');
}

export function setTabs(tabs) {
    return browser.storage.local.set({ tabs });
}

export function clearStorage(callback) {
    return browser.storage.local.clear().then(callback);
}
