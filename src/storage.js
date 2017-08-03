export function getTabs() {
    return browser.storage.local.get('tabs');
}

export function setTabs(tabs) {
    return browser.storage.local.set({ tabs });
}
