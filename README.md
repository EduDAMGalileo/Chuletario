# Chuletario

Chuletas de referencia rápida para programación, bases de datos, sistemas y
lenguajes de marcas, etc... Son páginas HTML estáticas: no necesitan servidor,
conexión ni instalar nada. Basta con abrir `index.html` en el navegador.

## Estructura

```
chuletario/
├── index.html              portada con todos los temas
├── plantilla.html          punto de partida para una chuleta nueva
├── assets/
│   ├── chuletas.css        estilos comunes (colores, rejilla, impresión)
│   ├── chuletas.js         tema claro/oscuro y botón de copiar
│   └── favicon.svg
├── sistemas/               linux, vim, vim-config, nano, bash-script,
│                           servicios, tareas, logs; comandos
│                           (terminal-linux = índice, y comandos-archivos/
│                           -texto/-usuarios/-procesos/-paquetes/-red)
├── redes/                  osi, tcp-ip, subnetting-ipv4, ipv6, http,
│                           red-linux, red-clasica
├── hacking/                pentest, google-dorking, nmap, netcat, sqlmap,
│                           fuerza-bruta, fuzzing, shells
├── seguridad/              introduccion, cortafuegos, iptables, nftables,
│                           criptografia, firma-certificados, gpg
├── git/                    git, github
├── virtualizacion/         fundamentos, virtualbox, vagrant, docker
├── qa/                     fundamentos, unitarias, integracion,
│                           sistema-e2e
├── programacion/           fundamentos, pseudocodigo, entornos, eclipse,
│                           vscode, agile, cascada, y los lenguajes
├── java/                   sintaxis, arrays, strings, metodos, poo,
│                           excepciones, colecciones, streams, fechas,
│                           ficheros, entrada-salida, procesos, maven, junit
├── python/                 sintaxis
├── kotlin/                 sintaxis
├── php/                    sintaxis, cookies-sesiones
├── bases-datos/            introduccion, er-eer, relacional, postgresql;
│                           sql (índice, y sql-ddl/-dml/-consultas/-dcl/-tcl)
├── web/                    html, css
└── marcas/                 introduccion, dtd, xsd, xpath, xquery, json,
                            yaml, markdown
```

Cada tema con más de una chuleta tiene su propio `index.html`.

## Añadir una chuleta

1. Copia `plantilla.html` en la carpeta del tema con el nombre que quieras,
   por ejemplo `java/hilos.html`.
2. Cambia el título, el `data-tema` del `<body>`, las migas de pan y el `<h1>`.
3. Escribe las secciones. Cada una es un `<section class="tarjeta">` con un
   `id` (`s1`, `s2`...) y su enlace correspondiente en el índice.
4. Añade un enlace a la chuleta nueva en el `index.html` del tema, en la barra
   `nav-tema` de las chuletas hermanas y en la portada.

## Añadir un tema

1. Crea la carpeta y copia dentro un `index.html` de otro tema como modelo.
2. Añade el color del tema en `assets/chuletas.css`, en el apartado
   *Color de acento por tema*:

   ```css
   body[data-tema="redes"] { --acento: #2E7D32; }
   ```

3. Enlaza el tema desde la portada.

## Piezas que puedes usar dentro de una sección

| Elemento | Para qué sirve |
|---|---|
| `<table class="ref">` | tabla de dos columnas: término y explicación |
| `<figure class="codigo"><pre><code>` | ejemplo de código (el JS le añade el botón Copiar) |
| `<h3>` | subapartado dentro de una tarjeta |
| `<p class="nota">` | aclaración, sobre fondo amarillo |
| `<p class="aviso">` | error típico o advertencia, sobre fondo rojo |
| `<p class="txt">` | párrafo normal |
| `<div class="cols">` | columnas dentro de la banda superior |
| `<div class="pasos">` | secuencia de pasos numerados |

## Resaltado de sintaxis

No usa ninguna librería: los colores salen de unos `<span>` con estas clases,
definidas en `assets/chuletas.css`.

| Clase | Para |
|---|---|
| `tok-clave` | palabras reservadas |
| `tok-texto` | cadenas de texto |
| `tok-coment` | comentarios |
| `tok-numero` | números |
| `tok-tipo` | tipos y clases |
| `tok-funcion` | funciones |
| `tok-etiqueta` | etiquetas XML y HTML |
| `tok-atributo` | atributos |
| `tok-variable` | variables |
| `tok-operador` | operadores |

Si escribes un ejemplo a mano y no quieres colorearlo, no pasa nada: el bloque
se ve igual, en blanco y negro.

Recuerda escapar dentro de los ejemplos: `<` se escribe `&lt;`, `>` se escribe
`&gt;` y `&` se escribe `&amp;`.

## Imprimir

Todas las páginas tienen estilos de impresión: se ocultan la navegación y los
botones, y las secciones se reparten en tres columnas en A4.
