const renderMenu = () => {
    let dishes = {"Appetizers" : ["Avocado Toast Bites", "Stuffed Mushrooms"], 
                                    "Main Courses": ["Salmon a la Reti", "Wagyu: Deconstructed"],
                                     "Dessert": ["Italian Custard"]};

    let page = document.getElementById("content");
    let content = document.createElement("div");
    
    Object.keys(dishes).forEach((key) => {
        let course = document.createElement("h2");
        course.textContent = key;
        content.appendChild(course);
        let spacer = document.createElement("div");
        spacer.classList.add("dot");
        content.appendChild(spacer);
        dishes[key].forEach((item) => {
            let dish = document.createElement("h3");
            dish.textContent = item;
            content.appendChild(dish);
        });
    })

    page.appendChild(content);
}

export default renderMenu;