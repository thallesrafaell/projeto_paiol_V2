const openclosemenu = document.querySelector('#btn-menu-ico')
const fade = document.querySelector("#fade")
const modal = document.querySelector('#modal')
const btnmenu = document.querySelector('#btnmenu')


openclosemenu.addEventListener('click', () => { showMenu() })
fade.addEventListener('click', () => { showMenu() })
function showMenu() {
    fade.classList.toggle('hide')
    modal.classList.toggle('hide')
}


