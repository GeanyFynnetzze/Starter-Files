document.querySelector('.menu').addEventListener('click',()=>{
    document.querySelectorAll('.target').forEach((item)=>{
        item.classList.toggle('change')
    })
})

const icons = document.querySelectorAll('.section-1-icons i')

let i = 1;

setInterval(()=>{

    i++;

    const icon = document.querySelector('.section-1-icons .salut')

    icon.classList.remove('salut')

    if ( i > icons.length) {
        icons[0].classList.add('salut')
        i=1;
    }
    else{
        icon.nextElementSibling.classList.add('salut')
    }
},4000)

