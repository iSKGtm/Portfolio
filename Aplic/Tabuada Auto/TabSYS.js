function tabuada() {
    var num = document.getElementById('txtn') // Armazenar variavel de entrada txtn
    var tab = document.getElementById('seltab')
    if(num.value.length == 0) { // String.fromCodePoint(0x1F629) [TENTATIVA DE ADICIONAR 😩, ATRAVES METODOS ANTIGOS.]
        window.alert('Sem meu número, eu não consigo! 😩 \nDigite um número para que eu possa calcular.') // Se o valor de entrada não for digitado corretamente (usando um numero, então mostrara uma alerta do navegador.)
    } else { // se não, seguir com o calculo normalmente.
        var n = Number(num.value) // armazenar numero de entrada e transformar string em numero.
        var c = 1 //armazenar 1 (para  o inicio de multiplicação)
        tab.innerHTML = '' // função de limpeza de tabela a base de gambiarra.
        while (c <= 50) { // laço de repetição de c, onde repetirá multiplicação até 50x [Doideira minha, ninguém vai ver tabuada de 50x.]
            var item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}` //String convertida para number * o valor multiplicado de 1 a 50 = ao valor de n * c.
            item.value = `tab${c}` // = resposta.
            tab.appendChild(item)
            c++ // SE TIRAR ISSO, QUEBRARÁ A APLICAÇÃO. [METODO DE GAMBIARRA]
        }
    }
}