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
const maine = document.querySelector("main");

// Counter needs to start at 4 because we already have 3 sections
let counter = 4;

const createArticle = () => {
  const addSection = document.createElement("section");
  const addContainerDiv = document.createElement("div");
  const addH2 = document.createElement("h2");
  const addP1 = document.createElement("p");
  const addP2 = document.createElement("p");

  addSection.setAttribute("id", "section" + counter);
  addSection.setAttribute("data-nav", "Section " + counter);
  addContainerDiv.setAttribute("class", "landing__container");
  addH2.textContent = "Section " + counter;
  addP1.textContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.";
  addP2.textContent =
    "Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.";

  maine.appendChild(addSection);
  addSection.appendChild(addContainerDiv);
  addContainerDiv.appendChild(addH2);
  addContainerDiv.appendChild(addP1);
  addContainerDiv.appendChild(addP2);
  counter += 1;
};

createArticle();
createArticle();

// Create Nav Menu
const navMenu = document.getElementsByClassName("navbar__menu");
const navList = document.querySelector("ul");
const selectSections = document.querySelectorAll("section");
const totalSections = selectSections.length;

// Add menu links to sections
for (let i = 1; i <= totalSections; i++) {
  const menuSection = document.createElement("li");
  menuSection.setAttribute("id", "menuSection" + i);
  menuSection.textContent = "Section " + i;
  navList.appendChild(menuSection);
}

// Scroll functionality for sections
const nodeArray = Array.from(document.querySelectorAll("section"));

const menuNodeArray = Array.from(document.querySelectorAll("#navbar__list > li"));

const setActive = node => {
  node.setAttribute('class', 'active');
}

const setInactive = node => {
  node.setAttribute('class', 'inactive');
}

const dimAllSections = () => {
  nodeArray.forEach(setInactive);
};

const deactivateAllMenuItems = () => {
  menuNodeArray.forEach(setInactive);
};

const highlightSection = index => {
  setActive(nodeArray[index]);
};

const highlightActiveMenuItem = index => {
  setActive(menuNodeArray[index]);
}

const getAllSectionsOffset = () => {
  const result = [];
  const sections = Array.from(document.querySelectorAll("section"));
  for (const section of sections) {
    // Adjust the offset for better experience
    const offsetTop = section.offsetTop - 150;
    result.push({
      start: offsetTop,
      end: offsetTop + section.offsetHeight,
      id: section.getAttribute("id")
    });
  }
  return result;
};

const allSectionsOffset = getAllSectionsOffset();

const getSectionIndexInView = scrollY => {
  const offsets = allSectionsOffset;
  for (offset of offsets) {
    // Make sure section is in the view
    if (scrollY > offset.start && scrollY < offset.end) {
      const id = offset.id;
      for (let i in nodeArray) {
        if (nodeArray[i].id === id) return i;
      }
    }
  }
  return 0;
};

// Add event listeners
document.querySelector(".navbar__menu").addEventListener("click", e => {
  if (e.target.tagName === "LI") {
    const idN = e.target.getAttribute("id");
    const number = idN.slice(-1);
    window.location.href = "#section" + number;
  }
});

let indexMemo = 0;

const updateIndexMemo = (index) => {
  indexMemo = index;
};

window.addEventListener("scroll", function() {
  const index = getSectionIndexInView(window.scrollY);
  // Prevent unnecessary updates
  if (index === indexMemo) return;
  updateIndexMemo(index)
  dimAllSections();
  deactivateAllMenuItems();
  highlightSection(index);
  highlightActiveMenuItem(index);
});
