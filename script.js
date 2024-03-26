const word_el = document.getElementById("word");
const popup = document.getElementById('popup-container');
const message = document.getElementById('success-message');

const correctLetters = [];
const wrongLetters = [];
const selectedWord = getRandomWord();


function getRandomWord(){
    const words = ["java", "javascript", "python"]
    return words[Math.floor(Math.random() * words.length)]
}


function displayWord(){
    word_el.innerHTML = `
    ${selectedWord.split('').map(letter => `
        <div class="letter">
            ${correctLetters.includes(letter) ? letter : ''}
        </div>
    `).join('')}
  `;

  const w = word_el.innerText.replace(/\n/g,'');
  if(w === selectedWord){
    popup.style.display = 'flex';
    message.innerText = 'Tebrikler. Qazandiniz ;)';
  }
}

window.addEventListener('keydown', function(e){
    if(e.keyCode >= 65 && e.keyCode<=90){
        const letter = e.key; //basdigimiz klaviw

        if(selectedWord.includes(letter)){
            if(!correctLetters.includes(letter)){
                correctLetters.push(letter);
                displayWord();
            }else{
                console.log("bu herf artiq girilib");
            }
        }else{
            console.log("xetali herf");
        }
    }
});

displayWord();