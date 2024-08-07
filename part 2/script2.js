
function detectLanguage() {
    const input = document.getElementById('wordInput').value.toLowerCase();
    const result = document.getElementById('result');
    const spanishVowels = ['á', 'é', 'í', 'ó', 'ú'];
    let hasTildes = false;

    for (let i = 0; i < spanishVowels.length; i++) {
        if (input.includes(spanishVowels[i])) {
            hasTildes = true;
            break;
        }
    }

    if (hasTildes) {
        result.textContent = 'Probablemente es una palabra en español.';
    } else {
        result.textContent = 'Probablemente es una palabra en inglés.';
    }
}