imgsupport
==========

Detecting support for WebP, JPEG 2000, JPEG XR and SVG to supply the best image for the UA

## Install
Download/fork the script to your server.

Insert script before any ``<link>`` tag to css file, so browser will start to download right images.
```
<html>
  <head>
    <title>My Page</title>
    <script src="imgsupport.js"></script>
    ...
    <link rel="stylesheet" href="mystyles.css">
    ...
```

## What this script do?
Like modernizr, it injects one or a few CSS class names to the document element, e. g. ``<html>``, according to which image formats are supported by the browser:
* ``webp`` – if browser supports weppy, then this class will be added. Currently it's Chrome, Opera and all browseers based on Chromium engine.
* ``jp2`` – browser supports JPEG 2000. It's Safari for Mac OS X and all browsers for iOS (based on iOS WebKit).
* ``jpx`` – browser supports JPEG XR... Internet Explorer 9+ on Windows Vista+.
* ``svg`` – all modern browsers, but this class is set only if none of the above formats are supported. Currently it's Firefox only.
* ``png`` – if even SVG is not supported... fallback variant.
* Additionally are added classes for not supported formats: ``notwebp``, ``notjp2``, ``notjpx`` and ``notsvg``.

### Example results

Chrome
```
<html class="webp notjpx notjp2">
```

Safari
```
<html class="notwebp notjpx jp2">
```

Firefox
```
<html class="notwebp notjpx notjp2 svg">
```

## Usage
You can use css-cascade to specify what kind of image your browser must download:
```
.webp .myelem {
  background-image: url('myimage.webp');
}
.jpx .myelem {
  background-image: url('myimage.wdp');
}
.jp2 .myelem {
  background-image: url('myimage.jp2');
}
.svg .myelem {
  background-image: url('myimage.svg');
}
.png .myelem {
  background-image: url('myimage.png');
}
```
