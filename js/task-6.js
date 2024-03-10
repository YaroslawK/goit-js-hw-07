function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
    const controls = document.getElementById('controls');
    const input = controls.querySelector('input');
    const createBtn = controls.querySelector('[data-create]');
    const destroyBtn = controls.querySelector('[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createBtn.addEventListener('click', createBoxes);
    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes() {
      const amount = Number(input.value);
      if (amount < 1 || amount > 100 || isNaN(amount)) {
        alert('Please enter a number between 1 and 100');
        return;
      }
      const boxes = Array.from({ length: amount }, (_, index) => {
        const box = document.createElement('div');
        const size = 30 + index * 10;
        box.style.width = `${size}px`;
        box.style.height = `${size}px`;
        box.style.backgroundColor = getRandomHexColor();
        return box;
      });
      boxesContainer.append(...boxes);
      input.value = '';
    }

    function destroyBoxes() {
      boxesContainer.innerHTML = '';
    }