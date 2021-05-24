# imgsupport

Detecting support for AVIF, WebP, JPEG 2000, JPEG XR and SVG to supply the best image for the UA

## Install

Download/fork the script to your server.

Insert script before any `<link>` tag to css file, so browser will start to download right images.

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

Like modernizr, it injects one or a few CSS class names to the document element, e. g. `<html>`, according to which image formats are supported by the browser:

- `jxl` – if browser supports JPEG XL, then this class will be added. Currently it's Chrome and Firefox behind a flag.
- `avif` – if browser supports AVIF, then this class will be added. Currently it's available on Chrome and Opera (not Edge) and in Firefox it's still behind a flag.
- `webp` – it's already in all modern browsers. But be careful Safari started to support it not that long ago and it's available only in v14+ (BigSur, iOS14+).
- `jp2` – browser supports JPEG 2000. It's Safari for Mac OS X and all browsers for iOS (based on iOS WebKit).
- `jpx` – browser supports JPEG XR... Internet Explorer 9+ and old MS Edge till v18.
- `svg` – all modern browsers, but this class is set only if none of the above formats are supported. Currently it's Firefox only.
- `png` – if even SVG is not supported... fallback variant.
- Additionally are added classes if the format is not supported: `notjxl`, `notavif`, `notwebp`, `notjp2`, `notjpx` and `notsvg`.

### Example results

Chrome

```
<html class="notjxl avif webp notjpx notjp2">
```

Safari

```
<html class="notjxl notavif webp notjpx jp2">
```

Firefox

```
<html class="notjxl notavif webp notjpx notjp2 svg">
```

## Usage

You can use css-cascade to specify what kind of image your browser must download:

```
.jxl .myelem {
  background-image: url('myimage.jxl');
}
.avif.notjxl.notwebp .myelem {
  background-image: url('myimage.avif');
}
.webp.notjxl.notavif .myelem {
  background-image: url('myimage.webp');
}
.jpx.notavif.notwebp .myelem {
  background-image: url('myimage.wdp');
}
.jp2.notavif.notwebp .myelem {
  background-image: url('myimage.jp2');
}
.svg .myelem {
  background-image: url('myimage.svg');
}
.png .myelem {
  background-image: url('myimage.png');
}
```
