const form = document.querySelector('.login-form');

form.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    const { email, password } = event.target.elements;
    const info = {
        email: email.value.trim(),
        password: password.value.trim()
    }

    if (!info.email || !info.password) {
        alert('All form fields must be filled in');
        return;
      }
    console.log(info);
    event.target.reset()
    }
