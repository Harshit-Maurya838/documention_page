const nav = document.querySelector('.nav');
nav.style.left = "-100%";

const showNav = () =>{
    if(nav.style.left == "-100%"){
        nav.style.left = "0";
    }else{
        nav.style.left = "-100%";
    }
}

const navSwitch = () =>{
    nav.style.left = "-100%";
}