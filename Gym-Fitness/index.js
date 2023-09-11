let span = document.querySelector('.up')
let ring = document.querySelector('.lds-ring')
window.onscroll= function(){
    console.log(scrollY)
    if(this.scrollY >= 300){
        span.classList.add('show')
    }
    else{span.classList.remove('show')}
}

span.onclick = function (){
    window.scrollTo({
        top:0,
        behavior : "smooth"
    })
}

const loadmore = document.querySelector('.load-more')
let currentItems = 6
loadmore.addEventListener('click',(e)=>{
   
    const elementList =document.querySelectorAll('.lessons-card')
    e.target.classList.add('show-loader');
    for (let i =currentItems;i< currentItems + 3 ; i++){
        setTimeout(function(){e.target.classList.remove('show-loader')
        if (elementList[i]){
            elementList[i].style.display = 'block' 
        }
        
    },100)
    }
    currentItems+=3;

    if(currentItems>=elementList.length){
        e.target.classList.add('loaded')
    }
})

loadmore.onclick = function (){
    window.scrollTo({
        bottom:0,
        behavior : "smooth"
    })
}
