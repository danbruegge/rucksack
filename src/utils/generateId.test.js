import generateId from './generateId';

jest.mock('nanoid');

describe('Storage', () => {
    test('generateId should return the right id', () => {
        const actual = generateId();

        expect(actual).toEqual('generated-id');
    });

    test('generateId should return the right id with prefix', () => {
        const actual = generateId('item');

        expect(actual).toEqual('item-generated-id');
    });
});
