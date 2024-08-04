class MobileNavbar {
    constructor(mobileMenu, links, navLinks) {
        this.mobileMenu = document.querySelector(mobileMenu);
        this.links = document.querySelector(links);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";

        this.handleClicker = this.handleClicker.bind(this);
    }

    handleClicker() {
        console.log(this);
        this.links.classList.toggle(this.activeClass);
    }

    addClickEvent() {
        this.mobileMenu.addEventListener("click", this.handleClicker);
    }

    init() {
        if (this.mobileMenu) {
            this.addClickEvent();
        }
        return this;
    }
}

const mobileNavbar = new MobileNavbar(
    ".mobile-menu",
    "links",
    "links li",
);