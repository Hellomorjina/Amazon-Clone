const imgs = document.querySelectorAll(".header_slider ul img");
const prev = document.querySelector(".control_prev");
const next = document.querySelector(".control_next");

let n = 1;

function changeSlide(){
        for (let i = 0; i < imgs.length; i++) {
            imgs[i].style.display = "none";
        }
        imgs[n].style.display = "block";
}

prev.addEventListener("click",(e)=>{
    if(n > 0){
        n--;
    }else{
        n = imgs.length - 1;
    }
    changeSlide()
})
next.addEventListener("click",(e)=>{
    if(n < imgs.length - 1){
        n++;
    }else{
        n = 0;
    }
    changeSlide()
})

// next scrollbar  

const scrollContainer = document.querySelectorAll('.products');

for (const item of scrollContainer) {
    item.addEventListener('wheel', (evt) => {
        evt.preventDefault();
        item.scrollLeft += evt.deltaY;
    });
}