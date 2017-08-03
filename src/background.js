import shortid from 'shortid';

import { getTabs, setTabs } from './storage';

const PAGES = {
    dashboard: '../dashboard.html',
};

function onClicked() {
    collectAllNotPinnedTabs();
    openPage('dashboard');
}

function collectAllNotPinnedTabs() {
    browser
        .tabs
        .query({ currentWindow: true })
        .then((items) => {
            const noPinnedTabs = items.filter(noPinnedTab);
            saveTabsToLocalStorage(noPinnedTabs);

            browser.tabs.remove(noPinnedTabs.map(tab => tab.id));
        });
}

function openPage(pageName) {
    browser.tabs.create({
        url: PAGES[pageName],
    });
}


function noPinnedTab(item) {
    return !item.pinned;
}

function saveTabsToLocalStorage(tabsToSave) {
    getTabs().then((storage) => {
        let tabs = getTabListWithUid(tabsToSave);

        if (Object.prototype.hasOwnProperty.call(storage, 'tabs')) {
            tabs = {
                ...storage.tabs,
                ...tabs,
            };
        }

        setTabs(tabs);
    });
}

function getTabListWithUid(tabList) {
    const listId = shortid.generate();

    return {
        [listId]: setUidForSingleTab(tabList),
    };
}

function setUidForSingleTab(tabList) {
    return tabList.map(tab => ({
        ...tab,
        uid: shortid.generate(),
    }));
}

browser.browserAction.onClicked.addListener(onClicked);
