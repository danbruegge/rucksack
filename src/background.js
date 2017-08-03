import {
    openPage,
    getTabsFromCurrentWindow,
    getNonPinnedTabs,
    removeTabsById,
} from 'app/utils/tabs';
import { saveTabsToStorage } from 'app/utils/storage';

browser.browserAction.onClicked.addListener(onClicked);

function onClicked() {
    getTabsFromCurrentWindow().then(storeAllNonPinnedTabs);

    openPage('dashboard');
}

function storeAllNonPinnedTabs(tabs) {
    const noPinnedTabs = getNonPinnedTabs(tabs);

    saveTabsToStorage(noPinnedTabs);
    removeTabsById(noPinnedTabs);
}
