document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function hoverZoom(element) {
    element.classList.add("hovered");
}

function unhoverZoom(element) {
    element.classList.remove("hovered");
}

var urlMenu = document.getElementById('rd');
urlMenu.onchange = function(){
    var useroption = this.options[this.selectedIndex];
    if (useroption.value !== "nothing"){
        window.open(useroption.value, "Calendar Visit my Youtube", "");
    }
}

const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => { 

    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu option'); 
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {

        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');


    });

    options.forEach(option => { 

        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate'); 
            menu.classList.remove('menu-open');
            options.forEach(option => {

                option.classList.remove('active');
            });

            option.classList.add('active');

        });
    });
});

var loader = document.getElementById('preloder');
     window.addEventListener("load", function(){
        var delay = 1500;
        setTimeout(function() {
            loader.style.display = "none";
          }, delay);
     });


function myFunction(popupId) {
    var popup = document.getElementById(popupId);
    popup.classList.toggle("show");
    }
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            console.log(entry);
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            } // else {              entry.target.classList.remove('show'); }
            
        });
    },{
        threshold: 0.1
    });
    
    const hiddenElements = document.querySelectorAll('.reveal-left , .reveal-down');
    hiddenElements.forEach((el) => observer.observe(el));
    
   
