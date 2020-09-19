const renderContact = () => {
    let page = document.getElementById("content");
    let content = document.createElement("div");
    let number = document.createElement("p");
    let email = document.createElement("p");
    
    number.textContent = "714-880-5384";
    email.textContent = "erc.pham@gmail.com";
    
    content.appendChild(number);
    content.appendChild(email);

    page.appendChild(content);
}

export default renderContact;