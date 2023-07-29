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
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

const header = document.querySelector('.header');

const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// console.log(document.getElementById('section--1'));

// Selector getElementByTagName out put the collection of HTML and
// update HTML collection whenever element is removed.

const allButtons = document.getElementsByTagName('button');
// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));


// Creating and Inserting Elements

const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = 'We use cookies for improved functionality and analytics.' + '<button class="btn btn--close-cookie">Got it!</button>';
header.prepend(message);
// header.append(message); // this appends will shift the place of append from first to last
// header.append(message.cloneNode(true)); // and this will clone the first element and copy at the end.
// header.before(message)
// header.after(message)


//  ---- Deleting Element
const cookieCloseBtn = document.querySelector('.btn--close-cookie');
cookieCloseBtn.addEventListener('click', () => {
    message.remove();
    // message.parentElement.removeChild(message);
})


// --- Styles for Cookies
message.style.backgroundColor = '#37383d';
message.style.width = '104%';

// console.log(getComputedStyle(message).alignItems);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

// ---- Working with attributes
const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.alt);
// console.log(logo.className);


// ----- Non Standard Attributes
// console.log(logo.designer);

// console.log(logo.setAttribute('company', 'Bankit'));
// console.log(logo.src);
//
// console.log(logo.getAttribute('src'))

const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));


// ---- Data Attributes

// console.log(logo.dataset.versionNumber);

/**
 * Smooth Scrolling
 */

const btnScrollTo = document.querySelector('.btn--scroll-to');

const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', (event) => {
    /**
     * Scrolling Method 1
     */
    // const section1CoOrds = section1.getBoundingClientRect();
    // // console.log(section1CoOrds);
    // // console.log(event.target.getBoundingClientRect());
    // //
    // // console.log('Current Scroll X/Y CoOrdinates', window.pageXOffset, window.pageYOffset);
    // //
    // // console.log('Height/Width viewport', document.documentElement.clientHeight, document.documentElement.clientWidth)
    //
    // // window.scrollTo(section1CoOrds.left + window.pageXOffset, section1CoOrds.top + window.pageYOffset);
    //
    // window.scrollTo({
    //     left: section1CoOrds.left + window.pageXOffset, 
    //     top: section1CoOrds.top + window.pageYOffset,
    //     behavior: "smooth",
    // })

    section1.scrollIntoView({behavior: "smooth"})
})














