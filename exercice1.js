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

    list.innerHTML = ""
    restoreList.innerHTML = ""

    for (let i = 0; i < articles.length; i++) {
        list.innerHTML += `<li id="li_${articles[i]}">${articles[i]} <button id="${articles[i]}">Hide</button></li>`;
        restoreList.innerHTML += `<option value="${articles[i]}">`
    }
}
ArrayUpdate()

document.getElementById("buttons").addEventListener("click", someFunction);

function someFunction(event) {
    const el = event.target.id;
    if (!articles.includes(el)) return;
    var listEl = document.getElementById(`li_${el}`);
    listEl.style.display = "none";
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
    console.log(selectedRestore.value)
    
    var showEl = document.getElementById(`li_${selectedRestore.value}`);
    if(showEl.style.display != "none") return alert("This article is not hide")
    showEl.style.display = "";
    selectedRestore.value = "";
})



