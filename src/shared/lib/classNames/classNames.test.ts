import { classNames } from './classNames';

describe('classNames', () => {
    test('with only first param', () => {
        expect(classNames('someClass')).toBe('someClass');
    });

    test('with additional class', () => {
        expect(classNames('someClass', {}, ['class1', 'class2']))
            .toBe('someClass class1 class2');
    });

    test('with mods class', () => {
        expect(classNames(
            'someClass',
            { hovered: true, scrollable: false },
            ['class1'],
        )).toBe('someClass class1 hovered');
    });

    test('with mods class and undefined', () => {
        expect(classNames(
            'someClass',
            { hovered: undefined, scrollable: true },
            [],
        )).toBe('someClass scrollable');
    });
});
