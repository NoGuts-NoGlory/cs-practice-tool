const words = {
    easy: [
        "at", "it", "up", "on", "if", "ox", "up", "ad", "id", "ax",
        "am", "us", "as", "is", "an", "oh", "up", "in", "or", "as",
        "it", "at", "up", "ax", "ox", "it", "ax", "on", "ox", "id",
        "as", "at", "up", "am", "ad", "an", "ax", "id", "up", "ox",
        "it", "ox", "at", "in", "ox", "as", "on", "us", "up", "ad"
    ],
    normal: [
        "cat", "dog", "pin", "hot", "sit", "pot", "bag", "bat", "box", "fan",
        "man", "log", "win", "van", "sun", "hat", "ham", "bed", "pig", "net",
        "cup", "cut", "bus", "rug", "mud", "jug", "gum", "pen", "map", "top",
        "fox", "six", "tub", "nut", "hut", "den", "ten", "wet", "leg", "pig",
        "hop", "pop", "rug", "bug", "pat", "bat", "cab", "can", "pan", "rat"
    ],
    medium: [
        "plant", "crisp", "blend", "flint", "stomp", "stand", "bland", "clamp", "frank", "grasp",
        "drink", "blink", "brisk", "trunk", "clink", "stamp", "plumb", "clamp", "grind", "drift",
        "plank", "brand", "crust", "grant", "frost", "brunt", "prank", "spend", "trend", "grand",
        "twist", "cramp", "flask", "stint", "scamp", "twist", "crank", "stump", "tramp", "glint",
        "spend", "trust", "drank", "flint", "stint", "print", "stark", "blurt", "brisk", "clamp"
    ],
    hard: [
        "breathe", "scream", "dream", "cloak", "creep", "sweet", "treat", "boast", "chief", "faint",
        "fruit", "grain", "cheese", "groan", "streak", "swoop", "thief", "bleach", "knead", "quote",
        "smile", "plane", "bride", "globe", "crane", "spine", "drive", "flame", "stone", "joke",
        "inside", "basket", "kitten", "window", "hidden", "magnet", "insect", "problem", "market", "shelter",
        "sunset", "robin", "forgot", "pencil", "silent", "demand", "remind", "moment", "pocket", "napkin"
    ]
};

let wordInterval;

function fetchWords(level) {
    clearInterval(wordInterval);
    const wordList = words[level];
    const shuffled = wordList.sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, 5);

    let wordIndex = 0;
    document.getElementById('words').innerHTML = selectedWords[wordIndex];

    wordInterval = setInterval(() => {
        wordIndex = (wordIndex + 1) % selectedWords.length;
        document.getElementById('words').innerHTML = selectedWords[wordIndex];
    }, 3000);
}