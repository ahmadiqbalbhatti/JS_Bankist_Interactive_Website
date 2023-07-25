'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (event) {
    event.preventDefault();

    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
};

const closeModal = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal))

// for (let i = 0; i < btnsOpenModal.length; i++)
//     btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal();
    }
});


////////// DOM ELEMENTS SELECTION APIs
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
console.log(allSections);

console.log(document.getElementById('section--1'));

// Selector getElementByTagName out put the collection of HTML and
// update HTML collection whenever element is removed.

const allButtons = document.getElementsByTagName('button');
console.log(allButtons);

console.log(document.getElementsByClassName('btn'));


// Creating and Inserting Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics.' +
    '<button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
// header.append(message); // this append will shift the place of append from first to last
// header.append(message.cloneNode(true)); // and this will clone the first element and copy at the end.
// header.before(message)
// header.after(message)

const cookieCloseBtn = document.querySelector('.btn--close-cookie');
cookieCloseBtn.addEventListener('click', () => {
    // message.remove();
    message.parentElement.removeChild(message);
})

















