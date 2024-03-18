function createBox(content) {
  const box = document.createElement('div');
  box.innerHTML = `<span>${content}</span>`;
  box.classList.add('box', 'd-flex', 'justify-content-center', 'align-items-center');
  return box;
}

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
  }