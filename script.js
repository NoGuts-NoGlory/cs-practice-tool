async function fetchWords() {
    const complexity = document.getElementById('complexity').value;
    let minLength, maxLength;

    if (complexity === 'easy') {
        minLength = 3;
        maxLength = 5;
    } else if (complexity === 'medium') {
        minLength = 6;
        maxLength = 8;
    } else if (complexity === 'hard') {
        minLength = 9;
        maxLength = 15;
    }

    const response = await fetch(`https://api.datamuse.com/words?sp=?&max=1000&md=p&max=${maxLength}&min=${minLength}`);
    const words = await response.json();

    // Filter the words to get 5 random ones
    const filteredWords = words
        .filter(word => word.word.length >= minLength && word.word.length <= maxLength)
        .slice(0, 5)
        .map(word => word.word);

    // Display the words
    document.getElementById('words').innerHTML = filteredWords.join(', ');
}
