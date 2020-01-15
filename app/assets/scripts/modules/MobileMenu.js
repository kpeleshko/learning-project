class MobileMenu {
    constructor() {
        this.menuClick = document.querySelector('.header__menu-icon')
        this.menuIcon = document.querySelector('.header__menu-icon-line')
        this.menuContent = document.querySelector('.header__menu-content')
        this.header = document.querySelector('.header')
        this.events()
    }

    events() {
        this.menuClick.addEventListener('click', () => this.toggleTheMenu())
    }

    toggleTheMenu() {
        this.menuContent.classList.toggle('header__menu-content--is-visible')
        this.header.classList.toggle('header--is-expanded')
        this.menuIcon.classList.toggle('header__menu-icon--close-x')
    }
}

export default MobileMenu;