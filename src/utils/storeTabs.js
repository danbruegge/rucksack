import nanoid from 'nanoid';

export default async function (tabsToSave) {
    const storage = await getTabs();
    const hasTabs = Object.prototype.hasOwnProperty.call(storage, 'tabs');
    const tabs = {
        ...hasTabs && storage.tabs,
        [`tabList-${nanoid()}`]: tabsToSave.map(addUidToTab),
    };

    setTabs(tabs);
}

export function getTabs() {
    return browser.storage.local.get('tabs');
}

export function setTabs(tabs) {
    return browser.storage.local.set({ tabs });
}

export function addUidToTab(tab) {
    return {
        ...tab,
        uid: generateId('tabItem'),
    };
}

export function generateId(prefix = '') {
    return `${prefix && `${prefix}-`}${nanoid()}`;
}
