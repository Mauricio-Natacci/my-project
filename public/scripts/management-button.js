const selectDeleteButtons = document.querySelectorAll('.product-item .button-delete');

async function deleteItem(event) {
  const button = event.target;
  const id = button.dataset.productid;
  const csrfToken = button.dataset.csrf;
  
  const response = await fetch('/admin/products/' + id + '?_csrf=' + csrfToken, {
    method: 'DELETE'
  });

  button.parentElement.parentElement.parentElement.parentElement.remove();
}

for (const selectDeleteButton of selectDeleteButtons) {
  selectDeleteButton.addEventListener('click', deleteItem);
}

