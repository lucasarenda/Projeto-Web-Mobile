
alert("bem-vindo !!")
document.getElementById("white").addEventListener("click", function(){
    document.body.style.backgroundColor = document.body.style.backgroundColor = "grey";
    this.style.backgroundColor = this.style.backgroundColor = "grey";
    black.style.backgroundColor = this.style.backgroundColor = "grey";
    alert("bem-vindo !!")
});
document.getElementById("black").addEventListener("click", function(){
    document.body.style.backgroundColor = document.body.style.backgroundColor = "black";
    this.style.backgroundColor = this.style.backgroundColor = "black";
    white.style.backgroundColor = this.style.backgroundColor = "black";
});
document.querySelectorAll(".detalhes").forEach(btn => {
    btn.addEventListener("click", function() {
        alert("Mais informações sobre o evento em breve!");
    });
});
const titulo = document.querySelector("h2");
const texto = "Próximos Eventos";
let index = 0;

function digitar() {
    if (index < texto.length) {
        titulo.textContent += texto[index];
        index++;
        setTimeout(digitar, 100);
    }
}

titulo.textContent = ""; 
digitar();