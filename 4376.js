window.onload = () => {
  const words = Array.from({length: 8}, (_, i) => i + 1);
  words.forEach(word => {
    document.querySelector(`.word_${word}`).classList.remove(`selected${word}`);
    toggleWord(word);
    setInterval(() => toggleWord(word), 8000);
  });
};

function toggleWord(word) {
  setTimeout(() => {
    document.querySelector(`.word_${word}`).classList.toggle(`selected${word}`);
  }, 1000 * word);
  setTimeout(() => {
    document.querySelector(`.word_${word}`).classList.toggle(`selected${word}`);
  }, 1000 * (word + 1));
}
