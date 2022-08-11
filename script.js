function imgSlider(anything){
    document.querySelector('.starbucks').src = anything;
}
function changeCircleColor(color){
    const circle = document.querySelector('.circle');
    circle.style.background = color ;
}
function toggleMenu(){
    var menuToggle = document.querySelector('.toggle');
    var banner = document.querySelector('.banner')
    menuToggle.classList.toggle('active')
    banner.classList.toggle('active')
}