import storeTabs, {
    getTabs,
    setTabs,
    addUidToTab,
    generateId,
} from './storeTabs';

jest.mock('nanoid');

describe('Storage', () => {
    beforeEach(() => {
        global.browser = {
            storage: {
                local: {
                    get: jest.fn(async () => ({})),
                    set: jest.fn(async () => null),
                },
            },
        };
    });

    test('storeTab should return true', async () => {
        await storeTabs([{
            id: 1,
        }]);

        const getCalls = global.browser.storage.local.get.mock.calls;
        const setCalls = global.browser.storage.local.set.mock.calls;

        expect(getCalls.length).toBe(1);
        expect(getCalls[0][0]).toBe('tabs');

        expect(setCalls.length).toBe(1);
        expect(setCalls[0][0]).toEqual({
            tabs: {
                'tabList-generated-id': [
                    {
                        id: 1,
                        uid: 'tabItem-generated-id',
                    },
                ],
            },
        });
    });

    test('getTab() should call browser.storage.local.get', async () => {
        const actual = await getTabs();

        const { calls } = global.browser.storage.local.get.mock;

        expect(calls.length).toBe(1);
        expect(calls[0][0]).toBe('tabs');
        expect(actual).toEqual({});
    });

    test('setTab() should call browser.storage.local.set', async () => {
        const actual = await setTabs({});

        const { calls } = global.browser.storage.local.set.mock;

        expect(calls.length).toBe(1);
        expect(calls[0][0]).toEqual({ tabs: {} });
        expect(actual).toBe(null);
    });

    test('addUidToTab should return tab with uid property', () => {
        const actual = addUidToTab({
            id: 1,
        });

        const expected = {
            id: 1,
            uid: 'tabItem-generated-id',
        };

        expect(actual).toEqual(expected);
    });

    test('generateId should return the right id', () => {
        const actual = generateId();

        const expected = 'generated-id';

        expect(actual).toEqual(expected);
    });

    test('generateId should return the right id with prefix', () => {
        const actual = generateId('item');

        const expected = 'item-generated-id';

        expect(actual).toEqual(expected);
    });
});
