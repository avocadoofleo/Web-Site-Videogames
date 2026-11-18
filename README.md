# PixelVault Gaming - Tienda Virtual

Proyecto web estático de una tienda virtual gamer para vender videojuegos digitales, gift cards y membresías premium.

## Cómo abrirlo en Visual Studio Code

1. Abre Visual Studio Code.
2. Entra a `Archivo > Abrir carpeta`.
3. Selecciona esta carpeta:
   `C:\Users\USUARIO\OneDrive\Documentos\Tienda Virtual`
4. Abre el archivo `index.html`.
5. Para verlo en el navegador tienes dos opciones:
   - Opción sencilla: doble clic en `index.html`.
   - Opción recomendada: instala la extensión `Live Server`, da clic derecho sobre `index.html` y elige `Open with Live Server`.

## Archivos principales

- `index.html`: estructura completa del sitio.
- `producto.html`: pagina individual para cada producto del catalogo.
- `checkout.html`: pantalla separada para finalizar compra.
- `css/styles.css`: colores, diseño responsive, tarjetas, hero, carrito y secciones visuales.
- `js/app.js`: catalogo de 15 productos, filtros, busqueda, paginas de producto, carrito, checkout y compra simulada.
- `assets/images/brand`: logo y banner principal.
- `assets/images/products`: imágenes de productos.
- `tools/generate-assets.ps1`: script para regenerar las imágenes del proyecto.
- `tools/generate-premium-hero.ps1`: script para regenerar el banner principal minimalista.

## Qué incluye

- Identidad de empresa: nombre, logo, slogan y estilo visual.
- Información ficticia: quiénes somos, misión, visión, filosofía, contacto y redes.
- Navegación: inicio, tienda, categorías, ofertas, novedades, nosotros, contacto, mi cuenta y carrito.
- Catálogo con 15 productos.
- Pagina individual para cada producto con imagen grande, plataforma, genero, precio y compra.
- Categorías: videojuegos, gift cards, membresías y bundles.
- Carrito funcional con cantidades, subtotal, IVA simulado y total.
- Checkout en pagina separada con metodos de pago y confirmacion de pedido.
- Métodos de pago simulados: PixelCard, Vault Wallet y transferencia.
- Formulario de contacto.
- Diseño responsive para computadora, tablet y celular.

## Cómo editar productos

1. Abre `js/app.js`.
2. Busca el arreglo `products`.
3. Cambia nombre, precio, descripción, categoría o imagen.
4. Guarda el archivo y recarga el navegador.

Tambien puedes cambiar `platform`, `genre` y `longDescription`; esos datos aparecen en la pagina individual de producto.

## Cómo cambiar colores

1. Abre `css/styles.css`.
2. Al inicio verás las variables dentro de `:root`.
3. Cambia valores como `--purple`, `--cyan`, `--pink`, `--green` o `--yellow`.
4. Guarda y recarga.

## Cómo cambiar el logo o banner

Reemplaza estos archivos por tus imágenes finales usando el mismo nombre:

- `assets/images/brand/pixelvault-logo.png`
- `assets/images/brand/hero-banner.png`

Así no tienes que modificar el HTML.

Si quieres regenerar el banner minimalista desde cero, abre PowerShell dentro del proyecto y ejecuta:

```powershell
powershell -ExecutionPolicy Bypass -File tools\generate-premium-hero.ps1
```
