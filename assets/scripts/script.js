let theme = document.querySelector(".theme");
let btntriger = document.querySelector(".btn--triger");

btntriger.onclick = function () {
  theme.classList.toggle("light");
  theme.classList.toggle("dark");
};

/*let theme = localStorage.getItem('data-theme');
const checkbox = document.getElementById("switch");
const changeThemeToDark = () =>{
    document.documentElement.setAttribute("data-theme", "dark")
    localStorage.setItem("data-theme", "dark")
    console.log("I give you dark")
}

const changeThemeToLight = () =>{
    document.documentElement.setAttribute("data-theme", "light")
    localStorage.setItem("data-theme", 'light')
}

if(theme === 'dark'){
    changeThemeToDark()
}

checkbox.addEventListener('change', ()=> {
    let theme = localStorage.getItem('data-theme');
    if (theme ==='dark'){
        changeThemeToLight()
    }else{
        changeThemeToDark()
    }
   
})*/

/*
let theme = document.querySelector('.theme');
let btntriger = document.querySelector('.btn--triger');

btntriger.onclick = function() {
     theme.classList.toggle('light');
    theme.classList.toggle('dark');
};
*/
/*document.querySelector('.page').classList.add('light-theme');
document.querySelector('.page').classList.remove('light-theme');
*/
