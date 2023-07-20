const lightModeBtn = document.querySelector(".light-mode-btn")
const darkModeBtn = document.querySelector(".dark-mode-btn")

lightModeBtn.addEventListener("click", () => {
    setUserName("dark")
})

darkModeBtn.addEventListener("click", () => {
    setUserName("light")
})

function setUserName(theme){
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
}