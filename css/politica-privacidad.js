$(function () {
  if (!localStorage.getItem('privacy-consent')) {
    $('#privacy-banner').slideDown();
  }

  $('#accept-privacy').on('click', function () {
    localStorage.setItem('privacy-consent', 'accepted');
    $('#privacy-banner').slideUp();
  });
});
