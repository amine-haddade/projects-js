
window.onload = () => {
    activeLinks();
    loadNumber()

    scrollUpp();
};

function activeLinks(){
    // let sections=document.querySelectorAll("section");
    // let links=document.querySelectorAll("header nav ul li a");
    // window.addEventListener("scroll",()=>{
    //     sections.forEach(i=>{
    //         let heightScroll=window.scrollY;
        
    //         let ofssetTopSec=i.offsetTop-150
    //         let ofssetHeight=i.offsetHeight
    //         let id=i.getAttribute("id");
    //         if(heightScroll>=ofssetTopSec && heightScroll<ofssetTopSec+ofssetHeight ){
    //             links.forEach(link=>{
    //                 link.classList.remove("active");
    //                 document.querySelector(`header nav a[href*="${id}"]`).classList.add("active");
    //             })
                
    //             }
    //         })
        
    //     })
    window.addEventListener("click",(e)=>{
            let allLink=document.querySelectorAll("ul li a");
            allLink.forEach((link)=>{
                if(link.classList.contains("active")){
                    link.classList.remove("active")
                }
                
            })
            if(e.target.className=="link"){
                e.target.classList.add("active");
                
            }
        })
    }




function scrollUpp() {
    const scrollUp = document.getElementById("scroll-up");
    let home=document.getElementById("home")
    window.addEventListener("scroll", () => {
        if (window.scrollY >= 350) {
            scrollUp.classList.add("scroll-show");
        } else {
            scrollUp.classList.remove("scroll-show");
        }
    });

    if(scrollUp){
        scrollUp.addEventListener("click",()=>{
            home.scrollIntoView({behavior:'smooth'})
        })
    }
}



const sr=ScrollReveal({
    origin:"top",
    distance:'80px',
    duration:2000,
    delay:300
})


sr.reveal('.box')
sr.reveal('#about .box',{interval:500})
sr.reveal('.right',{origin:'bottom'})


function loadNumber(){
    let startd=true

    let portfolio=document.getElementById("portfolio");
    let numberss=document.querySelectorAll(".numbers p");
    window.addEventListener("scroll",()=>{
        if(portfolio.offsetTop-300<=window.scrollY){
            if(startd){
                numberss.forEach((element)=>{
                    stratCounter(element);
                })
            }
            startd=false
        }
    })


    function stratCounter(el){
        let goal=el.dataset.goal
        let count=setInterval(()=>{
            el.textContent++;
            if(el.textContent==goal){
                clearInterval(count)
            }

        },2000/goal)
    }
}






