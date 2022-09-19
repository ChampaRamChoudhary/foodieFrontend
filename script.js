
// counter desing
document.addEventListener("DOMContentLoaded", ()=> {
    function counter(id,start,end,duration){
        let obj=document.getElementById(id),
        current=start,
        range=end-start,
        increment=end>start? 1:-1,
        step=Math.abs(Math.floor(duration/range)),
        timer=setInterval(()=>{
            current += increment;
            obj.textContent = current;
            if(current == end){
                clearInterval(timer);
            }
        },step);
    }
    counter("count1",0, 2343, 2000);
    counter("count2",0, 9634, 3000);
    counter("count3",0, 3125, 1000);
    counter("count4",0, 5753, 2000);
});

// active navbar
let nav = document.querySelector(".navbar-wrap");
window.onscroll = function(){
    if(document.documentElement.scrollTop >20){
        nav.classList.add("scroll-on"); 
    }
    else{
        nav.classList.remove("scroll-on");
    }
}

// nav hide
let navbar = document.querySelectorAll(".nav-link");
let navCollapse = document.querySelector(".navbar-collapse.collapse");
navbar.forEach(function(a){
    a.addEventListener("click",function(){
        navCollapse.classList.remove("show");
    })
})