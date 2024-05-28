const words = {
    easy: [
        "apple", "book", "cat", "dog", "egg", "fish", "goat", "hat", "ice", "jam",
        "kite", "lamp", "map", "net", "owl", "pen", "queen", "rat", "sun", "top",
        "umbrella", "van", "wolf", "x-ray", "yarn", "zebra", "ball", "car", "duck",
        "ear", "frog", "grape", "horse", "ink", "jug", "key", "lion", "mouse", "nest",
        "orange", "pig", "quilt", "ring", "sock", "tiger", "umbrella", "vase", "whale",
        "xylophone", "yo-yo", "zoo"
    ],
    medium: [
        "elephant", "bicycle", "dolphin", "giraffe", "penguin", "airplane", "balloon", "candle",
        "diamond", "engine", "fountain", "guitar", "helicopter", "island", "jungle", "kangaroo",
        "lighthouse", "mountain", "notebook", "ocean", "pencil", "quicksand", "rainbow", "sandcastle",
        "telescope", "universe", "volcano", "waterfall", "xylophone", "yacht", "zeppelin",
        "accordion", "backpack", "carousel", "dragonfly", "escalator", "fireplace", "glacier", "hamburger",
        "igloo", "jellyfish", "kitchen", "labyrinth", "meadow", "nightingale", "octopus", "parachute",
        "quarantine", "robot"
    ],
    hard: [
        "photosynthesis", "subterranean", "quintessential", "encyclopedia", "conscientious",
        "hypothesis", "parallelogram", "infrastructure", "jurisdiction", "psychology",
        "archaeology", "biotechnology", "cryptocurrency", "demonstrative", "electromagnetic",
        "flabbergasted", "gastroenterology", "hematology", "interdisciplinary", "juxtaposition",
        "kaleidoscope", "lymphocytosis", "metamorphosis", "neurotransmitter", "ornithology",
        "paleontology", "quantitative", "radiation", "spectroscopy", "telecommunication",
        "uncharacteristic", "ventriloquism", "weatherization", "xenotransplantation", "youthfulness",
        "zoonotic", "antidisestablishmentarianism", "bureaucratization", "circumnavigation",
        "deoxyribonucleic", "ethnopharmacology", "ferromagnetism", "galvanization", "hemoglobinopathy",
        "immunohistochemistry", "jurisprudence", "kinesiological", "laryngopharyngeal", "microspectrophotometry"
    ]
};

function fetchWords() {
    const complexity = document.getElementById('complexity').value;
    const wordList = words[complexity];
    const shuffled = wordList.sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, 5);
    document.getElementById('words').innerHTML = selectedWords.join(', ');
}