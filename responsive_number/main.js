let nums=document.querySelectorAll(".numbers p");


nums.forEach((element)=>{
    startCounter(element);
})
function startCounter(el){
    let goal=el.dataset.goal;
    let count=setInterval(()=>{
        el.textContent++
        if(el.textContent==goal){
            clearInterval(count)
        };
    },10)
}