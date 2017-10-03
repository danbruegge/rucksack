import { openPage } from 'app/utils';

browser.browserAction.onClicked.addListener(onClicked);

function onClicked() {
    openPage('dashboard');
}
