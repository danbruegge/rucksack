import { addUidToTab, generateTabListUid } from 'app/utils/tabs';

export function getTabs() {
    return browser.storage.local.get('tabs');
}

export function setTabs(tabs) {
    return browser.storage.local.set({ tabs });
}

export function saveTabsToStorage(tabsToSave) {
    getTabs().then((storage) => {
        const hasTabs = Object.prototype.hasOwnProperty.call(storage, 'tabs');
        const tabs = {
            ...hasTabs && storage.tabs,
            [generateTabListUid()]: tabsToSave.map(addUidToTab),
        };

        setTabs(tabs);
    });
}
