document.addEventListener('DOMContentLoaded', function () {
  var urlField = document.getElementById('url');
  var cookieDataField = document.getElementById('cookieData');
  var getCookiesButton = document.getElementById('getCookies');
  var setCookiesButton = document.getElementById('setCookies');

  getCookiesButton.addEventListener("click", function() {
    urlToCookie(urlField.value);
  });

  setCookiesButton.addEventListener("click", function() {
    setCookie(urlField.value, cookieDataField.value);
  });
});

