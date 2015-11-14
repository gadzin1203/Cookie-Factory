document.addEventListener('DOMContentLoaded', function () {
  console.log("loading");
  var urlField = document.getElementById('url');
  var cookieDataField = document.getElementById('cookieData');
  var getCookiesButton = document.getElementById('getCookies');
  var setCookiesButton = document.getElementById('setCookies');

  getCookiesButton.addEventListener("click", function() {
    console.log("asdfkajfd");
    urlToCookie(urlField.value);
  });

  setCookiesButton.addEventListener("click", function() {
    console.log("fkjdgjkjfd");
    setCookie(urlField.value, cookieDataField.value);
  });
  console.log("loaded");
});

