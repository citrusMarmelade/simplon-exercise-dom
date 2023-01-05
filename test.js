const firstH1 = document.querySelector("h1");
const listLi = document.querySelectorAll("li");
const ul = document.querySelector("ul");
const container = document.getElementById("container")


console.log("Premier H1 -> Contenu : ", firstH1.textContent);
console.log("Premier LI methode 1 ", document.querySelector("li").innerHTML);
console.log("Premier LI methode 2 ", ul.firstElementChild.innerHTML);
console.log("Premier LI methode 3 ", document.getElementsByTagName("li")[0].innerHTML)

console.log("Dernier LI ", ul.lastElementChild.innerHTML);
console.log("Troisième LI ", listLi[2].innerHTML);
console.log("Parent du UL ", ul.parentNode.innerHTML);
console.log("Parent de la quatrième balise LI ", listLi[3].parentNode.innerHTML)


ul.addEventListener("mouseover", function() {
    container.style.color = "red";
});
ul.addEventListener("mouseout", function() {
    container.style.color = "black";
})