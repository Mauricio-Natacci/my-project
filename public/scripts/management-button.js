const selectDeleteButtons = document.querySelectorAll('.product-item button');

function test() {
  console.log('testing')
}

for (const selectDeleteButton of selectDeleteButtons) {
  selectDeleteButton.addEventListener('click', test);
}