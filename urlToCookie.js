function urlToCookie(domain) {
	chrome.cookies.getAll({"url": domain}, function (cookielist) {
		document.getElementByID('cookieData').value = toString(cookielist);
	}); 
};

function setCookie(domain, cookiedata) {
  var cookies = fromString(cookiedata);
  for (var i = 0; i < cookies.length; i++) {
    chrome.cookies.set(cookies[i]);
  }
}

