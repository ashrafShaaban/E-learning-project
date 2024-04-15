let myprofile=document.querySelector(".header .flex .profile");
let userbtn=document.getElementById("user-btn");
let searchbtn=document.getElementById("search-btn");
let searchForm=document.querySelector(".header .flex .search-form");
let body=document.body;
let sidebar=document.querySelector(".side-bar");
searchbtn.onclick =()=>{
    searchForm.classList.toggle("active");
    myprofile.classList.remove("active");
}
userbtn.onclick = ()=>{
    myprofile.classList.toggle("active");
    searchForm.classList.remove("active");
}

document.getElementById("menu-btn").onclick = () =>{
   sidebar.classList.toggle("active");
   body.classList.toggle("active");
}
document.querySelector(".side-bar .closebtn").onclick = ()=>{
    sidebar.classList.remove("active");
    body.classList.remove("active");

}

window.onscroll = ()=>{
    myprofile.classList.remove("active");
    searchForm.classList.remove("active");

    if (window.innerWidth < 1200){
        sidebar.classList.remove("active");
    body.classList.remove("active");
    }
}

let darkmodebtn= document.querySelector('#toggle-btn');


let darkmode = localStorage.getItem('dark-mode');

const enabledarkmode = ()=>{
    darkmodebtn.classList.replace('fa-sun','fa-moon');
    body.classList.add('dark');
    localStorage.setItem('dark-mode','enabled');
}

const disabledarkmode = ()=>{
    darkmodebtn.classList.replace('fa-moon','fa-sun');
    body.classList.remove('dark');
    localStorage.setItem('dark-mode','disabled');
}

if(darkmode === 'enabled'){
    enabledarkmode();
}

darkmodebtn.onclick = ()=>{
    let darkmode = localStorage.getItem('dark-mode');
   if(darkmode === 'disabled'){
    enabledarkmode();
   }
   else{
    disabledarkmode();
   }
}