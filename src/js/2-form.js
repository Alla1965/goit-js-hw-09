const formData = {
  email: '',
  message: '',
};

function updateLocalStorage() {
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

document.addEventListener('DOMContentLoaded', () => {
  const savedData = JSON.parse(localStorage.getItem('feedback-form-state'));

  if (savedData) {
    formData.email = savedData.email;
    formData.message = savedData.message;

    document.querySelector('[name="email"]').value = formData.email;
    document.querySelector('[name="message"]').value = formData.message;
  }
});

document.querySelector('.feedback-form').addEventListener('input', event => {
  const { name, value } = event.target;

  if (name === 'email') {
    formData.email = value.trim();
  } else if (name === 'message') {
    formData.message = value.trim();
  }

  updateLocalStorage();
});

document.querySelector('.feedback-form').addEventListener('submit', event => {
  event.preventDefault();

  if (!formData.email || !formData.message) {
    alert('Заповніть всі поля');
    return;
  }

  console.log(formData);

  localStorage.removeItem('feedback-form-state');
  formData.email = '';
  formData.message = '';
  document.querySelector('[name="email"]').value = '';
  document.querySelector('[name="message"]').value = '';
});
