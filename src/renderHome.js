const renderHome = () => {
    let page = document.getElementById("content");
    let content = document.createElement("div");
    let heading = document.createElement("h1");
    let image = document.createElement("img");
    let copy = document.createElement("p");
    
    heading.textContent = "The Broken Cane";
    image.setAttribute("src", "restaurant.jpg");
    copy.textContent = "A unique dining experience";
    
    content.appendChild(heading);
    content.appendChild(image);
    content.appendChild(copy);

    page.appendChild(content);
    
}

export default renderHome;