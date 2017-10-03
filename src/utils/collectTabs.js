export default function () {
    return browser.tabs.query({ currentWindow: true });
}
