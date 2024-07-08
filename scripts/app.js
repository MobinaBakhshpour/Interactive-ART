let iconeItem = document.querySelector('.header-icone')
let logoIcone = document.querySelector('.header-icone i')
let menu = document.querySelector('.menu')

iconeItem.addEventListener('click', function(){
    if(logoIcone.classList.contains('fa-bars')){
        menu.style.left = "0px"
        logoIcone.classList = 'fa fa-times'
        
    }else{
        menu.style.left = "-240px"
        logoIcone.classList = 'fa fa-bars'
    }
})