function addToCart() {
  document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' });
  const quantity = document.querySelector('#quantity');
  if (quantity) quantity.focus();
}

function submitOrder(event) {
  event.preventDefault();
  const form = event.target;
  const data = new FormData(form);
  const subject = encodeURIComponent('طلب رواية الدوّامة - ' + data.get('name'));
  const body = encodeURIComponent(
    `الاسم واللقب: ${data.get('name')}\n` +
    `الولاية: ${data.get('wilaya')}\n` +
    `البلدية أو الموقع: ${data.get('municipality')}\n` +
    `رقم الهاتف: ${data.get('phone')}\n` +
    `عدد النسخ: ${data.get('quantity')}\n` +
    `التوصيل: ${data.get('delivery') === 'home' ? 'للبيت' : 'للمكتب'}`
  );
  window.location.href = `mailto:nibelbourahmaniwiter@gmail.com?subject=${subject}&body=${body}`;
  form.reset();
  const success = document.querySelector('#successMessage');
  if (success) {
    success.style.display = 'block';
    success.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}

function submitComment(event) {
  event.preventDefault();
  const form = event.target;
  const fields = form.querySelectorAll('input, textarea');
  const [name, email, comment] = fields;
  const subject = encodeURIComponent('تعليق جديد على رواية الدوّامة');
  const body = encodeURIComponent(`الاسم: ${name.value}\nالبريد: ${email.value}\n\nالتعليق:\n${comment.value}`);
  window.location.href = `mailto:nibelbourahmaniwiter@gmail.com?subject=${subject}&body=${body}`;
  form.reset();
}
