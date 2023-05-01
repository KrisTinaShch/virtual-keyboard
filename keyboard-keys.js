export { keyboardKeys };
// generate simple keyboard 
const keyboardKeys = [
    [
        {
            keyName: 'Backquote',
            lang: { en: '`', ru: 'ё' },
        },
        {
            keyName: 'Digit1',
            lang: { en: '1', ru: '1' },
        },
        {
            keyName: 'Digit2',
            lang: { en: '2', ru: '2' },
        },
        {
            keyName: 'Digit3',
            lang: { en: '3', ru: '3' },
        },
        {
            keyName: 'Digit4',
            lang: { en: '4', ru: '4' },
        },
        {
            keyName: 'Digit5',
            lang: { en: '5', ru: '5' },
        },
        {
            keyName: 'Digit6',
            lang: { en: '6', ru: '6' },
        },
        {
            keyName: 'Digit7',
            lang: { en: '7', ru: '7' },
        },
        {
            keyName: 'Digit8',
            lang: { en: '8', ru: '8' },
        },
        {
            keyName: 'Digit9',
            lang: { en: '9', ru: '9' },
        },
        {
            keyName: 'Digit0',
            lang: { en: '0', ru: '0' },
        },
        {
            keyName: 'Minus',
            lang: { en: '-', ru: '-' },
        },
        {
            keyName: 'Equal',
            lang: { en: '=', ru: '=' },
        },
        {
            keyName: 'Backspace',
            func: true,
            lang: { en: 'Back', ru: 'Back' }
        },
        {
            keyName: 'Delete',
            func: true,
            lang: { en: 'Del', ru: 'Del' },
        },
    ],
    [
        {
            keyName: 'Tab',
            func: true,
            lang: { en: 'Tab', ru: 'Tab' }
        },
        {
            keyName: 'KeyQ',
            lang: { en: 'q', ru: 'й' },

        },
        {
            keyName: 'KeyW',
            lang: { en: 'w', ru: 'ц' },
        },
        {
            keyName: 'KeyE',
            lang: { en: 'e', ru: 'у' },
        },
        {
            keyName: 'KeyR',
            lang: { en: 'r', ru: 'к' },
        },
        {
            keyName: 'KeyT',
            lang: { en: 't', ru: 'е' },
        },
        {
            keyName: 'KeyY',
            lang: { en: 'y', ru: 'н' },
        },
        {
            keyName: 'KeyU',
            lang: { en: 'u', ru: 'г' },
        },
        {
            keyName: 'KeyI',
            lang: { en: 'i', ru: 'ш' },
        },
        {
            keyName: 'KeyO',
            lang: { en: 'o', ru: 'щ' },
        },
        {
            keyName: 'KeyP',
            lang: { en: 'p', ru: 'з' },
        },
        {
            keyName: 'BracketLeft',
            lang: { en: '[', ru: 'х' },
        },
        {
            keyName: 'BracketRight',
            lang: { en: ']', ru: 'ъ' },
        },
        {
            keyName: 'Backslash',
            lang: { en: '\\', ru: '\\' },
        },
    ],
    [
        {
            keyName: 'CapsLock',
            func: false,
            lang: { en: 'Caps', ru: 'Caps' },
        },
        {
            keyName: 'KeyA',
            lang: { en: 'a', ru: 'ф' },
        },
        {
            keyName: 'KeyS',
            lang: { en: 's', ru: 'ы' },
        },
        {
            keyName: 'KeyD',
            lang: { en: 'd', ru: 'в' },
        },
        {
            keyName: 'KeyF',
            lang: { en: 'f', ru: 'а' },
        },
        {
            keyName: 'KeyG',
            lang: { en: 'g', ru: 'п' },
        },
        {
            keyName: 'KeyH',
            lang: { en: 'h', ru: 'р' },
        },
        {
            keyName: 'KeyJ',
            lang: { en: 'j', ru: 'о' },
        },
        {
            keyName: 'KeyK',
            lang: { en: 'k', ru: 'л' },
        },
        {
            keyName: 'KeyL',
            lang: { en: 'l', ru: 'д' },
        },
        {
            keyName: 'Semicolon',
            lang: { en: ';', ru: 'ж' },
        },
        {
            keyName: 'Quote',
            lang: { en: "'", ru: 'э' },
        },
        {
            keyName: 'Enter',
            func: true,
            lang: { en: 'Enter', ru: 'Enter' }
        },
    ],
    [
        {
            keyName: 'ShiftLeft',
            func: true,
            lang: { en: 'Shift', ru: 'Shift' },
            width: 'extra-wide',
        },
        {
            keyName: 'KeyZ',
            lang: { en: 'z', ru: 'я' },
        },
        {
            keyName: 'KeyX',
            lang: { en: 'x', ru: 'ч' },
        },
        {
            keyName: 'KeyC',
            lang: { en: 'c', ru: 'с' },
        },
        {
            keyName: 'KeyV',
            lang: { en: 'v', ru: 'м' },
        },
        {
            keyName: 'KeyB',
            lang: { en: 'b', ru: 'и' },
        },
        {
            keyName: 'KeyN',
            lang: { en: 'n', ru: 'т' },
        },
        {
            keyName: 'KeyM',
            lang: { en: 'm', ru: 'ь' },
        },
        {
            keyName: 'Comma',
            lang: { en: ',', ru: 'б' },
        },
        {
            keyName: 'Period',
            lang: { en: '.', ru: 'ю' },
        },
        {
            keyName: 'Slash',
            lang: { en: '/', ru: '.' },
        },
        {
            keyName: 'ArrowUp',
            func: true,
            lang: { en: '⯅', ru: '⯅' },
        },
        {
            keyName: 'ShiftRight',
            func: true,
            lang: { en: 'Shift', ru: 'Shift' },
        },
    ],
    [
        {
            keyName: 'ControlLeft',
            func: false,
            lang: { en: 'Ctrl', ru: 'Ctrl' },
        },
        {
            keyName: 'AltLeft',
            func: false,
            lang: { en: 'Alt', ru: 'Alt' },
        },
        {
            keyName: 'Space',
            lang: { en: ' ', ru: ' ' },
        },
        {
            keyName: 'AltRight',
            func: true,
            lang: { en: 'Alt', ru: 'Alt' },
        },
        {
            keyName: 'ControlRight',
            func: true,
            lang: { en: 'Ctrl', ru: 'Ctrl' },
        },
        {
            keyName: 'ArrowLeft',
            func: true,
            lang: { en: '⯇', ru: '⯇' },
        },
        {
            keyName: 'ArrowDown',
            func: true,
            lang: { en: '⯆', ru: '⯆' },
        },
        {
            keyName: 'ArrowRight',
            func: true,
            lang: { en: '⯈', ru: '⯈' },
        },
    ],
];

