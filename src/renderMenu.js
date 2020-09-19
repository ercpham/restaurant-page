const renderMenu = () => {
    let page = document.getElementById("content");
    let content = document.createElement("div");
    let heading = document.createElement("h1");
    let image = document.createElement("img");
    
    heading.textContent = "Our Menu";
    image.setAttribute("src", "menu.jpg");
    
    content.appendChild(heading);
    content.appendChild(image);

    page.appendChild(content);
}

export default renderMenu;