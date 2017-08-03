import shortid from 'shortid';

import { PAGES, PREFIX } from 'app/config';

export function openPage(pageName) {
    browser.tabs.create({
        url: PAGES[pageName],
    });
}

export function getTabs(query) {
    return browser.tabs.query(query);
}

export function getTabsFromCurrentWindow() {
    return getTabs({ currentWindow: true });
}

export function removeTabsById(tabs) {
    browser.tabs.remove(tabs.map(tab => tab.id));
}

export function getNonPinnedTabs(tabs) {
    return tabs.filter(noPinnedTab);
}

export function noPinnedTab(tab) {
    return !tab.pinned;
}

export function addUidToTab(tab) {
    return {
        ...tab,
        uid: `${PREFIX.tabItem}${shortid.generate()}`,
    };
}

export function generateTabListUid() {
    return `${PREFIX.tabList}${shortid.generate()}`;
}
