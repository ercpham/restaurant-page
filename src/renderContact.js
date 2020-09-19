const renderContact = () => {
    let page = document.getElementById("content");
    let content = document.createElement("div");
    let phone = document.createElement("h2");
    phone.textContent = "Phone Number";
    let dot1 = document.createElement("div");
    dot1.classList.add("dot");
    let number = document.createElement("p");
    number.textContent = "714-880-5384";
    let dot2 = document.createElement("div");
    dot2.classList.add("dot");
    let email = document.createElement("h2");
    email.textContent = "Email";
    let eAddress = document.createElement("p");
    eAddress.textContent = "erc.pham@gmail.com";
    content.appendChild(phone);
    content.appendChild(dot1);
    content.appendChild(number);
    content.appendChild(email);
    content.appendChild(dot2);
    content.appendChild(eAddress);
    page.appendChild(content);
}

export default renderContact;