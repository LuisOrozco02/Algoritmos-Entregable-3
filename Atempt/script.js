
document.getElementById('heroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const animal = document.getElementById('animal').value;

    const prefixes = ["Super", "Mega", "Ultra", "Capitán", "Señor", "Dama", "Doctor", "Profe"];

    function generateHeroName(userName, animal) {
        const capitalizedAnimal = animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
        const randomPrefix = prefixes[Math.floor(Math.random() * prefixes.length)];
        return `${randomPrefix} ${capitalizedAnimal} ${userName}`;
    }

    const heroName = generateHeroName(userName, animal);
    document.getElementById('heroNameResult').textContent = `Tu nombre de superhéroe es: ${heroName}`;
});

document.getElementById('heroForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const userName = document.getElementById('userName').value;
    const animal = document.getElementById('animal').value;

    function generateHeroName(userName, animal) {
        const capitalizedAnimal = animal.charAt(0).toUpperCase() + animal.slice(1).toLowerCase();
        return `${capitalizedAnimal} ${userName}`;
    }

    const heroName = generateHeroName(userName, animal);
    document.getElementById('heroNameResult').textContent = `Tu nombre de superhéroe es: ${heroName}`;
});

document.getElementById('usernameForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;

    const usernameForm = generateUsername(firstName, lastName);
    document.getElementById('result').textContent = `Nombre de Usuario Generado: ${username}`;

    function generateUsername(firstName, lastName) {
        const firstPart = firstName.slice(0, 3).toLowerCase();
        const secondPart = lastName.slice(0, 3).toLowerCase();
        const randomNumber = Math.floor(Math.random() * 1000);

        return firstPart + secondPart + randomNumber;
    }

    const username = generateUsername(firstName, lastName);
    document.getElementById('result').textContent = `Nombre de Usuario Generado: ${username}`;
});

function calcularBMI() {
    let peso = parseFloat(document.getElementById('peso').value);
    let altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerText = "Por favor, ingrese valores válidos.";
        return
    }

    let bmi = peso / (altura * altura);
    let resultado = "El BMI calculado es: " + bmi.toFixed(2) + ". ";

    if (bmi < 18.5) {
        resultado += "Bajo peso.";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        resultado += "Peso normal.";
    } else if (bmi >= 25 && bmi <= 29.9) {
        resultado += "Sobrepeso.";
    } else {
        resultado += "Obesidad.";
    }

    document.getElementById('resultado').innerText = resultado;
}
document.getElementById('reverseForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const phrase = document.getElementById('phrase').value;

    function reverseWords(phrase) {
        return phrase.split(' ').map(word => word.split('').reverse().join('')).join(' ');
    }

    const reversedPhrase = reverseWords(phrase);
    document.getElementById('reversedResult').textContent = `Frase invertida: ${reversedPhrase}`;
});

document.getElementById('tipForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const billTotal = parseFloat(document.getElementById('billTotal').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);

    if (isNaN(billTotal) || isNaN(tipPercentage) || billTotal <= 0 || tipPercentage < 0) {
        document.getElementById('tipResult').textContent = "Por favor, ingrese valores válidos.";
        return;
    }

    const tipAmount = billTotal * tipPercentage / 100;
    document.getElementById('tipResult').textContent = `La propina calculada es: $${tipAmount.toFixed(2)}`;
});
