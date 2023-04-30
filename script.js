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
