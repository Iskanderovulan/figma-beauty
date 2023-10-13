$('.mobile-btn').on('click', function () {
    $('.mobile-btn').toggleClass('show-mobile-btn');
    $('.nav__list').toggleClass('show-menu')
});

$('.nav__list a').on('click', function () {
    $('.mobile-btn').removeClass('show-mobile-btn');
    $('.nav__list').removeClass('show-menu')
});

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("select__dropdown");
}

function myFunction2() {
    document.getElementById("myDropdown-2").classList.toggle("select__dropdown");
}

function myFunction3() {
    document.getElementById("myDropdown-3").classList.toggle("select__dropdown");
}

function myFunction4() {
    document.getElementById("myDropdown-4").classList.toggle("select__dropdown");
}

function myFunction5() {
    document.getElementById("myDropdown-5").classList.toggle("select__dropdown");
}





// Close the dropdown menu if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        let dropdowns = document.getElementsByClassName("dropdown-content");
        let i;
        for (i = 0; i < dropdowns.length; i++) {
           let openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('select__dropdown')) {
                openDropdown.classList.remove('select__dropdown');
            }
        }
    }
};


