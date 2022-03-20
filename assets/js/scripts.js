let deleteAll = document.querySelector(".deleteAll");
let deleteLast = document.querySelector(".deleteLast");

function insert(number) {
    let num = document.getElementById("resultado").innerHTML;
    document.getElementById("resultado").innerHTML = num + number;
}

deleteAll.addEventListener("click", () => {
    document.querySelector("#resultado").innerHTML = '';
})

deleteLast.addEventListener("click", () => {
    let resultado = document.querySelector("#resultado").innerHTML;
    document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length -1)
})

function calcular() {
    let resultado = document.querySelector("#resultado").innerHTML;
    if (resultado) {
        document.getElementById("resultado").innerHTML = eval(resultado);
    } else {
        window.alert("Erro no cálculo, tente novamente.");
    }
}