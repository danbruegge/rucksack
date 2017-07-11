import { getTabs, setTabs } from './storage';

const PAGES = {
    dashboard: '../dashboard.html'
};

function onClicked() {
    collectAllNotPinnedTabs();
    openPage('dashboard');
}

function collectAllNotPinnedTabs() {
    browser
        .tabs
        .query({ currentWindow: true })
        .then(items => {
            const noPinnedTabs = items.filter(noPinnedTab);
            saveTabsToLocalStorage(noPinnedTabs);

            browser.tabs.remove(noPinnedTabs.map(tab => tab.id));
        });
}

function openPage(pageName) {
    browser.tabs.create({
        url: PAGES[pageName]
    });
}


function noPinnedTab(item) {
    return !item.pinned;
}

function saveTabsToLocalStorage(tabsToSave) {
    getTabs().then(storage => {
        let tabs = [ tabsToSave ];

        if (storage.hasOwnProperty('tabs')) {
            tabs = [ ...storage.tabs, ...tabs ]
        }

        setTabs(tabs);
    });
}

browser.browserAction.onClicked.addListener(onClicked);
