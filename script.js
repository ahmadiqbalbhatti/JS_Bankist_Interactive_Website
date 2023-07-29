'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
const allButtons = document.getElementsByTagName('button');
const message = document.createElement('div');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

///////////////////////////////////////
// Modal window
///////////////////////////////////////
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
//////////////////////////////////////////////////////
/**
 * Showing Cookies Notification Bar and Removing it.
 */
/////////////////////////////////////////////////////

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

cookieCloseBtn.addEventListener('click', function () {
    message.remove();
    // message.parentElement.removeChild(message);
})


// --- Styles for Cookies
message.style.backgroundColor = '#37383d';
message.style.width = '104%';

// console.log(getComputedStyle(message).alignItems);

message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';

// document.documentElement.style.setProperty('--color-primary', 'orangered');

////////////////////////////////////////////////
/**
 * Smooth Scrolling
 */
////////////////////////////////////////////////

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

    console.log(section1)
    section1.scrollIntoView({behavior: "smooth"})
});


///////////////////////////////////////////////////
/**
 * Page Navigation
 */
///////////////////////////////////////////////////
// Navigation without Delegation
// document.querySelectorAll('.nav__link').forEach(function (element) {
//     element.addEventListener('click', function (event) {
//         event.preventDefault();
//         console.log('LINK');
//
//         const elementHref = this.getAttribute('href');
//         console.log(elementHref)
//         // console.log(document.querySelector(elementHref))
//         document.querySelector(elementHref).scrollIntoView({behavior: "smooth"});
//     })
// })

///////////////////////////////////////////////////////////////
// Navigation with Delegation
/**
 * Delegation can be done in Two Steps
 *
 * Step 1: Add event listener to common parent element.
 * Step 2: Determine what element originated the event.
 */

document.querySelector('.nav__links').addEventListener('click', function (event) {
    event.preventDefault();
    // console.log(event.target)

    // Matching Strategy
    if (event.target.classList.contains('nav__link')) {
        const sectionId = event.target.getAttribute('href');
        document.querySelector(sectionId).scrollIntoView({behavior: "smooth"});
    }
})

///////////////////////////////////////////
/**
 * Operational Tabs
 * Tabbed Components
 */
///////////////////////////////////////////
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

// One way of Adding event on Tabs
// tabs.forEach(tab => {
//     tab.addEventListener('click', function (){
//         console.log('TAB')
//     })
// })


// Other way of Adding event on Tabs

tabsContainer.addEventListener('click', function (event) {
    const clicked = event.target.closest('.operations__tab');

    // Null check
    if (!clicked) return;

    // Removing Active class from tabs
    tabs.forEach(tab => {
        tab.classList.remove('operations__tab--active');
    });

    // Adding active class in clicked tab
    clicked.classList.add('operations__tab--active');

    // Removing active class from the operations Content
    tabsContent.forEach(tabContent => {
        tabContent.classList.remove('operations__content--active')
    });

    // Adding active class in the Operations Content
    // console.log(clicked.dataset.tab);
    document.querySelector(`.operations__content--${clicked.dataset.tab}`).classList.add('operations__content--active');


})


///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////
///////////////////////////////////////////


////////// DOM ELEMENTS SELECTION APIs
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);


// console.log(allSections);

// console.log(document.getElementById('section--1'));

// Selector getElementByTagName out put the collection of HTML and
// update HTML collection whenever element is removed.

// console.log(allButtons);

// console.log(document.getElementsByClassName('btn'));


// Creating and Inserting Elements
//
// message.classList.add('cookie-message');
// // message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML = 'We use cookies for improved functionality and analytics.' + '<button class="btn btn--close-cookie">Got it!</button>';
// header.prepend(message);
// // header.append(message); // this appends will shift the place of append from first to last
// // header.append(message.cloneNode(true)); // and this will clone the first element and copy at the end.
// // header.before(message)
// // header.after(message)
//
//
// //  ---- Deleting Element
// cookieCloseBtn.addEventListener('click', () => {
//     message.remove();
//     // message.parentElement.removeChild(message);
// })
//
//
// // --- Styles for Cookies
// message.style.backgroundColor = '#37383d';
// message.style.width = '104%';
//
// // console.log(getComputedStyle(message).alignItems);
//
// message.style.height = Number.parseFloat(getComputedStyle(message).height) + 40 + 'px';
//
// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// ---- Working with attributes
// const logo = document.querySelector('.nav__logo');
// console.log(logo.alt);
// console.log(logo.alt);
// console.log(logo.className);


// ----- Non Standard Attributes
// console.log(logo.designer);

// console.log(logo.setAttribute('company', 'Bankit'));
// console.log(logo.src);
//
// console.log(logo.getAttribute('src'))

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href);
// console.log(link.getAttribute('href'));


// ---- Data Attributes

// console.log(logo.dataset.versionNumber);

///////////////////////////////////////////////////////
// -------------Event Hanging
// const h1 = document.querySelector('h1');
//
// const alertEventH1 = (event) => {
//     alert('Add Event Lister: Great! You are reading the heading: H1');
//
//     // Use the statement below to use event only for once
//     // h1.removeEventListener("mouseenter", alertEventH1);
// }
//
// h1.addEventListener('mouseenter', alertEventH1);
//
// // The another way to use event only for once
// // setTimeout(() => h1.removeEventListener("mouseenter", alertEventH1), 3000);
//
// // h1.onmouseenter = (event)=>{
// //     alert('Add Event Lister: Great! You are reading the heading: H1')
// //
// // }
//
// //////////////////////////////////////////////////////////
// /**
//  * Event Propagation
//  */
// /////////////////////////////////////////////////////////
// const randomInt = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
//
// const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)}, ${randomInt(0, 255)})`
// console.log(randomColor())
//
//
// document.querySelector('.nav__link').addEventListener('click', function (event){
//     this.style.backgroundColor = randomColor();
//
//     console.log("Nav Link", event.target, event.currentTarget);
// });
// document.querySelector('.nav__links').addEventListener('click',function (event){
//     // console.log('LINK')
//     this.style.backgroundColor = randomColor();
//     console.log("Nav Links", event.target, event.currentTarget);
//
// });
// document.querySelector('.nav').addEventListener('click', function (event){
// //     console.log('LINK')
//     this.style.backgroundColor = randomColor();
//     console.log("NAV", event.target, event.currentTarget)
//
// });

//
// //////////////////////////////////////
// /**
//  * DOM Traversing
//  */

// const h1= document.querySelector('h1');
//
// // ------------ Going downwards: Child
// console.log(h1.querySelectorAll('.highlight'));
//
// console.log(h1.childNodes);
// console.log(h1.children);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';
//
//
// // ------------- Going Upwards: Parents
//
// console.log(h1.parentElement);
// console.log(h1.parentNode);
// // h1.closest('.header').style.background = 'var(--gradient-secondary)';
//
//
// // -------- Going Sideways: Siblings
//
// console.log( h1.previousElementSibling)
// console.log(h1.nextElementSibling)
//
// console.log(h1.previousSibling)
// console.log(h1.nextSibling);
//
// console.log(h1.parentElement.children)
