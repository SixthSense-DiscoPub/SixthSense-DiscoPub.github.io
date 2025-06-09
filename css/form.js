$(document).ready(function () {
    $('#contactForm').on('submit', function (e) {
      e.preventDefault();
      alert('¡Formulario enviado correctamente!');
      $(this)[0].reset(); // limpia los campos
    });
  });
