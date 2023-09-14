const text = "Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit anim id est laborum."

const srctext = document.getElementById("srcText");
const inputElement= document.getElementById("userInput");
const words = text.split(' ')

words.forEach((word, i) => {
    const wordText = document.createElement('span');
    wordText.textContent = word;
    wordText.id = `${i}`;
    srctext.appendChild(wordText);
    if (i < words.length - 1) {// Add space between words
        srctext.appendChild(document.createTextNode(' ')); 
    }
});

let currentIndex = 0;
let currWord = words[currentIndex];
let wordElement = document.getElementById(`${currentIndex}`);

inputElement.addEventListener('keydown', (event) => {
    const key = event.key;

    if (key === ' ' || key === 'Enter') {
            if (inputElement.value.trim() === currWord){
            wordElement.style.color =  "green"
            // change the color of word to green and go to next word
            inputElement.value = '';
            currentIndex++

            if (currentIndex === words.length){
                    currentIndex = 0;
                }
            currWord = words[currentIndex];
            wordElement = document.getElementById(`${currentIndex}`);

            }
            else{
                wordElement.style.color =  "red"
            }

    }else
        if (!(inputElement.value.trim() === currWord.slice(0, inputElement.value.length))){
            wordElement.style.color =  "red"
            // change the color of word to red
    }
});