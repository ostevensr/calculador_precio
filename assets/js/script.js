
const precio = 400000;
const resultados = document.getElementById("resultados");

calcular.addEventListener("click", (event) => {

    let input_cant = document.getElementById("cantidad");
    let input_color = document.getElementById("color_elegido");

    let total = input_cant.value * precio

    resultados.innerHTML = `
    <div id='detalles_resultados'>

        <p>Total: $ ${total}</p>
        <p>Cantidad: ${input_cant.value}</p>
        <div id="detalle-color">
        <p>Color:</p>
        <div style="background-color:${input_color.value};border: black;border-radius: 200px 200px 200px 200px;
    -webkit-border-radius: 200px 200px 200px 200px;
    -moz-border-radius: 200px 200px 200px 200px;height: 3rem; width: 3rem;"> </div> 

    </div>
    `;


});