(() => {
  const forms = document.querySelectorAll('.js-form');
  if (!forms) {
    return null;
  }
  async function handler(event) {
    event.preventDefault();
    const form = event.target;
    const response = await fetch(form.action, {
      method: 'GET'
    });
    form.outerHTML = await response.text();
  }
  forms.forEach((form) => {
    form.addEventListener('submit', handler);
  });
})()
