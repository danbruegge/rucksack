import openPage from './openPage';

describe('openPage', () => {
    beforeEach(() => {
        window.browser = {
            tabs: {
                create: jest.fn(),
            },
        };
    });

    test('should call browser.tabs.create with the right url', () => {
        openPage('dashboard');

        const { calls } = window.browser.tabs.create.mock;

        expect(calls.length).toBe(1);
        expect(calls[0][0]).toEqual({
            url: '../pages/dashboard.html',
        });
    });
});
