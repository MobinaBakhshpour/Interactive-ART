let iconeItem = document.querySelector('.header-icone')
let logoIcone = document.querySelector('.header-icone i')
let menu = document.querySelector('.menu')

iconeItem.addEventListener('click', function(){
    if(logoIcone.classList.contains('fa-bars')){
        menu.style.left = "0px"
        logoIcone.classList = 'fa fa-times'
        logoIcone.style.position= 'absolute';
        logoIcone.style.left = "12rem";
        logoIcone.style.top = "1rem";
        logoIcone.style.color = "#fff";
        logoIcone.style.position ="fixed"
        
    }else{
        menu.style.left = "-240px"
        logoIcone.classList = 'fa fa-bars'
        logoIcone.style.color = "#000";
        logoIcone.style.top = "";
        logoIcone.style.left = "";
        logoIcone.style.position =""

    }
})