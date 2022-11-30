# qrcode-api

Generate QR Code image for your application.

## Usage

Provide a text to generate an code for and the size of the image as a query parameter. Each text will generate a unique `code`.

```
https://qr-service.vercel.app/api/code
```

You will receive a `png` image with a size of 500\*500px

![QR Code](https://qr-service.vercel.app/api/code)

### Text to encode

Add the `text` parameter (requires SVG):

```
https://qr-service.vercel.app/api/code?text=Duncan&size=200
```

![QR Code for Duncan](https://qr-service.vercel.app/api/code?text=Duncan&size=200)

### Custom Size

```
https://qr-service.vercel.app/api/code?size=120
https://qr-service.vercel.app/api/code?size=200
```

![QR Code for Duncan](https://qr-service.vercel.app/api/code?size=120)
![QR Code for Duncan](https://qr-service.vercel.app/api/code?size=200)
