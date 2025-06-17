document.getElementById('formulario').addEventListener('submit', function(event) {
  event.preventDefault();

  const formData = new FormData(this);
  const cita = Object.fromEntries(formData.entries());

  const citas = JSON.parse(localStorage.getItem('citas')) || [];
  citas.push(cita);
  localStorage.setItem('citas', JSON.stringify(citas));

  alert('Cita guardada correctamente.');
  window.location.href = 'ver-citas.html';
});