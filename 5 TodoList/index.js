let items = [];

const itemsDiv = document.getElementById('itemlist');
const input = document.getElementById("itemInput")
const storageKey = "items";

function renderItems() {
    itemsDiv.innerHTML = null;

    

    for (const [idx, item] of Object.entries(items)) {
        const container = document.createElement("div")
        container.style.marginBottom = "10px"

        const text = document.createElement("P")
        text.style.display = "inline"
        text.textContent = item;

        const button = document.createElement("button")
        button.textContent = "Delete"
        button.onclick = () => removeItem(idx)

        container.appendChild(text)
        container.appendChild(button)

        itemsDiv.appendChild(container)
    }
}

function loadItems() {
    const olditems  = localStorage.getItem(storageKey)
    if (olditems) items = JSON.parse(olditems)
    renderItems();
}

function saveItems() {
    const stringItems = JSON.stringify(items);
    localStorage.setItem(storageKey, stringItems)
}


function addItems() {
    const value = input.value;
    if (!value) {
        alert("You cannot add empty item")
        return
    }
    items.push(value)
    renderItems()
    input.value = ""
    saveItems()
}

function removeItem(idx) {
    items.splice(idx, 1);
    renderItems()
}

document.addEventListener("DOMContentLoaded", loadItems)