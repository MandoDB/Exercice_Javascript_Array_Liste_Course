/**
 * Created by sstienface on 16/10/2018.
 */


// Inutile de modifier le code suivant
var articles = [
    "Orangina",
    "Creme Fraiche",
    "Tartiflette",
    "Emmental",
    "Bananes",
    "Chips",
    "Bieres",
    "Pizza"
];

// Votre code à partir d'ici :
function ArrayUpdate() {
    var list = document.getElementById('listeCourse');
    var restoreList = document.getElementById('article');
    var itemSwap1 = document.getElementById('item1');
    var itemSwap2 = document.getElementById('item2');

    list.innerHTML = ""
    restoreList.innerHTML = ""
    itemSwap1.innerHTML = ""
    itemSwap2.innerHTML = ""

    for (let i = 0; i < articles.length; i++) {
        list.innerHTML += `<li id="li_${articles[i]}">${articles[i]} <button id="hide_${articles[i]}">Hide</button> <button id="del_${articles[i]}">x</button></li>`;
        restoreList.innerHTML += `<option value="${articles[i]}">`
        itemSwap1.innerHTML += `<option value="${articles[i]}">`
        itemSwap2.innerHTML += `<option value="${articles[i]}">`
    }
}
ArrayUpdate()

document.getElementById("buttons").addEventListener("click", hideDelArticle);

function hideDelArticle(event) {
    const el = event.target.id;

    var splitedValue = el.split("_");
    var value = splitedValue[0]
    var li = splitedValue[1]
    switch (value) {
        case "del":
            if (!articles.includes(splitedValue[1])) return;
            var listEl = document.getElementById(`li_${li}`);
            var index = articles.indexOf(li);
            articles.splice(index, 1)
            listEl.remove(li)
            ArrayUpdate()
            break;
        case "hide":
            if (!articles.includes(li)) return;
            var listEl = document.getElementById(`li_${li}`);
            listEl.style.display = "none";
            break;
        default:
            console.log("none")
    }
}


document.getElementById('submitElement').addEventListener('click', function () {
    var text = document.getElementById('champText');
    var list = document.getElementById('listeCourse');

    if (!text.value) return alert('Please enter correct value')
    articles.push(text.value)
    ArrayUpdate()
    text.value = "";
    text.focus()
});

document.getElementById('restoreSubmit').addEventListener('click', function () {
    var selectedRestore = document.getElementById('selectedOption');

    var showEl = document.getElementById(`li_${selectedRestore.value}`);
    if (showEl.style.display != "none") return alert("This article is not hide")
    showEl.style.display = "";
    selectedRestore.value = "";
})

document.getElementById('swapItemSubmit').addEventListener('click', function () {
    var swapItem1 = document.getElementById('swapItem1');
    var swapItem2 = document.getElementById('swapItem2');
    var index1 = articles.indexOf(swapItem1.value);
    var index2 = articles.indexOf(swapItem2.value);

    articles[index1] = swapItem2.value;
    articles[index2] = swapItem1.value;
    swapItem1.value = ""
    swapItem2.value = ""
    ArrayUpdate()
})