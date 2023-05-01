import { keyboardKeys } from './keyboard-keys.js';

const body = document.querySelector('body'); // create basic html structure 

// create container for project

const section = document.createElement('section');
section.className = 'container';

// create title in project container
const title = document.createElement('h2');
title.className = 'title';
title.innerText = 'RSS Виртуальная клавиатура';

section.appendChild(title);

// create title in project container
const textarea = document.createElement('textarea');
textarea.className = 'textarea';

section.appendChild(textarea);

// create container for keyboard
const keyboard = document.createElement('div');
keyboard.className = 'keyboard-container';

// add everything in body
section.appendChild(keyboard);
body.appendChild(section);

const keyboardKeysItems = {};

function addKeys() {

    keyboardKeys.forEach((row) => {
        const keyboardRow = document.createElement('div');
        keyboardRow.className = 'keyboard-row';

        row.forEach((key) => {
            keyboardKeysItems[key.keyName] = key.lang;
            if (key.func) {
                keyboardKeysItems[key.keyName].func = key.func;
            }

            const keyItem = document.createElement('button');
            keyItem.setAttribute('id', key.keyName);
            keyItem.setAttribute('type', 'button');
            keyItem.className = 'key-item';

            keyItem.textContent = key.lang.en;
            keyboardRow.appendChild(keyItem);
        })
        keyboard.appendChild(keyboardRow);
    });


}

addKeys();

// change language and safe language
const keyItem = document.querySelectorAll('.key-item');

let currentLanguage = 'en';
let caps = false;
const keyItemsArray = [...keyItem];
function changeLanguage() {
    document.addEventListener('keydown', (event) => {
        if (event.code === 'AltLeft') {
            keyboardKeysItems[event.code].func = true;
        }
        if (event.code === 'ControlLeft') {
            keyboardKeysItems[event.code].func = true;
        }
        if (keyboardKeysItems['ControlLeft'].func && keyboardKeysItems['AltLeft'].func) {
            if (currentLanguage == 'en') {
                keyItem.forEach((keyTranslation) => {
                    keyTranslation.innerHTML = keyboardKeysItems[keyTranslation.id]["ru"];
                });
                currentLanguage = 'ru';
            }
            else {
                keyItem.forEach((keyTranslation) => {
                    keyTranslation.innerHTML = keyboardKeysItems[keyTranslation.id]["en"];
                })
                currentLanguage = 'en';
            }

        }
    });
    document.addEventListener('keyup', (event) => {
        if (event.code === 'AltLeft') {
            keyboardKeysItems[event.code].func = false;
        }
        if (event.code === 'ControlLeft') {
            keyboardKeysItems[event.code].func = false;
        }
    });
}
changeLanguage();

function onClickInTextArea() {


    let shift = false;
    let notSpecialKey = false;
    // при нажатии на обычные клавиши вводить их в текстовое поле

    document.addEventListener('keydown', (event) => {
        event.preventDefault();
        if (event.code != 'Delete' && event.code != 'Backspace' && event.code != 'Enter' && event.code != 'CapsLock' && caps == false && event.code != 'Tab' && event.code != 'ShiftLeft' && event.code != 'ShiftRight' && event.code != 'ControlLeft' && event.code != 'ControlRight' && event.code != 'AltLeft' && event.code != 'AltRight' && keyboardKeysItems[event.code] && keyboardKeysItems[event.code][currentLanguage]) {
            if (shift) {
                switchOnShift(shift, event.key);
            } else {
                textarea.value += keyboardKeysItems[event.code][currentLanguage];
            }
            notSpecialKey = true;

        }
        else if (event.code == 'Delete' || event.code == 'Backspace') {
            let currentTextareaValue = textarea.value;
            if (currentTextareaValue.length > 0) {
                textarea.value = currentTextareaValue.slice(0, currentTextareaValue.length - 1);
            }
            notSpecialKey = true;
        }
        else if (event.code == 'Enter') {
            textarea.value += `\n`;
            notSpecialKey = true;
        }
        else if (event.code == 'CapsLock') {
            caps = !caps;
            notSpecialKey = true;
        }
        else if (event.code == 'Tab') {
            textarea.value += `\t`;
            notSpecialKey = true;
        }
        else if (event.code == 'ShiftLeft') {
            shift = true;
            notSpecialKey = true;
        }

        if (caps) {
            if (event.code != 'CapsLock' && event.code != 'Backspace' && event.code != 'Delete' && event.code != 'Tab' && event.code != 'ShiftLeft' && event.code != 'ShiftRight' && event.code != 'ControlLeft' && event.code != 'ControlRight' && event.code != 'AltLeft' && event.code != 'AltRight' && keyboardKeysItems[event.code] && keyboardKeysItems[event.code][currentLanguage]) {
                textarea.value += keyboardKeysItems[event.code][currentLanguage].toUpperCase();

            }
        }
        if (keyboardKeysItems[event.code] && keyboardKeysItems[event.code][currentLanguage]) {
            // при нажатии на клавиши подсвечивать их
            let keyIndex = keyItemsArray.findIndex((key) => key.id === event.code);
            keyItemsArray[keyIndex].classList.add('_key-active');
        }


    });
    document.addEventListener('keyup', (event) => {
        if (event.code == 'ShiftLeft') {
            shift = false;

        }
        if (keyboardKeysItems[event.code] && keyboardKeysItems[event.code][currentLanguage]) {
            // при отжатии на клавиши убирать подсветку
            let keyIndex = keyItemsArray.findIndex((key) => key.id === event.code);
            keyItemsArray[keyIndex].classList.remove('_key-active');
        }

    })
}


function switchOnShift(shiftKey, event) {
    if (shiftKey) {
        if (event === '`' && currentLanguage === 'en') {
            textarea.value += '~';
        } else if (event === '-' && currentLanguage === 'en') {
            textarea.value += '_';
        } else if (event === '=' && currentLanguage === 'en') {
            textarea.value += '+';
        } else if (event === '[' && currentLanguage === 'en') {
            textarea.value += '{';
        } else if (event === ']' && currentLanguage === 'en') {
            textarea.value += '}';
        } else if (event === '\\' && currentLanguage === 'en') {
            textarea.value += '|';
        } else if (event === ';' && currentLanguage === 'en') {
            textarea.value += ':';
        } else if (event === '\'' && currentLanguage === 'en') {
            textarea.value += '"';
        } else if (event === ',' && currentLanguage === 'en') {
            textarea.value += '<';
        } else if (event === '.' && currentLanguage === 'en') {
            textarea.value += '>';
        } else if (event === '/' && currentLanguage === 'en') {
            textarea.value += '?';
        } else if (event === '/' && currentLanguage === 'ru') {
            textarea.value += ',';
        } else {
            textarea.value += event.toUpperCase();
        }
    }

}
switchOnShift();
onClickInTextArea();