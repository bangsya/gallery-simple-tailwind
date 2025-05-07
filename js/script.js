const container = document.querySelector('.container-thumbs');
const hero = document.querySelector('.hero img');
const thumbs = document.querySelectorAll('.thumbs');


container.addEventListener('click', function(e){
    // console.log(e.target);
    if (e.target.classList.contains('thumbs')){
        hero.src = e.target.getAttribute('src');
    }
});