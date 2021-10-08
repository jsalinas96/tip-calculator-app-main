//Definición variables
let bill = 0;
let numPeople = 0;
let custom = 0;
let tip = 0;

//Obtener valores de los input
function getValueInput() {
    bill = document.getElementById('bill').value
    bill = parseFloat(bill, 10)

    numPeople = document.getElementById('person').value
    numPeople = parseInt(numPeople,10)

    custom = document.getElementById('custom').value
    document.getElementById('custom').classList.remove('selected')
    if(custom != "") {
        custom = parseInt(custom, 10)
        changeClass('custom')
        tip = custom
    }

    const error = document.getElementById('error')
    if(numPeople == 0) {
        error.innerHTML = "Can't be zero"
        document.getElementById("person").classList.add("input_error")
    }
    else {
        error.innerHTML = ""
        document.getElementById("person").classList.remove("input_error")
    }
    //console.log(bill, numPeople, tip)

    //Llamada a la función para realizar el cálculo
    calculo()
}

//Obtener Tip
document.querySelectorAll('.tip').forEach( item => {
    item.addEventListener('click', e => {
        var elemId = e.target.getAttribute('id');
        //Cambiar estilo boton seleccionado
        changeClass(elemId)
        //Quitar valor y selected al input custom
        document.getElementById('custom').value=""
        document.getElementById('custom').classList.remove('selected')

        tip = parseInt(elemId, 10);

        //console.log(tip)

        //Llamada a la función para realizar el cálculo
        calculo()
    });
});

function changeClass(elemId) {
    //Quitar a todos los botones la clase 'selected'
    document.querySelectorAll('.tip').forEach( x => {
        x.classList.remove('selected')
    });
    //Asignar la clase 'selected' al elemento clickeado
    document.getElementById(elemId).classList.add('selected');
}

function calculo() {
    //Si no es NaN
    if(bill == bill && tip == tip && numPeople != 0 && numPeople == numPeople) {
        
        /*console.log('bill',bill)
        console.log('% tip', tip)
        console.log('numPeople',numPeople)*/
        
        var tip_amount = ((bill*tip)/100)/numPeople;
        tip_amount = tip_amount.toFixed(2);

        var total =  (bill+(bill*tip)/100)/numPeople;
        total = total.toFixed(2)

        document.getElementById('tip-amount').innerHTML = "$"+tip_amount
        document.getElementById('total').innerHTML = "$"+total
    }
}

function reset() {
    //Limpiar todos los input
    document.getElementById('bill').value=""
    document.getElementById('person').value=""
    document.getElementById('custom').value=""
    //Limpiar los resultados
    document.getElementById('tip-amount').innerHTML = "$0.00"
    document.getElementById('total').innerHTML = "$0.00"
    //Quitar a todos los botones la clase 'selected'
    document.querySelectorAll('.tip').forEach( x => {
        x.classList.remove('selected')
    });
    //Quitar selected al input custom
    document.getElementById('custom').classList.remove('selected')
}