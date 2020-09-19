import renderHome from "./renderHome";
import renderMenu from "./renderMenu";
import renderContact from "./renderContact";
import renderInfo from "./renderInfo";

function goHome() {
    resetSelected();
    this.classList.add("selected");
    clearScreen();
    renderHome();
}
function goContact() {
    resetSelected();
    this.classList.add("selected");
    clearScreen();
    renderContact();
}
function goMenu() {
    resetSelected();
    this.classList.add("selected");
    clearScreen();
    renderMenu();
}
function goInfo() {
    resetSelected();
    this.classList.add("selected");
    clearScreen();
    renderInfo();
}
function clearScreen() {
    let parent = document.getElementById("content");
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}
function resetSelected() {
    let tabs = document.querySelectorAll(".tab");
    tabs.forEach((tab) => tab.classList.remove("selected"));
}

document.getElementById("home").addEventListener("click", goHome);
document.getElementById("contact").addEventListener("click", goContact);
document.getElementById("menu").addEventListener("click", goMenu);
document.getElementById("info").addEventListener("click", goInfo);

renderMenu();