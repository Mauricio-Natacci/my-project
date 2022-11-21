const selectUpdateButtons = document.querySelectorAll('');

async function updateStatus() {
  
}

for (const selectUpdateButton of selectUpdateButtons) {
  selectUpdateButton.addEventListener('submit', updateStatus);
}

