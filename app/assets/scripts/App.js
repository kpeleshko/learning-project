import "../styles/styles.css"
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'
import Modal from './modules/Modal'

new Modal()
let stickyHeader = new StickyHeader()
new RevealOnScroll(document.querySelectorAll('.feature-item'), 85)
new RevealOnScroll(document.querySelectorAll('.testimonials'), 75)


let mobileMenu = new MobileMenu();

if (module.hot) {
    module.hot.accept()
}