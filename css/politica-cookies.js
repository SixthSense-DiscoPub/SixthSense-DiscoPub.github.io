
  document.addEventListener('DOMContentLoaded', function () {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies');
    const rejectBtn = document.getElementById('reject-cookies');

    if (!localStorage.getItem('cookies-consent')) {
      banner.style.display = 'flex';
    }

    acceptBtn.addEventListener('click', function () {
      localStorage.setItem('cookies-consent', 'accepted');
      banner.style.display = 'none';
      // Aquí puedes cargar scripts de terceros si hace falta
    });

    rejectBtn.addEventListener('click', function () {
      localStorage.setItem('cookies-consent', 'rejected');
      banner.style.display = 'none';
    });
  });
