const selectUpdateButtons = document.querySelectorAll('.orders-status form');

async function updateStatus(event) {
  event.preventDefault()
  const form = event.target;

  
  const formData = new FormData(form);
  const newStatus = formData.get('status');
  const orderId = formData.get('orderid');
  const csrfToken = formData.get('_csrf');

  let response

  try {
    response = await fetch(`/admin/orders/${orderId}`, {
      method: 'PATCH',
      body: JSON.stringify({
        newStatus: newStatus,
        _csrf: csrfToken
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
  } catch (error) {
    alert('Something went wrong!')
    return
  }

  
  if (!response.ok) {
    alert('Something went wrong!')
    return
  }

  const responseData = await response.json();
  
  form.parentElement.parentElement.querySelector('.order-status').textContent =
  responseData.newStatus

}

for (const selectUpdateButton of selectUpdateButtons) {
  selectUpdateButton.addEventListener('submit', updateStatus);
}

