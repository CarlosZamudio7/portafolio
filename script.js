const textArea = document.querySelector(".textarea");
const resultado = document.querySelector(".resultado");
const copiar = document.querySelector(".copiar")

function botonencriptar(){
    const textoencriptado = encriptar(textArea.value)
    mensaje.value = textoencriptado
    textArea.value = "";
    resultado.style.backgroundImage = "none"
}
function encriptar(stringEncriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringEncriptado = stringEncriptado.tolowercase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringEncriptado.includes(matrizCodigo[i][0])){
            stringEncriptado = stringEncriptado.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptado
}


function botondesencriptar(){
    const textodesencriptado = desencriptar(textArea.value)
    mensaje.value = textodesencriptado
    textArea.value = "";
    resultado.style.backgroundImage = "none"
}
function desencriptar(stringdesencriptado){
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringdesencriptado = stringdesencriptado.tolowercase()

    for(let i = 0; i<matrizCodigo.length; i++){
        if(stringdesencriptado.includes(matrizCodigo[i][1])){
            stringdesencriptado=stringdesencriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])

        }

    }
    return stringdesencriptado
}

