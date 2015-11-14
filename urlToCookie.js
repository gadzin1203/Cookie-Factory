function urlToCookie(domain) {
  console.log(domain);
	chrome.cookies.getAll({"domain" : domain}, function (cookielist) {
    console.log(cookielist);
		document.getElementById('cookieData').value = toString(cookielist);
	}); 
};

function setCookie(url, cookiedata) {
  var cookies = fromString(cookiedata);
  for (var i = 0; i < cookies.length; i++) {
    var screened = {
      "url" : url,
      "name" : cookies[i].name,
      "value" : cookies[i].value,
      "domain" : cookies[i].domain,
      "path" : cookies[i].path,
      "secure" : cookies[i].secure,
      "expirationDate" : cookies[i].expirationDate,
      "storeId" : cookies[i].storeId
    };
    chrome.cookies.set(screened);
  }
}

