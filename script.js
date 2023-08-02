'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// const allButtons = document.getElementsByTagName('button');
const message = document.createElement('div');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('nav');
const tabs = document.querySelectorAll(".operations__tab");
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

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

btnScrollTo.addEventListener('click', (_) => {
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

    // console.log(section1)
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


});

///////////////////////////////////////////
/**
 * Menu FADE animation
 */
///////////////////////////////////////////

const hoverHandler = (event) => {
    if (event.target.classList.contains('nav__link')) {
        const link = event.target;
        const siblings = link.closest('.nav').querySelectorAll('.nav__link'); // Use querySelectorAll to get all links
        const logo = link.closest('.nav').querySelector('img');
        // console.log(siblings);
        // Now, I can traverse through the `siblings` NodeList and apply something on each link, for example:
        siblings.forEach((sibling) => {
            if (sibling !== link) sibling.style.opacity = this;
        });
        logo.style.opacity = this;
    }
}
// // Version 1
// nav.addEventListener('mouseover', function (event) {
//     hoverHandler(event, 0.5);
// });
//
// nav.addEventListener('mouseout', function (event) {
//     hoverHandler(event, 1);
// })

/**
 * Version
 * Passing "argument" into handler.
 * Remember on thing, Real handler does not have arguments.
 */
nav.addEventListener('mouseover', hoverHandler.bind(0.5));
nav.addEventListener('mouseout', hoverHandler.bind(1))


// ///////////////////////////////////////////////////
// /**
//  * METHOD 1
//  *  Sticky Navigation Implementation
//  */
// ///////////////////////////////////////////////////
// const initialCoords = section1.getBoundingClientRect();
// // console.log(initialCoords.top)
// window.addEventListener("scroll", function (){
//
//     console.log(window.scrollY)
//
//     if (window.scrollY > initialCoords.top){
//         nav.classList.add('sticky');
//     } else {
//         nav.classList.remove('sticky');
//     }
// })


///////////////////////////////////////////////////
/**
 * METHOD 2
 * Sticky Navigation Implementation
 * By Intersection Observer API
 */
///////////////////////////////////////////////////
/**
 * Call back function is called when viewport rectangle reaches to the threshold percentage.
 */
// const obsCallBack = function (entries, observer) {
//     entries.forEach(entry => {
//         console.log(entry)
//     })
//
// };
// const observerOption = {
//     root : null,
//     threshold: [0, 0.2],
// };
//
// const observer = new IntersectionObserver(obsCallBack, observerOption );
// observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight)
const stickyNav = function (entries) {
    const [entry] = entries;
    // console.log(entry)
    if (!entry.isIntersecting) nav.classList.add('sticky'); else nav.classList.remove('sticky');
}

const headerObserver = new IntersectionObserver(stickyNav, {
    root: null, threshold: 0, rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

///////////////////////////////////////////////////
/**
 * Showing Hidden Section with Transition
 * Implemented In CSS
 */
///////////////////////////////////////////////////

const allSections = document.querySelectorAll('.section');

const revealSectionCallback = function (entries, observer) {
    const [entry] = entries;

    // console.log(entry);
    if (!entry.isIntersecting) {
        return;
    }
    entry.target.classList.remove('section--hidden');

    observer.unobserve(entry.target)
}

const sectionObserver = new IntersectionObserver(revealSectionCallback, {
    root: null, threshold: 0.15,

});

allSections.forEach((section) => {
    sectionObserver.observe(section);
    // section.classList.add('section--hidden');
})


///////////////////////////////////////////////////
/**
 * Image Optimization using Data Attributes to load images Lazy-loading
 */
///////////////////////////////////////////////////
const imageTarget = document.querySelectorAll('img[data-src]');

const loadImageCallback = function (entries, observer) {
    const [entry] = entries;
    // console.log(entry  );

    if (!entry.isIntersecting) return;
    // Replace src with data src
    entry.target.src = entry.target.dataset.src;


    entry.target.addEventListener('load', function () {
        entry.target.classList.remove('lazy-img');
    })

    observer.unobserve(entry.target)
}

const imageObserver = new IntersectionObserver(loadImageCallback, {
    root: null, threshold: 0, rootMargin: "200px",
});

imageTarget.forEach(img => imageObserver.observe(img));


///////////////////////////////////////////////////
/**
 * Slider Sliding
 */
///////////////////////////////////////////////////
// const slider = document.querySelector('.slider');
// slider.style.transform = 'scale(0.4) translateX(-800px)';
// slider.style.overflow = 'visible';

const slider = () => {

    const slides = document.querySelectorAll('.slide');
// console.log(slides)

    let currentSide = 0;
    const numberOfSlides = slides.length;

    const leftButton = document.querySelector('.slider__btn--left');
    const rightButton = document.querySelector('.slider__btn--right');

    const dotsContainer = document.querySelector('.dots')


// slides.forEach((slide, index) => {
//     slide.style.transform = `translateX(${100 * index}%)`;
//
// });


    const createDots = () => {
        slides.forEach((_, index) => {
            dotsContainer.insertAdjacentHTML("beforeend", `<button class="dots__dot" data-slide="${index}"></button>`)
        });
    }

    const activeDot = function (slide) {
        document.querySelectorAll('.dots__dot').forEach(dot => {
            dot.classList.remove('dots__dot--active');
        });

        document.querySelector(`.dots__dot[data-slide="${slide}"]`).classList.add('dots__dot--active');
    }

    const goToSlide = (currentSide) => {
        slides.forEach((slide, index) => {
            slide.style.transform = `translateX(${100 * (index - currentSide)}%)`;
        });
    }

    const init = () => {
        goToSlide(0);
        createDots();
        activeDot(0);
    }
    init();

    /**
     * Move to Next Slide
     */
    const nextSlide = function () {
        if (currentSide === numberOfSlides - 1) {
            currentSide = 0;
        } else {
            currentSide++;
        }

        goToSlide(currentSide);
        activeDot(currentSide);
    }
    rightButton.addEventListener('click', nextSlide);

    /**
     * Move to Previous Slide
     */
    const previousSlide = function () {
        if (currentSide === 0) {
            currentSide = numberOfSlides - 1;
        } else {
            currentSide--;
        }
        goToSlide(currentSide);
        activeDot(currentSide);
    }

    leftButton.addEventListener('click', previousSlide);


    /**
     * Keyboard Event Listener for Slide Movements
     */
    document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowRight') nextSlide();
        else if (event.key === 'ArrowLeft') previousSlide();
    })

    /**
     * Event Handler for Dots using Event Delegation
     */

    dotsContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('dots__dot')) {
            const {slide} = event.target.dataset;
            console.log(slide)
            goToSlide(slide);
            activeDot(slide);
        }
    });

}

slider();

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

// document.addEventListener("DOMContentLoaded", function (event){
//     console.log('HTML parsed ANd DOM tree built'    )
// })
