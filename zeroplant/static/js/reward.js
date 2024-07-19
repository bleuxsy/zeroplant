document.querySelector('.left-btn').addEventListener('click', () => {
  document.querySelector('.plant-items').scrollBy({
      left: -200,
      behavior: 'smooth'
  });
});

document.querySelector('.right-btn').addEventListener('click', () => {
  document.querySelector('.plant-items').scrollBy({
      left: 200,
      behavior: 'smooth'
  });
});

function toggleSelection(element) {
  element.classList.toggle('selected');
}
