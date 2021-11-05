const navMain = document.querySelector(".main-nav");
const navToggle = document.querySelector(".main-nav__toggle");
const pageMain = document.querySelector(".page-main");

navMain.classList.remove("main-nav--nojs");

navToggle.addEventListener("click", function() {
    if (navMain.classList.contains("main-nav--closed")) {
        navMain.classList.remove("main-nav--closed");
        navMain.classList.add("main-nav--opened");
        pageMain.classList.add("main-nav__background");
    } else {
        navMain.classList.add("main-nav--closed");
        navMain.classList.remove("main-nav--opened");
        pageMain.classList.remove("main-nav__background");
    }
});

const siteListItemDropdown = document.querySelector(".site-list__link--dropdown");
const dropDown = document.querySelector(".site-list--dropdown");
const siteLinkArrow = document.querySelector(".site-list__link--arrow");

siteListItemDropdown.addEventListener("click", function() {
    if (dropDown.classList.contains("site-list__dropdown--active")) {
        dropDown.classList.remove("site-list__dropdown--active");
        siteLinkArrow.classList.remove("site-list__link--arrow--active");
    } else {
        dropDown.classList.add("site-list__dropdown--active");
        siteLinkArrow.classList.add("site-list__link--arrow--active");
    }
});

const siteListItemBottomDropdown = document.querySelector(".site-list__link-bottom--dropdown");
const dropDownBottom = document.querySelector(".site-list-bottom--dropdown");
const siteLinkArrowBottom = document.querySelector(".site-list__link-bottom--dropdown-arrow");

siteListItemBottomDropdown.addEventListener("click", function() {
    if (dropDownBottom.classList.contains("site-list__item-bottom--dropdown-active")) {
        dropDownBottom.classList.remove("site-list__item-bottom--dropdown-active");
        siteLinkArrowBottom.classList.remove("site-list__link-bottom--dropdown-arrow--active");
    } else {
        dropDownBottom.classList.add("site-list__item-bottom--dropdown-active");
        siteLinkArrowBottom.classList.add("site-list__link-bottom--dropdown-arrow--active");
    }
});

const siteListItemDropdownBottom = document.querySelector(".site-list__item-bottom--dropdown");

siteListItemDropdownBottom.onmouseover = function() { dropDownBottom.classList.add("site-list__item-bottom--dropdown-active-tablet") };
siteListItemDropdownBottom.onmouseout = function() { dropDownBottom.classList.remove("site-list__item-bottom--dropdown-active-tablet") };