let deleteAll = document.querySelector(".deleteAll");
let deleteLast = document.querySelector(".deleteLast");

const actions = {
    deleteAll() {
        deleteAll.addEventListener("click", () => {
            document.querySelector("#resultado").innerHTML = '';
        })
    },
    deleteLast() {
        deleteLast.addEventListener("click", () => {
            let resultado = document.querySelector("#resultado").innerHTML;
            document.querySelector("#resultado").innerHTML = resultado.substring(0, resultado.length - 1)
        })
    },
    calculate() {
        let resultado = document.querySelector("#resultado").innerHTML;
        if (resultado) {
            document.getElementById("resultado").innerHTML = eval(resultado);
        } else {
            window.alert("Erro no cálculo, tente novamente.");
        }
    },
    insert(number) {
        let num = document.getElementById("resultado").innerHTML;
        document.getElementById("resultado").innerHTML = num + number;
    }
}

actions.deleteAll();
actions.deleteLast();
actions.calculate();
actions.insert();