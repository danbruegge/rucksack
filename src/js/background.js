const PAGES = {
    dashboard: '/html/dashboard.html'
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
    browser.storage.local.get('tabs').then(storage => {
        let tabs = [ tabsToSave ];

        if (storage.hasOwnProperty('tabs')) {
            tabs = [ ...storage.tabs, ...tabs ]
        }

        browser.storage.local.set({ tabs });
    });
}

browser.browserAction.onClicked.addListener(onClicked);
