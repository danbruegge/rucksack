{
    const $TabListContainer = document.querySelector('#TabListContainer');
    const $ClearStorage = document.querySelector('#ClearStorage');
    const $ReloadStorage = document.querySelector('#ReloadStorage');

    let TABS = [];

    function renderTabLists() {
        getTabs().then(storage => {
            if (!storage.hasOwnProperty('tabs')) {
                $TabListContainer.innerHTML = '';
                return false;
            }

            let lists = [];

            TABS = storage.tabs;

            TABS.map((list, index) => {
                lists = [ ...lists, renderTabList(list, index) ];
            });

            $TabListContainer.innerHTML = lists.join('');
            $TabListContainer.addEventListener('click', openTabs);
        });
    }

    function renderTabList(list, id) {
        let items = [];

        list.map(item => {
            items = [ ...items, renderTabListItem(item.url, item.title) ];
        });

        return `
            <div>
                <ul>${items.join('')}</ul>
                <button class="open-tabs" data-id="${id}">
                    Open list #${id}
                </button>
            </div>
        `;
    }

    function openTabs(event) {
        if (event.target.classList.contains('open-tabs')) {
            const id = +event.target.dataset.id;
            const tabsToOpen = TABS[id];

            tabsToOpen.map(tab => {
                browser.tabs.create({
                    active: false,
                    url: tab.url
                });
            });

            const tabs = TABS = [
                ...TABS.slice(0, id),
                ...TABS.slice(id + 1)
            ];

            setTabs(TABS).then(() => renderTabLists());
        }
    }

    function renderTabListItem(href, content) {
        return `
            <li>
                <a href="${href}">${content}</a>
            </li>
        `;
    }

    function onClearStorageClick() {
        clearStorage(renderTabLists);
    }

    function onReloadStorageClick() {
        renderTabLists();
    }

    $ClearStorage.addEventListener('click', onClearStorageClick);
    $ReloadStorage.addEventListener('click', onReloadStorageClick);

    document.addEventListener('DOMContentLoaded', renderTabLists);
}
