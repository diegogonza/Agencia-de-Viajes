
// nav - bar hamburger SECTION HEADER
var hamburger = document.getElementById('hamburger')
var navBar = document.getElementById('nav-bar')
var validar = false

function NavBar() {
    hamburger.addEventListener('onclick', validarNavBar())
    function validarNavBar() {
        if (validar == false) {
            showNav()
        } else {
            hideNav()
        }

        function showNav() {
            navBar.classList.remove('none')
            validar = true
        }
        function hideNav() {
            navBar.classList.add('none')
            validar = false
        }
    }
}