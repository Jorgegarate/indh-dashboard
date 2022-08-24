const menuBtn = document.querySelector('.menus-btn');
const headerContainer = document.querySelector('.header-container');
const mainContent = document.querySelector('.main-content');
const sidebarWrapper = document.querySelector('.sidebar-wrapper');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if(!menuOpen) {
    menuBtn.classList.add('active');
    headerContainer.classList.add('active')
    mainContent.classList.add('active')
    sidebarWrapper.classList.add('active')
    menuOpen = true;
  } else {
    menuBtn.classList.remove('active');
    headerContainer.classList.remove('active')
    mainContent.classList.remove('active')
    sidebarWrapper.classList.remove('active')
    menuOpen = false;
  }
});
