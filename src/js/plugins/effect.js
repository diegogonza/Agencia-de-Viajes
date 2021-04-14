// Img rotate: SECTION TRAVELER
var imgRotate = document.imgRotate.src = 'src/img/recursos/travel3.jpg'
    var sourceImgRotate = [
        'src/img/recursos/travel1.jpg',
        'src/img/recursos/travel2.jpg',
        'src/img/recursos/travel3.jpg'
    ]
    var indice = 0;
    var speedRotateImg = 1000
function imgSlider() {
    document.imgRotate.src = sourceImgRotate[indice]
    if(indice < sourceImgRotate.length - 1){
        indice++;
    }else{
        indice = 0;
    };
}
setInterval(imgSlider, speedRotateImg);


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

