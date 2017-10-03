export default function (name) {
    browser.tabs.create({
        url: `../pages/${name}.html`,
    });
}
