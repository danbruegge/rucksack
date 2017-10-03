import collectTabs from './collectTabs';

describe('collectTabs', () => {
    beforeEach(() => {
        window.browser = {
            tabs: {
                query: jest.fn(() => []),
            },
        };
    });

    test('should return empty array', async () => {
        const actual = await collectTabs();

        expect(actual).toEqual([]);
    });

    test('should call tabs.query with currentWindow: true', () => {
        collectTabs();

        const { calls } = window.browser.tabs.query.mock;

        expect(calls.length).toBe(1);
        expect(calls[0][0]).toEqual({ currentWindow: true });
    });
});
