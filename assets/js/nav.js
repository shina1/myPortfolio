const burger = document.querySelector('.hamburger').firstElementChild;
const ulList = document.querySelector('.list-ul');
const links = document.querySelectorAll('.list-ul li');

burger.addEventListener('click',(e)=>{
    ulList.classList.toggle('open');
    links.forEach(link =>{
        link.classList.toggle('fade');
    })
    e.preventDefault();
})