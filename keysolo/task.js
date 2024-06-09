class Game {
  constructor(container) {
    this.container = container;
    this.wordElement = container.querySelector('.word');
    this.winsElement = container.querySelector('.status__wins');
    this.lossElement = container.querySelector('.status__loss');
    this.symbols = container.getElementsByClassName('symbol');
    console.log(this.symbols)
    this.currentSymbol = container.querySelector('.symbol_current');
    this.timer = document.getElementById('timer-count');

    this.reset();

    this.registerEvents();
  }


  reset() {
    this.setNewWord();
    this.winsElement.textContent = 0;
    this.lossElement.textContent = 0;
  }

  registerEvents() {
    document.addEventListener('keyup', e => {
      let key = e.key.toLowerCase(); // Convert key to lowercase
      let currentSymbolText = this.currentSymbol.textContent.toLowerCase(); // Convert currentSymbol text to lowercase
      if (key === currentSymbolText) {
        this.success();
      } else {
        this.fail();
      }
    });

  }

  success() {
    if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
    this.currentSymbol.classList.add('symbol_correct');
    this.currentSymbol = this.currentSymbol.nextElementSibling;

    if (this.currentSymbol !== null) {
      this.currentSymbol.classList.add('symbol_current');
      return;
    }

    if (++this.winsElement.textContent === 10) {
      alert('Congratulations!');
      this.reset();
    }
    this.setNewWord();

  }

  fail() {
    if (++this.lossElement.textContent === 5) {
      alert('The end :( Try again!');
      this.reset();
    }
    this.setNewWord();


  }

  setNewWord() {
    const word = this.getWord();

    this.renderWord(word);
    clearInterval(this.timerInterval);
    this.setTime();
  }

  getWord() {
    const words = [
      'bob',
      'awesome',
      'netology',
      'hello',
      'kitty',
      'rock',
      'youtube',
      'popcorn',
      'cinema',
      'love',
      'javascript'
    ],
      index = Math.floor(Math.random() * words.length);

    return words[index];
  }

  renderWord(word) {
    const html = [...word]
      .map(
        (s, i) =>
          `<span class="symbol ${i === 0 ? 'symbol_current' : ''}">${s}</span>`
      )
      .join('');
    this.wordElement.innerHTML = html;

    this.currentSymbol = this.wordElement.querySelector('.symbol_current');
  }

  setTime() {
    this.timer.textContent = this.symbols.length;
    this.timerInterval = setInterval(() => {
      this.timer.textContent = parseInt(this.timer.textContent) - 1;
      if (parseInt(this.timer.textContent) === 0) {
        this.fail();
        clearInterval(this.timerInterval);
      }
    }, 1000);
  }
}

new Game(document.getElementById('game'))