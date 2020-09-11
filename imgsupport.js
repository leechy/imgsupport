(function(document) {
	var checkCount = 0,
		formatFound = false;

	function setHTMLClass(height, className) {
		checkCount++;
		if (height == 2) {
			formatFound = true;
			document.documentElement.className += ' ' + className;
		} else {
			document.documentElement.className += ' not' + className;
			if (checkCount == 4 && !formatFound) {
				if (document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")) {
					document.documentElement.className += ' svg';
				} else {
					document.documentElement.className += ' notsvg png';
				}
			}
		}
	}

	var AVIF = new Image();
	AVIF.onload = AVIF.onerror = function () {
		setHTMLClass(AVIF.height, 'avif');
	}
	AVIF.src = 'data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUEAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAF0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgS0AAAAAABNjb2xybmNseAACAAIAAIAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAGVtZGF0EgAKBzgAPtAgIAkyUBAAAPWc41TP///4gHBX9H8XVK7gGeDllq8TYARA+8Tfsv7L+zPE24eIoIzE0WhHbrqcrTK9VEgEG/hwgB5rdCbvP8g3KYPdV88CvPJnptgQ';
	
	var WebP = new Image();
	WebP.onload = WebP.onerror = function() {
		setHTMLClass(WebP.height, 'webp');
	};
	WebP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';

	var JPX = new Image();
	JPX.onload = JPX.onerror = function() {
		setHTMLClass(JPX.height, 'jpx');
	};
	JPX.src = 'data:image/vnd.ms-photo;base64,SUm8AQgAAAAFAAG8AQAQAAAASgAAAIC8BAABAAAAAQAAAIG8BAABAAAAAgAAAMC8BAABAAAAWgAAAMG8BAABAAAARgAAAAAAAAAkw91vA07+S7GFPXd2jckQV01QSE9UTwAZAMFxAAAAATAAoAAKAACgAAAQgCAIAAAEb/8AAQAAAQDCPwCAAAAAAAAAAAAAAAAAjkI/AIAAAAAAAAABIAA=';

	var JP2 = new Image();
	JP2.onload = JP2.onerror = function() {
		setHTMLClass(JP2.height, 'jp2');
	};
	JP2.src = 'data:image/jp2;base64,/0//UQAyAAAAAAABAAAAAgAAAAAAAAAAAAAABAAAAAQAAAAAAAAAAAAEBwEBBwEBBwEBBwEB/1IADAAAAAEAAAQEAAH/XAAEQED/ZAAlAAFDcmVhdGVkIGJ5IE9wZW5KUEVHIHZlcnNpb24gMi4wLjD/kAAKAAAAAABYAAH/UwAJAQAABAQAAf9dAAUBQED/UwAJAgAABAQAAf9dAAUCQED/UwAJAwAABAQAAf9dAAUDQED/k8+kEAGvz6QQAa/PpBABr994EAk//9k=';
})(window.sandboxApi && window.sandboxApi.parentWindow && window.sandboxApi.parentWindow.document || document);
