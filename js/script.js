const container = document.querySelector('.container-thumbs');
const hero = document.querySelector('.hero img');
const thumbs = document.querySelectorAll('.thumbs');


container.addEventListener('click', function(e){
    // console.log(e.target);
    if (e.target.classList.contains('thumbs')){
        hero.src = e.target.getAttribute('src');
        hero.classList.add('animate-fade');
        setTimeout(function(){
            hero.classList.remove('animate-fade');
        }, 500);

        thumbs.forEach(function(el){
            el.classList.remove('active');
            el.parentElement.classList.remove('shadow-md');
            el.parentElement.classList.remove('rounded-xl');
        });

        e.target.parentElement.classList.add('shadow-md');
        e.target.parentElement.classList.add('rounded-xl');
        e.target.parentElement.classList.add('shadow-cyan-400');

        e.target.classList.add('active');
    }
});