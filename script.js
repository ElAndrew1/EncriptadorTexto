function encryptText() {
    const inputText = document.getElementById('inputText').value;
    let encryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        // Encriptar solo letras mayúsculas y minúsculas
        if (charCode >= 65 && charCode <= 90) { // Letras mayúsculas
            encryptedText += String.fromCharCode(90 - (charCode - 65));
        } else if (charCode >= 97 && charCode <= 122) { // Letras minúsculas
            encryptedText += String.fromCharCode(122 - (charCode - 97));
        } else {
            encryptedText += inputText.charAt(i); // Mantener los demás caracteres igual
        }
    }

    document.getElementById('outputText').innerText = encryptedText;
}

function decryptText() {
    const inputText = document.getElementById('outputText').innerText;
    let decryptedText = '';

    for (let i = 0; i < inputText.length; i++) {
        let charCode = inputText.charCodeAt(i);

        // Desencriptar solo letras mayúsculas y minúsculas
        if (charCode >= 65 && charCode <= 90) { // Letras mayúsculas
            decryptedText += String.fromCharCode(90 - (charCode - 65));
        } else if (charCode >= 97 && charCode <= 122) { // Letras minúsculas
            decryptedText += String.fromCharCode(122 - (charCode - 97));
        } else {
            decryptedText += inputText.charAt(i); // Mantener los demás caracteres igual
        }
    }

    document.getElementById('outputText').innerText = decryptedText;
}
