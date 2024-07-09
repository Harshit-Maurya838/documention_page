const nav = document.querySelector('.nav');
nav.style.right = "-100%";

const showNav = () =>{
    if(nav.style.right == "-100%"){
        nav.style.right = "0";
    }else{
        nav.style.right = "-100%";
    }
}

const navSwitch = () =>{
    nav.style.right = "-100%";
}