function calcularIMC() {
    let inputA = document.querySelector("#altura");
    let inputP = document.querySelector("#peso");
    let form = document.querySelector("#form");
    form.reset
    let p = document.querySelector("#resultado") 

    let altura = parseFloat(inputA.value);
    let peso = parseFloat(inputP.value);

    let imc = (peso / (altura * 2)).toFixed(2);

    if(imc < 18.5){
        p.innerHTML = imc;
        p.style.color = "yellow"
    } else if(imc >= 18.5 && imc <= 24.9){
        p.innerHTML = imc;
        p.style.color = "green"
    } else if(imc >= 25 && imc <= 29.9){
        p.innerHTML = imc;
        p.style.color = "yellow"
    } else if(imc >= 30 && imc <= 39.9){
        p.innerHTML = imc;
        p.style.color = "orange"
    } else if(imc >= 40){
        p.innerHTML = imc;
        p.style.color = "red"
    }

}
function limparCampos(){
    document.querySelector("#peso").reset();
    document.querySelector("#altura").reset();
}