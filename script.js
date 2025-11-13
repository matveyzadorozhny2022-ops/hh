// Рандомный подарок
let gifts = ['g1.webp','g2.webp','g3.webp','g4.webp','g5.webp'];

// Телефон уменьшение + улёт вверх
setTimeout(() => {
  let phone = document.getElementById('phone');
  phone.classList.add('shrink-up');

  // Появление контента
  setTimeout(() => {
    document.querySelectorAll('#content *').forEach((el, i) => {
      setTimeout(() => el.classList.add('show'), i * 80);
    });
  }, 200);

}, 2000);


// ====== ТАП-МЕХАНИКА ======

let counter = 3;
let tapBtn = document.getElementById('tapBtn');
let counterNum = document.getElementById('counterNum');

tapBtn.addEventListener('click', () => {

  // Анимация нажатия
  tapBtn.style.transform = "scale(0.92)";
  setTimeout(() => tapBtn.style.transform = "scale(1)", 120);

  counter--;
  counterNum.textContent = counter;

  if (counter === 0) {
    // Заменить кнопку на подарок
    let randomGift = gifts[Math.floor(Math.random() * gifts.length)];
    tapBtn.src = randomGift;

    // Удалить надпись "Осталось"
    document.getElementById('tapCounter').style.display = "none";
  }
});
