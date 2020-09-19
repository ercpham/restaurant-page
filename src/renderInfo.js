const renderInfo = () => {
    
    let page = document.getElementById("content");
    let content = document.createElement("div");
    let location = document.createElement("h2");
    location.textContent = "Location";
    let dot = document.createElement("div");
    dot.classList.add("dot");
    let address = document.createElement("p");
    address.textContent = "1509 Repoet Lane, Royal Valley, GU, 47832";
    content.appendChild(location);
    content.appendChild(dot);
    content.appendChild(address);
    page.appendChild(content);

}

export default renderInfo;