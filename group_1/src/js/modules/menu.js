const menuInit = () => {
    const toggleMenu = document.querySelector('.toggle-menu')

    if (!toggleMenu) return

    const menu = document.querySelector('.nav__menu')
    const contacts = document.querySelector('.header__contacts')

    const handleToggleMenu = () => {
        toggleMenu.classList.toggle('toggle-menu_active')
        menu.classList.toggle('menu_active')
        contacts.classList.toggle('contacts_active')
    }

    toggleMenu.addEventListener('click', handleToggleMenu)
}

export default menuInit
