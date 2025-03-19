// Задание 1 //
// Здесь выбираем элементы по их классам
const input = document.querySelector(".slider__input");
const img = document.querySelector(".slider__image");

// Функция, изменяющая размер изображения при перемещении ползунка
function updateImageSize() {
  const value = input.value; // Переменная value принимает текущее значение ползунка (по умолчанию 50). Размер изображения изменяется в зависимости от value
  img.style.width = `${value}%`;
}

//лодаш
const debounceUpdate = _.debounce(updateImageSize, 300, {
  leading: true,
  trailing: true,
});

//ползунок
input.addEventListener("input", debounceUpdate);

// Завдание 2 //
const box = document.getElementById("box");

//делю пополам, что бы курсор центровать
function moveBox(event) {
  const x = event.clientX - box.offsetWidth / 2;
  const y = event.clientY - box.offsetHeight / 2;

  box.style.left = `${x}px`;
  box.style.top = `${y}px`;
}

const debounceMoveBox = _.debounce(moveBox, 100, {
  leading: true,
  trailing: true,
});

document.addEventListener("mousemove", debounceMoveBox);
