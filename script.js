document.getElementById("itemForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let title = document.getElementById("title").value;
    let description = document.getElementById("description").value;
    let type = document.getElementById("type").value;

    let item = { title, description, type };

    let items = JSON.parse(localStorage.getItem("items")) || [];
    items.push(item);
    localStorage.setItem("items", JSON.stringify(items));

    displayItems();
    this.reset();
});

function displayItems() {
    let itemList = document.getElementById("itemList");
    itemList.innerHTML = "";

    let items = JSON.parse(localStorage.getItem("items")) || [];

    items.forEach(function(item) {
        let li = document.createElement("li");
        li.textContent = `${item.type}: ${item.title} - ${item.description}`;
        itemList.appendChild(li);
    });
}

displayItems();
