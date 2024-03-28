function gerar() {
    let numero = document.querySelector('input#numero')
    let resultado = document.querySelector('select#resultado')
    if(numero.value.length == 0) {
        alert('Por favor, digite um número.')
    } else {
        let n = Number(numero.value)
        let c = 1
        resultado.innerHTML = ''
        while (c <=10) {
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n * c}`
            resultado.appendChild(item)
            c++
        }
 
    }

}
