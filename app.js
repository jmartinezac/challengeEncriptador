


function encriptarTexto() {
    let texto = document.getElementById('text_input').value
    let textoLower = texto.toLowerCase()
    let separado = textoLower.split('')
    
    console.log(separado)
    for (let i = 0; i < separado.length; i++){
        switch (separado[i]) {
            case 'e':
                separado[i] = 'enter';
                break
            case 'i':
                separado[i] = 'imes'
                break
            case 'a':
                separado[i] = 'ai'
                break
            case 'o':
                separado[i] = 'ober'
                break
            case 'u':
                separado[i] = 'ufat'
                break
        }
    }
    let elementoHTML = document.getElementById('texto_encriptado');
    let cadena = separado.join('')
    elementoHTML.innerHTML = cadena;
    console.log(cadena)
    return cadena
}
console.log(texto)
function DesencriptarTexto() {
    let texto = document.getElementById('text_input').value
    let elementoHTML = document.getElementById('texto_encriptado');
    elementoHTML.innerHTML = texto
}


// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"