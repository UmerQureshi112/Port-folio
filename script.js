let btn1 = document.querySelector(".btn1")
let about = document.querySelector(".heading")
btn1.addEventListener("click",()=>{
    about.scrollIntoView({
        behavior: "smooth"
    })

    setTimeout(() => {
      btn1.style.color = "#110133"
    }, 500);
})


let btn2 = document.querySelector(".btn2");
let skill = document.querySelector(".skill");
btn2.addEventListener("click",()=>{
  skill.scrollIntoView({
    behavior: "smooth"
  })

  setTimeout(() => {
      btn2.style.color = "#110133"
    }, 500);
})

let btn3 = document.querySelector(".btn3");
let projects = document.querySelector(".project")

btn3.addEventListener("click",()=>{
projects.scrollIntoView({
    behavior: "smooth"
})

setTimeout(() => {
      btn3.style.color = "#110133"
    }, 500);
    
})


let btn4 = document.querySelector(".btn4");
btn4.addEventListener("click",()=>{
window.location.href = "https://wa.me/923132911833"
btn4.style.color = "#FFC400"
setTimeout(() => {
 btn4.style.color = "#110133"
}, 300); 
})

let whatsapp = document.querySelector(".whatsapp");
whatsapp.addEventListener("click",()=>{
window.location.href = "https://wa.me/923132911833"
setTimeout(() => {
whatsapp.style.backgroundColor = "#110133" 
whatsapp.style.color = "white" 
}, 300);
})


let facebook = document.querySelector(".facebook");
facebook.addEventListener("click",()=>{
window.location.href = "https://www.facebook.com/profile.php?id=100089219105879"
setTimeout(() => {
facebook.style.backgroundColor = "#110133" 
facebook.style.color = "white" 
}, 300);
})

let instagaram = document.querySelector(".instagaram");
instagaram.addEventListener("click",()=>{
window.location.href = "https://www.instagram.com/umarqureshi6387?igsh=dzkxczU0OXVvMTZj"
setTimeout(() => {
instagaram.style.backgroundColor = "#110133" 
instagaram.style.color = "white" 
}, 300);
})

let Email = document.querySelector(".Email");
Email.addEventListener("click",()=>{
window.location.href = "mailto:umarqureshi.3610@gmail.com?subject=Contact%20Request&body=Hello%20Umar%2C%20please%20reply%20to%20my%20message."
setTimeout(() => {
Email.style.backgroundColor = "#110133" 
Email.style.color = "white" 
}, 300);
})

let Github = document.querySelector(".Github");
Github.addEventListener("click",()=>{
window.location.href = "https://github.com/umerqureshi844"
setTimeout(() => {
Github.style.backgroundColor = "#110133" 
Github.style.color = "white" 
}, 300);
})