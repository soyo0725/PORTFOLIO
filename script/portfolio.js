const toggleBtn=document.querySelector('.bar');
const menu=document.querySelector('.menu')
const icons=document.querySelector('.SNS')

toggleBtn.addEventListener('click', ()=>{
    menu.classList.toggle('active')
    icons.classList.toggle('active')
})