function urlToCookie(domain, toString) {
	var x
	chrome.cookies.getAll({"url": domain}, function (blah) {
		x = to_string(blah)										 
		document.getElementByID('cookieData').value = x
	}); 
};


