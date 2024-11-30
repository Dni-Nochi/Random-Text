const text = [
    "Некоторые лучшим оружием называют, то из которого и стрелять не надо. Я с ними в корне не согласен. Я выберут то, которому достаточно выстрелить один раз. Так отец делал. Так Америка делает. И до сих пор вполне успешно. Найдите повод спустить этих крошек с поводка, и я вам лично гарантирую парни, враг никогда не выползет из своих пещер. - Iron Man",
    "Я видел как американских солдат убивают моим оружием. Которое создавалось, чтобы служить им. И я понял, что я стал предаком системы процветающей в своей безответственности. - Iron Man",
    "Я Железный человек.",
]

const textElement = document.getElementById('quote');
const generateBtn = document.getElementById('generate-btn');

function generateRandomText() {
    const randomIndex = Math.floor(Math.random() * text.length);
    console.log(randomIndex)
    const randomQuote = text[randomIndex];
    console.log(randomQuote)
    textElement.textContent = randomQuote;
}

generateBtn.addEventListener('click', generateRandomText);

