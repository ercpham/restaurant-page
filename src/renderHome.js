const renderHome = () => {
    let page = document.getElementById("content");
    let content = document.createElement("div");
    let image = document.createElement("img");
    let copy = document.createElement("p");
    
    image.setAttribute("src", "glasses.jpg");
    image.setAttribute("id", "homepic");
    copy.textContent = "We push the boundaries of fine dining. We don't provide food. We provide an experience.";
    
    content.appendChild(image);
    content.appendChild(copy);

    page.appendChild(content);
    
}

export default renderHome;