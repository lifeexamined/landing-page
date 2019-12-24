/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/
const maine = document.querySelector('main');

function createArticle () {
    const addSection = document.createElement('section');
    const addContainerDiv = document.createElement('div');
    const addH2 = document.createElement('h2');
    const addP1 = document.createElement('p');
    const addP2 = document.createElement('p');
    
    addSection.setAttribute("id", "section4");
    addSection.setAttribute("data-nav", "Section 4");
    addContainerDiv.setAttribute("class", "landing__container");
    addH2.textContent = 'Section 4';
    addP1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
    addP2.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
    
    maine.appendChild(addSection);
    addSection.appendChild (addContainerDiv);
    addContainerDiv.appendChild (addH2);
    addContainerDiv.appendChild (addP1);
    addContainerDiv.appendChild (addP2);
    
    }
    
    createArticle ();

    function createArticle2 () {
        const addSection2 = document.createElement('section');
        const addContainerDiv2 = document.createElement('div');
        const addH2_2 = document.createElement('h2');
        const addP1_2 = document.createElement('p');
        const addP2_2 = document.createElement('p');
        
        addSection2.setAttribute("id", "section5");
        addSection2.setAttribute("data-nav", "Section 5");
        addContainerDiv2.setAttribute("class", "landing__container");
        addH2_2.textContent = 'Section 5';
        addP1_2.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.';
        addP2_2.textContent = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.';
        
        maine.appendChild(addSection2);
        addSection2.appendChild (addContainerDiv2);
        addContainerDiv2.appendChild (addH2_2);
        addContainerDiv2.appendChild (addP1_2);
        addContainerDiv2.appendChild (addP2_2);
        
        }
        
        createArticle2 ();

const navMenu = document.getElementsByClassName("navbar__menu");
const navList = document.querySelector('ul');
const selectSections = document.querySelectorAll('section');
const totalSections = selectSections.length;

const myCustomUL = document.createElement('ul');

for (let i = 1; i <= totalSections; i++) {
    const menuSection = document.createElement('li');
    menuSection.setAttribute("id", "menuSection" + i);
    menuSection.textContent = 'Section ' + i;

    navList.appendChild(menuSection);
    console.log(i);

    const currentSection = document.getElementById('section' + i);
    const currentSectionId = 'section' + i;


    // var allSections = Array.prototype.slice.call(document.querySelectorAll("section"));
    
    // var otherSections = allSections.splice('menuSection' + i, 1);

    const currentMenuSection = document.getElementById('menuSection' + i);

    currentMenuSection.addEventListener('click', function jumpto(){
        window.location.href = "#" + currentSectionId;
        currentSection.style.opacity = "0.5";
        console.log('click' + i);
    });

    // menuSection.addEventListener('click', function respondToTheClick() {
    //     let menuSectionId = menuSection.id;
    //     currentMenuSection = document.getElementById('section' + i);
    //     currentMenuSection.scrollIntoView({behavior: "smooth", block: "end", inline: "nearest"});
    //     console.log(menuSectionId + " was clicked!");
    // }, true);


}





// // The checker
// const gambitGalleryIsInView = el => {
// 	const scroll = window.scrollY || window.pageYOffset
// 	const boundsTop = el.getBoundingClientRect().top + scroll
	
// 	const viewport = {
// 		top: scroll,
// 		bottom: scroll + window.innerHeight,
// 	}
	
//     const bounds = {
// 		top: boundsTop,
// 		bottom: boundsTop + el.clientHeight,
// 	}
	
// 	return ( bounds.bottom >= viewport.top && bounds.bottom <= viewport.bottom ) 
// 		|| ( bounds.top >= viewport.top && bounds.top <= viewport.bottom );
// }


// // Usage.
// document.addEventListener( 'DOMContentLoaded', () => {
//     const tester = document.querySelector( '.landing__container');
// 	const answer = document.querySelector( '.navbar__menu' );
    
//     function isInView() {
//         const menuItem = document.querySelector('#menuSection1');
//         gambitGalleryIsInView( tester ) ? menuItem.style.opacity=1 : menuItem.style.opacity=0.5; 
//     }

// 	function handler () {
//         raf(isInView);
//     }
	
//     handler();
//     window.addEventListener( 'scroll', handler );
// })

// // 	window.addEventListener( 'scroll', handler )
// // } )

// // requestAnimationFrame
// const raf = 
// window.requestAnimationFrame 
// || window.webkitRequestAnimationFrame 
// || window.mozRequestAnimationFrame 
// || function( callback ) { window.setTimeout( callback, 1000 / 60 );};

// function offset(el){
//     var rect = el.getBoundingClientRect();
//     return {
//         top: rect.top + scrollTop
//     };
// }

// const menuBar = document.querySelector ('.navbar__menu');

// function menuStatus(){
//     menuBar.setAttribute('id', 'inactive');
//     console.log('inactive');
// }

// window.setTimeout(function(){console.log('inactive');}, 100);


// window.addEventListener('scroll', () => {
//     menuBar.setAttribute('id', 'active')
//     console.log('active')
// })

// menuBar.addEventListener('mouseover', () => {
//     menuBar.setAttribute('id', 'active')
//     console.log('active')
// })

// const MenuVisibility = () => {
//     const 
// }
// const menuScroll = () => {
    
// }

// document.addEventListener("scroll", menuScroll());

// document.body.appendChild(createLink);

// const importWebsite = document.querySelector("#importLink1");
// const importTitle = createLink.querySelector('h1');
// addArticle.textContent()

// const menuSectionStyle = document.querySelector ('li');


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
// let sectionNum = 'section' + i;


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav

// navMenu.appendChild(menuSection);
// menuSection.textContent = "";
// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active
